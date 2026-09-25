// Способности героев: клавиша/кнопка → анимация → эффект в мире.
// Одинаково работают у игрока и у ботов (боты жмут «кнопки» сами).
import * as THREE from 'three';
import { CONFIG } from '../config/config.js';
import * as FX from './fx.js';

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
  masha: [
    { id: 'wave', key: 'G', name: 'Привет!', icon: '👋', tag: 'Эмоция', anim: 'wave', dur: 1.4, lock: 0 },
  ],
  catbus: [],
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
    const fireAt = act.name === 'swing' ? 0.3 : act.name === 'wave' ? 99 : 0.45;
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
    if (id === 'shelter') {
      const d = FX.dome(g.scene, p.x, p.z, cfg.radius, cfg.time);
      g.addFx(d);
      g.domes.push(d);
      setTimeout(() => { g.domes = g.domes.filter(x => x !== d); }, cfg.time * 1000);
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
      for (let i = 0; i < cfg.count; i++) {
        let target = null;
        g.addFx(FX.wisp(g.scene, from, () => {
          if (!target || !target.active) target = nearestGhost(g.ghosts, p, 30);
          return target ? target.pos : null;
        }, () => { target.slow(cfg.slow); target.stun(cfg.stun); g.sound.land?.(6); }, 7));
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
        gh.stun(cfg.stun);
        gh.knock(dx / (d || 1), dz / (d || 1), cfg.knock);
        g.cam.shake = Math.max(g.cam.shake, 0.4);
      }
      snd.land?.(12);
    }
  }

  // Бот сам решает, чем воспользоваться
  botThink(threat, td) {
    const c = this.agent.ctrl;
    if (threat && td < 2.8 && this.ready('swing')) return this.use('swing');
    if (threat && td < 7 && this.ready('shelter')) return this.use('shelter');
    if (threat && td < 16 && this.ready('wisps')) return this.use('wisps');
    if (c.stamina < 0.25 && this.ready('light')) return this.use('light');
    if (threat && td < 12 && this.ready('path') && Math.random() < 0.02) return this.use('path');
    if (!threat && this.ready('wave') && Math.random() < 0.002) return this.use('wave');
  }
}

function nearestGhost(ghosts, p, max) {
  let best = null, bd = max;
  for (const g of ghosts) {
    if (!g.active) continue;
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
