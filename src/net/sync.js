// Совместная игра: «снимок» раунда у хозяина → картинка у гостя.
// Хозяин 15 раз в секунду рассылает, где кто стоит и что делает; гость плавно подтягивает героев к этим точкам
// и сам рисует анимации. Внешность (скины котиков) передаётся один раз — в «составе» (roster).
import * as THREE from '../../vendor/three.min.js?v=r186s15';
import { buildProp, PROP_KINDS } from '../world/props.js';

const r2 = v => Math.round(v * 100) / 100;
const PROP_IDS = PROP_KINDS.map(k => k.id);

// Состав: кто в раунде и как выглядит (отправляется при старте и при смене фаз)
export function makeRoster(round) {
  return round.agents.map(a => ({ k: a.key, hero: a.hero.id, skin: a.skin, name: a.name, pid: a.isPlayer ? 'host' : a.remote || null }));
}

export function makeSnapshot(round) {
  const A = round.agents.map(a => {
    const c = a.ctrl, act = a.action;
    return [a.key, r2(c.pos.x), r2(c.pos.y), r2(c.pos.z), r2(c.yaw), r2(c.speed), c.grounded ? 1 : 0, r2(c.vel.y), c.running || c.dashT > 0 ? 1 : 0,
      c.crouching ? 1 : 0, a.alive ? 1 : 0, a.prop ? PROP_IDS.indexOf(a.prop.kind.id) + 1 : 0, act ? act.name : 0, act ? r2(act.t / act.dur) : 0,
      a.hidden ? 1 : 0, r2(c.stamina), c.exhausted ? 1 : 0, r2(c.dashCd / c.phys.dash.cooldown)];
  });
  const Gs = round.activeGhosts.map((g, i) => {
    const d = g.disguise;
    return [i, r2(g.pos.x), r2(g.pos.y), r2(g.pos.z), r2(g.yaw), g.state === 'hidden' ? 0 : g.state === 'appear' ? 1 : 2, r2(g.appear),
      g.state === 'hunt' ? 1 : 0, r2(g.ctrl.speed), g.stunT > 0 ? 1 : 0, d?.hero ? d.hero.id : 0, d?.prop ? d.prop.id : 0,
      g.isPlayer ? 'host' : g.remote || 0, r2(g.ctrl.stamina), g.ctrl.dashCharges, r2(g.ctrl.flyEnergy), r2(g.disguiseCd)];
  });
  return { t: 's', ph: round.phase, left: r2(round.left), sp: round.spawned, a: A, g: Gs };
}

// Картинка раунда на устройстве гостя
export class GuestView {
  // env: { scene, heroes: [...HEROES], ghostDef, ghosts: [Ghost…] (только для моделей), acquire(hero, skin) }
  constructor(env) {
    this.env = env;
    this.agents = new Map();      // key → {def, char, pos, yaw, snap, propObj}
    this.snap = null;
    this.ghostDz = new Map();     // 'hero:id' | 'prop:id' + i → модель маскировки
  }

  setRoster(roster) {
    const keep = new Set(roster.map(r => r.k));
    for (const [k, v] of this.agents) if (!keep.has(k)) { this.env.scene.remove(v.char.root); if (v.propObj) this.env.scene.remove(v.propObj); this.agents.delete(k); }
    for (const r of roster) {
      if (this.agents.has(r.k)) continue;
      const def = this.env.heroes.find(h => h.id === r.hero) || this.env.heroes[0];
      const char = this.env.acquire(def, r.skin);
      this.agents.set(r.k, { def, char, name: r.name, pid: r.pid, pos: null, yaw: 0, s: null, propObj: null, propKind: 0 });
    }
  }

  apply(snap) {
    this.snap = snap;
    for (const s of snap.a) { const v = this.agents.get(s[0]); if (v) v.s = s; }
  }

  // Моя фигурка (герой или Безлик) — для камеры и интерфейса
  me(pid) {
    for (const v of this.agents.values()) if (v.pid === pid && v.s && v.s[10]) return { kind: 'agent', v, pos: v.pos || new THREE.Vector3(v.s[1], v.s[2], v.s[3]) };
    const g = this.snap?.g.find(x => x[12] === pid);
    if (g) return { kind: 'ghost', g, pos: this.env.ghosts[g[0]].root.position };
    return null;
  }

  render(dt, t) {
    const k = 1 - Math.exp(-dt * 14);
    for (const v of this.agents.values()) {
      const s = v.s;
      if (!s) { v.char.root.visible = false; continue; }
      const target = new THREE.Vector3(s[1], s[2], s[3]);
      if (!v.pos || v.pos.distanceTo(target) > 6) v.pos = target.clone(); else v.pos.lerp(target, k);
      v.yaw += Math.atan2(Math.sin(s[4] - v.yaw), Math.cos(s[4] - v.yaw)) * k;
      const alive = !!s[10], prop = s[11];
      if (prop !== v.propKind) {
        if (v.propObj) { this.env.scene.remove(v.propObj); v.propObj = null; }
        if (prop) { v.propObj = buildProp(PROP_IDS[prop - 1]); v.propObj.rotation.y = Math.random() * 6; this.env.scene.add(v.propObj); }
        v.propKind = prop;
      }
      if (v.propObj) { v.propObj.position.copy(v.pos); v.propObj.visible = alive; }
      const root = v.char.root;
      root.visible = alive && !prop;
      root.position.copy(v.pos);
      root.rotation.y = v.yaw;
      root.scale.y += ((s[9] ? 0.62 : 1) - root.scale.y) * Math.min(1, dt * 14);
      v.char.update(dt, { t, speed: s[5], grounded: !!s[6], vy: s[7], running: !!s[8], landed: false, landSpeed: 0, crouch: !!s[9], action: s[12] ? { name: s[12], k: s[13] } : null });
    }
    const gs = this.snap?.g || [];
    this.env.ghosts.forEach((G, i) => {
      const s = gs.find(x => x[0] === i);
      const shown = s && s[5] !== 0;
      const dzKey = s && (s[10] ? 'hero:' + s[10] : s[11] ? 'prop:' + s[11] : null);
      // модель маскировки
      for (const [key, obj] of this.ghostDz) if (key.endsWith('#' + i) && key !== dzKey + '#' + i) { obj.root.visible = false; }
      G.root.visible = !!shown && !dzKey;
      if (!s) return;
      const target = new THREE.Vector3(s[1], s[2], s[3]);
      if (G.root.position.distanceTo(target) > 6) G.root.position.copy(target); else G.root.position.lerp(target, k);
      G.root.rotation.y += Math.atan2(Math.sin(s[4] - G.root.rotation.y), Math.cos(s[4] - G.root.rotation.y)) * k;
      if (shown && !dzKey) G.char.update(dt, { t, speed: s[8], mode: s[7] ? 'hunt' : 'search', appear: s[5] === 1 ? s[6] : 1, stunned: !!s[9] });
      if (shown && dzKey) {
        const key = dzKey + '#' + i;
        let obj = this.ghostDz.get(key);
        if (!obj) {
          if (s[10]) { const def = this.env.heroes.find(h => h.id === s[10]); obj = def.build('classic'); }
          else obj = { root: buildProp(s[11]), update() {} };
          this.env.scene.add(obj.root);
          this.ghostDz.set(key, obj);
        }
        obj.root.visible = true;
        obj.root.position.copy(G.root.position);
        if (s[10]) obj.root.rotation.y = G.root.rotation.y;
        obj.update(dt, { t, speed: s[8], grounded: true, vy: 0, running: s[8] > 6, landed: false });
      }
    });
  }

  clear() {
    for (const v of this.agents.values()) { this.env.scene.remove(v.char.root); if (v.propObj) this.env.scene.remove(v.propObj); }
    this.agents.clear();
    for (const o of this.ghostDz.values()) this.env.scene.remove(o.root);
    this.ghostDz.clear();
    this.env.ghosts.forEach(G => { G.root.visible = false; });
    this.snap = null;
  }
}
