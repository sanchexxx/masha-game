// Общие кирпичики для персонажей: материалы, простые формы, текстуры из canvas.
import * as THREE from 'three';

const matCache = new Map();

export function mat(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.72,
    metalness: opts.metalness ?? 0,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 1,
    transparent: opts.opacity !== undefined && opts.opacity < 1,
    opacity: opts.opacity ?? 1,
    flatShading: !!opts.flat,
    side: opts.side ?? THREE.FrontSide,
    map: opts.map ?? null,
  });
  matCache.set(key, m);
  return m;
}

export function mesh(geo, material, { x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0, shadow = true } = {}) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  m.rotation.set(rx, ry, rz);
  m.castShadow = shadow;
  m.receiveShadow = false;
  return m;
}

export const G = {
  sphere: (r = 1, w = 24, h = 16) => new THREE.SphereGeometry(r, w, h),
  capsule: (r, len, seg = 6, rad = 12) => new THREE.CapsuleGeometry(r, len, seg, rad),
  cyl: (rt, rb, h, seg = 20, open = false) => new THREE.CylinderGeometry(rt, rb, h, seg, 1, open),
  box: (w, h, d) => new THREE.BoxGeometry(w, h, d),
  cone: (r, h, seg = 20) => new THREE.ConeGeometry(r, h, seg),
  torus: (r, t, rs = 10, ts = 24, arc = Math.PI * 2) => new THREE.TorusGeometry(r, t, rs, ts, arc),
};

// Сустав: пустая группа в точке вращения, внутри — меш, свисающий вниз.
export function joint(x, y, z) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  return g;
}

export function canvasTexture(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// Глаз «как в аниме»: тёмный овал + два блика.
export function animeEye(size = 0.07, color = 0x2a1a14) {
  const g = new THREE.Group();
  const iris = mesh(G.sphere(1, 16, 12), mat(color, { roughness: 0.3 }), { sx: size * 0.8, sy: size, sz: size * 0.35, shadow: false });
  const hi1 = mesh(G.sphere(1, 8, 6), mat(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.6 }), { x: size * 0.25, y: size * 0.35, z: size * 0.3, sx: size * 0.28, sy: size * 0.28, sz: size * 0.1, shadow: false });
  const hi2 = mesh(G.sphere(1, 8, 6), mat(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.6 }), { x: -size * 0.25, y: -size * 0.35, z: size * 0.3, sx: size * 0.14, sy: size * 0.14, sz: size * 0.08, shadow: false });
  g.add(iris, hi1, hi2);
  return g;
}

// Пушистая сфера: шум по вершинам, чтобы силуэт был «меховой».
export function fluffySphere(r, detail = 3, amp = 0.08, seed = 1, smooth = true) {
  const geo = new THREE.IcosahedronGeometry(r, detail);
  const p = geo.attributes.position;
  const v = new THREE.Vector3();
  const keys = [];
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    // Шум зависит только от точки: одинаковые вершины соседних треугольников сдвигаются одинаково
    keys.push(`${v.x.toFixed(4)},${v.y.toFixed(4)},${v.z.toFixed(4)}`);
    const u = v.clone().normalize();
    const n = Math.sin(u.x * 9.1 + seed) * Math.cos(u.y * 7.3 + seed * 2) * Math.sin(u.z * 8.7 + seed * 3)
      + 0.5 * Math.sin(u.x * 23 + u.y * 17 + seed * 5) * Math.cos(u.z * 19 - seed);
    v.multiplyScalar(1 + n * amp);
    p.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  if (smooth) {
    // Сглаживаем нормали по общим вершинам, иначе мех выглядит «мятой бумагой»
    const nrm = geo.attributes.normal;
    const acc = new Map();
    for (let i = 0; i < p.count; i++) {
      const a = acc.get(keys[i]) || [0, 0, 0];
      a[0] += nrm.getX(i); a[1] += nrm.getY(i); a[2] += nrm.getZ(i);
      acc.set(keys[i], a);
    }
    for (let i = 0; i < p.count; i++) {
      const a = acc.get(keys[i]);
      const l = Math.hypot(a[0], a[1], a[2]) || 1;
      nrm.setXYZ(i, a[0] / l, a[1] / l, a[2] / l);
    }
  }
  return geo;
}

// Стандартная «походка» для двуногих: качаем ноги/руки от фазы шага.
export function walkCycle(rig, st, dt, { stride = 0.9, armSwing = 0.7, bob = 0.05, freq = 1 } = {}) {
  const speed = st.speed;
  const moving = Math.min(1, speed / 4);
  rig.phase = (rig.phase || 0) + dt * (4 + speed * 1.15) * freq * (moving > 0.05 ? 1 : 0);
  const s = Math.sin(rig.phase);
  const blend = rig.blend = THREE.MathUtils.lerp(rig.blend || 0, moving, 1 - Math.exp(-dt * 10));
  const air = st.grounded ? 0 : 1;
  rig.air = THREE.MathUtils.lerp(rig.air || 0, air, 1 - Math.exp(-dt * 12));

  const legA = s * stride * blend;
  if (rig.legL) rig.legL.rotation.x = THREE.MathUtils.lerp(legA, -0.5, rig.air);
  if (rig.legR) rig.legR.rotation.x = THREE.MathUtils.lerp(-legA, 0.35, rig.air);
  if (rig.armL) {
    rig.armL.rotation.x = THREE.MathUtils.lerp(-s * armSwing * blend, -2.4, rig.air * 0.8);
    rig.armL.rotation.z = THREE.MathUtils.lerp(0.12, 0.5, rig.air);
  }
  if (rig.armR) {
    rig.armR.rotation.x = THREE.MathUtils.lerp(s * armSwing * blend, -2.4, rig.air * 0.8);
    rig.armR.rotation.z = THREE.MathUtils.lerp(-0.12, -0.5, rig.air);
  }
  if (rig.body) {
    const idle = Math.sin(st.t * 2.2) * 0.012 * (1 - blend);
    rig.body.position.y = rig.bodyY + Math.abs(Math.cos(rig.phase)) * bob * blend + idle;
    rig.body.rotation.x = 0.12 * blend * Math.min(1, speed / 7) - rig.air * 0.1;
  }
  if (rig.head) rig.head.rotation.x = -0.08 * blend + Math.sin(st.t * 1.7) * 0.02;
}

// Приземление: короткое «сплющивание».
export function squash(root, st, dt) {
  root.userData.sq = root.userData.sq ?? 0;
  if (st.landed) root.userData.sq = Math.min(0.22, 0.06 + Math.abs(st.landSpeed) * 0.012);
  root.userData.sq = THREE.MathUtils.lerp(root.userData.sq, 0, 1 - Math.exp(-dt * 12));
  const k = root.userData.sq;
  root.scale.set(1 + k * 0.6, 1 - k, 1 + k * 0.6);
}
