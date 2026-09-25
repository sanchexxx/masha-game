// Безлик — высокий полупрозрачный чёрный дух в белой маске. Не ходит, а плывёт.
import * as THREE from 'three';
import { mat, mesh, G, joint } from './common.js';

export function buildNoFace() {
  const root = new THREE.Group();
  const model = new THREE.Group();
  root.add(model);

  const cloak = new THREE.MeshStandardMaterial({
    color: 0x0c0a12, roughness: 0.35, metalness: 0.1,
    transparent: true, opacity: 0.93, emissive: 0x160a24, emissiveIntensity: 0.6,
  });

  // Тело — токарная фигура: широкий низ, покатые плечи, купол головы
  const prof = [
    [0.0, 0.0], [0.5, 0.0], [0.58, 0.12], [0.56, 0.5], [0.5, 1.0], [0.46, 1.5],
    [0.43, 1.8], [0.42, 2.05], [0.38, 2.28], [0.28, 2.44], [0.12, 2.52], [0.0, 2.54],
  ].map(([r, y]) => new THREE.Vector2(r, y));
  const body = mesh(new THREE.LatheGeometry(prof, 32), cloak);
  model.add(body);

  // Маска
  const maskMat = mat(0xf3efe6, { roughness: 0.45 }).clone();   // своя у каждого Безлика (прозрачность при появлении)
  const A = 0.29, B = 0.36, C = 0.13, MY = 2.06, MZ = 0.30;
  model.add(mesh(G.sphere(1, 32, 24), maskMat, { y: MY, z: MZ, sx: A, sy: B, sz: C }));
  const onMask = (x, y) => {
    const k = 1 - (x * x) / (A * A) - (y * y) / (B * B);
    return MZ + C * Math.sqrt(Math.max(0, k)) - 0.004;
  };
  const decal = (x, y, sx, sy, m, rz = 0) => {
    const d = mesh(G.sphere(1, 16, 10), m, { x, y: MY + y, z: onMask(x, y), sx, sy, sz: 0.012, rz, shadow: false });
    d.lookAt(new THREE.Vector3(x * 2.2, MY + y * 1.4, 2));
    d.rotation.z += rz;
    model.add(d);
    return d;
  };
  const purple = mat(0x6f3f93, { roughness: 0.6 });
  const holeMat = new THREE.MeshStandardMaterial({ color: 0x050308, emissive: 0x5b2a8a, emissiveIntensity: 0, roughness: 1 });
  const eyes = [];
  for (const s of [-1, 1]) {
    eyes.push(decal(s * 0.1, 0.05, 0.05, 0.03, holeMat));
    decal(s * 0.1, 0.15, 0.028, 0.045, purple, s * 0.3);
    decal(s * 0.1, -0.07, 0.022, 0.075, purple);
  }
  decal(0, -0.2, 0.05, 0.012, mat(0x3b2a33));

  // Руки прячутся в тени, вытягиваются во время охоты
  const arms = [];
  for (const s of [-1, 1]) {
    const a = joint(s * 0.4, 1.55, 0.1);
    a.add(mesh(G.capsule(0.05, 0.7, 4, 8), cloak, { y: -0.4 }));
    a.add(mesh(G.sphere(0.07, 10, 8), cloak, { y: -0.8 }));
    a.rotation.z = s * 0.06;
    model.add(a);
    arms.push(a);
  }

  // Мягкое фиолетовое сияние за спиной
  const glowTex = radialTexture('rgba(150,90,220,0.55)', 'rgba(80,30,140,0)');
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.0 }));
  glow.scale.set(3.4, 4.2, 1);
  glow.position.set(0, 1.4, -0.2);
  model.add(glow);

  let hunt = 0;
  function update(dt, st) {
    const t = st.t;
    hunt = THREE.MathUtils.lerp(hunt, st.mode === 'hunt' ? 1 : 0, 1 - Math.exp(-dt * 4));
    model.position.y = 0.12 + Math.sin(t * 1.6) * 0.07;
    model.rotation.x = Math.min(0.22, st.speed * 0.028);
    model.rotation.z = Math.sin(t * 0.9) * 0.03;
    arms.forEach((a, i) => {
      const s = i ? 1 : -1;
      a.rotation.x = THREE.MathUtils.lerp(0.05, -1.35 + Math.sin(t * 5 + i) * 0.08, hunt);
      a.rotation.z = s * (0.06 + 0.1 * (1 - hunt));
    });
    holeMat.emissiveIntensity = hunt * (0.9 + Math.sin(t * 6) * 0.3);
    glow.material.opacity = (0.25 + hunt * 0.5) * (st.appear ?? 1);
    const ap = st.appear ?? 1;
    cloak.opacity = 0.93 * ap;
    maskMat.opacity = ap; maskMat.transparent = ap < 1;
    model.scale.set(0.6 + 0.4 * ap, ap, 0.6 + 0.4 * ap);
  }

  return { root, update, height: 2.5 };
}

export function radialTexture(inner, outer, size = 128) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner);
  g.addColorStop(1, outer);
  x.fillStyle = g;
  x.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
