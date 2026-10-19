// Тоторо — Хранитель Леса (3 м). По развороту владельца: серая шуба, светлое пузико с узором-«галочками»,
// лист-шляпа с маленьким белым Тоторо, посох с фонарём-лапкой, плетёная клетка-рюкзак,
// верёвочка с красным кленовым листиком, огоньки-духи. 4 скина: классический, зимний, дождливый, весенний.
import * as THREE from 'three';
import { mat, mesh, G, joint, fluffySphere, walkCycle, swimCycle, squash, canvasTexture } from './common.js?v=2026100901';

export const TOTORO_SKINS = {
  classic: { name: 'Классический', fur: 0x8b9098, shade: 0x6d727a, belly: 0xf0e4c6, mark: 0x5a5f67, leaf: 0x5c9a3c, hat: 0x5c9a3c },
  winter:  { name: 'Зимний',       fur: 0xe2e8f0, shade: 0xc4cedb, belly: 0xffffff, mark: 0x93a1b4, leaf: 0x8fbf98, hat: 0xc4312a },
  rain:    { name: 'Дождливый',    fur: 0x5f86ad, shade: 0x48698d, belly: 0xdde9f2, mark: 0x3c5876, leaf: 0x3a8f69, hat: 0x3a8f69 },
  spring:  { name: 'Весенний',     fur: 0x9cb98f, shade: 0x7f9c74, belly: 0xf6ecd6, mark: 0x6a8862, leaf: 0x7bbf4a, hat: 0xf2a6c2 },
};

// Узор на пузике: два ряда «галочек», как у Тоторо из мультика.
function bellyTexture(S) {
  const hex = c => '#' + c.toString(16).padStart(6, '0');
  return canvasTexture(512, 256, (c, w, h) => {
    c.fillStyle = hex(S.belly); c.fillRect(0, 0, w, h);
    c.strokeStyle = hex(S.mark); c.lineWidth = 7; c.lineCap = 'round'; c.lineJoin = 'round';
    const cx = w * 0.25;
    const chevron = (x, y) => { c.beginPath(); c.moveTo(x - 11, y + 8); c.lineTo(x, y - 5); c.lineTo(x + 11, y + 8); c.stroke(); };
    c.lineWidth = 9;
    for (const dx of [-34, 0, 34]) chevron(cx + dx, 74);
    for (const dx of [-51, -17, 17, 51]) chevron(cx + dx, 100);
  });
}

function leafTexture(color) {
  const hex = '#' + color.toString(16).padStart(6, '0');
  return canvasTexture(256, 256, (c, w, h) => {
    c.fillStyle = hex; c.fillRect(0, 0, w, h);
    c.strokeStyle = 'rgba(255,255,230,.35)'; c.lineWidth = 3;
    for (let i = 0; i < 12; i++) {
      const a = i / 12 * Math.PI * 2;
      c.beginPath(); c.moveTo(128, 128); c.lineTo(128 + Math.cos(a) * 128, 128 + Math.sin(a) * 128); c.stroke();
    }
    c.fillStyle = 'rgba(0,0,0,.12)';
    c.beginPath(); c.arc(128, 128, 18, 0, Math.PI * 2); c.fill();
  });
}

// Маленький Тоторо: Тиби (белый, крошечный) и Тю (синий, средний). Используется и на шляпе, и как помощник.
export function buildMiniTotoro(kind = 'chibi') {
  const chu = kind === 'chu';
  const size = chu ? 0.95 : 0.55;
  const fur = mat(chu ? 0x6f8fd8 : 0xf3f5f8, { roughness: 0.95 });
  const belly = mat(chu ? 0xc9d8f4 : 0xffffff, { roughness: 1 });
  const dark = mat(0x22252b);
  const root = new THREE.Group();
  const body = joint(0, 0, 0);
  root.add(body);
  body.add(mesh(fluffySphere(0.5, 2, 0.05, chu ? 4 : 6), fur, { y: 0.5, sy: 1.08 }));
  body.add(mesh(G.sphere(0.36, 14, 10), belly, { y: 0.42, z: 0.22, sz: 0.7 }));
  for (const s of [-1, 1]) {
    body.add(mesh(G.cone(0.1, 0.32, 10), fur, { x: s * 0.2, y: 1.04, rz: -s * 0.18 }));
    body.add(mesh(G.sphere(0.075, 10, 8), mat(0xffffff, { roughness: 0.4 }), { x: s * 0.17, y: 0.7, z: 0.42, sz: 0.5, shadow: false }));
    body.add(mesh(G.sphere(0.035, 8, 6), dark, { x: s * 0.15, y: 0.7, z: 0.46, shadow: false }));
  }
  body.add(mesh(G.sphere(0.05, 8, 6), dark, { y: 0.62, z: 0.47, sx: 1.4, sy: 0.6, shadow: false }));
  if (chu) body.add(mesh(G.sphere(0.06, 10, 8), mat(0x8a5a2c), { x: 0.3, y: 0.35, z: 0.3 }));   // мешочек с желудями
  root.scale.setScalar(size);
  let phase = Math.random() * 6;
  function update(dt, st = {}) {
    const speed = st.speed || 0;
    phase += dt * (3 + speed * 1.6);
    body.position.y = speed > 0.3 ? Math.abs(Math.sin(phase)) * 0.25 : Math.sin(st.t * 2 || phase) * 0.02;
    body.rotation.z = speed > 0.3 ? Math.sin(phase) * 0.12 : 0;
  }
  return { root, update, height: size * 1.1 };
}

export function buildTotoro(skinId = 'classic') {
  const S = TOTORO_SKINS[skinId] || TOTORO_SKINS.classic;
  const root = new THREE.Group();
  const model = new THREE.Group();
  root.add(model);

  const fur = mat(S.fur, { roughness: 0.96 });
  const furShade = mat(S.shade, { roughness: 1 });
  const bellyM = new THREE.MeshStandardMaterial({ map: bellyTexture(S), roughness: 1 });
  const dark = mat(0x1d2026, { roughness: 0.5 });
  const white = mat(0xfbfaf4, { roughness: 0.35 });
  const wood = mat(0x7a4f2a, { roughness: 0.85 });
  const woodDark = mat(0x4a2f19, { roughness: 0.9 });
  const leafM = new THREE.MeshStandardMaterial({ map: leafTexture(S.leaf), roughness: 0.6, side: THREE.DoubleSide });
  const rig = { bodyY: 0.3 };

  // Ноги — широкие лапы с коготками
  for (const s of [-1, 1]) {
    const leg = joint(s * 0.5, 0.32, 0.05);
    leg.add(mesh(fluffySphere(0.3, 2, 0.08, s + 2), fur, { y: -0.12, sy: 0.9 }));
    leg.add(mesh(G.sphere(0.3, 14, 10), furShade, { y: -0.27, z: 0.1, sx: 1.1, sy: 0.38, sz: 1.25 }));
    for (const c of [-1, 0, 1]) leg.add(mesh(G.cone(0.035, 0.11, 6), mat(0xe8e0cc), { x: c * 0.11, y: -0.28, z: 0.45, rx: Math.PI / 2, shadow: false }));
    model.add(leg);
    if (s < 0) rig.legR = leg; else rig.legL = leg;
  }

  const body = joint(0, rig.bodyY, 0);
  model.add(body);
  rig.body = body;
  body.add(mesh(fluffySphere(1.0, 4, 0.045, 3.1), fur, { y: 1.08, sy: 1.3, sz: 0.92 }));
  body.add(mesh(new THREE.SphereGeometry(1, 32, 24), bellyM, { y: 0.92, z: 0.3, sx: 0.82, sy: 1.02, sz: 0.68 }));

  // Лицо: круглые глаза-блюдца, широкий нос, усы, огромная улыбка (открывается при рёве)
  const face = joint(0, 1.95, 0.58);
  body.add(face);
  rig.head = face;
  const pupils = [];
  for (const s of [-1, 1]) {
    face.add(mesh(G.sphere(0.13, 16, 12), white, { x: s * 0.31, y: 0.06, z: 0.1, sz: 0.45, shadow: false }));
    const p = mesh(G.sphere(0.055, 12, 8), dark, { x: s * 0.29, y: 0.06, z: 0.165, sz: 0.5, shadow: false });
    face.add(p); pupils.push(p);
    for (let k = -1; k <= 1; k++) {
      const wsk = mesh(G.cyl(0.008, 0.008, 0.55, 4), dark, { x: s * 0.42, y: -0.06 + k * 0.06, z: 0.12, rz: Math.PI / 2 + s * k * 0.12, shadow: false });
      face.add(wsk);
    }
  }
  face.add(mesh(G.sphere(0.07, 12, 8), dark, { y: 0.1, z: 0.19, sx: 1.6, sy: 0.6, sz: 0.6, shadow: false }));
  const mouth = joint(0, -0.18, 0.12);
  face.add(mouth);
  const mouthIn = mesh(G.sphere(1, 16, 10), mat(0x5c2a2e), { sx: 0.42, sy: 0.02, sz: 0.1, shadow: false });
  mouth.add(mouthIn);
  const teeth = [];
  for (let i = -3; i <= 3; i++) {
    const tooth = mesh(G.box(0.07, 0.06, 0.04), white, { x: i * 0.1, y: 0.0, z: 0.06, shadow: false });
    tooth.visible = false; mouth.add(tooth); teeth.push(tooth);
  }

  // Ушки — торчат сквозь лист-шляпу
  const ears = [];
  for (const s of [-1, 1]) {
    const ear = joint(s * 0.36, 2.48, -0.05);
    ear.add(mesh(G.capsule(0.12, 0.38, 4, 10), fur, { y: 0.24 }));
    ear.add(mesh(G.cone(0.1, 0.16, 10), furShade, { y: 0.55 }));
    ear.rotation.z = -s * 0.16;
    body.add(ear); ears.push(ear);
  }

  // Лист-шляпа и маленький Тоторо на нём
  const hat = joint(0, 2.5, 0.02);
  body.add(hat);
  rig.hat = hat;
  hat.add(mesh(new THREE.SphereGeometry(0.78, 28, 10, 0, Math.PI * 2, 0, Math.PI * 0.32), leafM, { y: -0.52, sy: 0.75 }));
  hat.add(mesh(G.cyl(0.03, 0.04, 0.22, 6), mat(0x4d7a2c), { y: 0.1, x: 0.05, rz: -0.4 }));
  const hatBuddy = buildMiniTotoro('chibi');
  hatBuddy.root.position.set(-0.08, 0.06, 0.05);
  hatBuddy.root.scale.setScalar(0.42);
  hat.add(hatBuddy.root);
  if (skinId === 'winter') {
    hat.add(mesh(new THREE.SphereGeometry(0.62, 22, 8, 0, Math.PI * 2, 0, Math.PI * 0.26), mat(0xffffff, { roughness: 1 }), { y: -0.38, sy: 0.6 }));
    body.add(mesh(G.torus(0.62, 0.11, 10, 28), mat(S.hat), { y: 1.62, z: 0.04, rx: Math.PI / 2 + 0.12 }));
    body.add(mesh(G.box(0.22, 0.6, 0.08), mat(S.hat), { x: 0.3, y: 1.35, z: 0.7, rz: 0.15 }));
  }
  if (skinId === 'rain') for (let i = 0; i < 7; i++) {
    const a = i / 7 * Math.PI * 2;
    hat.add(mesh(G.sphere(0.045, 8, 6), mat(0xa9dcff, { opacity: 0.7, roughness: 0.1 }), { x: Math.cos(a) * 0.55, y: -0.08, z: Math.sin(a) * 0.55, sy: 1.3, shadow: false }));
  }
  if (skinId === 'spring') for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2 + 0.4;
    hat.add(mesh(G.sphere(0.08, 8, 6), mat(0xf6b3cc), { x: Math.cos(a) * 0.5, y: -0.04, z: Math.sin(a) * 0.5, sy: 0.6 }));
    hat.add(mesh(G.sphere(0.03, 6, 4), mat(0xffe27a), { x: Math.cos(a) * 0.5, y: 0.01, z: Math.sin(a) * 0.5, shadow: false }));
  }

  // Верёвочка с красным кленовым листиком
  if (skinId !== 'winter') body.add(mesh(G.torus(0.66, 0.025, 6, 32), mat(0x9a6a3a), { y: 1.62, z: 0.02, rx: Math.PI / 2 + 0.18 }));
  const maple = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const a = Math.PI / 2 + i / 10 * Math.PI * 2, r = i % 2 ? 0.05 : 0.12;
    i ? maple.lineTo(Math.cos(a) * r, Math.sin(a) * r) : maple.moveTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  body.add(mesh(new THREE.ExtrudeGeometry(maple, { depth: 0.02, bevelEnabled: false }), mat(skinId === 'spring' ? 0xf28ab2 : 0xd2392a), { y: 1.45, z: 0.86, rx: -0.2 }));

  // Плетёная клетка-рюкзак на спине с фонариком
  const pack = joint(0, 1.25, -0.82);
  body.add(pack);
  rig.pack = pack;
  pack.add(mesh(G.box(0.95, 1.0, 0.45), mat(0x3a2a1c, { opacity: 0.35 }), { z: -0.18, shadow: false }));
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) pack.add(mesh(G.box(0.07, 0.07, 0.5), wood, { x: sx * 0.48, y: sy * 0.5, z: -0.18 }));
  for (let i = -3; i <= 3; i++) pack.add(mesh(G.box(0.035, 1.0, 0.035), woodDark, { x: i * 0.14, z: -0.42 }));
  for (const sy of [-0.5, 0, 0.5]) pack.add(mesh(G.box(1.0, 0.05, 0.05), wood, { y: sy, z: -0.42 }));
  pack.add(mesh(G.cone(0.72, 0.38, 4), mat(0x3d5a2e, { roughness: 0.8 }), { y: 0.68, z: -0.18, ry: Math.PI / 4, sz: 0.62 }));
  const glowWarm = mat(0xffc970, { emissive: 0xffa640, emissiveIntensity: 2.4 });
  pack.add(mesh(G.cyl(0.1, 0.1, 0.2, 10), glowWarm, { x: 0.22, y: -0.2, z: -0.2, shadow: false }));
  for (const s of [-1, 1]) pack.add(mesh(G.box(0.1, 1.0, 0.04), mat(0x5a3a22), { x: s * 0.42, y: 0.15, z: 0.12, rx: 0.12 }));

  // Руки: в правой — посох с фонарём-лапкой, в левой — большой лист-зонтик
  const pawTex = canvasTexture(64, 64, (c, w, h) => {
    c.fillStyle = '#ffe2a0'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#a0461e';
    c.beginPath(); c.ellipse(32, 40, 13, 11, 0, 0, Math.PI * 2); c.fill();
    for (const [x, y] of [[17, 22], [27, 15], [38, 15], [48, 22]]) { c.beginPath(); c.ellipse(x, y, 5, 6, 0, 0, Math.PI * 2); c.fill(); }
  });
  const pawLamp = new THREE.MeshStandardMaterial({ map: pawTex, emissive: 0xffa640, emissiveMap: pawTex, emissiveIntensity: 2.2 });
  for (const s of [-1, 1]) {
    const arm = joint(s * 0.9, 1.55, 0.1);
    arm.add(mesh(fluffySphere(0.24, 2, 0.1, s * 7), fur, { y: -0.32, sy: 1.75 }));
    arm.add(mesh(fluffySphere(0.17, 1, 0.08, s * 8), furShade, { y: -0.68 }));
    for (const c of [-1, 0, 1]) arm.add(mesh(G.cone(0.03, 0.1, 6), mat(0xe8e0cc), { x: c * 0.07, y: -0.83, z: 0.08, rx: Math.PI, shadow: false }));
    body.add(arm);
    if (s < 0) {
      rig.armR = arm;
      const staff = joint(0, -0.72, 0.14);
      staff.add(mesh(G.cyl(0.04, 0.05, 2.5, 8), wood, { y: 0.55 }));
      staff.add(mesh(G.torus(0.16, 0.04, 6, 14, Math.PI * 1.4), wood, { y: 1.88, x: 0.12, rz: 0.4 }));
      const lamp = joint(0.3, 1.72, 0);
      lamp.add(mesh(G.cyl(0.01, 0.01, 0.16, 4), dark, { y: -0.08, shadow: false }));
      lamp.add(mesh(G.cyl(0.14, 0.14, 0.3, 14), pawLamp, { y: -0.32, shadow: false }));
      lamp.add(mesh(G.cyl(0.16, 0.16, 0.04, 14), woodDark, { y: -0.16 }));
      lamp.add(mesh(G.cyl(0.16, 0.16, 0.04, 14), woodDark, { y: -0.48 }));
      staff.add(lamp);
      arm.add(staff);
      rig.staff = staff; rig.lamp = lamp; rig.lampMat = pawLamp;
    } else {
      rig.armL = arm;
      const umbrella = joint(0, -0.72, 0.12);
      umbrella.add(mesh(G.cyl(0.025, 0.03, 1.5, 6), mat(0x4d7a2c), { y: 0.72 }));
      umbrella.add(mesh(new THREE.SphereGeometry(0.62, 24, 8, 0, Math.PI * 2, 0, Math.PI * 0.35), leafM, { y: 1.1, sy: 0.7, rz: -0.1 }));
      arm.add(umbrella);
      rig.umbrella = umbrella;
    }
  }

  // Огоньки-духи кружат рядом
  const wisps = [];
  const wispMat = mat(0xffd08a, { emissive: 0xff9a3a, emissiveIntensity: 2.4 });
  for (let i = 0; i < 3; i++) {
    const w = new THREE.Group();
    w.add(mesh(G.sphere(0.09, 10, 8), wispMat, { shadow: false }));
    w.add(mesh(G.cone(0.07, 0.18, 8), wispMat, { y: 0.12, shadow: false }));
    model.add(w);
    wisps.push(w);
  }

  // st.action = { name: 'swing'|'cast'|'summon'|'wave'|'roar', k: 0..1 }; st.riding — сидит на НэкоБусе
  function update(dt, st) {
    if (st.swimming) swimCycle(rig, st, dt);
    else walkCycle(rig, { ...st, speed: st.speed * 0.8 }, dt, { stride: 0.5, armSwing: 0.3, bob: 0.07, freq: 0.75 });
    body.rotation.z = Math.sin(rig.phase) * 0.07 * rig.blend;
    body.rotation.y = 0;
    let open = 0.02;
    ears.forEach((e, i) => (e.rotation.x = 0));
    pupils.forEach(p => (p.scale.set(1, 1, 0.5)));
    rig.umbrella.rotation.x = -0.25 * rig.blend;
    if (st.riding) {
      rig.legL.rotation.x = rig.legR.rotation.x = -1.3;
      rig.armL.rotation.x = -0.6; rig.armR.rotation.x = -0.4;
      open = 0.12;
    }
    const a = st.action;
    if (a) {
      const k = Math.min(1, a.k), env = Math.sin(k * Math.PI);
      if (a.name === 'swing') {
        const sw = k < 0.3 ? -k / 0.3 : -1 + (k - 0.3) / 0.7 * 2.6;
        rig.armR.rotation.x = -1.2 * sw - 0.3;
        body.rotation.y = -sw * 0.3;
        open = 0.08 * env;
      } else if (a.name === 'roar') {
        // Рёв: подаётся вперёд, лапы в стороны, ушки назад, пасть во всю ширину
        rig.armL.rotation.x = rig.armR.rotation.x = -1.4 * env;
        rig.armL.rotation.z = 0.9 * env; rig.armR.rotation.z = -0.9 * env;
        body.rotation.x = 0.22 * env;
        ears.forEach(e => (e.rotation.x = -0.5 * env));
        open = 0.26 * env;
        pupils.forEach(p => p.scale.set(0.6, 0.6, 0.5));
      } else if (a.name === 'cast' || a.name === 'summon' || a.name === 'path') {
        const up = a.name === 'summon' ? -1.4 : -2.4;
        rig.armL.rotation.x = up * env; rig.armR.rotation.x = up * env * 0.6;
        rig.armL.rotation.z = 0.5 * env;
        body.position.y += env * 0.1;
        open = 0.14 * env;
      } else if (a.name === 'wave') {
        rig.armL.rotation.x = -0.3 * env;
        rig.armL.rotation.z = 2.4 * env + Math.sin(st.t * 10) * 0.3 * env;
        face.rotation.z = Math.sin(st.t * 3) * 0.06 * env;
        open = 0.16 * env;
      }
    } else face.rotation.z = 0;
    mouthIn.scale.y = Math.max(0.02, open);
    teeth.forEach(t => { t.visible = open > 0.12; t.position.y = open * 0.5; });
    rig.lamp.rotation.x = -rig.armR.rotation.x + Math.sin(st.t * 2.2) * 0.12;
    rig.lampMat.emissiveIntensity = 2.2 + (a && a.name !== 'wave' ? Math.sin(Math.min(1, a.k) * Math.PI) * 2.5 : 0);
    rig.pack.rotation.x = Math.sin(rig.phase * 2) * 0.03 * rig.blend;
    hatBuddy.update(dt, { t: st.t, speed: 0 });
    wisps.forEach((w, i) => {
      const ang = st.t * (0.9 + i * 0.25) + i * 2.1;
      const r = a && a.name === 'summon' ? 1.4 + Math.sin(Math.min(1, a.k) * Math.PI) * 1.2 : 1.45;
      w.position.set(Math.cos(ang) * r, 2.0 + Math.sin(st.t * 2 + i) * 0.25, Math.sin(ang) * r);
    });
    squash(root, st, dt);
  }

  return { root, update, height: 3.0 };
}

// Полупрозрачность (невидимость Тоторо): у каждого меша своя прозрачная копия материала,
// общие материалы из кэша не трогаем.
export function setGhostly(root, k) {
  root.traverse(o => {
    if (!o.isMesh) return;
    const base = o.userData.baseMat || (o.userData.baseMat = o.material);
    if (k >= 0.999) { o.material = base; return; }
    if (!o.userData.fadeMat) { o.userData.fadeMat = base.clone(); o.userData.fadeMat.transparent = true; o.userData.fadeMat.depthWrite = false; }
    o.userData.fadeMat.opacity = (base.opacity ?? 1) * k;
    o.material = o.userData.fadeMat;
  });
}
