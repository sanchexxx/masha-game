// Способности героев: клавиша/кнопка → анимация → эффект в мире.
// Одинаково работают у игрока и у ботов (боты жмут «кнопки» сами).
import * as THREE from 'three';
import { CONFIG } from '../config/config.js?v=2026100901';
import * as FX from './fx.js?v=2026100901';

const A = () => CONFIG.abilities;

// Что умеет каждый герой. key — клавиша, anim — какая анимация, lock — сколько сек герой почти стоит.
export const HERO_ABILITIES = {
  moti: [
    { id: 'shelter', key: '1', name: 'Уютный приют', icon: '🛡️', tag: 'Защита', anim: 'cast', dur: 0.9, lock: 0.7 },
    { id: 'light', key: '2', name: 'Тёплый свет', icon: '❤️', tag: 'Лечение', anim: 'cast', dur: 0.8, lock: 0.5 },
    { id: 'wisps', key: '3', name: 'Духи-помощники', icon: '🔥', tag: 'Поддержка', anim: 'summon', dur: 1.0, lock: 0.6 },
    { id: 'path', key: '4', name: 'Путь фонарей', icon: '🐾', tag: 'Команда', anim: 'path', dur: 0.8, lock: 0.4 },
    { id: 'swing', key: 'F', name: 'Удар фонарём', icon: '🏮', tag: 'Атака', anim: 'swing', dur: 0.55, lock: 0 },
    { id: 'wave', key: 'G', name: 'Привет!', icon: '👋', tag: 'Эмоция', anim: 'wave', dur: 1.6, lock: 0 },
  ],
  kid: [
    { id: 'repel', key: '1', name: 'Вспышка', icon: '✨', tag: 'Побег', anim: 'cast', dur: 0.7, lock: 0.3 },
    { id: 'tailhop', key: '2', name: 'Прыжок хвостика', icon: '🐾', tag: 'Манёвр', anim: 'jump', dur: 0.42, lock: 0 },
    { id: 'prop', key: 'Q', name: 'Маскировка', icon: '🎭', tag: 'Прятки', anim: 'poof', dur: 0.25, lock: 0 },
    { id: 'wave', key: 'G', name: 'Привет!', icon: '👋', tag: 'Эмоция', anim: 'wave', dur: 1.4, lock: 0 },
  ],
  masha: [
    { id: 'repel', key: '1', name: 'Вспышка', icon: '✨', tag: 'Побег', anim: 'cast', dur: 0.7, lock: 0.3 },
    { id: 'petals', key: '2', name: 'Порыв листьев', icon: '🍃', tag: 'Ускорение', anim: 'cast', dur: 0.55, lock: 0 },
    { id: 'prop', key: 'Q', name: 'Маскировка', icon: '🎭', tag: 'Прятки', anim: 'poof', dur: 0.25, lock: 0 },
    { id: 'wave', key: 'G', name: 'Привет!', icon: '👋', tag: 'Эмоция', anim: 'wave', dur: 1.4, lock: 0 },
  ],
  catbus: [
    { id: 'repel', key: '1', name: 'Вспышка', icon: '✨', tag: 'Побег', anim: 'cast', dur: 0.7, lock: 0.3 },
    { id: 'roar', key: '2', name: 'Рёв НэкоБуса', icon: '🔊', tag: 'Отталкивание', anim: 'cast', dur: 0.6, lock: 0.1 },
    { id: 'prop', key: 'Q', name: 'Маскировка', icon: '🎭', tag: 'Прятки', anim: 'poof', dur: 0.25, lock: 0 },
  ],
  totoro: [
    { id: 'oak', key: '1', name: 'Великий дуб', icon: '🌳', tag: 'Природа', anim: 'cast', dur: 0.9, lock: 0.6 },
    { id: 'hut', key: '2', name: 'Лесной домик', icon: '🛖', tag: 'Природа', anim: 'cast', dur: 0.8, lock: 0.5 },
    { id: 'rain', key: '3', name: 'Вызов дождя', icon: '🌧️', tag: 'Природа', anim: 'cast', dur: 0.9, lock: 0.4 },
    { id: 'minis', key: '4', name: 'Маленькие Тоторо', icon: '🐾', tag: 'Помощники', anim: 'summon', dur: 0.8, lock: 0.3 },
    { id: 'troar', key: '5', name: 'Рёв Тоторо', icon: '🗯️', tag: 'Контроль', anim: 'roar', dur: 1.0, lock: 0.5 },
    { id: 'nekohelp', key: 'F', name: 'Зов НэкоБуса', icon: '🐈', tag: 'Помощь', anim: 'summon', dur: 0.6, lock: 0 },
    { id: 'nekoride', key: 'R', name: 'Полёт на НэкоБусе', icon: '🚌', tag: 'Полёт', anim: 'summon', dur: 0.4, lock: 0 },
    { id: 'vanish', key: 'Q', name: 'Невидимость', icon: '👻', tag: 'Прятки', anim: 'cast', dur: 0.4, lock: 0 },
    { id: 'wave', key: 'G', name: 'Привет!', icon: '👋', tag: 'Эмоция', anim: 'wave', dur: 1.6, lock: 0 },
  ],
  brothers: [
    { id: 'fear', key: '1', name: 'Страх', icon: '🔥', tag: 'Контроль', anim: 'fear', dur: 0.75, lock: 0.3 },
    { id: 'hypnosis', key: '2', name: 'Гипноз', icon: '🌀', tag: 'Контроль', anim: 'hypnosis', dur: 0.85, lock: 0.35 },
    { id: 'glare', key: '3', name: 'Грозный взгляд', icon: '👁️', tag: 'Поиск', anim: 'glare', dur: 0.6, lock: 0.15 },
    { id: 'split', key: '4', name: 'Три головы', icon: '👥', tag: '3 жизни', anim: 'split', dur: 0.35, lock: 0 },
  ],
};

export class AbilitySet {
  constructor(agent, game) {
    this.agent = agent;
    this.game = game;
    this.list = (HERO_ABILITIES[agent.ctrl.hero.id] || []).map(d => ({ ...d, cdLeft: 0 }));
    agent.action = null;
  }

  get(id) { return this.list.find(a => a.id === id); }
  ready(id) { const a = this.get(id); return !!a && a.cdLeft <= 0; }
  cooldown(a) { return A()[a.id]?.cd ?? 1; }

  use(id) {
    const a = this.get(id);
    if (!a || a.cdLeft > 0 || !this.agent.alive) return false;
    if (id === 'tailhop' && (!this.agent.ctrl.grounded || this.agent.ctrl.swimming || this.agent.ctrl.flying || this.agent.ctrl.climbing)) return false;
    if (id === 'split' && (this.agent.splitUsed || this.agent.splitActive)) return false;
    // Тоторо: созданий ограниченное число, а помогать можно, только когда кого-то ловят
    const T = this.game.nature;
    if (['oak', 'hut'].includes(id) && T) {
      if (T.count(id) >= A()[id].max) { this.game.emit?.('natureFull', { agent: this.agent, id }); return false; }
      const spot = T.findSpot(this.agent, id === 'oak' ? 1.1 : 1.3);
      if (!spot) { this.game.emit?.('natureNoRoom', { agent: this.agent, id }); return false; }
      this.agent.natureSpot = spot;
    }
    if (id === 'nekohelp') {
      const need = this.game.helpNeeded?.(this.agent);
      if (!need) { this.game.emit?.('noHelpNeeded', { agent: this.agent }); return false; }
      this.agent.helpGhost = this.agent.helpGhost && this.agent.helpGhost.active ? this.agent.helpGhost : need.ghost;
      this.agent.helpAlly = need.ally;
    }
    if (id === 'nekoride' && (this.agent.ctrl.swimming || this.agent.ctrl.rideT > 0)) return false;
    if (this.agent.action && this.agent.action.lock > 0) return false;
    a.cdLeft = this.cooldown(a);
    this.agent.action = { name: a.anim, t: 0, dur: a.dur, lock: a.lock, id: a.id, fired: false };
    return true;
  }

  update(dt) {
    for (const a of this.list) a.cdLeft = Math.max(0, a.cdLeft - dt);
    const act = this.agent.action;
    this.agent.ctrl.moveMul = 1;
    if (!act) return;
    act.t += dt;
    act.lock = Math.max(0, act.lock - dt);
    if (act.lock > 0) this.agent.ctrl.moveMul = 0.15;
    // эффект срабатывает в «сильный» момент анимации
    const fireAt = act.name === 'swing' ? 0.3 : act.name === 'wave' ? 99 : ['poof', 'split'].includes(act.name) || ['nekoride', 'vanish', 'nekohelp'].includes(act.id) ? 0 : act.name === 'roar' ? 0.3 : 0.45;
    if (!act.fired && act.t / act.dur >= fireAt) { act.fired = true; this.#fire(act.id); }
    if (act.t >= act.dur) this.agent.action = null;
  }

  // Состояние для анимации персонажа
  pose() {
    const act = this.agent.action;
    return act ? { name: act.name, k: act.t / act.dur } : null;
  }

  #fire(id) {
    const g = this.game, me = this.agent, c = me.ctrl, cfg = A()[id];
    const p = c.pos;
    const snd = g.sound;
    // Сеть должна показывать VFX вместе с фактическим игровым эффектом,
    // а не раньше — в момент нажатия кнопки/начала анимации.
    g.emit?.('ability', { agent: me, id });
    if (id === 'prop') {
      g.toggleProp?.(me);
    } else if (id === 'tailhop') {
      const ph = CONFIG.heroes.kid;
      c.vel.y = Math.max(c.vel.y, Math.sqrt(2 * CONFIG.world.gravity * ph.jump) * 0.86);
      c.vel.x += Math.sin(c.yaw) * cfg.forward;
      c.vel.z += Math.cos(c.yaw) * cfg.forward;
      c.grounded = false; c.coyote = 0; c.jumpBuf = 0;
      g.addFx(FX.tailHop(g.scene, p.x, p.y, p.z, c.yaw));
      snd.chime?.([784, 1046, 1318]);
    } else if (id === 'petals') {
      c.boostT = cfg.time;
      c.boostMul = cfg.boost;
      g.addFx(FX.petalRush(g.scene, p.x, p.y, p.z, c.yaw));
      snd.chime?.([659, 880, 1175]);
    } else if (id === 'roar') {
      const nearest = g.ghosts.filter(gh => gh.active).sort((a, b) => a.pos.distanceToSquared(p) - b.pos.distanceToSquared(p))[0];
      // Бот перед рёвом действительно разворачивается к преследователю.
      if (nearest && !me.isPlayer && !me.remote) c.yaw = Math.atan2(nearest.pos.x - p.x, nearest.pos.z - p.z);
      g.addFx(FX.roarWave(g.scene, p.x, p.y, p.z, c.yaw, cfg.radius));
      const fx = Math.sin(c.yaw), fz = Math.cos(c.yaw);
      for (const gh of g.ghosts) {
        if (!gh.active) continue;
        const dx = gh.pos.x - p.x, dz = gh.pos.z - p.z, d = Math.hypot(dx, dz);
        if (d > cfg.radius + gh.radius || (dx * fx + dz * fz) / (d || 1) < -0.25) continue;
        // Отбрасывание — часть контроля: если Безлик сейчас невосприимчив,
        // не даём повторным рёвам сдвигать его сквозь защиту от контроля.
        if (gh.stun(cfg.stun, 'roar')) gh.knock(dx / (d || 1), dz / (d || 1), cfg.knock);
      }
      g.cam.shake = Math.max(g.cam.shake, 0.22);
      snd.land?.(9);
    } else if (id === 'split') {
      g.activateBrothersSplit?.(me);
    } else if (id === 'shelter') {
      const d = FX.dome(g.scene, p.x, p.z, cfg.radius, cfg.time);
      d.life = cfg.time;
      g.addFx(d);
      g.domes.push(d);
      snd.chime?.([523, 784, 1046]);
    } else if (id === 'light') {
      g.addFx(FX.burst(g.scene, p.x, p.z, cfg.radius));
      for (const a of g.agents) {
        if (!a.alive || a.ctrl.pos.distanceTo(p) > cfg.radius) continue;
        a.ctrl.stamina = 1;
        a.ctrl.exhausted = false;
        a.ctrl.boostT = cfg.boostTime;
        a.ctrl.boostMul = cfg.boost;
      }
      snd.chime?.([659, 880, 1318]);
    } else if (id === 'wisps') {
      const from = new THREE.Vector3(p.x, p.y + 2, p.z);
      const reserved = new Set();
      for (let i = 0; i < cfg.count; i++) {
        // Сначала назначаем каждому огоньку отдельного Безлика; иначе все три
        // снаряда слетаются на одну цель и два упираются в её иммунитет к контролю.
        let target = nearestGhost(g.ghosts, p, 30, reserved);
        if (target) reserved.add(target);
        else target = nearestGhost(g.ghosts, p, 30, null, true); // дублируем цель только для визуального огонька
        g.addFx(FX.wisp(g.scene, from, () => {
          return target?.active ? target.pos : null;
        }, () => {
          if (target && target.active && target.controlImmuneT <= 0 && target.slow(cfg.slow)) {
            target.stun(cfg.stun, 'wisps'); g.sound.land?.(6);
          }
        }, 7));
      }
      snd.chime?.([440, 660, 880]);
    } else if (id === 'path') {
      const bush = safestBush(g.world, g.ghosts, p);
      if (bush) {
        const route = g.navFor(c.radius).find(p.x, p.z, bush.x, bush.z);
        if (route) g.addFx(FX.pawPath(g.scene, [[p.x, p.z], ...route], cfg.time));
      }
      for (const gh of g.ghosts) if (gh.state !== 'hidden') g.addFx(FX.marker(g.scene, () => gh.pos, cfg.time));
      snd.chime?.([392, 523, 659, 784]);
    } else if (id === 'swing') {
      g.addFx(FX.swingArc(g.scene, p.x, p.y, p.z, c.yaw));
      const fx = Math.sin(c.yaw), fz = Math.cos(c.yaw);
      for (const gh of g.ghosts) {
        if (!gh.active) continue;
        const dx = gh.pos.x - p.x, dz = gh.pos.z - p.z, d = Math.hypot(dx, dz);
        if (d > cfg.range + gh.radius) continue;
        if ((dx * fx + dz * fz) / (d || 1) < -0.2) continue;       // сзади не достаёт
        if (gh.stun(cfg.stun, 'swing')) {
          gh.knock(dx / (d || 1), dz / (d || 1), cfg.knock);
          g.cam.shake = Math.max(g.cam.shake, 0.4);
        }
      }
      snd.land?.(12);
    } else if (id === 'repel') {
      g.addFx(FX.repelFlash(g.scene, p.x, p.y, p.z, cfg.radius));
      for (const gh of g.ghosts) if (gh.active && Math.hypot(gh.pos.x - p.x, gh.pos.z - p.z) <= cfg.radius)
        gh.stun(cfg.stun, 'repel');
      snd.chime?.([784, 1046, 1568]);
    } else if (id === 'rain') {
      g.startRain?.(me, cfg);
      snd.totoroCue?.('rain');
    } else if (['oak', 'hut'].includes(id)) {
      const s = me.natureSpot;
      if (s && g.nature) {
        if (id === 'oak') g.nature.addOak(s.x, s.z);
        else g.nature.addHut(s.x, s.z);
        g.emit?.('nature', { kind: id, x: s.x, z: s.z, agent: me });
        g.addFx(FX.burst(g.scene, s.x, s.z, id === 'oak' ? 3 : 2, 0x8fe07a));
      }
      snd.totoroCue?.('grow');
    } else if (id === 'minis') {
      g.spawnMinis?.(me, cfg);
      snd.totoroCue?.('minis');
    } else if (id === 'troar') {
      g.addFx(FX.roarWave(g.scene, p.x, p.y, p.z, c.yaw, cfg.radius, 0x8fe07a));
      for (const gh of g.ghosts) if (gh.active && Math.hypot(gh.pos.x - p.x, gh.pos.z - p.z) <= cfg.radius) gh.clumsy?.(cfg.time);
      g.cam.shake = Math.max(g.cam.shake, 0.35);
      snd.totoroCue?.('roar');
    } else if (id === 'nekohelp') {
      g.sendNekobus?.(me, me.helpGhost, me.helpAlly, cfg);
      me.helpGhost = null; me.helpAlly = null;
      snd.totoroCue?.('neko');
    } else if (id === 'nekoride') {
      c.rideT = cfg.time; c.rideHeight = cfg.height;
      c.boostT = cfg.time; c.boostMul = cfg.boost;
      snd.totoroCue?.('neko');
    } else if (id === 'vanish') {
      me.vanishT = cfg.time;
      g.addFx(FX.burst(g.scene, p.x, p.z, 1.6, 0xd8e6ff));
      snd.totoroCue?.('vanish');
    } else if (id === 'fear') {
      g.addFx(FX.fearWave(g.scene, p.x, p.y, p.z, cfg.radius));
      for (const gh of g.ghosts) if (gh.active && Math.hypot(gh.pos.x - p.x, gh.pos.z - p.z) <= cfg.radius) {
        gh.fear(cfg.flee, p, cfg.stun);
      }
      snd.brothersCue?.('fear');
    } else if (id === 'hypnosis') {
      g.addFx(FX.hypnosisVortex(g.scene, p.x, p.y, p.z, cfg.radius));
      for (const gh of g.ghosts) if (gh.active && Math.hypot(gh.pos.x - p.x, gh.pos.z - p.z) <= cfg.radius)
        gh.confuse(cfg.time, 'hypnosis', cfg.stun);
      snd.brothersCue?.('hypnosis');
    } else if (id === 'glare') {
      g.addFx(FX.glareFlash(g.scene, p.x, p.y, p.z, cfg.radius));
      for (const gh of g.ghosts) if (gh.active && Math.hypot(gh.pos.x - p.x, gh.pos.z - p.z) <= cfg.radius) {
        gh.reveal(); gh.stun(cfg.stun, 'glare');
        g.addFx(FX.marker(g.scene, () => gh.pos, cfg.mark));
      }
      snd.brothersCue?.('glare');
    }
  }

  // Бот сам решает, чем воспользоваться
  botThink(threat, td) {
    const c = this.agent.ctrl;
    const g = this.game, p = c.pos;
    if (threat && this.get('roar') && td < A().roar.radius && this.ready('roar')) return this.use('roar');
    if (threat && c.grounded && this.get('tailhop') && td < 8 && this.ready('tailhop')) return this.use('tailhop');
    if (threat && this.get('petals') && td < 13 && this.ready('petals')) return this.use('petals');
    if (threat && td < A().repel.radius && this.ready('repel')) return this.use('repel');
    if (this.get('fear')) {
      if (threat && td < A().fear.radius && this.ready('fear')) return this.use('fear');
      if (threat && td < A().hypnosis.radius && this.ready('hypnosis')) return this.use('hypnosis');
      if (threat && td < A().glare.radius && this.ready('glare')) return this.use('glare');
      if (threat && td < 5 && this.ready('split') && !this.agent.splitUsed) return this.use('split');
    }
    // Тоторо: помогает друзьям, пугает рёвом, строит укрытия, когда спокойно
    if (this.get('troar')) {
      const me = this.agent;
      if (this.ready('nekohelp') && g.helpNeeded?.(me)) return this.use('nekohelp');
      if (threat && td < A().troar.radius * 0.8 && this.ready('troar')) return this.use('troar');
      if (threat && td < 12 && this.ready('rain')) return this.use('rain');
      if (threat && td < 5 && this.ready('vanish')) return this.use('vanish');
      if (threat && td < 7 && this.ready('minis')) return this.use('minis');
      if (threat && td < 4 && this.ready('nekoride')) return this.use('nekoride');
      if (!threat && g.phase === 'hide' && Math.random() < 0.004) {
        const pick = ['hut', 'oak'][(Math.random() * 2) | 0];
        if (this.ready(pick)) return this.use(pick);
      }
    }
    // Маскировка под предмет: в прятках, когда Безлика не видно, — превращаемся и замираем.
    // Безлик подошёл вплотную — бросаем маскировку и бежим.
    if (this.get('prop')) {
      const me = this.agent;
      if (me.prop && threat && td < CONFIG.bots.jukeRange + 0.8) { g.toggleProp?.(me); return; }
      if (!me.prop && !threat && g.phase === 'hide' && this.ready('prop') && !c.elevated && Math.random() < 0.006) return this.use('prop');
      if (me.prop) return;
    }
    // Командная игра: помогаем другу, за которым гонятся рядом
    for (const a of g.agents) {
      if (a === this.agent || !a.alive) continue;
      const gh = g.ghosts.find(x => x.active && x.target === a);
      const ad = a.ctrl.pos.distanceTo(p);
      if (gh && gh.pos.distanceTo(p) < 16 && this.ready('wisps')) return this.use('wisps');
      if (gh && ad < CONFIG.abilities.shelter.radius && gh.pos.distanceTo(a.ctrl.pos) < 8 && this.ready('shelter')) return this.use('shelter');
      if (a.ctrl.exhausted && ad < CONFIG.abilities.light.radius && this.ready('light')) return this.use('light');
    }
    if (threat && td < 2.8 && this.ready('swing')) return this.use('swing');
    if (threat && td < 7 && this.ready('shelter')) return this.use('shelter');
    if (threat && td < 16 && this.ready('wisps')) return this.use('wisps');
    if (c.stamina < 0.25 && this.ready('light')) return this.use('light');
    if (threat && td < 12 && this.ready('path') && Math.random() < 0.02) return this.use('path');
    if (!threat && this.ready('wave') && Math.random() < 0.002) return this.use('wave');
  }
}

function nearestGhost(ghosts, p, max, exclude = null, allowImmune = false) {
  let best = null, bd = max;
  for (const g of ghosts) {
    if (!g.active || exclude?.has(g) || (!allowImmune && g.controlImmuneT > 0)) continue;
    const d = g.pos.distanceTo(p);
    if (d < bd) { bd = d; best = g; }
  }
  return best;
}

// Куст, до которого нам ближе, чем Безликам
function safestBush(world, ghosts, p) {
  let best = null, bs = -Infinity;
  for (const b of world.bushes) {
    const d = Math.hypot(b.x - p.x, b.z - p.z);
    let gd = 40;
    for (const g of ghosts) if (g.state !== 'hidden') gd = Math.min(gd, Math.hypot(b.x - g.pos.x, b.z - g.pos.z));
    const s = gd * 1.2 - d;
    if (s > bs) { bs = s; best = b; }
  }
  return best;
}
