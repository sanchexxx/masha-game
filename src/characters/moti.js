// Дядюшка Моти — добродушный пушистый великан (2,4 м) в шляпе, с домиком-рюкзаком для духов
// и фонарём с лапкой. По развороту персонажа: спереди / сбоку / сзади, 4 скина, анимации действий.
import * as THREE from 'three';
import { mat, mesh, G, joint, fluffySphere, walkCycle, squash, canvasTexture } from './common.js';

export const MOTI_SKINS = {
  classic: { name: 'Классический', fur: 0xf2ede3, shade: 0xe3dccd, hat: 0xc4312a, hatBand: 0x8e211c, cloth: 0xc4312a },
  winter:  { name: 'Зимний',       fur: 0xe9f0fa, shade: 0xcfdcee, hat: 0x7fa6d8, hatBand: 0x3f5f95, cloth: 0x4a78b8 },
  forest:  { name: 'Лесной',       fur: 0xf0ead8, shade: 0xddd3bb, hat: 0x4f8a3a, hatBand: 0x2e5a22, cloth: 0xd9772b },
  holiday: { name: 'Праздничный',  fur: 0xf6efe6, shade: 0xe6d9ca, hat: 0xd8323a, hatBand: 0xe8b64a, cloth: 0xb8242c },
};

export function buildMoti(skinId = 'classic') {
  const S = MOTI_SKINS[skinId] || MOTI_SKINS.classic;
  const root = new THREE.Group();
  const model = new THREE.Group();
  root.add(model);

  const fur = mat(S.fur, { roughness: 0.95 });
  const furShade = mat(S.shade, { roughness: 1 });
  const hatM = mat(S.hat, { roughness: 0.7 });
  const cloth = mat(S.cloth, { roughness: 0.75 });
  const dark = mat(0x2b1d17);
  const wood = mat(0x6b4526, { roughness: 0.85 });
  const woodDark = mat(0x3f2716, { roughness: 0.9 });
  const glowWarm = mat(0xffc970, { emissive: 0xffa640, emissiveIntensity: 2.4 });
  const rig = { bodyY: 0.45 };

  // Ноги — короткие пушистые тумбы с коготками
  for (const s of [-1, 1]) {
    const leg = joint(s * 0.36, 0.45, 0);
    leg.add(mesh(fluffySphere(0.28, 2, 0.1, s + 3), fur, { y: -0.2, sy: 1.1 }));
    leg.add(mesh(G.sphere(0.22, 12, 10), furShade, { y: -0.4, z: 0.08, sy: 0.55 }));
    for (const c of [-1, 0, 1]) leg.add(mesh(G.sphere(0.035, 6, 4), mat(0x6d5a4a), { x: c * 0.08, y: -0.43, z: 0.27, sz: 1.4, shadow: false }));
    model.add(leg);
    if (s < 0) rig.legR = leg; else rig.legL = leg;
  }

  const body = joint(0, rig.bodyY, 0);
  model.add(body);
  rig.body = body;
  body.add(mesh(fluffySphere(0.86, 4, 0.06, 1.3), fur, { y: 0.74, sy: 1.1, sz: 0.92 }));
  // Набедренная повязка: пояс + передний фартук
  body.add(mesh(G.torus(0.76, 0.08, 8, 32), cloth, { y: 0.2, rx: Math.PI / 2, sy: 0.92 }));
  body.add(mesh(G.box(0.52, 0.42, 0.08), cloth, { y: 0.0, z: 0.7, rx: -0.14 }));

  // Лицо: сонные глазки, румянец, нос, усы-«бакенбарды» и борода
  const face = joint(0, 1.3, 0.68);
  body.add(face);
  rig.head = face;
  const eyes = [];
  for (const s of [-1, 1]) {
    const e = mesh(G.sphere(1, 12, 8), dark, { x: s * 0.14, y: 0.05, z: 0.08, sx: 0.038, sy: 0.022, sz: 0.02, shadow: false });
    face.add(e); eyes.push(e);
    face.add(mesh(G.sphere(1, 10, 8), mat(0xf0a6a0, { opacity: 0.55, roughness: 1 }), { x: s * 0.26, y: -0.03, z: 0.05, sx: 0.08, sy: 0.04, sz: 0.02, shadow: false }));
    face.add(mesh(G.capsule(0.013, 0.09, 2, 6), mat(0xcfc6b5), { x: s * 0.14, y: 0.15, z: 0.07, rz: Math.PI / 2 - s * 0.15, shadow: false }));
    face.add(mesh(fluffySphere(0.19, 2, 0.14, s * 5), fur, { x: s * 0.15, y: -0.13, z: 0.08, sx: 1.3, sy: 0.8, sz: 0.7 }));
    face.add(mesh(fluffySphere(0.2, 2, 0.16, s * 11), fur, { x: s * 0.46, y: -0.05, z: -0.1, sy: 1.3 }));
  }
  face.add(mesh(G.sphere(0.055, 10, 8), mat(0xe9c9b8), { y: -0.02, z: 0.15, shadow: false }));
  face.add(mesh(fluffySphere(0.16, 2, 0.16, 9), fur, { y: -0.33, z: 0.05, sy: 1.4 }));
  const mouth = mesh(G.sphere(1, 10, 8), mat(0x5a2a22), { y: -0.2, z: 0.16, sx: 0.06, sy: 0.001, sz: 0.02, shadow: false });
  face.add(mouth);

  // Шляпа с широкими полями
  const hat = joint(0, 1.66, 0.02);
  body.add(hat);
  hat.add(mesh(G.cyl(0.66, 0.7, 0.05, 32), hatM, { rx: 0.08 }));
  hat.add(mesh(new THREE.SphereGeometry(0.42, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), hatM, { y: 0.02, sy: 0.72 }));
  hat.add(mesh(G.cyl(0.425, 0.425, 0.07, 24), mat(S.hatBand), { y: 0.05 }));
  if (skinId === 'holiday') for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2;
    hat.add(mesh(G.sphere(0.035, 8, 6), mat(0xffe08a, { emissive: 0xffc040, emissiveIntensity: 1.5 }), { x: Math.cos(a) * 0.43, y: 0.06, z: Math.sin(a) * 0.43, shadow: false }));
  }
  if (skinId === 'winter') hat.add(mesh(fluffySphere(0.1, 1, 0.2, 2), mat(0xffffff), { y: 0.33 }));
  if (skinId === 'forest') hat.add(mesh(G.sphere(1, 8, 6), mat(0x78b04a, { flat: true }), { x: 0.3, y: 0.2, z: 0.1, sx: 0.14, sy: 0.04, sz: 0.08, rz: 0.4 }));

  // Домик-рюкзак на спине: каркас, крыша, лапка-знамя, фонарики, горшочки
  const pack = joint(0, 0.95, -0.72);
  body.add(pack);
  rig.pack = pack;
  pack.add(mesh(G.box(1.15, 1.3, 0.62), woodDark, { z: -0.3 }));
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) pack.add(mesh(G.box(0.1, 0.1, 0.68), wood, { x: sx * 0.58, y: sy * 0.65, z: -0.3 }));
  for (const sx of [-1, 1]) pack.add(mesh(G.box(0.1, 1.4, 0.1), wood, { x: sx * 0.58, z: -0.62 }));
  for (const sy of [-0.2, 0.25]) pack.add(mesh(G.box(1.1, 0.06, 0.58), wood, { y: sy, z: -0.3 }));
  const roofShape = new THREE.Shape();
  roofShape.moveTo(-0.78, 0); roofShape.lineTo(0, 0.42); roofShape.lineTo(0.78, 0); roofShape.closePath();
  const roof = mesh(new THREE.ExtrudeGeometry(roofShape, { depth: 0.86, bevelEnabled: false }), mat(0x3b3048, { roughness: 0.6 }), { y: 0.66, z: -0.73 });
  pack.add(roof);
  const bannerTex = canvasTexture(128, 160, (c, w, h) => {
    c.fillStyle = '#b7473c'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#f1dcc0'; c.fillRect(10, 10, w - 20, h - 20);
    c.fillStyle = '#8a3a2e';
    c.beginPath(); c.ellipse(64, 95, 26, 22, 0, 0, Math.PI * 2); c.fill();
    for (const [x, y] of [[36, 60], [54, 48], [74, 48], [92, 60]]) { c.beginPath(); c.ellipse(x, y, 9, 11, 0, 0, Math.PI * 2); c.fill(); }
  });
  pack.add(mesh(G.box(0.62, 0.78, 0.02), mat(0xffffff, { map: bannerTex, roughness: 0.9 }), { y: -0.05, z: -0.63 }));
  // окошко-огонёк внутри домика
  pack.add(mesh(G.box(0.36, 0.28, 0.02), glowWarm, { y: 0.42, z: -0.63, shadow: false }));
  for (const sx of [-1, 1]) {
    const l = joint(sx * 0.7, 0.3, -0.35);
    l.add(mesh(G.cyl(0.004, 0.004, 0.14, 4), dark, { y: -0.07, shadow: false }));
    l.add(mesh(G.cyl(0.09, 0.09, 0.2, 10), mat(0xff8a4a, { emissive: 0xff6a2a, emissiveIntensity: 2 }), { y: -0.24, shadow: false }));
    pack.add(l);
  }
  pack.add(mesh(G.cyl(0.12, 0.1, 0.18, 10), mat(0x8a5a3a), { x: -0.35, y: -0.5, z: -0.62 }));
  pack.add(mesh(G.cyl(0.09, 0.09, 0.5, 10), mat(0xd8c49a), { x: 0.3, y: -0.52, z: -0.66, rz: Math.PI / 2 }));
  // лямки через плечи
  for (const s of [-1, 1]) pack.add(mesh(G.box(0.12, 1.1, 0.05), mat(0x5a3a22), { x: s * 0.42, y: 0.1, z: 0.18, rx: 0.15 }));

  // Руки; в правой — фонарь с лапкой, левая свободна (машет, колдует)
  const pawTex = canvasTexture(64, 64, (c, w, h) => {
    c.fillStyle = '#ffe2a0'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#a0461e';
    c.beginPath(); c.ellipse(32, 40, 13, 11, 0, 0, Math.PI * 2); c.fill();
    for (const [x, y] of [[17, 22], [27, 15], [38, 15], [48, 22]]) { c.beginPath(); c.ellipse(x, y, 5, 6, 0, 0, Math.PI * 2); c.fill(); }
  });
  const pawLamp = new THREE.MeshStandardMaterial({ map: pawTex, emissive: 0xffa640, emissiveMap: pawTex, emissiveIntensity: 2.2 });
  for (const s of [-1, 1]) {
    const arm = joint(s * 0.8, 1.08, 0.05);
    arm.add(mesh(fluffySphere(0.22, 2, 0.12, s * 7), fur, { y: -0.3, sy: 1.7 }));
    arm.add(mesh(fluffySphere(0.15, 1, 0.1, s * 8), furShade, { y: -0.64 }));
    body.add(arm);
    if (s < 0) {
      rig.armR = arm;
      const lantern = joint(0, -0.74, 0.08);
      lantern.add(mesh(G.cyl(0.02, 0.02, 0.3, 6), wood, { y: -0.05, shadow: false }));
      lantern.add(mesh(G.cyl(0.15, 0.15, 0.34, 14), pawLamp, { y: -0.36, shadow: false }));
      lantern.add(mesh(G.cyl(0.17, 0.17, 0.04, 14), woodDark, { y: -0.18 }));
      lantern.add(mesh(G.cyl(0.17, 0.17, 0.04, 14), woodDark, { y: -0.54 }));
      arm.add(lantern);
      rig.lantern = lantern;
      rig.lampMat = pawLamp;
    } else rig.armL = arm;
  }

  // Два огонька-духа кружат рядом
  const wisps = [];
  const wispMat = mat(0xffd08a, { emissive: 0xff9a3a, emissiveIntensity: 2.4 });
  for (let i = 0; i < 2; i++) {
    const w = new THREE.Group();
    w.add(mesh(G.sphere(0.1, 10, 8), wispMat, { shadow: false }));
    w.add(mesh(G.cone(0.08, 0.2, 8), wispMat, { y: 0.13, shadow: false }));
    for (const s of [-1, 1]) w.add(mesh(G.sphere(0.014, 6, 4), dark, { x: s * 0.035, y: 0.01, z: 0.09, shadow: false }));
    model.add(w);
    wisps.push(w);
  }

  model.scale.setScalar(1.02);

  // st.action = { name: 'swing'|'cast'|'summon'|'wave'|'path', k: 0..1 }
  function update(dt, st) {
    walkCycle(rig, { ...st, speed: st.speed * 0.8 }, dt, { stride: 0.55, armSwing: 0.35, bob: 0.06, freq: 0.8 });
    body.rotation.z = Math.sin(rig.phase) * 0.06 * rig.blend;
    body.rotation.y = 0;
    mouth.scale.y = 0.001;
    eyes.forEach(e => (e.scale.y = 0.022));
    const a = st.action;
    if (a) {
      const k = a.k, env = Math.sin(Math.min(1, k) * Math.PI);   // 0 → 1 → 0
      if (a.name === 'swing') {
        // удар фонарём: замах назад, дуга вперёд через всё тело
        const sw = k < 0.3 ? -k / 0.3 : -1 + (k - 0.3) / 0.7 * 2.6;
        rig.armR.rotation.x = THREE.MathUtils.lerp(rig.armR.rotation.x, -1.2 * sw - 0.3, 0.6);
        rig.armR.rotation.z = -0.3 - env * 0.5;
        body.rotation.y = -sw * 0.35;
        mouth.scale.y = 0.03 * env;
      } else if (a.name === 'cast' || a.name === 'summon' || a.name === 'path') {
        // обе руки вверх / вперёд, лицо светится радостью
        const up = a.name === 'summon' ? -1.5 : a.name === 'path' ? -1.1 : -2.6;
        rig.armL.rotation.x = up * env; rig.armR.rotation.x = up * env;
        rig.armL.rotation.z = 0.5 * env; rig.armR.rotation.z = -0.5 * env;
        body.position.y += env * 0.08;
        body.rotation.x = -0.12 * env;
        mouth.scale.y = 0.04 * env;
        eyes.forEach(e => (e.scale.y = 0.022 - 0.015 * env));
      } else if (a.name === 'wave') {
        rig.armL.rotation.x = -0.3 * env;
        rig.armL.rotation.z = 2.5 * env + Math.sin(st.t * 12) * 0.35 * env;
        face.rotation.z = Math.sin(st.t * 3) * 0.08 * env;
        mouth.scale.y = 0.05 * env;
        eyes.forEach(e => (e.scale.y = 0.022 - 0.016 * env));
      }
    } else face.rotation.z = 0;
    if (!a || a.name !== 'swing') rig.lantern.rotation.x = -rig.armR.rotation.x + Math.sin(st.t * 2.4) * 0.12;
    rig.lampMat.emissiveIntensity = 2.2 + (a && a.name !== 'wave' ? Math.sin(Math.min(1, a.k) * Math.PI) * 2.5 : 0);
    rig.pack.rotation.x = Math.sin(rig.phase * 2) * 0.03 * rig.blend;
    wisps.forEach((w, i) => {
      const ang = st.t * (1.1 + i * 0.3) + i * Math.PI;
      const r = a && a.name === 'summon' ? 1.2 + Math.sin(Math.min(1, a.k) * Math.PI) * 1.2 : 1.15;
      w.position.set(Math.cos(ang) * r, 1.7 + Math.sin(st.t * 2 + i) * 0.2, Math.sin(ang) * r);
      w.rotation.y = -ang + Math.PI;
    });
    squash(root, st, dt);
  }

  return { root, update, height: 2.4 };
}
