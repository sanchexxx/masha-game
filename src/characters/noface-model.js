// Безлик из настоящей 3D-модели (assets/models/noface/noface.glb — по развороту, см. MODEL_NOTES.md).
// Грузится при старте; если не загрузился — остаётся прежняя модель из кода (noface.js).
//  • движения: Idle/Glide/Run/Fly/Dash/Rage/Stunned — по состоянию; Appear/Eat/MaskSwap — прокручиваем по времени;
//  • маска — атлас 4×2 (0 спокойная, 2 удивлённая, 3 хитрая, 4 злая, 7 открытый рот);
//  • скины — замена текстуры балахона; у «духовного» вокруг летают маски и огоньки.
import * as THREE from 'three';
import { GLTFLoader } from 'jsm/loaders/GLTFLoader.js';
import { liteLoad, liteScene } from '../util/lite.js';
import { clone as cloneSkinned } from 'jsm/utils/SkeletonUtils.js';

const BASE = '/assets/models/noface/';
const VER = '2026110301';

export const NOFACE_SKINS = {
  classic: { name: 'Классический', hat: 0x241c2e },
  shadow:  { name: 'Теневой',      hat: 0x8a8a96, opacity: 0.62 },
  cloth:   { name: 'Тканый',       hat: 0x2f7f78 },
  spirit:  { name: 'Духовный',     hat: 0x7d5bd6, spirits: true },
};

let assets = null;      // { gltf, skins: {id: Texture} }

export async function loadNofaceModel(timeoutMs = 12000) {
  try {
    const skin = id => liteLoad(`${BASE}skins/${id}.jpg?v=${VER}`).then(t => {
      t.flipY = false; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return [id, t];
    });
    const all = Promise.all([new GLTFLoader().loadAsync(`${BASE}noface.glb?v=${VER}`), ...Object.keys(NOFACE_SKINS).map(skin)]);
    const timeout = new Promise((_, no) => setTimeout(() => no(new Error('timeout')), timeoutMs));
    const [gltf, ...skins] = await Promise.race([all, timeout]);
    gltf.scene.traverse(o => { if (o.isMesh) { o.castShadow = o.name === 'Body'; o.frustumCulled = false; } });
    liteScene(gltf.scene);
    assets = { gltf, skins: Object.fromEntries(skins) };
    return true;
  } catch (e) {
    console.warn('Модель Безлика не загрузилась, остаётся модель из кода:', e?.message || e);
    return false;
  }
}

const LOOP = ['Idle', 'Glide', 'Run', 'Fly', 'Dash', 'Rage', 'Stunned'];
const ONCE = { Appear: 2.2, Eat: 1.1, MaskSwap: 0.6 };   // сколько секунд длится в игре
const _q = new THREE.Quaternion();

export function buildNofaceModel(skinId = 'classic') {
  if (!assets) return null;
  const model = cloneSkinned(assets.gltf.scene);
  const mats = {}, nodes = {};
  model.traverse(o => {
    nodes[o.name] = o;
    if (!o.isMesh) return;
    const m = o.material.clone();
    if (m.name === 'Mask' && m.map) { m.map = m.map.clone(); m.map.needsUpdate = true; }
    m.userData.base = m.opacity;
    if (['Aura', 'Hem', 'Wisp'].includes(m.name)) m.depthWrite = false;
    o.material = m;
    mats[m.name] = m;
  });
  // Сияние — плоскость за спиной: всегда разворачиваем к камере, иначе сбоку видна полоска
  const aura = nodes.Aura;
  if (aura) {
    aura.renderOrder = -1;
    aura.onBeforeRender = (r, s, cam) => {
      aura.parent.getWorldQuaternion(_q).invert().multiply(cam.quaternion);
      aura.quaternion.copy(_q);
      aura.updateMatrixWorld();
    };
  }
  const maskBase = mats.Mask?.emissiveIntensity ?? 0;
  const root = new THREE.Group();
  root.add(model);

  const mixer = new THREE.AnimationMixer(model);
  const clips = Object.fromEntries(assets.gltf.animations.map(c => [c.name, mixer.clipAction(c)]));
  for (const n in ONCE) if (clips[n]) { clips[n].setLoop(THREE.LoopOnce); clips[n].clampWhenFinished = true; }

  let skin = NOFACE_SKINS.classic;
  function setSkin(id) {
    skin = NOFACE_SKINS[id] || NOFACE_SKINS.classic;
    if (mats.Body && assets.skins[id]) { mats.Body.map = assets.skins[id]; mats.Body.needsUpdate = true; }
    for (const n of ['FloatingMasks', 'Wisps']) if (nodes[n]) nodes[n].visible = !!skin.spirits;
  }
  setSkin(skinId);

  let current = null;
  function play(name, k) {
    const next = clips[name] || clips.Idle;
    if (current !== next) {
      next.reset().setEffectiveWeight(1).play();
      if (current) next.crossFadeFrom(current, name === 'Appear' ? 0 : 0.25, false);
      current = next;
    }
    next.paused = k !== undefined;
    if (k !== undefined) next.time = Math.min(0.999, k) * next.getClip().duration;
  }

  function setFace(n) {
    const map = mats.Mask?.map;
    if (map) map.offset.set(0.25 * (n % 4), 0.5 * Math.floor(n / 4));   // формула из MODEL_NOTES.md
  }

  // Короткие действия (поглощение, смена маски): запоминаем начало, клип идёт по своему времени
  let once = null, onceT = 0, hunt = 0;
  function update(dt, st) {
    const ap = st.appear ?? 1;
    if (st.eat && once !== 'Eat') { once = 'Eat'; onceT = 0; }
    if (st.swap && !once) { once = 'MaskSwap'; onceT = 0; }
    if (once) { onceT += dt; if (onceT >= ONCE[once]) once = null; }
    hunt = THREE.MathUtils.lerp(hunt, st.mode === 'hunt' ? 1 : 0, 1 - Math.exp(-dt * 4));

    if (ap < 1) play('Appear', ap);
    else if (st.stunned) play('Stunned');
    else if (once) play(once, onceT / ONCE[once]);
    else if (st.rage) play('Rage');
    else if (st.dash) play('Dash');
    else if (st.fly) play('Fly');
    else if (st.speed > 6.5) play('Run');
    else if (st.speed > 0.4) play('Glide');
    else play('Idle');
    if (current && !current.paused && LOOP.includes(current.getClip().name)) {
      current.timeScale = current === clips.Glide || current === clips.Run ? THREE.MathUtils.clamp(st.speed / 4.5, 0.7, 1.6) : 1;
    }
    mixer.update(dt);

    setFace(st.rage ? 4 : once === 'Eat' ? 7 : once === 'MaskSwap' ? 3 : st.stunned ? 2 : 0);
    if (mats.Mask) mats.Mask.emissiveIntensity = maskBase * (1 + hunt * 0.6 + (st.rage ? 1.5 : 0));

    // Прозрачность: при появлении и у теневого скина
    const bodyK = (skin.opacity ?? 1) * ap;
    for (const m of [mats.Body, mats.Mask]) if (m) {
      const k = m === mats.Body ? bodyK : ap;
      m.transparent = k < 1; m.opacity = k; m.depthWrite = k > 0.95;
    }
    for (const n of ['Hem', 'Aura', 'Wisp', 'FloatingMask']) if (mats[n]) mats[n].opacity = mats[n].userData.base * ap * (n === 'Aura' ? 0.7 + hunt * 0.3 : 1);
  }

  setFace(0);
  return { root, update, setSkin, height: 2.45, model: true };
}
