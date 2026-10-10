// Визуальные эффекты способностей. Каждый эффект — объект с update(dt) → false, когда закончился.
import * as THREE from 'three';
import { radialTexture } from '../characters/noface.js?v=2026100901';

const glowTex = radialTexture('rgba(255,210,130,1)', 'rgba(255,150,40,0)', 64);

// Купол: золотистая сфера, ярче по краю (эффект «мыльного пузыря»)
export function dome(scene, x, z, r, dur) {
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
    uniforms: { uT: { value: 0 }, uA: { value: 0 } },
    vertexShader: `varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main(){ vec4 w = modelMatrix*vec4(position,1.); vP = position; vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix*viewMatrix*w; }`,
    fragmentShader: `uniform float uT; uniform float uA; varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main(){ float f = pow(1. - abs(dot(vN, vV)), 2.2);
        float hex = step(0.92, fract(vP.y*3.5 + uT*0.4)) * 0.25;
        vec3 c = mix(vec3(1.,.72,.3), vec3(1.,.9,.6), f);
        gl_FragColor = vec4(c, (0.06 + f*0.75 + hex*f) * uA); }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), m);
  mesh.position.set(x, 0, z);
  scene.add(mesh);
  const ring = groundRing(scene, x, z, r, 0xffc060);
  let t = 0;
  return {
    x, z, r,
    update(dt) {
      t += dt;
      const grow = Math.min(1, t / 0.4);
      mesh.scale.setScalar(0.2 + 0.8 * (1 - (1 - grow) ** 3));
      m.uniforms.uT.value = t;
      m.uniforms.uA.value = Math.min(1, t / 0.3) * Math.min(1, (dur - t) / 0.6);
      ring.material.opacity = m.uniforms.uA.value * 0.6;
      if (t >= dur) { scene.remove(mesh, ring); m.dispose(); return false; }
      return true;
    },
  };
}

function groundRing(scene, x, z, r, color) {
  const ring = new THREE.Mesh(new THREE.RingGeometry(r * 0.94, r, 48), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending }));
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(x, 0.05, z);
  scene.add(ring);
  return ring;
}

// Волна Братьев: два коротких светящихся контура, фиолетовый вариант закручивается.
export function spiritPulse(scene, x, y, z, radius, color, spiral = false) {
  const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9,
    side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
  const geo = new THREE.RingGeometry(0.86, 1, 48);
  const rings = [0, 1].map(i => {
    const ring = new THREE.Mesh(geo, material);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(x, y + 0.12 + i * 0.05, z);
    scene.add(ring);
    return ring;
  });
  let t = 0;
  return {
    update(dt) {
      t += dt;
      rings.forEach((ring, i) => {
        const k = Math.min(1, Math.max(0, (t - i * 0.12) / 0.62));
        const size = 0.3 + radius * k;
        ring.scale.set(size, size, size);
        if (spiral) ring.rotation.z = t * (i ? -7 : 6);
      });
      material.opacity = Math.max(0, 0.9 - t * 1.25);
      if (t > 0.75) { rings.forEach(ring => scene.remove(ring)); geo.dispose(); material.dispose(); return false; }
      return true;
    },
  };
}

// Нарисованные прямо в Canvas огоньки сохраняют чёткий силуэт и глаза на телефоне.
const spiritTextures = new Map();
const symbolTextures = new Map();
function symbolTexture(kind) {
  if (symbolTextures.has(kind)) return symbolTextures.get(kind);
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 128;
  const c = canvas.getContext('2d');
  const color = kind === 'glare' ? '#ffd47a' : '#e5a7ff';
  c.strokeStyle = color; c.lineWidth = 9; c.lineCap = 'round';
  c.shadowColor = color; c.shadowBlur = 15;
  if (kind === 'glare') {
    c.beginPath(); c.moveTo(9, 64); c.quadraticCurveTo(64, 9, 119, 64);
    c.quadraticCurveTo(64, 119, 9, 64); c.stroke();
    c.beginPath(); c.arc(64, 64, 17, 0, Math.PI * 2); c.stroke();
    c.fillStyle = '#fff4cc'; c.beginPath(); c.arc(64, 64, 8, 0, Math.PI * 2); c.fill();
  } else {
    c.beginPath();
    for (let i = 0; i <= 110; i++) {
      const t = i / 110, a = t * Math.PI * 5.5, r = 3 + t * 47;
      const x = 64 + Math.cos(a) * r, y = 64 + Math.sin(a) * r;
      if (i === 0) c.moveTo(x, y); else c.lineTo(x, y);
    }
    c.stroke();
  }
  const tex = new THREE.CanvasTexture(canvas); tex.colorSpace = THREE.SRGBColorSpace;
  symbolTextures.set(kind, tex); return tex;
}
function spiritTexture(color) {
  if (spiritTextures.has(color)) return spiritTextures.get(color);
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 128;
  const c = canvas.getContext('2d');
  c.shadowColor = color; c.shadowBlur = 20; c.fillStyle = color;
  c.beginPath();
  c.moveTo(64, 5); c.bezierCurveTo(31, 34, 75, 35, 32, 74);
  c.bezierCurveTo(19, 90, 27, 113, 61, 118);
  c.bezierCurveTo(99, 121, 111, 95, 94, 75);
  c.bezierCurveTo(76, 54, 76, 40, 64, 5); c.fill();
  c.shadowBlur = 0; c.fillStyle = '#fff0e8';
  c.beginPath(); c.ellipse(61, 80, 27, 25, 0, 0, Math.PI * 2); c.fill();
  c.fillStyle = '#4c153b';
  for (const ex of [51, 72]) { c.beginPath(); c.ellipse(ex, 79, 3.5, 5, 0, 0, Math.PI * 2); c.fill(); }
  c.beginPath(); c.ellipse(62, 96, 5, 6, 0, 0, Math.PI * 2); c.fill();
  const tex = new THREE.CanvasTexture(canvas); tex.colorSpace = THREE.SRGBColorSpace;
  spiritTextures.set(color, tex); return tex;
}

function spiritScene(scene, x, y, z, radius, color, kind) {
  const group = new THREE.Group(); group.position.set(x, y, z); scene.add(group);
  const sprites = [];
  const count = kind === 'fear' ? 7 : kind === 'hypnosis' || kind === 'stubborn' ? 5 : 3;
  const tex = spiritTexture(kind === 'fear' ? '#ff4166' : kind === 'hypnosis' ? '#b45aff' : kind === 'stubborn' ? '#42f8b7' : '#ffc357');
  for (let i = 0; i < count; i++) {
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, opacity: 0 });
    const sp = new THREE.Sprite(mat);
    sp.scale.setScalar(kind === 'fear' ? 1.7 : 1.25);
    group.add(sp); sprites.push(sp);
  }
  const rings = [0, 1].map(i => {
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0,
      side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.94, 1, 64), mat);
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.06 + i * 0.08; group.add(ring); return ring;
  });
  let symbol = null;
  if (kind === 'hypnosis' || kind === 'glare') {
    symbol = new THREE.Sprite(new THREE.SpriteMaterial({ map: symbolTexture(kind), transparent: true,
      depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, opacity: 0 }));
    symbol.position.set(0, 2.1, 0);
    symbol.scale.setScalar(kind === 'glare' ? 3.2 : 2.6);
    group.add(symbol);
  }
  const trails = [];
  for (let i = 0; i < (kind === 'fear' ? 4 : 3); i++) {
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(1.4 + i * 0.28, kind === 'glare' ? 0.035 : 0.075, 5, 52, Math.PI * 1.25),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    mesh.rotation.set(Math.PI * (0.2 + i * 0.15), i * 1.1, i * 1.4); mesh.position.y = 1.1 + i * 0.27;
    group.add(mesh); trails.push(mesh);
  }
  let t = 0;
  const dur = kind === 'fear' || kind === 'stubborn' ? 1.6 : kind === 'hypnosis' ? 2.1 : 1.2;
  return { update(dt) {
    t += dt;
    const fade = Math.min(1, t * 6) * Math.min(1, (dur - t) * 2.5);
    sprites.forEach((sp, i) => {
      const a = i * Math.PI * 2 / count + (kind === 'hypnosis' ? t * 2.5 : t * 0.85);
      const r = (0.7 + (i % 3) * 0.3) + Math.min(1, t) * (kind === 'fear' ? 1.9 : 1.2);
      sp.position.set(Math.cos(a) * r, 0.85 + (i % 3) * 0.48 + Math.sin(t * 5 + i) * 0.22, Math.sin(a) * r);
      sp.material.opacity = Math.max(0, fade * (kind === 'fear' ? 0.92 : 0.72));
      sp.material.rotation = Math.sin(t * 4 + i) * 0.2;
    });
    rings.forEach((ring, i) => {
      const k = Math.min(1, Math.max(0, (t - i * 0.16) / 0.8));
      ring.scale.setScalar(0.35 + k * radius);
      ring.material.opacity = fade * (1 - k) * 0.85;
    });
    trails.forEach((mesh, i) => {
      mesh.rotation.z += dt * (kind === 'hypnosis' ? 3.5 : 1.3) * (i % 2 ? -1 : 1);
      mesh.scale.setScalar(0.6 + t * (kind === 'fear' ? 1.6 : 0.7));
      mesh.material.opacity = fade * (kind === 'glare' ? 0.35 : 0.6);
    });
    if (symbol) {
      symbol.material.opacity = fade * 0.92;
      symbol.material.rotation = kind === 'hypnosis' ? t * 3 : 0;
      symbol.scale.setScalar((kind === 'glare' ? 3.2 : 2.6) * (0.8 + t * 0.26));
    }
    if (t < dur) return true;
    scene.remove(group);
    group.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
    return false;
  } };
}

export function fearWave(scene, x, y, z, radius) { return spiritScene(scene, x, y, z, radius, 0xff315a, 'fear'); }
export function hypnosisVortex(scene, x, y, z, radius) { return spiritScene(scene, x, y, z, radius, 0xb263ff, 'hypnosis'); }
export function glareFlash(scene, x, y, z, radius) { return spiritScene(scene, x, y, z, radius, 0xffbb55, 'glare'); }
export function stubbornGlow(scene, x, y, z) { return spiritScene(scene, x, y, z, 3.4, 0x42f8b7, 'stubborn'); }

// Вспышка тёплого света: расходящееся кольцо + поднимающиеся искры
export function burst(scene, x, z, r, color = 0xff8f9a) {
  const ring = groundRing(scene, x, z, 1, color);
  const n = 24;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(n * 3), vel = [];
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, d = Math.random() * r * 0.8;
    pos.set([x + Math.cos(a) * d, 0.3 + Math.random(), z + Math.sin(a) * d], i * 3);
    vel.push(0.8 + Math.random() * 1.5);
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.4, map: glowTex, color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  scene.add(pts);
  let t = 0;
  return {
    update(dt) {
      t += dt;
      ring.scale.setScalar(1 + t * r * 1.6);
      ring.material.opacity = Math.max(0, 0.8 - t);
      for (let i = 0; i < n; i++) pos[i * 3 + 1] += vel[i] * dt;
      geo.attributes.position.needsUpdate = true;
      pts.material.opacity = Math.max(0, 1 - t / 1.4);
      if (t > 1.4) { scene.remove(ring, pts); geo.dispose(); return false; }
      return true;
    },
  };
}

// Огонёк-помощник: летит к цели, по пути оставляет искры
export function wisp(scene, from, getTarget, onHit, life = 6) {
  const g = new THREE.Group();
  const m = new THREE.MeshStandardMaterial({ color: 0xffd08a, emissive: 0xff9a3a, emissiveIntensity: 2.6 });
  g.add(new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), m));
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.28, 8), m);
  cone.position.y = 0.18;
  g.add(cone);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.scale.set(1.1, 1.1, 1);
  g.add(halo);
  g.position.copy(from);
  scene.add(g);
  const vel = new THREE.Vector3((Math.random() - 0.5) * 4, 3, (Math.random() - 0.5) * 4);
  let t = 0;
  return {
    update(dt) {
      t += dt;
      const tg = getTarget();
      if (tg) {
        const want = new THREE.Vector3(tg.x, 1.6, tg.z).sub(g.position);
        const d = want.length();
        if (d < 0.8) { onHit(tg); scene.remove(g); return false; }
        vel.lerp(want.setLength(11), Math.min(1, dt * 2.5));
      } else vel.y += dt * 1.5;
      g.position.addScaledVector(vel, dt);
      g.rotation.y += dt * 6;
      halo.material.opacity = 0.6 + Math.sin(t * 20) * 0.2;
      if (t > life) { scene.remove(g); return false; }
      return true;
    },
  };
}

// Светящиеся следы-лапки по пути
export function pawPath(scene, points, dur) {
  const tex = new THREE.CanvasTexture((() => {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d');
    x.fillStyle = '#ffd98a';
    x.beginPath(); x.ellipse(32, 40, 13, 11, 0, 0, Math.PI * 2); x.fill();
    for (const [a, b] of [[17, 22], [27, 15], [38, 15], [48, 22]]) { x.beginPath(); x.ellipse(a, b, 5, 6, 0, 0, Math.PI * 2); x.fill(); }
    return c;
  })());
  const m = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const geo = new THREE.PlaneGeometry(0.5, 0.5);
  const prints = [];
  let side = 1;
  for (let i = 0; i < points.length - 1; i++) {
    const [ax, az] = points[i], [bx, bz] = points[i + 1];
    const len = Math.hypot(bx - ax, bz - az);
    const yaw = Math.atan2(bx - ax, bz - az);
    for (let s = 0; s < len; s += 0.8) {
      const k = s / len;
      const p = new THREE.Mesh(geo, m);
      p.rotation.set(-Math.PI / 2, 0, yaw + Math.PI);   // пальчики смотрят по ходу пути
      p.position.set(ax + (bx - ax) * k + Math.cos(yaw) * 0.18 * side, 0.04, az + (bz - az) * k - Math.sin(yaw) * 0.18 * side);
      side = -side;
      p.userData.delay = prints.length * 0.04;
      p.visible = false;
      scene.add(p);
      prints.push(p);
    }
  }
  let t = 0;
  return {
    update(dt) {
      t += dt;
      for (const p of prints) p.visible = t > p.userData.delay;
      m.opacity = Math.min(1, (dur - t) / 1) * (0.75 + Math.sin(t * 5) * 0.25);
      if (t > dur) { prints.forEach(p => scene.remove(p)); geo.dispose(); return false; }
      return true;
    },
  };
}

// Метка над Безликом, видная сквозь стены
export function marker(scene, getPos, dur) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: radialTexture('rgba(190,120,255,1)', 'rgba(120,40,200,0)', 64), depthTest: false, transparent: true, blending: THREE.AdditiveBlending }));
  s.scale.set(1.6, 1.6, 1);
  s.renderOrder = 10;
  scene.add(s);
  let t = 0;
  return {
    update(dt) {
      t += dt;
      const p = getPos();
      s.position.set(p.x, 3.3 + Math.sin(t * 4) * 0.15, p.z);
      s.material.opacity = Math.min(1, (dur - t));
      if (t > dur) { scene.remove(s); return false; }
      return true;
    },
  };
}

// След удара фонарём: светящаяся дуга перед героем
export function swingArc(scene, x, y, z, yaw) {
  const m = new THREE.MeshBasicMaterial({ color: 0xffc060, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
  // дуга в плоскости земли; середина дуги смотрит «вперёд» героя
  const arc = new THREE.Mesh(new THREE.RingGeometry(1.4, 2.0, 32, 1, -Math.PI * 0.85, Math.PI * 0.7), m);
  arc.rotation.x = -Math.PI / 2;
  const holder = new THREE.Group();
  holder.add(arc);
  holder.rotation.y = yaw;
  holder.position.set(x, y + 1.1, z);
  scene.add(holder);
  let t = 0;
  return {
    update(dt) {
      t += dt;
      m.opacity = Math.max(0, 0.9 - t * 2.5);
      arc.scale.setScalar(1 + t * 0.6);
      if (t > 0.4) { scene.remove(holder); return false; }
      return true;
    },
  };
}
