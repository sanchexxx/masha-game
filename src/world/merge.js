// Склейка неподвижных мешей в несколько больших по материалу.
// Сотни отдельных объектов = сотни вызовов отрисовки, телефон этого не любит.
import * as THREE from 'three';

export function mergeStatic(root, skip = () => false) {
  const groups = new Map();
  const victims = [];
  root.updateMatrixWorld(true);
  root.traverse(o => {
    if (!o.isMesh || o.userData.keep || skip(o)) return;
    if (!(o.material instanceof THREE.MeshStandardMaterial)) return;
    const key = o.material.uuid + (o.castShadow ? ':s' : ':n');
    if (!groups.has(key)) groups.set(key, { material: o.material, cast: o.castShadow, geos: [] });
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const name of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(name)) g.deleteAttribute(name);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    g.applyMatrix4(o.matrixWorld);
    groups.get(key).geos.push(g);
    victims.push(o);
  });
  for (const o of victims) o.parent.remove(o);

  let calls = 0;
  for (const { material, cast, geos } of groups.values()) {
    const total = geos.reduce((n, g) => n + g.attributes.position.count, 0);
    const pos = new Float32Array(total * 3), nor = new Float32Array(total * 3), uv = new Float32Array(total * 2);
    let off = 0;
    for (const g of geos) {
      pos.set(g.attributes.position.array, off * 3);
      nor.set(g.attributes.normal.array, off * 3);
      uv.set(g.attributes.uv.array, off * 2);
      off += g.attributes.position.count;
      g.dispose();
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.computeBoundingSphere();
    const m = new THREE.Mesh(geo, material);
    m.castShadow = cast;
    m.receiveShadow = true;
    m.matrixAutoUpdate = false;
    root.add(m);
    calls++;
  }
  return { merged: victims.length, calls };
}
