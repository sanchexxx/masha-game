// Симуляция раундов «Смотреть» без браузера: настоящие модули игры, заглушка canvas.
// Запуск: node --import ./tools/sim/register.mjs tools/sim/sim.mjs [раундов=5] [безликов=2]
// Выводит: кого сколько раз поймали, кто выжил, сколько раз применялись умения.
const noop = () => {};
const ctx2d = new Proxy({}, { get: (t, k) => (k === 'createLinearGradient' || k === 'createRadialGradient') ? () => ({ addColorStop: noop }) : noop, set: () => true });
globalThis.document = { createElement: () => ({ width: 0, height: 0, getContext: () => ctx2d }) };
const G = new URL('../../src/', import.meta.url).href;
const THREE = await import('three');
const { CONFIG } = await import(G + 'config/config.js');
const { HEROES, GHOST } = await import(G + 'characters/index.js');
const { buildMap } = await import(G + 'world/map.js');
const { PlayerController, separate } = await import(G + 'player/controller.js');
const { BotBrain } = await import(G + 'player/bot.js');
const { Ghost } = await import(G + 'enemies/ghost.js');
const { NavGrid } = await import(G + 'enemies/pathfinder.js');
const { AbilitySet } = await import(G + 'abilities/abilities.js');

const seedRuns = +(process.argv[2] || 5), ghostsN = +(process.argv[3] || 2);
const scene = new THREE.Scene();
const map = buildMap(scene, { isMobile: true });
const world = map.world;
const navs = new Map();
const navFor = r => { const k = Math.round(r * 10); if (!navs.has(k)) navs.set(k, new NavGrid(world, r + 0.1)); return navs.get(k); };
const stats = { caught: {}, survived: {}, abil: {}, helpMs: 0, leftBush: 0, bushMax: 0 };
for (let run = 0; run < seedRuns; run++) {
  const game = { scene, world, agents: [], ghosts: [], domes: [], fx: [], addFx(f) { this.fx.push(f); }, navFor, sound: { chime: noop, land: noop }, cam: { shake: 0 } };
  const spawns = [[-5, 19], [5.5, 17], [-9, 23], [9, 21]];
  for (const h of HEROES) {
    const c = new PlayerController(h, world); c.spawn(new THREE.Vector3(spawns[game.agents.length][0], 0, spawns[game.agents.length][1]), 0);
    const a = { hero: h, name: h.name, ctrl: c, alive: true, hidden: false, protected: false };
    a.abilities = new AbilitySet(a, game);
    const orig = a.abilities.use.bind(a.abilities);
    a.abilities.use = id => { const ok = orig(id); if (ok) stats.abil[id] = (stats.abil[id] || 0) + 1; return ok; };
    a.brain = new BotBrain(a, world, navFor(h.radius)); a.brain.allies = () => game.agents;
    game.agents.push(a);
  }
  const gnav = navFor(GHOST.radius);
  const stub = { ...GHOST, build: () => ({ root: new THREE.Group(), update: noop }) };
  game.ghosts = [[0, -21], [-7, -20], [7, -20]].slice(0, ghostsN).map(([x, z]) => { const g = new Ghost(stub, world, scene, gnav); g.reset(new THREE.Vector3(x, 0, z)); return g; });
  const dt = 1 / 30; let t = 0; const sat = new Map();
  while (t < CONFIG.round.duration) {
    t += dt;
    game.ghosts.forEach((g, i) => { if (g.state === 'hidden' && t >= CONFIG.ghost.spawnDelay + i * CONFIG.ghost.spawnGap) g.spawn(); });
    const active = game.ghosts.filter(g => g.active);
    for (const a of game.agents) {
      if (!a.alive) continue;
      a.abilities.update(dt);
      const inp = a.brain.update(dt, active);
      const th = a.brain.threat;
      a.abilities.botThink(th, th ? th.pos.distanceTo(a.ctrl.pos) : Infinity);
      if (a.brain.mode === 'help') stats.helpMs += dt;
      a.ctrl.update(dt, inp, 0);
      const inB = world.inBush(a.ctrl.pos.x, a.ctrl.pos.z);
      a.hidden = inB && !a.ctrl.running;
      const s = inB ? (sat.get(a) || 0) + dt : 0;
      if (!inB && (sat.get(a) || 0) > 3) stats.leftBush++;
      sat.set(a, s); stats.bushMax = Math.max(stats.bushMax, s);
      a.protected = game.domes.some(d => Math.hypot(a.ctrl.pos.x - d.x, a.ctrl.pos.z - d.z) < d.r);
    }
    separate(game.agents);
    for (const g of game.ghosts) g.update(dt, t, game.agents, t / CONFIG.round.duration, { domes: game.domes });
    for (const g of game.ghosts) for (const a of game.agents) if (g.catches(a)) { a.alive = false; g.stun(1.2); stats.caught[a.hero.id] = (stats.caught[a.hero.id] || 0) + 1; }
    game.fx = game.fx.filter(f => f.update(dt) !== false);
    game.domes = game.domes.filter(d => d.update ? true : true);
    if (!game.agents.some(a => a.alive)) break;
  }
  for (const a of game.agents) if (a.alive) stats.survived[a.hero.id] = (stats.survived[a.hero.id] || 0) + 1;
}
stats.helpSec = +stats.helpMs.toFixed(1); delete stats.helpMs; stats.bushMax = +stats.bushMax.toFixed(1);
console.log(JSON.stringify(stats));
