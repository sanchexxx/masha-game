// Три Брата — один герой с тремя характерами: общий плащ, три живых лица,
// боковые фонари и холодные духи. Геометрия собирается из тех же простых форм,
// что и остальные герои, без внешней 3D-модели и тяжёлых мобильных шейдеров.
import * as THREE from 'three';
import { mat, mesh, G, joint, canvasTexture, walkCycle, swimCycle, squash } from './common.js?v=2026100901';

const orbGeo = G.sphere(1, 16, 12);
const smallOrbGeo = G.sphere(1, 10, 8);
const cylinder = (a, b, h, n = 12) => G.cyl(a, b, h, n);

export function buildBrothers() {
  const root = new THREE.Group();
  const model = new THREE.Group();
  root.add(model);
  const skin = [0xe7b08d, 0xd99a77, 0xf0bc98].map(color => mat(color, { roughness: 0.9 }));
  const blush = mat(0xc96f67, { roughness: 1 });
  const hair = mat(0x211816, { roughness: 0.93 });
  const hairEdge = mat(0x392421, { roughness: 1 });
  const eyes = mat(0xffe5d5, { roughness: 0.45 });
  const pupils = mat(0x201817, { roughness: 0.35 });
  const coat = mat(0x2a203c, { roughness: 0.98 });
  const coatLight = mat(0x493258, { roughness: 0.96 });
  const coatEdge = mat(0x1b1729, { roughness: 0.95 });
  const rope = mat(0x9a704a, { roughness: 0.95 });
  const metal = mat(0x91683f, { roughness: 0.4, metalness: 0.55 });
  const flame = mat(0xffcf79, { roughness: 0.3, emissive: 0xffa83e, emissiveIntensity: 2.7 });
  const wispMat = mat(0xc4e4ff, { emissive: 0x4f9cff, emissiveIntensity: 2.5, roughness: 0.35 });
  const wispEyes = mat(0x27436c, { roughness: 0.7 });
  const rig = { bodyY: 0.5 };
  const addOrb = (parent, material, x, y, z, sx, sy, sz, shadow = true) => {
    const o = mesh(orbGeo, material, { x, y, z, sx, sy, sz, shadow });
    parent.add(o);
    return o;
  };

  // Широкие ботинки и короткие, тяжёлые ноги.
  for (const s of [-1, 1]) {
    const leg = joint(s * 0.34, 0.52, 0);
    leg.add(mesh(cylinder(0.19, 0.23, 0.53), coatEdge, { y: -0.22 }));
    addOrb(leg, coatEdge, 0, -0.48, 0.13, 0.27, 0.15, 0.36);
    leg.add(mesh(G.box(0.38, 0.06, 0.48), metal, { y: -0.57, z: 0.14 }));
    model.add(leg);
    if (s < 0) rig.legR = leg; else rig.legL = leg;
  }

  const body = joint(0, rig.bodyY, 0);
  rig.body = body;
  model.add(body);
  body.add(mesh(cylinder(0.56, 0.72, 1.15, 18), coat, { y: 0.55 }));
  addOrb(body, coatLight, 0, 0.92, -0.04, 0.65, 0.46, 0.46);
  // Неровные подолы, швы и кожаный пояс делают силуэт читаемым сзади.
  for (let i = 0; i < 10; i++) {
    const a = i / 10 * Math.PI * 2;
    body.add(mesh(G.cone(0.13 + (i % 3) * 0.02, 0.35 + (i % 4) * 0.04, 5), i % 3 ? coat : coatLight,
      { x: Math.sin(a) * 0.58, y: 0.04, z: Math.cos(a) * 0.42, ry: a, rz: Math.sin(a) * 0.15 }));
  }
  body.add(mesh(G.torus(0.57, 0.065, 8, 28), rope, { y: 0.55, rx: Math.PI / 2, sy: 0.8 }));
  for (const s of [-1, 1]) {
    body.add(mesh(G.capsule(0.035, 0.68, 3, 6), rope, { x: s * 0.28, y: 0.72, z: 0.43, rz: s * 0.24 }));
    addOrb(body, metal, s * 0.33, 0.26, 0.43, 0.07, 0.08, 0.06);
  }
  const spiral = canvasTexture(128, 128, (c, w, h) => {
    c.clearRect(0, 0, w, h);
    c.strokeStyle = '#ab74d2'; c.lineWidth = 13; c.lineCap = 'round';
    c.beginPath();
    for (let i = 0; i <= 80; i++) {
      const t = i / 80, a = t * Math.PI * 5.2, r = 4 + t * 47;
      const x = w / 2 + Math.cos(a) * r, y = h / 2 + Math.sin(a) * r;
      if (!i) c.moveTo(x, y); else c.lineTo(x, y);
    }
    c.stroke();
  });
  body.add(mesh(new THREE.PlaneGeometry(0.48, 0.48), new THREE.MeshBasicMaterial({ map: spiral, transparent: true, side: THREE.DoubleSide }),
    { y: 0.54, z: 0.47, shadow: false }));

  // Три головы: нижний брат смотрит вперёд, средний чуть вправо, верхний влево.
  const heads = [], mouths = [];
  for (let i = 0; i < 3; i++) {
    const size = [0.34, 0.29, 0.27][i];
    const h = joint([0, 0.04, -0.04][i], [1.27, 1.76, 2.2][i], [0.12, -0.05, -0.12][i]);
    body.add(h); heads.push(h);
    addOrb(h, skin[i], 0, 0, 0, size * 1.05, size * 1.02, size * 0.91);
    // Полулысые макушки и густые волосы по бокам.
    for (const s of [-1, 1]) {
      addOrb(h, hair, s * size * 0.85, 0.12, -0.09, size * 0.23, size * 0.43, size * 0.36);
      addOrb(h, skin[i], s * size * 1.04, -0.02, -0.01, size * 0.18, size * 0.22, size * 0.12);
      addOrb(h, blush, s * size * 0.56, -0.13, size * 0.66, size * 0.24, size * 0.13, size * 0.035, false);
      addOrb(h, eyes, s * size * 0.42, 0.07, size * 0.82, size * 0.19, size * 0.15, size * 0.065, false);
      addOrb(h, pupils, s * size * (i === 1 ? 0.32 : 0.43), 0.07, size * 0.875, size * 0.075, size * 0.095, size * 0.035, false);
      const brow = mesh(G.capsule(size * 0.052, size * 0.38, 4, 8), hair,
        { x: s * size * 0.45, y: size * 0.41, z: size * 0.79, rz: Math.PI / 2 - s * 0.34 });
      h.add(brow);
      addOrb(h, hair, s * size * 0.42, -0.27, size * 0.55, size * 0.52, size * 0.13, size * 0.19);
      addOrb(h, hairEdge, s * size * 0.71, -0.2, size * 0.38, size * 0.25, size * 0.31, size * 0.18);
    }
    addOrb(h, skin[i], 0, -0.09, size * 0.91, size * 0.23, size * 0.23, size * 0.2);
    addOrb(h, hair, 0, -0.39, size * 0.4, size * 0.7, size * 0.32, size * 0.4);
    h.add(mesh(G.cone(size * 0.28, size * 0.52, 9), hair, { y: -0.57, z: size * 0.39, rz: Math.PI }));
    const mouth = addOrb(h, mat(0x522f30), 0, -0.23, size * 0.88, size * 0.17, size * 0.035, size * 0.05, false);
    mouths.push(mouth);
    if (i === 2) for (const [x, z, r] of [[-0.08, 0.08, 0.05], [0.14, -0.03, 0.04], [0.02, -0.17, 0.03]])
      addOrb(h, hairEdge, x, size * 0.91, z, r, r * 0.45, r, false);
  }

  for (const s of [-1, 1]) {
    const arm = joint(s * 0.63, 1.06, 0.02);
    body.add(arm);
    arm.add(mesh(G.capsule(0.19, 0.48, 6, 10), coatLight, { y: -0.28, rz: s * 0.2 }));
    addOrb(arm, skin[0], s * 0.08, -0.64, 0.21, 0.22, 0.19, 0.23);
    for (let j = 0; j < 3; j++) addOrb(arm, skin[0], s * 0.08 + (j - 1) * 0.11, -0.64, 0.4, 0.065, 0.09, 0.06);
    if (s < 0) rig.armR = arm; else rig.armL = arm;
    // Фонари висят по бокам на канате.
    const lamp = joint(s * 0.69, 0.56, -0.08);
    body.add(lamp);
    lamp.add(mesh(cylinder(0.026, 0.026, 0.2, 6), rope, { y: -0.11 }));
    lamp.add(mesh(G.box(0.3, 0.31, 0.25), flame, { y: -0.39, shadow: false }));
    for (const yy of [-0.59, -0.2]) lamp.add(mesh(G.box(0.36, 0.055, 0.3), metal, { y: yy }));
    for (const xx of [-0.16, 0.16]) for (const zz of [-0.14, 0.14])
      lamp.add(mesh(G.box(0.035, 0.4, 0.035), metal, { x: xx, y: -0.39, z: zz }));
    addOrb(lamp, flame, 0, -0.4, 0.16, 0.075, 0.09, 0.01, false);
  }

  const wisps = [];
  for (let i = 0; i < 3; i++) {
    const spirit = new THREE.Group();
    addOrb(spirit, wispMat, 0, 0, 0, 0.16, 0.21, 0.11, false);
    spirit.add(mesh(G.cone(0.1, 0.25, 8), wispMat, { y: 0.23, shadow: false }));
    for (const s of [-1, 1]) addOrb(spirit, wispEyes, s * 0.045, 0.01, 0.1, 0.014, 0.02, 0.01, false);
    model.add(spirit); wisps.push(spirit);
  }

  function update(dt, st) {
    if (st.swimming) swimCycle(rig, st, dt);
    else walkCycle(rig, { ...st, speed: st.speed * 0.8 }, dt, { stride: 0.48, armSwing: 0.5, bob: 0.032, freq: 0.82 });
    const action = st.action;
    const force = action && ['fear', 'hypnosis', 'glare'].includes(action.name)
      ? Math.sin(Math.min(1, action.k) * Math.PI) : 0;
    if (force) {
      rig.armL.rotation.x = -1.8 * force;
      rig.armR.rotation.x = -1.8 * force;
      rig.armL.rotation.z = -0.75 * force;
      rig.armR.rotation.z = 0.75 * force;
    }
    heads.forEach((h, i) => {
      h.rotation.y = Math.sin(st.t * (1.1 + i * 0.18) + i * 1.6) * 0.06 + (i - 1) * 0.07;
      h.rotation.z = Math.sin(st.t * 1.7 + i * 2) * 0.028 + force * (i - 1) * 0.09;
      mouths[i].scale.y = [0.035, 0.03, 0.025][i] + force * 0.06;
    });
    wisps.forEach((w, i) => {
      const a = st.t * (0.85 + i * 0.08) + i * Math.PI * 2 / 3;
      w.position.set(Math.sin(a) * (1.14 + force * 0.28), 1.7 + i * 0.27 + Math.sin(st.t * 2 + i) * 0.15, Math.cos(a) * 0.45);
      w.rotation.z = Math.sin(st.t * 2.5 + i) * 0.15;
    });
    squash(root, st, dt);
  }

  return { root, update, height: 3.05 };
}
