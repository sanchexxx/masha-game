// Раунд целиком, без картинки и интерфейса: кто где бегает, кто кого поймал, какая фаза.
// Одна и та же логика работает в браузере (game.js рисует и показывает) и в симуляции (tools/sim).
//
// Как придумала Маша:
//  1) ПРЯТКИ (2 мин). Сначала фора — Безликов нет, беги прячься. Потом Безлики (искатели) выходят
//     и ищут. У Маши и НэкоБуса есть «Маскировка» — превратиться в предмет (ящик, фонарь, тыкву…).
//  2) ДОГОНЯЛКИ (1 мин). Все найденные возвращаются. Тот, кого нашли ПЕРВЫМ, становится Безликом,
//     и с ним ещё 3 Безлика-бота. Безлик умеет притворяться героями и предметами.
// Режимы: 'play' — играешь героем, 'hunter' — играешь Безликом, 'watch' — все боты.
import * as THREE from 'three';
import { CONFIG } from '../config/config.js?v=2026100901';
import { PlayerController, separate } from '../player/controller.js?v=2026100901';
import { BotBrain } from '../player/bot.js?v=2026100901';
import { AbilitySet } from '../abilities/abilities.js?v=2026100901';
import { PROP_KINDS } from '../world/props.js?v=2026100901';

export const BOT_SPAWNS = [[-5, 19], [5.5, 17], [-9, 23], [9, 21], [-3, 14], [3, 25]];
export const GHOST_SPAWNS = [[0, -21], [-7, -20], [7, -20], [0, -14]];

export class Round {
  // host: { world, scene, navFor, ghosts: [Ghost...], heroes, makeChar(hero, skin) → {root, update} | null,
  //         makeProp(kind) → Object3D | null, addFx(fx), sound, cam }
  constructor(host) {
    Object.assign(this, host);
    this.playerSpawn = host.playerSpawn || new THREE.Vector3(0, 0, 22);
    this.botSpawns = host.botSpawns || BOT_SPAWNS;
    this.ghostSpawns = host.ghostSpawns || GHOST_SPAWNS;
    this.agents = [];
    this.domes = [];
    this.fx = [];
    this.events = [];
    this.phase = 'none';
    this.activeGhosts = [];
    this.netIn = new Map();        // совместная игра: последний ввод каждого гостя (по его id)
  }

  addFx(f) { this.fx.push(f); }          // хозяин (game.js) подменяет своим addFx
  emit(type, data = {}) { this.events.push({ type, ...data }); }

  // remote — id игрока с другого устройства (совместная игра): им управляет не «мозг», а его нажатия
  makeAgent(hero, isPlayer, spawn, skin, remote = null, name = null) {
    const ctrl = new PlayerController(hero, this.world);
    ctrl.spawn(spawn, isPlayer || remote ? Math.PI : Math.random() * Math.PI * 2);
    const a = { hero, name: name || hero.name, ctrl, char: this.makeChar(hero, skin), isPlayer, remote, alive: true, hidden: false, protected: false, prop: null, skin,
      brothersRevives: hero.id === 'brothers' ? 1 : 0, invulnerableT: 0 };
    a.key = this.keySeq = (this.keySeq || 0) + 1;     // номер для совместной игры
    a.abilities = new AbilitySet(a, this);
    if (!isPlayer && !remote) { a.brain = new BotBrain(a, this.world, this.navFor(hero.radius)); a.brain.allies = () => this.agents; }
    this.agents.push(a);
    return a;
  }

  // Новый участник входит в уже идущую партию без перезапуска остальных.
  addLatePlayer({ id, name, hero, skin }) {
    if (this.phase === 'over') return false;
    if (hero.id === 'noface') {
      const ghost = this.ghosts.find(g => !this.activeGhosts.includes(g));
      if (!ghost) return false;
      const place = this.ghostSpawns[this.activeGhosts.length % this.ghostSpawns.length];
      ghost.reset(new THREE.Vector3(place[0], 0, place[1]));
      ghost.remote = id;
      ghost.remoteName = name;
      ghost.spawn();
      this.activeGhosts.push(ghost);
      this.spawned++;
      return true;
    }
    const place = this.botSpawns[this.agents.length % this.botSpawns.length] || [this.playerSpawn.x, this.playerSpawn.z];
    const a = this.makeAgent(hero, false, new THREE.Vector3(place[0], 0, place[1]), skin, id, name);
    a.invulnerableT = 4;
    a.protected = true;
    return true;
  }

  // Разделение Братьев: один участник раунда, три независимые цели для Безлика.
  activateBrothersSplit(a) {
    if (a.hero.id !== 'brothers' || !a.alive || a.splitActive || a.splitUsed) return false;
    a.splitUsed = true;
    a.splitActive = true;
    a.brothersRevives = 0;
    a.bodyCtrl = a.ctrl;
    a.activeHead = 0;
    const origin = a.ctrl.pos.clone();
    const yaw = a.ctrl.yaw;
    const headHero = { ...a.hero, radius: 0.39, height: 0.94,
      physics: { ...CONFIG.heroes.brothers, walk: 6.1, run: 9.4, jump: 2.15,
        gravity: 0.96, mass: 0.7, air: 18 } };
    a.splitHeads = [0, -1, 1].map((side, index) => {
      const ctrl = new PlayerController(headHero, this.world);
      const spawn = origin.clone();
      spawn.x += side * Math.cos(yaw) * 1.35;
      spawn.z -= side * Math.sin(yaw) * 1.35;
      ctrl.spawn(spawn, yaw + side * 0.65);
      ctrl.vel.set(side * Math.cos(yaw) * 3.2, 4.2, -side * Math.sin(yaw) * 3.2);
      ctrl.grounded = false;
      const head = { hero: a.hero, name: a.name, ctrl, alive: true, hidden: false,
        protected: true, invulnerableT: 1.2, prop: null, headOwner: a, headIndex: index,
        spreadT: index === 0 ? 0 : 1.1, hopT: 0.7 + index * 0.35 };
      head.brain = new BotBrain(head, this.world, this.navFor(headHero.radius));
      head.brain.allies = () => this.agents;
      return head;
    });
    a.ctrl = a.splitHeads[0].ctrl;
    this.emit('split', { agent: a });
    return true;
  }

  #splitTargets() {
    return this.agents.flatMap(a => a.splitActive ? a.splitHeads.filter(h => h.alive) : [a]);
  }

  #resetBrothers(a) {
    if (a.hero.id !== 'brothers') return;
    if (a.bodyCtrl) {
      a.splitActive = false;
      if (a.alive) a.bodyCtrl.spawn(a.ctrl.pos.clone(), a.ctrl.yaw);
      a.ctrl = a.bodyCtrl;
      a.bodyCtrl = null;
      a.splitHeads = null;
    }
    // Разделение даёт три жизни только один раз за матч, даже при смене фазы.
  }

  // opts: { mode, hero, skin, ghosts (1–3), withBots, remotes: [{id, name, hero, skin}] — игроки с других устройств }
  start(opts) {
    this.opts = opts;
    this.mode = opts.mode;
    this.agents = [];
    this.domes = [];
    this.caughtOrder = [];
    this.stats = { found: 0, chaseCatches: 0, pumpkins: 0, playerFoundAt: null, playerCaughtInChase: false };
    this.player = null;
    this.playerGhost = null;
    const spawns = this.botSpawns.slice().sort(() => Math.random() - 0.5);
    const at = xz => new THREE.Vector3(xz[0], 0, xz[1]);
    const remotes = opts.remotes || [];
    const remoteGhosts = remotes.filter(r => r.hero.id === 'noface');
    if (opts.mode === 'play' || (opts.mode === 'hunter' && remotes.length)) {
      if (opts.mode === 'play') this.player = this.makeAgent(opts.hero, true, this.playerSpawn.clone(), opts.skin);
      remotes.filter(r => r.hero.id !== 'noface').forEach((r, i) => this.makeAgent(r.hero, false, at(this.botSpawns[i % this.botSpawns.length]), r.skin, r.id, r.name));
      const taken = new Set([opts.hero.id, ...remotes.map(r => r.hero.id)]);
      if (opts.withBots) for (const h of this.heroes) if (!taken.has(h.id) && h.bot !== false) this.makeAgent(h, false, at(spawns.pop()), 'classic');
    } else {
      for (const h of this.heroes) if (h.bot !== false) this.makeAgent(h, false, at(spawns.pop()), h.id === 'moti' ? opts.mSkin || 'classic' : 'classic');
    }
    for (const g of this.ghosts) { g.isPlayer = false; g.remote = null; g.reset(at(this.ghostSpawns[0])); }
    const humansAsGhosts = (opts.mode === 'hunter' ? 1 : 0) + remoteGhosts.length;
    const n = Math.min(this.ghosts.length, Math.max(1, Math.min(3, opts.ghosts), humansAsGhosts));
    this.activeGhosts = this.ghosts.slice(0, n);
    this.activeGhosts.forEach((g, i) => g.reset(at(this.ghostSpawns[i % this.ghostSpawns.length])));
    let gi = 0;
    if (opts.mode === 'hunter') { this.playerGhost = this.activeGhosts[gi++]; this.playerGhost.isPlayer = true; }
    for (const r of remoteGhosts) { const g = this.activeGhosts[gi++]; g.remote = r.id; g.remoteName = r.name; }
    this.netIn.clear();
    this.setPhase('hide');
  }

  setPhase(p) {
    this.phase = p;
    this.t = 0;
    this.spawned = 0;
    this.duration = p === 'hide' ? CONFIG.round.hide : CONFIG.round.chase;
  }

  get left() { return Math.max(0, this.duration - this.t); }

  // ---------- Маскировка под предмет ----------
  toggleProp(a) {
    if (a.prop) {
      this.emit('poof', { x: a.ctrl.pos.x, y: a.ctrl.pos.y, z: a.ctrl.pos.z });
      if (a.prop.obj) this.scene.remove(a.prop.obj);
      a.prop = null;
      if (a.char) a.char.root.visible = true;
      return;
    }
    if (a.ctrl.elevated || !a.alive) return;
    const kind = PROP_KINDS[(Math.random() * PROP_KINDS.length) | 0];
    const obj = this.makeProp(kind.id);
    if (obj) { obj.position.copy(a.ctrl.pos); obj.rotation.y = Math.random() * 6; this.scene.add(obj); }
    a.prop = { kind, obj };
    if (a.char) a.char.root.visible = false;
    this.emit('poof', { x: a.ctrl.pos.x, y: a.ctrl.pos.y, z: a.ctrl.pos.z, kind: kind.name, agent: a });
  }

  // ---------- Шаг симуляции ----------
  // inp — ввод игрока (героя или Безлика), camYaw — поворот камеры игрока
  step(dt, time, inp = null, camYaw = 0) {
    this.t += dt;
    const C = CONFIG;

    // Безлики выходят: в прятках — после форы по очереди, в догонялках — сразу
    const delay = this.phase === 'hide' ? C.round.headStart : 0.3;
    this.activeGhosts.forEach((g, i) => {
      if (g.state === 'hidden' && this.t >= delay + i * (this.phase === 'hide' ? C.ghost.spawnGap : 0.4)) {
        g.spawn();
        this.spawned++;
        this.emit('ghostSpawn', { i, ghost: g });
      }
    });

    // Герои: игрок — от клавиатуры, боты — от «мозга»
    const live = this.activeGhosts.filter(g => g.active);
    for (const a of this.agents) {
      if (!a.alive) continue;
      a.invulnerableT = Math.max(0, a.invulnerableT - dt);
      a.abilities.update(dt);
      if (a.splitActive) {
        this.#stepSplit(a, dt, inp, camYaw, live);
        continue;
      }
      let ai;
      if (a.isPlayer) ai = inp || {};
      else if (a.remote) ai = this.#takeNet(a.remote);
      else {
        ai = a.brain.update(dt, live);
        const th = a.brain.threat;
        a.abilities.botThink(th, th ? th.pos.distanceTo(a.ctrl.pos) : Infinity);
      }
      if (a.prop) {
        // предмет еле ползёт, не бегает и не прыгает; рывок — сбросить маскировку
        if (ai.dash) this.toggleProp(a);
        else { ai = { ...ai, run: false, jump: false }; a.ctrl.moveMul *= C.abilities.prop.walk; }
      }
      a.ctrl.update(dt, ai, a.isPlayer ? camYaw : a.remote ? ai.camYaw || 0 : 0);
      if (a.prop?.obj) { a.prop.obj.position.copy(a.ctrl.pos); }
      const p = a.ctrl.pos;
      const water = this.world.waterAt?.(p.x, p.z);
      a.hidden = (this.world.inBush(p.x, p.z, p.y) && !a.ctrl.running)
        || (!!water && a.ctrl.diving && p.y < water.level - 0.55 && a.ctrl.speed < 1.0)
        || (!!a.prop && a.ctrl.speed < 0.6);
      a.protected = a.invulnerableT > 0 || this.domes.some(d => Math.hypot(p.x - d.x, p.z - d.z) < d.r);
      if (a.protected) a.ctrl.stamina = Math.min(1, a.ctrl.stamina + dt * 0.25);   // в приюте отдыхается быстрее
    }
    separate(this.agents);
    const targets = this.#splitTargets();

    // Безлики
    const k = Math.min(1, this.t / this.duration);
    for (const g of this.activeGhosts) {
      g.speedMul = this.phase === 'chase' && !g.isPlayer && !g.remote ? C.round.chaseBotSpeed : 1;
      const gin = g.isPlayer ? inp || {} : g.remote ? this.#takeNet(g.remote) : null;
      g.update(dt, time, targets, k, { domes: this.domes }, gin, g.isPlayer ? camYaw : gin?.camYaw || 0);
      if (g.poof) { g.poof = false; this.emit('poof', { x: g.pos.x, y: g.pos.y, z: g.pos.z, ghost: g }); }
    }

    // Поимки
    for (const g of this.activeGhosts) {
      for (const a of targets) {
        if (!g.catches(a)) continue;
        this.#caught(a, g);
      }
    }

    // Конец фазы
    const heroesLeft = this.agents.filter(a => a.alive).length;
    if (this.t >= this.duration || heroesLeft === 0) {
      if (this.phase === 'hide') this.#toChase();
      else if (this.phase === 'chase') { this.phase = 'over'; this.emit('end', { result: this.result() }); }
    }
  }

  #stepSplit(a, dt, inp, camYaw, live) {
    for (const h of a.splitHeads) {
      if (!h.alive) continue;
      h.invulnerableT = Math.max(0, h.invulnerableT - dt);
      h.hopT -= dt;
      const active = h.headIndex === a.activeHead;
      let ai = active
        ? a.isPlayer ? inp || {} : a.remote ? this.#takeNet(a.remote) : a.brain.update(dt, live)
        : h.brain.update(dt, live);
      if (!active && h.spreadT > 0) {
        h.spreadT -= dt;
        const side = h.headIndex === 1 ? -1 : 1;
        ai = { x: side * Math.cos(a.bodyCtrl.yaw), y: side * Math.sin(a.bodyCtrl.y),
          run: true, jump: h.ctrl.grounded && h.hopT <= 0 };
      } else if (!active && h.ctrl.grounded && h.hopT <= 0) ai = { ...ai, jump: true };
      h.ctrl.update(dt, ai, active && a.isPlayer ? camYaw : active && a.remote ? ai.camYaw || 0 : 0);
      if (h.ctrl.jumped) {
        h.hopT = 1.2 + h.headIndex * 0.32;
        this.emit('headHop', { agent: a, index: h.headIndex });
      }
      const p = h.ctrl.pos, water = this.world.waterAt?.(p.x, p.z);
      h.hidden = (this.world.inBush(p.x, p.z, p.y) && !h.ctrl.running)
        || (!!water && h.ctrl.diving && p.y < water.level - 0.55 && h.ctrl.speed < 1);
      h.protected = h.invulnerableT > 0 || this.domes.some(d => Math.hypot(p.x - d.x, p.z - d.z) < d.r);
    }
    const current = a.splitHeads[a.activeHead];
    a.ctrl = current.ctrl;
    a.hidden = current.hidden;
    a.protected = current.protected;
    if (!a.isPlayer && !a.remote) a.abilities.botThink(a.brain.threat,
      a.brain.threat ? a.brain.threat.pos.distanceTo(a.ctrl.pos) : Infinity);
  }

  #caught(a, g) {
    if (a.headOwner) {
      const owner = a.headOwner;
      a.alive = false;
      g.reveal();
      g.stun(CONFIG.ghost.grab);
      const remaining = owner.splitHeads.filter(h => h.alive);
      this.emit('headCaught', { agent: owner, index: a.headIndex, remaining: remaining.length,
        pos: a.ctrl.pos.clone(), ghost: g });
      if (remaining.length) {
        if (owner.activeHead === a.headIndex) {
          const next = remaining[0];
          owner.activeHead = next.headIndex;
          owner.ctrl = next.ctrl;
          next.invulnerableT = Math.max(next.invulnerableT, 1.1);
          this.emit('headSwitch', { agent: owner, index: next.headIndex, remaining: remaining.length });
        }
        return;
      }
      owner.splitActive = false;
      owner.brothersRevives = 0;
      owner.eliminatedByHeads = true;
      this.#caught(owner, g);
      return;
    }
    if (a.brothersRevives > 0) {
      a.brothersRevives--;
      a.invulnerableT = 1.8;
      a.protected = true;
      a.ctrl.stamina = 1;
      a.ctrl.exhausted = false;
      g.stun(0.75);
      this.sound?.brothersCue?.('resist');
      this.emit('resisted', { agent: a, ghost: g });
      return;
    }
    a.alive = false;
    if (a.prop) this.toggleProp(a);
    if (a.char) a.char.root.visible = false;
    g.reveal();
    g.stun(CONFIG.ghost.grab);         // Безлик «забирает» героя и на миг замирает
    this.caughtOrder.push({ agent: a, phase: this.phase, t: this.t });
    if (this.phase === 'hide') { this.stats.found++; if (a.isPlayer) this.stats.playerFoundAt = this.t; }
    else { this.stats.chaseCatches++; if (a.isPlayer) this.stats.playerCaughtInChase = true; }
    this.emit('caught', { agent: a, ghost: g, byPlayer: g.isPlayer, byRemote: g.remote, phase: this.phase });
  }

  // Переход к догонялкам: пойманные возвращаются, первый найденный становится Безликом
  #toChase() {
    const first = this.caughtOrder.find(c => c.phase === 'hide' && !c.agent.eliminatedByHeads)?.agent;
    const hideSurvivors = this.agents.filter(a => a.alive).map(a => a.name);
    this.hideSurvivors = hideSurvivors;
    const at = xz => new THREE.Vector3(xz[0], 0, xz[1]);
    const hunterPos = this.playerGhost ? this.playerGhost.pos.clone() : null;
    // все Безлики — заново
    const keepRemote = this.activeGhosts.filter(g => g.remote).map(g => [g.remote, g.remoteName]);
    for (const g of this.ghosts) { g.reveal(); g.reset(at(this.ghostSpawns[0])); g.isPlayer = false; g.remote = null; }
    const n = Math.min(this.ghosts.length, CONFIG.round.chaseGhosts);
    this.activeGhosts = this.ghosts.slice(0, n);
    let newGhost = null, newGhostName = null;
    if (this.mode === 'hunter') {
      this.playerGhost = this.activeGhosts[0];
      this.playerGhost.isPlayer = true;
      newGhostName = 'ты';
    } else {
      // кто станет Безликом: первый найденный, а если никого не нашли — случайный герой
      const eligible = this.agents.filter(a => !a.eliminatedByHeads);
      if (!eligible.length) {
        this.phase = 'over';
        this.emit('end', { result: this.result() });
        return;
      }
      const pick = first || eligible[(Math.random() * eligible.length) | 0];
      newGhost = pick;
      newGhostName = pick.name;
      this.agents = this.agents.filter(a => a !== pick);
      if (pick.prop) this.toggleProp(pick);
      if (pick.char) pick.char.root.visible = false;
      this.activeGhosts[0].reset(pick.ctrl.pos.clone());
      if (pick.remote) { this.activeGhosts[0].remote = pick.remote; this.activeGhosts[0].remoteName = pick.name; }
      if (pick.isPlayer) {
        this.player = null;
        this.playerGhost = this.activeGhosts[0];
        this.playerGhost.isPlayer = true;
      }
    }
    // остальные Безлики — по углам деревни
    this.activeGhosts.forEach((g, i) => { if (i > 0) g.reset(at(this.ghostSpawns[i % this.ghostSpawns.length])); });
    if (this.mode === 'hunter') this.playerGhost.reset(hunterPos);
    // живые игроки-Безлики из пряток остаются Безликами
    let gi = 1;
    for (const [id, name] of keepRemote) { while (gi < this.activeGhosts.length && this.activeGhosts[gi].remote) gi++; const g = this.activeGhosts[gi++]; if (g) { g.remote = id; g.remoteName = name; } }
    // найденные герои возвращаются на старт
    const spawns = this.botSpawns.slice();
    for (const a of this.agents) {
      if (a.eliminatedByHeads) continue;
      this.#resetBrothers(a);
      if (a.prop) this.toggleProp(a);
      if (!a.alive) {
        a.alive = true;
        a.ctrl.spawn(at(spawns.pop() || [this.playerSpawn.x, this.playerSpawn.z]), Math.PI);
        if (a.char) a.char.root.visible = true;
      }
      a.ctrl.stamina = 1;
      a.brothersRevives = a.hero.id === 'brothers' && !a.splitUsed ? 1 : 0;
      a.invulnerableT = 0;
    }
    this.setPhase('chase');
    this.emit('phase', { phase: 'chase', newGhostName, newGhostIsPlayer: !!this.playerGhost && this.mode !== 'hunter', agent: newGhost });
    if (!this.agents.some(a => a.alive)) { this.phase = 'over'; this.emit('end', { result: this.result() }); }
  }

  // Игрок вышел из комнаты посреди раунда — дальше за его героя бегает бот
  convertToBot(a) {
    a.remote = null;
    a.brain = new BotBrain(a, this.world, this.navFor(a.hero.radius));
    a.brain.allies = () => this.agents;
  }

  // Ввод гостя на этот кадр: прыжок и рывок — «одноразовые», их сбрасываем после применения
  #takeNet(id) {
    const n = this.netIn.get(id);
    if (!n) return {};
    const out = { ...n };
    n.jump = false; n.dash = false;
    return out;
  }

  result() {
    const R = CONFIG.round.reward;
    const alive = this.agents.filter(a => a.alive).map(a => a.name);
    let earn = this.stats.pumpkins;
    if (this.mode === 'hunter') earn += this.stats.found * R.found + this.stats.chaseCatches * R.catch;
    else if (this.mode === 'play') {
      if (this.stats.playerFoundAt === null) earn += R.survive;
      if (this.playerGhost) earn += this.caughtOrder.filter(c => c.phase === 'chase').length * R.catch;
      else if (!this.stats.playerCaughtInChase && this.player) earn += R.survive;
    }
    return {
      mode: this.mode, alive, hideSurvivors: this.hideSurvivors || [],
      caught: this.caughtOrder.map(c => c.agent.name), found: this.stats.found, chaseCatches: this.stats.chaseCatches,
      playerFoundAt: this.stats.playerFoundAt, playerWasGhost: !!this.playerGhost, playerCaughtInChase: this.stats.playerCaughtInChase,
      earn,
    };
  }
}
