// Интерфейс поверх 3D: загрузка, выбор героя, HUD, итог раунда.
const $ = id => document.getElementById(id);
const ICONS = { kid: '🐱', masha: '🦶', catbus: '🐈', moti: '🛡️', noface: '🎭' };

export class UI {
  constructor() {
    this.lastStatus = '';
    this.hintTimer = null;
  }

  on(id, fn) { $(id).addEventListener('click', e => { e.stopPropagation(); fn(); }); }

  progress(k, text) {
    document.querySelector('.load-bar i').style.width = Math.round(k * 100) + '%';
    if (text) {
      document.querySelector('.load-text').textContent = text;
      window.__bootStage = text;
    }
  }
  hideLoading() { $('loading').classList.remove('show'); }

  show(id, on) { $(id).classList.toggle('show', on); }

  mode(m, touch, gameMode = 'play') {
    this.show('select', m === 'select');
    this.show('maps', m === 'maps');
    this.show('lobby', m === 'lobby');
    document.getElementById('watch-bar').classList.toggle('hidden', !(m === 'play' && gameMode === 'watch'));
    document.getElementById('abil-bar').classList.toggle('hidden', !(m === 'play' && gameMode === 'play'));
    document.querySelector('.hud-left .stamina').classList.toggle('hidden', gameMode === 'watch');
    this.show('result', m === 'result');
    this.show('paused', false);
    $('ghost-view').classList.add('hidden');
    $('hud').classList.toggle('hidden', m !== 'play');
    // экранные кнопки — и на телефоне, и на ПК (там жмутся мышкой); в «Смотреть» не нужны
    $('touch').classList.toggle('hidden', !(m === 'play' && gameMode !== 'watch'));
    $('touch').classList.toggle('desktop', !touch);
    document.querySelector('.stick-zone').classList.toggle('fixed', !touch);
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
    // Безлик — теперь за него можно играть (водящий)
    const g = document.createElement('button');
    g.className = 'card';
    g.style.backgroundImage = `url(${thumbs[ghost.id]})`;
    g.innerHTML = `<span class="c-lock">ВОДЯЩИЙ</span><div class="c-body"><div class="c-name">${ghost.name}</div><span class="pill ${ghost.rarityClass}">${ghost.rarity}</span><br><span class="c-tag">🎭 ${ghost.tags[0]}</span></div>`;
    g.addEventListener('click', () => onPick(ghost.id));
    box.appendChild(g);
    this.cards.set(ghost.id, g);
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
  // items: [{id, key, icon, name}]; fn(id) вызывается при клике
  onAbility(fn) { this.abilityFn = fn; }
  abilityBar(items) {
    const bar = $('abil-bar');
    bar.innerHTML = items.map(a => `<button class="ab" data-id="${a.id}" title="${a.name}"><i>${a.icon}</i><em>${a.key}</em><s></s><b class="ab-n"></b><small>${a.name}</small></button>`).join('');
    bar.querySelectorAll('.ab').forEach(b => {
      b.addEventListener('mousedown', e => e.stopPropagation());
      b.addEventListener('click', e => { e.stopPropagation(); this.abilityFn?.(b.dataset.id); });
    });
    this.abEls = [...bar.querySelectorAll('.ab')];
  }
  // state(id) → {k: 0..1 доля перезарядки, n: число-значок (заряды) или ''}
  cooldowns(state) {
    if (!this.abEls) return;
    for (const el of this.abEls) {
      const { k = 0, n = '' } = state(el.dataset.id) || {};
      el.querySelector('s').style.height = (k * 100).toFixed(0) + '%';
      el.classList.toggle('ready', k <= 0);
      const nb = el.querySelector('.ab-n');
      if (nb.textContent !== String(n)) nb.textContent = n;
    }
  }

  alive(n, total, label = 'Героев') { $('alive').textContent = `${label}: ${n}/${total}`; }
  wallet(n) { $('wallet').textContent = n; }
  pumpkins(n) { $('pumpkins').textContent = n; }
  phase(p) {
    const el = $('phase');
    el.textContent = p === 'chase' ? 'Догонялки!' : 'Прятки';
    el.classList.toggle('chase', p === 'chase');
  }
  mmLabel(text) { const l = $('mm-label'); l.innerHTML = text; l.style.opacity = text ? 1 : 0; }

  // Карточки карт: одна играбельная, остальные — «скоро»
  buildMaps(list, onPick) {
    const box = $('map-cards');
    box.innerHTML = list.map(m => `<button class="map-card ${m.ready ? '' : 'soon'}" data-id="${m.id}"><div class="m-title">${m.icon} ${m.name}</div><div class="m-pic" style="background-image:url(${m.pic})"></div><span class="m-diff ${m.hard ? 'hard' : ''}">${m.hard ? 'Сложный' : 'Обычный'}</span></button>`).join('');
    box.querySelectorAll('.map-card').forEach(b => b.addEventListener('click', () => onPick(b.dataset.id)));
  }
  pickMap(id) { document.querySelectorAll('.map-card').forEach(b => b.classList.toggle('active', b.dataset.id === id)); }

  // Мини-карта: фон рисуется один раз, точки — каждый кадр
  minimapInit(world, half) {
    const c = $('minimap'), x = c.getContext('2d');
    this.mm = { c, x, half, bg: document.createElement('canvas') };
    const bg = this.mm.bg; bg.width = bg.height = 300;
    const b = bg.getContext('2d'), k = 300 / (half * 2), P = v => (v + half) * k;
    b.fillStyle = '#6b5436'; b.fillRect(0, 0, 300, 300);
    b.fillStyle = '#8a6d45'; b.fillRect(P(-1.7), 0, 3.4 * k, 300); b.fillRect(0, P(-1.6), 300, 3.2 * k);   // дорожки
    b.fillStyle = '#3f6a3a'; for (const s of world.bushes) { b.beginPath(); b.arc(P(s.x), P(s.z), s.r * k, 0, 7); b.fill(); }
    b.fillStyle = '#2b1a10'; for (const r of world.boxes) if (r.top > 1.2 && r.bottom < 1) b.fillRect(P(r.minX), P(r.minZ), (r.maxX - r.minX) * k, (r.maxZ - r.minZ) * k);
    b.fillStyle = '#243a22'; for (const r of world.circles) if (r.top > 3) { b.beginPath(); b.arc(P(r.x), P(r.z), Math.max(1.5, r.r * k), 0, 7); b.fill(); }
  }
  // dots: [{x, z, kind: 'me'|'ally'|'ghost'|'pumpkin'}], yaw — поворот камеры (карта крутится вместе с ней)
  minimap(center, yaw, dots) {
    if (!this.mm) return;
    const { c, x, half, bg } = this.mm, k = 300 / (half * 2), zoom = 2.3;
    x.save();
    x.clearRect(0, 0, 300, 300);
    x.beginPath(); x.arc(150, 150, 150, 0, 7); x.clip();
    x.translate(150, 150); x.rotate(yaw); x.scale(zoom, zoom);
    x.translate(-(center.x + half) * k, -(center.z + half) * k);
    x.drawImage(bg, 0, 0);
    for (const d of dots) {
      const px = (d.x + half) * k, pz = (d.z + half) * k;
      if (d.kind === 'pumpkin') { x.fillStyle = '#ffa23a'; x.beginPath(); x.arc(px, pz, 2.2, 0, 7); x.fill(); continue; }
      x.fillStyle = d.kind === 'me' ? '#ff8a3a' : d.kind === 'ghost' ? '#b07aff' : '#ffffff';
      x.strokeStyle = '#2a170b'; x.lineWidth = 1;
      x.beginPath(); x.arc(px, pz, d.kind === 'me' ? 4.5 : 3.2, 0, 7); x.fill(); x.stroke();
    }
    x.restore();
  }

  toast(text) {
    const t = $('toast');
    t.textContent = text;
    t.classList.remove('on'); void t.offsetWidth; t.classList.add('on');
  }

  // Редактор «Мой котик»: ряды кнопок; onChange(ключ, значение)
  buildCreator(look, O, onChange) {
    const box = $('creator');
    const row = (key, label, items, swatch) => `<div class="cr-row"><span>${label}</span><div class="cr-opts" data-k="${key}">${items.map(([v, t]) =>
      swatch ? `<button data-v="${v}" class="sw ${look[key] === v ? 'on' : ''}" style="--c:${v}"></button>` : `<button data-v="${v}" class="${look[key] === v ? 'on' : ''}">${t}</button>`).join('')}</div></div>`;
    box.innerHTML = row('gender', 'Кто', O.gender)
      + row('hairStyle', 'Причёска', O.hairStyle[look.gender])
      + row('hair', 'Волосы', O.hair.map(c => [c, c]), true)
      + row('sweater', 'Свитер', O.sweater.map(c => [c, c]), true)
      + row('emblem', 'Значок', O.emblem)
      + row('ears', 'Ушки котика', O.ears) + row('tail', 'Хвостик', O.tail);
    box.querySelectorAll('.cr-opts button').forEach(b => b.addEventListener('click', () => onChange(b.parentElement.dataset.k, b.dataset.v)));
  }

  showHero(h, skin) {
    $('creator').classList.toggle('hidden', !h.custom);
    document.querySelector('.sel-info').classList.toggle('custom', !!h.custom);
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
    const txt = `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;
    const tm = $('timer');
    if (tm.textContent !== txt) { tm.textContent = txt; tm.parentElement.classList.toggle('warn', sec <= 10); }
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

  result(r) {
    const earn = $('res-earn');
    earn.textContent = r.earn ? `+${r.earn} 🎃 тыковок` : '';
    const list = a => a.join(', ');
    if (r.mode === 'watch') {
      $('res-emoji').textContent = r.alive.length ? '🏮' : '👺';
      $('res-title').textContent = r.alive.length ? 'Рассвет!' : 'Безлики поймали всех';
      $('res-text').textContent = `После пряток остались: ${list(r.hideSurvivors) || 'никто'}. После догонялок: ${list(r.alive) || 'никто'}.`;
      return;
    }
    if (r.mode === 'hunter' || r.playerWasGhost) {
      const total = r.found + r.chaseCatches;
      $('res-emoji').textContent = total ? '🎭' : '🌙';
      $('res-title').textContent = r.mode === 'hunter' ? (r.alive.length ? 'Кто-то ускользнул!' : 'Ты нашёл всех!') : (r.alive.length ? 'Догонялки кончились' : 'Ты догнал всех!');
      $('res-text').textContent = r.mode === 'hunter'
        ? `В прятках нашёл: ${r.found}. В догонялках поймал: ${r.chaseCatches}.${r.alive.length ? ` Спаслись: ${list(r.alive)}.` : ''}`
        : `Тебя нашли первым — и ты стал Безликом! В догонялках поймано: ${r.chaseCatches}.`;
      return;
    }
    const safe = !r.playerCaughtInChase;
    $('res-emoji').textContent = safe ? '🏮' : '👺';
    $('res-title').textContent = safe ? 'Ты продержался!' : 'Тебя догнали';
    $('res-text').textContent = (r.playerFoundAt === null ? 'В прятках тебя так и не нашли! ' : 'В прятках тебя нашли. ')
      + (safe ? 'И в догонялках ты убежал от всех Безликов.' : 'Прячься в домах, за ширмами и на крышах, приседай за ящиками.');
  }
}
