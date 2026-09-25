// Проверка физики без браузера: лестница, подтягивание на ящик и крышу, вход в дом, потолок, парение Безлика.
// Запуск: node --import ./tools/sim/register.mjs tools/sim/physics.mjs
const noop = () => {};
const ctx2d = new Proxy({}, { get: (t, k) => (k === 'createLinearGradient' || k === 'createRadialGradient') ? () => ({ addColorStop: noop }) : noop, set: () => true });
globalThis.document = { createElement: () => ({ width: 0, height: 0, getContext: () => ctx2d }) };
const G = new URL('../../src/', import.meta.url).href;
const THREE = await import('three');
const { HEROES, GHOST } = await import(G + 'characters/index.js');
const { buildMap } = await import(G + 'world/map.js');
const { PlayerController } = await import(G + 'player/controller.js');
const world = buildMap(new THREE.Scene(), { isMobile: true }).world;
const hero = id => HEROES.find(h => h.id === id) || GHOST;
let fails = 0;
// Ведём героя: dir — куда жать (мировые x,z), сек, прыжок в начале
function drive(id, from, dir, sec, { jumpAt = -1, hold = false } = {}) {
  const c = new PlayerController(hero(id), world);
  c.spawn(new THREE.Vector3(...from), 0);
  let maxY = 0;
  for (let t = 0; t < sec; t += 1 / 60) {
    const inp = { x: dir[0], y: -dir[1], run: true, jump: jumpAt >= 0 && Math.abs(t - jumpAt) < 1 / 120, jumpHold: hold, dash: false };
    c.update(1 / 60, inp, 0);
    maxY = Math.max(maxY, c.pos.y);
  }
  return { c, maxY };
}
function check(name, ok, info) { console.log((ok ? 'OK   ' : 'FAIL ') + name + (info ? '  ' + info : '')); if (!ok) fails++; }

// 1. Лестница склада (x=34.48, z=-16, наружу −X): Маша подходит с запада и лезет вверх → на крыше
{ const { c, maxY } = drive('masha', [31, 0, -16], [1, 0], 2.2); check('Маша по лестнице на крышу склада', c.pos.y > 3.9, `y=${c.pos.y.toFixed(2)} x=${c.pos.x.toFixed(1)} maxY=${maxY.toFixed(2)}`); }
// 2. Подтягивание: ящики у склада (33.6, 6.3 верх 2.0). Прыжок с ящика 1.1 → на 2.0 → на крышу 4.2
{ const { c, maxY } = drive('masha', [31.2, 0, 3.0], [1, 0], 0.5, { jumpAt: 0.05 }); check('Маша запрыгнула на ящик', c.pos.y >= 0.95, `y=${c.pos.y.toFixed(2)} x=${c.pos.x.toFixed(2)} maxY=${maxY.toFixed(2)}`); }
// 2б. С ящиков (1.1 → 2.0) — подтянулась на крышу склада 4.2
{ const c = new PlayerController(hero('masha'), world); c.spawn(new THREE.Vector3(33.5, 2.0, 3.0), 0);
  let top = 0; for (let t = 0; t < 1.6; t += 1 / 60) { c.update(1 / 60, { x: 1, y: 0, run: false, jump: t < 0.02 }, 0); top = Math.max(top, c.pos.y); }
  check('Маша с ящика подтянулась на крышу', c.pos.y > 3.9, `y=${c.pos.y.toFixed(2)} maxY=${top.toFixed(2)}`); }
// 3. Вход в дом (11,-8), дверь на +Z (z=-5.5): идём с юга на север внутрь
{ const { c } = drive('moti', [11, 0, -1], [0, -1], 2.5); check('Моти зашёл в дом через дверь', c.pos.z < -6.5 && c.pos.y < 0.5, `z=${c.pos.z.toFixed(2)} y=${c.pos.y.toFixed(2)}`); }
// 4. Потолок: прыжок внутри дома не выносит на крышу
{ const { maxY, c } = drive('masha', [11, 0, -8], [0, 0], 1.5, { jumpAt: 0.1 }); check('Потолок держит прыжок в доме', maxY < 3.4 && c.pos.y < 0.5, `maxY=${maxY.toFixed(2)}`); }
// 5. Стена глухого дома (-12,-7): упираемся, не проходим
{ const { c } = drive('masha', [-12, 0, -1], [0, -1], 2); check('Сквозь стену не пройти', c.pos.z > -3.5, `z=${c.pos.z.toFixed(2)}`); }
// 6. Безлик парит вверх у стены склада и оказывается на крыше
{ const { c, maxY } = drive('noface', [33.6, 0, -13], [1, 0], 2.2, { hold: true }); check('Безлик взлетел на крышу склада', c.pos.y > 3.9 && c.pos.x > 34.6, `y=${c.pos.y.toFixed(2)} maxY=${maxY.toFixed(2)} x=${c.pos.x.toFixed(1)}`); }
// 7. Лестница дома (11,-8) справа (+X)
{ const L = world.ladders.find(l => Math.abs(l.x - 14.5) < 0.2); const { c } = L ? drive('catbus', [L.x + 3, 0, L.z], [-1, 0], 5) : { c: { pos: { y: -1 } } }; check('НэкоБус по лестнице на крышу дома', c.pos.y > 3.4, `y=${c.pos.y.toFixed(2)} ladders=${world.ladders.map(l => l.x.toFixed(1) + ',' + l.z.toFixed(1)).join(' ')}`); }
console.log(fails ? `\n${fails} проверок не прошли` : '\nВсе проверки прошли');
process.exit(fails ? 1 : 0);
