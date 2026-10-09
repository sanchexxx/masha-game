// Картинки для карточек рисуем сами из 3D-моделей — отдельным маленьким рендером.
import * as THREE from 'three';

export function makeThumbnails(defs) {
  const W = 240, H = 320;
  const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  r.setSize(W, H, false);
  r.setPixelRatio(1);
  r.toneMapping = THREE.ACESFilmicToneMapping;
  r.toneMappingExposure = 1.2;

  const scene = new THREE.Scene();
  const bg = document.createElement('canvas');
  bg.width = 8; bg.height = 256;
  const g = bg.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, '#1a1a4a'); grd.addColorStop(0.6, '#3a2e6a'); grd.addColorStop(1, '#2a1b2e');
  g.fillStyle = grd; g.fillRect(0, 0, 8, 256);
  scene.background = new THREE.CanvasTexture(bg);
  scene.background.colorSpace = THREE.SRGBColorSpace;
  scene.add(new THREE.HemisphereLight(0x9aa4ff, 0x2a1830, 1.3));
  const key = new THREE.DirectionalLight(0xffe2b8, 2.2);
  key.position.set(2, 4, 5);
  scene.add(key);
  const rim = new THREE.PointLight(0xffa050, 20, 12);
  rim.position.set(-2.5, 2.5, -1.5);
  scene.add(rim);

  const cam = new THREE.PerspectiveCamera(32, W / H, 0.1, 50);
  const out = {};
  for (const d of defs) {
    const c = d.build();
    c.update(0.016, { t: 1, speed: 0, grounded: true, landed: false, mode: 'search', appear: 1 });
    c.root.rotation.y = d.id === 'catbus' ? 0.75 : 0.35;
    scene.add(c.root);
    const h = d.height;
    const dist = h * 2.5 + (d.id === 'catbus' ? 1.6 : 0.5);
    cam.position.set(0, h * 0.6, dist);
    cam.lookAt(0, h * 0.4, 0);
    r.render(scene, cam);
    out[d.id] = r.domElement.toDataURL('image/jpeg', 0.85);
    scene.remove(c.root);
  }
  r.dispose();
  r.forceContextLoss?.();
  return out;
}
