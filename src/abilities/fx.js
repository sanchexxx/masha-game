// Визуальные эффекты способностей. Каждый эффект — объект с update(dt) → false, когда закончился.
import * as THREE from 'three';
import { radialTexture } from '../characters/noface.js';

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
