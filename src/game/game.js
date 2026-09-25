// Игра целиком: выбор героя → выбор карты → раунд (прятки → догонялки) → итог и тыковки.
// Сама логика раунда — в round.js (её же гоняет симуляция без браузера); здесь — картинка,
// камера, звук, кнопки и интерфейс.
// Режимы: 'play' — ты герой, 'hunter' — ты Безлик (водящий), 'watch' — смотришь, как бегают все.
import * as THREE from 'three';
import { CONFIG } from '../config/config.js';
import { HEROES, GHOST } from '../characters/index.js';
import { buildMap, HALF } from '../world/map.js';
import { buildFireflies, buildSoot } from '../world/effects.js';
import { buildProp, poof, Pumpkins, wallet } from '../world/props.js';
import { Input } from '../player/input.js';
import { ThirdPersonCamera } from '../player/camera.js';
import { Ghost } from '../enemies/ghost.js';
import { NavGrid } from '../enemies/pathfinder.js';
import { burst } from '../abilities/fx.js';
import { Round, GHOST_SPAWNS } from './round.js';
import { Sound } from './audio.js';
import { UI } from '../ui/ui.js';
import { Tuner, loadSavedPhysics } from '../ui/tuner.js';
import { makeThumbnails } from '../ui/thumbnails.js';
import { LOOK_OPTIONS, loadLook, saveLook } from '../characters/kid.js';

const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
const isMobile = isTouch && Math.min(screen.width, screen.height) < 820;
const MAX_GHOSTS = 4;
const SPAWN = new THREE.Vector3(0, 0, 22);
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
    this.look = loadLook();        // внешность «Моего котика»
  }

  get agents() { return this.round?.agents || []; }
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
    for (const h of HEROES) this.navFor(h.radius);   // сетки путей для ботов — заранее, чтобы не дёргалось в раунде
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
    });
    this.round.addFx = f => this.fx.push(f);

    const thumbs = makeThumbnails([...HEROES, GHOST]);
    this.#buildMapCards();
    ui.progress(1, 'Готово!');

    ui.buildCards(HEROES, GHOST, thumbs, id => this.selectHero(id));
    ui.on('btn-choose', () => this.toMaps());
    ui.on('btn-maps-back', () => this.toSelect());
    ui.on('btn-maps-go', () => this.beginRound(this.hero.id === 'noface' ? 'hunter' : 'play'));
    ui.on('btn-watch', () => this.beginRound('watch'));
    ui.on('btn-again', () => this.beginRound(this.mode));
    ui.on('btn-change', () => this.toSelect());
    ui.on('btn-resume', () => this.resume());
    ui.on('btn-quit', () => { this.ui.show('paused', false); this.toSelect(); });
    ui.on('btn-pause', () => this.pause());
    ui.on('btn-next', () => this.#nextFocus());
    ui.on('btn-tuner', () => this.tuner.toggle());
    ui.on('btn-tuner2', () => this.tuner.toggle());
    ui.on('btn-mute', () => { this.sound.setMuted(!this.sound.muted); ui.setMute(this.sound.muted); });
    ui.onOptions({
      ghosts: n => { this.ghostCount = n; },
      bots: on => { this.withBots = on; },
      skin: s => { this.skin = s; this.selectHero('moti'); },
    }, { ghosts: this.ghostCount, bots: this.withBots });
    this.tuner = new Tuner(HEROES, () => this.hero?.id || 'masha');
    ui.minimapInit(this.world, HALF);
    ui.wallet(wallet.get());

    addEventListener('keydown', e => {
      if (this.tuner.open) return;
      if (this.state === 'play' && (e.code === 'KeyP' || (e.code === 'Escape' && !document.pointerLockElement))) return this.pause();
      if (this.state === 'paused' && (e.code === 'KeyP' || e.code === 'Escape')) return this.resume();
      if (this.state === 'play' && this.mode === 'watch' && (e.code === 'Tab' || e.code === 'KeyN')) { e.preventDefault(); return this.#nextFocus(); }
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
    const unlock = () => this.sound.unlock();
    addEventListener('pointerdown', unlock);
    addEventListener('keydown', unlock);

    this.hero = HEROES[0];
    this.toSelect();
    ui.hideLoading();

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

  // Картинки карт — снимки нашей же деревни с разных мест (лес = бамбуковая роща, храм = святилище)
  #buildMapCards() {
    const shot = (from, to) => {
      this.camera.position.set(...from);
      this.camera.lookAt(...to);
      this.map.updateLights(new THREE.Vector3(to[0], 0, to[2]));
      this.renderer.render(this.scene, this.camera);
      return this.renderer.domElement.toDataURL('image/jpeg', 0.72);
    };
    this.maps = [
      { id: 'forest', name: 'Лес духов', icon: '🌲', ready: false, pic: shot([-26, 3.2, -26], [-36, 2.4, -36]) },
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
    for (const g of this.ghostPool) { g.reveal(); g.reset(new THREE.Vector3(0, 0, -21)); }
    this.showGhost.root.visible = id === GHOST.id;
    this.showcase = id === GHOST.id ? null : this.round.makeAgent(this.hero, true, SPAWN, this.#skinFor(this.hero));
    this.ui.showHero(this.hero, this.skin);
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
  beginRound(mode) {
    this.mode = mode;
    this.sound.unlock();
    this.#releaseAll();
    this.showGhost.root.visible = false;
    this.showcase = null;
    this.input.reset();
    const hero = this.hero.id === GHOST.id ? HEROES[0] : this.hero;
    this.round.start({ mode, hero, skin: this.#skinFor(hero), mSkin: this.skin, ghosts: this.ghostCount, withBots: this.withBots });
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
  }

  #abilityBar() {
    const R = this.round;
    if (R.playerGhost) this.ui.abilityBar(GHOST_ABILITIES);
    else if (R.player) this.ui.abilityBar(R.player.abilities.list);   // рывок — круглая кнопка справа
    else this.ui.abilityBar([]);
    document.getElementById('abil-bar').classList.toggle('hidden', this.mode === 'watch');
  }

  #useAbility(id) {
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
    const list = [...R.agents.filter(a => a.alive), ...R.activeGhosts.filter(g => g.state !== 'hidden')];
    return list[this.focus % Math.max(1, list.length)] || R.agents[0] || R.activeGhosts[0];
  }
  #configureCam(f) {
    if (f?.hero) this.cam.configure(f.hero.cam);
    else this.cam.configure(GHOST.cam);
  }
  #nextFocus() {
    if (this.mode !== 'watch' && this.round.player?.alive) return;
    this.focus++;
    this.#configureCam(this.#focusTarget());
  }
  #posOf(f) { return f ? f.ctrl.pos : SPAWN; }

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
  }

  // ---------- Кадр ----------
  #tick() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.t += dt;
    const t = this.t;

    if (this.state === 'play') this.#play(dt, t);
    else if (this.state === 'select' || this.state === 'maps') this.#showcase(dt, t);
    else if (this.state === 'result') {
      for (const a of this.agents) if (a.alive && a.char) a.char.update(dt, { ...a.ctrl.animState(t), speed: 0, grounded: true, landed: false, action: a.abilities.pose() });
      for (const g of this.ghosts) if (g.state !== 'hidden' && !g.disguised) g.char.update(dt, { t, speed: 0, mode: 'hunt', appear: 1 });
    }
    this.fx = this.fx.filter(f => f.update(dt) !== false);

    const center = this.state === 'play' ? this.#posOf(this.#focusTarget()) : SPAWN;
    this.map.updateLights(center);
    this.fireflies(t);
    this.soot(dt, t, center);
    this.renderer.render(this.scene, this.camera);
  }

  #showcase(dt, t) {
    const isGhost = this.hero.id === GHOST.id;
    const p = SPAWN;
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
    if (this.mode === 'watch' || !(R.player?.alive || R.playerGhost)) {
      const want = follow.ctrl.yaw + Math.PI;
      if (Math.abs(inp.lookX) + Math.abs(inp.lookY) < 1e-5) this.cam.yaw += Math.atan2(Math.sin(want - this.cam.yaw), Math.cos(want - this.cam.yaw)) * Math.min(1, dt * 1.2);
    }
    this.cam.update(dt, this.#posOf(follow), inp);

    // Логика раунда
    R.step(dt, t, inp, this.cam.yaw);
    for (const e of R.events) this.#onEvent(e);
    R.events.length = 0;
    if (this.state !== 'play') return;
    follow = this.#focusTarget();

    // Картинка героев
    for (const a of R.agents) {
      if (!a.alive || !a.char) continue;
      const root = a.char.root;
      root.visible = !a.prop;
      root.position.copy(a.ctrl.pos);
      root.rotation.y = a.ctrl.yaw;
      root.scale.y += ((a.ctrl.crouching ? 0.62 : 1) - root.scale.y) * Math.min(1, dt * 14);   // присел — сжался
      a.char.update(dt, { ...a.ctrl.animState(t), action: a.abilities.pose() });
    }

    // Тыковки: собирает игрок (героем или Безликом)
    const me = R.player?.alive ? R.player : R.playerGhost;
    if (me) {
      const got = this.pumpkins.update(dt, t, [me]);
      if (got.length) { R.stats.pumpkins += got.length; this.ui.pumpkins(R.stats.pumpkins); this.sound.chime([784, 1046, 1318]); }
    } else this.pumpkins.update(dt, t, []);

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
    const sees = !!(near && near.g.sees && near.g.target === heroView && !near.g.disguised);
    const headLeft = Math.ceil(C.round.headStart - R.t);
    if (R.phase === 'hide' && R.spawned === 0) {
      if (R.playerGhost) this.ui.status(`Закрой глаза и считай: ${headLeft}… Герои прячутся!`, 'calm');
      else this.ui.status(`Безлики выйдут через ${headLeft} — прячься!`, 'calm');
    } else if (R.playerGhost) {
      const pg = R.playerGhost;
      const left = R.agents.filter(a => a.alive).length;
      this.ui.status(pg.disguised ? `Ты замаскирован${pg.disguise.prop ? ` под ${pg.disguise.prop.name}` : ` под «${pg.disguise.hero.name}»`} — подкрадись!` : R.phase === 'hide' ? `Найди спрятавшихся! Осталось: ${left}` : `Догони всех! Осталось: ${left}`, '');
    } else if (this.mode === 'watch') this.ui.status(follow.hero && follow.alive !== undefined ? `Смотрим: ${follow.name}${follow.hidden ? ' · в укрытии' : ''}${follow.prop ? ` · притворился: ${follow.prop.kind.name}` : ''}` : 'Смотрим: Безлик', sees ? 'danger' : '');
    else if (!R.player?.alive) this.ui.status('Тебя нашли! Смотри, как прячутся другие…', '');
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
    if (e.type === 'ghostSpawn') {
      this.sound.ghostAppear();
      this.cam.shake = Math.max(this.cam.shake, 0.6);
      if (e.ghost.isPlayer) this.ui.toast('Ты вышел на охоту! Ищи!');
      else if (e.i === 0) this.ui.toast(R.phase === 'hide' ? 'Безлики вышли искать!' : 'Догонялки начались!');
    } else if (e.type === 'caught') {
      const a = e.agent;
      this.addFx(burst(this.scene, a.ctrl.pos.x, a.ctrl.pos.z, 2.5, 0x9a5ae0));
      this.#aliveHud();
      if (a.isPlayer) {
        this.cam.shake = 1;
        if (e.phase === 'hide') {
          const first = R.caughtOrder.filter(c => c.phase === 'hide').length === 1;
          this.ui.toast(first ? 'Тебя нашли первым — в догонялках ТЫ будешь Безликом!' : 'Тебя нашли! Подожди догонялок.');
          this.focus = 0;
          this.#configureCam(this.#focusTarget());
        }
      } else this.ui.toast(e.byPlayer ? `Попался: ${a.name}! 🎃+${e.phase === 'hide' ? CONFIG.round.reward.found : CONFIG.round.reward.catch}` : `${e.phase === 'hide' ? 'Нашли' : 'Догнали'}: ${a.name}`);
      if (a.isPlayer && e.phase === 'chase') { this.round.phase = 'over'; this.#end(R.result()); }
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
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(innerWidth, innerHeight, false);
  }
}

// setTimeout, а не rAF: во фоновой вкладке rAF замирает и загрузка бы зависла
const frame = () => new Promise(r => setTimeout(r, 0));
