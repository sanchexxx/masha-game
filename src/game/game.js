// Игра целиком: выбор героя → выбор карты → раунд (прятки → догонялки) → итог и тыковки.
// Сама логика раунда — в round.js (её же гоняет симуляция без браузера); здесь — картинка,
// камера, звук, кнопки и интерфейс.
// Режимы: 'play' — ты герой, 'hunter' — ты Безлик (водящий), 'watch' — смотришь, как бегают все.
import * as THREE from 'three';
import { CONFIG } from '../config/config.js?v=2026100901';
import { HEROES, GHOST } from '../characters/index.js?v=2026100901';
import { buildMap } from '../world/map.js?v=2026100901';
import { buildForest } from '../world/forest.js?v=2026100901';
import { loadVillageAssets, buildVillage } from '../world/village.js';
import { loadForestAssets } from '../world/forest-assets.js?v=2026101003';
import { buildFireflies, buildSoot } from '../world/effects.js?v=2026100901';
import { createRain } from '../fx/rain.js';
import { buildProp, poof, Pumpkins, wallet } from '../world/props.js?v=2026100901';
import { LanternView, objectiveGuide } from '../world/lanterns.js';
import { Input } from '../player/input.js?v=2026100901';
import { ThirdPersonCamera } from '../player/camera.js?v=2026100901';
import { Ghost } from '../enemies/ghost.js?v=2026100901';
import { NavGrid } from '../enemies/pathfinder.js?v=2026100901';
import { burst, stubbornGlow } from '../abilities/fx.js?v=2026101006';
import { Round } from './round.js?v=2026100901';
import { Sound } from './audio.js?v=2026100901';
import { UI } from '../ui/ui.js?v=2026100901';
import { Tuner, loadSavedPhysics } from '../ui/tuner.js?v=2026100901';
import { makeThumbnails } from '../ui/thumbnails.js?v=2026100901';
import { LOOK_OPTIONS, loadLook, saveLook } from '../characters/kid.js?v=2026100901';
import { HERO_ABILITIES } from '../abilities/abilities.js?v=2026100901';
import { Multiplayer } from '../net/multiplayer.js?v=2026100901';
import { Lineup } from './lineup.js';
import { setGhostly } from '../characters/totoro.js';
import { loadTotoroModels } from '../characters/totoro-model.js';
import { loadNofaceModel } from '../characters/noface-model.js';
import { loadMotiModel } from '../characters/moti-model.js';
import { natureVisual } from '../world/nature.js';
import { Coach, Training, tutorialSeen } from '../ui/tutorial.js';

const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
const isMobile = isTouch && Math.min(screen.width, screen.height) < 820;
// До четырёх игроков-Безликов и ещё одно место для героя, ставшего Безликом в догонялках.
const MAX_GHOSTS = 5;
const GHOST_ABILITIES = [
  { id: 'dash', key: 'E', icon: '💨', name: 'Рывок' },
  { id: 'mask-hero', key: '1', icon: '🎭', name: 'Мистическая маска' },
  { id: 'rage', key: '2', icon: '👹', name: 'Теневой гнев' },
  { id: 'fly', key: '␣', icon: '🪶', name: 'Взлететь' },
];

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ui = new UI();
    this.sound = new Sound();
    this.state = 'loading';
    this.t = 0;
    this.fx = [];
    this.navs = new Map();
    this.pool = new Map();
    this.acquired = [];
    this.skins = {};               // скин каждого героя: {moti: 'winter', totoro: 'rain'}
    this.withBots = true;
    this.ghostCount = CONFIG.ghost.count;
    this.mapId = 'village';
    this.gameMode = 'hide';
    this.activeMapId = 'village';
    this.look = loadLook();        // внешность «Моего котика»
  }

  get agents() { return this.round?.agents || []; }
  // для совместной игры (src/net/multiplayer.js)
  get isTouch() { return isTouch; }
  get ghostAbilities() { return GHOST_ABILITIES; }
  heroAbilities(id) { return HERO_ABILITIES[id] || []; }
  acquireChar(h, s) { return this.#acquire(h, s); }
  releaseAll() { this.#releaseAll(); }
  poofFx(x, y, z, ghost) { return poof(this.scene, x, y, z, ghost ? 0xc9a8ff : 0xfff1d6); }
  get ghosts() { return this.round?.activeGhosts || []; }

  async start() {
    loadSavedPhysics();
    const models = Promise.all([loadTotoroModels(), loadMotiModel()]);
    const nofaceModel = loadNofaceModel();
    const villageModels = loadVillageAssets();
    const ui = this.ui;
    ui.progress(0.1, 'Строим деревню…');
    await frame();

    const r = this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: !isMobile || devicePixelRatio < 2, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(devicePixelRatio, isMobile ? CONFIG.graphics.maxPixelRatioMobile : CONFIG.graphics.maxPixelRatioDesktop));
    r.setSize(innerWidth, innerHeight, false);
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.15;
    r.shadowMap.enabled = CONFIG.graphics.shadows;
    r.localClippingEnabled = true;   // срез этажей в домах (village.js)
    r.shadowMap.type = THREE.PCFShadowMap;

    this.scene = new THREE.Scene();
    this.rain = createRain(this.scene);
    this.camera = new THREE.PerspectiveCamera(CONFIG.camera.fov, innerWidth / innerHeight, 0.1, 400);
    this.insetCamera = new THREE.PerspectiveCamera(72, 16 / 9, 0.08, 180);
    await villageModels;
    this.map = buildVillage(this.scene, { isMobile }) || buildMap(this.scene, { isMobile });
    this.world = this.map.world;
    ui.progress(0.4, 'Зажигаем фонарики…');
    await frame();

    this.fireflies = buildFireflies(this.scene, isMobile ? 50 : CONFIG.graphics.fireflies, Math.min(56, this.world.half - 12));
    this.soot = buildSoot(this.scene, this.world, isMobile ? 10 : 16);
    await nofaceModel;   // Безликов строим сразу из настоящей модели
    const ghostNav = this.navFor(GHOST.radius);
    this.ghostPool = Array.from({ length: MAX_GHOSTS }, () => new Ghost(GHOST, this.world, this.scene, ghostNav, { heroes: HEROES }));
    this.input = new Input(this.canvas, document.getElementById('touch'));
    this.cam = new ThirdPersonCamera(this.camera, this.map.cameraBlockers);
    this.showLight = new THREE.PointLight(0xffe0b0, 14, 9, 1.6);
    this.scene.add(this.showLight);
    ui.progress(0.6, 'Прокладываем тропинки…');
    await frame();
    // Строим сетки по одной с уступкой кадра: на iPhone X один длинный
    // синхронный проход раньше блокировал запуск до появления меню.
    for (let i = 0; i < HEROES.length; i++) {
      this.navFor(HEROES[i].radius);
      ui.progress(0.6 + 0.04 * (i + 1), 'Прокладываем тропинки…');
      await frame();
    }
    this.pumpkins = new Pumpkins(this.scene, this.navFor(0.42));
    this.lanternView = new LanternView(this.scene, this.world);
    ui.progress(0.8, 'Зовём духов…');
    await frame();

    // Прогрев: один раз рисуем Безликов, чтобы при появлении не было рывка кадра
    this.ghostPool.forEach(g => { g.root.visible = true; g.char.update(0.016, { t: 0, speed: 0, mode: 'hunt', appear: 1 }); });
    this.renderer.compile(this.scene, this.camera);
    this.ghostPool.forEach(g => { g.root.visible = false; });
    // Безлик на экране выбора
    this.showGhost = GHOST.build();
    this.showGhost.root.visible = false;
    this.scene.add(this.showGhost.root);

    this.round = new Round({
      world: this.world, scene: this.scene, navFor: r => this.navFor(r), ghosts: this.ghostPool, heroes: HEROES,
      makeChar: (h, s) => this.#acquire(h, s), makeProp: k => buildProp(k), sound: this.sound, cam: this.cam, navs: () => this.navs.values(), heroAbilities: HERO_ABILITIES,
      playerSpawn: this.map.playerSpawn, botSpawns: this.map.botSpawns, ghostSpawns: this.map.ghostSpawns,
    });
    this.round.addFx = f => this.fx.push(f);

    ui.progress(0.9, 'Будим Тоторо…');
    await models;
    const thumbs = makeThumbnails([...HEROES, GHOST]);
    this.#buildMapCards();
    ui.progress(1, 'Готово!');

    ui.buildCards(HEROES, GHOST, thumbs, id => this.#pickHero(id));
    this.lineup = new Lineup({ tags: document.getElementById('lineup-tags'), onPick: id => this.#pickHero(id) });
    this.coach = new Coach(this);
    this.#lineupPointer();
    ui.on('btn-tutorial', () => this.coach.start());
    ui.on('btn-tutorial2', () => this.coach.start());
    ui.on('hc-send', () => this.#useAbility('nekohelp'));
    ui.on('hc-skip', () => { this.helpSkip = this.helpAlly; this.helpSkipUntil = performance.now() + 8000; document.getElementById('help-card').classList.add('hidden'); });
    ui.on('btn-pause-tut', () => { this.ui.show('paused', false); this.#quitTraining(); this.coach.start(); });
    ui.on('btn-maps-train', () => this.beginRound(this.hero.id === 'noface' ? 'hunter' : 'play', true));
    ui.on('btn-td-real', () => { this.ui.show('train-done', false); this.beginRound(this.hero.id === 'noface' ? 'hunter' : 'play'); });
    ui.on('btn-td-again', () => { this.ui.show('train-done', false); this.beginRound(this.hero.id === 'noface' ? 'hunter' : 'play', true); });
    ui.on('btn-td-menu', () => { this.ui.show('train-done', false); this.toSelect(); });
    ui.on('btn-choose', () => (this.mp.inRoom ? this.mp.showLobby() : this.toMaps()));
    ui.on('btn-friends', () => (this.mp.inRoom ? this.mp.showLobby() : this.mp.showRooms()));
    ui.on('btn-maps-back', () => this.toSelect());
    ui.on('btn-maps-go', () => this.beginRound(this.hero.id === 'noface' ? 'hunter' : 'play'));
    for (const [id, mode] of [['maps-mode-hide', 'hide'], ['maps-mode-delivery', 'delivery']]) ui.on(id, () => { this.setGameMode(mode); this.coach.signal('mode'); });
    ui.on('btn-watch', () => this.beginRound('watch'));
    ui.on('btn-again', () => this.beginRound(this.mode));
    ui.on('btn-room-restart', () => {
      if (!this.mp.isHost || this.round?.player?.alive || this.roundStarting) return;
      this.ui.toast('Создатель комнаты начинает новый раунд!');
      this.beginRound(this.mode);
    });
    ui.on('btn-change', () => (this.mp.inRoom ? this.mp.showLobby() : this.toSelect()));
    ui.on('btn-resume', () => this.resume());
    ui.on('btn-quit', () => { this.ui.show('paused', false); this.#quitTraining(); this.toSelect(); });
    ui.on('btn-pause', () => this.pause());
    ui.on('btn-next', () => this.state === 'guest' ? this.mp.nextGuestFocus() : this.#nextFocus());
    ui.on('btn-tuner', () => this.tuner.toggle());
    ui.on('btn-tuner2', () => this.tuner.toggle());
    ui.on('btn-mute', () => { this.sound.setMuted(!this.sound.muted); ui.setMute(this.sound.muted); });
    ui.onOptions({
      ghosts: n => { this.ghostCount = n; },
      bots: on => { this.withBots = on; },
      skin: s => { this.skins[this.hero.id] = s; this.selectHero(this.hero.id, true); },
    }, { ghosts: this.ghostCount, bots: this.withBots });
    this.tuner = new Tuner(HEROES, () => this.hero?.id || 'masha');
    ui.minimapInit(this.world, this.world.half);
    this.mp = new Multiplayer(this);
    ui.wallet(wallet.get());

    addEventListener('keydown', e => {
      if (this.tuner.open) return;
      if (this.state === 'play' && (e.code === 'KeyP' || (e.code === 'Escape' && !document.pointerLockElement))) return this.pause();
      if (this.state === 'paused' && (e.code === 'KeyP' || e.code === 'Escape')) return this.resume();
      if (this.state === 'play' && this.mode === 'watch' && (e.code === 'Tab' || e.code === 'KeyN')) { e.preventDefault(); return this.#nextFocus(); }
      if (this.state === 'guest' && !e.repeat) return this.mp.guestKey(e.code.replace('Digit', '').replace('Key', ''));
      if (this.state !== 'play' || e.repeat) return;
      const key = e.code.replace('Digit', '').replace('Key', '');
      const pg = this.round.playerGhost;
      if (pg) {
        if (key === '1') this.#useAbility('mask-hero');
        if (key === '2') this.#useAbility('rage');
        const masked = this.round.maskAbilities(pg).find(a => a.key === key);
        if (masked) this.#useAbility(masked.id);
      } else if (this.round.player?.alive) {
        const ab = this.round.player.abilities.list.find(a => a.key === key);
        if (ab) this.round.player.abilities.use(ab.id);
      }
    });
    ui.onAbility(id => this.useAbility(id));
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.state === 'play') this.pause(); });
    addEventListener('resize', () => this.#resize());
    addEventListener('orientationchange', () => {
      this.#resize();
      setTimeout(() => this.#resize(), 180);
      setTimeout(() => this.#resize(), 600);
    });
    window.screen?.orientation?.addEventListener?.('change', () => this.#resize());
    window.visualViewport?.addEventListener('resize', () => this.#resize());
    addEventListener('pageshow', () => this.#resize());
    this.#resize();
    const unlock = () => this.sound.unlock();
    addEventListener('pointerdown', unlock);
    addEventListener('keydown', unlock);

    this.hero = HEROES[0];
    this.toSelect();
    ui.hideLoading();
    // ссылка с комнатой (?room=КОД) — сразу в лобби к друзьям
    const room = new URLSearchParams(location.search).get('room');
    if (room) this.mp.join(room);
    else if (!tutorialSeen()) setTimeout(() => { if (this.state === 'select') this.coach.start(); }, 900);

    this.last = performance.now();
    this.renderer.setAnimationLoop(() => this.#tick());
    window.__game = this;   // для отладки из консоли
  }

  // Сетка путей под размер героя (крупным нужны проходы пошире)
  navFor(radius) {
    const k = Math.round(radius * 10);
    if (!this.navs.has(k)) this.navs.set(k, new NavGrid(this.world, radius + 0.1));
    return this.navs.get(k);
  }

  addFx(f) { this.fx.push(f); }

  // Перестраиваем арену только при выборе другой карты. Герои из пула остаются,
  // а коллизии, боты, точки появления и миникарта получают новый мир.
  async activateMap(id) {
    if (id === this.activeMapId) return;
    if (id !== 'forest' && id !== 'village') throw new Error(`Неизвестная карта: ${id}`);
    const previousState = this.state;
    this.state = 'loading';
    this.ui.show('loading', true);
    try {
      this.ui.progress(0.12, id === 'forest' ? 'Пробуждаем Лес духов…' : 'Строим деревню духов…');
      await frame();
      if (id === 'forest') {
        this.ui.progress(0.24, 'Загружаем лесные материалы…');
        await loadForestAssets();
      } else await loadVillageAssets();
      const nextScene = new THREE.Scene();
      const nextMap = id === 'forest' ? buildForest(nextScene, { isMobile }) : buildVillage(nextScene, { isMobile }) || buildMap(nextScene, { isMobile });
      this.ui.progress(0.43, 'Прокладываем маршруты…');
      await frame();
      this.#releaseAll();
      const oldScene = this.scene;
      oldScene.remove(this.showGhost.root);
      for (const g of this.ghostPool) oldScene.remove(g.root);
      this.scene = nextScene;
      this.rain.setScene(nextScene);
      this.map = nextMap;
      this.world = nextMap.world;
      this.navs.clear();
      this.fireflies = buildFireflies(this.scene, isMobile ? 50 : CONFIG.graphics.fireflies, Math.min(56, this.world.half - 12));
      this.soot = buildSoot(this.scene, this.world, isMobile ? 10 : 16);
      const ghostNav = this.navFor(GHOST.radius);
      this.ghostPool = Array.from({ length: MAX_GHOSTS }, () => new Ghost(GHOST, this.world, this.scene, ghostNav, { heroes: HEROES }));
      this.cam.blockers = nextMap.cameraBlockers;
      this.pumpkins = new Pumpkins(this.scene, this.navFor(0.42));
      this.lanternView = new LanternView(this.scene, this.world);
      this.showLight = new THREE.PointLight(0xffe0b0, 14, 9, 1.6);
      this.scene.add(this.showLight, this.showGhost.root);
      this.round = new Round({
        world: this.world, scene: this.scene, navFor: r => this.navFor(r), ghosts: this.ghostPool, heroes: HEROES,
        makeChar: (h, s) => this.#acquire(h, s), makeProp: k => buildProp(k), sound: this.sound, cam: this.cam, navs: () => this.navs.values(), heroAbilities: HERO_ABILITIES,
        playerSpawn: nextMap.playerSpawn, botSpawns: nextMap.botSpawns, ghostSpawns: nextMap.ghostSpawns,
      });
      this.round.addFx = f => this.fx.push(f);
      this.ui.progress(0.68, 'Оживляем укрытия…');
      await frame();
      for (let i = 0; i < HEROES.length; i++) {
        this.navFor(HEROES[i].radius);
        this.ui.progress(0.68 + .06 * (i + 1), 'Прокладываем маршруты…');
        await frame();
      }
      this.ui.minimapInit(this.world, this.world.half);
      this.activeMapId = id;
      this.selectHero(this.hero.id);
      this.renderer.compile(this.scene, this.camera);
      // После смены уровня освобождаем буферы прежней статичной сцены.
      oldScene.traverse(o => o.geometry?.dispose());
    } finally {
      this.state = previousState;
      this.ui.hideLoading();
    }
  }

  // Картинки выбора: деревня — кадр из игры, лес — иллюстрация новой арены.
  #buildMapCards() {
    const shot = (from, to) => {
      this.camera.position.set(...from);
      this.camera.lookAt(...to);
      this.map.updateLights(new THREE.Vector3(to[0], 0, to[2]));
      this.renderer.render(this.scene, this.camera);
      return this.renderer.domElement.toDataURL('image/jpeg', 0.72);
    };
    this.maps = [
      { id: 'forest', name: 'Лес духов', icon: '🌲', ready: true, pic: '/forest-preview.svg' },
      { id: 'village', name: 'Деревня духов', icon: '🏠', ready: true, pic: shot([0, 5, 30], [0, 1.5, 4]) },
      { id: 'temple', name: 'Заброшенный храм', icon: '⛩️', ready: false, hard: true, pic: shot([0, 3.5, -8], [0, 2.4, -24]) },
    ];
    this.ui.buildMaps(this.maps, id => {
      const m = this.maps.find(x => x.id === id);
      if (!m.ready) { this.ui.toast(`«${m.name}» скоро откроется!`); return; }
      this.mapId = id; this.ui.pickMap(id); this.setGameMode(this.gameMode);
      this.coach?.signal('map');
    });
    this.ui.pickMap(this.mapId);
  }

  // Персонажи берутся из пула: не строим модели заново каждый раунд
  #acquire(hero, skin) {
    const key = hero.id + ':' + (hero.skins || hero.custom ? skin : '');
    const list = this.pool.get(key) || [];
    this.pool.set(key, list);
    let c = list.find(x => !x.inUse);
    if (!c) { c = hero.build(skin); list.push(c); }
    c.inUse = true;
    c.root.visible = true;
    c.root.scale.set(1, 1, 1);
    this.scene.add(c.root);
    this.acquired.push(c);
    return c;
  }

  #releaseAll() {
    this.lineupReady = false;
    this.lineup?.clear();
    for (const c of this.acquired) { c.inUse = false; this.scene.remove(c.root); }
    this.acquired = [];
    for (const a of this.agents) if (a.prop?.obj) this.scene.remove(a.prop.obj);
    this.round.agents = [];
    this.round.player = null;
    this.round.playerGhost = null;
    this.round.domes = [];
    for (const f of this.fx) while (f.update(99) !== false);   // досрочно гасим эффекты
    this.fx = [];
    this.pumpkins.clear();
    this.round.nature?.clear();
    this.round.nekoChar = null;
    for (const r of this.guestNature || []) r.removeFromParent();
    this.guestNature = [];
  }

  // ---------- Выбор героя ----------
  // Все герои стоят на улице в ряд; выбранный светится зелёной обводкой.
  selectHero(id, rebuild = false) {
    this.hero = id === GHOST.id ? GHOST : HEROES.find(h => h.id === id);
    if (rebuild || !this.lineupReady) this.#buildLineup();
    this.showGhost.setSkin?.(this.skins[GHOST.id] || 'classic');
    this.lineup.select(id);
    this.ui.showHero(this.hero, this.#skinFor(this.hero), this.#powersOf(this.hero), isTouch);
    if (this.hero.custom) this.ui.buildCreator(this.look, LOOK_OPTIONS, (k, v) => this.#setLook(k, v));
    this.cam.configure(this.hero.cam);
  }

  // Нажали на героя (на улице, на табличке или на карточке)
  #pickHero(id) {
    const changed = id !== this.hero?.id;
    this.selectHero(id);
    if (changed) {
      this.sound.unlock();
      this.sound.chime([523, 784]);
      if (id === 'brothers') this.sound.brothersCue?.('select');
      if (id === 'totoro') this.sound.totoroCue?.('select');
    }
    this.coach?.signal('pick');
  }

  #buildLineup() {
    this.#releaseAll();
    for (const g of this.ghostPool) { g.reveal(); g.reset(this.map.ghostSpawn); }
    const entries = HEROES.map(h => ({ hero: h, char: this.#acquire(h, this.#skinFor(h)) }));
    this.showGhost.root.visible = true;
    entries.push({ hero: GHOST, char: this.showGhost, ghost: true });
    this.lineup.build(this.scene, this.map.playerSpawn, entries);
    this.lineupReady = true;
  }

  // Суперспособности для правой панели: умения героя + рывок (у Безлика — его набор).
  #powersOf(h) {
    if (h.id === GHOST.id) return [...GHOST_ABILITIES.map(a => ({ ...a, power: a.id === 'dash' ? 'ghost-dash' : a.id })), { id: 'absorb', key: 'само', icon: '🍙', name: 'Поглощение' }];
    const list = (HERO_ABILITIES[h.id] || []).filter(a => a.id !== 'wave');
    return [...list, { id: 'dash', key: 'E', icon: '💨', name: 'Рывок' }];
  }

  lineupRect() { return this.state === 'select' && this.lineup ? this.lineup.screenRect(this.camera) : null; }

  // Мышка и палец на экране выбора: наведение подсвечивает, нажатие выбирает.
  #lineupPointer() {
    const c = this.canvas;
    let down = null;
    c.addEventListener('pointerdown', e => { if (this.state === 'select') down = { x: e.clientX, y: e.clientY }; });
    c.addEventListener('pointerup', e => {
      if (this.state !== 'select' || !down) return;
      const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
      down = null;
      if (moved > 12) return;
      const id = this.lineup.pick(e.clientX, e.clientY, this.camera);
      if (id) this.#pickHero(id);
    });
    c.addEventListener('pointermove', e => {
      if (this.state !== 'select' || e.pointerType !== 'mouse') return;
      const id = this.lineup.pick(e.clientX, e.clientY, this.camera);
      this.lineup.hover = id;
      c.style.cursor = id ? 'pointer' : '';
    });
    c.addEventListener('pointerleave', () => { if (this.lineup) this.lineup.hover = null; c.style.cursor = ''; });
  }

  #skinFor(h) { return h.custom ? JSON.stringify(this.look) : h.skins ? this.skins[h.id] || 'classic' : 'classic'; }

  // Редактор «Моего котика»: поменяли что-то — пересобираем героя
  #setLook(k, v) {
    this.look = { ...this.look, [k]: v };
    if (k === 'gender') this.look.hairStyle = LOOK_OPTIONS.hairStyle[v][0][0];
    saveLook(this.look);
    for (const key of [...this.pool.keys()]) if (key.startsWith('kid:')) this.pool.delete(key);
    this.sound.chime([660, 880]);
    this.selectHero('kid', true);
  }

  toSelect() {
    this.state = 'select';
    this.input.enabled = false;
    this.input.lookOnly = false;
    this.input.releasePointer();
    this.#quitTraining();
    document.getElementById('help-card')?.classList.add('hidden');
    this.ui.show('train-done', false);
    this.ui.mode('select', isTouch);
    this.selectHero(this.hero.id, true);
    this.sound.setTension(0);
    this.ui.wallet(wallet.get());
    this.showLight.intensity = 14;
    this.showLight.distance = 18;
    this.coach?.signal('select');
  }

  toMaps() {
    this.state = 'maps';
    this.ui.mode('maps', isTouch);
    this.setGameMode(this.gameMode);
    this.coach?.signal('maps');
  }

  setGameMode(mode) {
    this.gameMode = mode === 'delivery' ? 'delivery' : 'hide';
    for (const [id, value] of [['maps-mode-hide', 'hide'], ['maps-mode-delivery', 'delivery']])
      document.getElementById(id)?.classList.toggle('active', value === this.gameMode);
    const button = document.getElementById('btn-maps-go');
    if (button) button.innerHTML = `Начать ${this.gameMode === 'delivery' ? 'доставку' : 'прятки'} <span>›</span>`;
    const note = document.getElementById('maps-mode-note');
    const forestTip = this.mapId === 'forest' ? ' В тумане Безлик видит сквозь завесу, а бег слышит дальше. Иди шагом или присядь, чтобы не шуметь.' : '';
    if (note) note.textContent = this.gameMode === 'delivery'
      ? 'Фонари появляются в случайных местах. Подойди к фонарю — он подберётся автоматически, затем отнеси его к случайному храму на стороне Безликов. Каждый герой может доставить один фонарь.' + forestTip
      : 'Сначала спрячься. Когда Безлики выйдут, избегай их поисков и переживи догонялки.' + forestTip;
  }

  // ---------- Раунд ----------
  // training — тренировка на выбранной карте: подсказки-задания, один Безлик, без ботов
  async beginRound(mode, training = false) {
    if (this.roundStarting) return;
    this.roundStarting = true;
    this.#quitTraining();
    this.coach?.signal('round');
    document.getElementById('btn-room-restart')?.classList.add('hidden');
    try {
    this.mode = mode;
    this.sound.unlock();
    await this.activateMap(this.mapId);
    this.#releaseAll();
    this.showGhost.root.visible = false;
    this.showcase = null;
    this.input.reset();
    const hero = this.hero.id === GHOST.id ? HEROES[0] : this.hero;
    const withBots = training ? mode === 'hunter' : this.mp.isHost ? this.mp.net.bots : this.withBots;
    if (this.mp.isHost) this.gameMode = this.mp.net.gameMode;
    this.round.start({ mode, gameMode: training ? 'hide' : this.gameMode, hero, skin: this.#skinFor(hero), skins: this.skins, ghosts: training ? 1 : this.ghostCount, withBots, remotes: training ? [] : this.mp.remotes() });
    this.mp.hostStarted();
    this.pumpkins.spawn(CONFIG.round.pumpkins);
    this.focus = 0;
    this.cam.yaw = mode === 'hunter' ? Math.PI : 0; this.cam.pitch = 0.3;
    const follow = this.#focusTarget();
    this.#configureCam(follow);
    this.cam.snap(this.#posOf(follow));
    this.state = 'play';
    this.rain.stop();
    document.getElementById('hud').classList.toggle('training', training);
    this.input.enabled = true;
    this.input.lookOnly = mode === 'watch';
    this.ui.mode('play', isTouch, mode);
    this.ui.phase(this.round.phase);
    this.#abilityBar();
    this.#aliveHud();
    this.ui.pumpkins(0);
    this.showLight.intensity = 0;
    this.showLight.distance = 9;
    if (training) {
      this.training = new Training(this, isTouch);
      clearTimeout(this.ui.hintTimer);
      document.getElementById('hint').style.opacity = 0;
    }
    } catch (e) {
      console.error('Не удалось открыть карту', e);
      this.ui.hideLoading();
      this.ui.toast('Не удалось открыть карту. Попробуй выбрать её ещё раз.');
    } finally { this.roundStarting = false; }
  }

  // Невидимость — полупрозрачный Тоторо; полёт — НэкоБус под ним
  #totoroLook(a, dt, t) {
    const ghostly = a.vanishT > 0;
    if (a.ghostly !== ghostly) { a.ghostly = ghostly; setGhostly(a.char.root, ghostly ? 0.28 : 1); }
    const riding = a.ctrl.rideT > 0;
    if (riding && !a.rideChar) a.rideChar = this.#acquire(HEROES.find(h => h.id === 'catbus'), 'classic');
    if (a.rideChar) {
      a.rideChar.root.visible = riding;
      if (riding) {
        const r = a.rideChar.root;
        r.position.set(a.ctrl.pos.x, a.ctrl.pos.y - 1.55, a.ctrl.pos.z);
        r.rotation.y = a.ctrl.yaw;
        a.rideChar.update(dt, { t, speed: a.ctrl.speed * 1.2, grounded: true, landed: false, action: null });
      }
    }
  }

  // Тоторо чувствует, когда друга ловят: окошко с видом на друга и выбор — помочь или нет
  #helpCard() {
    const R = this.round, me = R.player;
    const card = document.getElementById('help-card');
    const can = me?.alive && me.hero.id === 'totoro' && !this.training && me.abilities.ready('nekohelp');
    const need = can ? R.helpNeeded(me) : null;
    if (need && this.helpSkip === need.ally && performance.now() < this.helpSkipUntil) { card.classList.add('hidden'); this.helpAlly = null; return; }
    this.helpAlly = need?.ally || null;
    this.helpGhost = need?.ghost || null;
    card.classList.toggle('hidden', !need);
    if (need) {
      const name = document.getElementById('hc-name');
      if (name.textContent !== need.ally.name) { name.textContent = need.ally.name; this.sound.totoroCue?.('alert'); }
    }
  }

  #renderHelpInset() {
    const ally = this.helpAlly;
    const box = document.querySelector('#help-card .hc-view');
    if (!ally || !box || document.getElementById('help-card').classList.contains('hidden')) return;
    const rect = box.getBoundingClientRect();
    if (!rect.width) return;
    const cam = this.insetCamera;
    cam.aspect = rect.width / rect.height;
    cam.updateProjectionMatrix();
    const p = ally.ctrl.pos, g = this.helpGhost?.pos || p;
    const mx = (p.x + g.x) / 2, mz = (p.z + g.z) / 2;
    const dx = p.x - g.x, dz = p.z - g.z, len = Math.hypot(dx, dz) || 1;
    cam.position.set(mx - dz / len * 7, Math.max(p.y, g.y) + 6.5, mz + dx / len * 7);
    cam.lookAt(mx, p.y + 1, mz);
    const w = this.renderer.domElement.clientWidth || innerWidth, h = this.renderer.domElement.clientHeight || innerHeight;
    const y = h - rect.bottom;
    this.renderer.setScissorTest(true);
    this.renderer.setViewport(rect.left, y, rect.width, rect.height);
    this.renderer.setScissor(rect.left, y, rect.width, rect.height);
    try { this.renderer.render(this.scene, cam); }
    finally { this.renderer.setScissorTest(false); this.renderer.setViewport(0, 0, w, h); }
  }

  trainingFinished(ok) {
    this.training = null;
    this.state = 'result';
    this.input.enabled = false;
    this.input.releasePointer();
    this.sound.setTension(0);
    ok ? this.sound.win() : this.sound.lose();
    document.getElementById('td-emoji').textContent = ok ? '🎉' : '👺';
    document.getElementById('td-title').textContent = ok ? 'Обучение пройдено!' : 'Безлик тебя поймал!';
    document.getElementById('td-text').textContent = ok
      ? `Ты умеешь бегать, прыгать, прятаться и знаешь все суперспособности героя «${this.hero.name}». Теперь — настоящая игра!`
      : 'Ничего страшного — так все учатся. Сиди в кусте тихо и не беги внутри. Попробуешь ещё раз?';
    this.ui.mode('result', isTouch);
    this.ui.show('result', false);
    this.ui.show('train-done', true);
  }

  #quitTraining() {
    if (!this.training) return;
    this.training.close();
    this.training = null;
  }

  #abilityBar() {
    const R = this.round;
    if (R.playerGhost) { this.ghostBarHero = R.playerGhost.disguise?.hero?.id || null; this.ui.abilityBar([...GHOST_ABILITIES, ...R.maskAbilities(R.playerGhost)]); }
    else if (R.player) this.ui.abilityBar(R.player.abilities.list);   // рывок — круглая кнопка справа
    else this.ui.abilityBar([]);
    document.getElementById('abil-bar').classList.toggle('hidden', this.mode === 'watch');
  }

  #useAbility(id) {
    if (this.state === 'guest') return this.mp.guestAbility(id);
    const R = this.round, pg = R.playerGhost;
    this.training?.onUse(id);
    if (id === 'dash') { this.input.dashQueued = true; return; }
    if (pg) {
      if (id === 'fly') { this.input.jumpQueued = true; return; }
      const res = R.ghostAbility(pg, id);
      if (res === 'wait') this.ui.toast('Сначала дождись своего выхода');
      else if (res === 'cd') this.ui.toast('Ещё копится…');
      else if (res === 'used') this.ui.toast('Теневой гнев — только раз за раунд');
      else if (id === 'mask-hero' && pg.disguise?.hero) this.ui.toast(`Ты — ${pg.disguise.hero.name}! Его умения: клавиши 4–7`);
      this.#abilityBar();
      return;
    }
    if (R.player?.alive) R.player.abilities.use(id);
  }

  // Публичная точка входа нужна гостевому сетевому режиму, чтобы восстановить
  // локальный обработчик кнопок после выхода из комнаты.
  useAbility(id) { this.#useAbility(id); }

  #aliveHud() {
    const R = this.round;
    const n = R.agents.filter(a => a.alive).length;
    this.ui.alive(n, R.agents.length, R.phase === 'delivery' ? `🏮 Доставлено ${R.delivery.delivered}/${R.delivery.goal} · героев` : R.phase === 'hide' ? 'Спрятались' : 'Убегают');
  }

  // За кем смотрит камера
  #focusTarget() {
    const R = this.round;
    if (R.player?.alive) return R.player;
    if (R.playerGhost) return R.playerGhost;
    const heroes = R.agents.filter(a => a.alive);
    const ghosts = R.activeGhosts.filter(g => g.state !== 'hidden');
    const list = this.mode !== 'watch' && !R.player?.alive ? (ghosts.length ? ghosts : heroes) : (heroes.length ? heroes : ghosts);
    return list[this.focus % Math.max(1, list.length)] || R.agents[0] || R.activeGhosts[0];
  }
  #configureCam(f) {
    if (f?.splitActive) this.cam.configure({ distance: 4.5, height: 1.18, side: 0.35 });
    else if (f?.hero && f.prop) {
      // Когда камера следует за замаскированным героем, обычная точка взгляда
      // оказывается внутри ящика/куста. Поднимаем её над самым высоким предметом.
      const propTop = { crate: 1.05, lantern: 1.9, pumpkin: 1.0, barrel: 1.1, bush: 1.35 }[f.prop.kind?.id] || 1.5;
      this.cam.configure({ ...f.hero.cam, height: Math.max(f.hero.cam.height || 1.5, propTop + 0.55) });
    }
    else if (f?.hero) this.cam.configure(f.hero.cam);
    else this.cam.configure(GHOST.cam);
  }
  #nextFocus() {
    const observing = this.mode === 'watch' || (!this.round.player?.alive && !this.round.playerGhost);
    if (!observing) return;
    this.focus++;
    this.#configureCam(this.#focusTarget());
  }
  #posOf(f) { return f ? f.ctrl.pos : this.map.playerSpawn; }

  #placeFirstPerson(target, camera) {
    if (!target?.ctrl) return;
    const p = target.ctrl.pos;
    const height = target.hero?.height ?? target.def?.height ?? 1.7;
    const eye = height * 0.84;
    const yaw = target.ctrl.yaw;
    camera.position.set(p.x, p.y + eye, p.z);
    camera.lookAt(p.x + Math.sin(yaw), p.y + eye - 0.03, p.z + Math.cos(yaw));
  }

  firstPerson(target, camera = this.camera) { this.#placeFirstPerson(target, camera); }

  #firstPersonModel(target) {
    return target?.prop?.obj || target?.propObj || target?.disguiseRoot || target?.disguise?.char?.root || target?.root || target?.char?.root || null;
  }

  #fogVisionForView() {
    if (this.world.theme !== 'forest') return { ghost: false, strength: 0 };
    let ghost = false, pos = null;
    if (this.state === 'play') {
      const focus = this.#focusTarget();
      pos = focus?.ctrl?.pos;
      ghost = !!this.round?.playerGhost;
    } else if (this.state === 'guest') {
      const mp = this.mp, gv = mp?.guest;
      const me = gv?.me?.(mp?.net?.id);
      const ghosts = (gv?.snap?.g || []).some(row => row[5] > 0);
      ghost = me?.kind === 'ghost' || (!me && ghosts);
      pos = mp?.focusPos;
    }
    return { ghost, strength: !ghost && pos ? this.world.spiritFogStrength?.(pos.x, pos.z) || 0 : 0 };
  }

  #renderGhostInset() {
    const panel = document.getElementById('ghost-view');
    const ghost = this.ghostViewTarget;
    if (!ghost || panel.classList.contains('hidden')) return;
    const rect = panel.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    this.insetCamera.aspect = rect.width / rect.height;
    this.insetCamera.updateProjectionMatrix();
    this.#placeFirstPerson(ghost, this.insetCamera);
    const w = this.renderer.domElement.clientWidth || innerWidth;
    const h = this.renderer.domElement.clientHeight || innerHeight;
    const x = rect.left;
    const y = h - rect.bottom;
    this.renderer.setScissorTest(true);
    this.renderer.setViewport(x, y, rect.width, rect.height);
    this.renderer.setScissor(x, y, rect.width, rect.height);
    const model = this.#firstPersonModel(ghost);
    const wasVisible = model?.visible;
    if (model) model.visible = false;
    const mainFogVision = this.#fogVisionForView();
    this.world.setVisionFog?.({ ghost: this.world.theme === 'forest' });
    try {
      this.renderer.render(this.scene, this.insetCamera);
    } finally {
      this.world.setVisionFog?.(mainFogVision);
      if (model) model.visible = wasVisible;
      this.renderer.setScissorTest(false);
      this.renderer.setViewport(0, 0, w, h);
    }
  }

  pause() {
    if (this.state !== 'play') return;
    this.state = 'paused';
    this.input.enabled = false;
    this.input.releasePointer();
    this.ui.show('paused', true);
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = 'play';
    this.input.enabled = true;
    this.last = performance.now();
    this.ui.show('paused', false);
  }

  #end(r) {
    this.state = 'result';
    this.input.enabled = false;
    this.input.releasePointer();
    this.sound.setTension(0);
    const good = r.gameMode === 'delivery' ? (r.mode === 'hunter' ? !r.heroesWon : r.heroesWon)
      : r.mode === 'watch' ? r.alive.length > 0 : (r.mode === 'hunter' || r.playerWasGhost) ? r.alive.length === 0 : !r.playerCaughtInChase;
    good ? this.sound.win() : this.sound.lose();
    if (r.mode !== 'watch' && r.earn) this.ui.wallet(wallet.add(r.earn));
    else r.earn = 0;
    this.ui.result(r);
    this.ui.mode('result', isTouch);
    this.mp.hostEnd(r);
  }

  // ---------- Кадр ----------
  #tick() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.t += dt;
    const t = this.t;
    if (this.state === 'play' && this.round?.rainT > 0 && !this.rain.active) this.rain.start(this.round.rainT);
    this.rain.update(dt, this.camera);

    if (this.state === 'play') this.#play(dt, t);
    else if (this.state === 'guest') this.mp.guestTick(dt, t);
    else if (this.state === 'select' || this.state === 'maps') this.#showcase(dt, t);
    else if (this.state === 'result') {
      for (const a of this.agents) if (a.alive && a.char) a.char.update(dt, { ...a.ctrl.animState(t), speed: 0, grounded: true, landed: false, action: a.abilities.pose() });
      for (const g of this.ghosts) if (g.state !== 'hidden' && !g.disguised) g.char.update(dt, { t, speed: 0, mode: 'hunt', appear: 1 });
    }
    if (this.state !== 'paused') this.fx = this.fx.filter(f => f.update(dt) !== false);

    const center = this.state === 'play' ? this.#posOf(this.#focusTarget()) : this.state === 'guest' ? this.mp.focusPos || this.map.playerSpawn : this.map.playerSpawn;
    this.map.updateLights(center);
    this.map.updateVisuals?.(t, this.camera.position);
    if (this.state === 'play') this.lanternView?.update(this.round.delivery, this.round.agents, t);
    if (this.state === 'play') this.round.nature?.cameraFade(this.camera.position);
    else if (this.state === 'guest') {
      const snap = this.mp.guest?.snap;
      this.lanternView?.update(snap?.d, (snap?.a || []).map(a => ({ key: a[0], ctrl: { pos: { x: a[1], y: a[2], z: a[3] } } })), t);
    } else if (this.lanternView) this.lanternView.root.visible = false;
    this.fireflies(t);
    this.soot(dt, t, center);
    const firstPersonModel = this.#firstPersonModel(this.mainFirstPersonTarget);
    const firstPersonVisible = firstPersonModel?.visible;
    if (firstPersonModel) {
      firstPersonModel.visible = false;
    }
    const fogVision = this.#fogVisionForView();
    this.world.setVisionFog?.(fogVision);
    try {
      this.renderer.render(this.scene, this.camera);
      if (this.state === 'select' || this.state === 'maps') this.lineup?.renderOutline(this.renderer, this.camera, t);
    } finally {
      this.world.setVisionFog?.(fogVision);
      if (firstPersonModel) firstPersonModel.visible = firstPersonVisible;
    }
    this.#renderGhostInset();
    if (this.state === 'play') this.#renderHelpInset();
  }

  #showcase(dt, t) {
    const free = this.state === 'select' ? this.ui.freeRect() : { x: 0, y: 0, w: innerWidth, h: innerHeight };
    this.lineup.update(dt, t, this.camera, free);
    const p = this.map.playerSpawn;
    this.showLight.position.set(p.x, p.y + 3.2, p.z + 4.5);
  }

  #play(dt, t) {
    const R = this.round;
    const C = CONFIG;
    const inp = this.input.read();

    // Камера
    let follow = this.#focusTarget();
    const firstPersonSpectator = this.mode !== 'watch' && !R.player?.alive && !R.playerGhost;
    if (firstPersonSpectator) {
      this.#placeFirstPerson(follow, this.camera);
      document.getElementById('touch').classList.add('hidden');
    } else if (this.mode === 'watch' || !(R.player?.alive || R.playerGhost)) {
      const want = follow.ctrl.yaw + Math.PI;
      if (Math.abs(inp.lookX) + Math.abs(inp.lookY) < 1e-5) this.cam.yaw += Math.atan2(Math.sin(want - this.cam.yaw), Math.cos(want - this.cam.yaw)) * Math.min(1, dt * 1.2);
      this.cam.update(dt, this.#posOf(follow), inp);
    } else {
      this.cam.update(dt, this.#posOf(follow), inp);
    }

    // Логика раунда
    const training = this.training;    // тренировка может закончиться посреди списка событий
    training?.preStep();
    R.step(dt, t, inp, this.cam.yaw);
    for (const e of R.events) if (!training?.onEvent(e)) this.#onEvent(e);
    R.events.length = 0;
    if (this.training) this.training.update(dt);
    this.#helpCard();
    this.mp.hostTick(dt);
    if (this.state !== 'play') return;
    document.getElementById('btn-room-restart')?.classList.toggle('hidden',
      !(this.mp.isHost && this.mode !== 'watch' && R.player && !R.player.alive && R.phase !== 'over'));
    follow = this.#focusTarget();
    this.mainFirstPersonTarget = firstPersonSpectator ? follow : null;

    // В укрытии герой может подсматривать за ближайшим Безликом от его лица.
    const player = R.player;
    this.ui.fogHint(this.world.theme === 'forest' && !!player?.alive && !R.playerGhost
      && !!this.world.inSpiritFog?.(player.ctrl.pos.x, player.ctrl.pos.z), !!player?.ctrl.running);
    const crouchButton = document.querySelector('#touch .btn-crouch');
    if (crouchButton) crouchButton.title = player?.ctrl.swimming
      ? (player.ctrl.diving ? 'Всплыть (C)' : 'Нырнуть и скрыться (C)')
      : 'Присесть (C)';
    const hideViewGhost = player?.alive && R.phase === 'hide'
      && (player.hidden || player.prop || player.ctrl.crouching)
      ? R.activeGhosts.filter(g => g.state !== 'hidden').sort((a, b) => a.pos.distanceTo(player.ctrl.pos) - b.pos.distanceTo(player.ctrl.pos))[0]
      : null;
    this.ghostViewTarget = hideViewGhost || null;
    document.getElementById('ghost-view').classList.toggle('hidden', !this.ghostViewTarget);
    const observing = this.mode === 'watch' || firstPersonSpectator;
    document.getElementById('watch-bar').classList.toggle('hidden', !observing);
    document.getElementById('abil-bar').classList.toggle('hidden', observing);
    if (firstPersonSpectator) document.getElementById('btn-next').textContent = 'Другой Безлик ›';
    else if (this.mode === 'watch') document.getElementById('btn-next').textContent = 'Следующий ›';
    if (!firstPersonSpectator) document.getElementById('touch').classList.toggle('hidden', this.mode === 'watch');

    // Картинка героев
    for (const a of R.agents) {
      if (!a.alive || !a.char) continue;
      const root = a.char.root;
      root.visible = !a.prop;
      root.position.copy(a.ctrl.pos);
      root.rotation.y = a.ctrl.yaw;
      root.scale.y += ((a.ctrl.crouching ? 0.62 : 1) - root.scale.y) * Math.min(1, dt * 14);   // присел — сжался
      if (a.hero.id === 'totoro') this.#totoroLook(a, dt, t);
      a.char.update(dt, { ...a.ctrl.animState(t), action: a.abilities.pose(), riding: a.ctrl.rideT > 0,
        split: a.splitActive ? { heads: a.splitHeads.map(h => ({ x: h.ctrl.pos.x, y: h.ctrl.pos.y,
          z: h.ctrl.pos.z, yaw: h.ctrl.yaw, speed: h.ctrl.speed, alive: h.alive })) } : null });
    }

    // Тыковки: собирает игрок (героем или Безликом)
    // (в совместной игре — и живые игроки с других устройств)
    const me = R.player?.alive ? R.player : R.playerGhost;
    const collectors = [me, ...R.agents.filter(a => a.remote && a.alive), ...R.activeGhosts.filter(g => g.remote && g.active)].filter(Boolean);
    for (const c of this.pumpkins.update(dt, t, collectors)) {
      if (c === me && R.playerGhost?.feed()) this.#onEvent({ type: 'absorb', ghost: R.playerGhost, n: R.playerGhost.feedN });
      if (c === me) { R.stats.pumpkins++; this.ui.pumpkins(R.stats.pumpkins); this.sound.chime([784, 1046, 1318]); }
      else this.mp.hostPumpkin(c.remote);
    }

    // Звуки игрока
    if (me) {
      const p = me.ctrl;
      if (p.jumped) this.sound.jump();
      if (p.dashed) this.sound.chime([880, 1320]);
      if (p.landed && p.landSpeed < -8) { this.sound.land(-p.landSpeed); if (p.stagger > 0) this.cam.shake = Math.max(this.cam.shake, 0.5); }
      if (p.grounded && p.speed > 1 && !p.crouching) {
        this.stepDist = (this.stepDist || 0) + p.speed * dt;
        if (this.stepDist > (p.running ? 2.2 : 1.6)) { this.stepDist = 0; this.sound.step(); }
      }
    }

    // Подсказки и напряжение
    const heroView = R.player?.alive ? R.player : (this.mode === 'watch' && follow.hero && follow.alive !== undefined ? follow : null);
    const near = heroView ? this.#nearestGhost(heroView.ctrl.pos) : null;
    const dist = near ? near.d : 99;
    const sees = !!(near && near.g.sees && (near.g.target === heroView || near.g.target?.headOwner === heroView) && !near.g.disguised);
    const headLeft = Math.ceil(C.round.headStart - R.t);
    if (R.phase === 'delivery') {
      const d = R.delivery;
      const carried = d.lanterns.find(l => l.carrier === R.player?.key);
      const carrying = !!carried;
      const lanternCarrier = d.lanterns.find(l => l.carrier && l.carrier !== R.player?.key);
      const carrierAgent = lanternCarrier && R.agents.find(a => a.key === lanternCarrier.carrier);
      const available = d.lanterns.filter(l => !l.carrier && !l.delivered);
      const targetLantern = available.sort((a, b) => Math.hypot(a.x - (R.player?.ctrl.pos.x || 0), a.z - (R.player?.ctrl.pos.z || 0))
        - Math.hypot(b.x - (R.player?.ctrl.pos.x || 0), b.z - (R.player?.ctrl.pos.z || 0)))[0];
      const nearLantern = R.player && !R.playerGhost && targetLantern
        && Math.hypot(R.player.ctrl.pos.x - targetLantern.x, R.player.ctrl.pos.z - targetLantern.z) < 3;
      const guide = R.player?.alive ? objectiveGuide(R.player.ctrl.pos, carrying ? d.shrine : targetLantern || d.shrine, this.cam.yaw) : '';
      this.ui.status(R.playerGhost ? `Помешай доставке! Фонари: ${d.delivered}/${d.goal}`
        : carrying ? `Святилище ${guide} · неси фонарь! ${d.delivered}/${d.goal}`
        : nearLantern ? 'Подойди к фонарю — он подберётся автоматически!'
        : carrierAgent ? `${carrierAgent.name} несёт фонарь — ищи следующий или помоги ему`
        : targetLantern ? `🏮 Фонарь ${guide} · подойди и подбери · ${d.delivered}/${d.goal}`
        : `🏮 Доставлено ${d.delivered}/${d.goal} · помоги команде`, 'calm');
    } else if (this.training && R.spawned === 0 && !R.playerGhost) {
      this.ui.status('Тренировка: Безлик пока спит дома', 'calm');
    } else if (R.phase === 'hide' && R.spawned === 0) {
      if (R.playerGhost) this.ui.status(`Закрой глаза и считай: ${headLeft}… Герои прячутся!`, 'calm');
      else this.ui.status(`Безлики выйдут через ${headLeft} — прячься!`, 'calm');
    } else if (R.playerGhost) {
      const pg = R.playerGhost;
      const left = R.agents.filter(a => a.alive).length;
      this.ui.status(pg.disguised ? `Ты замаскирован${pg.disguise.prop ? ` под ${pg.disguise.prop.name}` : ` под «${pg.disguise.hero.name}»`} — подкрадись!` : R.phase === 'hide' ? `Найди спрятавшихся! Осталось: ${left}` : `Догони всех! Осталось: ${left}`, '');
    } else if (this.mode === 'watch') this.ui.status(follow.hero && follow.alive !== undefined ? `Смотрим: ${follow.name}${follow.hidden ? ' · в укрытии' : ''}${follow.prop ? ` · притворился: ${follow.prop.kind.name}` : ''}` : 'Смотрим: Безлик', sees ? 'danger' : '');
    else if (!R.player?.alive) this.ui.status('Взгляд Безлика: смотри, как он ищет героев', '');
    else if (R.player.splitActive) this.ui.status(`Три головы: ${R.player.splitHeads.filter(h => h.alive).length}/3 · прыгай и уходи от Безлика!`, sees ? 'danger' : 'calm');
    else if (sees) this.ui.status('Он тебя видит! Беги!', 'danger');
    else if (R.player.protected) this.ui.status('Ты под куполом — здесь не поймают', 'calm');
    else if (R.player.prop) this.ui.status(`Ты — ${R.player.prop.kind.name}. Не шевелись! (Q — снова стать собой)`, 'calm');
    else if (near && near.g.state === 'hunt' && near.g.target === R.player && !near.g.disguised) this.ui.status('Безлик идёт по следу…', '');
    else if (this.world.inSpiritFog?.(R.player.ctrl.pos.x, R.player.ctrl.pos.z)) this.ui.status('Безлик видит сквозь туман — шагай тихо', 'calm');
    else this.ui.status(R.player.hidden ? 'Тихо… он тебя ищет' : R.phase === 'chase' ? 'Догонялки! Не попадись!' : 'Безлики ищут. Спрячься или замаскируйся!', 'calm');
    const k = R.spawned && heroView ? THREE.MathUtils.clamp(1 - dist / 16, 0, 1) : 0;
    this.sound.setTension(this.mode === 'watch' ? k * 0.5 : k);
    this.ui.vignette(k * (sees ? 1 : 0.6));
    const hudC = me ? me.ctrl : follow.ctrl;
    this.ui.hud({ left: R.left, stamina: hudC.stamina, tired: hudC.exhausted, hidden: me?.hidden });
    this.ui.mmLabel(R.phase === 'delivery' ? '🏮 Найди фонарь<br>и святилище' : R.phase === 'hide' && R.spawned === 0 && !R.playerGhost ? 'Найди место<br>и спрячься!' : '');
    this.#minimap(follow);
    this.#cooldowns();
  }

  #onEvent(e) {
    const R = this.round;
    this.mp.hostEvent(e);
    if (e.type === 'ghostSpawn') {
      this.sound.ghostAppear();
      this.cam.shake = Math.max(this.cam.shake, 0.6);
      if (e.ghost.isPlayer) this.ui.toast('Ты вышел на охоту! Ищи!');
      else if (e.i === 0) this.ui.toast(R.phase === 'hide' ? 'Безлики вышли искать!' : 'Догонялки начались!');
    } else if (e.type === 'lanternPickup') {
      this.ui.toast(e.agent.isPlayer ? 'Фонарь у тебя! Неси к голубому лучу святилища.' : `${e.agent.name} несёт фонарь!`);
      this.sound.chime([660, 880]);
    } else if (e.type === 'lanternDropped') {
      this.ui.toast('Безлик выбил фонарь! Подберите его снова.');
    } else if (e.type === 'lanternDelivered') {
      this.ui.toast(`Фонарь доставлен! ${e.count}/${e.goal}`);
      this.sound.chime([784, 1046, 1318]);
      this.#aliveHud();
    } else if (e.type === 'split') {
      if (e.agent.isPlayer) {
        this.#configureCam(e.agent);
        this.cam.snap(e.agent.ctrl.pos);
        this.ui.toast('Головы разбежались! У тебя три жизни.');
      }
      this.addFx(burst(this.scene, e.agent.ctrl.pos.x, e.agent.ctrl.pos.z, 3, 0xa774ff));
      this.sound.brothersCue?.('resist');
    } else if (e.type === 'headHop') {
      if (e.agent.isPlayer) this.sound.brotherHop?.(e.index);
    } else if (e.type === 'headCaught') {
      if (e.agent.isPlayer) this.ui.toast(e.remaining ? `Голову поймали! Осталось ${e.remaining}/3.` : 'Все три головы пойманы!');
      else this.ui.toast(`Безлик поймал голову ${e.agent.name}. Осталось ${e.remaining}/3.`);
      this.addFx(burst(this.scene, e.pos.x, e.pos.z, 1.8, 0xff4b76));
    } else if (e.type === 'headSwitch') {
      if (e.agent.isPlayer) {
        this.#configureCam(e.agent);
        this.cam.snap(e.agent.ctrl.pos);
        this.ui.toast(`Теперь ты управляешь головой ${e.index + 1}!`);
      }
    } else if (e.type === 'caught') {
      const a = e.agent;
      this.addFx(burst(this.scene, a.ctrl.pos.x, a.ctrl.pos.z, 2.5, 0x9a5ae0));
      this.#aliveHud();
      if (a.isPlayer) {
        this.cam.shake = 1;
        if (e.phase === 'delivery') this.ui.toast('Безлик поймал тебя! Смотри за командой.');
        else if (e.phase === 'hide') {
          const first = R.caughtOrder.filter(c => c.phase === 'hide').length === 1;
          this.ui.toast(a.eliminatedByHeads ? 'Все три головы пойманы. Ты выбыл из матча.'
            : first ? 'Тебя нашли первым — в догонялках ТЫ будешь Безликом!' : 'Тебя нашли! Подожди догонялок.');
          this.focus = 0;
          this.#configureCam(this.#focusTarget());
        }
      } else this.ui.toast(e.byPlayer ? `Попался: ${a.name}! 🎃+${e.phase === 'hide' ? CONFIG.round.reward.found : CONFIG.round.reward.catch}` : `${e.phase === 'hide' ? 'Нашли' : 'Догнали'}: ${a.name}`);
      if (a.isPlayer && e.phase === 'chase') { this.round.phase = 'over'; this.#end(R.result()); }
    } else if (e.type === 'resisted') {
      const a = e.agent;
      this.addFx(stubbornGlow(this.scene, a.ctrl.pos.x, a.ctrl.pos.y, a.ctrl.pos.z));
      this.ui.toast(a.isPlayer ? 'Три Брата вырвались! Упрямство потрачено до следующей фазы.' : `${a.name} вырвались из поимки!`);
    } else if (e.type === 'poof') {
      this.addFx(poof(this.scene, e.x, e.y, e.z, e.ghost ? 0xc9a8ff : 0xfff1d6));
      if (e.agent && e.agent === this.#focusTarget()) {
        this.#configureCam(e.agent);
        this.cam.snap(this.#posOf(e.agent));
      }
      if (e.agent?.isPlayer && e.kind) this.ui.toast(`Ты превратился: ${e.kind}!`);
    } else if (e.type === 'phase') {
      this.ui.phase('chase');
      this.sound.ghostAppear();
      this.cam.shake = 0.8;
      if (e.newGhostIsPlayer) this.ui.toast('Тебя нашли первым — теперь ТЫ Безлик! Догоняй всех!');
      else if (R.mode === 'hunter') this.ui.toast('Догонялки! С тобой ещё 3 Безлика — лови всех!');
      else this.ui.toast(`Догонялки! Безликом стал(а): ${e.newGhostName}. Беги!`);
      this.#abilityBar();
      this.#aliveHud();
      const f = this.#focusTarget();
      this.#configureCam(f);
      this.cam.snap(this.#posOf(f));
    } else if (e.type === 'nature') {
      const names = { oak: 'Вырос Великий дуб! Залезай по стволу наверх', hut: 'Готов лесной домик — внутри тебя не видно', };
      if (e.agent.isPlayer) this.ui.toast(names[e.kind]);
    } else if (e.type === 'natureFull') {
      if (e.agent.isPlayer) this.ui.toast(e.id === 'oak' ? 'Дубов уже 2 — больше нельзя' : 'Домиков уже 2 — больше нельзя');
    } else if (e.type === 'natureNoRoom') {
      if (e.agent.isPlayer) this.ui.toast('Тут тесно — выйди на открытое место');
    } else if (e.type === 'noHelpNeeded') {
      if (e.agent.isPlayer) this.ui.toast('Сейчас никого не ловят — НэкоБус отдыхает');
    } else if (e.type === 'nekoHelp') {
      this.helpAlly = null;
      if (e.agent.isPlayer) this.ui.toast(`НэкоБус помчался выручать: ${e.ally?.name || 'друг'}!`);
      else if (e.ally?.isPlayer) this.ui.toast('Тоторо прислал НэкоБуса тебе на помощь! Беги!');
      this.addFx(burst(this.scene, e.x, e.z, 2.2, 0xffc860));
    } else if (e.type === 'rain') {
      this.ui.toast(e.agent.isPlayer ? 'Дождь! Безлики промокли: медленные и еле летают' : 'Тоторо вызвал дождь — Безлики промокли!');
    } else if (e.type === 'rage') {
      this.sound.ghostRage?.();
      this.cam.shake = Math.max(this.cam.shake, 0.9);
      this.addFx(burst(this.scene, e.ghost.pos.x, e.ghost.pos.z, CONFIG.ghost.rage.radius * 0.5, 0x8a1c2a));
      this.ui.toast(e.ghost.isPlayer ? `ТЕНЕВОЙ ГНЕВ! Из укрытий выскочило: ${e.flushed}` : 'Безлик в гневе! Все выскочили из кустов — бегите!');
    } else if (e.type === 'rageFlush') {
      if (e.agent.isPlayer && e.hiding) this.ui.toast('Безлик выгнал тебя из укрытия — беги!');
    } else if (e.type === 'absorb') {
      if (e.ghost.isPlayer) this.ui.toast(`Поглощение: ты подрос и ускорился (${e.n}/${CONFIG.ghost.absorb.max})`);
    } else if (e.type === 'ghostMaskAbility') {
      this.addFx(burst(this.scene, e.x, e.z, 2.4, 0x9a5ae0));
      this.sound.chime([392, 523, 466]);
    } else if (e.type === 'minis') {
      if (e.agent.isPlayer) this.ui.toast('Тю и Тиби уводят Безликов за собой!');
    } else if (e.type === 'end') {
      this.#end(e.result);
    }
  }

  #minimap(follow) {
    const R = this.round;
    const me = follow;
    const dots = [];
    for (const p of this.pumpkins.list) dots.push({ x: p.x, z: p.z, kind: 'pumpkin' });
    if (R.delivery) {
      for (const lantern of R.delivery.lanterns) if (!lantern.delivered && !lantern.carrier)
        dots.push({ x: lantern.x, z: lantern.z, kind: 'lantern' });
      dots.push({ x: R.delivery.shrine.x, z: R.delivery.shrine.z, kind: 'shrine' });
    }
    const hunter = !!R.playerGhost;
    for (const a of R.agents) {
      if (!a.alive) continue;
      if (a === me) continue;
      if (!hunter || this.mode === 'watch') dots.push({ x: a.ctrl.pos.x, z: a.ctrl.pos.z, kind: 'ally' });
    }
    if (me?.splitActive) for (const h of me.splitHeads) if (h.alive && h.headIndex !== me.activeHead)
      dots.push({ x: h.ctrl.pos.x, z: h.ctrl.pos.z, kind: 'ally' });
    for (const g of R.activeGhosts) {
      if (g.state === 'hidden' || g === me) continue;
      // своих Безликов водящий видит; герой — только если Безлик в прямой видимости и без маски
      const show = hunter || this.mode === 'watch' || (!g.disguised && this.world.lineOfSight(me.ctrl.pos.x, me.ctrl.pos.z, g.pos.x, g.pos.z, true, me.ctrl.pos.y + 1.4, g.eyeY));
      if (show) dots.push({ x: g.pos.x, z: g.pos.z, kind: 'ghost' });
    }
    dots.push({ x: me.ctrl.pos.x, z: me.ctrl.pos.z, kind: 'me' });
    this.ui.minimap(me.ctrl.pos, this.cam.yaw, dots);
  }

  #cooldowns() {
    const R = this.round;
    const pg = R.playerGhost;
    if (pg) {
      const c = pg.ctrl, d = c.phys.dash;
      if ((pg.disguise?.hero?.id || null) !== this.ghostBarHero) this.#abilityBar();   // маска сменилась — другие кнопки
      this.ui.cooldowns(id => {
        if (id === 'rage') return { k: pg.rageUsed && pg.rageT <= 0 ? 1 : 0, n: pg.rageT > 0 ? Math.ceil(pg.rageT) : '' };
        if (id.startsWith('m:')) { const a = id.slice(2); return { k: (pg.maskCd[a] || 0) / (CONFIG.abilities[a]?.cd || 10) }; }
        if (id === 'dash') return { k: c.dashCharges > 0 ? c.dashCd / d.cooldown : 1 - c.chargeT / d.recharge, n: c.dashCharges };
        if (id === 'mask-hero') return { k: pg.disguised ? 0 : pg.disguiseCd / CONFIG.ghost.disguise.cd, n: pg.disguised ? Math.ceil(pg.disguise.t) : '' };
        if (id === 'fly') return { k: 1 - c.flyEnergy };
      });
    } else if (R.player) {
      const c = R.player.ctrl, set = R.player.abilities;
      this.ui.cooldowns(id => {
        if (id === 'dash') return { k: c.dashCd / c.phys.dash.cooldown };
        const a = set.get(id);
        if (id === 'split') return { k: R.player.splitUsed ? 1 : 0,
          n: R.player.splitActive ? R.player.splitHeads.filter(h => h.alive).length : '' };
        return { k: a ? a.cdLeft / set.cooldown(a) : 0 };
      });
    }
  }

  #nearestGhost(p) {
    let best = null;
    for (const g of this.ghosts) {
      if (g.state === 'hidden') continue;
      const d = Math.hypot(g.pos.x - p.x, g.pos.z - p.z);
      if (!best || d < best.d) best = { g, d };
    }
    return best;
  }

  #resize() {
    // iOS in-app browsers can leave screen.orientation.type stale after a turn.
    // Use the layout viewport shape first; orientation APIs are only a fallback.
    const w = Math.max(1, document.documentElement.clientWidth || innerWidth);
    const h = Math.max(1, document.documentElement.clientHeight || innerHeight);
    const landscape = w !== h
      ? w > h
      : typeof window.orientation === 'number'
        ? Math.abs(window.orientation) === 90
        : !!window.screen?.orientation?.type?.startsWith('landscape');
    document.documentElement.classList.toggle('landscape', landscape);
    requestAnimationFrame(() => {
      const width = Math.max(1, document.documentElement.clientWidth || innerWidth);
      const height = Math.max(1, document.documentElement.clientHeight || innerHeight);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.insetCamera.aspect = width / height;
      this.insetCamera.updateProjectionMatrix();
      this.renderer.setSize(width, height, false);
    });
  }
}

// setTimeout, а не rAF: во фоновой вкладке rAF замирает и загрузка бы зависла
const frame = () => new Promise(r => setTimeout(r, 0));
