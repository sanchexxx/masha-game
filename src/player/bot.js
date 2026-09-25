// «Мозг» бота: выдаёт тот же ввод, что и клавиатура ({x, y, run, jump, dash}),
// поэтому бот бегает ровно по той же физике, что и игрок.
// Поведение:
//  • гуляет → заметил Безлика → убегает туда, куда успеет раньше него, за стены и в дома;
//  • бережёт силы: вовсю бежит, только когда Безлик близко или видит его;
//  • Безлик вплотную — финт вбок с рывком (Безлик тяжёлый и проскакивает мимо);
//  • прячется в кусты, за ширмы в домах, в мешки на складе; лезет по лестнице на крышу;
//  • на крыше убегает по крышам, а если Безлик взлетает — спрыгивает с другой стороны;
//  • замаскированного Безлика не боится, пока тот не подойдёт вплотную или не побежит.
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
    this.sat = 0;                   // сколько уже сидим в укрытии
    this.patience = this.#newPatience();
    this.juke = null;               // {x, z, t} — финт вбок
    this.ladder = null;             // лестница, к которой бежим
  }

  // Сколько высидеть в укрытии. В прятках — дольше: там главное не высовываться.
  #newPatience() {
    const [a, b] = CONFIG.bots.restless;
    const k = this.agent?.abilities?.game?.phase === 'hide' ? 2.5 : 1;
    return (a + Math.random() * (b - a)) * k;
  }

  // Замечаю ли этого Безлика как угрозу
  #threatens(g, p, d) {
    const c = this.agent.ctrl;
    if (!g.active) return false;
    if (g.disguised) {
      // маскировку раскусываем вблизи или когда «друг» вдруг несётся к нам
      const fast = g.ctrl.speed > 6.5 || g.ctrl.dashT > 0;
      if (!(d < CONFIG.ghost.disguise.noticeRange || (fast && d < 8))) return false;
    }
    if (g.target === this.agent && g.sees) return true;
    return d < CONFIG.bots.fleeRange && this.world.lineOfSight(p.x, p.z, g.pos.x, g.pos.z, true, p.y + c.height * 0.8, g.eyeY);
  }

  // ghosts — активные Безлики; вернёт ввод на этот кадр
  update(dt, ghosts) {
    this.ghosts = ghosts;
    const B = CONFIG.bots;
    const me = this.agent, c = me.ctrl;
    const p = c.pos;
    let threat = null, td = Infinity;
    for (const g of ghosts) {
      const d = Math.hypot(g.pos.x - p.x, g.pos.z - p.z);
      if (d < td && this.#threatens(g, p, d)) { td = d; threat = g; }
    }
    this.threat = threat;
    this.td = td;

    this.think -= dt;
    if (this.think <= 0) {
      this.think = B.think * (0.7 + Math.random() * 0.6);
      this.#decide(threat, td);
    }

    const inp = { x: 0, y: 0, run: false, jump: false, dash: false };
    // замаскирован под предмет — стоим как вкопанные (сбросить маскировку решает botThink)
    if (me.prop) return inp;

    // Финт: Безлик вот-вот схватит — резко вбок с рывком
    if (threat && td < B.jukeRange && !c.elevated && threat.pos.y < p.y + 1) {
      if (!this.juke || this.juke.t <= 0) {
        const ax = p.x - threat.pos.x, az = p.z - threat.pos.z, al = Math.hypot(ax, az) || 1;
        const side = Math.random() < 0.5 ? 1 : -1;
        // вбок и чуть назад-от-него; проверяем, что там не стена
        let jx = (-az / al) * side * 0.85 + (ax / al) * 0.5, jz = (ax / al) * side * 0.85 + (az / al) * 0.5;
        const [i, j] = this.nav.toCell(p.x + jx * 2.5, p.z + jz * 2.5);
        if (!this.nav.free(i, j)) { jx = (az / al) * side * 0.85 + (ax / al) * 0.5; jz = (-ax / al) * side * 0.85 + (az / al) * 0.5; }
        this.juke = { x: jx, z: jz, t: 0.45 };
      }
    }
    if (this.juke && this.juke.t > 0) {
      this.juke.t -= dt;
      inp.x = this.juke.x; inp.y = -this.juke.z;
      inp.run = !c.exhausted;
      inp.dash = c.dashReady;
      if (this.juke.t <= 0) { this.path = null; this.think = 0; }
      return inp;
    }

    // На крыше: убегаем по крыше от Безлика, а если он подлетает — прыгаем вниз с другой стороны
    if (c.elevated && c.grounded && this.mode !== 'ladder') {
      this.mode = 'roof';
      if (threat) {
        const ax = p.x - threat.pos.x, az = p.z - threat.pos.z, al = Math.hypot(ax, az) || 1;
        inp.x = ax / al; inp.y = -az / al;
        inp.run = td < 7 && !c.exhausted;
        inp.jump = threat.pos.y > p.y - 1.2 && td < 3.5;      // он уже рядом на высоте — прыгаем
        return inp;
      }
      this.sat += dt;
      if (this.sat > this.patience) {
        // насиделись — слезаем (просто идём к краю)
        const a = this.roofDir ??= Math.random() * Math.PI * 2;
        inp.x = Math.cos(a); inp.y = Math.sin(a);
      }
      return inp;
    }
    if (this.mode === 'roof' && !c.elevated) { this.mode = 'wander'; this.roofDir = null; this.sat = 0; this.path = null; }

    // Лезем по лестнице: дошли до подножия — упираемся в неё, наверху — подтягиваемся
    if (this.mode === 'ladder' && this.ladder) {
      const L = this.ladder;
      const fx = L.x + L.nx * (c.radius + 0.25), fz = L.z + L.nz * (c.radius + 0.25);
      const dx = fx - p.x, dz = fz - p.z, dd = Math.hypot(dx, dz);
      if (dd > 0.5 && !c.climbing && p.y < 0.5) {
        if (!this.path || !this.path.length) this.#go(fx, fz);
      } else {
        inp.x = -L.nx; inp.y = L.nz;                  // в стену → вверх; наверху → на крышу
        inp.run = false;
        if (c.elevated && c.grounded) { this.mode = 'roof'; this.ladder = null; this.sat = 0; }
        return inp;
      }
    }

    // Сидим в укрытии
    const inHide = this.world.inBush(p.x, p.z, p.y);
    if (this.mode === 'hide' && inHide && (!threat || threat.target !== me || td > 4)) {
      this.sat += dt;
      // заскучал и Безлика не видно — перебегаем в другое место (так в «Смотреть» интереснее)
      if (!threat && this.sat > this.patience) {
        this.sat = 0; this.patience = this.#newPatience();
        this.mode = 'wander'; this.path = null; this.think = 0;
      }
      return inp;
    }
    if (this.mode !== 'roof') this.sat = 0;
    if (this.mode === 'wander' && this.idle > 0) { this.idle -= dt; return inp; }
    if (!this.path || !this.path.length) return inp;
    const [tx, tz] = this.path[0];
    let dx = tx - p.x, dz = tz - p.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.6) { this.path.shift(); if (!this.path.length && this.mode === 'wander') this.idle = Math.random() * 2; return inp; }
    dx /= d; dz /= d;
    // камера для бота «смотрит на север» (camYaw = 0): вперёд = −Z, вправо = +X
    inp.x = dx; inp.y = -dz;
    const fleeing = this.mode === 'flee' || this.mode === 'help' || this.mode === 'ladder' || (this.mode === 'hide' && threat);
    // Силы бережём: вовсю — когда он близко или нас видит; иначе трусцой, если сил много
    const hot = threat && (td < 8 || (threat.target === me && threat.sees));
    inp.run = fleeing && !c.exhausted && (hot || (c.stamina > B.calmRun && threat && td < 12) || this.mode === 'help');
    inp.dash = fleeing && threat && td < 4.5 && c.dashReady;

    // застрял — прыгаем и перестраиваем путь
    if (c.speed < 0.6 && !c.mantle) this.stuck += dt; else this.stuck = 0;
    if (this.stuck > 0.5) { inp.jump = true; this.stuck = 0; this.path = null; this.think = 0; }
    return inp;
  }

  #decide(threat, td) {
    const me = this.agent, c = me.ctrl, p = c.pos;
    if (me.prop || this.mode === 'roof' || (this.mode === 'ladder' && (c.climbing || c.elevated))) return;
    // Герой-помощник (Моти): если за другом гонятся и рядом — бежим выручать
    if (!threat && me.hero.helper && this.allies) {
      const hunted = this.#huntedAlly();
      if (hunted) { this.mode = 'help'; this.#go(hunted.ctrl.pos.x, hunted.ctrl.pos.z); return; }
      if (this.mode === 'help') this.mode = 'wander';
    }
    if (threat) {
      // уже сидим в укрытии и нас не ищут — не выдаём себя
      if (this.mode === 'hide' && this.world.inBush(p.x, p.z, p.y) && threat.target !== me) return;
      if (this.mode === 'ladder' && this.ladder) return;
      // лестница рядом, а Безлик ещё не вплотную — наверх!
      if (td > 5 && Math.random() < CONFIG.bots.roofChance) {
        const L = this.#ladderNear(threat);
        if (L) { this.mode = 'ladder'; this.ladder = L; this.path = null; return; }
      }
      const bush = Math.random() < CONFIG.bots.hideChance ? this.#safeBush(threat) : null;
      if (bush) { this.mode = 'hide'; this.#go(bush.x, bush.z); return; }
      this.mode = 'flee';
      this.#go(...this.#fleePoint(threat));
      return;
    }
    if (this.mode === 'flee') this.mode = 'wander';
    if (this.mode === 'ladder') return;
    if (this.mode === 'hide' && this.world.inBush(p.x, p.z, p.y)) return;
    if (!this.path || !this.path.length) {
      const r = Math.random();
      if (r < 0.1) { const L = this.#ladderNear(null); if (L) { this.mode = 'ladder'; this.ladder = L; return; } }
      const hidePhase = this.agent.abilities?.game?.phase === 'hide';
      this.mode = r < (hidePhase ? 0.75 : 0.4) ? 'hide' : 'wander';
      if (this.mode === 'hide') { const b = this.#safeBush(null); if (b) return this.#go(b.x, b.z); }
      const [i, j] = this.nav.toCell(p.x + (Math.random() - 0.5) * 26, p.z + (Math.random() - 0.5) * 26);
      const [fi, fj] = this.nav.nearestFree(i, j);
      this.#go(...this.nav.center(fi, fj));
    }
  }

  #huntedAlly() {
    const p = this.agent.ctrl.pos;
    let best = null, bd = CONFIG.bots.helpRange;
    for (const a of this.allies()) {
      if (a === this.agent || !a.alive || !this.ghosts) continue;
      if (!this.ghosts.some(g => g.active && !g.disguised && g.target === a)) continue;
      const d = a.ctrl.pos.distanceTo(p);
      if (d < bd) { bd = d; best = a; }
    }
    return best;
  }

  #go(x, z) {
    const p = this.agent.ctrl.pos;
    this.path = this.nav.find(p.x, p.z, x, z) || [[x, z]];
  }

  // Лестница поблизости (и не за спиной у Безлика)
  #ladderNear(g) {
    const p = this.agent.ctrl.pos;
    let best = null, bd = 12;
    for (const L of this.world.ladders) {
      const d = Math.hypot(L.x - p.x, L.z - p.z);
      if (d > bd) continue;
      if (g && Math.hypot(L.x - g.pos.x, L.z - g.pos.z) < d + 2) continue;
      bd = d; best = L;
    }
    return best;
  }

  // Точка, куда успеем раньше Безлика и где он нас не увидит: пробуем 16 направлений
  #fleePoint(g) {
    const p = this.agent.ctrl.pos;
    let best = null, bs = -Infinity;
    for (let k = 0; k < 16; k++) {
      const a = (k / 16) * Math.PI * 2;
      const R = 7 + (k % 2) * 4;
      const x = p.x + Math.cos(a) * R, z = p.z + Math.sin(a) * R;
      const [i, j] = this.nav.toCell(x, z);
      if (!this.nav.free(i, j) || !this.nav.clear(p.x, p.z, x, z)) continue;
      const mine = Math.hypot(x - p.x, z - p.z), his = Math.hypot(x - g.pos.x, z - g.pos.z);
      const lead = his - mine;                       // насколько раньше мы туда добежим
      const cover = this.world.lineOfSight(g.pos.x, g.pos.z, x, z, false, g.eyeY, 1.4) ? 0 : 5;
      const s = lead * 1.2 + his * 0.4 + cover + Math.random() * 1.5;
      if (s > bs) { bs = s; best = [x, z]; }
    }
    return best || [p.x - (g.pos.x - p.x), p.z - (g.pos.z - p.z)];
  }

  // Укрытие (куст, ширма, мешки) подальше от Безлика и не слишком далеко от нас
  #safeBush(g) {
    const p = this.agent.ctrl.pos;
    let best = null, bs = -Infinity;
    for (const b of this.world.bushes) {
      const d = Math.hypot(b.x - p.x, b.z - p.z);
      if (d > 20) continue;
      if (!g && d < b.r + 1) continue;   // без погони — не в то же укрытие, где уже сидели
      if (this.agent.ctrl.radius > b.r * 0.9) continue;   // крупному не спрятаться за маленькой ширмой
      let s = -d;
      if (g) {
        const gd = Math.hypot(b.x - g.pos.x, b.z - g.pos.z);
        if (gd < d + 1) continue;         // Безлик туда успеет раньше — не туда
        s += gd * 0.8;
      }
      if (s > bs) { bs = s; best = b; }
    }
    return best;
  }
}
