// Совместная игра: комната по ссылке, лобби, голосование за карту, раунд на всех.
// Хозяин комнаты (кто создал) считает раунд у себя — ровно тот же Round, что и в одиночной игре,
// а живые игроки с других устройств в нём — как боты, только управляются их нажатиями.
// Гости рисуют раунд по «снимкам» от хозяина и шлют ему свои нажатия 20 раз в секунду.
import * as THREE from 'three';
import { CONFIG } from '../config/config.js?v=2026100901';
import { HEROES, GHOST } from '../characters/index.js?v=2026100901';
import { Net } from './net.js?v=2026100901';
import { makeRoster, makeSnapshot, GuestView } from './sync.js?v=2026100901';
import { wallet } from '../world/props.js?v=2026100901';
import * as AbilityFx from '../abilities/fx.js?v=2026101006';
import { objectiveGuide } from '../world/lanterns.js';

const $ = id => document.getElementById(id);
const NAME_KEY = 'masha-game-name';
const HERO_ICON = { kid: '🐱', masha: '🦶', catbus: '🐈', moti: '🛡️', brothers: '👥', noface: '🎭' };
const MAX_PLAYERS = 15;
const MAX_HUMAN_GHOSTS = 4;
const heroById = id => HEROES.find(h => h.id === id) || (id === GHOST.id ? GHOST : HEROES[0]);

export class Multiplayer {
  constructor(game) {
    this.g = game;
    this.net = new Net();
    this.sendT = 0; this.inT = 0;
    this.latch = { jump: false, dash: false };
    this.guest = null;             // GuestView, когда мы гость в раунде
    this.#wire();
  }

  get inRoom() { return !!this.net.code && this.net.connected; }
  get isHost() { return this.inRoom && this.net.isHost; }
  get isGuestPlaying() { return !!this.guest; }
  get myName() { try { return localStorage.getItem(NAME_KEY) || ''; } catch { return ''; } }

  hello() {
    const h = this.g.hero;
    return { name: this.myName || 'Игрок', hero: h.id, skin: h.custom ? JSON.stringify(this.g.look) : this.g.skin };
  }

  #wire() {
    const ui = this.g.ui, net = this.net;
    this.seenHost = null;
    ui.on('lb-leave', () => this.leave());
    ui.on('lb-hero', () => this.g.toSelect());
    ui.on('lb-start', () => this.hostStart());
    ui.on('lb-bots-on', () => { if (this.isHost) net.send({ t: 'bots', enabled: true }); });
    ui.on('lb-bots-off', () => { if (this.isHost) net.send({ t: 'bots', enabled: false }); });
    ui.on('lb-mode-hide', () => { if (this.isHost) { net.gameMode = 'hide'; this.renderLobby(); net.send({ t: 'gameMode', mode: 'hide' }); } });
    ui.on('lb-mode-delivery', () => { if (this.isHost) { net.gameMode = 'delivery'; this.renderLobby(); net.send({ t: 'gameMode', mode: 'delivery' }); } });
    ui.on('lb-copy', () => { navigator.clipboard?.writeText(this.url).then(() => ui.toast('Ссылка скопирована!'), () => {}); $('lb-url').select(); });
    ui.on('lb-share', () => { if (navigator.share) navigator.share({ title: 'Прятки с Безликом', text: 'Играем вместе! Комната ' + net.code, url: this.url }).catch(() => {}); else { navigator.clipboard?.writeText(this.url); ui.toast('Ссылка скопирована!'); } });
    ui.on('rooms-create', () => this.createRoom());
    ui.on('rooms-refresh', () => this.refreshRooms());
    ui.on('rooms-back', () => this.g.toSelect());
    $('rooms-list').addEventListener('click', e => {
      const code = e.target.closest('button[data-room]')?.dataset.room;
      if (code) this.join(code);
    });
    const nameInp = $('lb-name');
    nameInp.value = this.myName;
    nameInp.addEventListener('keydown', e => e.stopPropagation());
    nameInp.addEventListener('change', () => { try { localStorage.setItem(NAME_KEY, nameInp.value.trim()); } catch {} net.update(this.hello()); });

    net.on('lobby', m => { if (this.g.state === 'lobby') this.renderLobby(); this.#hostChanged(m); this.#lateJoiners(m); });
    net.on('left', m => {
      if (!this.isHost || this.g.state !== 'play') return;
      const R = this.g.round;
      const a = R.agents.find(x => x.remote === m.id);
      const gh = R.activeGhosts.find(x => x.remote === m.id);
      if (this.net.bots) {
        if (a) { this.g.ui.toast(`${a.name} вышел — за него играет бот`); R.convertToBot(a); }
        if (gh) gh.remote = null;
      } else {
        if (a) {
          R.agents = R.agents.filter(x => x !== a);
          this.g.scene.remove(a.char.root);
        }
        if (gh) {
          R.activeGhosts = R.activeGhosts.filter(x => x !== gh);
          gh.reset(R.ghostSpawn(0));
          gh.remote = null;
        }
        R.netIn.delete(m.id);
        this.net.send({ t: 'roster', roster: makeRoster(R) });
        this.g.ui.toast(`${this.net.name(m.id)} вышел из игры`);
        if (!R.activeGhosts.length || !R.agents.length) {
          this.g.ui.toast('Игрок вышел — возвращаемся в комнату');
          this.showLobby();
        }
      }
    });
    net.on('close', () => { if (this.g.state !== 'loading') { this.g.ui.toast('Связь с комнатой потеряна'); this.#stopGuest(); if (['lobby', 'guest'].includes(this.g.state)) this.g.toSelect(); } });
    // гость
    net.on('start', m => this.#guestStart(m));
    net.on('roster', m => this.guest?.setRoster(m.roster));
    net.on('s', m => this.guest?.apply(m));
    net.on('ev', m => this.#guestEvent(m));
    net.on('end', m => this.#guestEnd(m));
    net.on('lobbyBack', () => { this.#stopGuest(); this.showLobby(); });
    // хозяин
    net.on('in', m => { if (!this.isHost) return; const prev = this.g.round.netIn.get(m.from) || {}; this.g.round.netIn.set(m.from, { ...m, jump: prev.jump || m.jump, dash: prev.dash || m.dash }); });
    net.on('ab', m => this.#hostAbility(m));
  }

  get url() { return `${location.origin}${location.pathname}?room=${this.net.code}`; }

  // ---------- Комната ----------
  showRooms() {
    if (this.inRoom) return this.showLobby();
    this.g.state = 'rooms';
    this.g.input.enabled = false;
    this.g.input.releasePointer();
    this.g.ui.mode('rooms', this.g.isTouch);
    this.refreshRooms();
    clearInterval(this.roomListTimer);
    this.roomListTimer = setInterval(() => {
      if (this.g.state === 'rooms') this.refreshRooms();
      else { clearInterval(this.roomListTimer); this.roomListTimer = null; }
    }, 8000);
  }

  async refreshRooms() {
    const box = $('rooms-list');
    try {
      const response = await fetch('/api/rooms', { cache: 'no-store' });
      if (!response.ok) throw new Error('rooms');
      const { rooms } = await response.json();
      if (this.g.state !== 'rooms') return;
      const open = rooms.filter(r => r.players < MAX_PLAYERS);
      box.innerHTML = open.length ? open.map(r => `<div class="room-row"><div class="room-info"><strong>Комната ${esc(r.code)}</strong><small>${esc(r.host)} · ${r.players}/${MAX_PLAYERS} игроков · ${r.gameMode === 'delivery' ? '🏮 Доставка фонаря' : '🎭 Прятки'} · ${r.bots === false ? 'Без ботов' : 'С ботами'} · ${r.started ? 'Игра идёт — можно присоединиться' : 'Ожидает игроков'}</small></div><button class="gold" data-room="${esc(r.code)}">Войти</button></div>`).join('')
        : '<div class="lb-card">Пока нет открытых комнат. Создай первую!</div>';
    } catch {
      if (this.g.state === 'rooms') box.textContent = 'Не удалось получить список комнат. Нажми «Обновить список».';
    }
  }

  async createRoom() { return this.join(Net.newCode()); }

  async join(code) {
    const ui = this.g.ui;
    ui.toast('Подключаемся к комнате…');
    const ok = await this.net.connect(code, this.hello());
    if (!ok) {
      ui.toast('Не получилось подключиться. Совместная игра работает на адресе игры в интернете.');
      return false;
    }
    try { history.replaceState(null, '', `?room=${this.net.code}`); } catch {}
    if (this.g.state !== 'guest') this.showLobby();
    return true;
  }

  leave() {
    if (this.isHost && this.g.state === 'play') this.net.send({ t: 'lobbyBack' });
    this.net.leave();
    this.#stopGuest();
    try { history.replaceState(null, '', location.pathname); } catch {}
    this.g.toSelect();
  }

  showLobby() {
    const g = this.g;
    if (this.isHost && ['play', 'result'].includes(g.state)) this.net.send({ t: 'lobbyBack' });   // вернуть гостей из раунда
    g.state = 'lobby';
    g.input.enabled = false;
    g.input.releasePointer();
    g.ui.mode('lobby', true);
    this.net.update(this.hello());
    $('lb-code').textContent = this.net.code;
    $('lb-url').value = this.url;
    this.#qr();
    this.renderLobby();
  }

  #lateJoiners(m) {
    if (!this.isHost || this.g.state !== 'play' || !this.g.round || !m.started) return;
    for (const p of m.players) {
      if (p.id === this.net.id || this.roundPlayers?.has(p.id) || !p.ready) continue;
      const added = this.g.round.addLatePlayer({ id: p.id, name: p.name, hero: heroById(p.hero), skin: p.skin });
      if (added) this.net.send({ t: 'roster', roster: makeRoster(this.g.round) });
      this.net.send({ t: 'start', to: p.id, roster: makeRoster(this.g.round), mode: this.g.round.mode, gameMode: this.g.round.gameMode, map: this.g.mapId });
      this.g.ui.toast(added ? `${p.name} присоединился к игре` : `${p.name} наблюдает за игрой`);
    }
    this.roundPlayers = new Set(m.players.filter(p => p.ready).map(p => p.id));
  }

  renderLobby() {
    const net = this.net, host = net.host;
    $('lb-count').textContent = `${net.players.length}/${MAX_PLAYERS}`;
    $('lb-players').innerHTML = net.players.map(p => `<div class="lb-p ${p.id === net.id ? 'me' : ''}"><span class="ic">${HERO_ICON[p.hero] || '🐾'}</span><span class="nm">${esc(p.name)}${p.id === host ? ' 👑' : ''}</span><span class="hr">${heroById(p.hero).name}</span></div>`).join('');
    const votes = {};
    for (const p of net.players) votes[p.vote] = (votes[p.vote] || 0) + 1;
    const maps = this.g.maps;
    const box = $('lb-maps');
    box.innerHTML = maps.map(m => `<button class="map-card ${m.ready ? '' : 'soon'}" data-id="${m.id}"><div class="m-title">${m.icon} ${m.name}</div><div class="m-pic" style="background-image:url(${m.pic})"></div><span class="m-diff ${m.hard ? 'hard' : ''}">${m.hard ? 'Сложный' : 'Обычный'}</span><div class="m-votes">🐾 ${votes[m.id] || 0}</div></button>`).join('');
    const mine = net.players.find(p => p.id === net.id)?.vote;
    box.querySelectorAll('.map-card').forEach(b => {
      b.classList.toggle('active', b.dataset.id === mine);
      b.addEventListener('click', () => {
        const m = maps.find(x => x.id === b.dataset.id);
        if (!m.ready) { this.g.ui.toast(`«${m.name}» скоро откроется!`); return; }
        net.send({ t: 'vote', map: m.id });
      });
    });
    const amHost = net.isHost;
    for (const [id, enabled] of [['lb-bots-on', true], ['lb-bots-off', false]]) {
      const button = $(id);
      button.disabled = !amHost;
      button.classList.toggle('active', net.bots === enabled);
    }
    $('lb-bots-note').textContent = amHost
      ? 'Ты выбираешь состав комнаты. Без ботов нужны хотя бы один герой и один Безлик среди игроков.'
      : 'Режим выбирает хозяин комнаты. Без ботов нужны игроки за героя и Безлика.';
    for (const [id, mode] of [['lb-mode-hide', 'hide'], ['lb-mode-delivery', 'delivery']]) {
      $(id).disabled = !amHost;
      $(id).classList.toggle('active', net.gameMode === mode);
    }
    $('lb-mode-note').textContent = net.gameMode === 'delivery'
      ? 'Подойдите к фонарю под золотым лучом, затем к святилищу под голубым лучом. Подбор и доставка автоматические. Нужно 3 доставки за 4 минуты.'
      : 'Сначала прячьтесь от Безлика, затем убегайте в догонялках.';
    $('lb-start').innerHTML = `Начать ${net.gameMode === 'delivery' ? 'доставку' : 'прятки'} <span>›</span>`;
    $('lb-start').classList.toggle('hidden', !amHost);
    $('lb-wait').classList.toggle('hidden', amHost);
  }

  // QR-код рисуем маленькой библиотекой с jsdelivr (если не загрузилась — просто без QR)
  #qr() {
    const img = $('lb-qr');
    const draw = () => { try { const q = window.qrcode(0, 'M'); q.addData(this.url); q.make(); img.src = q.createDataURL(4, 2); } catch { img.removeAttribute('src'); } };
    if (window.qrcode) return draw();
    img.removeAttribute('src');
    if (this.qrLoading) return;
    this.qrLoading = true;
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js';
    s.onload = draw;
    document.head.appendChild(s);
  }

  #hostChanged(m) {
    // Хозяин ушёл: сервер выбирает следующего и завершает старый раунд.
    // Все гости должны выйти из замершего GuestView, не только новый хозяин.
    const previous = this.seenHost;
    this.seenHost = m.host;
    if (!this.guest || previous == null || m.host === previous) return;
    this.#stopGuest();
    this.g.ui.toast(m.host === this.net.id
      ? 'Хозяин вышел — теперь ты хозяин. Раунд завершён.'
      : 'Хозяин вышел — раунд завершён, вернулись в лобби.');
    this.showLobby();
  }

  // ---------- Хозяин ----------
  remotes() {
    if (!this.isHost) return [];
    return this.net.players.filter(p => p.id !== this.net.id && p.ready).map(p => ({ id: p.id, name: p.name, hero: heroById(p.hero), skin: p.skin }));
  }

  hostStart() {
    if (!this.isHost) return;
    const g = this.g;
    const ready = this.net.players.filter(p => p.ready);
    const ghosts = ready.filter(p => p.hero === GHOST.id).length;
    if (ghosts > MAX_HUMAN_GHOSTS) {
      g.ui.toast(`В комнате может быть до ${MAX_HUMAN_GHOSTS} игроков за Безлика. Пусть кто-то сменит героя.`);
      return;
    }
    if (!this.net.bots && (!ghosts || !ready.some(p => p.hero !== GHOST.id))) {
      g.ui.toast('Для игры без ботов нужны игрок за Безлика и хотя бы один герой.');
      return;
    }
    const votes = new Map();
    for (const p of this.net.players) {
      if (!g.maps.some(m => m.id === p.vote && m.ready)) continue;
      votes.set(p.vote, (votes.get(p.vote) || 0) + 1);
    }
    if (votes.size) {
      const mine = this.net.players.find(p => p.id === this.net.id)?.vote;
      g.mapId = [...votes.keys()].sort((a, b) => votes.get(b) - votes.get(a) || (a === mine ? -1 : b === mine ? 1 : 0))[0];
    }
    g.beginRound(g.hero.id === GHOST.id ? 'hunter' : 'play');
  }

  // Вызывается из game.beginRound у хозяина комнаты
  hostStarted() {
    if (!this.isHost) return;
    const R = this.g.round;
    // имя хозяина — на его героя
    if (R.player) R.player.name = this.myName || R.player.name;
    this.net.send({ t: 'start', roster: makeRoster(R), mode: R.mode, gameMode: R.gameMode, map: this.g.mapId });
    this.roundPlayers = new Set(this.net.players.map(p => p.id));
    this.sendT = 0;
  }

  hostTick(dt) {
    if (!this.isHost) return;
    this.sendT -= dt;
    if (this.sendT > 0) return;
    this.sendT = 1 / 15;
    this.net.send(makeSnapshot(this.g.round));
  }

  // События раунда → гостям (у каждого свои подписи)
  hostEvent(e) {
    if (!this.isHost) return;
    const pidOf = a => a?.isPlayer ? 'host' : a?.remote || null;
    if (e.type === 'caught') this.net.send({ t: 'ev', k: 'caught', name: e.agent.name, pid: pidOf(e.agent), phase: e.phase,
      eliminated: !!e.agent.eliminatedByHeads, by: e.ghost.isPlayer ? 'host' : e.ghost.remote || null });
    else if (e.type === 'resisted') this.net.send({ t: 'ev', k: 'resisted', name: e.agent.name, pid: pidOf(e.agent) });
    else if (e.type === 'ability') this.net.send({ t: 'ev', k: 'ability', id: e.id, pid: pidOf(e.agent) });
    else if (e.type === 'split') this.net.send({ t: 'ev', k: 'split', pid: pidOf(e.agent) });
    else if (e.type === 'headHop') this.net.send({ t: 'ev', k: 'headHop', pid: pidOf(e.agent), index: e.index });
    else if (e.type === 'headCaught') this.net.send({ t: 'ev', k: 'headCaught', pid: pidOf(e.agent), name: e.agent.name, remaining: e.remaining });
    else if (e.type === 'headSwitch') this.net.send({ t: 'ev', k: 'headSwitch', pid: pidOf(e.agent), index: e.index });
    else if (e.type === 'ghostSpawn') this.net.send({ t: 'ev', k: 'spawn', i: e.i, phase: this.g.round.phase, pid: e.ghost.isPlayer ? 'host' : e.ghost.remote || null });
    else if (e.type === 'lanternPickup') this.net.send({ t: 'ev', k: 'lanternPickup', name: e.agent.name, pid: pidOf(e.agent) });
    else if (e.type === 'lanternDropped') this.net.send({ t: 'ev', k: 'lanternDropped', name: e.agent.name });
    else if (e.type === 'lanternDelivered') this.net.send({ t: 'ev', k: 'lanternDelivered', name: e.agent.name, count: e.count, goal: e.goal });
    else if (e.type === 'phase') {
      this.net.send({ t: 'roster', roster: makeRoster(this.g.round) });
      this.net.send({ t: 'ev', k: 'phase', name: e.newGhostName, pid: e.agent ? pidOf(e.agent) : null });
    } else if (e.type === 'poof') this.net.send({ t: 'ev', k: 'poof', x: e.x, y: e.y, z: e.z, ghost: !!e.ghost });
  }

  hostEnd(r) {
    if (!this.isHost) return;
    this.net.send({ t: 'end', r: { gameMode: r.gameMode, delivered: r.delivered, goal: r.goal, heroesWon: r.heroesWon,
      hideSurvivors: r.hideSurvivors, alive: r.alive, caught: r.caught } });
  }

  // Тыковки, собранные гостями (хозяин отмечает, кому)
  hostPumpkin(pid) { if (this.isHost && pid && pid !== 'host') this.net.send({ t: 'ev', k: 'pk', to: pid }); }

  #hostAbility(m) {
    if (!this.isHost || this.g.state !== 'play') return;
    const R = this.g.round;
    const a = R.agents.find(x => x.remote === m.from && x.alive);
    if (a) { a.abilities.use(m.id); return; }
    const gh = R.activeGhosts.find(x => x.remote === m.from);
    if (gh && (m.id === 'mask-hero' || m.id === 'mask-prop')) {
      if (gh.disguised) gh.reveal(); else gh.useDisguise(R.agents, m.id === 'mask-prop' ? 'prop' : 'hero');
    }
  }

  // ---------- Гость ----------
  async #guestStart(m) {
    const g = this.g;
    g.mapId = m.map === 'forest' ? 'forest' : 'village';
    g.gameMode = m.gameMode === 'delivery' ? 'delivery' : 'hide';
    this.guest?.clear();
    this.guest = null;
    try { await g.activateMap(g.mapId); }
    catch (e) { console.error('Не удалось открыть карту комнаты', e); g.ui.toast('Не удалось загрузить карту комнаты'); return; }
    g.releaseAll();
    this.guest = new GuestView({ scene: g.scene, heroes: [...HEROES, GHOST], ghosts: g.ghostPool, acquire: (h, s) => g.acquireChar(h, s) });
    this.guest.setRoster(m.roster);
    this.guestMode = m.mode;
    this.guestFocus = 0;
    this.pk = 0;
    g.showGhost.root.visible = false;
    g.showcase = null;
    g.input.reset();
    g.state = 'guest';
    g.input.enabled = true;
    g.input.lookOnly = false;
    g.cam.yaw = 0; g.cam.pitch = 0.3;
    g.ui.mode('play', g.isTouch, 'play');
    g.ui.phase(g.gameMode === 'delivery' ? 'delivery' : 'hide');
    g.showModeIntro(g.gameMode);
    g.ui.pumpkins(0);
    g.ui.abilityBar([]);
    this.lastBar = null;
    g.showLight.intensity = 0;
    document.getElementById('btn-again').classList.add('hidden');
  }

  #stopGuest() {
    if (!this.guest) return;
    this.guest.clear();
    this.g.releaseAll();
    this.guest = null;
    document.getElementById('btn-again').classList.remove('hidden');
  }

  guestTick(dt, t) {
    const g = this.g, gv = this.guest;
    if (!gv) return;
    const inp = g.input.read();
    if (inp.jump) this.latch.jump = true;
    if (inp.dash) this.latch.dash = true;
    // нажатия → хозяину
    this.inT -= dt;
    if (this.inT <= 0) {
      this.inT = 1 / 20;
      this.net.send({ t: 'in', x: +inp.x.toFixed(2), y: +inp.y.toFixed(2), run: inp.run, crouch: inp.crouch, jumpHold: inp.jumpHold, jump: this.latch.jump, dash: this.latch.dash, camYaw: +g.cam.yaw.toFixed(3) });
      this.latch.jump = this.latch.dash = false;
    }
    gv.render(dt, t);
    const snap = gv.snap;
    const me = gv.me(this.net.id);
    const living = [...gv.agents.values()].filter(v => v.s?.[10]);
    const ghostViews = (snap?.g || []).filter(s => s[5] > 0).map(s => ({
      ctrl: { pos: new THREE.Vector3(s[1], s[2], s[3]), yaw: s[4] },
      def: GHOST, root: g.ghostPool[s[0]].root,
    }));
    const spectating = !me && (ghostViews.length > 0 || living.length > 0);
    const watched = spectating ? (ghostViews.length ? ghostViews[this.guestFocus % ghostViews.length] : living[this.guestFocus % living.length]) : null;
    const focus = me?.pos || watched?.ctrl?.pos || watched?.pos || (gv.agents.values().next().value?.pos) || new THREE.Vector3(0, 0, 22);
    const mine = me?.kind === 'agent' ? me.v.s : null, gmine = me?.kind === 'ghost' ? me.g : null;
    g.mainFirstPersonTarget = spectating ? watched : null;
    const cameraKind = spectating && ghostViews.length ? 'ghost' : me?.kind === 'agent' && me.v.s?.[18] ? 'head' : me?.kind;
    if (cameraKind !== this.lastKind) {
      g.cam.configure(cameraKind === 'head' ? { distance: 4.5, height: 1.18, side: 0.35 }
        : me?.kind === 'ghost' ? GHOST.cam : (me?.v?.def.cam || HEROES[0].cam));
      g.cam.snap(focus);
      this.lastKind = cameraKind;
    }
    if (spectating) g.firstPerson(watched.ctrl ? watched : { ctrl: { pos: watched.pos, yaw: watched.yaw }, hero: watched.def });
    else g.cam.update(dt, focus, inp);
    this.focusPos = focus;
    if (!snap) return;
    document.getElementById('watch-bar').classList.toggle('hidden', !spectating);
    document.getElementById('touch').classList.toggle('hidden', spectating);
    if (spectating) document.getElementById('btn-next').textContent = ghostViews.length ? 'Другой Безлик ›' : 'Другой герой ›';
    const watchingGhost = mine && snap.ph === 'hide' && (mine[9] || mine[11] || mine[14])
      ? snap.g.filter(s => s[5]).sort((a, b) => Math.hypot(a[1] - focus.x, a[3] - focus.z) - Math.hypot(b[1] - focus.x, b[3] - focus.z))[0]
      : null;
    const watchedGhost = watchingGhost && g.ghostPool[watchingGhost[0]];
    const disguiseKey = watchingGhost && (watchingGhost[10] ? `hero:${watchingGhost[10]}` : watchingGhost[11] ? `prop:${watchingGhost[11]}` : null);
    const disguiseObject = disguiseKey && this.guest.ghostDz.get(`${disguiseKey}#${watchingGhost[0]}`);
    g.ghostViewTarget = watchedGhost ? {
      ctrl: { pos: new THREE.Vector3(watchingGhost[1], watchingGhost[2], watchingGhost[3]), yaw: watchingGhost[4] },
      def: watchedGhost.def,
      root: watchedGhost.root,
      disguiseRoot: disguiseObject?.root,
    } : null;
    document.getElementById('ghost-view').classList.toggle('hidden', !g.ghostViewTarget);
    // интерфейс
    g.ui.phase(snap.ph === 'delivery' ? 'delivery' : snap.ph === 'chase' ? 'chase' : 'hide');
    const alive = snap.a.filter(a => a[10]).length;
    g.ui.alive(alive, snap.a.length, snap.ph === 'delivery' ? `🏮 Доставлено ${snap.d?.delivered || 0}/${snap.d?.goal || 3} · героев` : snap.ph === 'hide' ? 'Спрятались' : 'Убегают');
    g.ui.hud({ left: snap.left, stamina: mine ? mine[15] : gmine ? gmine[13] : 1, tired: mine ? !!mine[16] : false, hidden: mine ? !!mine[14] : false });
    let status;
    if (snap.ph === 'delivery') {
      const carrying = snap.d?.lantern?.carrier === me?.v?.s?.[0];
      const carrier = snap.d?.lantern?.carrier && [...gv.agents.values()].find(v => v.s?.[0] === snap.d.lantern.carrier);
      const nearLantern = mine && !snap.d?.lantern?.carrier
        && Math.hypot(mine[1] - snap.d.lantern.x, mine[3] - snap.d.lantern.z) < 4;
      const guide = mine && snap.d ? objectiveGuide({ x: mine[1], z: mine[3] }, carrying ? snap.d.shrine : snap.d.lantern, g.cam.yaw) : '';
      status = gmine ? `Помешай доставке! Фонари: ${snap.d?.delivered || 0}/${snap.d?.goal || 3}`
        : carrying ? `Святилище ${guide} · неси фонарь!`
        : nearLantern ? 'Подойди к фонарю — он подберётся автоматически!'
        : carrier ? `${carrier.name} несёт фонарь — помоги ему добраться до святилища`
        : `🏮 Фонарь ${guide} · подойди и подбери · ${snap.d?.delivered || 0}/${snap.d?.goal || 3}`;
    }
    else if (snap.ph === 'hide' && snap.sp === 0) status = gmine ? 'Закрой глаза и считай… Герои прячутся!' : 'Безлики скоро выйдут — прячься!';
    else if (gmine) status = gmine[10] || gmine[11] ? 'Ты замаскирован — подкрадись!' : snap.ph === 'hide' ? `Найди спрятавшихся! Осталось: ${alive}` : `Догони всех! Осталось: ${alive}`;
    else if (!me) status = ghostViews.length ? 'Взгляд Безлика: смотри, как он ищет героев' : 'Тебя нашли! Смотри, как прячутся другие…';
    else if (mine[11]) status = 'Ты — предмет. Не шевелись! (Q — снова стать собой)';
    else status = mine[18] ? `Три головы: ${mine[18].filter(h => h[5]).length}/3 · убегай от Безлика!` : mine[14] ? 'Тихо… тебя ищут' : snap.ph === 'chase' ? 'Догонялки! Не попадись!' : 'Безлики ищут. Спрячься или замаскируйся!';
    g.ui.status(status, 'calm');
    g.ui.mmLabel(snap.ph === 'delivery' ? '🏮 Найди фонарь<br>и святилище' : snap.ph === 'hide' && snap.sp === 0 && !gmine ? 'Найди место<br>и спрячься!' : '');
    // панель умений: герой или Безлик
    const bar = gmine ? 'ghost' : mine ? 'hero:' + me.v.def.id : 'none';
    if (bar !== this.lastBar) {
      this.lastBar = bar;
      g.ui.abilityBar(gmine ? g.ghostAbilities : mine ? g.heroAbilities(me.v.def.id) : []);
    }
    if (gmine) g.ui.cooldowns(id => id === 'dash' ? { k: gmine[14] > 0 ? 0 : 1, n: gmine[14] } : id === 'fly' ? { k: 1 - gmine[15] } : { k: gmine[10] || gmine[11] ? 0 : gmine[16] / CONFIG.ghost.disguise.cd });
    else if (mine) g.ui.cooldowns(id => id === 'dash' ? { k: mine[17] }
      : id === 'split' ? { k: mine[19] ? 1 : 0, n: mine[18] ? mine[18].filter(h => h[5]).length : '' } : { k: 0 });
    // мини-карта
    const dots = [];
    if (snap.d) {
      dots.push({ x: snap.d.lantern.x, z: snap.d.lantern.z, kind: 'lantern' });
      dots.push({ x: snap.d.shrine.x, z: snap.d.shrine.z, kind: 'shrine' });
    }
    for (const v of gv.agents.values()) if (v.s && v.s[10] && v !== me?.v && !gmine) dots.push({ x: v.s[1], z: v.s[3], kind: 'ally' });
    if (mine?.[18]) for (const h of mine[18]) if (h[5] && Math.hypot(h[0] - focus.x, h[2] - focus.z) > 0.4)
      dots.push({ x: h[0], z: h[2], kind: 'ally' });
    for (const s of snap.g) if (s[5] && s !== gmine && (gmine || (!s[10] && !s[11] && Math.hypot(s[1] - focus.x, s[3] - focus.z) < 18))) dots.push({ x: s[1], z: s[3], kind: 'ghost' });
    dots.push({ x: focus.x, z: focus.z, kind: 'me' });
    g.ui.minimap(focus, g.cam.yaw, dots);
  }

  nextGuestFocus() {
    if (this.g.state !== 'guest' || this.guest?.me(this.net.id)) return;
    this.guestFocus++;
  }

  // Клавиши гостя: те же, что в одиночной игре
  guestKey(key) {
    if (this.lastBar === 'ghost') { if (key === '1') this.guestAbility('mask-hero'); if (key === '2') this.guestAbility('mask-prop'); return; }
    if (this.lastBar?.startsWith('hero:')) {
      const ab = this.g.heroAbilities(this.lastBar.slice(5)).find(a => a.key === key);
      if (ab) this.guestAbility(ab.id);
    }
  }

  guestAbility(id) {
    if (id === 'dash') { this.latch.dash = true; return; }
    if (id === 'fly') { this.latch.jump = true; return; }
    this.net.send({ t: 'ab', id });
  }

  #guestEvent(m) {
    const g = this.g, ui = g.ui, me = this.net.id;
    if (!this.guest) return;
    if (m.k === 'caught') {
      if (g.gameMode === 'delivery') ui.toast(m.pid === me ? 'Безлик поймал тебя. Смотри за командой.' : `Безлик поймал: ${m.name}`);
      else if (m.pid === me) ui.toast(m.eliminated ? 'Все три головы пойманы. Ты выбыл из матча.'
        : m.phase === 'hide' ? 'Тебя нашли! Подожди догонялок.' : 'Тебя догнали!');
      else if (m.by === me) ui.toast(`Попался: ${m.name}!`);
      else ui.toast(`${m.phase === 'hide' ? 'Нашли' : 'Догнали'}: ${m.name}`);
      g.sound.chime([392, 330]);
    } else if (m.k === 'lanternPickup') {
      ui.toast(m.pid === me ? 'Фонарь у тебя! Неси к голубому лучу святилища.' : `${m.name} несёт фонарь!`);
      g.sound.chime([660, 880]);
    } else if (m.k === 'lanternDropped') ui.toast('Безлик выбил фонарь! Подберите его снова.');
    else if (m.k === 'lanternDelivered') { ui.toast(`Фонарь доставлен! ${m.count}/${m.goal}`); g.sound.chime([784, 1046, 1318]); }
    else if (m.k === 'resisted') {
      ui.toast(m.pid === me ? 'Ты вырвался из поимки! Упрямство потрачено.' : `${m.name} вырвались из поимки!`);
      if (m.pid === me) g.sound.brothersCue?.('resist');
      const p = [...this.guest.agents.values()].find(v => v.pid === m.pid)?.pos;
      if (p) g.addFx(AbilityFx.stubbornGlow(g.scene, p.x, p.y, p.z));
    } else if (m.k === 'split') {
      if (m.pid === me) ui.toast('Головы разбежались! У тебя три жизни.');
      g.sound.brothersCue?.('resist');
    } else if (m.k === 'headHop') {
      if (m.pid === me) g.sound.brotherHop?.(m.index);
    } else if (m.k === 'headCaught') {
      ui.toast(m.pid === me ? `Голову поймали! Осталось ${m.remaining}/3.` : `Безлик поймал голову ${m.name}. Осталось ${m.remaining}/3.`);
    } else if (m.k === 'headSwitch') {
      if (m.pid === me) {
        ui.toast(`Теперь ты управляешь головой ${m.index + 1}!`);
        const v = [...this.guest.agents.values()].find(a => a.pid === me);
        if (v) v.pos = null;
      }
    } else if (m.k === 'ability' && ['fear', 'hypnosis', 'glare', 'repel'].includes(m.id)) {
      if (m.id !== 'repel') g.sound.brothersCue?.(m.id);
      const caster = [...this.guest.agents.values()].find(v => v.pid === m.pid);
      const p = caster?.pos;
      if (p) {
        const cfg = CONFIG.abilities[m.id];
        const make = m.id === 'fear' ? AbilityFx.fearWave : m.id === 'hypnosis' ? AbilityFx.hypnosisVortex : AbilityFx.glareFlash;
        g.addFx(make(g.scene, p.x, p.y, p.z, cfg.radius));
      }
    } else if (m.k === 'spawn') {
      g.sound.ghostAppear();
      g.cam.shake = 0.6;
      if (m.pid === me) ui.toast('Ты вышел на охоту! Ищи!');
      else if (m.i === 0) ui.toast(m.phase === 'hide' ? 'Безлики вышли искать!' : 'Догонялки начались!');
    } else if (m.k === 'phase') {
      g.sound.ghostAppear();
      ui.phase('chase');
      ui.toast(m.pid === me ? 'Тебя нашли первым — теперь ТЫ Безлик! Догоняй!' : `Догонялки! Безликом стал(а): ${m.name}. Беги!`);
    } else if (m.k === 'poof') {
      g.addFx(g.poofFx(m.x, m.y, m.z, m.ghost));
    } else if (m.k === 'pk' && m.to === me) {
      this.pk++;
      ui.pumpkins(this.pk);
      g.sound.chime([784, 1046, 1318]);
    }
  }

  #guestEnd(m) {
    const g = this.g, r = m.r;
    g.state = 'result';
    g.input.enabled = false;
    g.input.releasePointer();
    const earn = this.pk;
    if (earn) g.ui.wallet(wallet.add(earn));
    g.ui.result({ mode: 'watch', ...r, earn });
    g.ui.mode('result', g.isTouch);
    document.getElementById('btn-again').classList.add('hidden');
  }
}

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
