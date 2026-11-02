// Дождь на всю карту (умение Тоторо «Вызов дождя»).
// ПРОСТАЯ ВЕРСИЯ: косые струи вокруг камеры. Красивую версию делает облачный агент (HANDOFF-RAIN-FX.md)
// и кладёт в этот же файл с ТЕМ ЖЕ набором команд: createRain(scene) → { setScene, start, stop, update, active }.
import * as THREE from 'three';

const N = 1400, AREA = 26, TOP = 16;

export function createRain(scene) {
  const pos = new Float32Array(N * 6);
  const speed = new Float32Array(N);
  for (let i = 0; i < N; i++) speed[i] = 18 + Math.random() * 8;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.LineBasicMaterial({ color: 0xa9c8ff, transparent: true, opacity: 0, depthWrite: false });
  const lines = new THREE.LineSegments(geo, mat);
  lines.frustumCulled = false;
  lines.visible = false;
  scene.add(lines);
  let left = 0, fade = 0, seeded = false;
  const seed = c => {
    for (let i = 0; i < N; i++) {
      const x = c.x + (Math.random() - 0.5) * AREA * 2, z = c.z + (Math.random() - 0.5) * AREA * 2, y = Math.random() * TOP;
      pos.set([x, y, z, x + 0.08, y + 0.7, z + 0.04], i * 6);
    }
    seeded = true;
  };
  return {
    get active() { return left > 0; },
    setScene(s) { s.add(lines); },
    start(sec) { left = Math.max(left, sec); seeded = false; },
    stop() { left = 0; fade = 0; lines.visible = false; mat.opacity = 0; },
    update(dt, camera) {
      left = Math.max(0, left - dt);
      fade += ((left > 0 ? 1 : 0) - fade) * Math.min(1, dt * 2.5);
      lines.visible = fade > 0.02;
      if (!lines.visible) return;
      const c = camera.position;
      if (!seeded) seed(c);
      mat.opacity = 0.55 * fade;
      for (let i = 0; i < N; i++) {
        const o = i * 6, d = speed[i] * dt;
        pos[o + 1] -= d; pos[o + 4] -= d; pos[o] -= d * 0.1; pos[o + 3] -= d * 0.1;
        if (pos[o + 1] < 0 || Math.abs(pos[o] - c.x) > AREA || Math.abs(pos[o + 2] - c.z) > AREA) {
          const x = c.x + (Math.random() - 0.5) * AREA * 2, z = c.z + (Math.random() - 0.5) * AREA * 2, y = TOP * (0.6 + Math.random() * 0.4);
          pos.set([x, y, z, x + 0.08, y + 0.7, z + 0.04], o);
        }
      }
      geo.attributes.position.needsUpdate = true;
    },
  };
}
