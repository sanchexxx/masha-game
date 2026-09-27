// Предметы для «Маскировки»: герой (или Безлик) превращается в вещь, которая и так стоит в деревне.
// Стоишь неподвижно — от настоящей не отличить. Двигаешься — подозрительно!
// А ещё тыковки — монетки, которые собирают по всей карте.
import * as THREE from '../../vendor/three.min.js';
import { mat, mesh, G, fluffySphere } from '../characters/common.js';

export const PROP_KINDS = [
  { id: 'crate', name: 'ящик', icon: '📦' },
  { id: 'lantern', name: 'фонарь', icon: '🏮' },
  { id: 'pumpkin', name: 'тыква', icon: '🎃' },
  { id: 'barrel', name: 'бочка', icon: '🛢️' },
  { id: 'bush', name: 'куст', icon: '🌿' },
];

let bushGeo = null;

export function buildProp(kind) {
  const root = new THREE.Group();
  if (kind === 'crate') {
    root.add(mesh(G.box(1.0, 1.0, 1.0), mat(0x8a5e38, { roughness: 0.85 }), { y: 0.5 }));
    root.add(mesh(G.box(1.04, 0.08, 1.04), mat(0x5a3b22), { y: 0.96 }));
  } else if (kind === 'lantern') {
    const stone = mat(0x75747e, { roughness: 1 });
    root.add(mesh(G.cyl(0.35, 0.45, 0.25, 6), stone, { y: 0.12 }));
    root.add(mesh(G.cyl(0.14, 0.18, 0.7, 8), stone, { y: 0.6 }));
    root.add(mesh(G.box(0.55, 0.42, 0.55), stone, { y: 1.15 }));
    root.add(mesh(G.box(0.3, 0.24, 0.6), mat(0xffc26a, { emissive: 0xffa040, emissiveIntensity: 2.2, roughness: 0.6 }), { y: 1.16, shadow: false }));
    root.add(mesh(G.cone(0.55, 0.36, 6), stone, { y: 1.54 }));
  } else if (kind === 'pumpkin') {
    root.add(mesh(G.sphere(0.55, 14, 10), mat(0xe8812a, { roughness: 0.6, emissive: 0x401800, emissiveIntensity: 0.3 }), { y: 0.42, sy: 0.75 }));
    root.add(mesh(G.cyl(0.05, 0.07, 0.3, 5), mat(0x3b5a24), { y: 0.9 }));
  } else if (kind === 'barrel') {
    root.add(mesh(G.cyl(0.42, 0.42, 1.1, 14), mat(0x7a4f2c, { roughness: 0.8 }), { y: 0.55 }));
    for (const y of [0.2, 0.9]) root.add(mesh(G.cyl(0.44, 0.44, 0.07, 14), mat(0x3a3a44, { metalness: 0.4 }), { y }));
  } else {
    bushGeo ||= fluffySphere(1, 1, 0.22, 7);
    for (let i = 0; i < 3; i++) root.add(mesh(bushGeo, mat(0x24482f, { roughness: 1, flat: true }), { x: Math.cos(i * 2.1) * 0.35, y: 0.6, z: Math.sin(i * 2.1) * 0.35, sx: 0.75, sy: 0.7, sz: 0.75 }));
  }
  return root;
}

// Облачко «пуф» при превращении
export function poof(scene, x, y, z, color = 0xe8dcff) {
  const g = new THREE.Group();
  const m = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, depthWrite: false });
  const parts = [];
  for (let i = 0; i < 9; i++) {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 6), m);
    const a = (i / 9) * Math.PI * 2;
    s.position.set(Math.cos(a) * 0.3, 0.6 + (i % 3) * 0.3, Math.sin(a) * 0.3);
    s.userData.v = new THREE.Vector3(Math.cos(a) * 1.6, 0.8 + Math.random(), Math.sin(a) * 1.6);
    g.add(s); parts.push(s);
  }
  g.position.set(x, y, z);
  scene.add(g);
  let t = 0;
  return {
    update(dt) {
      t += dt;
      for (const s of parts) { s.position.addScaledVector(s.userData.v, dt); s.scale.setScalar(1 + t * 1.5); }
      m.opacity = Math.max(0, 0.8 - t * 1.6);
      if (t > 0.5) { scene.remove(g); m.dispose(); return false; }
    },
  };
}

// ---------- Тыковки-монетки ----------
const WALLET = 'masha-game-pumpkins';
export const wallet = {
  get() { try { return +(localStorage.getItem(WALLET) || 0); } catch { return 0; } },
  add(n) { const v = this.get() + n; try { localStorage.setItem(WALLET, String(v)); } catch {} return v; },
};

export class Pumpkins {
  constructor(scene, nav) {
    this.scene = scene;
    this.nav = nav;
    this.list = [];
    this.geo = new THREE.SphereGeometry(0.28, 12, 8);
    this.mat = new THREE.MeshStandardMaterial({ color: 0xffa23a, emissive: 0xff7a10, emissiveIntensity: 0.9, roughness: 0.4 });
    this.stem = new THREE.CylinderGeometry(0.03, 0.04, 0.14, 5);
    this.stemMat = new THREE.MeshStandardMaterial({ color: 0x3b5a24 });
  }

  clear() { for (const p of this.list) this.scene.remove(p.g); this.list = []; }

  spawn(n) {
    this.clear();
    for (let k = 0; k < n; k++) {
      let x = 0, z = 0;
      for (let tries = 0; tries < 30; tries++) {
        x = (Math.random() * 2 - 1) * (this.nav.half - 3); z = (Math.random() * 2 - 1) * (this.nav.half - 3);
        const [i, j] = this.nav.toCell(x, z);
        if (this.nav.free(i, j) && !this.list.some(p => Math.hypot(p.x - x, p.z - z) < 6)) break;
      }
      const g = new THREE.Group();
      g.add(new THREE.Mesh(this.geo, this.mat));
      const st = new THREE.Mesh(this.stem, this.stemMat); st.position.y = 0.26; g.add(st);
      g.children[0].scale.y = 0.8;
      g.position.set(x, 0.8, z);
      this.scene.add(g);
      this.list.push({ g, x, z, ph: Math.random() * 6 });
    }
  }

  // Кто рядом — забирает. Вернёт список [{agent}] собравших в этот кадр.
  update(dt, t, collectors) {
    const got = [];
    for (let i = this.list.length - 1; i >= 0; i--) {
      const p = this.list[i];
      p.g.rotation.y += dt * 2;
      p.g.position.y = 0.8 + Math.sin(t * 3 + p.ph) * 0.12;
      for (const a of collectors) {
        const c = a.ctrl.pos;
        if (Math.hypot(c.x - p.x, c.z - p.z) < 1.0 && c.y < 1.8) {
          this.scene.remove(p.g);
          this.list.splice(i, 1);
          got.push(a);
          break;
        }
      }
    }
    return got;
  }
}
