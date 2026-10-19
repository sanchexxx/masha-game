// Магия леса Тоторо: то, что он создаёт и призывает во время раунда.
//  • Великий дуб — стоит до конца раунда, по стволу можно залезть на площадку в кроне;
//  • Лесной домик — шалаш из веток: внутри тебя не видно, как в кусте;
//  • Лесной фонарь — Безлик в его свете подсвечен сквозь стены и идёт медленнее;
//  • Обманки — маленькие Тоторо и НэкоБус-помощник: Безлик гонится за ними, а не за друзьями.
// Всё созданное убирается в начале следующего раунда (clear).
import * as THREE from 'three';
import { mat, mesh, G, fluffySphere } from '../characters/common.js?v=2026100901';
import { buildMiniTotoro } from '../characters/totoro.js';

const OAK = { trunk: 0.75, deck: 5.0, crown: 2.6 };

// Нет ли рядом стен, деревьев и других созданий — чтобы не вырастить дуб внутри дома.
function spotFree(world, nav, x, z, r) {
  const lim = world.half - r - 1.5;
  if (Math.abs(x) > lim || Math.abs(z) > lim) return false;
  if (world.waterAt?.(x, z)) return false;
  for (let a = 0; a < 8; a++) {
    const px = x + Math.cos(a / 8 * Math.PI * 2) * r, pz = z + Math.sin(a / 8 * Math.PI * 2) * r;
    const [i, j] = nav.toCell(px, pz);
    if (!nav.free(i, j)) return false;
  }
  const [i, j] = nav.toCell(x, z);
  return nav.free(i, j);
}

function buildOak() {
  const root = new THREE.Group();
  const bark = mat(0x6a4a2e, { roughness: 0.95 });
  const barkDark = mat(0x4a321e, { roughness: 1 });
  // У каждого дуба свои материалы листвы: крону делаем прозрачной, когда в неё попадает камера
  const leaves = [0x3f7f3a, 0x4f9444, 0x356b33].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.9, transparent: true, opacity: 1 }));
  root.userData.leaves = leaves;
  root.add(mesh(G.cyl(OAK.trunk * 0.85, OAK.trunk * 1.25, OAK.deck, 14), bark, { y: OAK.deck / 2 }));
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2;
    root.add(mesh(G.cone(0.32, 1.2, 6), barkDark, { x: Math.cos(a) * 0.95, y: 0.25, z: Math.sin(a) * 0.95, rz: Math.cos(a) * 1.2, rx: -Math.sin(a) * 1.2 }));
  }
  // Ступеньки-сучки по кругу: видно, что по дубу можно лезть
  for (let k = 0; k < 9; k++) {
    const a = k * 1.9, y = 0.7 + k * 0.48;
    root.add(mesh(G.box(0.55, 0.09, 0.22), barkDark, { x: Math.cos(a) * 0.86, y, z: Math.sin(a) * 0.86, ry: -a }));
  }
  // Площадка в кроне и пышная крона вокруг и над ней
  root.add(mesh(G.cyl(OAK.crown, OAK.crown * 0.92, 0.35, 20), mat(0x5a7a34, { roughness: 1 }), { y: OAK.deck - 0.17 }));
  for (let i = 0; i < 10; i++) {
    const a = i / 10 * Math.PI * 2;
    root.add(mesh(fluffySphere(1.25, 1, 0.14, i), leaves[i % 3], { x: Math.cos(a) * (OAK.crown + 0.4), y: OAK.deck + 0.5 + (i % 2) * 0.5, z: Math.sin(a) * (OAK.crown + 0.4) }));
  }
  root.add(mesh(fluffySphere(2.6, 2, 0.12, 7), leaves[1], { y: OAK.deck + 4.0, sy: 0.75 }));
  root.add(mesh(fluffySphere(1.6, 1, 0.14, 3), leaves[0], { x: 1.4, y: OAK.deck + 3.3, z: -0.8 }));
  // Светлячки в кроне
  for (let i = 0; i < 6; i++) root.add(mesh(G.sphere(0.06, 6, 4), mat(0xfff0a0, { emissive: 0xffdd66, emissiveIntensity: 3 }), { x: Math.sin(i * 2.3) * 2.4, y: OAK.deck + 1.5 + (i % 3) * 0.6, z: Math.cos(i * 2.3) * 2.4, shadow: false }));
  return root;
}

function buildHut() {
  const root = new THREE.Group();
  const wood = mat(0x7a5532, { roughness: 0.9 });
  const moss = mat(0x4f7d35, { roughness: 1 });
  const grass = mat(0x6f9a3f, { roughness: 1, side: THREE.DoubleSide });
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2;
    root.add(mesh(G.cyl(0.07, 0.09, 2.4, 6), wood, { x: Math.cos(a) * 1.45, y: 1.2, z: Math.sin(a) * 1.45, rz: -Math.cos(a) * 0.08, rx: Math.sin(a) * 0.08 }));
  }
  root.add(mesh(G.cone(2.2, 1.8, 10), moss, { y: 3.0 }));
  root.add(mesh(G.cone(0.5, 0.6, 8), mat(0x6a4a2e), { y: 4.05 }));
  // Занавески из травы: снаружи не видно, кто внутри (проход спереди)
  for (let i = 0; i < 18; i++) {
    const a = i / 18 * Math.PI * 2;
    if (Math.abs(Math.atan2(Math.sin(a - Math.PI / 2), Math.cos(a - Math.PI / 2))) < 0.45) continue;
    root.add(mesh(G.box(0.55, 1.9, 0.04), grass, { x: Math.cos(a) * 1.5, y: 1.15, z: Math.sin(a) * 1.5, ry: -a + Math.PI / 2 }));
  }
  root.add(mesh(G.sphere(0.12, 8, 6), mat(0xffd27a, { emissive: 0xffb040, emissiveIntensity: 2.5 }), { y: 2.3, shadow: false }));
  return root;
}

function buildLamp() {
  const root = new THREE.Group();
  root.add(mesh(G.cyl(0.08, 0.1, 2.4, 8), mat(0x6a4a2e), { y: 1.2 }));
  root.add(mesh(G.torus(0.2, 0.04, 6, 12, Math.PI * 1.3), mat(0x6a4a2e), { y: 2.45, x: 0.15, rz: 0.4 }));
  const glow = mat(0xffd27a, { emissive: 0xffa640, emissiveIntensity: 3 });
  root.add(mesh(G.cyl(0.17, 0.17, 0.36, 12), glow, { x: 0.33, y: 2.0, shadow: false }));
  // Светящееся пятно на земле — граница света фонаря
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.1, 1, 48), new THREE.MeshBasicMaterial({ color: 0xffc860, transparent: true, opacity: 0.16, depthWrite: false, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.05;
  root.add(ring);
  root.userData.ring = ring;
  return root;
}

export class Nature {
  // host — Round: world, scene, navFor, agents, activeGhosts, makeChar, heroes, emit
  constructor(host) {
    this.host = host;
    this.items = [];          // {kind, x, z, root, colliders, ladders, bush, cells}
    this.decoys = [];
    this.markers = new Map(); // Безлик → метка, когда он в свете фонаря
  }

  get oaks() { return this.items.filter(i => i.kind === 'oak').length; }
  count(kind) { return this.items.filter(i => i.kind === kind).length; }

  // Свободное место перед героем (или рядом с ним), куда поместится создание радиусом r
  findSpot(agent, r) {
    const nav = this.host.navFor(0.95);       // сетка самого Тоторо уже построена — новую не создаём
    const p = agent.ctrl.pos, yaw = agent.ctrl.yaw;
    // только впереди и по бокам: сзади стоит камера, дуб закрыл бы весь экран
    for (const dist of [r + 2.4, r + 3.4, r + 1.8]) for (const da of [0, 0.5, -0.5, 1.0, -1.0, 1.5, -1.5]) {
      const x = p.x + Math.sin(yaw + da) * dist, z = p.z + Math.cos(yaw + da) * dist;
      if (spotFree(this.host.world, nav, x, z, r)) return { x, z };
    }
    return null;
  }

  // Препятствие должно быть и в физике, и в сетках путей всех героев и Безликов.
  #blockNav(x, z, r) {
    const cells = [];
    for (const nav of this.host.navs?.() || []) {
      const extra = nav.clearance ?? 0.55;
      for (let j = 0; j < nav.n; j++) {
        const cz = -nav.half + (j + 0.5) * nav.cell;
        if (Math.abs(cz - z) > r + extra + 0.5) continue;
        for (let i = 0; i < nav.n; i++) {
          const cx = -nav.half + (i + 0.5) * nav.cell;
          if ((cx - x) ** 2 + (cz - z) ** 2 >= (r + extra) ** 2) continue;
          const k = j * nav.n + i;
          if (!nav.blocked[k]) { nav.blocked[k] = 1; cells.push([nav, k]); }
        }
      }
    }
    return cells;
  }

  addOak(x, z) {
    const W = this.host.world;
    const root = buildOak();
    root.position.set(x, 0, z);
    this.host.scene.add(root);
    const colliders = [
      W.addCircle(x, z, OAK.trunk, OAK.deck - 0.35),
      W.addCircle(x, z, OAK.crown, OAK.deck, { bottom: OAK.deck - 0.35, nav: false, sight: false, platform: true }),
    ];
    const ladders = [];
    for (const [nx, nz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      W.addLadder(x + nx * OAK.trunk, z + nz * OAK.trunk, nx, nz, 1.3, OAK.deck + 0.1);
      ladders.push(W.ladders[W.ladders.length - 1]);
    }
    this.items.push({ kind: 'oak', x, z, root, colliders, ladders, cells: this.#blockNav(x, z, OAK.trunk), grow: 0 });
    root.scale.set(0.05, 0.05, 0.05);
    return true;
  }

  addHut(x, z) {
    const W = this.host.world;
    const root = buildHut();
    root.position.set(x, 0, z);
    this.host.scene.add(root);
    W.addBush(x, z, 1.55, 'hut');
    this.items.push({ kind: 'hut', x, z, root, colliders: [], ladders: [], bush: W.bushes[W.bushes.length - 1], cells: [], grow: 0 });
    root.scale.set(0.05, 0.05, 0.05);
    return true;
  }

  addLamp(x, z, radius) {
    const root = buildLamp();
    root.position.set(x, 0, z);
    root.userData.ring.scale.setScalar(radius);
    this.host.scene.add(root);
    this.items.push({ kind: 'lamp', x, z, r: radius, root, colliders: [], ladders: [], cells: [], grow: 0 });
    root.scale.set(0.05, 0.05, 0.05);
    return true;
  }

  // Обманка: бежит прочь от Безлика; Безлик принимает её за героя.
  addDecoy({ char, x, z, speed, life, name, radius = 0.45, height = 1, hero = null }) {
    const pos = new THREE.Vector3(x, 0, z);
    const d = {
      decoy: true, name, hero: hero || { id: 'decoy', name }, alive: true, hidden: false, protected: false, prop: null, underwaterHidden: false,
      ctrl: { pos, height, radius, running: true, speed: 0, yaw: 0, crouching: false },
      char, speed, life, path: null, repath: 0,
    };
    char.root.position.copy(pos);
    char.root.visible = true;
    if (!char.root.parent) this.host.scene.add(char.root);
    this.decoys.push(d);
    return d;
  }

  // Камера внутри кроны (стоишь наверху или дуб рядом) — листва становится прозрачной
  cameraFade(cam) {
    for (const it of this.items) {
      if (it.kind !== 'oak') continue;
      const d = Math.hypot(cam.x - it.x, cam.z - it.z);
      const inside = d < OAK.crown + 2.4 && cam.y > OAK.deck - 1.8;
      const want = inside ? 0.22 : 1;
      for (const m of it.root.userData.leaves) {
        m.opacity += (want - m.opacity) * 0.2;
        m.depthWrite = m.opacity > 0.95;
      }
    }
  }

  // Безлик бежит за обманкой
  lure(ghost, decoy) {
    if (!ghost.active || ghost.human) return;
    ghost.target = decoy;
    ghost.state = 'hunt';
    ghost.lastSeen = decoy.ctrl.pos.clone();
    ghost.unseen = 0;
    ghost.path = null;
  }

  decoyCaught(d) {
    if (!d.alive) return;
    d.alive = false;
    d.life = 0;
    this.host.emit('poof', { x: d.ctrl.pos.x, y: d.ctrl.pos.y, z: d.ctrl.pos.z });
  }

  update(dt, t) {
    const R = this.host;
    for (const it of this.items) {
      if (it.grow < 1) {
        it.grow = Math.min(1, it.grow + dt / 1.2);
        const k = 1 - (1 - it.grow) ** 3;
        it.root.scale.set(k, k * (1 + Math.sin(it.grow * Math.PI) * 0.12), k);
      }
      if (it.kind === 'lamp') it.root.userData.ring.material.opacity = 0.13 + Math.sin(t * 2.4) * 0.04;
    }
    // Фонари: Безлик в свете подсвечен и медленнее
    const lamps = this.items.filter(i => i.kind === 'lamp');
    for (const g of R.activeGhosts || []) {
      const lit = g.active && lamps.some(l => Math.hypot(g.pos.x - l.x, g.pos.z - l.z) < l.r);
      g.lampSlow = lit;
      let m = this.markers.get(g);
      if (lit && !m) {
        m = new THREE.Mesh(new THREE.OctahedronGeometry(0.28, 0), new THREE.MeshBasicMaterial({ color: 0xffc860, depthTest: false, transparent: true, opacity: 0.9 }));
        m.renderOrder = 10;
        R.scene.add(m);
        this.markers.set(g, m);
      }
      if (m) {
        m.visible = lit;
        m.position.set(g.pos.x, g.pos.y + 3.4 + Math.sin(t * 4) * 0.1, g.pos.z);
        m.rotation.y = t * 3;
      }
    }
    // Обманки бегут прочь от ближайшего Безлика по сетке путей
    for (const d of this.decoys) {
      if (!d.alive) continue;
      d.life -= dt;
      if (d.life <= 0) { this.decoyCaught(d); continue; }
      const p = d.ctrl.pos;
      const ghosts = (R.activeGhosts || []).filter(g => g.active);
      const near = ghosts.sort((a, b) => a.pos.distanceToSquared(p) - b.pos.distanceToSquared(p))[0];
      const nav = R.navFor(d.ctrl.radius);
      d.repath -= dt;
      if (!d.path || !d.path.length || d.repath <= 0) {
        d.repath = 0.9;
        const ax = near ? p.x - near.pos.x : Math.sin(d.ctrl.yaw), az = near ? p.z - near.pos.z : Math.cos(d.ctrl.yaw);
        const len = Math.hypot(ax, az) || 1;
        const turn = (Math.random() - 0.5) * 1.2;
        const gx = p.x + (ax / len * Math.cos(turn) - az / len * Math.sin(turn)) * 9;
        const gz = p.z + (az / len * Math.cos(turn) + ax / len * Math.sin(turn)) * 9;
        const [i, j] = nav.nearestFree(...nav.toCell(gx, gz));
        const [tx, tz] = nav.center(i, j);
        d.path = nav.find(p.x, p.z, tx, tz) || [[tx, tz]];
      }
      const [wx, wz] = d.path[0];
      const dx = wx - p.x, dz = wz - p.z, dl = Math.hypot(dx, dz);
      if (dl < 0.4) d.path.shift();
      else {
        const step = Math.min(dl, d.speed * dt);
        p.x += dx / dl * step; p.z += dz / dl * step;
        d.ctrl.yaw = Math.atan2(dx, dz);
      }
      d.ctrl.speed = d.speed;
      p.y = R.world.groundAt(p.x, p.z, d.ctrl.radius, p.y + 0.6);
      d.char.root.position.copy(p);
      d.char.root.rotation.y = d.ctrl.yaw;
      d.char.update(dt, { t, speed: d.speed, grounded: true, landed: false, action: null });
    }
    for (const d of this.decoys) if (!d.alive && d.char.root.visible) { d.char.root.visible = false; R.scene.remove(d.char.root); }
    this.decoys = this.decoys.filter(d => d.alive);
  }

  clear() {
    const W = this.host.world;
    for (const it of this.items) {
      it.root.removeFromParent();
      W.circles = W.circles.filter(c => !it.colliders.includes(c));
      W.ladders = W.ladders.filter(l => !it.ladders.includes(l));
      if (it.bush) W.bushes = W.bushes.filter(b => b !== it.bush);
      for (const [nav, k] of it.cells) nav.blocked[k] = 0;
    }
    if (this.items.length) W.grid = null;
    this.items = [];
    for (const d of this.decoys) { d.char.root.visible = false; d.char.root.removeFromParent(); }
    this.decoys = [];
    for (const m of this.markers.values()) m.removeFromParent();
    this.markers.clear();
    for (const g of this.host.activeGhosts || []) g.lampSlow = false;
  }
}

export function miniTotoro(kind) { return buildMiniTotoro(kind); }

// Только картинка (у гостей совместной игры физику считает хозяин комнаты)
export function natureVisual(kind, radius = 9) {
  if (kind === 'oak') return buildOak();
  if (kind === 'hut') return buildHut();
  const r = buildLamp();
  r.userData.ring.scale.setScalar(radius);
  return r;
}
