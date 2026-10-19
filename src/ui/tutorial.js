// Обучение. Две части:
//  Coach    — экскурсия по меню: подсветка + облачко с шагом (выбери героя → способности → Играть → карта → режим → Обучение).
//  Training — тренировка на карте: задания по очереди (идти, бег, прыжок, суперспособности, спрятаться, продержаться).
import { CONFIG } from '../config/config.js';
import { POWERS, BASICS } from './powers.js';
import * as FX from '../abilities/fx.js';

const $ = id => document.getElementById(id);
const SEEN_KEY = 'masha-game-tutorial-seen-v1';

export function tutorialSeen() { try { return localStorage.getItem(SEEN_KEY) === '1'; } catch { return true; } }
function markSeen() { try { localStorage.setItem(SEEN_KEY, '1'); } catch { /* приватный режим */ } }

const STEPS = [
  { wait: 'pick', target: 'lineup', title: 'Выбери героя', text: 'Нажми на любого героя на улице — вокруг него загорится зелёная обводка.' },
  { target: '#hero-powers', title: 'Его суперспособности', text: () => `${document.documentElement.classList.contains('landscape') ? 'Справа' : 'Ниже'} написано, что умеет герой и как это помогает в игре. Нажми на другого — и увидишь его силы.`, next: 'Понятно', scroll: true },
  { wait: 'maps', target: '#btn-choose', title: 'Нажми «Играть»', text: 'Герой выбран — пора выбирать, где играть.' },
  { wait: 'map', target: '#map-cards', title: 'Выбери карту', text: 'Деревня духов или Лес духов? Нажми на картинку.', next: 'Дальше' },
  { wait: 'mode', target: '.game-mode-card', title: 'Выбери режим игры', text: '🎭 Прятки — спрячься и не попадись Безлику. 🏮 Доставка — отнеси фонарь в храм.', next: 'Дальше' },
  { wait: 'round', target: '#btn-maps-train', title: 'Попробуй «Обучение»', text: 'Откроется карта с подсказками: научишься бегать, прыгать, прятаться и пробовать суперспособности. «Начать» — сразу настоящая игра!' },
];

export class Coach {
  constructor(game) {
    this.g = game;
    this.i = -1;
    const el = this.el = document.createElement('div');
    el.id = 'coach';
    el.innerHTML = `<div class="co-spot"></div><div class="co-ping"></div>
      <div class="co-bubble"><div class="co-top"><span class="co-step"></span><button class="co-skip">Пропустить ✕</button></div>
      <h3 class="co-title"></h3><p class="co-text"></p><div class="co-foot"><div class="co-dots"></div><button class="co-next gold"></button></div><i class="co-arrow"></i></div>`;
    document.body.appendChild(el);
    el.querySelector('.co-skip').addEventListener('click', e => { e.stopPropagation(); this.stop(); });
    el.querySelector('.co-next').addEventListener('click', e => { e.stopPropagation(); this.#go(this.i + 1); });
    this.loop = () => { if (this.active) { this.#place(); requestAnimationFrame(this.loop); } };
  }

  get active() { return this.i >= 0; }

  start() {
    markSeen();
    if (this.g.state !== 'select') this.g.toSelect();
    this.el.classList.add('on');
    this.#go(0);
    requestAnimationFrame(this.loop);
  }

  stop() {
    this.i = -1;
    this.el.classList.remove('on');
    markSeen();
  }

  // Игра сообщает, что произошло: pick / maps / select / map / mode / round
  signal(name) {
    if (!this.active) return;
    if (name === 'round') return this.stop();
    if (name === 'select' && this.i >= 3) return this.#go(2);
    if (STEPS[this.i].wait === name) setTimeout(() => this.active && STEPS[this.i]?.wait === name && this.#go(this.i + 1), name === 'pick' ? 650 : 250);
  }

  #go(i) {
    if (i >= STEPS.length) return this.stop();
    this.i = i;
    const s = STEPS[i];
    const q = c => this.el.querySelector(c);
    q('.co-step').textContent = `Шаг ${i + 1} из ${STEPS.length}`;
    q('.co-title').textContent = s.title;
    q('.co-text').textContent = typeof s.text === 'function' ? s.text() : s.text;
    if (s.scroll) document.querySelector(s.target)?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    q('.co-dots').innerHTML = STEPS.map((_, k) => `<i class="${k < i ? 'done' : k === i ? 'on' : ''}"></i>`).join('');
    const next = q('.co-next');
    next.classList.toggle('hidden', !s.next);
    next.innerHTML = `${s.next || ''} <span>›</span>`;
    const b = q('.co-bubble');
    b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
    this.g.sound?.chime?.([660, 880]);
  }

  #rect() {
    const s = STEPS[this.i];
    if (s.target === 'lineup') return this.g.lineupRect();
    const el = document.querySelector(s.target);
    if (!el || !el.offsetParent) return null;
    const r = el.getBoundingClientRect();
    return r.width ? { x: r.x, y: r.y, w: r.width, h: r.height } : null;
  }

  #place() {
    const r = this.#rect();
    const spot = this.el.querySelector('.co-spot'), ping = this.el.querySelector('.co-ping');
    const b = this.el.querySelector('.co-bubble'), arrow = this.el.querySelector('.co-arrow');
    const W = innerWidth, H = innerHeight;
    const bw = b.offsetWidth, bh = b.offsetHeight;
    if (!r) {
      spot.style.opacity = ping.style.opacity = 0;
      b.style.transform = `translate(${(W - bw) / 2}px, ${(H - bh) / 2}px)`;
      arrow.className = 'co-arrow';
      return;
    }
    const pad = 8;
    const x = Math.max(4, r.x - pad), y = Math.max(4, r.y - pad);
    const w = Math.min(W - 8, r.w + pad * 2), h = Math.min(H - 8, r.h + pad * 2);
    spot.style.opacity = 1;
    spot.style.transform = `translate(${x}px, ${y}px)`;
    spot.style.width = w + 'px';
    spot.style.height = h + 'px';
    ping.style.opacity = 1;
    ping.style.transform = `translate(${x + w / 2}px, ${y + h / 2}px)`;
    // Облачко ставим туда, где больше места: снизу, сверху, слева или справа от цели.
    const room = { below: H - (y + h), above: y, left: x, right: W - (x + w) };
    let side = room.below >= bh + 24 ? 'below' : room.above >= bh + 24 ? 'above' : room.left >= bw + 24 ? 'left' : room.right >= bw + 24 ? 'right' : 'over';
    let bx, by;
    if (side === 'below' || side === 'above') {
      bx = Math.min(W - bw - 10, Math.max(10, x + w / 2 - bw / 2));
      by = side === 'below' ? y + h + 18 : y - bh - 18;
    } else if (side === 'left' || side === 'right') {
      by = Math.min(H - bh - 10, Math.max(10, y + h / 2 - bh / 2));
      bx = side === 'left' ? x - bw - 18 : x + w + 18;
    } else { bx = (W - bw) / 2; by = Math.min(H - bh - 10, y + h / 2); }
    b.style.transform = `translate(${bx}px, ${by}px)`;
    arrow.className = 'co-arrow ' + side;
    if (side === 'below' || side === 'above') arrow.style.left = Math.min(bw - 26, Math.max(14, x + w / 2 - bx - 8)) + 'px', arrow.style.top = '';
    else if (side !== 'over') arrow.style.top = Math.min(bh - 26, Math.max(14, y + h / 2 - by - 8)) + 'px', arrow.style.left = '';
  }
}

// ---------- Тренировка на карте ----------
export class Training {
  constructor(game, touch) {
    this.g = game;
    this.touch = touch;
    this.done = false;
    this.released = false;
    const R = game.round;
    const me = R.playerGhost || R.player;
    this.asGhost = !!R.playerGhost;
    this.start = me.ctrl ? me.ctrl.pos.clone() : me.pos.clone();
    this.yaw0 = game.cam.yaw;
    this.runT = 0;
    this.tasks = this.asGhost ? this.#ghostTasks() : this.#heroTasks(R.player);
    this.k = 0;
    this.el = $('train');
    this.el.classList.remove('hidden');
    this.#show();
    $('phase').textContent = 'Обучение';
  }

  key(k, touchName) { return this.touch ? touchName : `<kbd>${k}</kbd>`; }

  #heroTasks(p) {
    const T = [
      { icon: '🐾', title: 'Иди', text: this.touch ? 'Двигай джойстик слева пальцем.' : 'Нажимай <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>, чтобы идти.', check: () => p.ctrl.pos.distanceTo(this.start) > 4 },
      { icon: '🎥', title: 'Посмотри вокруг', text: this.touch ? 'Води пальцем по правой половине экрана.' : 'Двигай мышкой — камера повернётся. Esc вернёт курсор.', check: () => Math.abs(this.g.cam.yaw - this.yaw0) > 1.1 },
      { icon: BASICS[0].icon, title: 'Беги!', text: `Держи ${this.key('Shift', 'кнопку бега')} и иди. Бег быстрее, но тратит силы (полоска слева) и его слышно.`, check: dt => (this.runT += p.ctrl.running ? dt : 0) > 1 },
      { icon: BASICS[1].icon, title: 'Прыгни', text: `Нажми ${this.key('Пробел', 'кнопку ⤒')} — так запрыгивают на ящики и крыши.`, check: () => p.ctrl.jumped },
      { icon: '💨', title: 'Рывок', text: `Нажми ${this.key('E', 'кнопку 💨')} на ходу. ${POWERS.dash.do} ${POWERS.dash.tip}`, check: () => p.ctrl.dashed },
      { icon: BASICS[2].icon, title: 'Присядь', text: `Нажми ${this.key('C', 'кнопку присесть')}. Сидя тебя хуже видно и совсем не слышно.`, check: () => p.ctrl.crouching },
    ];
    for (const a of p.abilities.list) {
      if (a.id === 'wave' || a.id === 'split' || a.id === 'nekohelp') continue;
      const info = POWERS[a.id] || {};
      T.push({ icon: a.icon, title: `Суперспособность: ${a.name}`, text: `Нажми ${this.key(a.key, `кнопку ${a.icon} справа`)}. ${info.do || ''} ${info.tip || ''}`, ability: a.id, power: true,
        check: () => this.used === a.id });
    }
    T.push({ icon: '🌿', title: 'Спрячься в кусте', text: 'Иди по светящимся следам лапок к кусту и зайди в него. Безлик не видит тех, кто в кусте, — только не беги внутри!', enter: () => this.#pawToBush(p), check: () => p.hidden && !p.prop });
    T.push({ icon: '🎭', title: 'Безлик выходит!', text: 'Сиди тихо в кусте или убегай. Продержись 25 секунд — и обучение пройдено!', enter: () => this.#releaseGhost(), timer: 25 });
    return T;
  }

  #ghostTasks() {
    const pg = this.g.round.playerGhost;
    return [
      { icon: '🐾', title: 'Ты — Безлик! Иди', text: this.touch ? 'Двигай джойстик слева пальцем.' : 'Нажимай <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>.', check: () => pg.pos.distanceTo(this.start) > 4 },
      { icon: '🎥', title: 'Посмотри вокруг', text: this.touch ? 'Води пальцем по правой половине экрана.' : 'Двигай мышкой — камера повернётся.', check: () => Math.abs(this.g.cam.yaw - this.yaw0) > 1.1 },
      { icon: '💨', title: 'Рывок', text: `Нажми ${this.key('E', 'кнопку 💨')} на ходу. ${POWERS['ghost-dash'].do}`, check: () => pg.ctrl.dashed },
      { icon: '🪶', title: 'Взлети', text: `Держи ${this.key('Пробел', 'кнопку ⤒')}. ${POWERS.fly.do} ${POWERS.fly.tip}`, check: () => pg.ctrl.flying },
      { icon: '🎭', title: 'Стань героем', text: `Нажми ${this.key('1', 'кнопку 🎭 внизу')}. ${POWERS['mask-hero'].do} ${POWERS['mask-hero'].tip}`, check: () => pg.disguised },
      { icon: '📦', title: 'Сними маскировку', text: `Нажми ${this.key('1', 'кнопку 🎭')} ещё раз, чтобы снова стать Безликом.`, check: () => !pg.disguised },
      { icon: '👀', title: 'Найди и поймай героя', text: 'Герои прячутся в кустах, за домами и превращаются в вещи. Подойди к герою вплотную!', check: () => this.caught },
    ];
  }

  #pawToBush(p) {
    const g = this.g, pos = p.ctrl.pos;
    const bush = [...g.world.bushes].sort((a, b) => Math.hypot(a.x - pos.x, a.z - pos.z) - Math.hypot(b.x - pos.x, b.z - pos.z))[0];
    if (!bush) return;
    const route = g.navFor(p.ctrl.radius).find(pos.x, pos.z, bush.x, bush.z);
    if (route) g.addFx(FX.pawPath(g.scene, [[pos.x, pos.z], ...route], 40));
  }

  #releaseGhost() {
    this.released = true;
    this.g.round.t = CONFIG.round.headStart - 2.5;
  }

  // До задания «Безлик выходит» Безлики сидят дома.
  preStep() {
    const R = this.g.round;
    if (!this.released && !this.asGhost) R.t = Math.min(R.t, 1);
    if (this.asGhost && R.t < CONFIG.round.headStart) R.t = CONFIG.round.headStart;
  }

  onEvent(e) {
    if (this.done) return true;
    if (e.type === 'ability' && e.agent?.isPlayer) this.used = e.id;
    if (e.type === 'caught') {
      if (e.byPlayer) this.caught = true;
      else if (e.agent?.isPlayer) { this.#finish(false); return true; }
    }
    if (e.type === 'end' || e.type === 'phase') return true;      // в обучении раунд не заканчивается сам
    return false;
  }

  // Безлик-игрок пользуется умениями через game.useAbility — без событий раунда
  onUse(id) { this.used = id; }

  update(dt) {
    if (this.done) return;
    const task = this.tasks[this.k];
    if (!task) return;
    if (!task.entered) { task.entered = true; task.enter?.(); task.left = task.timer; }
    if (task.passed) return;
    let ok = false;
    if (task.timer) {
      task.left -= dt;
      const bar = this.el.querySelector('.tr-time');
      if (bar) bar.textContent = `⏱ ${Math.max(0, Math.ceil(task.left))} с`;
      ok = task.left <= 0;
    } else ok = !!task.check(dt);
    if (!ok) return;
    task.passed = true;
    this.g.sound?.chime?.([784, 1046, 1318]);
    this.el.classList.add('passed');
    setTimeout(() => {
      this.el.classList.remove('passed');
      this.used = null;
      this.k++;
      if (this.k >= this.tasks.length) this.#finish(true);
      else this.#show();
    }, 900);
  }

  skip() {
    const task = this.tasks[this.k];
    if (!task || task.passed) return;
    if (!task.entered) task.enter?.();
    task.timer ? (task.left = 0) : (task.check = () => true);
  }

  #show() {
    const t = this.tasks[this.k];
    this.el.innerHTML = `<div class="tr-head"><span class="tr-badge">🎓 Обучение</span><span class="tr-count"><span class="tr-word">Задание </span>${this.k + 1} из ${this.tasks.length}</span><button class="tr-skip">Пропустить ›</button></div>
      <div class="tr-body"><div class="tr-icon${t.power ? ' power' : ''}">${t.icon}</div><div><b>${t.title}</b><p>${t.text}</p>${t.timer ? '<span class="tr-time"></span>' : ''}</div></div>
      <div class="tr-bar"><i style="width:${(this.k / this.tasks.length * 100).toFixed(0)}%"></i></div>
      <div class="tr-check">✓</div>`;
    this.el.querySelector('.tr-skip').addEventListener('click', e => { e.stopPropagation(); this.skip(); });
    this.el.classList.remove('pop'); void this.el.offsetWidth; this.el.classList.add('pop');
  }

  #finish(ok) {
    if (this.done) return;
    this.done = true;
    this.close();
    this.g.trainingFinished(ok);
  }

  close() { this.el.classList.add('hidden'); this.el.innerHTML = ''; }
}
