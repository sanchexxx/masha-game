// Маша — главная героиня: каре с чёлкой и хвостиком, полосатая футболка, розовые шорты.
import * as THREE from 'three';
import { mat, mesh, G, joint, canvasTexture, animeEye, walkCycle, squash } from './common.js';

export function buildMasha() {
  const root = new THREE.Group();
  const model = new THREE.Group();
  root.add(model);

  const skin = mat(0xf6d2bb, { roughness: 0.6 });
  const hair = mat(0x3a2217, { roughness: 0.55 });
  const shorts = mat(0xe98a9a, { roughness: 0.8 });
  const sock = mat(0xf4f1ea);
  const shoe = mat(0xd9493f, { roughness: 0.45 });

  const stripeTex = canvasTexture(64, 64, (c, w, h) => {
    c.fillStyle = '#f4f2ea'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#6ea77a';
    for (let y = 0; y < h; y += 16) c.fillRect(0, y, w, 8);
  });
  stripeTex.wrapS = stripeTex.wrapT = THREE.RepeatWrapping;
  stripeTex.repeat.set(3, 2.2);
  const shirt = mat(0xffffff, { map: stripeTex, roughness: 0.85 });
  const sleeveTex = stripeTex.clone(); sleeveTex.repeat.set(2, 1); sleeveTex.needsUpdate = true;
  const sleeve = mat(0xffffff, { map: sleeveTex, roughness: 0.85 });

  const rig = { bodyY: 0.62 };

  // Ноги (от бедра вниз)
  for (const side of [-1, 1]) {
    const leg = joint(side * 0.095, 0.62, 0);
    leg.add(mesh(G.capsule(0.066, 0.36), skin, { y: -0.25 }));
    leg.add(mesh(G.cyl(0.07, 0.068, 0.12), sock, { y: -0.49 }));
    leg.add(mesh(G.sphere(1, 16, 12), shoe, { y: -0.57, z: 0.035, sx: 0.085, sy: 0.06, sz: 0.13 }));
    model.add(leg);
    if (side < 0) rig.legR = leg; else rig.legL = leg;
  }

  // Корпус
  const body = joint(0, rig.bodyY, 0);
  model.add(body);
  rig.body = body;
  body.add(mesh(G.cyl(0.175, 0.205, 0.17, 20), shorts, { y: 0.0 }));
  body.add(mesh(G.cyl(0.15, 0.19, 0.36, 20), shirt, { y: 0.24 }));
  body.add(mesh(G.sphere(0.152, 20, 10), shirt, { y: 0.41, sy: 0.45 }));
  body.add(mesh(G.cyl(0.05, 0.055, 0.08), skin, { y: 0.47 }));

  // Руки
  for (const side of [-1, 1]) {
    const arm = joint(side * 0.19, 0.38, 0);
    arm.add(mesh(G.capsule(0.058, 0.1), sleeve, { y: -0.08 }));
    arm.add(mesh(G.capsule(0.043, 0.16), skin, { y: -0.26 }));
    arm.add(mesh(G.sphere(0.05, 12, 10), skin, { y: -0.39 }));
    body.add(arm);
    if (side < 0) rig.armR = arm; else rig.armL = arm;
  }

  // Голова
  const head = joint(0, 0.5, 0);
  body.add(head);
  rig.head = head;
  head.add(mesh(G.sphere(0.24, 32, 24), skin, { y: 0.2, sy: 0.96 }));
  // Уши
  for (const s of [-1, 1]) head.add(mesh(G.sphere(0.045, 10, 8), skin, { x: s * 0.235, y: 0.18, sz: 0.6 }));
  // Глаза, румянец, рот, брови
  for (const s of [-1, 1]) {
    const e = animeEye(0.052);
    e.position.set(s * 0.088, 0.19, 0.214);
    e.rotation.y = s * 0.28;
    head.add(e);
    head.add(mesh(G.sphere(1, 10, 8), mat(0xf29a9a, { opacity: 0.65, roughness: 1 }), { x: s * 0.15, y: 0.115, z: 0.18, sx: 0.045, sy: 0.022, sz: 0.02, ry: s * 0.6, shadow: false }));
    head.add(mesh(G.capsule(0.007, 0.04, 2, 6), hair, { x: s * 0.09, y: 0.265, z: 0.215, rz: Math.PI / 2 + s * 0.18, shadow: false }));
  }
  head.add(mesh(G.torus(0.022, 0.006, 6, 12, Math.PI), mat(0x9a3b35), { y: 0.1, z: 0.232, rz: Math.PI, shadow: false }));

  // Волосы: шапка каре, чёлка, пряди у лица, хвостик с фиолетовой резинкой
  const cap = new THREE.SphereGeometry(0.262, 32, 20, 0, Math.PI * 2, 0, Math.PI * 0.62);
  head.add(mesh(cap, hair, { y: 0.2, z: -0.01, rx: -0.78 }));
  head.add(mesh(G.sphere(0.25, 24, 16), hair, { y: 0.13, z: -0.08, sx: 1.03, sy: 0.9, sz: 0.92 }));
  const bangs = [[-0.12, 0.3], [-0.04, 0.315], [0.05, 0.31], [0.13, 0.295]];
  for (const [x, y] of bangs) head.add(mesh(G.sphere(1, 12, 10), hair, { x, y, z: 0.19, sx: 0.07, sy: 0.075, sz: 0.05, rz: x * 1.4 }));
  for (const s of [-1, 1]) head.add(mesh(G.capsule(0.045, 0.14, 4, 8), hair, { x: s * 0.215, y: 0.1, z: 0.07, rz: s * 0.12 }));
  const tail = joint(0, 0.26, -0.22);
  head.add(tail);
  tail.add(mesh(G.torus(0.035, 0.016, 8, 16), mat(0x8e5ad8, { roughness: 0.3, emissive: 0x3a1a70, emissiveIntensity: 0.6 }), { rx: Math.PI / 2 - 0.4 }));
  tail.add(mesh(G.capsule(0.045, 0.12, 4, 8), hair, { y: -0.09, z: -0.04, rx: 0.5 }));
  rig.tail = tail;

  model.scale.setScalar(1.12);

  function update(dt, st) {
    walkCycle(rig, st, dt, { stride: 0.95, armSwing: 0.85, bob: 0.045 });
    const a = st.action;
    if (a && a.name === 'wave') {
      const env = Math.sin(Math.min(1, a.k) * Math.PI);
      rig.armL.rotation.z = 2.7 * env + Math.sin(st.t * 14) * 0.3 * env;
      rig.armL.rotation.x = -0.2 * env;
      rig.head.rotation.z = Math.sin(st.t * 4) * 0.1 * env;
    } else rig.head.rotation.z = 0;
    rig.tail.rotation.x = 0.25 + Math.sin(rig.phase * 2) * 0.15 * rig.blend + rig.air * 0.5;
    squash(root, st, dt);
  }

  return { root, update, height: 1.72 };
}
