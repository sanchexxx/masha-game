// «Лес духов» — второй полноценный уровень. Геометрия и укрытия детерминированы:
// хозяин и гости видят одинаковые проходы, а боты используют ту же сетку коллизий.
import * as THREE from 'three';
import { CollisionWorld } from './colliders.js?v=2026100901';
import { canvasTexture, mat, mesh, G, fluffySphere } from '../characters/common.js?v=2026100901';
import { radialTexture } from '../characters/noface.js?v=2026100901';
import { buildProp } from './props.js?v=2026100901';
import { mergeStatic } from './merge.js?v=2026100901';
import { forestTexture } from './forest-assets.js?v=2026101002';
import { HALF } from './map.js?v=2026100901';

export function buildForest(scene, { isMobile }) {
  const world = new CollisionWorld(HALF);
  world.theme = 'forest';
  world.paths = [
    [[-31, 34], [-29, 17], [-28, 1], [-16, 8], [8, 8], [13, -7], [-7, -29]],
    [[-31, 34], [-12, 29], [2, 23], [9, 9], [17, -6], [25, -20]],
    [[2, 23], [24, 26], [31, 9], [25, -20]],
  ];
  world.waterZones = [{ x: 0, z: 23, rx: 17, rz: 10 }, { x: -4, z: 11, rx: 13, rz: 6 }];
  world.inWater = (x, z) => world.waterZones.some(p => ((x - p.x) / p.rx) ** 2 + ((z - p.z) / p.rz) ** 2 < 1);
  const cameraBlockers = [];
  const blockerMat = new THREE.MeshBasicMaterial();
  const blocker = (x, y, z, w, h, d) => {
    const o = new THREE.Mesh(G.box(w, h, d), blockerMat);
    o.position.set(x, y, z); o.updateMatrixWorld(true); cameraBlockers.push(o);
  };
  let seed = 74627;
  const rand = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
  const add = (geo, material, p = {}) => { const o = mesh(geo, material, p); scene.add(o); return o; };
  const spruce = mat(0x173a37, { roughness: 1, flat: true });
  const pine = mat(0x234c46, { roughness: 1, flat: true });
  const moss = mat(0x3b6954, { roughness: 1, flat: true });
  const pink = mat(0x9f416f, { roughness: 1, flat: true, emissive: 0x300d24, emissiveIntensity: 0.3 });
  const trunk = mat(0x433028, { roughness: 1 });
  const bark = mat(0x614330, { roughness: 1 });
  const rock = new THREE.MeshStandardMaterial({ color: forestTexture('rock') ? 0xc3c7d7 : 0x424754, map: forestTexture('rock'), roughness: 1, flatShading: true });
  const rockLight = new THREE.MeshStandardMaterial({ color: forestTexture('rock') ? 0xf0e8dd : 0x66717a, map: forestTexture('rock'), roughness: 1, flatShading: true });
  const bridgeWood = new THREE.MeshStandardMaterial({ color: forestTexture('wood') ? 0xdcc6ac : 0x795137, map: forestTexture('wood'), roughness: 0.94 });
  const railWood = new THREE.MeshStandardMaterial({ color: forestTexture('wood') ? 0xa58070 : 0x4c302a, map: forestTexture('wood'), roughness: 0.95 });
  const red = mat(0x9f3032, { roughness: 0.75 });
  const redEdge = mat(0x451b2a, { roughness: 0.72 });
  const roof = new THREE.MeshStandardMaterial({ color: forestTexture('roof') ? 0xc1cbeb : 0x252b4c, map: forestTexture('roof', 3, 3), roughness: 0.84, side: THREE.DoubleSide });
  const plaster = mat(0xd7b98b, { roughness: 0.92 });
  const gold = mat(0xffbd66, { emissive: 0xff8f34, emissiveIntensity: 2.4, roughness: 0.5 });
  const spirit = mat(0x96d8ff, { emissive: 0x6caeff, emissiveIntensity: 2.8, roughness: 0.45 });
  const mapleLeaves = forestTexture('maple') && new THREE.MeshStandardMaterial({ map: forestTexture('maple'), side: THREE.DoubleSide, alphaTest: 0.3, roughness: 1, depthWrite: true });
  const cedarLeaves = forestTexture('cedar') && new THREE.MeshStandardMaterial({ map: forestTexture('cedar'), side: THREE.DoubleSide, alphaTest: 0.3, roughness: 1, depthWrite: true });
  const glowTex = radialTexture('rgba(255,191,104,0.95)', 'rgba(255,131,38,0)', 64);
  const mistTex = radialTexture('rgba(175,181,237,0.25)', 'rgba(135,142,213,0)', 64);
  const lanternSpots = [];
  const leafGeo = fluffySphere(1, 1, 0.2, 7);
  const boulderGeo = fluffySphere(1, 1, 0.26, 18);

  // Ночная палитра, яркая луна и глубина между деревьями.
  scene.background = new THREE.Color(0x090f2d);
  scene.fog = new THREE.FogExp2(0x17274b, 0.018);
  scene.add(new THREE.HemisphereLight(0x899ada, 0x14251e, 1.28));
  const moonLight = new THREE.DirectionalLight(0xcbd3ff, 1.48);
  moonLight.position.set(-22, 32, -14);
  moonLight.castShadow = true;
  moonLight.shadow.mapSize.set(isMobile ? 1024 : 2048, isMobile ? 1024 : 2048);
  moonLight.shadow.camera.left = moonLight.shadow.camera.bottom = -27;
  moonLight.shadow.camera.right = moonLight.shadow.camera.top = 27;
  moonLight.shadow.camera.near = 1; moonLight.shadow.camera.far = 95;
  moonLight.shadow.bias = -0.0008;
  scene.add(moonLight, moonLight.target);
  const sky = new THREE.Mesh(new THREE.SphereGeometry(185, 24, 12), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color(0x070a25) }, bottom: { value: new THREE.Color(0x424276) } },
    vertexShader: 'varying vec3 v; void main(){v=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: 'uniform vec3 top; uniform vec3 bottom; varying vec3 v; void main(){gl_FragColor=vec4(mix(bottom,top,smoothstep(-.2,.65,v.y)),1.);}',
  }));
  scene.add(sky);
  add(G.sphere(7.2, 24, 16), new THREE.MeshBasicMaterial({ color: 0xe7e8fd, fog: false }), { x: 53, y: 70, z: -122, shadow: false });
  const moonHalo = new THREE.Sprite(new THREE.SpriteMaterial({ map: radialTexture('rgba(200,210,255,0.5)', 'rgba(110,125,230,0)'), blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  moonHalo.position.set(53, 70, -122); moonHalo.scale.set(62, 62, 1); scene.add(moonHalo);
  const stars = new Float32Array(420 * 3);
  for (let i = 0; i < 420; i++) {
    const a = rand() * Math.PI * 2, h = 0.12 + rand() * 1.25;
    stars[i * 3] = Math.cos(a) * Math.cos(h) * 170;
    stars[i * 3 + 1] = Math.sin(h) * 170;
    stars[i * 3 + 2] = Math.sin(a) * Math.cos(h) * 170;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(stars, 3));
  scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xd8e4ff, size: 1, sizeAttenuation: false, fog: false })));

  const groundTex = forestTexture('ground', 22, 22) || canvasTexture(256, 256, (c, w, h) => {
    c.fillStyle = '#1e3838'; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 2100; i++) {
      const v = 48 + (rand() * 38 | 0);
      c.fillStyle = `rgba(${v / 2 | 0},${v},${v * .85 | 0},${.2 + rand() * .3})`;
      c.fillRect(rand() * w, rand() * h, 1 + rand() * 3, 2 + rand() * 5);
    }
  });
  groundTex.wrapS = groundTex.wrapT = THREE.RepeatWrapping;
  if (!forestTexture('ground')) groundTex.repeat.set(20, 20);
  const floor = add(new THREE.PlaneGeometry(HALF * 4, HALF * 4), new THREE.MeshStandardMaterial({ map: groundTex, roughness: 1 }), { rx: -Math.PI / 2, shadow: false });
  floor.receiveShadow = true; floor.userData.keep = true;
  const trail = mat(0x494638, { roughness: 1 });
  function segment(ax, az, bx, bz, width, material = trail, y = 0.025) {
    const dx = bx - ax, dz = bz - az, len = Math.hypot(dx, dz);
    add(G.box(len, 0.045, width), material, { x: (ax + bx) / 2, y, z: (az + bz) / 2, ry: -Math.atan2(dz, dx), shadow: false });
    if (material === trail) for (let d = .65; d < len - .4; d += 1.55) {
      const t = d / len, side = (rand() - .5) * width * .48;
      const x = ax + dx * t - dz / len * side, z = az + dz * t + dx / len * side;
      add(G.box(.75 + rand() * .55, .075, .45 + rand() * .4), rockLight,
        { x, y: y + .045, z, ry: -Math.atan2(dz, dx) + (rand() - .5) * .36, shadow: false });
    }
  }
  // Пять маршрутов сходятся у моста, но остаются обходы для погони.
  for (const line of world.paths) for (let i = 1; i < line.length; i++) segment(...line[i - 1], ...line[i], i === 1 ? 3.3 : 2.8);
  segment(-29, 17, -10, 22, 2.4); segment(9, 9, 31, 9, 2.5);
  segment(-8, -28, 24, -25, 2.6); segment(-28, 1, -8, -28, 2.3);

  // Неглубокие заводи проходимы: вода замедляет, но не обрывает маршрут.
  const waterMat = new THREE.MeshStandardMaterial({ color: 0x235c72, metalness: 0.15, roughness: 0.24, transparent: true, opacity: 0.86, emissive: 0x113d59, emissiveIntensity: 0.7, depthWrite: false });
  for (const p of world.waterZones) {
    add(new THREE.CircleGeometry(1, 48), waterMat, { x: p.x, y: 0.055, z: p.z, sx: p.rx, sy: p.rz, rx: -Math.PI / 2, shadow: false });
    for (let i = 0; i < 7; i++) {
      const a = i * Math.PI * 2 / 7, x = p.x + Math.cos(a) * p.rx * .86, z = p.z + Math.sin(a) * p.rz * .86;
      add(boulderGeo, i % 2 ? rock : rockLight, { x, y: .12, z, sx: .85, sy: .38, sz: .7 });
    }
  }
  const lily = mat(0x446e57, { roughness: 0.85, flat: true });
  for (let i = 0; i < 20; i++) {
    const a = rand() * Math.PI * 2, r = Math.sqrt(rand()) * .83;
    const x = Math.cos(a) * 15 * r, z = 23 + Math.sin(a) * 9 * r;
    add(G.cyl(.35 + rand() * .26, .35, .035, 8), lily, { x, y: .08, z, shadow: false });
  }

  const trim = mat(0xe0ac68, { roughness: .7, metalness: .22 });
  const vermilion = mat(0xb9473c, { roughness: .75 });
  const moonPetal = mat(0xe8a0b8, { roughness: 1, side: THREE.DoubleSide });
  function beam(a, b, radius, material, sides = 7) {
    const v0 = new THREE.Vector3(...a), v1 = new THREE.Vector3(...b);
    const dir = v1.clone().sub(v0), length = dir.length();
    const o = add(G.cyl(radius, radius * 1.08, length, sides), material, { x: (v0.x + v1.x) / 2, y: (v0.y + v1.y) / 2, z: (v0.z + v1.z) / 2 });
    o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.multiplyScalar(1 / length));
    return o;
  }
  function roofLayer(x, z, w, d, eave, rise) {
    const a = w / 2, b = d / 2, r = w * .29;
    const corners = [
      [-a, eave + .4, -b], [a, eave + .4, -b],
      [a, eave + .4, b], [-a, eave + .4, b],
    ];
    const left = [-r, eave + rise, 0], right = [r, eave + rise, 0];
    const faces = [
      [corners[0], corners[1], right, left],
      [corners[3], corners[2], right, left],
      [corners[0], corners[3], left],
      [corners[1], corners[2], right],
    ];
    const positions = [], uvs = [];
    for (const face of faces) {
      const triangles = face.length === 4 ? [[0, 1, 2], [0, 2, 3]] : [[0, 1, 2]];
      for (const tri of triangles) for (const i of tri) {
        const p = face[i]; positions.push(x + p[0], p[1], z + p[2]);
        uvs.push((p[0] / w + .5) * 2, (p[2] / d + .5) * 2 + (p[1] - eave) / rise);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.computeVertexNormals();
    add(geo, roof);
    // Поднятые углы и золотые рёбра делают узнаваемый силуэт пагоды.
    for (let i = 0; i < 4; i++) {
      const p = corners[i], q = corners[(i + 1) % 4];
      beam([x + p[0], p[1], z + p[2]], [x + q[0], q[1], z + q[2]], .095, redEdge);
    }
    beam([x - r, eave + rise + .04, z], [x + r, eave + rise + .04, z], .13, trim);
    for (const s of [-1, 1]) {
      add(G.sphere(.25, 9, 7), trim, { x: x + s * r, y: eave + rise + .05, z });
      beam([x + s * (a - .9), eave + .1, z - b], [x + s * r, eave + rise, z], .07, redEdge);
      beam([x + s * (a - .9), eave + .1, z + b], [x + s * r, eave + rise, z], .07, redEdge);
    }
  }

  const glow = (x, y, z, size = 2.6, blue = false) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: blue ? radialTexture('rgba(140,220,255,0.9)', 'rgba(50,135,255,0)') : glowTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    s.position.set(x, y, z); s.scale.set(size, size, 1); scene.add(s);
  };
  function lantern(x, z, y = 2.0, tall = false) {
    if (tall) {
      add(G.cyl(.13, .19, y + .25, 8), railWood, { x, y: (y + .25) / 2, z });
      add(G.cyl(.31, .36, .18, 9), rock, { x, y: .09, z });
      beam([x, y + .1, z], [x + .7, y + .22, z], .095, railWood);
      world.addCircle(x, z, .18, y + .2, { sight: false });
      x += .7;
    }
    add(G.box(.54, .64, .54), gold, { x, y, z, shadow: false });
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      add(G.box(.055, .72, .055), redEdge, { x: x + sx * .29, y, z: z + sz * .29, shadow: false });
    }
    for (const yy of [-.14, .13]) {
      add(G.box(.63, .035, .035), redEdge, { x, y: y + yy, z: z + .3, shadow: false });
      add(G.box(.035, .035, .63), redEdge, { x: x + .3, y: y + yy, z, shadow: false });
    }
    add(G.box(.76, .09, .76), redEdge, { x, y: y + .38, z });
    add(G.cone(.52, .3, 4), roof, { x, y: y + .55, z, ry: Math.PI / 4 });
    add(G.box(.7, .08, .7), redEdge, { x, y: y - .39, z });
    add(G.sphere(.11, 7, 5), trim, { x, y: y - .51, z });
    glow(x, y, z, 3.7); lanternSpots.push(new THREE.Vector3(x, y, z));
  }
  function torii(x, z, scale = 1) {
    for (const s of [-1, 1]) {
      add(G.cyl(.39 * scale, .48 * scale, .3 * scale, 10), rock, { x: x + s * 2.0 * scale, y: .15 * scale, z });
      add(G.cyl(.23 * scale, .3 * scale, 4.5 * scale, 9), vermilion, { x: x + s * 2.0 * scale, y: 2.25 * scale, z });
      add(G.cyl(.32 * scale, .32 * scale, .13 * scale, 9), trim, { x: x + s * 2.0 * scale, y: 3.55 * scale, z });
      world.addCircle(x + s * 2 * scale, z, .27 * scale, 4.5 * scale);
    }
    add(G.box(5.8 * scale, .32 * scale, .62 * scale), redEdge, { x, y: 4.48 * scale, z });
    add(G.box(5.15 * scale, .24 * scale, .3 * scale), vermilion, { x, y: 3.83 * scale, z });
    for (const s of [-1, 1]) {
      add(G.box(.85 * scale, .12 * scale, .72 * scale), vermilion, { x: x + s * 2.78 * scale, y: 4.63 * scale, z, rz: s * .18 });
      beam([x + s * 1.2 * scale, 3.7 * scale, z], [x + s * 1.75 * scale, 4.28 * scale, z], .07 * scale, trim);
    }
    add(G.box(.76 * scale, .66 * scale, .1 * scale), trim, { x, y: 4.08 * scale, z: z + .36 * scale });
  }
  torii(-31, 31, 1.15); torii(25, -17, .88); torii(-8, -23, .65);
  for (const [x, z] of [[-34, 28], [-28, 28], [-28, 14], [-27, -5], [-19, 7], [8, 9], [14, -3], [18, -12], [27, -16], [4, 28], [24, 22], [29, 14], [-2, -25], [-10, -31]]) lantern(x, z, 1.95, true);

  // Мост туманов: настоящий широкий переход через воду, доступный ботам.
  function bridge(ax, az, bx, bz, width = 3.8) {
    const len = Math.hypot(bx - ax, bz - az), ang = -Math.atan2(bz - az, bx - ax);
    const g = new THREE.Group(); g.position.set((ax + bx) / 2, 0, (az + bz) / 2); g.rotation.y = ang;
    const plankGeo = G.box(.73, .17, width);
    for (let x = -len / 2 + .35; x < len / 2; x += .78) {
      const yy = .32 + .12 * (1 - Math.abs(x) / (len / 2));
      g.add(mesh(plankGeo, bridgeWood, { x, y: yy, z: 0 }));
      for (const side of [-1, 1]) g.add(mesh(G.box(.62, .018, .055), trim, { x, y: yy + .09, z: side * (width / 2 - .11), shadow: false }));
    }
    for (const side of [-1, 1]) {
      g.add(mesh(G.box(len + .7, .2, .22), railWood, { y: .16, z: side * (width / 2 - .18) }));
      for (let x = -len / 2; x <= len / 2; x += 2.35) {
        g.add(mesh(G.box(.16, 1.35, .16), railWood, { x, y: .87, z: side * width / 2 }));
        g.add(mesh(G.sphere(.14, 8, 5), trim, { x, y: 1.6, z: side * width / 2 }));
      }
      for (let x = -len / 2; x < len / 2; x += 1.15) {
        const next = Math.min(len / 2, x + 1.15), arc = v => 1.4 + .19 * Math.sin((v + len / 2) * Math.PI / 2.35);
        const a = new THREE.Vector3(x, arc(x), side * width / 2), b = new THREE.Vector3(next, arc(next), side * width / 2);
        const d = b.clone().sub(a), o = mesh(G.cyl(.037, .037, d.length(), 6), trim,
          { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, z: a.z, shadow: false });
        o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); g.add(o);
      }
    }
    scene.add(g);
    world.addBox((ax + bx) / 2, (az + bz) / 2, len + 1, width, .44, { sight: false, nav: false });
    for (const x of [ax, bx]) add(G.box(1.4, .16, width + .25), bridgeWood, { x, y: .08, z: az, shadow: false });
    lantern(ax + 1.5, az + width / 2 + .6, 1.9, true);
    lantern(bx - 1.5, bz - width / 2 - .6, 1.9, true);
  }
  bridge(-17, 8, 8, 8);
  // Дощатые мостки через болото — узкий быстрый путь с боковыми островками.
  segment(-12, 29, -1, 23, 2.1, bridgeWood, .12);
  segment(-1, 23, 13, 19, 2.1, bridgeWood, .12);
  segment(13, 19, 24, 26, 2.1, bridgeWood, .12);

  function tree(x, z, scale = 1, blossom = false, obstacle = true) {
    const h = 4.8 * scale;
    add(G.cyl(.31 * scale, .58 * scale, h, 9), trunk, { x, y: h / 2, z });
    for (let i = 0; i < 5; i++) {
      const a = i * Math.PI * 2 / 5 + x * .14;
      beam([x, 2.7 * scale, z], [x + Math.cos(a) * 1.6 * scale, (4.3 + i % 2 * .45) * scale, z + Math.sin(a) * 1.6 * scale], .16 * scale, bark);
      if (i < 4) beam([x + Math.cos(a) * .3 * scale, .6 * scale, z + Math.sin(a) * .3 * scale],
        [x + Math.cos(a) * .95 * scale, .08, z + Math.sin(a) * .95 * scale], .12 * scale, bark);
    }
    const leaves = blossom ? pink : (rand() > .4 ? pine : spruce);
    for (let i = 0; i < 3; i++) {
      const a = i * 2.15 + x;
      const px = x + Math.cos(a) * 1.0 * scale, pz = z + Math.sin(a) * 1.0 * scale;
      const yy = (4.5 + i * .32) * scale;
      add(leafGeo, leaves, { x: px, y: yy, z: pz, sx: 1.7 * scale, sy: 1.14 * scale, sz: 1.65 * scale });
      const foliage = blossom ? mapleLeaves : cedarLeaves;
      if (foliage) for (let j = 0; j < (isMobile ? 2 : 3); j++) {
        add(new THREE.PlaneGeometry(4.4 * scale, 3.5 * scale), foliage,
          { x: px, y: yy + .15 * scale, z: pz, ry: j * Math.PI / (isMobile ? 2 : 3) + a, shadow: false });
      }
    }
    if (obstacle) world.addCircle(x, z, .52 * scale, h, { sight: true });
  }
  // Дерево убежище: полый проход снизу и густая крона скрывают игроков.
  const tx = -29, tz = 0;
  for (const s of [-1, 1]) {
    add(G.cyl(1.0, 1.42, 7.2, 10), bark, { x: tx + s * 1.15, y: 3.6, z: tz });
    world.addCircle(tx + s * 1.15, tz, 1.0, 7.2, { sight: true });
    blocker(tx + s * 1.15, 3.5, tz, 2, 7, 2);
    for (const q of [-1, 1]) beam([tx + s * 1.2, 1.0, tz + q * .5], [tx + s * 3.5, .1, tz + q * 2.8], .29, bark, 9);
  }
  add(G.box(4.1, 1.8, 3.0), bark, { x: tx, y: 7.7, z: tz });
  for (let i = 0; i < 7; i++) {
    const a = i * Math.PI * 2 / 7;
    const px = tx + Math.cos(a) * 3.4, pz = tz + Math.sin(a) * 2.8, yy = 8.6 + (i % 3) * .8;
    add(leafGeo, i % 4 === 0 ? pink : pine, { x: px, y: yy, z: pz, sx: 3.1, sy: 2.3, sz: 3.0 });
    const foliage = i % 4 === 0 ? mapleLeaves : cedarLeaves;
    if (foliage) for (let j = 0; j < 2; j++) add(new THREE.PlaneGeometry(7.5, 5.7), foliage,
      { x: px, y: yy + .35, z: pz, ry: a + j * Math.PI / 2, shadow: false });
  }
  for (const [x,z] of [[-31,3],[-27,3],[-32,-2],[-26,-2]]) {
    add(G.box(.65,.1,.8), rock, { x, y: .06, z, ry: rand() * .5 });
  }
  world.addBush(tx, tz, 2.0, 'tree-hollow');
  lantern(tx - 3.5, tz + 3, 1.35);

  // Каменные стены рисуют силуэт горы; между ними остаются широкие обходы.
  function boulder(x, z, r = 1.3, solid = true) {
    add(boulderGeo, rand() > .45 ? rock : rockLight, { x, y: r * .56, z, sx: r, sy: r * .72, sz: r * (.7 + rand() * .4) });
    if (solid) world.addCircle(x, z, r * .68, r * 1.3, { sight: true });
  }
  for (const [x, z, r] of [[-21,-19,1.7],[-16,-16,1.5],[-10,-12,1.6],[2,-18,1.6],[7,-17,1.5],[12,-21,1.7],[33,-6,1.8],[36,18,1.8],[-35,-18,1.8]]) boulder(x,z,r);
  // Скальные уступы по краям маршрутов придают сцене высоту без новых тупиков.
  function outcrop(x, z, radius, height) {
    for (let i = 0; i < 4; i++) {
      const a = i * Math.PI / 2 + .3, rr = radius * (.55 + rand() * .25);
      const px = x + Math.cos(a) * radius * .46, pz = z + Math.sin(a) * radius * .46;
      const hh = height * (.67 + rand() * .38);
      add(G.cyl(rr * .7, rr, hh, 7), i % 2 ? rockLight : rock, { x: px, y: hh / 2 - .08, z: pz, ry: rand() });
      add(boulderGeo, rockLight, { x: px, y: hh - .14, z: pz, sx: rr * .8, sy: .34, sz: rr * .7 });
    }
    add(leafGeo, moss, { x, y: height * .92, z, sx: radius * .8, sy: .28, sz: radius * .76 });
    world.addCircle(x, z, radius * .8, height, { sight: true });
  }
  for (const [x,z,r,h] of [
    [-40,18,2.6,3.6],[-40,-13,2.7,4.4],[-19,-37,2.7,4.7],
    [5,-40,3.0,5.0],[17,-38,2.8,5.4],[36,-36,3.0,6.1],
    [39,2,2.4,3.6],[17,34,2.1,3.8],[-18,34,2.0,2.9],
  ]) outcrop(x,z,r,h);

  const fallTex = canvasTexture(128, 256, (c, w, h) => {
    c.clearRect(0, 0, w, h);
    for (let i = 0; i < 28; i++) {
      const x = rand() * w, line = 1 + rand() * 5;
      c.strokeStyle = `rgba(164,220,255,${.13 + rand() * .38})`;
      c.lineWidth = line;
      c.beginPath(); c.moveTo(x, 0); c.bezierCurveTo(x + rand() * 9, h * .35, x - rand() * 9, h * .66, x + rand() * 5, h); c.stroke();
    }
  });
  const waterfall = add(new THREE.PlaneGeometry(3.2, 3.8), new THREE.MeshBasicMaterial({ map: fallTex, transparent: true, opacity: .82, depthWrite: false, side: THREE.DoubleSide, color: 0x9cceff }),
    { x: 15.35, y: 1.94, z: 33.3, ry: -Math.PI / 2, shadow: false });
  waterfall.renderOrder = 2;
  glow(15.3, .35, 33.3, 4.2, true);

  // Скрытая пещера на востоке — широкий проход, низкий потолок и два укрытия.
  const cx = 31, cz = 28;
  for (const s of [-1, 1]) {
    boulder(cx + s * 3.1, cz, 2.3);
    add(G.box(2.4, 1.1, 4.8), rock, { x: cx + s * 3.15, y: 3.5, z: cz });
    blocker(cx + s * 3.15, 2, cz, 2.6, 4, 4.8);
    boulder(cx + s * 3.0, cz - 2.5, 1.2);
  }
  add(G.box(8.4, 1.2, 5.5), rock, { x: cx, y: 4.7, z: cz });
  world.addBox(cx, cz, 8.4, 5.5, 5.3, { bottom: 4.1, sight: true, nav: false });
  blocker(cx, 4.7, cz, 8.4, 1.2, 5.5);
  add(G.box(7.5, 3.7, .45), rock, { x: cx, y: 1.85, z: cz + 2.65 });
  world.addBox(cx, cz + 2.65, 7.5, .45, 3.7, { sight: true });
  for (let i = 0; i < 6; i++) {
    const px = cx - 3.7 + i * 1.5;
    add(boulderGeo, rockLight, { x: px, y: 5.1 + rand() * .24, z: cz - 2.35, sx: 1.25, sy: .7, sz: .9 });
    add(G.cone(.24 + rand() * .18, .6 + rand() * .65, 5), rock,
      { x: px, y: 3.83, z: cz - 2.35, rx: Math.PI, shadow: false });
  }
  add(G.box(7.1, .07, 4.8), rockLight, { x: cx, y: .035, z: cz });
  for (const [dx,dz,h] of [[-2.2,-1.3,1.2],[-1.4,1.1,.8],[2.1,.6,1.5]]) {
    add(G.cone(.28, h, 5), spirit, { x: cx + dx, y: h / 2, z: cz + dz, rz: .15, shadow: false });
    glow(cx + dx, h * .6, cz + dz, 2.3, true);
  }
  world.addBush(cx, cz + 1.0, 1.6, 'cave');
  world.addBush(cx - 1.2, cz - 1.2, 1.0, 'cave');
  glow(cx, 2.4, cz - 1.9, 5.0, true);
  lantern(cx + 4.2, cz + 2.8, 1.4);

  // Лисьи статуи — ориентир восточной развилки.
  function fox(x, z, scale = 1) {
    add(G.cyl(.91 * scale, 1.14 * scale, .42 * scale, 8), rock, { x, y: .21 * scale, z });
    add(G.cyl(.72 * scale, .88 * scale, .15 * scale, 8), trim, { x, y: .46 * scale, z });
    add(G.sphere(.54 * scale, 12, 10), rockLight, { x, y: 1.04 * scale, z, sy: 1.32 });
    add(G.sphere(.43 * scale, 12, 10), rockLight, { x, y: 1.69 * scale, z: z + .13 * scale });
    add(G.cone(.36 * scale, 1.25 * scale, 7), rockLight, { x: x + .5 * scale, y: 1.32 * scale, z: z - .42 * scale, rz: -.5 });
    add(G.cone(.24 * scale, .42 * scale, 7), rockLight, { x, y: 1.51 * scale, z: z + .51 * scale, rx: Math.PI / 2 });
    for (const s of [-1, 1]) {
      add(G.cone(.2 * scale, .59 * scale, 6), rockLight, { x: x + s * .29 * scale, y: 2.07 * scale, z });
      add(G.cone(.095 * scale, .33 * scale, 6), pink, { x: x + s * .29 * scale, y: 2.09 * scale, z: z + .08 * scale });
      add(G.sphere(.084 * scale, 7, 5), spirit, { x: x + s * .2 * scale, y: 1.73 * scale, z: z + .5 * scale, shadow: false });
      add(G.box(.18 * scale, .05 * scale, .08 * scale), redEdge, { x: x + s * .22 * scale, y: .52 * scale, z: z + .5 * scale });
    }
    world.addCircle(x, z, .9 * scale, 2.3 * scale, { sight: true });
  }
  fox(26, 9, 1.2); fox(34, 10, 1.15);

  // Храм Безлика: открытый зал, в который можно войти с трёх сторон.
  function temple(x, z) {
    add(G.box(13.3, .14, 10.8), redEdge, { x, y: .07, z });
    add(G.box(12.4, .36, 10), rockLight, { x, y: .18, z });
    world.addBox(x, z, 12.4, 10, .36, { sight: false, nav: false });
    for (let i = 0; i < 3; i++) {
      const zz = z + 5.4 + i * .55, top = .31 - i * .1;
      add(G.box(7.5 + i * .6, top, .62), rockLight, { x, y: top / 2, z: zz });
      world.addBox(x, zz, 7.5 + i * .6, .62, top, { sight: false, nav: false });
    }
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const px = x + sx * 5.2, pz = z + sz * 3.9;
      add(G.cyl(.5, .55, .34, 10), rock, { x: px, y: .48, z: pz });
      add(G.cyl(.3, .36, 4.7, 10), vermilion, { x: px, y: 2.7, z: pz });
      add(G.cyl(.42, .42, .14, 10), trim, { x: px, y: 4.83, z: pz });
      for (const side of [-1, 1]) beam([px, 4.43, pz], [px + side * .85, 5.05, pz], .13, redEdge);
      world.addCircle(px, pz, .36, 5.1, { sight: false });
    }
    add(G.box(12.9, .3, 10.8), redEdge, { x, y: 5.05, z });
    roofLayer(x, z, 14.2, 12.0, 5.15, 2.25);
    roofLayer(x, z - .3, 8.6, 6.4, 6.95, 1.52);
    // Выступающая крыша входа оставляет проход под собой.
    roofLayer(x, z + 5.45, 8.2, 3.4, 3.82, 1.18);
    for (const sx of [-1, 1]) {
      const px = x + sx * 3.3;
      add(G.cyl(.18, .23, 3.35, 8), vermilion, { x: px, y: 1.95, z: z + 6.0 });
      add(G.cyl(.25, .25, .12, 8), trim, { x: px, y: 3.6, z: z + 6.0 });
    }
    add(G.box(6.4, 3.3, .26), plaster, { x, y: 2.3, z: z - 4.6 });
    world.addBox(x, z - 4.6, 6.4, .26, 4.0, { sight: true });
    blocker(x, 2.3, z - 4.6, 6.4, 3.3, .26);
    for (const side of [-1, 1]) {
      add(G.box(.22, 2.4, 5.5), plaster, { x: x + side * 5.8, y: 1.55, z });
      world.addBox(x + side * 5.8, z, .22, 5.5, 2.8, { sight: true });
      const panel = new THREE.MeshStandardMaterial({ color: 0xffd2a0, emissive: 0xf1843a, emissiveIntensity: .65, roughness: 1 });
      for (const zz of [-2, 0, 2]) {
        add(G.box(.045, 1.74, 1.42), panel, { x: x + side * 5.94, y: 2.2, z: z + zz, shadow: false });
        for (const dy of [1.53, 2.16, 2.8]) add(G.box(.09, .055, 1.52), redEdge, { x: x + side * 5.97, y: dy, z: z + zz });
      }
    }
    // Алтарь остаётся видимым из открытого входа.
    add(G.box(2.9, .92, 1.5), redEdge, { x, y: .82, z: z - 2.4 });
    world.addBox(x, z - 2.4, 2.4, 1.2, 1.3, { sight: true });
    const cloak = mat(0x141326, { roughness: .95 });
    add(G.cone(1.02, 2.48, 14), cloak, { x, y: 2.56, z: z - 2.4 });
    add(G.sphere(.56, 16, 12), cloak, { x, y: 3.73, z: z - 2.4, sy: 1.35 });
    add(G.sphere(.31, 16, 12), plaster, { x, y: 3.82, z: z - 1.89, sx: .82, sy: 1.2, sz: .34, shadow: false });
    for (const sx of [-1, 1]) {
      add(G.sphere(.047, 7, 5), cloak, { x: x + sx * .12, y: 3.89, z: z - 1.77, shadow: false });
      add(G.box(.16, .7, .08), trim, { x: x + sx * 1.14, y: 1.4, z: z - 2.1 });
    }
    glow(x, 3.3, z - 1.9, 5.5, true);
    lantern(x - 4.4, z + 4.2, 1.8); lantern(x + 4.4, z + 4.2, 1.8);
    world.addBush(x - 3.7, z - 2.3, 1.0, 'shrine-screen');
  }
  temple(26, -27);

  // Башня наблюдения: нижний проход и доступный по лестнице верхний ярус.
  function tower(x, z) {
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const px = x + sx * 2.7, pz = z + sz * 2.7;
      add(G.cyl(.4, .45, .32, 8), rock, { x: px, y: .16, z: pz });
      add(G.box(.34, 7.3, .34), vermilion, { x: px, y: 3.65, z: pz });
      add(G.cyl(.39, .39, .15, 8), trim, { x: px, y: 6.8, z: pz });
      world.addBox(px, pz, .34, .34, 7.3, { sight: false });
    }
    for (const sz of [-1, 1]) for (const sx of [-1, 1]) {
      beam([x + sx * 2.7, 1.15, z + sz * 2.7], [x + sx * 2.7, 3.75, z - sz * 2.7], .13, redEdge);
    }
    add(G.box(6.6, .27, 6.6), bridgeWood, { x, y: 3.8, z });
    world.addBox(x, z, 6.6, 6.6, 3.93, { bottom: 3.65, sight: false, nav: false });
    for (const sz of [-1, 1]) {
      add(G.box(6.5, .13, .16), redEdge, { x, y: 4.9, z: z + sz * 3.14 });
      world.addBox(x, z + sz * 3.14, 6.5, .16, 5.0, { bottom: 3.95, sight: false, nav: false });
      for (let i = -2; i <= 2; i++) add(G.box(.11, 1.0, .12), vermilion, { x: x + i * 1.25, y: 4.45, z: z + sz * 3.14 });
    }
    add(G.box(.16, .13, 6.3), redEdge, { x: x + 3.14, y: 4.9, z });
    world.addBox(x + 3.14, z, .16, 6.3, 5.0, { bottom: 3.95, sight: false, nav: false });
    for (const sz of [-1, 1]) {
      add(G.box(.16, .13, 2.05), redEdge, { x: x - 3.14, y: 4.9, z: z + sz * 2.15 });
      world.addBox(x - 3.14, z + sz * 2.15, .16, 2.05, 5.0, { bottom: 3.95, sight: false, nav: false });
    }
    add(G.box(7.4, .2, 7.4), redEdge, { x, y: 7.35, z });
    roofLayer(x, z, 8.3, 8.3, 7.45, 1.55);
    world.addBox(x, z, 7.4, 7.4, 7.55, { bottom: 7.25, sight: true, nav: false });
    blocker(x, 7.45, z, 7.4, .45, 7.4);
    for (let i = 0; i < 9; i++) {
      const yy = .42 + i * .42;
      add(G.box(.9, .09, .12), bridgeWood, { x: x - 3.02, y: yy, z });
    }
    world.addLadder(x - 3.08, z, -1, 0, 1.4, 4.05);
    lantern(x - 2.1, z + 2.2, 4.7);
    lantern(x + 2.1, z + 2.2, 4.7);
  }
  tower(-7, -32);

  // Дальний лес держит границы карты, внутри — просветы для обзора и погони.
  for (let i = -40; i <= 40; i += 5.1) {
    for (const [x, z] of [[i, -41], [i, 41], [-41, i], [41, i]]) {
      if (Math.abs(i + 31) < 5 && z > 0) continue;
      tree(x + (rand() - .5) * 1.4, z + (rand() - .5) * 1.4, 1.1 + rand() * .45, rand() > .88);
    }
  }
  for (const [x, z, s, flower] of [[-35,-27,1.3,false],[-26,-31,1.2,false],[-34,13,1.1,true],[-19,23,1.0,false],[-11,16,1.1,true],[-17,-1,1.0,false],[2,-3,1.3,true],[8,-27,1.0,false],[16,29,1.0,true],[22,36,1.1,false],[35,-13,1.2,true],[13,-35,1.0,false],[-28,-13,1.1,false]]) tree(x,z,s,flower);
  function thicket(x, z, r = 1.5) {
    for (let i = 0; i < 3; i++) {
      const a = i * 2.1;
      add(leafGeo, i === 1 ? moss : pine, { x: x + Math.cos(a) * r * .35, y: .75, z: z + Math.sin(a) * r * .35, sx: r * .7, sy: .8, sz: r * .7 });
    }
    const foliage = rand() > .6 ? mapleLeaves : cedarLeaves;
    if (foliage) for (let i = 0; i < 2; i++) add(new THREE.PlaneGeometry(r * 2.35, r * 1.65), foliage,
      { x, y: .85, z, ry: i * Math.PI / 2 + .28, shadow: false });
    world.addBush(x, z, r);
  }
  for (const [x,z] of [[-36,7],[-35,-7],[-22,13],[-16,21],[-3,30],[7,31],[19,31],[23,18],[34,19],[37,-8],[14,-30],[-19,-29],[-27,-24],[2,-34]]) thicket(x,z);
  // Настоящие предметы тех же видов, в которые превращаются игроки.
  for (const [kind, x, z, turn] of [
    ['crate', -37, 30, .2], ['crate', 20, -30, -.3], ['crate', 34, 24, .5],
    ['barrel', -35, 23, .1], ['barrel', 33, -27, -.2], ['barrel', -10, -35, .4],
    ['lantern', -23, 15, 0], ['lantern', 17, -10, 0], ['lantern', 27, 33, 0],
    ['pumpkin', -17, -27, .2], ['pumpkin', 18, 19, -.5], ['pumpkin', 35, -15, .3],
    ['bush', -32, -9, .1], ['bush', 37, 7, -.2],
  ]) {
    const prop = buildProp(kind);
    prop.position.set(x, 0, z); prop.rotation.y = turn;
    scene.add(prop);
    if (kind === 'crate' || kind === 'barrel') world.addCircle(x, z, kind === 'crate' ? .57 : .46, 1.1, { sight: false });
  }
  // Мелкая растительность собирается в единые меши по материалу.
  const grassBlade = G.cone(.16, .74, 3);
  const flowerCore = G.sphere(.08, 6, 5);
  for (const [bx, bz] of [[-33,19],[-25,5],[-18,12],[-13,-23],[4,2],[14,13],[21,32],[32,3],[16,-32],[-4,-35]]) {
    for (let i = 0; i < (isMobile ? 12 : 18); i++) {
      const a = rand() * Math.PI * 2, rr = 1.8 + rand() * 3.4;
      const x = bx + Math.cos(a) * rr, z = bz + Math.sin(a) * rr;
      if (Math.abs(x) > 39 || Math.abs(z) > 39 || world.inWater(x, z)) continue;
      const height = .32 + rand() * .55;
      for (let j = 0; j < 3; j++) add(grassBlade, j === 0 ? pine : moss,
        { x: x + (j - 1) * .12, y: height / 2, z, sx: .72, sy: height / .74, sz: .7, rz: (j - 1) * .42, shadow: false });
      if (i % 3 === 0) {
        add(flowerCore, moonPetal, { x, y: height + .08, z, shadow: false });
        for (let p = 0; p < 4; p++) add(flowerCore, pink,
          { x: x + Math.cos(p * Math.PI / 2) * .13, y: height + .08, z: z + Math.sin(p * Math.PI / 2) * .13, shadow: false });
      }
    }
  }
  // Камыш у воды: можно скрыться, если замереть.
  const reed = mat(0x426b52, { roughness: 1 });
  for (let i = 0; i < 26; i++) {
    const a = i * 2.399, rr = .74 + rand() * .26;
    const x = Math.cos(a) * 17 * rr, z = 23 + Math.sin(a) * 10 * rr;
    add(G.cyl(.045, .07, .9 + rand() * .8, 5), reed, { x, y: .7, z });
    if (i % 4 === 0) world.addBush(x, z, .75, 'reeds');
  }
  for (const [x,z] of [[-7,18],[6,20],[14,22],[30,33],[-13,9]]) {
    const fog = new THREE.Sprite(new THREE.SpriteMaterial({ map: mistTex, transparent: true, depthWrite: false, fog: false, opacity: .55 }));
    fog.position.set(x, .9, z); fog.scale.set(10, 3.8, 1); scene.add(fog);
  }
  const wisps = [];
  for (const [x,z] of [[-10,19],[4,27],[17,24],[-19,10],[20,-9]]) {
    const wisp = add(G.sphere(.24, 9, 7), spirit, { x, y: .7, z, shadow: false });
    wisp.userData.keep = true;
    wisps.push(wisp);
    glow(x, .7, z, 2.4, true);
  }
  const petalCount = isMobile ? 48 : 88;
  const petalPositions = new Float32Array(petalCount * 3);
  const petalBases = [];
  const petalAreas = [[-29, 0, 6], [-12, 9, 8], [12, 14, 7], [26, -26, 8]];
  for (let i = 0; i < petalCount; i++) {
    const [cx, cz, radius] = petalAreas[i % petalAreas.length];
    const angle = rand() * Math.PI * 2, distance = rand() * radius;
    const px = cx + Math.cos(angle) * distance, pz = cz + Math.sin(angle) * distance;
    const py = .8 + rand() * 6.1;
    petalPositions.set([px, py, pz], i * 3);
    petalBases.push([px, py, pz, rand() * Math.PI * 2]);
  }
  const petalGeo = new THREE.BufferGeometry();
  petalGeo.setAttribute('position', new THREE.BufferAttribute(petalPositions, 3));
  scene.add(new THREE.Points(petalGeo, new THREE.PointsMaterial({
    color: 0xffb9cf, map: radialTexture('rgba(255,245,240,1)', 'rgba(255,180,205,0)', 32),
    size: .28, sizeAttenuation: true, transparent: true, alphaTest: .08, depthWrite: false,
  })));
  const rippleMat = new THREE.MeshStandardMaterial({ color: 0x94d9f1, emissive: 0x3ca2c8, emissiveIntensity: .7, transparent: true, opacity: .38, side: THREE.DoubleSide, depthWrite: false });
  for (const p of world.waterZones) for (let i = 0; i < 11; i++) {
    const a = rand() * Math.PI * 2, r = Math.sqrt(rand()) * .8;
    const x = p.x + Math.cos(a) * p.rx * r, z = p.z + Math.sin(a) * p.rz * r;
    add(new THREE.RingGeometry(.45 + rand() * .5, .5 + rand() * .58, 20), rippleMat,
      { x, y: .077, z, rx: -Math.PI / 2, shadow: false });
  }

  const lights = [];
  for (let i = 0; i < (isMobile ? 2 : 4); i++) { const l = new THREE.PointLight(0xffac62, 16, 12, 1.9); scene.add(l); lights.push(l); }
  function updateLights(center) {
    const sorted = lanternSpots.slice().sort((a, b) => a.distanceToSquared(center) - b.distanceToSquared(center));
    lights.forEach((l, i) => { if (sorted[i]) l.position.copy(sorted[i]); });
    moonLight.position.set(center.x - 22, 32, center.z - 14);
    moonLight.target.position.set(center.x, 0, center.z);
  }
  function updateVisuals(t) {
    waterfall.material.opacity = .73 + Math.sin(t * 3.3) * .09;
    for (let i = 0; i < wisps.length; i++) wisps[i].position.y = .7 + Math.sin(t * 1.4 + i * 2.1) * .28;
    for (let i = 0; i < petalCount; i++) {
      const [x, y, z, phase] = petalBases[i];
      petalPositions[i * 3] = x + Math.sin(t * .48 + phase) * .6;
      petalPositions[i * 3 + 1] = .5 + ((y - .5 - t * (.34 + i % 5 * .055)) % 6.6 + 6.6) % 6.6;
      petalPositions[i * 3 + 2] = z + Math.cos(t * .37 + phase) * .37;
    }
    petalGeo.attributes.position.needsUpdate = true;
  }
  const stats = mergeStatic(scene);
  return {
    stats, world, cameraBlockers, bushMeshes: [], updateLights, updateVisuals,
    playerSpawn: new THREE.Vector3(-31, 0, 34),
    botSpawns: [[-34, 33], [-27, 36], [-31, 27], [-23, 32], [-36, 26], [-20, 27]],
    ghostSpawn: new THREE.Vector3(26, 0, -20),
    ghostSpawns: [[26, -20], [20, -26], [31, -20], [24, -33]],
  };
}
