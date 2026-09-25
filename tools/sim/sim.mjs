// Симуляция раундов без браузера: настоящие модули игры (тот же Round, что в браузере), заглушка canvas.
// Запуск: node --import ./tools/sim/register.mjs tools/sim/sim.mjs [раундов=5] [безликов=2] [режим=watch|hunter]
// Выводит: кого сколько нашли в прятках, кого поймали в догонялках, кто продержался, сколько раз применялись
// умения, сколько секунд боты провели на крышах и под маскировкой, сколько было финтов, скорость шага.
const noop = () => {};
const ctx2d = new Proxy({}, { get: (t, k) => (k === 'createLinearGradient' || k === 'createRadialGradient') ? () => ({ addColorStop: noop }) : k === 'measureText' ? () => ({ width: 10 }) : noop, set: () => true });
globalThis.document = { createElement: () => ({ width: 0, height: 0, getContext: () => ctx2d }) };
const G = new URL('../../src/', import.meta.url).href;
const THREE = await import('three');
const { CONFIG } = await import(G + 'config/config.js');
const { HEROES, GHOST } = await import(G + 'characters/index.js');
const { buildMap } = await import(G + 'world/map.js');
const { Ghost } = await import(G + 'enemies/ghost.js');
const { NavGrid } = await import(G + 'enemies/pathfinder.js');
const { Round } = await import(G + 'game/round.js');

const runs = +(process.argv[2] || 5), ghostsN = +(process.argv[3] || 2), mode = process.argv[4] || 'watch';
const scene = new THREE.Scene();
const t0 = Date.now();
const map = buildMap(scene, { isMobile: true });
const world = map.world;
const navs = new Map();
const navFor = r => { const k = Math.round(r * 10); if (!navs.has(k)) navs.set(k, new NavGrid(world, r + 0.1)); return navs.get(k); };
for (const h of HEROES) navFor(h.radius);
const buildMs = Date.now() - t0;
const stub = { ...GHOST, build: () => ({ root: new THREE.Group(), update: noop }) };
const heroStubs = HEROES.map(h => ({ ...h, build: () => ({ root: new THREE.Group(), update: noop }) }));
const ghosts = Array.from({ length: 4 }, () => new Ghost(stub, world, scene, navFor(GHOST.radius), { heroes: heroStubs }));

const S = { found: {}, chaseCaught: {}, hideSurvived: {}, chaseSurvived: {}, abil: {}, roofSec: 0, propSec: 0, jukes: 0, ghostDisguises: 0, msPerStep: 0 };
const inc = (o, k, n = 1) => { o[k] = (o[k] || 0) + n; };
let stepMs = 0, frames = 0;
for (let run = 0; run < runs; run++) {
  const round = new Round({
    world, scene, navFor, ghosts, heroes: HEROES,
    makeChar: () => null, makeProp: () => null,
    sound: { chime: noop, land: noop }, cam: { shake: 0 },
  });
  round.start({ mode, hero: HEROES[0], skin: 'classic', ghosts: ghostsN, withBots: true });
  for (const a of round.agents) {
    const orig = a.abilities.use.bind(a.abilities);
    a.abilities.use = id => { const ok = orig(id); if (ok) inc(S.abil, id); return ok; };
  }
  const dt = 1 / 30; let time = 0;
  const jukeSeen = new Set();
  while (round.phase !== 'over' && time < 400) {
    time += dt;
    const s0 = performance.now();
    round.step(dt, time, mode === 'hunter' ? { x: 0, y: 0 } : null, 0);
    stepMs += performance.now() - s0; frames++;
    round.fx = round.fx.filter(f => f.update(dt) !== false);
    for (const a of round.agents) {
      if (!a.alive) continue;
      if (a.ctrl.elevated) S.roofSec += dt;
      if (a.prop) S.propSec += dt;
      if (a.brain?.juke && !jukeSeen.has(a.brain.juke)) { jukeSeen.add(a.brain.juke); S.jukes++; }
    }
    for (const e of round.events) {
      if (e.type === 'caught') inc(e.phase === 'hide' ? S.found : S.chaseCaught, e.agent.hero.id);
      if (e.type === 'poof' && e.ghost) S.ghostDisguises++;
      if (e.type === 'phase') for (const n of round.hideSurvivors) inc(S.hideSurvived, n);
    }
    round.events.length = 0;
  }
  for (const a of round.agents) if (a.alive) inc(S.chaseSurvived, a.name);
}
S.roofSec = +S.roofSec.toFixed(1); S.propSec = +S.propSec.toFixed(1);
S.msPerStep = +(stepMs / frames).toFixed(2);
S.buildMs = buildMs;
console.log(JSON.stringify(S));
