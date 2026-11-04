// Облегчённая графика для телефонов: iPhone закрывает вкладку («страница не может быть загружена»),
// когда картинки героев и карты занимают сотни мегабайт. На телефоне уменьшаем текстуры до max
// и убираем карты рельефа у карты. ?lite=1 / ?lite=0 — включить/выключить вручную.
import * as THREE from 'three';

const q = new URLSearchParams(location.search).get('lite');
const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
export const LITE = q != null ? q !== '0' : isTouch && Math.min(screen.width, screen.height) < 820;

const done = new WeakSet();
export function shrink(t, max = 1024) {
  const img = t?.image;
  if (!LITE || !img || !img.width || done.has(t.source)) return t;
  done.add(t.source);
  const k = max / Math.max(img.width, img.height);
  if (k >= 1) return t;
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(img.width * k));
  c.height = Math.max(1, Math.round(img.height * k));
  c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
  img.close?.();
  t.image = c;
  t.needsUpdate = true;
  return t;
}

const SLOTS = ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'aoMap', 'emissiveMap', 'alphaMap', 'sheenColorMap'];
export function liteScene(root, max = 1024, dropNormals = false) {
  if (!LITE) return;
  root.traverse(o => {
    if (!o.isMesh) return;
    for (const m of [].concat(o.material)) {
      if (dropNormals && m.normalMap) { m.normalMap = null; m.needsUpdate = true; }
      for (const s of SLOTS) if (m[s]) shrink(m[s], max);
    }
  });
}

export const liteLoad = (url, max) => new THREE.TextureLoader().loadAsync(url).then(t => shrink(t, max));
