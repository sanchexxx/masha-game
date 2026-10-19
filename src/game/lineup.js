// Экран выбора: все герои стоят на улице рядом, по любому можно нажать.
// Выбранный светится зелёной неоновой обводкой (своя маска силуэта + проход по экрану),
// под ним — светящийся круг, над головой — табличка с именем.
import * as THREE from 'three';
import { HERO_ABILITIES } from '../abilities/abilities.js';

const GESTURES = ['wave', 'cast', 'summon', 'glare', 'swing'];
const NEON = new THREE.Color(0x3dff8a);

function gestureOf(id) {
  const list = HERO_ABILITIES[id] || [];
  const a = list.find(x => x.anim === 'wave') || list.find(x => GESTURES.includes(x.anim));
  return a ? { name: a.anim, dur: Math.max(0.9, a.dur) } : null;
}

// Маска силуэта → экранный проход: тонкая яркая обводка + мягкое свечение снаружи.
class NeonOutline {
  constructor() {
    this.rt = new THREE.WebGLRenderTarget(4, 4, { depthBuffer: true });
    this.selMat = new THREE.MeshBasicMaterial({ color: 0xff0000, fog: false });
    this.hovMat = new THREE.MeshBasicMaterial({ color: 0x00ff00, fog: false });
    this.mat = new THREE.ShaderMaterial({
      uniforms: { mask: { value: this.rt.texture }, texel: { value: new THREE.Vector2(1, 1) }, time: { value: 0 }, neon: { value: NEON } },
      vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: `
        uniform sampler2D mask; uniform vec2 texel; uniform float time; uniform vec3 neon;
        varying vec2 vUv;
        void main() {
          vec4 c = texture2D(mask, vUv);
          float sel = 0.0, hov = 0.0, glow = 0.0;
          for (int i = 0; i < 16; i++) {
            float a = float(i) * 0.3927;
            vec2 d = vec2(cos(a), sin(a)) * texel;
            vec4 s1 = texture2D(mask, vUv + d * 2.2);
            sel = max(sel, s1.r); hov = max(hov, s1.g);
            glow += texture2D(mask, vUv + d * 5.5).r + texture2D(mask, vUv + d * 10.0).r * 0.6;
          }
          glow /= 25.6;
          float outside = 1.0 - c.r;
          float pulse = 0.78 + 0.22 * sin(time * 3.6);
          float edge = sel * outside;
          float halo = glow * outside * pulse;
          float hedge = hov * (1.0 - c.g) * (1.0 - sel);
          vec3 col = mix(neon, vec3(0.85, 1.0, 0.9), edge * 0.35) * (edge * 1.25 + halo * 1.1) + c.r * neon * 0.05
                   + vec3(1.0, 0.93, 0.78) * hedge * 0.75;
          float alpha = clamp(edge + halo * 0.95 + c.r * 0.05 + hedge * 0.6, 0.0, 1.0);
          gl_FragColor = vec4(col, alpha);
        }`,
      transparent: true, depthTest: false, depthWrite: false,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.mat);
    this.quad.frustumCulled = false;
    this.qscene = new THREE.Scene();
    this.qscene.add(this.quad);
    this.qcam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.size = new THREE.Vector2();
    this.clear = new THREE.Color();
  }

  #mask(renderer, root, mat, camera) {
    const saved = [], hidden = [];
    root.traverse(o => {
      if (o.isMesh && o.visible && o.material?.blending !== THREE.AdditiveBlending) { saved.push([o, o.material]); o.material = mat; }
      else if ((o.isSprite || o.isPoints || o.isLine || o.isMesh) && o.visible) { hidden.push(o); o.visible = false; }
    });
    renderer.render(root, camera);
    for (const [o, m] of saved) o.material = m;
    for (const o of hidden) o.visible = true;
  }

  render(renderer, camera, selRoot, hovRoot, time) {
    if (!selRoot && !hovRoot) return;
    renderer.getDrawingBufferSize(this.size);
    const w = Math.max(4, Math.round(this.size.x * 0.5)), h = Math.max(4, Math.round(this.size.y * 0.5));
    if (this.rt.width !== w || this.rt.height !== h) this.rt.setSize(w, h);
    this.mat.uniforms.texel.value.set(1 / w, 1 / h);
    this.mat.uniforms.time.value = time;
    renderer.getClearColor(this.clear);
    const alpha = renderer.getClearAlpha(), auto = renderer.autoClear;
    const shadows = renderer.shadowMap.autoUpdate;
    renderer.shadowMap.autoUpdate = false;
    renderer.setRenderTarget(this.rt);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.autoClear = false;
    if (hovRoot && hovRoot !== selRoot) this.#mask(renderer, hovRoot, this.hovMat, camera);
    if (selRoot) this.#mask(renderer, selRoot, this.selMat, camera);
    renderer.setRenderTarget(null);
    renderer.setClearColor(this.clear, alpha);
    renderer.render(this.qscene, this.qcam);
    renderer.autoClear = auto;
    renderer.shadowMap.autoUpdate = shadows;
  }
}

function ringTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 20, 64, 64, 64);
  g.addColorStop(0, 'rgba(61,255,138,0)');
  g.addColorStop(0.62, 'rgba(61,255,138,.18)');
  g.addColorStop(0.8, 'rgba(160,255,200,1)');
  g.addColorStop(0.88, 'rgba(61,255,138,.55)');
  g.addColorStop(1, 'rgba(61,255,138,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

export class Lineup {
  // tags — контейнер DOM для табличек; onPick(id) — герой выбран нажатием
  constructor({ tags, onPick }) {
    this.tagBox = tags;
    this.onPick = onPick;
    this.slots = [];
    this.selected = null;
    this.hover = null;
    this.outline = new NeonOutline();
    this.ring = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({
      map: ringTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    }));
    this.ring.rotation.x = -Math.PI / 2;
    this.ring.renderOrder = 2;
    this.light = new THREE.PointLight(0x5dffa0, 0, 6, 1.8);
    this.camPos = new THREE.Vector3();
    this.camLook = new THREE.Vector3();
    this.snapCam = true;
    this.ray = new THREE.Raycaster();
    this.v = new THREE.Vector3();
  }

  // entries: [{hero, char}] в порядке карточек; base — точка появления героя на карте
  build(scene, base, entries) {
    this.scene = scene;
    this.base = base.clone();
    scene.add(this.ring, this.light);
    this.tagBox.innerHTML = '';
    this.slots = entries.map(({ hero, char, ghost }, i) => {
      const tag = document.createElement('button');
      tag.className = 'lu-tag';
      tag.dataset.id = hero.id;
      tag.innerHTML = `<b>${hero.name}</b><i class="lu-dot ${hero.rarityClass}"></i>`;
      tag.addEventListener('click', e => { e.stopPropagation(); this.onPick(hero.id); });
      this.tagBox.appendChild(tag);
      return {
        hero, char, ghost, tag, i,
        width: hero.radius * 2 + 0.3,
        pos: new THREE.Vector3(), target: new THREE.Vector3(), step: 0,
        gesture: ghost ? null : gestureOf(hero.id), action: null, idleIn: 3 + Math.random() * 6,
      };
    });
    this.layoutKey = '';
    this.snapCam = true;
  }

  clear() {
    this.ring.removeFromParent();
    this.light.removeFromParent();
    this.slots = [];
    if (this.tagBox) this.tagBox.innerHTML = '';
  }

  select(id) {
    this.selected = id;
    const s = this.slots.find(x => x.hero.id === id);
    if (s?.gesture) s.action = { ...s.gesture, t: 0 };
    for (const x of this.slots) x.tag.classList.toggle('on', x.hero.id === id);
  }

  // Раскладка: широкий экран — одна дуга, узкий — два ряда (малыши впереди).
  #layout(free) {
    const twoRows = (free.w / Math.max(1, free.h)) < 1.05;
    const key = twoRows ? 'two' : 'one';
    if (key === this.layoutKey) return;
    this.layoutKey = key;
    const rows = twoRows
      ? [this.slots.filter(s => ['kid', 'masha', 'catbus'].includes(s.hero.id)), this.slots.filter(s => !['kid', 'masha', 'catbus'].includes(s.hero.id))]
      : [this.slots];
    rows.forEach((row, r) => {
      const gap = 0.12;
      const total = row.reduce((sum, s) => sum + s.width, 0) + gap * (row.length - 1);
      let x = -total / 2;
      for (const s of row) {
        const cx = x + s.width / 2;
        x += s.width + gap;
        s.target.set(this.base.x + cx, this.base.y, this.base.z + 1.2 - r * 2.3 - cx * cx * 0.035);
        if (!s.placed) { s.pos.copy(s.target); s.placed = true; }
      }
    });
    this.bounds = { rows: rows.length, width: Math.max(...rows.map(row => row.reduce((sum, s) => sum + s.width, 0) + 0.12 * (row.length - 1))) };
    this.snapCam = true;
  }

  // Кадр экрана выбора: анимации, камера, таблички.
  update(dt, t, camera, free) {
    if (!this.slots.length) return;
    this.#layout(free);
    const sel = this.slots.find(s => s.hero.id === this.selected);

    // Камера смотрит так, чтобы вся шеренга помещалась в свободную часть экрана.
    const vfov = THREE.MathUtils.degToRad(camera.fov);
    const tanV = Math.tan(vfov / 2), tanH = tanV * camera.aspect;
    const fw = Math.max(0.25, free.w / innerWidth), fh = Math.max(0.25, free.h / innerHeight);
    const tallest = Math.max(...this.slots.map(s => s.hero.height)) + 0.7;
    const depth = this.bounds.rows > 1 ? 2.3 : 0.6;
    const W = this.bounds.width * 1.08, H = tallest * 1.12;
    const dist = Math.max(W / (fw * 2 * tanH), H / (fh * 2 * tanV)) + depth;
    const yaw = 0.1 + Math.sin(t * 0.12) * 0.05 + (sel ? (sel.target.x - this.base.x) * 0.012 : 0);
    const pitch = 0.16;
    const center = new THREE.Vector3(this.base.x, this.base.y + tallest * 0.45, this.base.z + (this.bounds.rows > 1 ? -1.1 : 0.9));
    const dir = new THREE.Vector3(Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch));
    const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
    const up = new THREE.Vector3().crossVectors(right, dir).negate().normalize();
    const cx = ((free.x + free.w / 2) / innerWidth) * 2 - 1;
    const cy = 1 - ((free.y + free.h / 2) / innerHeight) * 2;
    const look = center.clone().addScaledVector(right, -cx * dist * tanH).addScaledVector(up, -cy * dist * tanV);
    const pos = look.clone().addScaledVector(dir, dist);
    const k = this.snapCam ? 1 : 1 - Math.exp(-dt * 3);
    this.snapCam = false;
    this.camPos.lerp(pos, k);
    this.camLook.lerp(look, k);
    camera.position.copy(this.camPos);
    camera.lookAt(this.camLook);
    camera.updateMatrixWorld();

    for (const s of this.slots) {
      const isSel = s === sel;
      s.step += ((isSel ? 0.55 : 0) - s.step) * Math.min(1, dt * 6);
      s.pos.lerp(s.target, Math.min(1, dt * 5));
      const root = s.char.root;
      root.position.set(s.pos.x, s.pos.y, s.pos.z + s.step);
      const face = Math.atan2(this.camPos.x - root.position.x, this.camPos.z - root.position.z);
      root.rotation.y = face * 0.75 + Math.sin(t * 0.5 + s.i) * 0.12;
      if (s.ghost) {
        s.char.update(dt, { t: t + s.i, speed: 0, mode: Math.sin(t * 0.5 + s.i) > 0.4 ? 'hunt' : 'search', appear: 1 });
      } else {
        s.idleIn -= dt;
        if (!s.action && s.gesture && s.idleIn <= 0) { s.action = { ...s.gesture, t: 0 }; s.idleIn = 7 + Math.random() * 9; }
        let pose = null;
        if (s.action) {
          s.action.t += dt;
          pose = { name: s.action.name, k: Math.min(1, s.action.t / s.action.dur) };
          if (s.action.t >= s.action.dur) s.action = null;
        }
        s.char.update(dt, { t: t + s.i * 0.7, speed: 0, grounded: true, landed: false, action: pose });
      }
      // табличка над головой
      this.v.set(root.position.x, root.position.y + s.hero.height + 0.32, root.position.z).project(camera);
      s.sx = (this.v.x + 1) / 2 * innerWidth;
      s.sy = (1 - this.v.y) / 2 * innerHeight;
      s.tag.style.visibility = this.v.z < 1 ? '' : 'hidden';
    }
    // Таблички не налезают друг на друга: мешающую поднимаем выше (выбранная — всегда на своём месте).
    const placed = [];
    const order = [...this.slots].sort((a, b) => (b === sel) - (a === sel) || a.sy - b.sy);
    for (const s of order) {
      const w = s.tag.offsetWidth + 6, h = s.tag.offsetHeight + 4;
      let y = s.sy;
      for (let n = 0; n < 6; n++) {
        const hit = placed.find(r => Math.abs(r.x - Math.min(innerWidth - w / 2 - 2, Math.max(w / 2 + 2, s.sx))) < (r.w + w) / 2 && y > r.y - h && y - h < r.y);
        if (!hit) break;
        y = hit.y - hit.h;
      }
      const x = Math.min(innerWidth - w / 2 - 2, Math.max(w / 2 + 2, s.sx));
      placed.push({ x, y, w, h });
      s.tag.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -100%)`;
    }

    if (sel) {
      const p = sel.char.root.position;
      const r = sel.width * 1.15;
      this.ring.visible = true;
      this.ring.position.set(p.x, p.y + 0.03, p.z);
      this.ring.scale.setScalar(r * (1 + Math.sin(t * 3.6) * 0.04));
      this.ring.material.opacity = 0.85 + Math.sin(t * 3.6) * 0.15;
      this.light.position.set(p.x, p.y + sel.hero.height * 0.7, p.z + 1.2);
      this.light.intensity = 5 + Math.sin(t * 3.6) * 1.2;
    } else { this.ring.visible = false; this.light.intensity = 0; }
  }

  // Неоновая обводка поверх готового кадра
  renderOutline(renderer, camera, t) {
    const sel = this.slots.find(s => s.hero.id === this.selected);
    const hov = this.slots.find(s => s.hero.id === this.hover);
    this.outline.render(renderer, camera, sel?.char.root || null, hov?.char.root || null, t);
  }

  // Кто под пальцем/мышкой: сначала точное попадание по модели, потом — по прямоугольнику героя.
  pick(clientX, clientY, camera) {
    if (!this.slots.length) return null;
    const ndc = new THREE.Vector2(clientX / innerWidth * 2 - 1, -(clientY / innerHeight) * 2 + 1);
    this.ray.setFromCamera(ndc, camera);
    let best = null, bestD = Infinity;
    for (const s of this.slots) {
      const hit = this.ray.intersectObject(s.char.root, true)[0];
      if (hit && hit.distance < bestD) { bestD = hit.distance; best = s; }
    }
    if (best) return best.hero.id;
    for (const s of this.slots) {
      const p = s.char.root.position;
      const a = this.v.set(p.x, p.y, p.z).project(camera).clone();
      const b = this.v.set(p.x, p.y + s.hero.height, p.z).project(camera).clone();
      const half = Math.abs(this.v.set(p.x + s.width / 2, p.y, p.z).project(camera).x - a.x);
      if (Math.abs(ndc.x - a.x) <= half && ndc.y >= a.y - 0.02 && ndc.y <= b.y + 0.04) return s.hero.id;
    }
    return null;
  }

  // Прямоугольник на экране вокруг всех героев — для подсветки в обучении.
  screenRect(camera) {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const s of this.slots) {
      const p = s.char.root.position;
      for (const [dx, dy] of [[-s.width / 2, 0], [s.width / 2, 0], [0, s.hero.height + 0.6]]) {
        this.v.set(p.x + dx, p.y + dy, p.z).project(camera);
        const sx = (this.v.x + 1) / 2 * innerWidth, sy = (1 - this.v.y) / 2 * innerHeight;
        x0 = Math.min(x0, sx); x1 = Math.max(x1, sx); y0 = Math.min(y0, sy); y1 = Math.max(y1, sy);
      }
    }
    return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
  }
}
