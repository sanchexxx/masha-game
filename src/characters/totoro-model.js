// Тоторо из настоящих 3D-моделей (assets/models/totoro/*.glb — сделаны по развороту, см. MODEL_NOTES.md).
// Загружаются один раз при старте; если не загрузились — игра берёт прежнюю модель из кода (totoro.js).
//  • анимации: Idle/Walk/Run/Jump/Fall/Swim/Crouch/Sit + умения (Roar/Cast/Summon/Wave/StaffSwing) кадр в кадр с действием;
//  • скины — замена текстуры у материала Body; лицо — атлас 2×2 (обычное, моргание, улыбка, рёв).
import * as THREE from 'three';
import { GLTFLoader } from 'jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'jsm/utils/SkeletonUtils.js';
import { squash } from './common.js?v=2026100901';

const BASE = '/assets/models/totoro/';
const VER = '2026110201';
const SKINS = ['classic', 'winter', 'rain', 'spring'];
// Что ещё носит Тоторо. Клетки-рюкзака нет на эскизе Маши — по умолчанию спрятана.
const GEAR_HIDDEN = ['Backpack'];

let assets = null;        // { big, mini, chibi, skins: {id: Texture} }

export function totoroModelsReady() { return !!assets; }

// Грузим всё параллельно; не дольше timeoutMs — дальше игра стартует с запасной моделью.
export async function loadTotoroModels(timeoutMs = 15000) {
  try {
    const loader = new GLTFLoader();
    const tex = new THREE.TextureLoader();
    const gltf = f => loader.loadAsync(`${BASE}${f}.glb?v=${VER}`);
    const skin = id => tex.loadAsync(`${BASE}skins/${id}.jpg?v=${VER}`).then(t => {
      t.flipY = false; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return [id, t];
    });
    const all = Promise.all([gltf('totoro'), gltf('totoro_mini'), gltf('totoro_chibi'), ...SKINS.map(skin)]);
    const timeout = new Promise((_, no) => setTimeout(() => no(new Error('timeout')), timeoutMs));
    const [big, mini, chibi, ...skins] = await Promise.race([all, timeout]);
    for (const g of [big, mini, chibi]) g.scene.traverse(o => { if (o.isMesh) { o.castShadow = true; o.frustumCulled = false; } });
    assets = { big, mini, chibi, skins: Object.fromEntries(skins) };
    return true;
  } catch (e) {
    console.warn('Модели Тоторо не загрузились, остаётся модель из кода:', e?.message || e);
    return false;
  }
}

// Своя копия материалов и текстуры лица: у каждого Тоторо своё выражение и свой скин.
function instance(gltf) {
  const root = cloneSkinned(gltf.scene);
  const mats = {};
  root.traverse(o => {
    if (!o.isMesh) return;
    const m = o.material.clone();
    if (m.name === 'Face' && m.map) { m.map = m.map.clone(); m.map.needsUpdate = true; }
    o.material = m;
    mats[m.name] = m;
  });
  const mixer = new THREE.AnimationMixer(root);
  const clips = Object.fromEntries(gltf.animations.map(c => [c.name, mixer.clipAction(c)]));
  return { root, mats, mixer, clips };
}

function setFace(mats, n) {
  const map = mats.Face?.map;
  if (map) map.offset.set(0.5 * (n % 2), 0.5 * Math.floor(n / 2));   // формула из MODEL_NOTES.md
}

// Плавно переключаем основное движение (идёт, бежит, падает…)
function baseSwitcher(clips) {
  let current = null;
  return (name, timeScale = 1) => {
    const next = clips[name];
    if (!next) return;
    next.timeScale = timeScale;
    if (current === next) return;
    next.reset().setEffectiveWeight(1).play();
    if (current) next.crossFadeFrom(current, 0.22, false);
    current = next;
  };
}

const ONE_SHOT = { roar: 'Roar', cast: 'Cast', path: 'Cast', summon: 'Summon', wave: 'Wave', swing: 'StaffSwing' };
const FACE_FOR = { roar: 3, wave: 2, summon: 2 };

export function buildTotoroModel(skinId = 'classic') {
  if (!assets) return null;
  const { root: model, mats, mixer, clips } = instance(assets.big);
  if (mats.Body && assets.skins[skinId]) mats.Body.map = assets.skins[skinId];
  model.traverse(o => { if (GEAR_HIDDEN.includes(o.name)) o.visible = false; });
  const lamp = mats.Lantern;
  const root = new THREE.Group();
  root.add(model);
  const play = baseSwitcher(clips);
  for (const name of ['Jump', 'Land']) if (clips[name]) { clips[name].setLoop(THREE.LoopOnce); clips[name].clampWhenFinished = true; }
  let shot = null, blinkIn = 3, blinkT = 0, landT = 0;

  function update(dt, st) {
    // Основное движение по состоянию героя
    if (st.riding) play('Sit');
    else if (st.swimming) play('Swim');
    else if (!st.grounded && (st.vy ?? 0) > 1) play('Jump');
    else if (!st.grounded && (st.vy ?? 0) < -2) play('Fall');
    else if (st.crouch) play('Crouch');
    else if (landT > 0) play('Land');
    else if (st.speed > 5.6) play('Run', Math.min(1.5, st.speed / 8.6));
    else if (st.speed > 0.3) play('Walk', Math.min(1.6, Math.max(0.6, st.speed / 4.8)));
    else play('Idle');
    if (st.landed && (st.landSpeed ?? 0) < -6) landT = 0.25;
    landT = Math.max(0, landT - dt);

    // Умение: клип прокручиваем вместе с действием (k от 0 до 1), поверх основного движения
    const a = st.action;
    const want = a && ONE_SHOT[a.name] ? clips[ONE_SHOT[a.name]] : null;
    if (shot && shot !== want) { shot.fadeOut(0.15); shot = null; }
    if (want) {
      if (shot !== want) { want.reset().setEffectiveWeight(1).fadeIn(0.1).play(); want.paused = true; shot = want; }
      want.time = Math.min(1, a.k) * want.getClip().duration;
    }
    mixer.update(dt);

    // Лицо: выражение по действию, иначе раз в 3–5 с моргает
    blinkIn -= dt;
    if (blinkIn <= 0) { blinkT = 0.12; blinkIn = 3 + Math.random() * 2; }
    blinkT = Math.max(0, blinkT - dt);
    setFace(mats, a && FACE_FOR[a.name] !== undefined ? FACE_FOR[a.name] : blinkT > 0 ? 1 : 0);
    if (lamp) lamp.emissiveIntensity = 1.4 + (a && a.name !== 'wave' ? Math.sin(Math.min(1, a.k) * Math.PI) * 2.5 : 0);
    // В воде клип сам кладёт тело и опускает на 0,55 м — поднимаем к поверхности
    model.position.y = st.swimming ? 0.55 : 0;
    squash(root, st, dt);
  }

  setFace(mats, 0);
  return { root, update, height: 3.0, model: true };
}

// Мини-Тоторо (Тю) и маленький Тиби — помощники-обманки
export function buildMiniModel(kind = 'chibi') {
  if (!assets) return null;
  const { root: model, mats, mixer, clips } = instance(kind === 'chu' ? assets.mini : assets.chibi);
  const root = new THREE.Group();
  root.add(model);
  const play = baseSwitcher(clips);
  setFace(mats, 0);
  let blinkIn = 2 + Math.random() * 3, blinkT = 0;
  function update(dt, st = {}) {
    const s = st.speed || 0;
    if (s > 4) play('Run', Math.min(1.6, s / 6));
    else if (s > 0.3) play('Walk');
    else play('Idle');
    mixer.update(dt);
    blinkIn -= dt;
    if (blinkIn <= 0) { blinkT = 0.12; blinkIn = 3 + Math.random() * 2; }
    blinkT = Math.max(0, blinkT - dt);
    setFace(mats, blinkT > 0 ? 1 : 0);
  }
  return { root, update, height: kind === 'chu' ? 0.95 : 0.55, model: true };
}
