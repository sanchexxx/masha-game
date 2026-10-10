// Безлик: появляется у святилища, ищет, замечает, преследует — любого героя, игрока или бота.
// Ездит на ТОЙ ЖЕ физике, что и герои (PlayerController, CONFIG.heroes.noface):
//  • скорость как у героя, бег тратит силы — выдохся, и от него можно уйти;
//  • рывков ограниченно (заряды копятся со временем);
//  • не прыгает, а парит вверх — так достаёт героев с ящиков и крыш;
//  • тяжёлый и инерционный — от него можно увернуться финтом;
//  • МАСКИРОВКА: на время выглядит как один из героев, боты его не боятся, пока он не подойдёт вплотную.
// Им управляет либо «мозг» (как раньше), либо игрок — режим «Играю за Безлика».
// Прятки работают: за домом, деревом, в кусте или в доме за ширмой он не видит,
// но идёт туда, где видел в последний раз, и слышит бег поблизости.
import * as THREE from 'three';
import { CONFIG } from '../config/config.js?v=2026100901';
import { NavGrid } from './pathfinder.js?v=2026100901';
import { PlayerController } from '../player/controller.js?v=2026100901';
import { radialTexture } from '../characters/noface.js?v=2026100901';
import { buildProp, PROP_KINDS } from '../world/props.js?v=2026100901';

const C = CONFIG.ghost;
const EYE = 2.1;
let shimmerTex = null;

export class Ghost {
  constructor(def, world, scene, nav, { heroes = [] } = {}) {
    this.def = def;
    this.world = world;
    this.scene = scene;
    this.heroes = heroes;
    this.char = def.build();
    this.root = this.char.root;
    this.root.visible = false;
    scene.add(this.root);
    this.nav = nav || new NavGrid(world, def.radius + 0.1);
    this.ctrl = new PlayerController(def, world);
    this.pos = this.ctrl.pos;
    this.vel = this.ctrl.vel;
    this.disguises = new Map();    // модели героев для маскировки — строятся при первой надобности
    this.isPlayer = false;
    this.reset(new THREE.Vector3());
  }

  get radius() { return this.def.radius; }
  // Безликом управляет человек: игрок на этом устройстве или гость совместной игры
  get human() { return this.isPlayer || !!this.remote; }
  get yaw() { return this.ctrl.yaw; }

  reset(spawn) {
    this.ctrl.spawn(spawn, 0);
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
    this.stunT = 0; this.slowT = 0; this.confusedT = 0;
    this.stuckT = 0; this.stuckFrom = null;
    this.aiFlightT = 0;
    this.disguise = null;          // {hero, char, t}
    this.disguiseCd = 6;
    this.caughtN = 0;
    this.#hideDisguise();
  }

  spawn() {
    this.state = 'appear';
    this.appear = 0;
    this.root.visible = true;
  }

  get active() { return this.state === 'search' || this.state === 'hunt'; }
  get disguised() { return !!this.disguise; }
  get eyeY() { return this.pos.y + EYE; }

  stun(sec) { this.stunT = Math.max(this.stunT, sec); this.ctrl.dashT = 0; this.reveal(); }
  slow(sec) { this.slowT = Math.max(this.slowT, sec); }
  confuse(sec) { this.confusedT = Math.max(this.confusedT, sec); this.reveal(); }
  knock(dx, dz, dist) {
    const next = { x: this.pos.x + dx * dist, y: this.pos.y, z: this.pos.z + dz * dist };
    this.world.resolve(next, this.radius, this.pos.y + 0.3, this.pos.y + 2.2);
    this.pos.x = next.x; this.pos.z = next.z;
    this.vel.set(0, 0, 0);
    this.path = null;
  }

  // ---------- Маскировка ----------
  get disguiseReady() { return this.disguiseCd <= 0 && !this.disguise && this.active && this.stunT <= 0; }

  // kind: 'hero' — притвориться героем, 'prop' — предметом (ящик, фонарь, тыква…)
  useDisguise(targets = [], kind = 'hero') {
    if (!this.disguiseReady) return false;
    if (kind === 'prop') {
      const pk = PROP_KINDS[(Math.random() * PROP_KINDS.length) | 0];
      let obj = this.disguises.get('prop:' + pk.id);
      if (!obj) { obj = { root: buildProp(pk.id), update() {} }; this.disguises.set('prop:' + pk.id, obj); }
      this.scene.add(obj.root);
      obj.root.visible = true;
      this.disguise = { prop: pk, char: obj, t: C.disguise.time };
    } else {
      if (!this.heroes.length) return false;
      // притворяемся тем, кого сейчас нет рядом (чтобы не было двух одинаковых Маш бок о бок)
      const aliveIds = new Set(targets.filter(a => a.alive).map(a => a.hero.id));
      const pool = this.heroes.filter(h => !aliveIds.has(h.id));
      const list = pool.length ? pool : this.heroes;
      const hero = list[(Math.random() * list.length) | 0];
      let char = this.disguises.get(hero.id);
      if (!char) {
        char = hero.build('classic');
        if (!shimmerTex) shimmerTex = radialTexture('rgba(150,80,230,0.55)', 'rgba(90,30,160,0)');
        // еле заметная фиолетовая дымка у ног — внимательный игрок раскусит
        const sh = new THREE.Sprite(new THREE.SpriteMaterial({ map: shimmerTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.5 }));
        sh.scale.set(hero.radius * 3, 0.9, 1);
        sh.position.y = 0.35;
        char.root.add(sh);
        char.shimmer = sh;
        this.disguises.set(hero.id, char);
      }
      this.scene.add(char.root);
      char.root.visible = true;
      this.disguise = { hero, char, t: C.disguise.time };
    }
    this.root.visible = false;
    this.poof = true;              // игра покажет облачко
    return true;
  }

  reveal() {
    if (!this.disguise) return;
    this.#hideDisguise();
    this.disguise = null;
    this.disguiseCd = C.disguise.cd;
    this.root.visible = this.state !== 'hidden';
    this.poof = true;
  }

  #hideDisguise() {
    for (const c of this.disguises.values()) { c.root.visible = false; this.scene.remove(c.root); }
  }

  // targets: [{ctrl, alive, hidden, protected}]; env: {domes:[{x,z,r}]}
  // inp/camYaw — только если Безликом управляет игрок
  update(dt, t, targets, roundT, env = {}, inp = null, camYaw = 0) {
    const st = { t, speed: 0, mode: 'search', appear: 1 };
    if (this.state === 'hidden') return st;

    if (this.state === 'appear') {
      this.appear = Math.min(1, this.appear + dt / 2.2);
      st.appear = this.appear;
      st.mode = 'hunt';
      if (this.appear >= 1) this.state = this.human ? 'hunt' : 'search';
      this.#pose(st, dt);
      return st;
    }

    this.stunT = Math.max(0, this.stunT - dt);
    this.slowT = Math.max(0, this.slowT - dt);
    this.confusedT = Math.max(0, this.confusedT - dt);
    this.disguiseCd = Math.max(0, this.disguiseCd - dt);
    if (this.disguise) { this.disguise.t -= dt; if (this.disguise.t <= 0) this.reveal(); }

    const pick = this.#perceive(dt, targets);

    let move;
    if (this.human) move = inp;
    else move = this.#think(dt, pick, targets);
    if (this.confusedT > 0 && move) move = { ...move, x: -(move.y || 0), y: move.x || 0, run: false, dash: false };

    const c = this.ctrl;
    c.moveMul = this.stunT > 0 ? 0 : 1;
    if (this.disguise?.prop && move) { c.moveMul *= CONFIG.abilities.prop.walk; move = { ...move, run: false, jumpHold: false, jump: false }; }
    c.slowMul = (this.slowT > 0 ? 0.45 : 1) * (1 + C.lateBoost * roundT) * (this.speedMul ?? 1);
    const wasDash = c.dashT > 0;
    c.update(dt, this.stunT > 0 ? { x: 0, y: 0 } : move, this.human ? camYaw : 0);
    if (c.dashT > 0 && !wasDash) this.reveal();          // рывок выдаёт маскировку
    this.dashed = c.dashed;

    // Купол «Уютного приюта» не пускает внутрь
    for (const d of env.domes || []) {
      const dx = this.pos.x - d.x, dz = this.pos.z - d.z, min = d.r + this.radius;
      const dd = Math.hypot(dx, dz);
      if (dd < min) {
        const n = dd || 1e-3;
        this.pos.x = d.x + dx / n * min; this.pos.z = d.z + dz / n * min;
        const into = (this.vel.x * dx + this.vel.z * dz) / n;
        if (into < 0) { this.vel.x -= into * dx / n; this.vel.z -= into * dz / n; }
      }
    }
    if (!this.human) this.#checkStuck(dt);

    st.mode = this.stunT > 0 ? 'search' : this.state === 'hunt' ? 'hunt' : 'search';
    st.speed = c.speed;
    st.stunned = this.stunT > 0;
    this.#pose(st, dt);
    return st;
  }

  // Кого замечает: видимых и слышимых. Держимся за текущую цель, если она ещё заметна.
  #perceive(dt, targets) {
    let best = null, bestD = Infinity, keep = null;
    const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
    for (const a of targets) {
      if (!a.alive || a.protected) continue;
      const p = a.ctrl.pos;
      const dx = p.x - this.pos.x, dz = p.z - this.pos.z;
      const d = Math.hypot(dx, dz);
      let sees = d < C.sightRange && this.world.lineOfSight(this.pos.x, this.pos.z, p.x, p.z, false, this.eyeY, p.y + a.ctrl.height * 0.75);
      if (a.hidden && d > 2.6) sees = false;
      // предмет видно, только если он шевелится (или Безлик уткнулся в него вплотную)
      if (a.prop && !(a.ctrl.speed > 0.8 && d < 14)) sees = false;
      // за спиной видит хуже: дальше 8 м — только впереди
      if (sees && d > 8 && (dx * fx + dz * fz) / (d || 1) < -0.35) sees = false;
      const hears = a.ctrl.running && d < C.hearRunRange && !a.hidden && !a.prop;
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
      if (this.state !== 'hunt' && !this.disguise) this.state = 'hunt';
    } else {
      this.unseen += dt;
      if (this.state === 'hunt' && this.unseen > C.loseSightTime) {
        this.target = null;
        if (!this.human) this.state = 'search';
      }
    }
    return pick;
  }

  // «Мозг» Безлика: куда плыть, бежать ли, делать ли рывок, взлетать ли, маскироваться ли
  #think(dt, pick, targets) {
    const c = this.ctrl;
    const inp = { x: 0, y: 0, run: false, jump: false, jumpHold: false, dash: false };

    // Маскировка: никого не видит — прикидывается героем и тихо идёт к ближайшему
    if (!pick && this.disguiseReady && Math.random() < dt * 0.25) this.useDisguise(targets, Math.random() < 0.3 ? 'prop' : 'hero');
    // в маске-предмете стоит тихо и ждёт, пока кто-нибудь подойдёт
    if (this.disguise?.prop) {
      const prey = nearestAlive(targets, this.pos);
      if (prey && prey.ctrl.pos.distanceTo(this.pos) < 4.5) { this.reveal(); this.target = prey; this.state = 'hunt'; this.lastSeen = prey.ctrl.pos.clone(); }
      else return inp;
    }

    let goal, sneaking = false;
    if (this.disguise) {
      // в маске не гонится, а подходит «как друг»; вблизи — хватает
      const prey = pick?.a || nearestAlive(targets, this.pos);
      if (prey) { goal = prey.ctrl.pos; this.target = prey; sneaking = prey.ctrl.pos.distanceTo(this.pos) > 3; }
    }
    if (!goal) {
      if (this.state === 'hunt' && this.target) goal = this.sees ? this.target.ctrl.pos : this.lastSeen;
      else if (this.lastSeen && this.pos.distanceTo(this.lastSeen) > 1.5) goal = this.lastSeen;
      else {
        this.lastSeen = null;
        if (!this.wanderTarget || this.pos.distanceTo(this.wanderTarget) < 1.5) {
          const alive = targets.filter(a => a.alive);
          // Проверяет подозрительные вещи: подходит к предмету, который «не на своём месте»
          const props = alive.filter(a => a.prop && a.ctrl.pos.distanceTo(this.pos) < 16 && this.world.lineOfSight(this.pos.x, this.pos.z, a.ctrl.pos.x, a.ctrl.pos.z, true, this.eyeY, 1));
          const r = Math.random();
          if (props.length && r < 0.2) this.wanderTarget = props[(Math.random() * props.length) | 0].ctrl.pos.clone();
          else if (r < 0.6) this.wanderTarget = this.#hidingSpot();       // обходит укрытия: кусты, ширмы, мешки
          else if (r < 0.75 && alive.length) this.wanderTarget = this.#randomPoint(alive[(Math.random() * alive.length) | 0].ctrl.pos);  // «чутьё»
          else this.wanderTarget = this.#randomPoint(this.pos);
        }
        goal = this.wanderTarget;
      }
    }
    if (!goal) return inp;

    const d = Math.hypot(goal.x - this.pos.x, goal.z - this.pos.z);
    // цель выше (ящик, крыша) и мы почти под ней — плывём прямо к ней и взлетаем
    let above = false;
    if (this.target && this.target.alive && !sneaking) {
      const tp = this.target.ctrl.pos;
      above = tp.y - this.pos.y > 0.8 && Math.hypot(tp.x - this.pos.x, tp.z - this.pos.z) < 3.2;
    }
    const aim = above ? this.target.ctrl.pos : this.#aim(goal, this.sees && pick && pick.d < 7, dt);
    let wx = aim.x - this.pos.x, wz = aim.z - this.pos.z;
    const wl = Math.hypot(wx, wz);
    if (wl > 0.05) { inp.x = wx / wl; inp.y = -wz / wl; }

    const hunting = this.state === 'hunt' && !!this.target && !sneaking;
    // бежит, когда видит цель или она близко; бережёт силы, если выдохся
    inp.run = hunting && (this.sees || d < 10) && !c.exhausted;
    // рывок: цель видна, близко, но не вплотную; у бегущей цели — чаще
    if (hunting && this.sees && pick && pick.d < C.burstRange && pick.d > 1.6 && c.dashReady && !this.target.hidden) {
      const runner = this.target.ctrl.running || this.target.ctrl.dashT > 0;
      if (runner || pick.d < 4 || c.dashCharges >= (c.phys.dash.charges ?? 1)) inp.dash = true;
    }
    // Если обычный маршрут упёрся в стену, Безлик набирает высоту и перелетает её.
    // При этом он расходует тот же запас парения, что и игрок, и не летит бесконечно.
    if (!this.disguise && c.flyEnergy > 0.18 && (this.stuckT > 0.38 || (c.hitWall && this.stuckT > 0.15))) {
      this.aiFlightT = Math.max(this.aiFlightT, 1.05);
    }
    inp.jumpHold = above || this.aiFlightT > 0;
    this.aiFlightT = Math.max(0, this.aiFlightT - dt);
    return inp;
  }

  #aim(target, direct, dt) {
    this.repath -= dt;
    if (direct && this.nav.clear(this.pos.x, this.pos.z, target.x, target.z)) { this.path = null; return target; }
    if (!this.path || this.repath <= 0) {
      this.path = this.nav.find(this.pos.x, this.pos.z, target.x, target.z);
      this.repath = C.repathEvery * (0.8 + Math.random() * 0.4);
    }
    if (this.path && this.path.length) {
      const [px, pz] = this.path[0];
      if (Math.hypot(px - this.pos.x, pz - this.pos.z) < 0.7 && this.path.length > 1) this.path.shift();
      return { x: this.path[0][0], z: this.path[0][1] };
    }
    return target;
  }

  // Укрытие поблизости, которое давно не проверяли
  #hidingSpot() {
    this.checked ||= new Map();
    const now = performance.now();
    let best = null, bs = -Infinity;
    for (const b of this.world.bushes) {
      const d = Math.hypot(b.x - this.pos.x, b.z - this.pos.z);
      const ago = (now - (this.checked.get(b) || -1e9)) / 1000;
      const s = Math.min(ago, 60) * 0.5 - d + Math.random() * 8;
      if (s > bs) { bs = s; best = b; }
    }
    if (!best) return this.#randomPoint(this.pos);
    this.checked.set(best, now);
    return new THREE.Vector3(best.x, 0, best.z);
  }

  #randomPoint(near) {
    for (let k = 0; k < 20; k++) {
      const x = near.x + (Math.random() - 0.5) * 22, z = near.z + (Math.random() - 0.5) * 22;
      const [i, j] = this.nav.toCell(x, z);
      if (this.nav.free(i, j)) return new THREE.Vector3(x, 0, z);
    }
    return near.clone();
  }

  // Застрял (упёрся в стену, цель недостижима) — бросаем цель и ищем заново
  #checkStuck(dt) {
    if (this.stunT > 0) { this.stuckT = 0; this.stuckFrom = null; return; }
    if (!this.stuckFrom) this.stuckFrom = this.pos.clone();
    if (this.pos.distanceTo(this.stuckFrom) >= 0.6) {
      this.stuckFrom.copy(this.pos);
      this.stuckT = 0;
      return;
    }
    this.stuckT += dt;
    if (this.stuckT > 1.5) {
      this.wanderTarget = null; this.path = null;
      if (!this.sees) { this.lastSeen = null; if (this.state === 'hunt') { this.state = 'search'; this.target = null; } }
      this.stuckT = 0; this.stuckFrom = this.pos.clone();
    }
  }

  #pose(st, dt) {
    const dz = this.disguise;
    if (dz) {
      const r = dz.char.root;
      r.position.copy(this.pos);
      if (!dz.prop) r.rotation.y = this.yaw;
      dz.char.update(dt, this.ctrl.animState(st.t));
      if (dz.char.shimmer) dz.char.shimmer.material.opacity = 0.35 + Math.sin(st.t * 3) * 0.15;
      return;
    }
    this.root.position.copy(this.pos);
    this.root.rotation.y = this.yaw;
    this.root.rotation.z = st.stunned ? Math.sin(st.t * 18) * 0.06 : 0;
    this.char.update(dt, st);
  }

  // Поймал ли героя. Безлик высокий — достаёт и с ящиков; на крышу — только если подлетел.
  catches(a) {
    if (!this.active || this.stunT > 0 || !a.alive || a.protected) return false;
    const p = a.ctrl.pos;
    return Math.hypot(p.x - this.pos.x, p.z - this.pos.z) < C.catchRadius + a.ctrl.radius * 0.6
      && p.y - this.pos.y < C.catchHeight && this.pos.y - p.y < 1.5;
  }
}

function nearestAlive(targets, p) {
  let best = null, bd = Infinity;
  for (const a of targets) {
    if (!a.alive || a.protected || a.hidden) continue;
    const d = a.ctrl.pos.distanceTo(p);
    if (d < bd) { bd = d; best = a; }
  }
  return best;
}
