// Живые мелочи: светлячки-огоньки и сажинки, которые разбегаются от игрока.
import * as THREE from 'three';
import { mat, mesh, G, fluffySphere } from '../characters/common.js';
import { radialTexture } from '../characters/noface.js';

export function buildFireflies(scene, count, half) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const seeds = [];
  for (let i = 0; i < count; i++) {
    const s = { x: (Math.random() * 2 - 1) * half, z: (Math.random() * 2 - 1) * half, y: 0.6 + Math.random() * 3, p: Math.random() * 10, r: 0.5 + Math.random() * 1.5 };
    seeds.push(s);
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const tex = radialTexture('rgba(255,245,190,1)', 'rgba(255,200,80,0)', 64);
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.35, map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xfff0b0 }));
  pts.frustumCulled = false;
  scene.add(pts);
  return (t) => {
    for (let i = 0; i < count; i++) {
      const s = seeds[i];
      pos[i * 3] = s.x + Math.sin(t * 0.3 + s.p) * s.r;
      pos[i * 3 + 1] = s.y + Math.sin(t * 0.8 + s.p * 2) * 0.4;
      pos[i * 3 + 2] = s.z + Math.cos(t * 0.25 + s.p) * s.r;
    }
    geo.attributes.position.needsUpdate = true;
  };
}

export function buildSoot(scene, world, n = 14) {
  const body = mat(0x0b0b0f, { roughness: 1, flat: true });
  const eyeW = mat(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.4 });
  const eyeB = mat(0x000000);
  const geo = fluffySphere(0.2, 1, 0.35, 4);
  const list = [];
  for (let i = 0; i < n; i++) {
    const g = new THREE.Group();
    g.add(mesh(geo, body));
    for (const s of [-1, 1]) {
      g.add(mesh(G.sphere(0.06, 8, 6), eyeW, { x: s * 0.07, y: 0.04, z: 0.15, shadow: false }));
      g.add(mesh(G.sphere(0.03, 6, 4), eyeB, { x: s * 0.07, y: 0.04, z: 0.2, shadow: false }));
    }
    let x, z;
    do { x = (Math.random() * 2 - 1) * 26; z = (Math.random() * 2 - 1) * 26; } while (world.groundAt(x, z, 0.3, 99) > 0 || Math.hypot(x, z - 22) < 5);
    g.position.set(x, 0.2, z);
    scene.add(g);
    list.push({ g, home: new THREE.Vector2(x, z), vx: 0, vz: 0, hop: Math.random() * 6 });
  }
  const tmp = { x: 0, y: 0, z: 0 };
  return (dt, t, player) => {
    for (const s of list) {
      const dx = s.g.position.x - player.x, dz = s.g.position.z - player.z;
      const d = Math.hypot(dx, dz);
      if (d < 3.2) { s.vx += (dx / d) * 30 * dt; s.vz += (dz / d) * 30 * dt; }
      else { s.vx += (s.home.x - s.g.position.x) * 0.4 * dt; s.vz += (s.home.y - s.g.position.z) * 0.4 * dt; }
      s.vx *= 1 - 3 * dt; s.vz *= 1 - 3 * dt;
      tmp.x = s.g.position.x + s.vx * dt; tmp.z = s.g.position.z + s.vz * dt;
      world.resolve(tmp, 0.2, 0);
      s.g.position.x = tmp.x; s.g.position.z = tmp.z;
      const sp = Math.hypot(s.vx, s.vz);
      s.hop += dt * (4 + sp * 2);
      s.g.position.y = 0.2 + Math.abs(Math.sin(s.hop)) * (0.08 + Math.min(0.35, sp * 0.08));
      if (sp > 0.3) s.g.rotation.y = Math.atan2(s.vx, s.vz);
      else s.g.lookAt(player.x, 0.2, player.z);
    }
  };
}
