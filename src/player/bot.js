// «Мозг» бота: выдаёт тот же ввод, что и клавиатура ({x, y, run, jump, dash}),
// поэтому бот бегает ровно по той же физике, что и игрок.
// Поведение: гуляет → заметил Безлика → убегает (с рывком, если тот близко) → прячется в куст.
import { CONFIG } from '../config/config.js';

export class BotBrain {
  constructor(agent, world, nav) {
    this.agent = agent;
    this.world = world;
    this.nav = nav;
    this.mode = 'wander';
    this.goal = null;
    this.path = null;
    this.think = Math.random() * 0.3;
    this.stuck = 0;
    this.idle = 0;
    this.sat = 0;                   // сколько уже сидим в кусте
    this.patience = this.#newPatience();
  }

  #newPatience() { const [a, b] = CONFIG.bots.restless; return a + Math.random() * (b - a); }

  // ghosts — активные Безлики; вернёт ввод на этот кадр
  update(dt, ghosts) {
    this.ghosts = ghosts;
    const B = CONFIG.bots;
    const c = this.agent.ctrl;
    const p = c.pos;
    let threat = null, td = Infinity;
    for (const g of ghosts) {
      if (!g.active) continue;
      const d = Math.hypot(g.pos.x - p.x, g.pos.z - p.z);
      const visible = d < B.fleeRange && this.world.lineOfSight(p.x, p.z, g.pos.x, g.pos.z, true);
      if ((visible || g.target === this.agent) && d < td) { td = d; threat = g; }
    }
    this.threat = threat;

    this.think -= dt;
    if (this.think <= 0) {
      this.think = B.think * (0.7 + Math.random() * 0.6);
      this.#decide(threat, td);
    }

    // идём по пути
    const inp = { x: 0, y: 0, run: false, jump: false, dash: false };
    if (this.mode === 'hide' && this.world.inBush(p.x, p.z) && (!threat || threat.target !== this.agent || td > 4)) {
      this.sat += dt;
      // заскучал и Безлика не видно — перебегаем в другое место (так в «Смотреть» интереснее)
      if (!threat && this.sat > this.patience) {
        this.sat = 0; this.patience = this.#newPatience();
        this.mode = 'wander'; this.path = null; this.think = 0;
      }
      return inp;                     // сидим тихо в кусте
    }
    this.sat = 0;
    if (this.mode === 'wander' && this.idle > 0) { this.idle -= dt; return inp; }
    if (!this.path || !this.path.length) return inp;
    const [tx, tz] = this.path[0];
    let dx = tx - p.x, dz = tz - p.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.7) { this.path.shift(); if (!this.path.length && this.mode === 'wander') this.idle = Math.random() * 2; return inp; }
    dx /= d; dz /= d;
    // камера для бота «смотрит на север» (camYaw = 0): вперёд = −Z, вправо = +X
    inp.x = dx; inp.y = -dz;
    const fleeing = this.mode === 'flee' || this.mode === 'help' || (this.mode === 'hide' && threat);
    inp.run = fleeing && (c.stamina > 0.15 || !c.exhausted);
    inp.dash = fleeing && threat && td < 5;

    // застрял — прыгаем и перестраиваем путь
    if (c.speed < 0.6) this.stuck += dt; else this.stuck = 0;
    if (this.stuck > 0.5) { inp.jump = true; this.stuck = 0; this.path = null; this.think = 0; }
    return inp;
  }

  #decide(threat, td) {
    const p = this.agent.ctrl.pos;
    // Герой-помощник (Моти): если за другом гонятся и рядом — бежим выручать
    if (!threat && this.agent.hero.helper && this.allies) {
      const hunted = this.#huntedAlly();
      if (hunted) { this.mode = 'help'; this.#go(hunted.ctrl.pos.x, hunted.ctrl.pos.z); return; }
      if (this.mode === 'help') this.mode = 'wander';
    }
    if (threat) {
      // уже сидим в кусте и нас не ищут — не выдаём себя
      if (this.mode === 'hide' && this.world.inBush(p.x, p.z) && threat.target !== this.agent) return;
      const bush = Math.random() < CONFIG.bots.hideChance ? this.#safeBush(threat) : null;
      if (bush) { this.mode = 'hide'; this.#go(bush.x, bush.z); return; }
      this.mode = 'flee';
      this.#go(...this.#fleePoint(threat));
      return;
    }
    if (this.mode === 'flee') this.mode = 'wander';
    if (this.mode === 'hide' && this.world.inBush(p.x, p.z)) return;
    if (!this.path || !this.path.length) {
      this.mode = Math.random() < 0.3 ? 'hide' : 'wander';
      if (this.mode === 'hide') { const b = this.#safeBush(null); if (b) return this.#go(b.x, b.z); }
      const [i, j] = this.nav.toCell(p.x + (Math.random() - 0.5) * 24, p.z + (Math.random() - 0.5) * 24);
      const [fi, fj] = this.nav.nearestFree(i, j);
      this.#go(...this.nav.center(fi, fj));
    }
  }

  #huntedAlly() {
    const p = this.agent.ctrl.pos;
    let best = null, bd = CONFIG.bots.helpRange;
    for (const a of this.allies()) {
      if (a === this.agent || !a.alive || !this.ghosts) continue;
      if (!this.ghosts.some(g => g.active && g.target === a)) continue;
      const d = a.ctrl.pos.distanceTo(p);
      if (d < bd) { bd = d; best = a; }
    }
    return best;
  }

  #go(x, z) {
    const p = this.agent.ctrl.pos;
    this.path = this.nav.find(p.x, p.z, x, z) || [[x, z]];
  }

  // Точка, где будем дальше всего от Безлика: пробуем 12 направлений
  #fleePoint(g) {
    const p = this.agent.ctrl.pos;
    let best = null, bs = -Infinity;
    for (let k = 0; k < 12; k++) {
      const a = (k / 12) * Math.PI * 2;
      const x = p.x + Math.cos(a) * 9, z = p.z + Math.sin(a) * 9;
      const [i, j] = this.nav.toCell(x, z);
      if (!this.nav.free(i, j)) continue;
      const away = Math.hypot(x - g.pos.x, z - g.pos.z);
      const toward = ((x - p.x) * (g.pos.x - p.x) + (z - p.z) * (g.pos.z - p.z)) / 81;
      const cover = this.world.lineOfSight(g.pos.x, g.pos.z, x, z) ? 0 : 4;
      const s = away - toward * 6 + cover + Math.random() * 2;
      if (s > bs) { bs = s; best = [x, z]; }
    }
    return best || [p.x, p.z];
  }

  // Куст подальше от Безлика и не слишком далеко от нас
  #safeBush(g) {
    const p = this.agent.ctrl.pos;
    let best = null, bs = -Infinity;
    for (const b of this.world.bushes) {
      const d = Math.hypot(b.x - p.x, b.z - p.z);
      if (d > 18) continue;
      if (!g && d < b.r + 1) continue;   // без погони — не в тот же куст, где уже сидели
      let s = -d;
      if (g) {
        const gd = Math.hypot(b.x - g.pos.x, b.z - g.pos.z);
        if (gd < d) continue;         // куст за спиной у Безлика — не туда
        s += gd * 0.8;
      }
      if (s > bs) { bs = s; best = b; }
    }
    return best;
  }
}
