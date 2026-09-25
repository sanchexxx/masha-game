// «Мой котик» — свой персонаж, как на Машиных картинках: ребёнок с ушками и хвостом котика,
// в вязаном свитере со значком, джинсах и белых кроссовках. Внешность собирается из выбора в редакторе.
import * as THREE from 'three';
import { mat, mesh, G, joint, canvasTexture, animeEye, walkCycle, squash, fluffySphere } from './common.js';

export const LOOK_OPTIONS = {
  gender: [['girl', 'Девочка'], ['boy', 'Мальчик']],
  hairStyle: { girl: [['braids', 'Косички'], ['pony', 'Хвостик'], ['bob', 'Каре']], boy: [['messy', 'Лохматая'], ['spiky', 'Ёжик'], ['bob', 'Чёлка']] },
  hair: ['#7a4a2a', '#3a2217', '#e8b86a', '#c8683a', '#f4f0f8', '#9a6ad8'],
  sweater: ['#b78ae8', '#f07a5a', '#6ab0e8', '#f4c64a', '#7ac88a', '#f49ac0'],
  emblem: [['star', '⭐'], ['heart', '❤️'], ['paw', '🐾'], ['none', '—']],
  ears: [['1', 'Да'], ['0', 'Нет']],
  tail: [['1', 'Да'], ['0', 'Нет']],
};
export const DEFAULT_LOOK = { gender: 'girl', hairStyle: 'braids', hair: '#7a4a2a', sweater: '#b78ae8', emblem: 'star', ears: '1', tail: '1' };
const KEY = 'masha-game-look-v1';
export function loadLook() {
  try { return { ...DEFAULT_LOOK, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { return { ...DEFAULT_LOOK }; }
}
export function saveLook(look) { try { localStorage.setItem(KEY, JSON.stringify(look)); } catch {} }

const col = h => new THREE.Color(h);
const lighten = (h, k) => '#' + col(h).lerp(new THREE.Color(0xffffff), k).getHexString();
const darken = (h, k) => '#' + col(h).lerp(new THREE.Color(0x000000), k).getHexString();

// Вязаный свитер: «косички» вязки + значок на груди
function knitTexture(base, emblem) {
  return canvasTexture(256, 256, (c, w, h) => {
    c.fillStyle = base; c.fillRect(0, 0, w, h);
    c.strokeStyle = darken(base, 0.18); c.lineWidth = 3;
    for (let x = 8; x < w; x += 16) for (let y = 0; y < h; y += 12) {
      c.beginPath(); c.moveTo(x - 5, y); c.lineTo(x, y + 8); c.lineTo(x + 5, y); c.stroke();
    }
    c.fillStyle = lighten(base, 0.18);
    for (let i = 0; i < 300; i++) c.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    // значок — посередине текстуры (там, куда смотрит грудь)
    const cx = w * 0.5, cy = h * 0.42, R = 44;
    if (emblem === 'star') {
      c.fillStyle = '#f7d65a'; c.strokeStyle = '#c8962a'; c.lineWidth = 3; c.beginPath();
      for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? R * 0.45 : R; c.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); }
      c.closePath(); c.fill(); c.stroke();
    } else if (emblem === 'heart') {
      c.fillStyle = '#f0506a'; c.beginPath();
      c.moveTo(cx, cy + R * 0.8); c.bezierCurveTo(cx - R * 1.4, cy - R * 0.2, cx - R * 0.5, cy - R * 1.1, cx, cy - R * 0.35);
      c.bezierCurveTo(cx + R * 0.5, cy - R * 1.1, cx + R * 1.4, cy - R * 0.2, cx, cy + R * 0.8); c.fill();
    } else if (emblem === 'paw') {
      c.fillStyle = '#fff4e8';
      c.beginPath(); c.ellipse(cx, cy + 8, 15, 12, 0, 0, 7); c.fill();
      for (const [dx, dy] of [[-16, -10], [-6, -20], [6, -20], [16, -10]]) { c.beginPath(); c.ellipse(cx + dx, cy + dy, 6, 7, 0, 0, 7); c.fill(); }
    }
  });
}
function denimTexture() {
  return canvasTexture(128, 128, (c, w, h) => {
    c.fillStyle = '#7fa6d6'; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) { c.fillStyle = Math.random() < 0.5 ? 'rgba(255,255,255,.18)' : 'rgba(30,60,120,.18)'; c.fillRect(Math.random() * w, Math.random() * h, 1, 3); }
  });
}

export function buildKid(lookIn) {
  const look = { ...DEFAULT_LOOK, ...(lookIn || {}) };
  const girl = look.gender === 'girl';
  const root = new THREE.Group();
  const model = new THREE.Group();
  root.add(model);

  const skin = mat(0xf8d8c4, { roughness: 0.6 });
  const hair = mat(col(look.hair).getHex(), { roughness: 0.55 });
  const hairDark = mat(col(darken(look.hair, 0.2)).getHex(), { roughness: 0.6 });
  const knit = knitTexture(look.sweater, look.emblem);
  knit.wrapS = THREE.RepeatWrapping;
  const sweater = new THREE.MeshStandardMaterial({ map: knit, roughness: 0.95 });
  const sleeveTex = knitTexture(look.sweater, 'none'); sleeveTex.wrapS = sleeveTex.wrapT = THREE.RepeatWrapping; sleeveTex.repeat.set(1, 1);
  const sleeveMat = new THREE.MeshStandardMaterial({ map: sleeveTex, roughness: 0.95 });
  const jeans = new THREE.MeshStandardMaterial({ map: denimTexture(), roughness: 0.9 });
  const shoe = mat(0xf6f4f8, { roughness: 0.5 });
  const sole = mat(0xd8c8ea, { roughness: 0.6 });
  const fur = mat(0xfaf7f4, { roughness: 0.9 });
  const furPink = mat(0xf5b8c8, { roughness: 0.9 });
  const rig = { bodyY: 0.52 };

  // Ноги: джинсы, белые кроссовки с бантиком
  for (const side of [-1, 1]) {
    const leg = joint(side * 0.1, 0.52, 0);
    leg.add(mesh(G.capsule(0.078, 0.3), jeans, { y: -0.2 }));
    leg.add(mesh(G.cyl(0.085, 0.09, 0.06, 14), jeans, { y: -0.39 }));
    leg.add(mesh(G.sphere(1, 16, 12), shoe, { y: -0.46, z: 0.04, sx: 0.095, sy: 0.07, sz: 0.14 }));
    leg.add(mesh(G.box(0.17, 0.03, 0.26), sole, { y: -0.515, z: 0.04 }));
    if (girl) leg.add(mesh(G.torus(0.02, 0.008, 6, 10), mat(0xb8a8f0), { y: -0.41, z: 0.12, rx: 0.3, shadow: false }));
    model.add(leg);
    if (side < 0) rig.legR = leg; else rig.legL = leg;
  }

  // Корпус: пухлый вязаный свитер
  const body = joint(0, rig.bodyY, 0);
  model.add(body);
  rig.body = body;
  body.add(mesh(G.cyl(0.19, 0.2, 0.1, 20), jeans, { y: 0.0 }));
  const torso = mesh(G.cyl(0.19, 0.225, 0.34, 24), sweater, { y: 0.2 });
  torso.rotation.y = Math.PI;                // середина текстуры (значок) — на груди
  body.add(torso);
  body.add(mesh(G.torus(0.2, 0.035, 8, 24), sleeveMat, { y: 0.04, rx: Math.PI / 2 }));    // резинка свитера
  body.add(mesh(G.sphere(0.19, 20, 10), sleeveMat, { y: 0.37, sy: 0.42 }));
  body.add(mesh(G.torus(0.075, 0.03, 8, 16), sleeveMat, { y: 0.42, rx: Math.PI / 2 }));   // воротник

  // Руки в объёмных рукавах
  for (const side of [-1, 1]) {
    const arm = joint(side * 0.22, 0.34, 0);
    arm.add(mesh(G.capsule(0.075, 0.16), sleeveMat, { y: -0.12 }));
    arm.add(mesh(G.torus(0.06, 0.025, 6, 12), sleeveMat, { y: -0.26, rx: Math.PI / 2 }));
    arm.add(mesh(G.sphere(0.055, 12, 10), skin, { y: -0.31 }));
    body.add(arm);
    if (side < 0) rig.armR = arm; else rig.armL = arm;
  }

  // Хвост котика: пушистые шарики по дуге, кончик покачивается
  if (look.tail === '1') {
    const tail = joint(0, 0.06, -0.2);
    body.add(tail);
    const tg = fluffySphere(1, 2, 0.12, 4);
    const segs = [];
    let prev = tail;
    for (let i = 0; i < 5; i++) {
      const s = joint(0, 0.05, -0.07);
      prev.add(s);
      s.add(mesh(tg, fur, { sx: 0.085 + i * 0.012, sy: 0.085 + i * 0.012, sz: 0.1 + i * 0.012 }));
      segs.push(s);
      prev = s;
    }
    rig.tailSegs = segs;
  }

  // Голова — крупная, «чиби»
  const head = joint(0, 0.44, 0);
  body.add(head);
  rig.head = head;
  head.add(mesh(G.sphere(0.27, 32, 24), skin, { y: 0.24, sy: 0.95 }));
  for (const s of [-1, 1]) {
    const e = animeEye(0.062, 0x4a2a1a);
    e.position.set(s * 0.1, 0.22, 0.24);
    e.rotation.y = s * 0.28;
    head.add(e);
    head.add(mesh(G.sphere(1, 10, 8), mat(0xf29a9a, { opacity: 0.7, roughness: 1 }), { x: s * 0.17, y: 0.14, z: 0.2, sx: 0.05, sy: 0.025, sz: 0.02, ry: s * 0.6, shadow: false }));
  }
  head.add(mesh(G.torus(0.024, 0.007, 6, 12, Math.PI), mat(0x9a3b35), { y: 0.12, z: 0.262, rz: Math.PI, shadow: false }));
  head.add(mesh(G.sphere(0.012, 8, 6), mat(0xe8a090), { y: 0.17, z: 0.268, shadow: false }));

  // Волосы
  const cap = new THREE.SphereGeometry(0.29, 32, 20, 0, Math.PI * 2, 0, Math.PI * 0.6);
  head.add(mesh(cap, hair, { y: 0.24, z: -0.01, rx: -0.72 }));
  head.add(mesh(G.sphere(0.28, 24, 16), hair, { y: 0.17, z: -0.09, sx: 1.04, sy: 0.92, sz: 0.94 }));
  const style = look.hairStyle;
  if (style === 'messy' || style === 'spiky') {
    // лохматые пряди во все стороны (или ёжик)
    const tuft = fluffySphere(1, 1, 0.25, 9);
    const n = style === 'spiky' ? 14 : 10;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2, up = 0.35 + (i % 3) * 0.12;
      const x = Math.cos(a) * 0.2, z = Math.sin(a) * 0.2 - 0.03;
      if (z > 0.14 && Math.abs(x) < 0.12) continue;
      head.add(style === 'spiky'
        ? mesh(G.cone(0.05, 0.14, 6), hair, { x, y: 0.36 + up * 0.1, z, rx: z * 2.5, rz: -x * 2.5 })
        : mesh(tuft, i % 2 ? hair : hairDark, { x: x * 1.1, y: 0.3 + up * 0.12, z, sx: 0.09, sy: 0.07, sz: 0.09 }));
    }
    for (const [x, y] of [[-0.12, 0.34], [-0.03, 0.36], [0.07, 0.355], [0.15, 0.33]]) head.add(mesh(G.sphere(1, 10, 8), hair, { x, y, z: 0.22, sx: 0.075, sy: 0.07, sz: 0.05, rz: x * 2 }));
  } else {
    // чёлка
    for (const [x, y] of [[-0.14, 0.34], [-0.05, 0.355], [0.05, 0.35], [0.14, 0.335]]) head.add(mesh(G.sphere(1, 12, 10), hair, { x, y, z: 0.215, sx: 0.08, sy: 0.08, sz: 0.055, rz: x * 1.4 }));
    for (const s of [-1, 1]) head.add(mesh(G.capsule(0.05, 0.16, 4, 8), hair, { x: s * 0.245, y: 0.13, z: 0.07, rz: s * 0.12 }));
  }
  rig.braids = [];
  if (style === 'braids') {
    // две косички с фиолетовыми резинками — как на картинке
    for (const s of [-1, 1]) {
      const br = joint(s * 0.2, 0.12, -0.12);
      head.add(br);
      for (let i = 0; i < 4; i++) br.add(mesh(G.sphere(1, 10, 8), hair, { x: s * 0.02 * i, y: -0.07 * i - 0.02, z: -0.02 * i, sx: 0.05 - i * 0.004, sy: 0.055, sz: 0.05 - i * 0.004 }));
      br.add(mesh(G.sphere(0.03, 10, 8), mat(0x9a7ae8, { roughness: 0.3, emissive: 0x3a1a70, emissiveIntensity: 0.4 }), { x: s * 0.07, y: -0.31, z: -0.07 }));
      br.add(mesh(G.cone(0.04, 0.09, 8), hair, { x: s * 0.075, y: -0.37, z: -0.08, rx: Math.PI }));
      rig.braids.push(br);
    }
  } else if (style === 'pony') {
    const t = joint(0, 0.32, -0.25);
    head.add(t);
    t.add(mesh(G.torus(0.04, 0.016, 8, 16), mat(0x9a7ae8, { roughness: 0.3 }), { rx: Math.PI / 2 - 0.4 }));
    t.add(mesh(G.capsule(0.055, 0.16, 4, 8), hair, { y: -0.11, z: -0.05, rx: 0.5 }));
    rig.braids.push(t);
  }
  if (girl) {
    // цветочек-заколка
    const fl = new THREE.Group();
    for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; fl.add(mesh(G.sphere(1, 8, 6), mat(0xffffff, { roughness: 0.5 }), { x: Math.cos(a) * 0.035, y: Math.sin(a) * 0.035, sx: 0.028, sy: 0.028, sz: 0.012, shadow: false })); }
    fl.add(mesh(G.sphere(0.018, 8, 6), mat(0xf7c84a), { z: 0.01, shadow: false }));
    fl.position.set(0.2, 0.38, 0.12); fl.rotation.set(-0.3, 0.7, 0);
    head.add(fl);
  }
  // Ушки котика: пушистые снаружи, розовые внутри
  if (look.ears === '1') {
    rig.ears = [];
    for (const s of [-1, 1]) {
      const ear = joint(s * 0.16, 0.44, -0.02);
      ear.rotation.z = -s * 0.35;
      ear.add(mesh(G.cone(0.085, 0.19, 4), fur, { y: 0.07, sz: 0.55, ry: Math.PI / 4 }));
      ear.add(mesh(G.cone(0.05, 0.13, 4), furPink, { y: 0.06, z: 0.02, sz: 0.3, ry: Math.PI / 4 }));
      ear.add(mesh(fluffySphere(1, 1, 0.2, s + 3), fur, { y: 0.005, sx: 0.07, sy: 0.04, sz: 0.05 }));
      head.add(ear);
      rig.ears.push(ear);
    }
  }

  model.scale.setScalar(1.05);

  function update(dt, st) {
    walkCycle(rig, st, dt, { stride: 0.9, armSwing: 0.9, bob: 0.05 });
    const a = st.action;
    if (a && a.name === 'wave') {
      const env = Math.sin(Math.min(1, a.k) * Math.PI);
      rig.armL.rotation.z = 2.7 * env + Math.sin(st.t * 14) * 0.3 * env;
      rig.armL.rotation.x = -0.2 * env;
      rig.head.rotation.z = Math.sin(st.t * 4) * 0.1 * env;
    } else rig.head.rotation.z = 0;
    // хвост виляет, на бегу вытягивается; ушки подрагивают
    if (rig.tailSegs) rig.tailSegs.forEach((s, i) => {
      s.rotation.y = Math.sin(st.t * 3 - i * 0.6) * (0.25 - rig.blend * 0.15);
      s.rotation.x = -0.25 + rig.blend * 0.2 + rig.air * 0.3;
    });
    if (rig.ears) rig.ears.forEach((e, i) => { e.rotation.x = Math.max(0, Math.sin(st.t * 1.3 + i * 2)) ** 8 * 0.4; });
    rig.braids.forEach((b, i) => { b.rotation.x = 0.1 + Math.sin(rig.phase * 2 + i) * 0.18 * rig.blend + rig.air * 0.4; });
    squash(root, st, dt);
  }

  return { root, update, height: 1.55 };
}
