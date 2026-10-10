// «Лес духов» — второй полноценный уровень. Геометрия и укрытия детерминированы:
// хозяин и гости видят одинаковые проходы, а боты используют ту же сетку коллизий.
import * as THREE from 'three';
import { CollisionWorld } from './colliders.js?v=2026100901';
import { canvasTexture, mat, mesh, G, fluffySphere } from '../characters/common.js?v=2026100901';
import { radialTexture } from '../characters/noface.js?v=2026100901';
import { buildProp } from './props.js?v=2026100901';
import { mergeStatic } from './merge.js?v=2026100901';
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
  const rock = mat(0x424754, { roughness: 1, flat: true });
  const rockLight = mat(0x66717a, { roughness: 1, flat: true });
  const bridgeWood = mat(0x795137, { roughness: 0.9 });
  const railWood = mat(0x4c302a, { roughness: 0.9 });
  const red = mat(0x9f3032, { roughness: 0.75 });
  const redEdge = mat(0x451b2a, { roughness: 0.72 });
  const roof = mat(0x252b4c, { roughness: 0.8 });
  const plaster = mat(0xd7b98b, { roughness: 0.92 });
  const gold = mat(0xffbd66, { emissive: 0xff8f34, emissiveIntensity: 2.4, roughness: 0.5 });
  const spirit = mat(0x96d8ff, { emissive: 0x6caeff, emissiveIntensity: 2.8, roughness: 0.45 });
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

  const groundTex = canvasTexture(256, 256, (c, w, h) => {
    c.fillStyle = '#1e3838'; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 2100; i++) {
      const v = 48 + (rand() * 38 | 0);
      c.fillStyle = `rgba(${v / 2 | 0},${v},${v * .85 | 0},${.2 + rand() * .3})`;
      c.fillRect(rand() * w, rand() * h, 1 + rand() * 3, 2 + rand() * 5);
    }
  });
  groundTex.wrapS = groundTex.wrapT = THREE.RepeatWrapping; groundTex.repeat.set(20, 20);
  const floor = add(new THREE.PlaneGeometry(HALF * 4, HALF * 4), new THREE.MeshStandardMaterial({ map: groundTex, roughness: 1 }), { rx: -Math.PI / 2, shadow: false });
  floor.receiveShadow = true; floor.userData.keep = true;
  const trail = mat(0x71654e, { roughness: 1 });
  function segment(ax, az, bx, bz, width, material = trail, y = 0.025) {
    const dx = bx - ax, dz = bz - az, len = Math.hypot(dx, dz);
    add(G.box(len, 0.045, width), material, { x: (ax + bx) / 2, y, z: (az + bz) / 2, ry: -Math.atan2(dz, dx), shadow: false });
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

  const glow = (x, y, z, size = 2.6, blue = false) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: blue ? radialTexture('rgba(140,220,255,0.9)', 'rgba(50,135,255,0)') : glowTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    s.position.set(x, y, z); s.scale.set(size, size, 1); scene.add(s);
  };
  function lantern(x, z, y = 2.0, tall = false) {
    if (tall) {
      add(G.cyl(.1, .14, y + .25, 7), railWood, { x, y: (y + .25) / 2, z });
      add(G.box(.76, .1, .1), railWood, { x: x + .32, y: y + .1, z });
      world.addCircle(x, z, .18, y + .2, { sight: false });
      x += .62;
    }
    add(G.box(.48, .6, .48), gold, { x, y, z, shadow: false });
    add(G.box(.7, .08, .7), redEdge, { x, y: y + .35, z });
    add(G.box(.65, .08, .65), redEdge, { x, y: y - .35, z });
    glow(x, y, z, 2.9); lanternSpots.push(new THREE.Vector3(x, y, z));
  }
  function torii(x, z, scale = 1) {
    for (const s of [-1, 1]) {
      add(G.cyl(.2 * scale, .25 * scale, 4.5 * scale, 8), red, { x: x + s * 2.0 * scale, y: 2.25 * scale, z });
      world.addCircle(x + s * 2 * scale, z, .27 * scale, 4.5 * scale);
    }
    add(G.box(5.5 * scale, .34 * scale, .55 * scale), redEdge, { x, y: 4.48 * scale, z });
    add(G.box(4.8 * scale, .23 * scale, .28 * scale), red, { x, y: 3.8 * scale, z });
  }
  torii(-31, 31, 1.15); torii(25, -17, .88); torii(-8, -23, .65);
  for (const [x, z] of [[-34, 28], [-28, 28], [-28, 14], [-27, -5], [-19, 7], [8, 9], [14, -3], [18, -12], [27, -16], [4, 28], [24, 22], [29, 14], [-2, -25], [-10, -31]]) lantern(x, z, 1.95, true);

  // Мост туманов: настоящий широкий переход через воду, доступный ботам.
  function bridge(ax, az, bx, bz, width = 3.8) {
    const len = Math.hypot(bx - ax, bz - az), ang = -Math.atan2(bz - az, bx - ax);
    const g = new THREE.Group(); g.position.set((ax + bx) / 2, 0, (az + bz) / 2); g.rotation.y = ang;
    const plankGeo = G.box(.73, .17, width);
    for (let x = -len / 2 + .35; x < len / 2; x += .78) g.add(mesh(plankGeo, bridgeWood, { x, y: .32 + .12 * (1 - Math.abs(x) / (len / 2)), z: 0 }));
    for (const side of [-1, 1]) {
      for (let x = -len / 2; x <= len / 2; x += 2.4) g.add(mesh(G.box(.14, 1.25, .14), railWood, { x, y: .88, z: side * width / 2 }));
      g.add(mesh(G.box(len, .12, .12), railWood, { y: 1.44, z: side * width / 2 }));
    }
    scene.add(g);
    world.addBox((ax + bx) / 2, (az + bz) / 2, len + 1, width, .44, { sight: false, nav: false });
    for (const x of [ax, bx]) add(G.box(1.4, .16, width + .25), bridgeWood, { x, y: .08, z: az, shadow: false });
  }
  bridge(-17, 8, 8, 8);
  // Дощатые мостки через болото — узкий быстрый путь с боковыми островками.
  segment(-12, 29, -1, 23, 2.1, bridgeWood, .12);
  segment(-1, 23, 13, 19, 2.1, bridgeWood, .12);
  segment(13, 19, 24, 26, 2.1, bridgeWood, .12);

  function tree(x, z, scale = 1, blossom = false, obstacle = true) {
    const h = 3.8 * scale;
    add(G.cyl(.33 * scale, .52 * scale, h, 7), trunk, { x, y: h / 2, z });
    const leaves = blossom ? pink : (rand() > .4 ? pine : spruce);
    for (let i = 0; i < 3; i++) {
      const a = i * 2.15 + x;
      add(leafGeo, leaves, { x: x + Math.cos(a) * .9 * scale, y: (3.5 + i * .34) * scale, z: z + Math.sin(a) * .9 * scale, sx: 1.6 * scale, sy: 1.08 * scale, sz: 1.5 * scale });
    }
    if (obstacle) world.addCircle(x, z, .5 * scale, h, { sight: true });
  }
  // Дерево убежище: полый проход снизу и густая крона скрывают игроков.
  const tx = -29, tz = 0;
  for (const s of [-1, 1]) {
    add(G.cyl(1.0, 1.42, 7.2, 10), bark, { x: tx + s * 1.15, y: 3.6, z: tz });
    world.addCircle(tx + s * 1.15, tz, 1.0, 7.2, { sight: true });
    blocker(tx + s * 1.15, 3.5, tz, 2, 7, 2);
  }
  add(G.box(4.1, 1.8, 3.0), bark, { x: tx, y: 7.7, z: tz });
  for (let i = 0; i < 7; i++) {
    const a = i * Math.PI * 2 / 7;
    add(leafGeo, i % 4 === 0 ? pink : pine, { x: tx + Math.cos(a) * 3.4, y: 8.6 + (i % 3) * .8, z: tz + Math.sin(a) * 2.8, sx: 3.1, sy: 2.3, sz: 3.0 });
  }
  world.addBush(tx, tz, 2.0, 'tree-hollow');
  lantern(tx - 3.5, tz + 3, 1.35);

  // Каменные стены рисуют силуэт горы; между ними остаются широкие обходы.
  function boulder(x, z, r = 1.3, solid = true) {
    add(boulderGeo, rand() > .45 ? rock : rockLight, { x, y: r * .56, z, sx: r, sy: r * .72, sz: r * (.7 + rand() * .4) });
    if (solid) world.addCircle(x, z, r * .68, r * 1.3, { sight: true });
  }
  for (const [x, z, r] of [[-21,-19,1.7],[-16,-16,1.5],[-10,-12,1.6],[2,-18,1.6],[7,-17,1.5],[12,-21,1.7],[33,-6,1.8],[36,18,1.8],[-35,-18,1.8]]) boulder(x,z,r);

  // Скрытая пещера на востоке — широкий проход, низкий потолок и два укрытия.
  const cx = 31, cz = 28;
  for (const s of [-1, 1]) {
    boulder(cx + s * 3.1, cz, 2.3);
    add(G.box(2.4, 1.1, 4.8), rock, { x: cx + s * 3.15, y: 3.5, z: cz });
    blocker(cx + s * 3.15, 2, cz, 2.6, 4, 4.8);
  }
  add(G.box(8.4, 1.2, 5.5), rock, { x: cx, y: 4.7, z: cz });
  world.addBox(cx, cz, 8.4, 5.5, 5.3, { bottom: 4.1, sight: true, nav: false });
  blocker(cx, 4.7, cz, 8.4, 1.2, 5.5);
  world.addBush(cx, cz + 1.0, 1.6, 'cave');
  world.addBush(cx - 1.2, cz - 1.2, 1.0, 'cave');
  glow(cx, 2.4, cz - 1.9, 5.0, true);
  lantern(cx + 4.2, cz + 2.8, 1.4);

  // Лисьи статуи — ориентир восточной развилки.
  function fox(x, z, scale = 1) {
    add(G.cyl(.9 * scale, 1.1 * scale, .35 * scale, 6), rock, { x, y: .18 * scale, z });
    add(G.sphere(.54 * scale, 10, 8), rockLight, { x, y: .95 * scale, z, sy: 1.25 });
    add(G.sphere(.42 * scale, 10, 8), rockLight, { x, y: 1.62 * scale, z: z + .13 * scale });
    for (const s of [-1, 1]) {
      add(G.cone(.22 * scale, .54 * scale, 5), rockLight, { x: x + s * .29 * scale, y: 2.03 * scale, z });
      add(G.sphere(.075 * scale, 6, 4), spirit, { x: x + s * .19 * scale, y: 1.68 * scale, z: z + .48 * scale, shadow: false });
    }
    world.addCircle(x, z, .9 * scale, 2.3 * scale, { sight: true });
  }
  fox(26, 9, 1.2); fox(34, 10, 1.15);

  // Храм Безлика: открытый зал, в который можно войти с трёх сторон.
  function temple(x, z) {
    add(G.box(12.4, .36, 10), rockLight, { x, y: .18, z });
    world.addBox(x, z, 12.4, 10, .36, { sight: false, nav: false });
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const px = x + sx * 5.2, pz = z + sz * 3.9;
      add(G.cyl(.3, .36, 4.7, 8), red, { x: px, y: 2.7, z: pz });
      world.addCircle(px, pz, .36, 5.1, { sight: false });
    }
    add(G.box(12.6, .25, 10.6), redEdge, { x, y: 5.15, z });
    const ridge = add(G.cone(8.5, 3.0, 4), roof, { x, y: 6.65, z, ry: Math.PI / 4 });
    ridge.scale.z = .74;
    add(G.box(6.4, 3.3, .26), plaster, { x, y: 2.3, z: z - 4.6 });
    world.addBox(x, z - 4.6, 6.4, .26, 4.0, { sight: true });
    blocker(x, 2.3, z - 4.6, 6.4, 3.3, .26);
    for (const side of [-1, 1]) {
      add(G.box(.22, 2.4, 5.5), plaster, { x: x + side * 5.8, y: 1.55, z });
      world.addBox(x + side * 5.8, z, .22, 5.5, 2.8, { sight: true });
    }
    // Алтарь остаётся видимым из открытого входа.
    add(G.box(2.4, .9, 1.2), redEdge, { x, y: .82, z: z - 2.4 });
    world.addBox(x, z - 2.4, 2.4, 1.2, 1.3, { sight: true });
    add(G.sphere(.78, 16, 12), mat(0x191630, { roughness: .75 }), { x, y: 2.08, z: z - 2.4, sy: 1.35 });
    add(G.box(.34, .6, .09), plaster, { x, y: 2.13, z: z - 1.69, shadow: false });
    lantern(x - 4.4, z + 4.2, 1.8); lantern(x + 4.4, z + 4.2, 1.8);
    world.addBush(x - 3.7, z - 2.3, 1.0, 'shrine-screen');
  }
  temple(26, -27);

  // Башня наблюдения: нижний проход и доступный по лестнице верхний ярус.
  function tower(x, z) {
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const px = x + sx * 2.7, pz = z + sz * 2.7;
      add(G.box(.34, 7.3, .34), red, { x: px, y: 3.65, z: pz });
      world.addBox(px, pz, .34, .34, 7.3, { sight: false });
    }
    add(G.box(6.6, .27, 6.6), bridgeWood, { x, y: 3.8, z });
    world.addBox(x, z, 6.6, 6.6, 3.93, { bottom: 3.65, sight: false, nav: false });
    add(G.box(7.4, .2, 7.4), redEdge, { x, y: 7.35, z });
    add(G.cone(5.0, 1.8, 4), roof, { x, y: 8.2, z, ry: Math.PI / 4 });
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
  for (const [x,z] of [[-10,19],[4,27],[17,24],[-19,10],[20,-9]]) {
    add(G.sphere(.24, 9, 7), spirit, { x, y: .7, z, shadow: false }); glow(x, .7, z, 2.4, true);
  }

  const lights = [];
  for (let i = 0; i < (isMobile ? 2 : 4); i++) { const l = new THREE.PointLight(0xffac62, 16, 12, 1.9); scene.add(l); lights.push(l); }
  function updateLights(center) {
    const sorted = lanternSpots.slice().sort((a, b) => a.distanceToSquared(center) - b.distanceToSquared(center));
    lights.forEach((l, i) => { if (sorted[i]) l.position.copy(sorted[i]); });
    moonLight.position.set(center.x - 22, 32, center.z - 14);
    moonLight.target.position.set(center.x, 0, center.z);
  }
  const stats = mergeStatic(scene);
  return {
    stats, world, cameraBlockers, bushMeshes: [], updateLights,
    playerSpawn: new THREE.Vector3(-31, 0, 34),
    botSpawns: [[-34, 33], [-27, 36], [-31, 27], [-23, 32], [-36, 26], [-20, 27]],
    ghostSpawn: new THREE.Vector3(26, 0, -20),
    ghostSpawns: [[26, -20], [20, -26], [31, -20], [24, -33]],
  };
}
