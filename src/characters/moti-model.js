// Дядюшка Моти из 3D-модели (assets/models/moti/moti.glb — по развороту refs/moti-sheet.webp, см. MODEL_NOTES.md).
// Грузится при старте вместе с Тоторо; если не загрузился — прежний Моти из кода (moti.js).
//  • движения по состоянию героя, умения swing/cast/summon/wave/path — клипы с теми же именами, кадр в кадр;
//  • скин — текстуры меха, прядей, шляпы и повязки; лицо — атлас 2×2 (обычное, моргает, смеётся, радость).
import * as THREE from 'three';
import { GLTFLoader } from 'jsm/loaders/GLTFLoader.js';
import { liteLoad, liteScene } from '../util/lite.js';
import { squash } from './common.js?v=2026100901';
import { instance, setFace, baseSwitcher } from './totoro-model.js';

const BASE = '/assets/models/moti/';
const VER = '2026110501';
const SKINS = ['classic', 'winter', 'forest', 'holiday'];
const PARTS = { Body: 'fur.jpg', FurCard: 'card.png', Hat: 'hat.jpg', Cloth: 'cloth.jpg' };

let assets = null;      // { gltf, skins: {id: {Body, FurCard, Hat, Cloth}} }

export async function loadMotiModel(timeoutMs = 15000) {
  try {
    const load = f => liteLoad(`${BASE}skins/${f}?v=${VER}`).then(t => { t.flipY = false; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; });
    const skins = Promise.all(SKINS.map(async id => [id, Object.fromEntries(await Promise.all(
      Object.entries(PARTS).map(async ([m, f]) => [m, await load(`${id}_${f}`)])))]));
    const all = Promise.all([new GLTFLoader().loadAsync(`${BASE}moti.glb?v=${VER}`), skins]);
    const timeout = new Promise((_, no) => setTimeout(() => no(new Error('timeout')), timeoutMs));
    const [gltf, sk] = await Promise.race([all, timeout]);
    gltf.scene.traverse(o => { if (o.isMesh) { o.castShadow = true; o.frustumCulled = false; } });
    liteScene(gltf.scene);
    assets = { gltf, skins: Object.fromEntries(sk) };
    return true;
  } catch (e) {
    console.warn('Модель Моти не загрузилась, остаётся модель из кода:', e?.message || e);
    return false;
  }
}

const ONE_SHOT = { swing: 'Swing', cast: 'Cast', summon: 'Summon', wave: 'Wave', path: 'Path' };
const FACE_FOR = { wave: 3, summon: 2, cast: 3, swing: 2 };

export function buildMotiModel(skinId = 'classic') {
  if (!assets) return null;
  const { root: model, mats, mixer, clips } = instance(assets.gltf);
  const skin = assets.skins[skinId] || assets.skins.classic;
  for (const m in PARTS) if (mats[m] && skin[m]) mats[m].map = skin[m];
  const spirits = model.getObjectByName('Spirits');
  const glow = mats.LampGlow;
  const root = new THREE.Group();
  root.add(model);
  const play = baseSwitcher(clips);
  for (const name of ['Jump', 'Land']) if (clips[name]) { clips[name].setLoop(THREE.LoopOnce); clips[name].clampWhenFinished = true; }
  let shot = null, blinkIn = 3, blinkT = 0, landT = 0, t = 0;

  function update(dt, st) {
    t += dt;
    if (st.swimming) play('Swim');
    else if (!st.grounded && (st.vy ?? 0) > 1) play('Jump');
    else if (!st.grounded && (st.vy ?? 0) < -2) play('Fall');
    else if (st.crouch) play('Crouch');
    else if (landT > 0) play('Land');
    else if (st.speed > 5.2) play('Run', Math.min(1.5, st.speed / 7.5));
    else if (st.speed > 0.3) play('Walk', Math.min(1.6, Math.max(0.6, st.speed / 4.2)));
    else play('Idle');
    if (st.landed && (st.landSpeed ?? 0) < -6) landT = 0.25;
    landT = Math.max(0, landT - dt);

    const a = st.action;
    const want = a && ONE_SHOT[a.name] ? clips[ONE_SHOT[a.name]] : null;
    if (shot && shot !== want) { shot.fadeOut(0.15); shot = null; }
    if (want) {
      if (shot !== want) { want.reset().setEffectiveWeight(1).fadeIn(0.1).play(); want.paused = true; shot = want; }
      want.time = Math.min(1, a.k) * want.getClip().duration;
    }
    mixer.update(dt);

    blinkIn -= dt;
    if (blinkIn <= 0) { blinkT = 0.12; blinkIn = 3 + Math.random() * 2; }
    blinkT = Math.max(0, blinkT - dt);
    setFace(mats, a && FACE_FOR[a.name] !== undefined ? FACE_FOR[a.name] : blinkT > 0 ? 1 : 0);
    if (spirits) spirits.rotation.y = t * 1.2;               // огоньки кружат вокруг
    if (glow) glow.emissiveIntensity = 1.6 + (a ? Math.sin(Math.min(1, a.k) * Math.PI) * 2.5 : 0);
    model.position.y = st.swimming ? 0.5 : 0;
    squash(root, st, dt);
  }

  setFace(mats, 0);
  return { root, update, height: 2.4, model: true };
}
