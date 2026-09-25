// Интерфейс поверх 3D: загрузка, выбор героя, HUD, итог раунда.
const $ = id => document.getElementById(id);
const ICONS = { masha: '🦶', catbus: '🐈', moti: '🛡️' };

export class UI {
  constructor() {
    this.lastStatus = '';
    this.hintTimer = null;
  }

  on(id, fn) { $(id).addEventListener('click', e => { e.stopPropagation(); fn(); }); }

  progress(k, text) {
    document.querySelector('.load-bar i').style.width = Math.round(k * 100) + '%';
    if (text) document.querySelector('.load-text').textContent = text;
  }
  hideLoading() { $('loading').classList.remove('show'); }

  show(id, on) { $(id).classList.toggle('show', on); }

  mode(m, touch, gameMode = 'play') {
    this.show('select', m === 'select');
    document.getElementById('watch-bar').classList.toggle('hidden', !(m === 'play' && gameMode === 'watch'));
    document.getElementById('abil-bar').classList.toggle('hidden', !(m === 'play' && gameMode === 'play'));
    document.querySelector('.hud-left .stamina').classList.toggle('hidden', gameMode === 'watch');
    this.show('result', m === 'result');
    this.show('paused', false);
    $('hud').classList.toggle('hidden', m !== 'play');
    $('touch').classList.toggle('hidden', !(m === 'play' && touch));
    $('alive').classList.toggle('hidden', m !== 'play');
    if (m === 'play') {
      const hint = $('hint');
      hint.style.opacity = 1;
      clearTimeout(this.hintTimer);
      this.hintTimer = setTimeout(() => (hint.style.opacity = 0), 9000);
    }
  }

  buildCards(heroes, ghost, thumbs, onPick) {
    const box = $('cards');
    box.innerHTML = '';
    this.cards = new Map();
    for (const h of heroes) {
      const c = document.createElement('button');
      c.className = 'card';
      c.style.backgroundImage = `url(${thumbs[h.id]})`;
      c.innerHTML = `<div class="c-body"><div class="c-name">${h.name}</div><span class="pill ${h.rarityClass}">${h.rarity}</span><br><span class="c-tag">${ICONS[h.id] || '✦'} ${h.tags[0]}</span></div>`;
      c.addEventListener('click', () => onPick(h.id));
      box.appendChild(c);
      this.cards.set(h.id, c);
    }
    const g = document.createElement('div');
    g.className = 'card locked';
    g.style.backgroundImage = `url(${thumbs[ghost.id]})`;
    g.innerHTML = `<span class="c-lock">ВОДЯЩИЙ</span><div class="c-body"><div class="c-name">${ghost.name}</div><span class="pill ${ghost.rarityClass}">${ghost.rarity}</span></div>`;
    box.appendChild(g);
    const s = document.createElement('div');
    s.className = 'card soon';
    s.innerHTML = `<div class="q">?</div><div class="c-body" style="text-align:center"><div class="c-name">???</div><span class="pill common">СКОРО</span></div>`;
    box.appendChild(s);
  }

  // Настройки на экране выбора: число Безликов, боты, скин
  onOptions(cb, init) {
    this.optCb = cb;
    const seg = (id, val, fn) => {
      const box = $(id);
      const mark = v => box.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === String(v)));
      mark(val);
      box.querySelectorAll('button').forEach(b => b.addEventListener('click', () => { mark(b.dataset.v); fn(b.dataset.v); }));
    };
    seg('opt-ghosts', init.ghosts, v => cb.ghosts(+v));
    seg('opt-bots', init.bots ? 1 : 0, v => cb.bots(v === '1'));
  }

  // Панель умений игрока: иконка, клавиша, полоска перезарядки. Клик = применить.
  onAbility(fn) { this.abilityFn = fn; }
  abilityBar(list, ctrl) {
    const bar = $('abil-bar');
    const items = [{ id: 'dash', key: 'E', icon: '💨', name: 'Рывок' }, ...list];
    bar.innerHTML = items.map(a => `<button class="ab" data-id="${a.id}" title="${a.name}"><i>${a.icon}</i><em>${a.key}</em><s></s><small>${a.name}</small></button>`).join('');
    bar.querySelectorAll('.ab').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation();
      if (b.dataset.id === 'dash') { this.dashFn?.(); return; }
      this.abilityFn?.(b.dataset.id);
    }));
    this.abEls = [...bar.querySelectorAll('.ab')];
  }
  cooldowns(set, ctrl) {
    if (!this.abEls) return;
    for (const el of this.abEls) {
      let k;
      if (el.dataset.id === 'dash') k = ctrl.dashCd / ctrl.phys.dash.cooldown;
      else { const a = set.get(el.dataset.id); k = a ? a.cdLeft / set.cooldown(a) : 0; }
      el.querySelector('s').style.height = (k * 100).toFixed(0) + '%';
      el.classList.toggle('ready', k <= 0);
    }
  }

  alive(n, total) { $('alive').textContent = `Героев: ${n}/${total}`; }

  toast(text) {
    const t = $('toast');
    t.textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
  }

  showHero(h, skin) {
    const sk = $('skins');
    sk.classList.toggle('hidden', !h.skins);
    if (h.skins) {
      sk.innerHTML = Object.entries(h.skins).map(([id, s]) => `<button data-s="${id}" class="${id === skin ? 'on' : ''}" style="--c:#${s.hat.toString(16).padStart(6, '0')}">${s.name}</button>`).join('');
      sk.querySelectorAll('button').forEach(b => b.addEventListener('click', () => this.optCb?.skin(b.dataset.s)));
    }
    $('hero-name').innerHTML = `${h.name} <span class="paw">🐾</span>`;
    const r = $('hero-rarity');
    r.textContent = h.rarity;
    r.className = 'pill ' + h.rarityClass;
    $('hero-about').textContent = h.about;
    $('hero-ab').textContent = h.ability;
    $('hero-ab-text').textContent = h.abilityText;
    $('hero-ab-icon').textContent = ICONS[h.id] || '✦';
    $('hero-tags').innerHTML = h.tags.map(t => `<span class="tag">${t}</span>`).join('');
    this.cards?.forEach((c, id) => c.classList.toggle('active', id === h.id));
  }

  status(text, cls) {
    const key = text + cls;
    if (key === this.lastStatus) return;
    this.lastStatus = key;
    const s = $('status');
    s.textContent = text;
    s.className = 'status ' + (cls || '');
  }

  hud({ left, stamina, tired, hidden }) {
    const sec = Math.ceil(left);
    const txt = `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
    const tm = $('timer');
    if (tm.textContent !== txt) { tm.textContent = txt; tm.classList.toggle('warn', sec <= 10); }
    const st = $('stamina');
    st.style.width = (stamina * 100).toFixed(1) + '%';
    st.classList.toggle('tired', !!tired);
    $('hidden-badge').classList.toggle('on', !!hidden);
  }

  vignette(k) { $('vignette').style.opacity = k.toFixed(2); }

  setShield(v) {
    const s = $('shield');
    s.classList.toggle('hidden', v === null);
    s.classList.toggle('used', v === 0);
  }

  setMute(m) { $('btn-mute').textContent = m ? '🔇' : '🔊'; }

  result(win, { mode, name, survived, spotted, alive, caught }) {
    const m = Math.floor(survived / 60), s = Math.floor(survived % 60);
    const time = `${m}:${String(s).padStart(2, '0')}`;
    if (mode === 'watch') {
      $('res-emoji').textContent = alive.length ? '🏮' : '👺';
      $('res-title').textContent = alive.length ? 'Рассвет!' : 'Безлик забрал всех';
      $('res-text').textContent = alive.length
        ? `Спаслись: ${alive.join(', ')}.${caught.length ? ` Пойманы: ${caught.join(', ')}.` : ''}`
        : `Продержались ${time}. Порядок поимки: ${caught.join(' → ')}.`;
      return;
    }
    $('res-emoji').textContent = win ? '🏮' : '👺';
    $('res-title').textContent = win ? 'Ты продержался!' : 'Безлик тебя поймал';
    const others = caught.filter(n => n !== name);
    $('res-text').textContent = win
      ? `${name} дождался(ась) рассвета.${spotted ? ` Безлик замечал тебя ${spotted} раз(а).` : ' Тебя так и не заметили!'}${others.length ? ` Пойманы: ${others.join(', ')}.` : ''}`
      : `${name} продержался(ась) ${time}. Прячься в кустах и за домами — там он тебя не видит.`;
  }
}
