// Маша из 3D-модели (assets/models/masha/masha.glb — по развороту refs/masha-sheet.jpg, см. MODEL_NOTES.md).
// Грузится при старте вместе с Тоторо и Моти; если не загрузилась — прежняя Маша из кода (masha.js).
//  • умения: Вспышка → Spirit (толчок ладонями), Порыв листьев → Braid (кружится, коса хлещет);
//  • скин — платье, манжеты, воротничок; лицо — атлас 2×2 (улыбка, моргает, смеётся, удивление);
//  • кожа и волосы — мягкий «бархатный» свет по краям (sheen), чтобы не выглядела пластиковой куклой.
import * as THREE from 'three';
import { GLTFLoader } from 'jsm/loaders/GLTFLoader.js';
import { squash } from './common.js?v=2026100901';
import { instance, setFace, baseSwitcher } from './totoro-model.js';

const BASE = '/assets/models/masha/';
const VER = '2026110501';
export const MASHA_SKINS = {
  classic: { name: 'Школьное', hat: 0x1f2a55 },
  summer:  { name: 'Летнее',   hat: 0x7fb4e8 },
  forest:  { name: 'Лесное',   hat: 0x4f8a3a },
  holiday: { name: 'Праздничное', hat: 0x2c3f8f },
};
const PARTS = { Dress: 'dress', Cuff: 'cuff', Collar: 'collar' };

let assets = null;

export async function loadMashaModel(timeoutMs = 15000) {
  try {
    const tex = new THREE.TextureLoader();
    const load = f => tex.loadAsync(`${BASE}skins/${f}.jpg?v=${VER}`).then(t => { t.flipY = false; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; });
    const skins = Promise.all(Object.keys(MASHA_SKINS).map(async id => [id, Object.fromEntries(await Promise.all(
      Object.entries(PARTS).map(async ([m, f]) => [m, await load(`${id}_${f}`)])))]));
    const all = Promise.all([new GLTFLoader().loadAsync(`${BASE}masha.glb?v=${VER}`), skins]);
    const timeout = new Promise((_, no) => setTimeout(() => no(new Error('timeout')), timeoutMs));
    const [gltf, sk] = await Promise.race([all, timeout]);
    gltf.scene.traverse(o => {
      if (!o.isMesh) return;
      o.castShadow = true; o.frustumCulled = false;
      o.material = softer(o.material);
    });
    assets = { gltf, skins: Object.fromEntries(sk) };
    return true;
  } catch (e) {
    console.warn('Модель Маши не загрузилась, остаётся модель из кода:', e?.message || e);
    return false;
  }
}

// Кожа и волосы: физический материал с мягким отливом по краям
function softer(m) {
  const look = {
    Skin: { roughness: 0.62, sheen: 0.6, sheenColor: 0xffc4a8, sheenRoughness: 0.55 },
    Hair: { roughness: 0.45, sheen: 0.5, sheenColor: 0x4a3226, sheenRoughness: 0.4 },
    Dress: { roughness: 0.85, sheen: 0.5, sheenColor: 0x6f7fc0, sheenRoughness: 0.7 },
  }[m.name];
  if (!look) return m;
  const p = new THREE.MeshPhysicalMaterial();
  THREE.MeshStandardMaterial.prototype.copy.call(p, m);
  p.defines = { STANDARD: '', PHYSICAL: '' };   // copy() стандартного материала затирает признак физического
  p.roughness = look.roughness; p.metalness = 0;
  p.sheen = look.sheen; p.sheenColor = new THREE.Color(look.sheenColor); p.sheenRoughness = look.sheenRoughness;
  return p;
}

const BY_ID = { repel: 'Spirit', petals: 'Braid', wave: 'Wave' };
const BY_ANIM = { cast: 'Cast', summon: 'Summon', wave: 'Wave' };
const FACE_FOR = { repel: 3, petals: 2, wave: 2 };

export function buildMashaModel(skinId = 'classic') {
  if (!assets) return null;
  const { root: model, mats, mixer, clips } = instance(assets.gltf);
  const skin = assets.skins[skinId] || assets.skins.classic;
  for (const m in PARTS) if (mats[m] && skin[m]) mats[m].map = skin[m];
  const spirits = model.getObjectByName('Spirits');
  if (spirits) spirits.visible = false;
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
    else if (st.speed > 5.6) play('Run', Math.min(1.6, st.speed / 8));
    else if (st.speed > 0.3) play('Walk', Math.min(1.7, Math.max(0.6, st.speed / 4)));
    else play('Idle');
    if (st.landed && (st.landSpeed ?? 0) < -6) landT = 0.25;
    landT = Math.max(0, landT - dt);

    const a = st.action;
    const want = a ? clips[BY_ID[a.id] || BY_ANIM[a.name]] : null;
    if (shot && shot !== want) { shot.fadeOut(0.15); shot = null; }
    if (want) {
      if (shot !== want) { want.reset().setEffectiveWeight(1).fadeIn(0.1).play(); want.paused = true; shot = want; }
      want.time = Math.min(1, a.k) * want.getClip().duration;
    }
    if (spirits) { spirits.visible = !!want && want !== clips.Wave; spirits.rotation.y = t * 2; }
    mixer.update(dt);

    blinkIn -= dt;
    if (blinkIn <= 0) { blinkT = 0.12; blinkIn = 3 + Math.random() * 2; }
    blinkT = Math.max(0, blinkT - dt);
    setFace(mats, a && FACE_FOR[a.id] !== undefined ? FACE_FOR[a.id] : blinkT > 0 ? 1 : 0);
    model.position.y = st.swimming ? 0.3 : 0;
    squash(root, st, dt);
  }

  setFace(mats, 0);
  return { root, update, height: 1.34, model: true };
}
