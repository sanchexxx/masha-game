// «Мозг» бота: выдаёт тот же ввод, что и клавиатура ({x, y, run, jump, dash}),
// поэтому бот бегает ровно по той же физике, что и игрок.
// Поведение:
//  • гуляет → заметил Безлика → убегает туда, куда успеет раньше него, за стены и в дома;
//  • бережёт силы: вовсю бежит, только когда Безлик близко или видит его;
//  • Безлик вплотную — финт вбок с рывком (Безлик тяжёлый и проскакивает мимо);
//  • прячется в кусты, за ширмы в домах, в мешки на складе; лезет по лестнице на крышу;
//  • на крыше убегает по крышам, а если Безлик взлетает — спрыгивает с другой стороны;
//  • замаскированного Безлика не боится, пока тот не подойдёт вплотную или не побежит.
import { CONFIG } from '../config/config.js?v=2026100901';

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
    this.ladderJumpT = 0;
    this.upperJumpT = 0;
    this.upperRoute = null;
    this.upperDirection = null;
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
    if (this.agent.underwaterHidden) {
      const water = this.world.waterAt?.(g.pos.x, g.pos.z);
      const submerged = !!water && g.pos.y < water.level - 0.15;
      if (!submerged || d > 2.6) return false;
    }
    if (g.disguised) {
      // маскировку раскусываем вблизи или когда «друг» вдруг несётся к нам
      const fast = g.ctrl.speed > 6.5 || g.ctrl.dashT > 0;
      if (!(d < CONFIG.ghost.disguise.noticeRange || (fast && d < 8))) return false;
    }
    if (g.target === this.agent && g.sees) return true;
    const inFog = this.world.inSpiritFog?.(p.x, p.z) || false;
    const sightRange = inFog ? CONFIG.ghost.spiritFogSightRange : CONFIG.bots.fleeRange;
    const visible = d < sightRange
      && this.world.lineOfSight(p.x, p.z, g.pos.x, g.pos.z, true, p.y + c.height * 0.8, g.eyeY);
    // Туман режет дальность зрения так же для ботов, как для Безлика.
    // Но бегущий бот оставляет слышимый след, поэтому туман не даёт бесплатную невидимость.
    const hearRange = CONFIG.ghost.hearRunRange * (inFog ? CONFIG.ghost.spiritFogHearMultiplier : 1);
    const audible = c.running && d < hearRange && !this.agent.hidden && !this.agent.prop;
    return visible || audible || d < 2.2;
  }

  // ghosts — активные Безлики; вернёт ввод на этот кадр
  update(dt, ghosts) {
    this.upperJumpT = Math.max(0, this.upperJumpT - dt);
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

    // Завершаем маршрут только на настоящей площадке или у подножия лестницы.
    // На середине ступеней elevated уже true, хотя крыша ещё не достигнута.
    if (this.mode === 'upper' && !this.path?.length) {
      const route = this.upperRoute;
      const down = this.upperDirection === 'down';
      const end = down ? route?.entry : route?.exit;
      const reached = end && Math.hypot(end[0] - p.x, end[1] - p.z) < 1.25;
      if (down && reached && p.y < 0.9) {
        this.mode = 'wander'; this.upperRoute = null; this.upperDirection = null;
      } else if (!down && reached && c.grounded && p.y >= (route?.top ?? 3.93) - 0.55) {
        this.mode = 'roof'; this.roofDir = null; this.sat = 0;
      } else if (route) {
        // После прерванного пути вернёмся к ближайшей точке ступеней.
        const points = down ? [route.exit, ...route.steps.slice().reverse(), route.entry]
          : [route.entry, ...route.steps, route.exit];
        let nearest = 0, distance = Infinity;
        for (let i = 0; i < points.length; i++) {
          const d = Math.hypot(points[i][0] - p.x, points[i][1] - p.z);
          if (d < distance) { distance = d; nearest = i; }
        }
        this.path = points.slice(Math.min(nearest + (distance < 0.9 ? 1 : 0), points.length - 1));
      } else {
        this.mode = 'wander'; this.upperDirection = null;
      }
    }

    this.think -= dt;
    if (this.think <= 0) {
      this.think = B.think * (0.7 + Math.random() * 0.6);
      this.#decide(threat, td);
    }

    const inp = { x: 0, y: 0, run: false, jump: false, dash: false };
    // замаскирован под предмет — стоим как вкопанные (сбросить маскировку решает botThink)
    if (me.prop) return inp;
    // Бот замирает под водой; если Безлик нырнул следом, ниже он снова увидит угрозу и уплывёт.
    if (this.mode === 'water' && c.swimming && !threat && this.waterTarget
      && Math.hypot(this.waterTarget.x - p.x, this.waterTarget.z - p.z) < 1.2) {
      inp.crouch = true;
      return inp;
    }

    // Финт: Безлик вот-вот схватит — резко вбок с рывком
    if (threat && td < B.jukeRange && this.mode !== 'upper' && !c.elevated && threat.pos.y < p.y + 1) {
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
    if (c.elevated && c.grounded && this.mode !== 'ladder' && this.mode !== 'upper') {
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
        // Насиделись наверху — возвращаемся по ступеням, а не прыгаем с края.
        const route = this.#routeFromRoof();
        if (route) {
          this.mode = 'upper'; this.path = [route.exit, ...route.steps.slice().reverse(), route.entry];
          this.upperRoute = route; this.upperDirection = 'down';
          this.sat = 0; this.roofDir = null;
        } else {
          const a = this.roofDir ??= Math.random() * Math.PI * 2;
          inp.x = Math.cos(a); inp.y = Math.sin(a);
        }
      }
      return inp;
    }
    if (this.mode === 'roof' && !c.elevated) {
      this.mode = 'wander'; this.roofDir = null; this.sat = 0; this.path = null;
      this.upperRoute = null; this.upperDirection = null;
    }

    // Лезем по лестнице: дошли до подножия — упираемся в неё, наверху — подтягиваемся
    if (this.mode === 'ladder' && this.ladder) {
      const L = this.ladder;
      const fx = L.x + L.nx * (c.radius + 0.25), fz = L.z + L.nz * (c.radius + 0.25);
      const dx = fx - p.x, dz = fz - p.z, dd = Math.hypot(dx, dz);
      if (this.ladderJumpT > 0) this.ladderJumpT = Math.max(0, this.ladderJumpT - dt);
      const atRoofEdge = p.y >= L.top - 0.72;
      if (dd > 0.5 && !c.climbing && !atRoofEdge) {
        if (!this.path || !this.path.length) this.#go(fx, fz);
      } else {
        inp.x = -L.nx; inp.y = L.nz;                  // в стену → вверх; наверху → на крышу
        inp.run = this.ladderJumpT > 0 && !c.exhausted;
        // На последних сантиметрах лестницы перепрыгиваем через карниз на крышу.
        if (this.ladderJumpT <= 0 && atRoofEdge && (c.climbing || p.y < L.top + 0.25)) {
          inp.jump = true;
          this.ladderJumpT = 0.48;
        }
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
    let d = Math.hypot(dx, dz);
    const finalUpperStep = this.mode === 'upper' && this.upperDirection === 'up'
      && this.path.length === 1 && p.y < (this.upperRoute?.top ?? 3.93) - 0.55;
    if (finalUpperStep && d < 0.6) {
      const steps = this.upperRoute?.steps;
      const previous = (steps && steps[steps.length - 1]) || this.upperRoute?.entry || [tx - 1, tz];
      dx = tx - previous[0]; dz = tz - previous[1]; d = Math.hypot(dx, dz) || 1;
    }
    // Не съедаем последнюю точку у самого края: оставляем боту место, чтобы
    // разбежаться и перепрыгнуть через карниз на площадку.
    if (d < 0.6 && !finalUpperStep) { this.path.shift(); if (!this.path.length && this.mode === 'wander') this.idle = Math.random() * 2; return inp; }
    dx /= d; dz /= d;
    // камера для бота «смотрит на север» (camYaw = 0): вперёд = −Z, вправо = +X
    inp.x = dx; inp.y = -dz;
    const fleeing = this.mode === 'flee' || this.mode === 'help' || this.mode === 'ladder' || this.mode === 'upper' || (this.mode === 'hide' && threat);
    // Силы бережём: вовсю — когда он близко или нас видит; иначе трусцой, если сил много
    const hot = threat && (td < 8 || (threat.target === me && threat.sees));
    inp.run = fleeing && !c.exhausted && (hot || (c.stamina > B.calmRun && threat && td < 12) || this.mode === 'help');
    inp.dash = fleeing && threat && td < 4.5 && c.dashReady;

    if (finalUpperStep && d < 1.45 && this.upperJumpT <= 0) {
      inp.jump = true;
      inp.run = !c.exhausted;
      this.upperJumpT = 0.55;
    }

    // На ступенях сохраняем заданный маршрут: прыжок помогает пройти край ступени.
    if (c.speed < 0.6 && !c.mantle) this.stuck += dt; else this.stuck = 0;
    if (this.stuck > 0.5) {
      inp.jump = true; this.stuck = 0;
      if (this.mode !== 'upper') { this.path = null; this.think = 0; }
    }
    return inp;
  }

  // В доставке бот несёт фонарь к святилищу, при близком Безлике спасается.
  canPickupLantern(id) {
    return this.deliverySearchId === id && !!this.deliveryPickupReady;
  }

  updateDelivery(dt, ghosts, delivery) {
    const p = this.agent.ctrl.pos;
    const threat = ghosts.find(g => g.active && Math.hypot(g.pos.x - p.x, g.pos.z - p.z) < 7);
    if (threat) return this.update(dt, ghosts);
    // Фонарей на верхних площадках нет. Спускаемся по своей лестнице до того,
    // как строить наземный маршрут к предмету или святилищу.
    if (this.mode === 'upper' && this.upperDirection === 'down')
      return this.update(dt, ghosts);
    if (this.agent.ctrl.elevated && this.agent.ctrl.grounded) {
      const route = this.#routeFromRoof();
      if (route) {
        this.mode = 'upper'; this.upperRoute = route; this.upperDirection = 'down';
        this.path = [route.exit, ...route.steps.slice().reverse(), route.entry];
        return this.update(dt, ghosts);
      }
    }
    this.threat = null;
    if (!delivery?.lanterns?.length) return { x: 0, y: 0 };
    const carrying = delivery.lanterns.find(l => l.carrier === this.agent.key);
    const claims = delivery.claims || (delivery.claims = new Map());
    let lantern = carrying;
    if (!lantern) {
      const available = delivery.lanterns.filter(l => !l.delivered && !l.carrier
        && (!claims.has(l.id) || claims.get(l.id) === this.agent.key));
      available.sort((a, b) => Math.hypot(a.x - p.x, a.z - p.z) - Math.hypot(b.x - p.x, b.z - p.z));
      lantern = available[0];
      if (lantern) claims.set(lantern.id, this.agent.key);
    }
    if (!lantern) return { x: 0, y: 0 };
    if (carrying) {
      this.deliverySearchId = null;
      this.deliverySearchPoints = null;
      this.deliverySearchIndex = 0;
      this.deliverySearchPause = 0;
    } else if (this.deliverySearchId !== lantern.id) {
      // Боты не телепатически бегут точно в центр предмета: сначала обследуют
      // несколько точек вокруг него шагом, затем подходят вплотную.
      const angle = Math.random() * Math.PI * 2;
      const points = [];
      for (const [radius, turn] of [[3.2, 0], [2.4, 2.1], [1.45, 4.2]]) {
        const x = Math.max(-this.nav.half + 1.5, Math.min(this.nav.half - 1.5,
          lantern.x + Math.cos(angle + turn) * radius));
        const z = Math.max(-this.nav.half + 1.5, Math.min(this.nav.half - 1.5,
          lantern.z + Math.sin(angle + turn) * radius));
        const [i, j] = this.nav.nearestFree(...this.nav.toCell(x, z));
        const point = this.nav.center(i, j);
        if (!points.some(p => Math.hypot(point[0] - p[0], point[1] - p[1]) < 1.1)) points.push(point);
      }
      points.push([lantern.x, lantern.z]);
      this.deliverySearchId = lantern.id;
      this.deliverySearchPoints = points;
      this.deliverySearchIndex = 0;
      this.deliverySearchPause = 0;
      this.deliverySearchWait = 5.5 + Math.random() * 2.5;
      this.deliveryPickupReady = false;
      this.path = null;
    }
    if (!carrying) this.deliverySearchWait = Math.max(0, (this.deliverySearchWait || 0) - dt);
    const searchTarget = !carrying ? this.deliverySearchPoints?.[this.deliverySearchIndex] : null;
    const target = carrying ? delivery.shrine : (searchTarget
      ? { x: searchTarget[0], z: searchTarget[1] } : lantern);
    if (!target) return { x: 0, y: 0 };
    if (!carrying && searchTarget) {
      const distance = Math.hypot(searchTarget[0] - p.x, searchTarget[1] - p.z);
      if (distance < 0.85) {
        this.deliverySearchIndex++;
        this.deliverySearchPause = 0.45;
        this.path = null;
        if (this.deliverySearchIndex >= this.deliverySearchPoints.length) {
          this.deliverySearchPoints = null;
        }
      }
      if (this.deliverySearchPause > 0) {
        this.deliverySearchPause = Math.max(0, this.deliverySearchPause - dt);
        if (this.deliverySearchPause > 0) return { x: 0, y: 0 };
      }
    }
    this.deliveryPickupReady = !carrying && !this.deliverySearchPoints && this.deliverySearchWait <= 0;
    const fogged = this.world.inSpiritFog?.(p.x, p.z) || false;
    const dangerClose = carrying && ghosts.some(g => g.active && Math.hypot(g.pos.x - p.x, g.pos.z - p.z) < 12);
    const goal = `${Math.round(target.x * 2)},${Math.round(target.z * 2)}`;
    this.deliveryThink = (this.deliveryThink || 0) - dt;
    if (goal !== this.deliveryGoal || this.deliveryThink <= 0 || !this.path?.length) {
      this.deliveryGoal = goal;
      this.deliveryThink = 1.3;
      this.path = this.nav.find(p.x, p.z, target.x, target.z) || [[target.x, target.z]];
    }
    while (this.path?.length && Math.hypot(this.path[0][0] - p.x, this.path[0][1] - p.z) < 0.9) this.path.shift();
    const [x, z] = this.path?.[0] || [target.x, target.z];
    const d = Math.hypot(x - p.x, z - p.z) || 1;
    // При поиске бот методично осматривает район фонаря. С грузом идёт быстрее
    // только если рядом есть Безлик, чтобы доставка не выигрывалась мгновенно ботами.
    return { x: (x - p.x) / d, y: -(z - p.z) / d, run: carrying && dangerClose,
      jump: this.agent.ctrl.speed < 0.3 && this.deliveryThink < 0.4 };
  }

  #decide(threat, td) {
    const me = this.agent, c = me.ctrl, p = c.pos;
    if (me.prop || this.mode === 'roof' || (this.mode === 'ladder' && (c.climbing || c.elevated))) return;
    if (this.mode === 'upper' && this.path?.length) return;
    if (this.mode === 'water' && c.swimming && !threat) return;
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
      // Если до Безлика есть запас, ныряем в ближайший достижимый пруд и замираем на глубине.
      if (td > 4 && Math.random() < 0.3) {
        const spot = this.#safeWater(threat);
        if (spot) { this.mode = 'water'; this.waterTarget = spot; this.#go(spot.x, spot.z); return; }
      }
      // лестница рядом, а Безлик ещё не вплотную — наверх!
      if (td > 5 && Math.random() < CONFIG.bots.roofChance) {
        const route = this.#upperRouteNear(threat);
        if (route) { this.mode = 'upper'; this.#goViaUpper(route); return; }
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
      if (r < 0.12 && this.world.upperRoutes?.length) {
        this.mode = 'upper'; this.#goViaUpper(this.world.upperRoutes[(Math.random() * this.world.upperRoutes.length) | 0]); return;
      }
      if (r < 0.2) { const L = this.#ladderNear(null); if (L) { this.mode = 'ladder'; this.ladder = L; return; } }
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

  #safeWater(threat) {
    const p = this.agent.ctrl.pos;
    const candidates = [];
    for (const zone of this.world.waterZones || []) {
      const d = Math.hypot(zone.x - p.x, zone.z - p.z);
      if (d > 13 || d < 2.5) continue;
      const ghostDistance = threat ? Math.hypot(zone.x - threat.pos.x, zone.z - threat.pos.z) : 0;
      if (threat && ghostDistance < 5.5) continue;
      const [i, j] = this.nav.toCell(zone.x, zone.z);
      if (!this.nav.free(i, j)) continue;
      candidates.push({ x: zone.x, z: zone.z, score: ghostDistance - d * 0.45 + Math.random() * 1.5 });
    }
    candidates.sort((a, b) => b.score - a.score);
    return candidates.find(point => this.nav.find(p.x, p.z, point.x, point.z)) || null;
  }

  #go(x, z) {
    const p = this.agent.ctrl.pos;
    this.path = this.nav.find(p.x, p.z, x, z) || [[x, z]];
  }

  #goViaUpper(route) {
    const p = this.agent.ctrl.pos;
    this.upperRoute = route;
    this.upperDirection = 'up';
    const approach = this.nav.find(p.x, p.z, route.entry[0], route.entry[1]) || [route.entry];
    this.path = [...approach, ...route.steps, route.exit];
  }

  #upperRouteNear(g) {
    const p = this.agent.ctrl.pos;
    let best = null, score = 12;
    for (const route of this.world.upperRoutes || []) {
      const d = Math.hypot(route.entry[0] - p.x, route.entry[1] - p.z);
      if (d > score) continue;
      if (g && Math.hypot(route.entry[0] - g.pos.x, route.entry[1] - g.pos.z) < d + 2) continue;
      score = d; best = route;
    }
    return best;
  }

  #routeFromRoof() {
    const p = this.agent.ctrl.pos;
    let best = null, score = Infinity;
    for (const route of this.world.upperRoutes || []) {
      const [x, z] = route.exit;
      const distance = Math.hypot(x - p.x, z - p.z);
      if (distance > 18 || Math.abs(p.y - route.top) > 2.6) continue;
      // Верхний переход должен оставаться над землёй: не выбираем лестницу
      // соседнего здания через пустой промежуток между площадками.
      const low = Math.min(p.y, route.top) - 1.2;
      let supported = true;
      for (let k = 1, n = Math.max(1, Math.ceil(distance / 1.4)); k <= n; k++) {
        const t = k / n, sx = p.x + (x - p.x) * t, sz = p.z + (z - p.z) * t;
        if (this.world.groundAt(sx, sz, this.agent.ctrl.radius, Math.max(p.y, route.top) + 1) < low) {
          supported = false; break;
        }
      }
      if (!supported) continue;
      const candidate = distance + Math.abs(p.y - route.top) * 1.5;
      if (candidate < score) { score = candidate; best = route; }
    }
    return best;
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
