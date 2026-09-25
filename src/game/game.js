// Игра целиком: экран выбора → раунд → итог.
// В раунде бегают «агенты» — игрок и боты — на одной и той же физике, и 1–3 Безлика.
// Режим «Смотреть»: все герои — боты, камера переключается между ними.
import * as THREE from 'three';
import { CONFIG } from '../config/config.js';
import { HEROES, GHOST } from '../characters/index.js';
import { buildMap } from '../world/map.js';
import { buildFireflies, buildSoot } from '../world/effects.js';
import { Input } from '../player/input.js';
import { PlayerController, separate } from '../player/controller.js';
import { ThirdPersonCamera } from '../player/camera.js';
import { BotBrain } from '../player/bot.js';
import { Ghost } from '../enemies/ghost.js';
import { NavGrid } from '../enemies/pathfinder.js';
import { AbilitySet } from '../abilities/abilities.js';
import { burst } from '../abilities/fx.js';
import { Sound } from './audio.js';
import { UI } from '../ui/ui.js';
import { Tuner, loadSavedPhysics } from '../ui/tuner.js';
import { makeThumbnails } from '../ui/thumbnails.js';

const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
const isMobile = isTouch && Math.min(screen.width, screen.height) < 820;
const MAX_GHOSTS = 3;
const BOT_SPAWNS = [[-5, 19], [5.5, 17], [-9, 23], [9, 21], [-3, 14]];
const GHOST_SPAWNS = [[0, -21], [-7, -20], [7, -20]];

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ui = new UI();
    this.sound = new Sound();
    this.state = 'loading';
    this.t = 0;
    this.agents = [];
    this.fx = [];
    this.domes = [];
    this.navs = new Map();
    this.pool = new Map();
    this.skin = 'classic';
    this.withBots = true;
  }

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
    ui.progress(0.45, 'Зажигаем фонарики…');
    await frame();

    this.fireflies = buildFireflies(this.scene, isMobile ? 50 : CONFIG.graphics.fireflies, 28);
    this.soot = buildSoot(this.scene, this.world, isMobile ? 10 : 16);
    const ghostNav = this.navFor(GHOST.radius);
    this.ghostPool = Array.from({ length: MAX_GHOSTS }, () => new Ghost(GHOST, this.world, this.scene, ghostNav));
    this.ghosts = [];
    this.input = new Input(this.canvas, document.getElementById('touch'));
    this.cam = new ThirdPersonCamera(this.camera, this.map.cameraBlockers);
    this.showLight = new THREE.PointLight(0xffe0b0, 14, 9, 1.6);
    this.scene.add(this.showLight);
    ui.progress(0.7, 'Зовём духов…');
    await frame();
    for (const h of HEROES) this.navFor(h.radius);   // сетки путей для ботов — заранее, чтобы не дёргалось в раунде

    // Прогрев: один раз рисуем Безликов, чтобы при появлении не было рывка кадра
    this.ghostPool.forEach(g => { g.root.visible = true; g.char.update(0.016, { t: 0, speed: 0, mode: 'hunt', appear: 1 }); });
    this.renderer.compile(this.scene, this.camera);
    this.ghostPool.forEach(g => { g.root.visible = false; });

    const thumbs = makeThumbnails([...HEROES, GHOST]);
    ui.progress(1, 'Готово!');

    ui.buildCards(HEROES, GHOST, thumbs, id => this.selectHero(id));
    ui.on('btn-choose', () => this.beginRound('play'));
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
      ghosts: n => { CONFIG.ghost.count = n; },
      bots: on => { this.withBots = on; },
      skin: s => { this.skin = s; this.selectHero('moti'); },
    }, { ghosts: CONFIG.ghost.count, bots: this.withBots });
    this.tuner = new Tuner(HEROES, () => this.hero?.id || 'masha');

    addEventListener('keydown', e => {
      if (this.tuner.open) return;
      if (this.state === 'play' && (e.code === 'KeyP' || (e.code === 'Escape' && !document.pointerLockElement))) return this.pause();
      if (this.state === 'paused' && (e.code === 'KeyP' || e.code === 'Escape')) return this.resume();
      if (this.state === 'play' && this.mode === 'watch' && (e.code === 'Tab' || e.code === 'KeyN')) { e.preventDefault(); return this.#nextFocus(); }
      if (this.state === 'play' && this.player && !e.repeat) {
        const key = e.code.replace('Digit', '').replace('Key', '');
        const ab = this.player.abilities.list.find(a => a.key === key);
        if (ab) this.player.abilities.use(ab.id);
      }
    });
    ui.onAbility(id => this.player?.abilities.use(id));
    ui.dashFn = () => { this.input.dashQueued = true; };
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

  // Персонажи берутся из пула: не строим модели заново каждый раунд
  #acquire(hero, skin) {
    const key = hero.id + ':' + (hero.skins ? skin : '');
    const list = this.pool.get(key) || [];
    this.pool.set(key, list);
    let c = list.find(x => !x.inUse);
    if (!c) { c = hero.build(skin); list.push(c); }
    c.inUse = true;
    c.root.visible = true;
    this.scene.add(c.root);
    return c;
  }

  #releaseAll() {
    for (const a of this.agents) { a.char.inUse = false; this.scene.remove(a.char.root); }
    this.agents = [];
    this.player = null;
    for (const f of this.fx) while (f.update(99) !== false);   // досрочно гасим эффекты
    this.fx = [];
    this.domes = [];
  }

  #makeAgent(hero, isPlayer, spawn, skin) {
    const ctrl = new PlayerController(hero, this.world);
    ctrl.spawn(spawn, isPlayer ? Math.PI : Math.random() * Math.PI * 2);
    const a = { hero, name: hero.name, ctrl, char: this.#acquire(hero, skin), isPlayer, alive: true, hidden: false, protected: false };
    a.abilities = new AbilitySet(a, this);
    if (!isPlayer) { a.brain = new BotBrain(a, this.world, this.navFor(hero.radius)); a.brain.allies = () => this.agents; }
    this.agents.push(a);
    return a;
  }

  // ---------- Выбор героя ----------
  selectHero(id) {
    this.hero = HEROES.find(h => h.id === id);
    this.#releaseAll();
    this.player = this.#makeAgent(this.hero, true, this.map.playerSpawn, this.skin);
    this.ui.showHero(this.hero, this.skin);
    this.cam.configure(this.hero.cam);
  }

  toSelect() {
    this.state = 'select';
    this.input.enabled = false;
    this.input.lookOnly = false;
    this.input.releasePointer();
    for (const g of this.ghostPool) g.reset(new THREE.Vector3(0, 0, -21));
    this.ghosts = [];
    this.selectHero(this.hero.id);
    this.sound.setTension(0);
    this.ui.mode('select', isTouch);
    this.showLight.intensity = 14;
  }

  // ---------- Раунд ----------
  beginRound(mode) {
    this.mode = mode;
    this.sound.unlock();
    this.#releaseAll();
    const spawns = BOT_SPAWNS.slice().sort(() => Math.random() - 0.5);
    if (mode === 'play') {
      this.player = this.#makeAgent(this.hero, true, this.map.playerSpawn, this.skin);
      if (this.withBots) for (const h of HEROES) if (h.id !== this.hero.id) this.#makeAgent(h, false, new THREE.Vector3(...xz(spawns.pop())), 'classic');
    } else {
      for (const h of HEROES) this.#makeAgent(h, false, new THREE.Vector3(...xz(spawns.pop())), h.id === 'moti' ? this.skin : 'classic');
      this.focus = 0;
    }
    this.ghosts = this.ghostPool.slice(0, CONFIG.ghost.count);
    this.ghostPool.forEach((g, i) => g.reset(new THREE.Vector3(...xz(GHOST_SPAWNS[i]))));

    this.cam.yaw = 0; this.cam.pitch = 0.3;
    const follow = this.#focusAgent();
    this.cam.configure(follow.hero?.cam);
    this.cam.snap(follow.ctrl.pos);
    this.round = { t: 0, spawned: 0, spotted: 0, wasSeen: false, stepDist: 0, caught: [] };
    this.state = 'play';
    this.input.enabled = true;
    this.input.lookOnly = mode === 'watch';
    this.ui.mode('play', isTouch && mode === 'play', mode);
    this.ui.abilityBar(this.player ? this.player.abilities.list : [], this.player?.ctrl);
    this.ui.alive(this.agents.filter(a => a.alive).length, this.agents.length);
    this.showLight.intensity = 0;
  }

  #focusList() { return [...this.agents.filter(a => a.alive), ...this.ghosts.filter(g => g.state !== 'hidden')]; }
  #focusAgent() {
    if (this.mode !== 'watch' || this.state === 'select') return this.player;
    const list = this.#focusList();
    return list[this.focus % Math.max(1, list.length)] || this.agents[0];
  }
  #nextFocus() {
    if (this.mode !== 'watch') return;
    this.focus = (this.focus + 1) % Math.max(1, this.#focusList().length);
    const f = this.#focusAgent();
    this.cam.configure(f.hero ? f.hero.cam : { distance: 8, height: 2 });
  }
  #posOf(f) { return f ? (f.ctrl ? f.ctrl.pos : f.pos) : this.map.playerSpawn; }

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

  #end(win) {
    this.state = 'result';
    this.input.enabled = false;
    this.input.releasePointer();
    this.sound.setTension(0);
    win ? this.sound.win() : this.sound.lose();
    const survived = Math.min(this.round.t, CONFIG.round.duration);
    const alive = this.agents.filter(a => a.alive).map(a => a.name);
    this.ui.result(win, { mode: this.mode, name: this.hero.name, survived, spotted: this.round.spotted, alive, caught: this.round.caught });
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
    else if (this.state === 'select') this.#showcase(dt, t);
    else if (this.state === 'result') {
      for (const a of this.agents) if (a.alive) a.char.update(dt, { ...a.ctrl.animState(t), speed: 0, grounded: true, landed: false, action: a.abilities.pose() });
      for (const g of this.ghosts) if (g.state !== 'hidden') g.char.update(dt, { t, speed: 0, mode: 'hunt', appear: 1 });
    }
    this.fx = this.fx.filter(f => f.update(dt) !== false);

    const center = this.#posOf(this.#focusAgent());
    this.map.updateLights(center);
    this.fireflies(t);
    this.soot(dt, t, center);
    this.renderer.render(this.scene, this.camera);
  }

  #showcase(dt, t) {
    const a = this.player;
    const p = a.ctrl.pos;
    a.abilities.update(dt);
    // на экране выбора герой иногда машет или красуется умением (без эффекта)
    if (!a.action && Math.random() < dt * 0.25) {
      const pick = a.abilities.list.filter(x => ['wave', 'cast', 'swing', 'summon'].includes(x.anim));
      if (pick.length) { const x = pick[(Math.random() * pick.length) | 0]; a.action = { name: x.anim, t: 0, dur: x.dur, lock: 0, fired: true }; }
    }
    a.char.root.position.copy(p);
    a.char.root.rotation.y = -0.35 + Math.sin(t * 0.4) * 0.3;
    a.char.update(dt, { t, speed: 0, grounded: true, landed: false, action: a.abilities.pose() });
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
    const pl = this.player;
    R.t += dt;
    const left = C.round.duration - R.t;

    // Появление Безликов по очереди
    this.ghosts.forEach((g, i) => {
      if (g.state === 'hidden' && R.t >= C.ghost.spawnDelay + i * C.ghost.spawnGap) {
        g.spawn();
        R.spawned++;
        this.sound.ghostAppear();
        this.cam.shake = Math.max(this.cam.shake, 0.6);
        this.ui.toast(i ? 'Появился ещё один Безлик!' : 'Безлик вышел на охоту!');
      }
    });

    // Камера
    const follow = this.#focusAgent();
    if (this.mode === 'watch') {
      const yaw = follow.ctrl ? follow.ctrl.yaw : follow.yaw;
      const want = yaw + Math.PI;
      if (Math.abs(inp.lookX) + Math.abs(inp.lookY) < 1e-5) this.cam.yaw += Math.atan2(Math.sin(want - this.cam.yaw), Math.cos(want - this.cam.yaw)) * Math.min(1, dt * 1.2);
    }
    this.cam.update(dt, this.#posOf(follow), inp);

    // Герои: игрок — от клавиатуры, боты — от «мозга»
    const active = this.ghosts.filter(g => g.active);
    for (const a of this.agents) {
      if (!a.alive) continue;
      a.abilities.update(dt);
      let ai;
      if (a.isPlayer) ai = inp;
      else {
        ai = a.brain.update(dt, active);
        const th = a.brain.threat;
        a.abilities.botThink(th, th ? th.pos.distanceTo(a.ctrl.pos) : Infinity);
      }
      a.ctrl.update(dt, ai, a.isPlayer ? this.cam.yaw : 0);
      a.hidden = this.world.inBush(a.ctrl.pos.x, a.ctrl.pos.z) && !a.ctrl.running;
      a.protected = this.domes.some(d => Math.hypot(a.ctrl.pos.x - d.x, a.ctrl.pos.z - d.z) < d.r);
      if (a.protected) a.ctrl.stamina = Math.min(1, a.ctrl.stamina + dt * 0.25);   // в приюте отдыхается быстрее
    }
    separate(this.agents);
    for (const a of this.agents) {
      if (!a.alive) continue;
      a.char.root.position.copy(a.ctrl.pos);
      a.char.root.rotation.y = a.ctrl.yaw;
      a.char.update(dt, { ...a.ctrl.animState(t), action: a.abilities.pose() });
    }

    // Звуки игрока
    if (pl) {
      const p = pl.ctrl;
      if (p.jumped) this.sound.jump();
      if (p.dashed) this.sound.chime([880, 1320]);
      if (p.landed && p.landSpeed < -8) this.sound.land(-p.landSpeed);
      if (p.grounded && p.speed > 1) {
        R.stepDist += p.speed * dt;
        if (R.stepDist > (p.running ? 2.2 : 1.6)) { R.stepDist = 0; this.sound.step(); }
      }
    }

    // Безлики
    const roundK = Math.min(1, R.t / C.round.duration);
    for (const g of this.ghosts) g.update(dt, t, this.agents, roundK, { domes: this.domes });

    // Поимки
    for (const g of this.ghosts) {
      for (const a of this.agents) {
        if (!g.catches(a)) continue;
        a.alive = false;
        R.caught.push(a.name);
        this.addFx(burst(this.scene, a.ctrl.pos.x, a.ctrl.pos.z, 2.5, 0x9a5ae0));
        a.char.root.visible = false;
        g.stun(1.2);       // Безлик «забирает» героя и на миг замирает
        this.ui.toast(a.isPlayer ? 'Безлик поймал тебя!' : `Безлик забрал: ${a.name}`);
        this.ui.alive(this.agents.filter(x => x.alive).length, this.agents.length);
        if (a.isPlayer) { this.cam.shake = 1; return this.#end(false); }
      }
    }
    if (!this.agents.some(a => a.alive)) return this.#end(false);

    // Интерфейс
    const me = this.mode === 'watch' ? (follow.ctrl ? follow : null) : pl;
    const near = me ? this.#nearestGhost(me.ctrl.pos) : null;
    const dist = near ? near.d : 99;
    const sees = !!(near && near.g.sees && near.g.target === me);
    if (R.spawned === 0) this.ui.status(`Безлик появится через ${Math.ceil(C.ghost.spawnDelay - R.t)} — прячься!`, 'calm');
    else if (this.mode === 'watch') this.ui.status(me ? `Смотрим: ${me.name}${me.hidden ? ' · в кусте' : ''}${me.protected ? ' · под куполом' : ''}` : 'Смотрим: Безлик', sees ? 'danger' : '');
    else if (sees) this.ui.status('Он тебя видит! Беги!', 'danger');
    else if (me?.protected) this.ui.status('Ты под куполом — здесь не поймают', 'calm');
    else if (near && near.g.state === 'hunt' && near.g.target === me) this.ui.status('Безлик идёт по следу…', '');
    else this.ui.status(me?.hidden ? 'Тихо… он тебя ищет' : 'Безлик бродит рядом. Прячься!', 'calm');
    if (sees && !R.wasSeen) R.spotted++;
    R.wasSeen = sees;
    const k = R.spawned ? THREE.MathUtils.clamp(1 - dist / 16, 0, 1) : 0;
    this.sound.setTension(this.mode === 'watch' ? k * 0.5 : k);
    this.ui.vignette(k * (sees ? 1 : 0.6));
    this.ui.hud({ left: Math.max(0, left), stamina: me ? me.ctrl.stamina : 1, tired: me?.ctrl.exhausted, hidden: me?.hidden });
    if (pl) this.ui.cooldowns(pl.abilities, pl.ctrl);

    if (left <= 0) this.#end(true);
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

const xz = ([x, z]) => [x, 0, z];
// setTimeout, а не rAF: во фоновой вкладке rAF замирает и загрузка бы зависла
const frame = () => new Promise(r => setTimeout(r, 0));
