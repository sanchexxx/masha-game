// Игра целиком: выбор героя → выбор карты → раунд (прятки → догонялки) → итог и тыковки.
// Сама логика раунда — в round.js (её же гоняет симуляция без браузера); здесь — картинка,
// камера, звук, кнопки и интерфейс.
// Режимы: 'play' — ты герой, 'hunter' — ты Безлик (водящий), 'watch' — смотришь, как бегают все.
import * as THREE from 'three';
import { CONFIG } from '../config/config.js?v=2026100901';
import { HEROES, GHOST } from '../characters/index.js?v=2026100901';
import { buildMap } from '../world/map.js?v=2026100901';
import { buildForest } from '../world/forest.js?v=2026100901';
import { loadForestAssets } from '../world/forest-assets.js?v=2026101003';
import { buildFireflies, buildSoot } from '../world/effects.js?v=2026100901';
import { buildProp, poof, Pumpkins, wallet } from '../world/props.js?v=2026100901';
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

const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
const isMobile = isTouch && Math.min(screen.width, screen.height) < 820;
const MAX_GHOSTS = 4;
const GHOST_ABILITIES = [
  { id: 'dash', key: 'E', icon: '💨', name: 'Рывок' },
  { id: 'mask-hero', key: '1', icon: '🎭', name: 'Стать героем' },
  { id: 'mask-prop', key: '2', icon: '📦', name: 'Стать вещью' },
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
    this.skin = 'classic';
    this.withBots = true;
    this.ghostCount = CONFIG.ghost.count;
    this.mapId = 'village';
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
    const ui = this.ui;
    ui.progress(0.1, 'Строим деревню…');
    await frame();

    const r = this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: !isMobile || devicePixelRatio < 2, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(devicePixelRatio, isMobile ? CONFIG.graphics.maxPixelRatioMobile : CONFIG.graphics.maxPixelRatioDesktop));
    r.setSize(innerWidth, innerHeight, false);
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.15;
    r.shadowMap.enabled = CONFIG.graphics.shadows;
    r.shadowMap.type = THREE.PCFShadowMap;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(CONFIG.camera.fov, innerWidth / innerHeight, 0.1, 400);
    this.insetCamera = new THREE.PerspectiveCamera(72, 16 / 9, 0.08, 180);
    this.map = buildMap(this.scene, { isMobile });
    this.world = this.map.world;
    ui.progress(0.4, 'Зажигаем фонарики…');
    await frame();

    this.fireflies = buildFireflies(this.scene, isMobile ? 50 : CONFIG.graphics.fireflies, 28);
    this.soot = buildSoot(this.scene, this.world, isMobile ? 10 : 16);
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
      makeChar: (h, s) => this.#acquire(h, s), makeProp: k => buildProp(k), sound: this.sound, cam: this.cam,
      playerSpawn: this.map.playerSpawn, botSpawns: this.map.botSpawns, ghostSpawns: this.map.ghostSpawns,
    });
    this.round.addFx = f => this.fx.push(f);

    const thumbs = makeThumbnails([...HEROES, GHOST]);
    this.#buildMapCards();
    ui.progress(1, 'Готово!');

    ui.buildCards(HEROES, GHOST, thumbs, id => this.selectHero(id));
    ui.on('btn-choose', () => (this.mp.inRoom ? this.mp.showLobby() : this.toMaps()));
    ui.on('btn-friends', () => (this.mp.inRoom ? this.mp.showLobby() : this.mp.showRooms()));
    ui.on('btn-maps-back', () => this.toSelect());
    ui.on('btn-maps-go', () => this.beginRound(this.hero.id === 'noface' ? 'hunter' : 'play'));
    ui.on('btn-watch', () => this.beginRound('watch'));
    ui.on('btn-again', () => this.beginRound(this.mode));
    ui.on('btn-change', () => (this.mp.inRoom ? this.mp.showLobby() : this.toSelect()));
    ui.on('btn-resume', () => this.resume());
    ui.on('btn-quit', () => { this.ui.show('paused', false); this.toSelect(); });
    ui.on('btn-pause', () => this.pause());
    ui.on('btn-next', () => this.state === 'guest' ? this.mp.nextGuestFocus() : this.#nextFocus());
    ui.on('btn-tuner', () => this.tuner.toggle());
    ui.on('btn-tuner2', () => this.tuner.toggle());
    ui.on('btn-mute', () => { this.sound.setMuted(!this.sound.muted); ui.setMute(this.sound.muted); });
    ui.onOptions({
      ghosts: n => { this.ghostCount = n; },
      bots: on => { this.withBots = on; },
      skin: s => { this.skin = s; this.selectHero('moti'); },
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
        if (key === '2') this.#useAbility('mask-prop');
      } else if (this.round.player?.alive) {
        const ab = this.round.player.abilities.list.find(a => a.key === key);
        if (ab) this.round.player.abilities.use(ab.id);
      }
    });
    ui.onAbility(id => this.#useAbility(id));
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
      }
      const nextScene = new THREE.Scene();
      const nextMap = id === 'forest' ? buildForest(nextScene, { isMobile }) : buildMap(nextScene, { isMobile });
      this.ui.progress(0.43, 'Прокладываем маршруты…');
      await frame();
      this.#releaseAll();
      const oldScene = this.scene;
      oldScene.remove(this.showGhost.root);
      for (const g of this.ghostPool) oldScene.remove(g.root);
      this.scene = nextScene;
      this.map = nextMap;
      this.world = nextMap.world;
      this.navs.clear();
      this.fireflies = buildFireflies(this.scene, isMobile ? 50 : CONFIG.graphics.fireflies, 28);
      this.soot = buildSoot(this.scene, this.world, isMobile ? 10 : 16);
      const ghostNav = this.navFor(GHOST.radius);
      this.ghostPool = Array.from({ length: MAX_GHOSTS }, () => new Ghost(GHOST, this.world, this.scene, ghostNav, { heroes: HEROES }));
      this.cam.blockers = nextMap.cameraBlockers;
      this.pumpkins = new Pumpkins(this.scene, this.navFor(0.42));
      this.showLight = new THREE.PointLight(0xffe0b0, 14, 9, 1.6);
      this.scene.add(this.showLight, this.showGhost.root);
      this.round = new Round({
        world: this.world, scene: this.scene, navFor: r => this.navFor(r), ghosts: this.ghostPool, heroes: HEROES,
        makeChar: (h, s) => this.#acquire(h, s), makeProp: k => buildProp(k), sound: this.sound, cam: this.cam,
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
      this.mapId = id; this.ui.pickMap(id);
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
  }

  // ---------- Выбор героя ----------
  selectHero(id) {
    this.hero = id === GHOST.id ? GHOST : HEROES.find(h => h.id === id);
    this.#releaseAll();
    for (const g of this.ghostPool) { g.reveal(); g.reset(this.map.ghostSpawn); }
    this.showGhost.root.visible = id === GHOST.id;
    this.showcase = id === GHOST.id ? null : this.round.makeAgent(this.hero, true, this.map.playerSpawn, this.#skinFor(this.hero));
    this.ui.showHero(this.hero, this.skin);
    if (id === 'brothers') this.sound.brothersCue?.('select');
    if (this.hero.custom) this.ui.buildCreator(this.look, LOOK_OPTIONS, (k, v) => this.#setLook(k, v));
    this.cam.configure(this.hero.cam);
  }

  #skinFor(h) { return h.custom ? JSON.stringify(this.look) : this.skin; }

  // Редактор «Моего котика»: поменяли что-то — пересобираем героя
  #setLook(k, v) {
    this.look = { ...this.look, [k]: v };
    if (k === 'gender') this.look.hairStyle = LOOK_OPTIONS.hairStyle[v][0][0];
    saveLook(this.look);
    for (const key of [...this.pool.keys()]) if (key.startsWith('kid:')) this.pool.delete(key);
    this.sound.chime([660, 880]);
    this.selectHero('kid');
  }

  toSelect() {
    this.state = 'select';
    this.input.enabled = false;
    this.input.lookOnly = false;
    this.input.releasePointer();
    this.selectHero(this.hero.id);
    this.sound.setTension(0);
    this.ui.mode('select', isTouch);
    this.ui.wallet(wallet.get());
    this.showLight.intensity = 14;
  }

  toMaps() {
    this.state = 'maps';
    this.ui.mode('maps', isTouch);
  }

  // ---------- Раунд ----------
  async beginRound(mode) {
    if (this.roundStarting) return;
    this.roundStarting = true;
    try {
    this.mode = mode;
    this.sound.unlock();
    await this.activateMap(this.mapId);
    this.#releaseAll();
    this.showGhost.root.visible = false;
    this.showcase = null;
    this.input.reset();
    const hero = this.hero.id === GHOST.id ? HEROES[0] : this.hero;
    this.round.start({ mode, hero, skin: this.#skinFor(hero), mSkin: this.skin, ghosts: this.ghostCount, withBots: this.withBots, remotes: this.mp.remotes() });
    this.mp.hostStarted();
    this.pumpkins.spawn(CONFIG.round.pumpkins);
    this.focus = 0;
    this.cam.yaw = mode === 'hunter' ? Math.PI : 0; this.cam.pitch = 0.3;
    const follow = this.#focusTarget();
    this.#configureCam(follow);
    this.cam.snap(this.#posOf(follow));
    this.state = 'play';
    this.input.enabled = true;
    this.input.lookOnly = mode === 'watch';
    this.ui.mode('play', isTouch, mode);
    this.ui.phase('hide');
    this.#abilityBar();
    this.#aliveHud();
    this.ui.pumpkins(0);
    this.showLight.intensity = 0;
    } catch (e) {
      console.error('Не удалось открыть карту', e);
      this.ui.hideLoading();
      this.ui.toast('Не удалось открыть карту. Попробуй выбрать её ещё раз.');
    } finally { this.roundStarting = false; }
  }

  #abilityBar() {
    const R = this.round;
    if (R.playerGhost) this.ui.abilityBar(GHOST_ABILITIES);
    else if (R.player) this.ui.abilityBar(R.player.abilities.list);   // рывок — круглая кнопка справа
    else this.ui.abilityBar([]);
    document.getElementById('abil-bar').classList.toggle('hidden', this.mode === 'watch');
  }

  #useAbility(id) {
    if (this.state === 'guest') return this.mp.guestAbility(id);
    const R = this.round, pg = R.playerGhost;
    if (id === 'dash') { this.input.dashQueued = true; return; }
    if (pg) {
      if (id === 'fly') this.input.jumpQueued = true;
      else if (id === 'mask-hero' || id === 'mask-prop') {
        if (pg.disguised) pg.reveal();
        else if (!pg.useDisguise(R.agents, id === 'mask-prop' ? 'prop' : 'hero')) this.ui.toast(pg.active ? 'Маскировка ещё копится…' : 'Сначала дождись своего выхода');
      }
      return;
    }
    if (R.player?.alive) R.player.abilities.use(id);
  }

  #aliveHud() {
    const R = this.round;
    const n = R.agents.filter(a => a.alive).length;
    this.ui.alive(n, R.agents.length, R.phase === 'hide' ? 'Спрятались' : 'Убегают');
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
    this.renderer.render(this.scene, this.insetCamera);
    if (model) model.visible = wasVisible;
    this.renderer.setScissorTest(false);
    this.renderer.setViewport(0, 0, w, h);
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
    const good = r.mode === 'watch' ? r.alive.length > 0 : (r.mode === 'hunter' || r.playerWasGhost) ? r.alive.length === 0 : !r.playerCaughtInChase;
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

    if (this.state === 'play') this.#play(dt, t);
    else if (this.state === 'guest') this.mp.guestTick(dt, t);
    else if (this.state === 'select' || this.state === 'maps') this.#showcase(dt, t);
    else if (this.state === 'result') {
      for (const a of this.agents) if (a.alive && a.char) a.char.update(dt, { ...a.ctrl.animState(t), speed: 0, grounded: true, landed: false, action: a.abilities.pose() });
      for (const g of this.ghosts) if (g.state !== 'hidden' && !g.disguised) g.char.update(dt, { t, speed: 0, mode: 'hunt', appear: 1 });
    }
    this.fx = this.fx.filter(f => f.update(dt) !== false);

    const center = this.state === 'play' ? this.#posOf(this.#focusTarget()) : this.state === 'guest' ? this.mp.focusPos || this.map.playerSpawn : this.map.playerSpawn;
    this.map.updateLights(center);
    this.map.updateVisuals?.(t);
    this.fireflies(t);
    this.soot(dt, t, center);
    const firstPersonModel = this.#firstPersonModel(this.mainFirstPersonTarget);
    const firstPersonVisible = firstPersonModel?.visible;
    if (firstPersonModel) {
      firstPersonModel.visible = false;
    }
    this.renderer.render(this.scene, this.camera);
    if (firstPersonModel) firstPersonModel.visible = firstPersonVisible;
    this.#renderGhostInset();
  }

  #showcase(dt, t) {
    const isGhost = this.hero.id === GHOST.id;
    const p = this.map.playerSpawn;
    if (isGhost) {
      const r = this.showGhost.root;
      r.position.copy(p);
      r.rotation.y = -0.35 + Math.sin(t * 0.4) * 0.3;
      this.showGhost.update(dt, { t, speed: 0, mode: Math.sin(t * 0.5) > 0.3 ? 'hunt' : 'search', appear: 1 });
    } else if (this.showcase) {
      const a = this.showcase;
      a.abilities.update(dt);
      // на экране выбора герой иногда машет или красуется умением (без эффекта)
      if (!a.action && Math.random() < dt * 0.25) {
        const pick = a.abilities.list.filter(x => ['wave', 'cast', 'swing', 'summon'].includes(x.anim));
        if (pick.length) { const x = pick[(Math.random() * pick.length) | 0]; a.action = { name: x.anim, t: 0, dur: x.dur, lock: 0, fired: true }; }
      }
      a.char.root.position.copy(p);
      a.char.root.rotation.y = -0.35 + Math.sin(t * 0.4) * 0.3;
      a.char.update(dt, { t, speed: 0, grounded: true, landed: false, action: a.abilities.pose() });
    }
    const h = this.hero.height;
    const narrow = innerWidth < 760;
    const dist = h * (narrow ? 2.9 : 2.0) + 1.4;
    const ang = 0.12 + Math.sin(t * 0.15) * 0.06;
    const shift = (narrow ? 0.55 : 1.25) * (h / 1.7) + (narrow ? 0 : 0.3);
    const focus = new THREE.Vector3(p.x + shift, p.y + h * 0.6, p.z);
    this.camera.position.set(focus.x + Math.sin(ang) * dist, focus.y + h * 0.18, focus.z + Math.cos(ang) * dist);
    this.camera.lookAt(focus);
    this.showLight.position.set(p.x + 0.8, p.y + h * 0.9, p.z + 2.4);
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
    R.step(dt, t, inp, this.cam.yaw);
    for (const e of R.events) this.#onEvent(e);
    R.events.length = 0;
    this.mp.hostTick(dt);
    if (this.state !== 'play') return;
    follow = this.#focusTarget();
    this.mainFirstPersonTarget = firstPersonSpectator ? follow : null;

    // В укрытии герой может подсматривать за ближайшим Безликом от его лица.
    const player = R.player;
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
      a.char.update(dt, { ...a.ctrl.animState(t), action: a.abilities.pose(),
        split: a.splitActive ? { heads: a.splitHeads.map(h => ({ x: h.ctrl.pos.x, y: h.ctrl.pos.y,
          z: h.ctrl.pos.z, yaw: h.ctrl.yaw, speed: h.ctrl.speed, alive: h.alive })) } : null });
    }

    // Тыковки: собирает игрок (героем или Безликом)
    // (в совместной игре — и живые игроки с других устройств)
    const me = R.player?.alive ? R.player : R.playerGhost;
    const collectors = [me, ...R.agents.filter(a => a.remote && a.alive), ...R.activeGhosts.filter(g => g.remote && g.active)].filter(Boolean);
    for (const c of this.pumpkins.update(dt, t, collectors)) {
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
    if (R.phase === 'hide' && R.spawned === 0) {
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
    else this.ui.status(R.player.hidden ? 'Тихо… он тебя ищет' : R.phase === 'chase' ? 'Догонялки! Не попадись!' : 'Безлики ищут. Спрячься или замаскируйся!', 'calm');
    const k = R.spawned && heroView ? THREE.MathUtils.clamp(1 - dist / 16, 0, 1) : 0;
    this.sound.setTension(this.mode === 'watch' ? k * 0.5 : k);
    this.ui.vignette(k * (sees ? 1 : 0.6));
    const hudC = me ? me.ctrl : follow.ctrl;
    this.ui.hud({ left: R.left, stamina: hudC.stamina, tired: hudC.exhausted, hidden: me?.hidden });
    this.ui.mmLabel(R.phase === 'hide' && R.spawned === 0 && !R.playerGhost ? 'Найди место<br>и спрячься!' : '');
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
        if (e.phase === 'hide') {
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
    } else if (e.type === 'end') {
      this.#end(e.result);
    }
  }

  #minimap(follow) {
    const R = this.round;
    const me = follow;
    const dots = [];
    for (const p of this.pumpkins.list) dots.push({ x: p.x, z: p.z, kind: 'pumpkin' });
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
      this.ui.cooldowns(id => {
        if (id === 'dash') return { k: c.dashCharges > 0 ? c.dashCd / d.cooldown : 1 - c.chargeT / d.recharge, n: c.dashCharges };
        if (id === 'mask-hero' || id === 'mask-prop') return { k: pg.disguised ? 0 : pg.disguiseCd / CONFIG.ghost.disguise.cd, n: pg.disguised ? Math.ceil(pg.disguise.t) : '' };
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
