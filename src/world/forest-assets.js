// Художественные материалы леса загружаются до сборки сцены. Одна копия на
// устройство, повторяющиеся поверхности получают только лёгкий Texture.clone.
import * as THREE from 'three';

const FILES = {
  ground: 'forest-floor.webp',
  rock: 'moss-rock.webp',
  wood: 'aged-wood.webp',
  roof: 'indigo-roof.webp',
  maple: 'maple-foliage.webp',
  cedar: 'cedar-foliage.webp',
};

const loaded = {};
let pending;

export function loadForestAssets() {
  if (!pending) {
    const loader = new THREE.TextureLoader();
    const downloads = Promise.allSettled(Object.entries(FILES).map(async ([id, file]) => {
      const tex = await loader.loadAsync(`/assets/environment/forest/${file}`);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 4;
      if (id !== 'maple' && id !== 'cedar') tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      loaded[id] = tex;
    })).then(results => {
      if (results.some(r => r.status === 'rejected')) console.warn('Часть текстур леса недоступна; используем базовые материалы');
      return loaded;
    });
    // На медленной мобильной сети вход в игру не должен зависеть от каждого рисунка.
    pending = Promise.race([downloads, new Promise(resolve => setTimeout(() => resolve(loaded), 8000))]);
  }
  return pending;
}

export function forestTexture(id, repeatX = 1, repeatY = 1) {
  const base = loaded[id];
  if (!base) return null;
  if (repeatX === 1 && repeatY === 1) return base;
  const tex = base.clone();
  tex.repeat.set(repeatX, repeatY);
  tex.needsUpdate = true;
  return tex;
}
