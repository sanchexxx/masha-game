// Новая «Деревня духов» 130×130 м из 3D-моделей облака (assets/models/map, см. MAP_NOTES.md).
// Раскладка — layout.json: 631 вещь, стены и крыши, укрытия, лестницы, свет, речка, дорожки, старты.
// Если модели не загрузились — игра берёт прежнюю деревню из кода (map.js).
import * as THREE from 'three';
import { GLTFLoader } from 'jsm/loaders/GLTFLoader.js';
import { LITE, shrink, liteScene } from '../util/lite.js';
import { CollisionWorld } from './colliders.js?v=2026100901';
import { radialTexture } from '../characters/noface.js?v=2026100901';
import { nightSky } from './map.js?v=2026100901';

const BASE = '/assets/models/map/';
const VER = '2026110401';
let assets = null;          // { L: layout, scenes: {file: Object3D} }

export async function loadVillageAssets(timeoutMs = 25000) {
  if (assets) return true;
  try {
    const job = (async () => {
      const L = await (await fetch(`${BASE}layout.json?v=${VER}`)).json();
      const loader = new GLTFLoader();
      const files = [...new Set(L.instances.map(i => i.model))];
      const scenes = {};
      const pics = new Map();                 // tex/xxx.jpg → одна картинка на все файлы
      await Promise.all(files.map(async f => {
        const g = await loader.loadAsync(`${BASE}${f}?v=${VER}`);
        scenes[f] = g.scene;
        sharePictures(g, pics);
      }));
      shareMaterials(Object.values(scenes));
      for (const sc of Object.values(scenes)) liteScene(sc, 512, true);
      return { L, scenes };
    })();
    const timeout = new Promise((_, no) => setTimeout(() => no(new Error('timeout')), timeoutMs));
    assets = await Promise.race([job, timeout]);
    return true;
  } catch (e) {
    console.warn('Новая деревня не загрузилась, остаётся прежняя:', e?.message || e);
    return false;
  }
}

// Одна и та же картинка (tex/map_wood.jpg) в разных файлах грузится заново — оставляем первую.
function sharePictures(gltf, pics) {
  const { json, associations } = gltf.parser;
  gltf.scene.traverse(o => {
    if (!o.isMesh) return;
    for (const m of [].concat(o.material)) for (const k in m) {
      const t = m[k], a = t?.isTexture && associations.get(t);
      const uri = a && json.images?.[json.textures?.[a.textures]?.source]?.uri;
      if (!uri) continue;
      if (!pics.has(uri)) pics.set(uri, t.source);
      else if (t.source !== pics.get(uri)) { t.source = pics.get(uri); t.needsUpdate = true; }
    }
  });
}

// Одинаковые материалы (Wood, Roof…) в разных файлах — один материал: меньше отрисовок и памяти.
// Материалы домов с запечёнными тенями («Wood@house_tea») у каждой модели свои.
function shareMaterials(roots) {
  const byName = new Map();
  for (const root of roots) root.traverse(o => {
    if (!o.isMesh) return;
    const m = o.material;
    if (!m.name || m.name.includes('@')) return;
    if (!byName.has(m.name)) byName.set(m.name, m);
    o.material = byName.get(m.name);
  });
  for (const m of byName.values()) {
    for (const k of ['map', 'normalMap']) if (m[k]) { m[k].wrapS = m[k].wrapT = THREE.RepeatWrapping; m[k].anisotropy = 4; }
  }
}

export function buildVillage(scene, { isMobile }) {
  if (!assets) return null;
  const { L, scenes } = assets;
  const half = L.half;
  const world = new CollisionWorld(half);
  world.theme = 'village';
  world.paths = L.roads.map(r => r.pts);
  const moonLight = nightSky(scene, isMobile);
  scene.fog.density = 0.016;                 // карта больше — туман чуть реже

  const stat = new THREE.Group();            // всё неподвижное — потом склеим по материалам
  scene.add(stat);
  const keep = [];                            // то, что двигается или меняет прозрачность

  // ---------- Земля, дорожки, речка ----------
  const tex = name => {
    const t = new THREE.TextureLoader().load(`${BASE}tex/${name}?v=${VER}`, t => shrink(t, 512));
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = name.endsWith('_n.jpg') ? THREE.NoColorSpace : THREE.SRGBColorSpace;
    return t;
  };
  const rep = (t, n) => { t = t.clone(); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(n, n); t.needsUpdate = true; return t; };
  const grass = new THREE.Mesh(new THREE.PlaneGeometry(half * 2 + 70, half * 2 + 70),
    new THREE.MeshStandardMaterial({ map: rep(tex('map_grass.jpg'), 34), normalMap: LITE ? null : rep(tex('map_grass_n.jpg'), 34), roughness: 1, color: 0xb8c4b0 }));
  grass.rotation.x = -Math.PI / 2;
  grass.receiveShadow = true;
  scene.add(grass);
  const stoneMat = new THREE.MeshStandardMaterial({ map: tex('map_stone.jpg'), normalMap: LITE ? null : tex('map_stone_n.jpg'), roughness: 0.95, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
  for (const rd of L.roads) ribbon(stat, rd.pts, rd.w, stoneMat, 0.02);
  const R = L.river;
  const bankMat = new THREE.MeshStandardMaterial({ color: 0x2a2a22, roughness: 1, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  const waterMat = new THREE.MeshStandardMaterial({ map: tex('map_water.jpg'), color: 0x9fc8e0, roughness: 0.12, metalness: 0.1, transparent: true, opacity: 0.86, depthWrite: false });
  ribbon(stat, R.points, R.width + 1.6, bankMat, 0.025);
  const water = new THREE.Group();
  ribbon(water, R.points, R.width, waterMat, R.level);
  scene.add(water);

  // Речка — ломаная линия: вода там, где до неё ближе половины ширины
  const zone = { level: R.level, bottom: R.bottom };
  world.waterZones = [zone];
  world.waterAt = (x, z) => distToLine(R.points, x, z) < R.width / 2 ? zone : null;
  world.inWater = (x, z) => !!world.waterAt(x, z);
  const groundAt = world.groundAt.bind(world);
  world.groundAt = (x, z, r, maxTop) => {
    const g = groundAt(x, z, r, maxTop);
    return g <= 0.25 && world.waterAt(x, z) ? R.bottom : g;     // мосты и камни в воде остаются опорой
  };

  // ---------- Модели ----------
  // Срез этажей: когда герой в доме, у этого дома не рисуем всё выше потолка его этажа —
  // верхний этаж и крыша не мельтешат перед камерой (вид как в кукольном домике).
  const cuts = new Map();               // модель дома → плоскость среза
  for (const b of L.buildings || []) if (!cuts.has(b.model)) cuts.set(b.model, new THREE.Plane(new THREE.Vector3(0, -1, 0), 1e5));
  const crowns = [];                  // кроны, в которые можно залезть: прозрачнеют, когда в них камера
  let wheel = null;
  for (const it of L.instances) {
    if (isMobile && it.mobile === false) continue;
    const src = scenes[it.model];
    let o;
    if (it.node) {
      const n = src.getObjectByName(it.node);
      if (!n) continue;
      o = n.clone();
      o.position.set(0, 0, 0); o.rotation.set(0, 0, 0); o.scale.set(1, 1, 1);
    } else o = src.clone();
    const g = new THREE.Group();
    g.add(o);
    g.position.set(it.x, it.y || 0, it.z);
    g.rotation.y = (it.rotY || 0) * Math.PI / 180;
    const s = it.scale || 1;
    g.scale.set(s * (it.scaleX || 1), s, s);
    const small = it.model === 'props.gltf';
    g.traverse(m => { if (m.isMesh) { m.castShadow = !small; m.receiveShadow = true; } });
    const fade = L.crownFade.find(f => f.model === it.model && Math.hypot(f.x - it.x, f.z - it.z) < 0.5);
    if (fade) {
      const crown = g.getObjectByName('Crown');
      if (crown) {
        const mats = [];
        crown.traverse(m => {
          if (!m.isMesh) return;
          m.material = m.material.clone(); m.material.transparent = true; m.material.userData.alphaTest = m.material.alphaTest;
          m.userData.keep = true; mats.push(m.material);
        });
        crowns.push({ ...fade, mats, k: 1 });
      }
    }
    const cut = cuts.get(it.model);
    if (cut) {
      const tag = '@' + it.model.replace('.gltf', '');
      g.traverse(m => { if (m.isMesh && m.material.name?.endsWith(tag)) m.material.clippingPlanes = [cut]; });
    }
    const ww = g.getObjectByName('WaterWheel');
    if (ww) { ww.traverse(m => { m.userData.keep = true; }); wheel = ww; }
    stat.add(g);
  }

  // ---------- Столкновения ----------
  for (const c of L.colliders) addCollider(world, c, L.colliders);
  for (const h of L.hides) world.addBush(h.x, h.z, h.r, h.kind, h.y ?? null);
  for (const l of L.ladders) world.addLadder(l.x, l.z, l.nx, l.nz, l.w, l.top);
  // граница: забор на ±fence
  for (const s of [-1, 1]) {
    world.addBox(0, s * (L.fence + 0.4), half * 2, 0.6, 3, { sight: false });
    world.addBox(s * (L.fence + 0.4), 0, 0.6, half * 2, 3, { sight: false });
  }

  // Невидимые «стены для камеры»: стены домов и крыши (камера подъезжает ближе)
  const cameraBlockers = [];
  const blockMat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
  for (const b of world.boxes) {
    if (b.topAt && !b.bottomAt) { /* крыша */ } else if (b.top - b.bottom < 1.8 || Math.max(b.maxX - b.minX, b.maxZ - b.minZ) < 1.2 || b.bottomAt) continue;
    const top = b.topAt ? b.top - 0.6 : b.top;
    const m = new THREE.Mesh(new THREE.BoxGeometry(b.maxX - b.minX, top - b.bottom, b.maxZ - b.minZ), blockMat);
    m.position.set((b.minX + b.maxX) / 2, (top + b.bottom) / 2, (b.minZ + b.maxZ) / 2);
    m.updateMatrixWorld(true);
    cameraBlockers.push(m);
  }

  // ---------- Свет: тёплые пятна у всех фонарей и окон, настоящие лампы — у ближайших ----------
  const lanternSpots = L.lights.map(l => new THREE.Vector3(l.x, l.y, l.z));
  const glowGeo = new THREE.BufferGeometry().setFromPoints(lanternSpots);
  const glow = new THREE.Points(glowGeo, new THREE.PointsMaterial({
    map: radialTexture('rgba(255,190,110,0.85)', 'rgba(255,140,40,0)'), size: 2.6, sizeAttenuation: true,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  scene.add(glow);
  const pl = [];
  for (let i = 0; i < (isMobile ? 2 : 5); i++) { const p = new THREE.PointLight(0xffa04a, 18, 12, 1.8); scene.add(p); pl.push(p); }
  const focus = new THREE.Vector3(0, 0, 0);
  function updateLights(center) {
    focus.copy(center);
    const sorted = lanternSpots.slice().sort((a, b) => a.distanceToSquared(center) - b.distanceToSquared(center));
    pl.forEach((p, i) => { if (sorted[i]) p.position.copy(sorted[i]); });
    moonLight.position.set(center.x - 18, 30, center.z - 14);
    moonLight.target.position.set(center.x, 0, center.z);
  }

  // Крона прозрачнеет, когда в неё зашла камера; водяное колесо бани крутится
  function updateVisuals(t, cam) {
    if (wheel) wheel.rotation.x = -t * 0.6;
    for (const p of cuts.values()) p.constant = 1e5;
    for (const b of L.buildings || []) for (const lv of b.levels) {
      if (Math.abs(focus.x - lv.x) < lv.w / 2 + 0.3 && Math.abs(focus.z - lv.z) < lv.d / 2 + 0.3
        && focus.y > lv.y - 0.8 && focus.y < lv.ceiling - 0.2) cuts.get(b.model).constant = lv.ceiling - 0.05;
    }
    if (!cam) return;
    for (const c of crowns) {
      const inside = Math.hypot(cam.x - c.x, cam.z - c.z) < c.r && cam.y > c.bottom - 2;
      c.k += ((inside ? 0.2 : 1) - c.k) * 0.2;
      for (const m of c.mats) {
        m.opacity = c.k;
        m.depthWrite = c.k > 0.95;
        m.alphaTest = c.k > 0.95 ? m.userData.alphaTest : Math.min(m.userData.alphaTest, 0.05);
      }
    }
  }

  const stats = mergeModels(stat);
  const S = L.spawns;
  return {
    stats, world, cameraBlockers, bushMeshes: [], updateLights, updateVisuals,
    playerSpawn: new THREE.Vector3(S.playerSpawn[0], 0, S.playerSpawn[1]),
    botSpawns: S.botSpawns,
    ghostSpawn: new THREE.Vector3(S.ghostSpawns[0][0], 0, S.ghostSpawns[0][1]),
    ghostSpawns: S.ghostSpawns,
  };
}

// ---------- Столкновения из layout.json ----------
const RAD = Math.PI / 180;
function addCollider(world, c, all) {
  const bottom = c.bottom ?? 0;
  switch (c.type) {
    case 'box': {
      if (c.relative === 'deck') {            // перила на мосту: стоят на настиле
        const arch = all.find(a => a.type === 'arch' && Math.hypot(a.x - c.x, a.z - c.z) < Math.max(a.w, a.d));
        if (arch) {
          const deck = archTop(arch);
          world.addBox(c.x, c.z, c.w, c.d, c.h, { topAt: (x, z) => deck(x, z, true) + c.h, bottomAt: (x, z) => deck(x, z, true), sight: false, nav: false });
          return;
        }
      }
      world.addBox(c.x, c.z, c.w, c.d, c.h, { bottom, sight: c.sight });
      return;
    }
    case 'circle':
      world.addCircle(c.x, c.z, c.r, c.h, { bottom, sight: c.sight, platform: !!c.platform });
      return;
    case 'roof':
      world.addRoof(c.x, c.z, c.w, c.d, c.eave, c.ridge, c.along);
      return;
    case 'arch':
    case 'sag': {
      // настил моста: верх по формуле вдоль пролёта, снизу пусто (под мостом проходят)
      const top = c.type === 'arch' ? archTop(c) : sagTop(c);
      const a = (c.rotY || 0) * RAD, cs = Math.abs(Math.cos(a)), sn = Math.abs(Math.sin(a));
      const W = c.w * cs + c.d * sn, D = c.w * sn + c.d * cs;      // охватывающий прямоугольник
      const peak = c.type === 'arch' ? c.y + c.peak : c.y;
      world.addBox(c.x, c.z, W, D, peak, {
        topAt: (x, z) => top(x, z), bottomAt: (x, z) => top(x, z) - c.thickness, sight: false, nav: false,
      });
      if (c.type === 'sag') for (const s of [-1, 1]) {     // перила подвесного моста
        const rx = c.x + s * (c.w / 2) * Math.cos(a), rz = c.z - s * (c.w / 2) * Math.sin(a);
        world.addBox(rx, rz, cs > 0.5 ? 0.15 : c.d, cs > 0.5 ? c.d : 0.15, c.y + 1, { topAt: (x, z) => top(x, z, true) + 1, bottomAt: (x, z) => top(x, z, true), sight: false, nav: false });
      }
      return;
    }
  }
}

// Координаты вдоль моста: u — поперёк, v — вдоль пролёта (по местной оси along)
function local(c, x, z) {
  const a = (c.rotY || 0) * RAD, dx = x - c.x, dz = z - c.z;
  const lx = dx * Math.cos(a) - dz * Math.sin(a), lz = dx * Math.sin(a) + dz * Math.cos(a);
  return c.along === 'x' ? [lz, lx] : [lx, lz];
}
function archTop(c) {
  return (x, z, anyU = false) => {
    const [u, v] = local(c, x, z);
    if ((!anyU && Math.abs(u) > c.w / 2) || Math.abs(v) > c.d / 2) return -Infinity;
    const k = v / (c.d / 2);
    return c.y + c.endY + (c.peak - c.endY) * (1 - k * k);
  };
}
function sagTop(c) {
  return (x, z, anyU = false) => {
    const [u, v] = local(c, x, z);
    if ((!anyU && Math.abs(u) > c.w / 2) || Math.abs(v) > c.d / 2) return -Infinity;
    const k = 2 * v / c.d;
    return c.y - c.sag * (1 - k * k);
  };
}

function distToLine(pts, x, z) {
  let best = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
    const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz;
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / l2));
    best = Math.min(best, Math.hypot(x - ax - dx * t, z - az - dz * t));
  }
  return best;
}

// Полоса по ломаной (дорожка, речка) с круглыми стыками
function ribbon(parent, pts, w, material, y) {
  const geos = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
    const len = Math.hypot(bx - ax, bz - az);
    const g = new THREE.PlaneGeometry(w, len);
    const uv = g.attributes.uv;
    for (let k = 0; k < uv.count; k++) uv.setXY(k, uv.getX(k) * w / 3, uv.getY(k) * len / 3);
    g.rotateX(-Math.PI / 2);
    g.rotateY(Math.atan2(bx - ax, bz - az));
    g.translate((ax + bx) / 2, y, (az + bz) / 2);
    geos.push(g);
  }
  for (const [x, z] of pts) {
    const g = new THREE.CircleGeometry(w / 2, 20);
    const uv = g.attributes.uv;
    for (let k = 0; k < uv.count; k++) uv.setXY(k, uv.getX(k) * w / 3, uv.getY(k) * w / 3);
    g.rotateX(-Math.PI / 2);
    g.translate(x, y, z);
    geos.push(g);
  }
  for (const g of geos) { const m = new THREE.Mesh(g, material); m.receiveShadow = true; parent.add(m); }
}

// Склейка всего неподвижного по материалу (с запечёнными тенями — вторая развёртка uv1)
function mergeModels(root) {
  const groups = new Map();
  const victims = [];
  root.updateMatrixWorld(true);
  root.traverse(o => {
    if (!o.isMesh || o.userData.keep) return;
    const key = o.material.uuid + (o.castShadow ? ':s' : ':n');
    if (!groups.has(key)) groups.set(key, { material: o.material, cast: o.castShadow, geos: [] });
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    groups.get(key).geos.push(g);
    victims.push(o);
  });
  for (const o of victims) o.parent.remove(o);
  let calls = 0;
  for (const { material, cast, geos } of groups.values()) {
    const names = ['position', 'normal', 'uv', ...(material.aoMap ? ['uv1'] : [])];
    const total = geos.reduce((n, g) => n + g.attributes.position.count, 0);
    const geo = new THREE.BufferGeometry();
    for (const name of names) {
      const size = name === 'position' || name === 'normal' ? 3 : 2;
      const arr = new Float32Array(total * size);
      let off = 0;
      for (const g of geos) {
        const a = g.attributes[name];
        if (a) arr.set(a.array, off * size);
        off += g.attributes.position.count;
      }
      geo.setAttribute(name, new THREE.BufferAttribute(arr, size));
    }
    for (const g of geos) g.dispose();
    geo.computeBoundingSphere();
    const m = new THREE.Mesh(geo, material);
    m.castShadow = cast; m.receiveShadow = true; m.matrixAutoUpdate = false;
    root.add(m);
    calls++;
  }
  return { merged: victims.length, calls };
}
