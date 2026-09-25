// НэкоБус — кот-автобус: пушистое тело с горящими окнами, шесть лап, улыбка до ушей.
import * as THREE from 'three';
import { mat, mesh, G, joint, canvasTexture } from './common.js';

export function buildCatbus() {
  const root = new THREE.Group();
  const model = new THREE.Group();
  root.add(model);

  const furTex = canvasTexture(256, 128, (c, w, h) => {
    c.fillStyle = '#ecd6ad'; c.fillRect(0, 0, w, h);
    let seed = 7;
    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    c.fillStyle = '#7d4f2e';
    for (let i = 0; i < 16; i++) {
      c.beginPath();
      c.ellipse(rnd() * w, rnd() * h, 10 + rnd() * 18, 7 + rnd() * 12, rnd() * 3, 0, Math.PI * 2);
      c.fill();
    }
    c.globalAlpha = 0.15; c.strokeStyle = '#6b4526';
    for (let i = 0; i < 400; i++) { const x = rnd() * w, y = rnd() * h; c.beginPath(); c.moveTo(x, y); c.lineTo(x + 3, y + 5); c.stroke(); }
  });
  const fur = mat(0xffffff, { map: furTex, roughness: 0.9 });
  const cream = mat(0xefdcb6, { roughness: 0.9 });
  const brown = mat(0x7d4f2e, { roughness: 0.9 });
  const frame = mat(0x5b3a22, { roughness: 0.7 });
  const windowMat = mat(0xffc45a, { emissive: 0xffa630, emissiveIntensity: 1.6, roughness: 0.4 });
  const moss = mat(0x58703a, { roughness: 1, flat: true });

  const rig = {};
  const body = joint(0, 1.0, 0);
  model.add(body);
  rig.body = body;

  body.add(mesh(G.capsule(0.62, 1.3, 8, 20), fur, { rx: Math.PI / 2 }));
  // Окна по бокам
  for (const s of [-1, 1]) {
    for (const z of [-0.55, 0, 0.55]) {
      body.add(mesh(G.box(0.04, 0.4, 0.4), frame, { x: s * 0.605, y: 0.12, z }));
      body.add(mesh(G.box(0.03, 0.32, 0.32), windowMat, { x: s * 0.625, y: 0.12, z, shadow: false }));
    }
  }
  // Задние окна
  body.add(mesh(G.box(0.34, 0.3, 0.04), windowMat, { y: 0.15, z: -1.25, shadow: false }));
  // Мох на крыше и табличка «猫»
  body.add(mesh(G.sphere(1, 16, 10), moss, { y: 0.52, sx: 0.5, sy: 0.14, sz: 1.05 }));
  const signTex = canvasTexture(128, 64, (c, w, h) => {
    c.fillStyle = '#6a4125'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#f7d992'; c.fillRect(6, 6, w - 12, h - 12);
    c.fillStyle = '#3a2112'; c.font = 'bold 44px serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText('猫', w / 2, h / 2 + 2);
  });
  body.add(mesh(G.box(0.5, 0.24, 0.05), mat(0xffffff, { map: signTex, emissive: 0x442200, emissiveIntensity: 0.4 }), { y: 0.74, z: 0.55 }));
  body.add(mesh(G.box(0.04, 0.12, 0.04), frame, { y: 0.6, z: 0.55 }));
  // Фонарики на углах крыши
  const lampMat = mat(0xffb04a, { emissive: 0xff8a20, emissiveIntensity: 2.2 });
  for (const [x, z] of [[-0.4, 0.75], [0.4, 0.75], [-0.4, -0.75], [0.4, -0.75]]) {
    body.add(mesh(G.sphere(0.07, 10, 8), lampMat, { x, y: 0.55, z, sy: 1.3, shadow: false }));
  }

  // Голова
  const head = joint(0, 0.05, 1.05);
  body.add(head);
  rig.head = head;
  head.add(mesh(G.sphere(0.52, 28, 20), fur, { sx: 1.05, sy: 0.95, sz: 0.85 }));
  for (const s of [-1, 1]) {
    head.add(mesh(G.cone(0.16, 0.3, 4), cream, { x: s * 0.32, y: 0.48, z: -0.02, rz: -s * 0.35, ry: Math.PI / 4 }));
    head.add(mesh(G.cone(0.1, 0.18, 4), mat(0xd79a8a), { x: s * 0.31, y: 0.47, z: 0.02, rz: -s * 0.35, ry: Math.PI / 4, shadow: false }));
    // Глаза: жёлтые, с узким зрачком
    const eye = mesh(G.sphere(0.13, 20, 14), mat(0xffd23a, { emissive: 0xffb400, emissiveIntensity: 0.9, roughness: 0.2 }), { x: s * 0.21, y: 0.17, z: 0.36, sz: 0.6, shadow: false });
    eye.add(mesh(G.sphere(1, 10, 8), mat(0x140c05), { z: 0.105, sx: 0.026, sy: 0.1, sz: 0.03, shadow: false }));
    head.add(eye);
    // Усы
    for (const k of [-1, 0, 1]) {
      head.add(mesh(G.cyl(0.006, 0.006, 0.55, 4), mat(0xf6efe0), { x: s * 0.5, y: 0.0 + k * 0.05, z: 0.3, rz: Math.PI / 2 + k * 0.12 * s, ry: -s * 0.25, shadow: false }));
    }
  }
  head.add(mesh(G.sphere(0.045, 10, 8), mat(0xc76a6a), { y: 0.04, z: 0.45, shadow: false }));
  // Улыбка до ушей: тёмная прорезь + зубы
  head.add(mesh(G.torus(0.27, 0.07, 8, 28, Math.PI), mat(0x2a120c), { y: -0.02, z: 0.33, rz: Math.PI, sz: 0.6, shadow: false }));
  head.add(mesh(G.torus(0.27, 0.052, 8, 28, Math.PI), mat(0xfbf6ea, { roughness: 0.3 }), { y: -0.02, z: 0.37, rz: Math.PI, sz: 0.5, shadow: false }));

  // Шесть лап
  const legs = [];
  for (const z of [0.6, 0.0, -0.6]) {
    for (const s of [-1, 1]) {
      const l = joint(s * 0.42, 0.62, z);
      l.add(mesh(G.capsule(0.13, 0.3, 4, 10), fur, { y: -0.25 }));
      l.add(mesh(G.sphere(0.15, 12, 10), cream, { y: -0.5, z: 0.05, sy: 0.7 }));
      model.add(l);
      legs.push({ l, phase: (z === 0 ? Math.PI : 0) + (s > 0 ? Math.PI : 0) });
    }
  }

  // Полосатый хвост
  const tail = joint(0, 1.05, -1.2);
  model.add(tail);
  const segs = [];
  let parent = tail;
  for (let i = 0; i < 6; i++) {
    const seg = joint(0, i === 0 ? 0 : 0.2, 0);
    seg.add(mesh(G.sphere(0.13 - i * 0.008, 12, 10), i % 2 ? cream : brown, { y: 0.1, sy: 1.3 }));
    seg.rotation.x = -0.35;
    parent.add(seg);
    parent = seg;
    segs.push(seg);
  }

  model.scale.setScalar(0.92);

  let phase = 0, blend = 0, air = 0, sq = 0;
  function update(dt, st) {
    const moving = Math.min(1, st.speed / 4);
    blend = THREE.MathUtils.lerp(blend, moving, 1 - Math.exp(-dt * 10));
    air = THREE.MathUtils.lerp(air, st.grounded ? 0 : 1, 1 - Math.exp(-dt * 12));
    phase += dt * (5 + st.speed * 1.3) * (moving > 0.05 ? 1 : 0);
    legs.forEach(({ l, phase: p }) => {
      l.rotation.x = THREE.MathUtils.lerp(Math.sin(phase + p) * 0.8 * blend, (p ? -0.7 : 0.7), air);
    });
    body.position.y = 1.0 + Math.abs(Math.sin(phase)) * 0.07 * blend + Math.sin(st.t * 2) * 0.015;
    body.rotation.x = -air * 0.15 + 0.05 * blend;
    head.rotation.y = Math.sin(st.t * 0.7) * 0.1 * (1 - blend);
    segs.forEach((s, i) => { s.rotation.z = Math.sin(st.t * 3 + i * 0.6) * 0.15 * (0.5 + blend); });
    windowMat.emissiveIntensity = 1.5 + Math.sin(st.t * 3) * 0.1;
    if (st.landed) sq = Math.min(0.2, 0.06 + Math.abs(st.landSpeed) * 0.01);
    sq = THREE.MathUtils.lerp(sq, 0, 1 - Math.exp(-dt * 12));
    root.scale.set(1 + sq * 0.5, 1 - sq, 1 + sq * 0.5);
  }

  return { root, update, height: 1.9 };
}
