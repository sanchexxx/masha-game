// Безлик: появляется у святилища, ищет, замечает, преследует — любого героя, игрока или бота.
// Прятки работают: за домом, деревом или в кусте он не видит, но идёт туда, где видел
// в последний раз, и слышит бег поблизости. Увидев близко — делает рывок.
// На него действуют способности: оглушение, замедление, отбрасывание, купол-приют.
import * as THREE from 'three';
import { CONFIG } from '../config/config.js';
import { NavGrid } from './pathfinder.js';

const C = CONFIG.ghost;

export class Ghost {
  constructor(def, world, scene, nav) {
    this.def = def;
    this.world = world;
    this.char = def.build();
    this.root = this.char.root;
    this.root.visible = false;
    scene.add(this.root);
    this.nav = nav || new NavGrid(world, def.radius + 0.1);
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.reset(new THREE.Vector3());
  }

  get radius() { return this.def.radius; }

  reset(spawn) {
    this.pos.copy(spawn);
    this.vel.set(0, 0, 0);
    this.state = 'hidden';
    this.appear = 0;
    this.root.visible = false;
    this.path = null;
    this.repath = 0;
    this.lastSeen = null;
    this.target = null;
    this.unseen = 0;
    this.wanderTarget = null;
    this.sees = false;
    this.yaw = 0;
    this.burstT = 0; this.burstCd = 0;
    this.stunT = 0; this.slowT = 0;
  }

  spawn() {
    this.state = 'appear';
    this.appear = 0;
    this.root.visible = true;
  }

  get active() { return this.state === 'search' || this.state === 'hunt'; }

  stun(sec) { this.stunT = Math.max(this.stunT, sec); this.burstT = 0; }
  slow(sec) { this.slowT = Math.max(this.slowT, sec); }
  knock(dx, dz, dist) {
    const next = { x: this.pos.x + dx * dist, y: 0, z: this.pos.z + dz * dist };
    this.world.resolve(next, this.radius, 0.3);
    this.pos.x = next.x; this.pos.z = next.z;
    this.vel.set(0, 0, 0);
    this.path = null;
  }

  // targets: [{ctrl, alive, hidden, protected}]; env: {domes:[{x,z,r}]}
  update(dt, t, targets, roundT, env = {}) {
    const st = { t, speed: 0, mode: 'search', appear: 1 };
    if (this.state === 'hidden') return st;

    if (this.state === 'appear') {
      this.appear = Math.min(1, this.appear + dt / 2.2);
      st.appear = this.appear;
      st.mode = 'hunt';
      if (this.appear >= 1) this.state = 'search';
      this.#pose(st, dt);
      return st;
    }

    this.stunT = Math.max(0, this.stunT - dt);
    this.slowT = Math.max(0, this.slowT - dt);
    this.burstCd = Math.max(0, this.burstCd - dt);
    this.burstT = Math.max(0, this.burstT - dt);

    // Кого замечает: видимых и слышимых. Держимся за текущую цель, если она ещё заметна.
    let best = null, bestD = Infinity, keep = null;
    for (const a of targets) {
      if (!a.alive || a.protected) continue;
      const p = a.ctrl.pos;
      const d = Math.hypot(p.x - this.pos.x, p.z - this.pos.z);
      let sees = d < C.sightRange && this.world.lineOfSight(this.pos.x, this.pos.z, p.x, p.z);
      if (a.hidden && d > 2.6) sees = false;
      const hears = a.ctrl.running && d < C.hearRunRange && !a.hidden;
      if (!(sees || hears || d < 2.2)) continue;
      const score = d * (sees ? 1 : 1.6);
      if (a === this.target) keep = { a, d, sees };
      if (score < bestD) { bestD = score; best = { a, d, sees }; }
    }
    const pick = keep && keep.d < bestD * 1.5 + 3 ? keep : best;
    this.sees = !!(pick && pick.sees);
    if (pick) {
      this.target = pick.a;
      this.lastSeen = pick.a.ctrl.pos.clone();
      this.unseen = 0;
      this.state = 'hunt';
      if (pick.sees && pick.d < C.burstRange && this.burstCd <= 0 && this.stunT <= 0) {
        this.burstT = C.burstTime;
        this.burstCd = C.burstCooldown;
      }
    } else {
      this.unseen += dt;
      if (this.state === 'hunt' && this.unseen > C.loseSightTime) { this.state = 'search'; this.target = null; }
    }

    // Куда плыть
    let goal;
    if (this.state === 'hunt') goal = this.sees ? this.target.ctrl.pos : this.lastSeen;
    else if (this.lastSeen && this.pos.distanceTo(this.lastSeen) > 1.5) goal = this.lastSeen;
    else {
      this.lastSeen = null;
      if (!this.wanderTarget || this.pos.distanceTo(this.wanderTarget) < 1.5) {
        const alive = targets.filter(a => a.alive);
        const near = alive.length ? alive[(Math.random() * alive.length) | 0].ctrl.pos : this.pos;
        this.wanderTarget = this.#randomPoint(near);
      }
      goal = this.wanderTarget;
    }

    let speed = this.state === 'hunt' ? THREE.MathUtils.lerp(C.huntSpeed, C.huntSpeedMax, roundT) : C.walkSpeed;
    if (this.burstT > 0) speed *= C.burstMul;
    if (this.slowT > 0) speed *= 0.45;
    if (this.stunT > 0) speed = 0;
    this.#moveTo(goal, speed, dt, this.sees && pick.d < 6, env.domes || []);

    st.mode = this.stunT > 0 ? 'search' : this.state === 'hunt' ? 'hunt' : 'search';
    st.speed = Math.hypot(this.vel.x, this.vel.z);
    st.stunned = this.stunT > 0;
    this.#pose(st, dt);
    return st;
  }

  #randomPoint(near) {
    for (let k = 0; k < 20; k++) {
      const x = near.x + (Math.random() - 0.5) * 22, z = near.z + (Math.random() - 0.5) * 22;
      const [i, j] = this.nav.toCell(x, z);
      if (this.nav.free(i, j)) return new THREE.Vector3(x, 0, z);
    }
    return near.clone();
  }

  #moveTo(target, speed, dt, direct, domes) {
    this.repath -= dt;
    let aim;
    if (direct && this.nav.clear(this.pos.x, this.pos.z, target.x, target.z)) {
      aim = target;
      this.path = null;
    } else {
      if (!this.path || this.repath <= 0) {
        this.path = this.nav.find(this.pos.x, this.pos.z, target.x, target.z);
        this.repath = C.repathEvery * (0.8 + Math.random() * 0.4);
      }
      if (this.path && this.path.length) {
        const [px, pz] = this.path[0];
        if (Math.hypot(px - this.pos.x, pz - this.pos.z) < 0.6 && this.path.length > 1) this.path.shift();
        aim = { x: this.path[0][0], z: this.path[0][1] };
      } else aim = target;
    }
    let wx = aim.x - this.pos.x, wz = aim.z - this.pos.z;
    const wl = Math.hypot(wx, wz);
    if (wl > 0.05) { wx = wx / wl * speed; wz = wz / wl * speed; } else wx = wz = 0;
    const k = 1 - Math.exp(-dt * (this.burstT > 0 ? C.accel * 2.5 : C.accel) * 0.55);
    this.vel.x += (wx - this.vel.x) * k;
    this.vel.z += (wz - this.vel.z) * k;
    if (this.stunT > 0) this.vel.multiplyScalar(0.8);
    const next = { x: this.pos.x + this.vel.x * dt, y: 0, z: this.pos.z + this.vel.z * dt };
    this.world.resolve(next, this.radius, 0.3);
    // Купол «Уютного приюта» не пускает внутрь
    for (const d of domes) {
      const dx = next.x - d.x, dz = next.z - d.z, min = d.r + this.radius;
      const dd = Math.hypot(dx, dz);
      if (dd < min) { const n = dd || 1e-3; next.x = d.x + dx / n * min; next.z = d.z + dz / n * min; }
    }
    this.pos.x = next.x; this.pos.z = next.z;
    if (Math.hypot(this.vel.x, this.vel.z) > 0.3) {
      const ty = Math.atan2(this.vel.x, this.vel.z);
      this.yaw += Math.atan2(Math.sin(ty - this.yaw), Math.cos(ty - this.yaw)) * Math.min(1, dt * 6);
    }
  }

  #pose(st, dt) {
    this.root.position.copy(this.pos);
    this.root.rotation.y = this.yaw;
    if (st.stunned) this.root.rotation.z = Math.sin(st.t * 18) * 0.06;
    else this.root.rotation.z = 0;
    this.char.update(dt, st);
  }

  // Кого поймал (или null). Безлик высокий — достаёт и с ящиков.
  catches(a) {
    if (!this.active || this.stunT > 0 || !a.alive || a.protected) return false;
    const p = a.ctrl.pos;
    return Math.hypot(p.x - this.pos.x, p.z - this.pos.z) < C.catchRadius + a.ctrl.radius * 0.6 && p.y < 2.4;
  }
}
