// Панель «Физика»: ползунки для каждого героя, Безлика и мира. Меняется вживую, прямо во время игры.
// Настройки запоминаются в этом браузере; «Скопировать» даёт кусок для src/config/config.js.
import { CONFIG, DEFAULTS } from '../config/config.js';

const KEY = 'masha-game-physics-v1';

const HERO_FIELDS = [
  ['walk', 'Шаг, м/с', 2, 10, 0.1], ['run', 'Бег, м/с', 4, 16, 0.1],
  ['accel', 'Разгон', 5, 120, 1], ['decel', 'Торможение', 5, 120, 1], ['air', 'Управление в воздухе', 0, 40, 1],
  ['jump', 'Прыжок, м', 0.5, 4, 0.05], ['gravity', 'Тяжесть ×', 0.4, 2.5, 0.05], ['turn', 'Поворот', 2, 30, 0.5],
  ['stamina', 'Бег без отдыха, с', 1, 15, 0.5], ['regen', 'Отдых (доля/с)', 0.05, 0.6, 0.01], ['mass', 'Вес при толкании', 0.3, 6, 0.1],
  ['dash.mul', 'Рывок: сила ×', 1, 2.5, 0.05], ['dash.time', 'Рывок: длится, с', 0.1, 1.5, 0.05], ['dash.cooldown', 'Рывок: перезарядка, с', 0.5, 12, 0.5],
];
const GHOST_FIELDS = [
  ['walkSpeed', 'Скорость поиска', 1, 10, 0.1], ['huntSpeed', 'Скорость погони', 2, 12, 0.1], ['huntSpeedMax', 'Погоня к концу раунда', 2, 14, 0.1],
  ['accel', 'Разгон', 2, 30, 0.5], ['burstMul', 'Рывок ×', 1, 2.5, 0.05], ['burstRange', 'Рывок с расстояния, м', 2, 15, 0.5],
  ['burstTime', 'Рывок длится, с', 0.2, 3, 0.1], ['burstCooldown', 'Рывок перезарядка, с', 1, 15, 0.5],
  ['catchRadius', 'Радиус поимки, м', 0.5, 2.5, 0.05], ['sightRange', 'Видит на, м', 5, 40, 1], ['hearRunRange', 'Слышит бег на, м', 0, 20, 0.5],
  ['spawnDelay', 'Появляется через, с', 0, 30, 1],
];
const WORLD_FIELDS = [
  ['gravity', 'Гравитация', 10, 60, 1], ['stepHeight', 'Ступенька без прыжка, м', 0.1, 1, 0.05], ['pushStrength', 'Толкание героев', 0, 1.5, 0.05],
];

const get = (o, path) => path.split('.').reduce((a, k) => a[k], o);
const set = (o, path, v) => { const ks = path.split('.'); const last = ks.pop(); ks.reduce((a, k) => a[k], o)[last] = v; };

export function loadSavedPhysics() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!s) return;
    for (const id of Object.keys(CONFIG.heroes)) if (s.heroes?.[id]) deepAssign(CONFIG.heroes[id], s.heroes[id]);
    if (s.ghost) deepAssign(CONFIG.ghost, s.ghost);
    if (s.world) deepAssign(CONFIG.world, s.world);
  } catch {}
}

function deepAssign(dst, src) {
  for (const k of Object.keys(src)) {
    if (typeof src[k] === 'object' && src[k] && typeof dst[k] === 'object') deepAssign(dst[k], src[k]);
    else if (typeof src[k] === typeof dst[k]) dst[k] = src[k];
  }
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify({ heroes: CONFIG.heroes, ghost: CONFIG.ghost, world: CONFIG.world })); } catch {}
}

export class Tuner {
  constructor(heroes, getCurrentHero) {
    this.heroes = heroes;
    this.getCurrentHero = getCurrentHero;
    this.el = document.getElementById('tuner');
    this.tab = null;
    this.el.querySelector('.tn-close').addEventListener('click', () => this.toggle(false));
    this.el.querySelector('.tn-copy').addEventListener('click', () => this.#copy());
    this.el.querySelector('.tn-reset').addEventListener('click', () => this.#reset());
    // ползунки не должны двигать героя и камеру
    for (const ev of ['keydown', 'mousedown', 'touchstart', 'pointerdown', 'wheel']) this.el.addEventListener(ev, e => e.stopPropagation());
    addEventListener('keydown', e => { if (e.code === 'F2' || e.code === 'Backquote') { e.preventDefault(); this.toggle(); } });
  }

  get open() { return this.el.classList.contains('show'); }

  toggle(on = !this.open) {
    this.el.classList.toggle('show', on);
    if (on) this.#render(this.tab || this.getCurrentHero());
    if (on && document.pointerLockElement) document.exitPointerLock();
  }

  #render(tab) {
    this.tab = tab;
    const tabs = this.el.querySelector('.tn-tabs');
    const list = [...this.heroes.map(h => [h.id, h.name]), ['ghost', 'Безлик'], ['world', 'Мир']];
    tabs.innerHTML = list.map(([id, n]) => `<button data-t="${id}" class="${id === tab ? 'on' : ''}">${n}</button>`).join('');
    tabs.querySelectorAll('button').forEach(b => b.addEventListener('click', () => this.#render(b.dataset.t)));

    const [obj, fields, def] = tab === 'ghost' ? [CONFIG.ghost, GHOST_FIELDS, DEFAULTS.ghost]
      : tab === 'world' ? [CONFIG.world, WORLD_FIELDS, DEFAULTS.world]
      : [CONFIG.heroes[tab], HERO_FIELDS, DEFAULTS.heroes[tab]];
    const box = this.el.querySelector('.tn-fields');
    box.innerHTML = fields.map(([k, label, min, max, step]) => {
      const v = get(obj, k), d = get(def, k);
      return `<label class="${v !== d ? 'changed' : ''}"><span>${label}</span><input type="range" min="${min}" max="${max}" step="${step}" value="${v}" data-k="${k}"><b>${fmt(v)}</b></label>`;
    }).join('');
    box.querySelectorAll('input').forEach(inp => inp.addEventListener('input', () => {
      const v = parseFloat(inp.value);
      set(obj, inp.dataset.k, v);
      inp.nextElementSibling.textContent = fmt(v);
      inp.parentElement.classList.toggle('changed', v !== get(def, inp.dataset.k));
      save();
    }));
  }

  #copy() {
    const tab = this.tab;
    const obj = tab === 'ghost' ? CONFIG.ghost : tab === 'world' ? CONFIG.world : CONFIG.heroes[tab];
    const text = `${tab}: ${JSON.stringify(obj).replace(/"(\w+)":/g, '$1: ').replace(/,/g, ', ')},`;
    navigator.clipboard?.writeText(text).then(() => this.#flash('Скопировано — вставь в config.js'), () => prompt('Скопируй:', text));
  }

  #reset() {
    const tab = this.tab;
    if (tab === 'ghost') deepAssign(CONFIG.ghost, DEFAULTS.ghost);
    else if (tab === 'world') deepAssign(CONFIG.world, DEFAULTS.world);
    else deepAssign(CONFIG.heroes[tab], DEFAULTS.heroes[tab]);
    save();
    this.#render(tab);
    this.#flash('Вернул как было');
  }

  #flash(t) {
    const f = this.el.querySelector('.tn-flash');
    f.textContent = t;
    f.classList.add('on');
    setTimeout(() => f.classList.remove('on'), 1600);
  }
}

const fmt = v => (Math.abs(v) >= 10 ? v.toFixed(0) : v.toFixed(2).replace(/0$/, ''));
