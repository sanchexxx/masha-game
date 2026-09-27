// Карта «Ночная деревня духов»: дорожки крестом, домики с горящими окнами,
// святилище на севере (там появляется Безлик), ящики для паркура, кусты-укрытия.
import * as THREE from '../../vendor/three.min.js';
import { CollisionWorld } from './colliders.js';
import { canvasTexture, mat, mesh, G, fluffySphere } from '../characters/common.js';
import { radialTexture } from '../characters/noface.js';
import { mergeStatic } from './merge.js';

export const HALF = 44;   // деревня в центре (±32) + кольцо: лабиринт, бамбук, склады с крышами, тыквенное поле

export function buildMap(scene, { isMobile }) {
  const world = new CollisionWorld(HALF);
  const cameraBlockers = [];
  // Невидимые «стены для камеры»: камера подъезжает ближе, если между ней и героем стена или крыша.
  // Это отдельные простые коробки — сама картинка потом склеивается в большие меши.
  const blockMat = new THREE.MeshBasicMaterial();
  const blocker = (x, y, z, w, h, d) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), blockMat);
    m.position.set(x, y, z);
    m.updateMatrixWorld(true);
    cameraBlockers.push(m);
  };
  const glowTex = radialTexture('rgba(255,190,110,0.9)', 'rgba(255,140,40,0)');
  const lanternSpots = [];

  // ---------- Небо, луна, звёзды, туман ----------
  scene.background = new THREE.Color(0x0d1030);
  scene.fog = new THREE.FogExp2(0x151a3e, 0.022);

  const skyGeo = new THREE.SphereGeometry(180, 32, 16);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color(0x070a22) }, bottom: { value: new THREE.Color(0x3a3470) } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: 'uniform vec3 top; uniform vec3 bottom; varying vec3 vP; void main(){ float h = smoothstep(-0.05, 0.55, vP.y); gl_FragColor = vec4(mix(bottom, top, h), 1.); }',
  });
  scene.add(new THREE.Mesh(skyGeo, skyMat));

  const moon = new THREE.Mesh(new THREE.SphereGeometry(7, 32, 16), new THREE.MeshBasicMaterial({ color: 0xf4f1dc, fog: false }));
  moon.position.set(-60, 70, -120);
  scene.add(moon);
  const moonGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: radialTexture('rgba(220,225,255,0.55)', 'rgba(120,130,220,0)'), fog: false, depthWrite: false, blending: THREE.AdditiveBlending }));
  moonGlow.scale.set(60, 60, 1);
  moonGlow.position.copy(moon.position);
  scene.add(moonGlow);

  const starGeo = new THREE.BufferGeometry();
  const sp = [];
  for (let i = 0; i < 700; i++) {
    const th = Math.random() * Math.PI * 2, ph = Math.random() * 1.2 + 0.15;
    sp.push(Math.cos(th) * Math.cos(ph) * 170, Math.sin(ph) * 170, Math.sin(th) * Math.cos(ph) * 170);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xdfe4ff, size: 1.1, fog: false, sizeAttenuation: false, transparent: true, opacity: 0.8 })));

  // ---------- Свет ----------
  scene.add(new THREE.HemisphereLight(0x7a86d8, 0x1d1830, 1.05));
  const moonLight = new THREE.DirectionalLight(0xc2ccff, 1.35);
  moonLight.position.set(-18, 30, -14);
  moonLight.castShadow = true;
  moonLight.shadow.mapSize.set(isMobile ? 1024 : 2048, isMobile ? 1024 : 2048);
  const sc = moonLight.shadow.camera;
  sc.left = -26; sc.right = 26; sc.top = 26; sc.bottom = -26; sc.near = 1; sc.far = 90;
  moonLight.shadow.bias = -0.0008;
  moonLight.shadow.normalBias = 0.03;
  scene.add(moonLight, moonLight.target);

  // ---------- Земля и дорожки ----------
  const grassTex = canvasTexture(256, 256, (c, w, h) => {
    c.fillStyle = '#26402f'; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) {
      const g = 50 + Math.random() * 40;
      c.fillStyle = `rgba(${g * 0.55 | 0},${g + 20 | 0},${g * 0.7 | 0},${0.25 + Math.random() * 0.35})`;
      c.fillRect(Math.random() * w, Math.random() * h, 2, 3 + Math.random() * 4);
    }
  });
  grassTex.wrapS = grassTex.wrapT = THREE.RepeatWrapping;
  grassTex.repeat.set(18, 18);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(HALF * 4, HALF * 4), new THREE.MeshStandardMaterial({ map: grassTex, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  ground.userData.keep = true;
  scene.add(ground);

  const stoneTex = canvasTexture(256, 256, (c, w, h) => {
    c.fillStyle = '#3b3a44'; c.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 32) for (let x = (y / 32) % 2 ? -24 : 0; x < w; x += 48) {
      const l = 88 + Math.random() * 40;
      c.fillStyle = `rgb(${l},${l - 4},${l + 8})`;
      c.beginPath(); c.roundRect(x + 3, y + 3, 42, 26, 8); c.fill();
    }
  });
  stoneTex.wrapS = stoneTex.wrapT = THREE.RepeatWrapping;
  const pathMat = (rx, ry) => { const t = stoneTex.clone(); t.needsUpdate = true; t.repeat.set(rx, ry); return new THREE.MeshStandardMaterial({ map: t, roughness: 0.95 }); };
  const path = (x, z, w, d) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), pathMat(w / 2.2, d / 2.2));
    m.rotation.x = -Math.PI / 2; m.position.set(x, 0.015, z); m.receiveShadow = true; scene.add(m);
  };
  path(0, 0, 3.4, 58);
  path(0, 0, 56, 3.2);
  path(0, -21, 9, 7);

  // ---------- Домики ----------
  const paperTex = canvasTexture(128, 128, (c, w, h) => {
    c.fillStyle = '#ffd58a'; c.fillRect(0, 0, w, h);
    const g = c.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, 80);
    g.addColorStop(0, 'rgba(255,240,190,1)'); g.addColorStop(1, 'rgba(255,160,60,0.4)');
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    c.strokeStyle = '#4a2e1c'; c.lineWidth = 5;
    for (let i = 0; i <= 4; i++) { c.beginPath(); c.moveTo(i * w / 4, 0); c.lineTo(i * w / 4, h); c.stroke(); c.beginPath(); c.moveTo(0, i * h / 4); c.lineTo(w, i * h / 4); c.stroke(); }
  });
  const windowMat = new THREE.MeshStandardMaterial({ map: paperTex, emissive: 0xffa24a, emissiveMap: paperTex, emissiveIntensity: 1.25, roughness: 0.8 });
  const wallMat = mat(0x6e4a33, { roughness: 0.85 });
  const plasterMat = mat(0xcdbb9c, { roughness: 0.95 });
  const roofMat = mat(0x2f3350, { roughness: 0.6 });
  const roofEdge = mat(0x1d1f33, { roughness: 0.6 });
  const beamMat = mat(0x3f2a1d, { roughness: 0.8 });

  // Домик. facing — куда смотрит дверь ('z' — на +Z, 'x' — на +X).
  // opt.enter — внутрь можно зайти: две двери (спереди и сзади), внутри ширма-укрытие и фонарик.
  // opt.ladder — лестница на крышу: 'left' | 'right' | 'back'. На крышу можно и подтянуться с ящика.
  function house(x, z, w, d, h = 3.2, facing = 'z', opt = {}) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    const eave = 0.35 + h;
    // фундамент (на него заходишь без прыжка)
    g.add(mesh(G.box(w + 0.3, 0.35, d + 0.3), mat(0x4b4852), { y: 0.17 }));
    world.addBox(x, z, w + 0.3, d + 0.3, 0.35, { sight: false, nav: false });
    const T = 0.28;                                   // толщина стены
    const doorW = 2.5, lintel = 2.95;                 // проём: широкий — Моти и НэкоБус пролезут
    const dz = facing === 'z';
    if (opt.enter) {
      // стены по сторонам; в двух стенах — проёмы
      const wallPiece = (cx, cz, sw, sd, bottom = 0.35, top = eave) => {
        g.add(mesh(G.box(sw, top - bottom, sd), plasterMat, { x: cx - x, y: (bottom + top) / 2, z: cz - z }));
        world.addBox(cx, cz, sw, sd, top, { bottom: bottom > 0.35 ? bottom : 0, sight: true, nav: bottom <= 0.35 });
        blocker(cx, (bottom + top) / 2, cz, sw, top - bottom, sd);
      };
      const sideWithDoor = (s) => {
        // стена поперёк направления двери, с проёмом посередине
        const len = dz ? w : d, seg = (len - doorW) / 2;
        for (const k of [-1, 1]) {
          const off = k * (doorW / 2 + seg / 2);
          if (dz) wallPiece(x + off, z + s * (d / 2 - T / 2), seg, T);
          else wallPiece(x + s * (w / 2 - T / 2), z + off, T, seg);
        }
        if (dz) wallPiece(x, z + s * (d / 2 - T / 2), doorW, T, lintel);
        else wallPiece(x + s * (w / 2 - T / 2), z, T, doorW, lintel);
      };
      sideWithDoor(1); sideWithDoor(-1);
      if (dz) for (const s of [-1, 1]) wallPiece(x + s * (w / 2 - T / 2), z, T, d - 2 * T);
      else for (const s of [-1, 1]) wallPiece(x, z + s * (d / 2 - T / 2), w - 2 * T, T);
      // пол-татами и потолок
      g.add(mesh(G.box(w - 0.1, 0.04, d - 0.1), mat(0xb8a468, { roughness: 1 }), { y: 0.37, shadow: false }));
      g.add(mesh(G.box(w - 0.1, 0.08, d - 0.1), beamMat, { y: eave - 0.05, shadow: false }));
      // ширма-укрытие в углу: за ней Безлик не видит
      const sx = (dz ? 1 : 0.5) * (w / 2 - 1.0), szz = (dz ? 0.5 : 1) * (d / 2 - 1.0);
      const screen = mesh(G.box(1.6, 1.5, 0.08), mat(0xf1e4c4, { roughness: 0.9, emissive: 0x3a2410, emissiveIntensity: 0.3 }), { x: sx, y: 1.1, z: szz - 0.5, ry: 0.5 });
      g.add(screen);
      g.add(mesh(G.box(0.9, 0.35, 0.9), mat(0x7b3b4a), { x: sx, y: 0.55, z: szz }));   // подушки-дзабутон
      world.addBush(x + sx, z + szz, 1.0, 'screen');
      // фонарик внутри
      g.add(mesh(G.sphere(0.2, 12, 8), lanternWarm, { x: -sx * 0.6, y: eave - 0.6, z: -szz * 0.6, sy: 1.3, shadow: false }));
      lanternSpots.push(new THREE.Vector3(x - sx * 0.6, eave - 0.6, z - szz * 0.6));
    } else {
      const walls = mesh(G.box(w, h, d), plasterMat, { y: 0.35 + h / 2 });
      walls.receiveShadow = true;
      g.add(walls);
      world.addBox(x, z, w, d, eave, { sight: true });
      blocker(x, 0.35 + h / 2, z, w, h, d);
    }
    // деревянные стойки по углам и пояс
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(mesh(G.box(0.22, h, 0.22), beamMat, { x: sx * w / 2, y: 0.35 + h / 2, z: sz * d / 2 }));
    g.add(mesh(G.box(w + 0.05, 0.16, d + 0.05), beamMat, { y: 0.35 + h * 0.62 }));
    // окна на боковых сторонах (где нет дверей)
    const winY = 0.35 + h * 0.38;
    for (const s of [-1, 1]) {
      for (let i = -1; i <= 1; i += 2) {
        const doorSideZ = opt.enter && dz, doorSideX = opt.enter && !dz;
        if (w > 3.5 && !doorSideZ) g.add(mesh(G.box(w * 0.26, h * 0.34, 0.06), windowMat, { x: i * w * 0.24, y: winY, z: s * (d / 2 + 0.02), shadow: false }));
        if (d > 3.5 && !doorSideX) g.add(mesh(G.box(0.06, h * 0.34, d * 0.26), windowMat, { x: s * (w / 2 + 0.02), y: winY, z: i * d * 0.24, shadow: false }));
      }
    }
    // дверь (у закрытых домов — нарисованная, у открытых — тёплый свет в проёме не нужен)
    if (!opt.enter) {
      const door = dz ? { x: 0, z: d / 2 + 0.03, sx: 1.1, sz: 0.06 } : { x: w / 2 + 0.03, z: 0, sx: 0.06, sz: 1.1 };
      g.add(mesh(G.box(door.sx, 1.9, door.sz), windowMat, { x: door.x, y: 1.3, z: door.z, shadow: false }));
    } else {
      for (const s of [-1, 1]) g.add(mesh(dz ? G.box(doorW + 0.3, 0.2, 0.34) : G.box(0.34, 0.2, doorW + 0.3), beamMat, { x: dz ? 0 : s * w / 2, y: lintel + 0.1, z: dz ? s * d / 2 : 0 }));
    }
    // крыша-треугольник с загнутыми краями
    const ov = 0.7, rh = Math.min(w, d) * 0.42;
    const along = dz ? w : d, across = dz ? d : w;
    const shape = new THREE.Shape();
    shape.moveTo(-across / 2 - ov, 0); shape.lineTo(0, rh); shape.lineTo(across / 2 + ov, 0); shape.lineTo(across / 2 + ov - 0.25, -0.12); shape.lineTo(0, rh - 0.28); shape.lineTo(-across / 2 - ov + 0.25, -0.12); shape.closePath();
    const roof = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: along + ov * 2, bevelEnabled: false }), roofMat);
    roof.castShadow = true;
    roof.position.set(0, eave, 0);
    if (dz) { roof.rotation.y = Math.PI / 2; roof.position.x = -(along / 2 + ov); } else { roof.position.z = -(along / 2 + ov); }
    g.add(roof);
    g.add(mesh(G.box(dz ? along + ov * 2 : 0.3, 0.25, dz ? 0.3 : along + ov * 2), roofEdge, { y: eave + rh - 0.05 }));
    scene.add(g);
    // Скат крыши — по нему можно ходить. Высота точно по картинке: от карниза к коньку.
    const span = across / 2 + ov;
    const topAt = dz ? (px, pz) => eave + rh * Math.max(0, 1 - Math.abs(pz - z) / span)
                     : (px, pz) => eave + rh * Math.max(0, 1 - Math.abs(px - x) / span);
    world.addBox(x, z, w + 0.3, d + 0.3, eave + rh, { bottom: eave - 0.25, topAt, sight: true, nav: false });
    blocker(x, eave + rh / 2, z, w + ov, rh, d + ov);
    // бумажный фонарик у входа
    const lx = x + (dz ? w / 2 - 0.6 : w / 2 + 0.5), lz = z + (dz ? d / 2 + 0.5 : d / 2 - 0.6);
    if (!opt.enter) hangingLantern(lx, lz, 2.6, 0xff6a3a);
    else hangingLantern(x + (dz ? doorW / 2 + 0.5 : w / 2 + 0.5), z + (dz ? d / 2 + 0.5 : doorW / 2 + 0.5), 2.6, 0xff6a3a);
    if (opt.ladder) {
      const side = opt.ladder;
      // сторона без двери: слева/справа от двери или сзади
      let lx2, lz2, nx, nz;
      if (side === 'back') { nx = dz ? 0 : -1; nz = dz ? -1 : 0; }
      else { const k = side === 'left' ? -1 : 1; nx = dz ? k : 0; nz = dz ? 0 : k; }
      lx2 = x + nx * (w / 2 + 0.02) + (nz !== 0 ? w * 0.25 : 0);
      lz2 = z + nz * (d / 2 + 0.02) + (nx !== 0 ? d * 0.25 : 0);
      ladder(lx2, lz2, nx, nz, eave + 0.2);
    }
  }

  // Лестница у стены: nx,nz — наружу от стены
  function ladder(x, z, nx, nz, top) {
    const lm = mat(0x6a4a2c, { roughness: 0.9 });
    const px = -nz, pz = nx;                         // вдоль стены
    for (const k of [-1, 1]) scene.add(mesh(G.box(0.08, top, 0.08), lm, { x: x + nx * 0.12 + px * k * 0.4, y: top / 2, z: z + nz * 0.12 + pz * k * 0.4 }));
    for (let y = 0.35; y < top; y += 0.4) scene.add(mesh(nx ? G.box(0.06, 0.06, 0.8) : G.box(0.8, 0.06, 0.06), lm, { x: x + nx * 0.12, y, z: z + nz * 0.12 }));
    world.addLadder(x, z, nx, nz, 1.1, top);
  }

  // ---------- Фонари ----------
  const lanternRed = mat(0xe0523a, { emissive: 0xff5a2a, emissiveIntensity: 1.8, roughness: 0.6 });
  const lanternWarm = mat(0xffc26a, { emissive: 0xffa040, emissiveIntensity: 2.2, roughness: 0.6 });
  function glowSprite(x, y, z, s = 2.2, color) {
    const m = new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: color ?? 0xffffff, opacity: 0.8 });
    const sp = new THREE.Sprite(m);
    sp.scale.set(s, s, 1);
    sp.position.set(x, y, z);
    scene.add(sp);
    return sp;
  }
  function hangingLantern(x, z, y, color) {
    const l = mesh(G.sphere(0.24, 14, 10), color === 0xff6a3a ? lanternRed : lanternWarm, { x, y, z, sy: 1.35, shadow: false });
    scene.add(l);
    scene.add(mesh(G.cyl(0.18, 0.18, 0.05, 10), beamMat, { x, y: y + 0.33, z, shadow: false }));
    scene.add(mesh(G.cyl(0.18, 0.18, 0.05, 10), beamMat, { x, y: y - 0.33, z, shadow: false }));
    glowSprite(x, y, z, 2.4);
    lanternSpots.push(new THREE.Vector3(x, y, z));
  }
  function postLantern(x, z) {
    scene.add(mesh(G.cyl(0.08, 0.1, 3.0, 8), beamMat, { x, y: 1.5, z }));
    scene.add(mesh(G.box(0.8, 0.08, 0.08), beamMat, { x: x + 0.35, y: 2.95, z }));
    hangingLantern(x + 0.7, z, 2.45, 0xffc26a);
    world.addCircle(x, z, 0.14, 3.2, { sight: false });
  }
  function stoneLantern(x, z) {
    const stone = mat(0x75747e, { roughness: 1 });
    scene.add(mesh(G.cyl(0.35, 0.45, 0.25, 6), stone, { x, y: 0.12, z }));
    scene.add(mesh(G.cyl(0.14, 0.18, 0.7, 8), stone, { x, y: 0.6, z }));
    scene.add(mesh(G.box(0.55, 0.42, 0.55), stone, { x, y: 1.15, z }));
    scene.add(mesh(G.box(0.3, 0.24, 0.6), lanternWarm, { x, y: 1.16, z, shadow: false }));
    scene.add(mesh(G.cone(0.55, 0.36, 6), stone, { x, y: 1.54, z }));
    glowSprite(x, 1.16, z, 1.8);
    world.addCircle(x, z, 0.42, 1.75, { sight: false });
    lanternSpots.push(new THREE.Vector3(x, 1.2, z));
  }

  // ---------- Деревья и кусты ----------
  const trunkMat = mat(0x3b2a20, { roughness: 1 });
  const leafMats = [mat(0x1f3d2c, { roughness: 1, flat: true }), mat(0x2a4a35, { roughness: 1, flat: true }), mat(0x6a3b5c, { roughness: 1, flat: true })];
  const leafGeos = [fluffySphere(1, 1, 0.18, 1), fluffySphere(1, 1, 0.2, 2), fluffySphere(1, 1, 0.16, 3)];
  function tree(x, z, s = 1, pink = false) {
    scene.add(mesh(G.cyl(0.18 * s, 0.28 * s, 2.6 * s, 7), trunkMat, { x, y: 1.3 * s, z }));
    const m = pink ? mat(0xd889ad, { roughness: 1, flat: true, emissive: 0x3a1030, emissiveIntensity: 0.4 }) : leafMats[(x * 7 + z * 3 & 0xff) % 2];
    for (let i = 0; i < 3; i++) {
      const a = i * 2.1 + x;
      scene.add(mesh(leafGeos[i], m, { x: x + Math.cos(a) * 0.6 * s, y: (2.8 + i * 0.5) * s, z: z + Math.sin(a) * 0.6 * s, sx: 1.4 * s, sy: 1.1 * s, sz: 1.4 * s }));
    }
    world.addCircle(x, z, 0.35 * s, 6, { sight: s > 1.1 });
  }
  const bushMat = mat(0x24482f, { roughness: 1, flat: true });
  const bushGeo = fluffySphere(1, 1, 0.22, 7);
  const bushMeshes = [];
  function bush(x, z, r = 1.4) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    for (let i = 0; i < 4; i++) {
      const a = i * 1.7;
      g.add(mesh(bushGeo, bushMat, { x: Math.cos(a) * r * 0.45, y: 0.8, z: Math.sin(a) * r * 0.45, sx: r * 0.75, sy: 0.95, sz: r * 0.75 }));
    }
    scene.add(g);
    bushMeshes.push(g);
    world.addBush(x, z, r);
  }

  // ---------- Ящики и помост для паркура ----------
  const crateMat = mat(0x8a5e38, { roughness: 0.85 });
  const crateEdge = mat(0x5a3b22);
  function crate(x, z, s, top) {
    const h = s;
    scene.add(mesh(G.box(s, h, s), crateMat, { x, y: top - h / 2, z }));
    scene.add(mesh(G.box(s + 0.04, 0.08, s + 0.04), crateEdge, { x, y: top - 0.04, z }));
    world.addBox(x, z, s, s, top, { sight: false });
  }
  function deck(x, z, w, d, top) {
    scene.add(mesh(G.box(w, 0.2, d), mat(0x7a5033), { x, y: top - 0.1, z }));
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) scene.add(mesh(G.box(0.2, top, 0.2), beamMat, { x: x + sx * (w / 2 - 0.15), y: top / 2, z: z + sz * (d / 2 - 0.15) }));
    world.addBox(x, z, w, d, top, { sight: false });
  }

  // ---------- Святилище и тории ----------
  function torii(x, z) {
    const red = mat(0xc23a2a, { roughness: 0.55 });
    for (const s of [-1, 1]) {
      scene.add(mesh(G.cyl(0.2, 0.24, 4.6, 12), red, { x: x + s * 2.1, y: 2.3, z }));
      world.addCircle(x + s * 2.1, z, 0.26, 5);
    }
    scene.add(mesh(G.box(5.8, 0.32, 0.4), mat(0x1c1a22), { x, y: 4.7, z }));
    scene.add(mesh(G.box(5.2, 0.25, 0.3), red, { x, y: 4.35, z }));
    scene.add(mesh(G.box(4.8, 0.22, 0.26), red, { x, y: 3.7, z }));
  }

  // ======= РАССТАНОВКА =======
  // дома, в которые можно зайти (две двери + ширма внутри), и лестницы на крыши
  house(-10, 12, 7, 5, 3.2, 'x', { enter: true, ladder: 'left' });
  house(11, 13, 6, 6, 3.4, 'x', { enter: true });
  house(-12, -7, 6, 7, 3.0, 'x', { ladder: 'back' });
  house(11, -8, 7, 5, 3.2, 'z', { enter: true, ladder: 'right' });
  house(-21, 21, 5, 5, 2.8, 'z');
  house(22, 2, 5, 6, 3.0, 'x', { enter: true });
  house(-22, -18, 6, 5, 3.0, 'z');
  house(20, -21, 5, 5, 2.8, 'z');
  // святилище (зона появления Безлика)
  house(0, -26, 7, 4, 3.6, 'z');
  torii(0, -17);

  // паркур: ступеньки из ящиков на помост
  crate(4.2, 5.2, 0.9, 0.6);
  crate(5.3, 6.4, 1.0, 1.1);
  crate(5.4, 7.7, 1.0, 1.6);
  deck(7.8, 7.4, 3.2, 3.0, 2.0);
  crate(-5.5, -3.8, 1.2, 1.0);
  crate(-6.6, -4.6, 1.0, 1.7);
  crate(16, 8, 1.2, 1.2);
  crate(-16, 3, 1.1, 0.9);
  crate(-16.9, 3.9, 0.9, 1.5);
  // ступеньки из ящиков к крышам: запрыгнул на верхний — подтянулся на крышу
  crate(13.2, 16.9, 1.1, 0.9); crate(12.2, 17.2, 1.0, 1.7);
  crate(25.4, 5.8, 1.1, 1.0); crate(24.3, 5.8, 1.0, 1.8);
  crate(-20.6, 24.3, 1.0, 1.1);

  // ======= НОВЫЕ ЗОНЫ ПО КРАЯМ =======
  const hedgeMat = mat(0x1f4a2a, { roughness: 1, flat: true });
  const hedgeTop = mat(0x2d6a3a, { roughness: 1, flat: true });
  function hedge(cx, cz, w, d, h = 2.5) {
    scene.add(mesh(G.box(w, h, d), hedgeMat, { x: cx, y: h / 2, z: cz }));
    scene.add(mesh(G.box(w + 0.12, 0.25, d + 0.12), hedgeTop, { x: cx, y: h - 0.05, z: cz }));
    world.addBox(cx, cz, w, d, h, { sight: true });
    blocker(cx, h / 2, cz, w, h, d);
  }

  // --- Лабиринт из живой изгороди (юго-запад). Одинаковый каждый раз, с петлями — тупиков-ловушек мало.
  (function maze(x0, z0, n, cell) {
    let seed = 20260925;
    const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
    const vis = new Uint8Array(n * n);
    const right = Array.from({ length: n * n }, () => true), down = Array.from({ length: n * n }, () => true);
    const stack = [0]; vis[0] = 1;
    while (stack.length) {
      const c = stack[stack.length - 1], i = c % n, j = (c / n) | 0;
      const opts = [];
      if (i > 0 && !vis[c - 1]) opts.push([c - 1, 'L']);
      if (i < n - 1 && !vis[c + 1]) opts.push([c + 1, 'R']);
      if (j > 0 && !vis[c - n]) opts.push([c - n, 'U']);
      if (j < n - 1 && !vis[c + n]) opts.push([c + n, 'D']);
      if (!opts.length) { stack.pop(); continue; }
      const [nc, dir] = opts[(rnd() * opts.length) | 0];
      if (dir === 'L') right[nc] = false; if (dir === 'R') right[c] = false;
      if (dir === 'U') down[nc] = false; if (dir === 'D') down[c] = false;
      vis[nc] = 1; stack.push(nc);
    }
    for (let k = 0; k < 5; k++) { const c = (rnd() * n * (n - 1)) | 0; if (c % n < n - 1) right[c] = false; else down[c] = false; }   // петли
    const T = 0.55, H = 2.5, size = n * cell;
    // внешние стенки с двумя входами: север (к деревне) и восток
    for (let i = 0; i < n; i++) {
      if (i !== n - 1) hedge(x0 + i * cell + cell / 2, z0, cell + T, T, H);                 // север
      hedge(x0 + i * cell + cell / 2, z0 + size, cell + T, T, H);                             // юг
    }
    for (let j = 0; j < n; j++) {
      hedge(x0, z0 + j * cell + cell / 2, T, cell + T, H);                                    // запад
      if (j !== 0) hedge(x0 + size, z0 + j * cell + cell / 2, T, cell + T, H);                // восток
    }
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      const c = j * n + i;
      if (i < n - 1 && right[c]) hedge(x0 + (i + 1) * cell, z0 + j * cell + cell / 2, T, cell + T, H);
      if (j < n - 1 && down[c]) hedge(x0 + i * cell + cell / 2, z0 + (j + 1) * cell, cell + T, T, H);
    }
    // в центре — каменный фонарь, в тупиках — кусты-укрытия
    const mid = x0 + size / 2, midz = z0 + size / 2;
    stoneLantern(mid, midz);
    bush(x0 + cell / 2, z0 + size - cell / 2, 1.1);
    bush(x0 + size - cell / 2, z0 + size - cell / 2, 1.1);
    bush(x0 + cell / 2, z0 + cell * 1.5, 1.1);
  })(-43, 26.5, 5, 3.3);

  // --- Бамбуковая роща (северо-запад): высокие стебли, видно плохо, прятаться хорошо
  const bambooMat = mat(0x6e9a4a, { roughness: 0.7 });
  const bambooLeaf = mat(0x3e7a3a, { roughness: 1, flat: true });
  for (let k = 0; k < 22; k++) {
    const cx = -41 + (k % 5) * 3.1 + ((k * 7) % 3) * 0.6, cz = -41 + Math.floor(k / 5) * 3.2 + ((k * 5) % 3) * 0.5;
    for (let s2 = 0; s2 < 5; s2++) {
      const a = s2 * 1.3 + k, rr = 0.3 + (s2 % 2) * 0.2;
      const bx = cx + Math.cos(a) * rr, bz = cz + Math.sin(a) * rr, hh = 6 + ((k + s2) % 3);
      scene.add(mesh(G.cyl(0.07, 0.09, hh, 6), bambooMat, { x: bx, y: hh / 2, z: bz }));
      scene.add(mesh(leafGeos[s2 % 3], bambooLeaf, { x: bx, y: hh, z: bz, sx: 0.9, sy: 0.5, sz: 0.9 }));
    }
    world.addCircle(cx, cz, 0.62, 7, { sight: true });
  }
  bush(-37.5, -35.5, 1.3); bush(-32, -39, 1.2); bush(-40, -30.5, 1.3);

  // --- Склады с плоскими крышами и мостиками между ними (восток): бегать по крышам
  const woodMat = mat(0x5a3e2a, { roughness: 0.9 });
  const tinMat = mat(0x3d4460, { roughness: 0.5 });
  function storehouse(x, z, w, d, top, enter) {
    if (enter) {
      const T = 0.3, doorW = 2.6;
      const piece = (cx, cz, sw, sd, bottom = 0) => {
        scene.add(mesh(G.box(sw, top - bottom, sd), woodMat, { x: cx, y: (bottom + top) / 2, z: cz }));
        world.addBox(cx, cz, sw, sd, top, { bottom, sight: true });
        blocker(cx, (bottom + top) / 2, cz, sw, top - bottom, sd);
      };
      for (const s of [-1, 1]) {                      // двери на западе и востоке
        const seg = (d - doorW) / 2;
        for (const k of [-1, 1]) piece(x + s * (w / 2 - T / 2), z + k * (doorW / 2 + seg / 2), T, seg);
        piece(x + s * (w / 2 - T / 2), z, T, doorW, 2.95);
        piece(x, z + s * (d / 2 - T / 2), w - 2 * T, T);
      }
      scene.add(mesh(G.box(w, 0.3, d), tinMat, { x, y: top - 0.15, z }));
      world.addBox(x, z, w, d, top, { bottom: top - 0.3, sight: true, nav: false });
      blocker(x, top - 0.15, z, w, 0.3, d);
      // внутри: мешки риса — укрытие, и фонарь
      scene.add(mesh(G.box(1.4, 0.9, 1.0), mat(0xcdb98e, { roughness: 1 }), { x: x + w / 2 - 1.3, y: 0.45, z: z - d / 2 + 1.1 }));
      world.addBush(x + w / 2 - 1.3, z - d / 2 + 1.4, 1.1, 'sacks');
      lanternSpots.push(new THREE.Vector3(x, top - 0.7, z));
      scene.add(mesh(G.sphere(0.22, 12, 8), lanternWarm, { x, y: top - 0.7, z, sy: 1.3, shadow: false }));
    } else {
      scene.add(mesh(G.box(w, top, d), woodMat, { x, y: top / 2, z }));
      scene.add(mesh(G.box(w + 0.2, 0.2, d + 0.2), tinMat, { x, y: top + 0.1, z }));
      world.addBox(x, z, w, d, top + 0.2, { sight: true });
      blocker(x, top / 2, z, w, top, d);
      for (const s of [-1, 1]) scene.add(mesh(G.box(w * 0.3, 0.8, 0.06), windowMat, { x, y: top * 0.55, z: z + s * (d / 2 + 0.02), shadow: false }));
    }
  }
  storehouse(38, -14, 7, 7, 4.0, false);
  storehouse(38, 0, 7, 8, 4.0, true);
  storehouse(38, 14, 7, 7, 4.0, false);
  for (const zz of [-7, 7]) {                        // мостики-доски между крышами
    scene.add(mesh(G.box(1.6, 0.15, 7.2), woodMat, { x: 38, y: 4.05, z: zz }));
    world.addBox(38, zz, 1.6, 7.2, 4.12, { bottom: 3.95, sight: false, nav: false });
  }
  ladder(34.5 - 0.02, -16, -1, 0, 4.2);
  ladder(34.5 - 0.02, 16, -1, 0, 4.2);
  crate(32.4, 3.0, 1.0, 1.0); crate(33.5, 3.0, 1.1, 2.0);   // ступеньки на крышу среднего склада

  // --- Тыквенное поле (юго-восток): грядки, чучело, копна сена
  const pumpkinMat = mat(0xe8812a, { roughness: 0.6, emissive: 0x401800, emissiveIntensity: 0.3 });
  const stemMat = mat(0x3b5a24);
  for (let i = 0; i < 5; i++) for (let j = 0; j < 4; j++) {
    const px = 30 + i * 2.6 + (j % 2) * 1.2, pz = 30 + j * 3;
    scene.add(mesh(G.sphere(0.45, 12, 8), pumpkinMat, { x: px, y: 0.35, z: pz, sy: 0.75 }));
    scene.add(mesh(G.cyl(0.05, 0.06, 0.25, 5), stemMat, { x: px, y: 0.75, z: pz }));
    world.addCircle(px, pz, 0.45, 0.4, { sight: false, nav: false });   // тыквы — через них перешагиваешь
  }
  const hay = mat(0xc9a64a, { roughness: 1 });
  scene.add(mesh(G.cyl(1.6, 1.9, 2.2, 10), hay, { x: 26, y: 1.1, z: 38 }));
  scene.add(mesh(G.cone(1.7, 1.2, 10), hay, { x: 26, y: 2.8, z: 38 }));
  world.addCircle(26, 38, 1.8, 3.4, { sight: true });
  crate(27.9, 36.6, 1.1, 1.2);
  bush(34, 40, 1.4); bush(41, 33, 1.3);

  // --- Амбар (северо-восток): большой дом с двумя дверями и лестницей
  house(36, -36, 9, 7, 3.4, 'z', { enter: true, ladder: 'left' });

  // деревья и кусты в кольце между деревней и краем
  for (const [x, z, s2, p2] of [[-36, -10, 1.2, false], [-38, 6, 1.1, true], [-34, 18, 1.2, false], [-14, -38, 1.1, false], [-4, -40, 1.2, true], [10, -38, 1.1, false], [22, -40, 1.2, false], [36, -24, 1.1, true], [30, 22, 1.2, false], [14, 38, 1.1, true], [0, 40, 1.2, false], [-14, 40, 1.1, false]]) tree(x, z, s2, p2);
  for (const [x, z, r] of [[-38, -18, 1.4], [-40, 12, 1.4], [-20, -38, 1.5], [6, -40, 1.4], [24, -34, 1.4], [30, 10, 1.3], [20, 38, 1.4], [-6, 38, 1.5], [-22, 34, 1.4], [40, -26, 1.3]]) bush(x, z, r);

  for (const [x, z] of [[2.6, 17], [-2.6, 8], [2.6, -6], [-2.6, -12], [8, 2.4], [-9, -2.4], [18, -2.4], [-19, 2.4]]) stoneLantern(x, z);
  for (const [x, z] of [[-2.8, 22], [-2.8, -2.8], [14, 2.8], [-14, -2.8]]) postLantern(x, z);

  // деревья по краю (граница карты) и внутри
  for (let i = -HALF + 3; i <= HALF - 3; i += 4.3) {
    for (const [x, z] of [[i, -HALF + 2], [i, HALF - 2], [-HALF + 2, i], [HALF - 2, i]]) {
      if (Math.abs(i) < 2.5) continue;
      tree(x + (Math.random() - 0.5) * 1.2, z + (Math.random() - 0.5) * 1.2, 1.1 + Math.random() * 0.4);
    }
  }
  for (const [x, z, s, p] of [[-6, 17, 1, true], [6, 20, 1.2, false], [16, 16, 1.1, true], [-17, 11, 1.2, false], [-5, -18, 1, true], [7, -15, 1.1, false], [24, -10, 1.2, false], [-25, -6, 1.1, true], [15, -27, 1, false], [-15, -26, 1.1, true], [25, 24, 1.2, false]]) tree(x, z, s, p);

  for (const [x, z, r] of [[-4.5, -12, 1.5], [15, -15, 1.6], [-17.5, 6, 1.5], [18, 18, 1.5], [-6, 21, 1.4], [25, -24, 1.4], [6.5, -3.8, 1.3], [-25, 13, 1.5], [9, 24, 1.4], [-10, -24, 1.5], [26, 12, 1.4]]) bush(x, z, r);

  // деревянный забор вокруг (визуальная граница)
  const fenceMat = mat(0x4a3322, { roughness: 1 });
  for (const s of [-1, 1]) {
    for (let i = -HALF + 1; i < HALF; i += 2) {
      scene.add(mesh(G.box(0.14, 1.2, 0.14), fenceMat, { x: i, y: 0.6, z: s * (HALF - 0.6) }));
      scene.add(mesh(G.box(0.14, 1.2, 0.14), fenceMat, { x: s * (HALF - 0.6), y: 0.6, z: i }));
    }
    scene.add(mesh(G.box(HALF * 2, 0.1, 0.08), fenceMat, { y: 0.9, z: s * (HALF - 0.6) }));
    scene.add(mesh(G.box(0.08, 0.1, HALF * 2), fenceMat, { x: s * (HALF - 0.6), y: 0.9 }));
  }

  // табличка остановки «のりば» у точки появления игрока
  const signTex = canvasTexture(64, 192, (c, w, h) => {
    c.fillStyle = '#5a3a26'; c.fillRect(0, 0, w, h);
    c.fillStyle = '#e9d6b0'; c.fillRect(5, 5, w - 10, h - 10);
    c.fillStyle = '#2a170c'; c.font = 'bold 42px serif'; c.textAlign = 'center';
    ['の', 'り', 'ば'].forEach((ch, i) => c.fillText(ch, w / 2, 55 + i * 55));
  });
  scene.add(mesh(G.cyl(0.07, 0.07, 2.8, 6), beamMat, { x: -2.6, y: 1.4, z: 20.5 }));
  scene.add(mesh(G.box(0.5, 1.5, 0.08), mat(0xffffff, { map: signTex, emissive: 0x201008, emissiveIntensity: 0.5 }), { x: -2.6, y: 2.3, z: 20.55 }));
  world.addCircle(-2.6, 20.5, 0.12, 3, { sight: false });

  // ---------- Точечный тёплый свет (немного, ради скорости на телефоне) ----------
  const pl = [];
  const lightCount = isMobile ? 2 : 4;
  for (let i = 0; i < lightCount; i++) {
    const p = new THREE.PointLight(0xffa04a, 18, 11, 1.8);
    scene.add(p);
    pl.push(p);
  }

  // лампы следуют за игроком: включаем ближайшие к нему
  function updateLights(center) {
    const sorted = lanternSpots.slice().sort((a, b) => a.distanceToSquared(center) - b.distanceToSquared(center));
    pl.forEach((p, i) => { if (sorted[i]) p.position.copy(sorted[i]); });
    moonLight.position.set(center.x - 18, 30, center.z - 14);
    moonLight.target.position.set(center.x, 0, center.z);
  }

  const stats = mergeStatic(scene);

  return {
    stats, world, cameraBlockers, bushMeshes, updateLights,
    playerSpawn: new THREE.Vector3(0, 0, 22),
    ghostSpawn: new THREE.Vector3(0, 0, -21),
  };
}
