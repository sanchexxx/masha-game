// Три Брата — один герой с тремя характерами: общий плащ, три живых лица,
// боковые фонари и холодные духи. Геометрия собирается из тех же простых форм,
// что и остальные герои, без внешней 3D-модели и тяжёлых мобильных шейдеров.
import * as THREE from 'three';
import { mat, mesh, G, joint, canvasTexture, walkCycle, swimCycle, squash } from './common.js?v=2026100901';

const orbGeo = G.sphere(1, 16, 12);
const faceGeo = G.sphere(1, 32, 24);
const detailGeo = G.sphere(1, 10, 8);
const cylinder = (a, b, h, n = 12) => G.cyl(a, b, h, n);
let cachedFabric;
let cachedCloak;
let cachedLanternMark;
let cachedLanternMaterial;
let cachedSpiral;
let cachedSpiralMaterial;
const cachedGlows = new Map();
const cachedSkin = new Map();
const cachedBatches = new Map();

// Детали одного подвижного узла рисуются одним мешем на материал.
// Геометрия переиспользуется между героями; рот и духи остаются анимируемыми.
function batchStatic(parent, name, keep = []) {
  const groups = new Map();
  for (const part of [...parent.children]) {
    if (!part.isMesh || Array.isArray(part.material) || keep.includes(part)) continue;
    const key = name + ':' + part.material.uuid + ':' + Number(part.castShadow);
    const entry = groups.get(key) || { parts: [], material: part.material, shadow: part.castShadow };
    entry.parts.push(part); groups.set(key, entry);
  }
  for (const [key, entry] of groups) {
    if (entry.parts.length < 2) continue;
    let geometry = cachedBatches.get(key);
    if (!geometry) {
      const positions = [], normals = [], uvs = [], indices = [];
      const v = new THREE.Vector3(), normalMatrix = new THREE.Matrix3();
      let offset = 0;
      for (const part of entry.parts) {
        part.updateMatrix(); normalMatrix.getNormalMatrix(part.matrix);
        const p = part.geometry.attributes.position, n = part.geometry.attributes.normal;
        const uv = part.geometry.attributes.uv, index = part.geometry.index;
        for (let i = 0; i < p.count; i++) {
          v.fromBufferAttribute(p, i).applyMatrix4(part.matrix); positions.push(v.x, v.y, v.z);
          v.fromBufferAttribute(n, i).applyMatrix3(normalMatrix).normalize(); normals.push(v.x, v.y, v.z);
          uvs.push(uv ? uv.getX(i) : 0, uv ? uv.getY(i) : 0);
        }
        const count = index ? index.count : p.count, mirrored = part.matrix.determinant() < 0;
        for (let i = 0; i < count; i += 3) {
          const a = index ? index.getX(i) : i, b = index ? index.getX(i + 1) : i + 1;
          const c = index ? index.getX(i + 2) : i + 2;
          indices.push(offset + a, offset + (mirrored ? c : b), offset + (mirrored ? b : c));
        }
        offset += p.count;
      }
      geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
      geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geometry.setIndex(indices); geometry.computeBoundingSphere(); cachedBatches.set(key, geometry);
    }
    entry.parts.forEach(part => parent.remove(part));
    parent.add(mesh(geometry, entry.material, { shadow: entry.shadow }));
  }
}

function skinTexture(color) {
  if (cachedSkin.has(color)) return cachedSkin.get(color);
  const texture = canvasTexture(512, 256, (c, w, h) => {
    c.fillStyle = '#' + color.toString(16).padStart(6, '0'); c.fillRect(0, 0, w, h);
    for (let i = 0; i < 600; i++) {
      c.fillStyle = i % 5 ? 'rgba(111,62,44,.08)' : 'rgba(255,239,207,.14)';
      c.beginPath(); c.ellipse((i * 71.79) % w, (i * 137.53) % h,
        0.4 + (i % 4) * 0.3, 0.3 + (i % 3) * 0.2, 0, 0, Math.PI * 2); c.fill();
    }
    c.strokeStyle = 'rgba(112,63,46,.21)'; c.lineWidth = 1.3; c.lineCap = 'round';
    for (const [x, y, length] of [[111,47,7], [147,66,5], [122,87,4], [365,49,5], [381,87,6]]) {
      c.beginPath(); c.moveTo(x,y); c.lineTo(x + length, y + 2); c.stroke();
    }
  });
  cachedSkin.set(color, texture);
  return texture;
}

function strand(parent, material, points, radius) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
  const part = mesh(new THREE.TubeGeometry(curve, 8, radius, 5, false), material);
  parent.add(part);
  return part;
}

function fabricTexture() {
  if (cachedFabric) return cachedFabric;
  cachedFabric = canvasTexture(256, 256, (c, w, h) => {
    c.fillStyle = '#292333'; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 2300; i++) {
      const x = (i * 137.51) % w, y = (i * 71.37) % h;
      c.fillStyle = i % 5 ? 'rgba(4,3,12,.2)' : 'rgba(166,130,160,.18)';
      c.fillRect(x, y, i % 7 ? 2 : 5, 1 + i % 3);
    }
    c.strokeStyle = 'rgba(189,143,130,.08)'; c.lineWidth = 1;
    for (let i = 0; i < 90; i++) {
      const y = (i * 51.13) % h;
      c.beginPath(); c.moveTo((i * 83.7) % w, y);
      c.lineTo(((i * 83.7) % w) + 17, y + 3); c.stroke();
    }
  });
  return cachedFabric;
}

function lanternMark() {
  if (cachedLanternMark) return cachedLanternMark;
  cachedLanternMark = canvasTexture(64, 64, (c, w, h) => {
    c.clearRect(0, 0, w, h);
    c.fillStyle = '#fff4c6';
    c.beginPath(); c.moveTo(32, 8); c.bezierCurveTo(17, 12, 14, 30, 18, 46);
    c.quadraticCurveTo(22, 53, 25, 47); c.quadraticCurveTo(32, 55, 35, 47);
    c.quadraticCurveTo(43, 53, 47, 44); c.bezierCurveTo(51, 27, 45, 12, 32, 8); c.fill();
    c.fillStyle = '#793a23';
    c.beginPath(); c.ellipse(27, 30, 2, 3, 0, 0, Math.PI * 2);
    c.ellipse(37, 30, 2, 3, 0, 0, Math.PI * 2); c.fill();
  });
  return cachedLanternMark;
}

function clothShape(points, material, options = {}) {
  const shape = new THREE.Shape();
  points.forEach(([x, y], i) => i ? shape.lineTo(x, y) : shape.moveTo(x, y));
  shape.closePath();
  return mesh(new THREE.ShapeGeometry(shape), material,
    { ...options, shadow: options.shadow ?? false });
}

function facePatch(points, material, side, offset) {
  const part = clothShape(points, material);
  const p = part.geometry.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i);
    const surface = 0.38 * Math.sqrt(Math.max(0.015,
      1 - (x / 0.49) ** 2 - (y / 0.43) ** 2));
    p.setXYZ(i, side * x, y, surface + offset);
  }
  part.geometry.computeVertexNormals();
  return part;
}

const faceSurface = (x, y, offset = 0) => 0.38 * Math.sqrt(Math.max(0.015,
  1 - (x / 0.49) ** 2 - (y / 0.43) ** 2)) + offset;

function bell(parent, metal, dark, x, y, z, size = 1) {
  const b = joint(x, y, z);
  b.add(mesh(G.cone(0.083 * size, 0.15 * size, 10), metal, { y: -0.09 * size, rz: Math.PI }));
  b.add(mesh(G.torus(0.072 * size, 0.013 * size, 5, 12), metal,
    { y: -0.15 * size, rx: Math.PI / 2 }));
  b.add(mesh(G.sphere(0.028 * size, 7, 5), dark, { y: -0.18 * size }));
  parent.add(b);
  return b;
}

function glowTexture(inner, outer) {
  const key = inner + outer;
  if (cachedGlows.has(key)) return cachedGlows.get(key);
  const texture = canvasTexture(64, 64, (c, w, h) => {
    const g = c.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2);
    g.addColorStop(0, inner); g.addColorStop(.26, outer);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  });
  cachedGlows.set(key, texture);
  return texture;
}

function cloakGeometry() {
  if (cachedCloak) return cachedCloak;
  const count = 24, positions = [], uv = [], indices = [];
  for (let i = 0; i <= count; i++) {
    const a = i / count * Math.PI * 2;
    const x = Math.sin(a), z = Math.cos(a);
    const uneven = [0.03, 0.01, 0.1, 0.06, 0, 0.12, 0.035, 0.09][i % 8];
    positions.push(x * 0.62, 1.12, z * 0.52,
      x * (0.78 + uneven * 0.2), uneven, z * (0.67 + uneven * 0.2));
    uv.push(i / count, 1, i / count, 0);
  }
  for (let i = 0; i < count; i++) {
    const n = i * 2;
    indices.push(n, n + 1, n + 2, n + 1, n + 3, n + 2);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(indices); geo.computeVertexNormals();
  cachedCloak = geo;
  return geo;
}

export function buildBrothers() {
  const root = new THREE.Group();
  const model = new THREE.Group();
  root.add(model);
  const skin = [0xf0b894, 0xe6ad88, 0xf2be9c].map(color => mat(color,
    { roughness: 0.88, emissive: 0x26100a, emissiveIntensity: 0.16 }));
  const complexion = [0xf0b894, 0xe6ad88, 0xf2be9c].map(color => mat(0xffffff,
    { map: skinTexture(color), roughness: 0.78, emissive: 0x26100a, emissiveIntensity: 0.16 }));
  const blush = mat(0xc96f67, { roughness: 1 });
  const hair = mat(0x100e14, { roughness: 0.94, side: THREE.DoubleSide });
  const hairEdge = mat(0x382923, { roughness: 1, side: THREE.DoubleSide });
  const eyes = mat(0xffeee0, { roughness: 0.45 });
  const iris = mat(0x94613e, { roughness: 0.36 });
  const pupils = mat(0x201817, { roughness: 0.35 });
  const shine = mat(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.5 });
  const coat = mat(0xffffff, { roughness: 0.98, map: fabricTexture() });
  const coatLight = mat(0x433448, { roughness: 0.96, side: THREE.DoubleSide });
  const coatEdge = mat(0x171321, { roughness: 0.95, side: THREE.DoubleSide });
  const stitch = mat(0x876e77, { roughness: 1 });
  const sash = mat(0x4f2d63, { roughness: 0.96, side: THREE.DoubleSide });
  const rope = mat(0xa87a4c, { roughness: 0.95 });
  const metal = mat(0x91683f, { roughness: 0.4, metalness: 0.55 });
  const glass = mat(0xb97535, { roughness: 0.38, emissive: 0xffa83e, emissiveIntensity: 0.8 });
  const flame = mat(0xffedac, { roughness: 0.3, emissive: 0xffa83e, emissiveIntensity: 2.7 });
  const wispMat = mat(0xd9f1ff, { emissive: 0x4f9cff, emissiveIntensity: 2.5, roughness: 0.35 });
  const wispEyes = mat(0x27436c, { roughness: 0.7 });
  const lampGlow = glowTexture('rgba(255,255,255,.95)', 'rgba(255,191,89,.48)');
  const wispGlow = glowTexture('rgba(255,255,255,.95)', 'rgba(92,167,255,.55)');
  for (const cloth of [coat, coatLight, coatEdge, sash]) {
    cloth.bumpMap = fabricTexture();
    cloth.bumpScale = 0.016;
  }
  const rig = { bodyY: 0.48 };
  const addOrb = (parent, material, x, y, z, sx, sy, sz, shadow = true) => {
    const o = mesh(shadow ? orbGeo : detailGeo, material, { x, y, z, sx, sy, sz, shadow });
    parent.add(o);
    return o;
  };

  // Широкие ботинки и короткие, тяжёлые ноги.
  for (const s of [-1, 1]) {
    const leg = joint(s * 0.34, 0.49, 0);
    leg.add(mesh(cylinder(0.19, 0.23, 0.53), coatEdge, { y: -0.22 }));
    addOrb(leg, coatEdge, 0, -0.46, 0.16, 0.31, 0.16, 0.39);
    leg.add(mesh(G.box(0.42, 0.042, 0.54), metal, { y: -0.58, z: 0.16 }));
    for (let i = 0; i < 3; i++) strand(leg, rope,
      [[-0.12, -0.43 - i * 0.045, 0.44], [0, -0.42 - i * 0.045, 0.49],
        [0.12, -0.43 - i * 0.045, 0.44]], 0.008);
    model.add(leg);
    if (s < 0) rig.legR = leg; else rig.legL = leg;
  }

  const body = joint(0, rig.bodyY, 0);
  rig.body = body;
  model.add(body);
  body.add(mesh(cloakGeometry(), coat));
  addOrb(body, coatLight, 0, 1.02, -0.04, 0.7, 0.39, 0.49);
  // Внешние лоскуты дают плащу объём и неровный рваный край со всех сторон.
  for (const s of [-1, 1]) {
    body.add(clothShape([[0, 0], [0.3, 0.08], [0.38, -0.42], [0.24, -0.79],
      [0.18, -0.7], [0.08, -0.87], [-0.05, -0.72]], s < 0 ? coatEdge : coatLight,
    { x: s * 0.41, y: 1.06, z: 0.47, ry: s * 0.19, sx: s }));
    body.add(clothShape([[0, 0], [0.27, 0.03], [0.34, -0.52], [0.2, -0.86],
      [0.1, -0.78], [-0.02, -0.9]], coatEdge,
    { x: s * 0.43, y: 1.05, z: -0.43, ry: Math.PI - s * 0.17, sx: s }));
  }
  // Тёмные наружные полы и высокий воротник меняют силуэт в профиль.
  for (const s of [-1, 1]) {
    body.add(mesh(G.cone(0.19, 0.85, 5), coatEdge,
      { x: s * 0.66, y: 0.4, z: -0.05, rz: s * 0.08 }));
    body.add(mesh(G.cone(0.18, 0.46, 5), coatLight,
      { x: s * 0.48, y: 1.13, z: -0.28, rz: -s * 0.22 }));
  }
  // Неровные подолы, швы и кожаный пояс делают силуэт читаемым сзади.
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * Math.PI * 2;
    body.add(mesh(G.cone(0.14 + (i % 3) * 0.02, 0.32 + (i % 4) * 0.045, 5), i % 3 ? coatEdge : coatLight,
      { x: Math.sin(a) * 0.66, y: 0.04, z: Math.cos(a) * 0.55, ry: a, rz: Math.sin(a) * 0.13 }));
  }
  body.add(mesh(G.torus(0.62, 0.065, 8, 28), rope, { y: 0.57, rx: Math.PI / 2, sy: 0.85 }));
  body.add(mesh(G.torus(0.66, 0.035, 7, 28), rope, { y: 1.1, rx: Math.PI / 2, sy: 0.82 }));
  body.add(mesh(G.torus(0.61, 0.03, 7, 28), rope, { y: 1.24, rx: Math.PI / 2, sy: 0.86 }));
  for (const z of [-0.65, 0.7]) for (const x of [-0.07, 0.07])
    body.add(mesh(G.torus(0.05, 0.024, 6, 12), rope, { x, y: 0.6, z, rz: x < 0 ? -0.6 : 0.6 }));
  bell(body, metal, coatEdge, 0, 1.16, -0.59, 0.95);
  for (const s of [-1, 1]) bell(body, metal, coatEdge, s * 0.5, 0.54, -0.41, 0.62);
  for (const s of [-1, 1]) {
    strand(body, rope, [[s * 0.55, 1.36, 0.15], [s * 0.4, 1.11, 0.47],
      [s * 0.26, 0.85, 0.6], [s * 0.32, 0.56, 0.6]], 0.035);
    addOrb(body, metal, s * 0.36, 0.3, 0.57, 0.07, 0.085, 0.06);
    body.add(mesh(G.box(0.17, 0.3, 0.012), coatLight,
      { x: s * 0.48, y: 0.38, z: 0.53, rz: s * 0.2 }));
    for (let j = 0; j < 3; j++) body.add(mesh(G.box(0.1, 0.012, 0.013), stitch,
      { x: s * 0.48, y: 0.28 + j * 0.08, z: 0.541, rz: s * 0.2 }));
  }
  strand(body, rope, [[-0.37, 1.12, 0.51], [-0.1, 0.95, 0.64],
    [0.19, 0.78, 0.64], [0.45, 0.57, 0.5]], 0.027);
  strand(body, rope, [[-0.52, 1.08, -0.31], [-0.22, 0.87, -0.56],
    [0.17, 0.66, -0.65], [0.5, 0.44, -0.46]], 0.03);
  strand(body, rope, [[0.51, 1.07, -0.32], [0.23, 0.86, -0.56],
    [-0.15, 0.63, -0.67], [-0.46, 0.43, -0.48]], 0.03);
  const tabard = new THREE.Shape();
  tabard.moveTo(-0.29, 0.87); tabard.lineTo(0.29, 0.87);
  tabard.lineTo(0.33, 0.06); tabard.lineTo(0.19, 0.12);
  tabard.lineTo(0.08, -0.02); tabard.lineTo(-0.09, 0.08);
  tabard.lineTo(-0.22, -0.03); tabard.lineTo(-0.32, 0.12);
  tabard.closePath();
  body.add(mesh(new THREE.ShapeGeometry(tabard), sash, { z: 0.69, shadow: false }));
  body.add(mesh(new THREE.ShapeGeometry(tabard), sash, { z: -0.68, ry: Math.PI, shadow: false }));
  for (const s of [-1, 1]) {
    strand(body, rope, [[s * 0.51, 0.66, 0.45], [s * 0.33, 0.61, 0.67],
      [s * 0.07, 0.57, 0.73]], 0.023);
    addOrb(body, metal, s * 0.37, 0.43, 0.67, 0.055, 0.07, 0.045);
  }
  const spiral = cachedSpiral || (cachedSpiral = canvasTexture(128, 128, (c, w, h) => {
    c.clearRect(0, 0, w, h);
    c.strokeStyle = '#ab74d2'; c.lineWidth = 13; c.lineCap = 'round';
    c.beginPath();
    for (let i = 0; i <= 80; i++) {
      const t = i / 80, a = t * Math.PI * 5.2, r = 4 + t * 47;
      const x = w / 2 + Math.cos(a) * r, y = h / 2 + Math.sin(a) * r;
      if (!i) c.moveTo(x, y); else c.lineTo(x, y);
    }
    c.stroke();
  }));
  const spiralMaterial = cachedSpiralMaterial || (cachedSpiralMaterial = new THREE.MeshBasicMaterial(
    { map: spiral, transparent: true, side: THREE.DoubleSide }));
  body.add(mesh(new THREE.PlaneGeometry(0.56, 0.56), spiralMaterial,
    { y: 0.54, z: 0.78, shadow: false }));
  body.add(mesh(new THREE.PlaneGeometry(0.56, 0.56), spiralMaterial,
    { y: 0.54, z: -0.77, ry: Math.PI, shadow: false }));
  for (const s of [-1, 1]) {
    // Контрастная строчка и потёртые края переднего и заднего полотнища.
    for (let j = 0; j < 6; j++) {
      body.add(mesh(G.box(0.045, 0.008, 0.01), stitch,
        { x: s * (0.275 + (j % 2) * 0.015), y: 0.78 - j * 0.115,
          z: 0.704, rz: s * 0.18, shadow: false }));
      body.add(mesh(G.box(0.045, 0.008, 0.01), stitch,
        { x: s * (0.275 + (j % 2) * 0.015), y: 0.78 - j * 0.115,
          z: -0.694, rz: s * 0.18, shadow: false }));
    }
  }

  // Три крупных выразительных лица: лысые макушки, густые волосы сзади,
  // сердитые брови, завитые усы и зубчатые бороды видны с любого ракурса.
  const heads = [], mouths = [];
  for (let i = 0; i < 3; i++) {
    const h = joint([0, 0.05, -0.04][i], [1.4, 1.94, 2.43][i], [0.13, -0.035, -0.16][i]);
    h.scale.setScalar([1, 0.87, 0.78][i]);
    body.add(h); heads.push(h);
    addOrb(h, complexion[i], 0, 0, 0, 0.49, 0.43, 0.38).geometry = faceGeo;
    // Макушка остаётся лысой, а тяжёлый чёрный обод волос читается в профиль и сзади.
    addOrb(h, hair, 0, -0.12, -0.32, 0.48, 0.21, 0.23);
    addOrb(h, skin[i], 0, 0.25, -0.01, 0.38, 0.21, 0.36);
    for (let j = -3; j <= 3; j++) {
      strand(h, j % 2 ? hairEdge : hair,
        [[j * 0.115, 0.17, -0.425], [j * 0.117, -0.08, -0.5],
          [j * 0.112, -0.25, -0.39]], 0.027);
    }
    for (const s of [-1, 1]) {
      addOrb(h, hair, s * 0.43, -0.05, -0.18, 0.105, 0.18, 0.2);
      addOrb(h, hairEdge, s * 0.42, -0.1, -0.24, 0.105, 0.15, 0.17);
      addOrb(h, skin[i], s * 0.50, -0.07, 0.025, 0.09, 0.12, 0.075);
      addOrb(h, blush, s * 0.545, -0.065, 0.068, 0.026, 0.038, 0.011, false);
      addOrb(h, skin[i], s * 0.27, -0.14, 0.28, 0.17, 0.105, 0.095);
      addOrb(h, blush, s * 0.29, -0.12, 0.37, 0.10, 0.055, 0.012, false);

      const eye = addOrb(h, eyes, s * 0.20, 0.08, 0.35, 0.12, 0.085, 0.029, false);
      eye.rotation.z = -s * 0.08;
      const look = i === 1 ? 0.02 : 0;
      addOrb(h, iris, s * 0.20 + look, 0.077, 0.38, 0.06, 0.061, 0.02, false);
      addOrb(h, pupils, s * 0.20 + look, 0.08, 0.397, 0.039, 0.052, 0.014, false);
      addOrb(h, shine, s * 0.20 + look - 0.018, 0.105, 0.413, 0.014, 0.017, 0.007, false);
      h.add(facePatch([[0.035, 0.13], [0.15, 0.19], [0.26, 0.29],
        [0.38, 0.32], [0.43, 0.25], [0.31, 0.17], [0.17, 0.10],
        [0.07, 0.10]], hair, s, 0.085));
      strand(h, hair, [[0.05, 0.13], [0.18, 0.20], [0.32, 0.28], [0.4, 0.27]]
        .map(([x, y]) => [s * x, y, faceSurface(x, y, 0.07)]), 0.035);
      strand(h, blush, [[0.03, 0.33], [0.11, 0.35], [0.2, 0.34]]
        .map(([x, y]) => [s * x, y, faceSurface(x, y, 0.012)]), 0.008);
      strand(h, hair, [[s * 0.085, 0.175, 0.421], [s * 0.19, 0.165, 0.425],
        [s * 0.31, 0.19, 0.37]], 0.019);
      strand(h, blush, [[s * 0.28, -0.06, 0.45], [s * 0.39, -0.1, 0.39],
        [s * 0.45, -0.07, 0.32]], 0.012);

      addOrb(h, hair, s * 0.13, -0.205, 0.43, 0.14, 0.052, 0.065);
      strand(h, hair, [[s * 0.07, -0.2, 0.47], [s * 0.19, -0.21, 0.47],
        [s * 0.3, -0.19, 0.4], [s * 0.4, -0.13, 0.30]], 0.035);
      h.add(facePatch([[0.02, -0.18], [0.15, -0.16], [0.26, -0.18],
        [0.36, -0.13], [0.4, -0.09], [0.43, -0.14], [0.34, -0.235],
        [0.23, -0.25], [0.09, -0.24]], hair, s, 0.10));
      h.add(mesh(G.cone(0.045, 0.14, 8), hair,
        { x: s * 0.42, y: -0.105, z: 0.29, rz: -s * 0.48 }));
      for (let j = 0; j < 3; j++) h.add(mesh(G.cone(0.08, 0.24 - j * 0.025, 7),
        j === 1 ? hairEdge : hair,
        { x: s * (0.15 + j * 0.105), y: -0.36 - j * 0.02,
          z: 0.3 - j * 0.045, rz: Math.PI + s * 0.13 }));
      for (let j = 0; j < 4; j++) addOrb(h, j % 2 ? blush : hairEdge,
        s * (0.28 + j * 0.044), -0.29 - (j % 2) * 0.045,
        0.353 - j * 0.025, 0.012, 0.018, 0.009, false);
    }
    addOrb(h, skin[i], 0, -0.07, 0.41, 0.115, 0.14, 0.135).geometry = faceGeo;
    addOrb(h, blush, 0, -0.13, 0.55, 0.075, 0.03, 0.018, false);
    strand(h, blush, [[-0.12, 0.36, 0.28], [-0.07, 0.39, 0.31],
      [0.01, 0.4, 0.32]], 0.011);
    const mouth = addOrb(h, mat(0x522f30), 0, -0.275, 0.42,
      0.105, 0.024, 0.02, false);
    mouths.push(mouth);
    strand(h, skin[i], [[-0.22, -0.285, 0.415], [-0.09, -0.26, 0.45],
      [0.09, -0.26, 0.45], [0.22, -0.285, 0.415]], 0.024);
    strand(h, hairEdge, [[-0.21, -0.295, 0.435], [-0.09, -0.278, 0.47],
      [0.09, -0.278, 0.47], [0.21, -0.295, 0.435]], 0.008);
    addOrb(h, hair, 0, -0.33, 0.27, 0.37, 0.17, 0.18);
    h.add(mesh(G.cone(0.22, 0.32, 9), hair,
      { y: -0.52, z: 0.32, rz: Math.PI }));
    addOrb(h, hairEdge, 0, -0.38, 0.44, 0.10, 0.15, 0.055);
    for (let j = -2; j <= 2; j++) h.add(mesh(G.cone(0.078, 0.24 + (2 - Math.abs(j)) * 0.06, 7), hair,
      { x: j * 0.13, y: -0.45, z: 0.32 - Math.abs(j) * 0.045, rz: Math.PI + j * 0.1 }));
    if (i === 2) for (const [x, z, r] of [[-0.09, 0.08, 0.05], [0.16, -0.04, 0.04], [0.02, -0.2, 0.03]])
      addOrb(h, hairEdge, x, 0.4, z, r, r * 0.4, r, false);
    for (const [x, y, r] of [[-0.18, 0.38, 0.013], [-0.14, 0.37, 0.009],
      [0.14, 0.35, 0.012], [0.2, 0.39, 0.008]])
      addOrb(h, hairEdge, x, y, 0.23, r, r * 0.5, 0.007, false);
  }
  const wholeHeadPose = heads.map(h => ({ position: h.position.clone(), scale: h.scale.clone() }));
  const splitAuras = heads.map(h => {
    const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: wispGlow,
      transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending,
      depthWrite: false }));
    aura.position.set(0, -0.22, -0.08);
    aura.scale.set(0.95, 0.85, 1);
    aura.visible = false;
    h.add(aura);
    return aura;
  });
  let splitShown = false;
  const fists = [], openHands = [];

  for (const s of [-1, 1]) {
    const arm = joint(s * 0.69, 1.11, 0.02);
    body.add(arm);
    arm.add(mesh(G.capsule(0.22, 0.46, 6, 10), coatLight, { y: -0.28, rz: s * 0.24 }));
    arm.add(clothShape([[-0.2, -0.13], [0.17, -0.11], [0.23, -0.56],
      [0.16, -0.62], [0.09, -0.55], [0.01, -0.65], [-0.08, -0.58],
      [-0.19, -0.6]], coatEdge, { y: 0, z: 0.16, rz: s * 0.16 }));
    addOrb(arm, coatEdge, s * 0.1, -0.55, 0.08, 0.23, 0.12, 0.22);
    const fist = new THREE.Group(); arm.add(fist); fists.push(fist);
    addOrb(fist, skin[0], s * 0.09, -0.66, 0.21, 0.24, 0.2, 0.24);
    for (let j = 0; j < 3; j++) addOrb(fist, skin[0], s * 0.09 + (j - 1) * 0.11, -0.68, 0.43, 0.07, 0.095, 0.07);
    addOrb(fist, skin[0], -s * 0.09, -0.61, 0.36, 0.1, 0.075, 0.09);
    const hand = joint(s * 0.09, -0.66, 0.21); hand.visible = false;
    arm.add(hand); openHands.push(hand);
    addOrb(hand, skin[0], 0, 0, 0, 0.22, 0.17, 0.13);
    for (let j = 0; j < 4; j++) hand.add(mesh(G.capsule(0.035, 0.15 + (j % 3) * 0.035, 5, 8), skin[0],
      { x: (j - 1.5) * 0.092, y: -0.22 - (j % 3) * 0.01, z: 0.01, rz: (j - 1.5) * 0.16 }));
    hand.add(mesh(G.capsule(0.052, 0.15, 5, 8), skin[0],
      { x: -s * 0.22, y: -0.02, z: 0.035, rz: -s * 0.95 }));
    if (s < 0) rig.armR = arm; else rig.armL = arm;
    // Два четырёхгранных фонаря: стекло, металлическая рамка и мягкое сияние.
    const lamp = joint(s * 0.91, 0.58, 0.08);
    body.add(lamp);
    if (s < 0) rig.lampR = lamp; else rig.lampL = lamp;
    lamp.add(mesh(cylinder(0.025, 0.025, 0.2, 6), rope, { y: -0.1 }));
    lamp.add(mesh(G.torus(0.13, 0.018, 5, 12, Math.PI), metal,
      { y: -0.2, rz: Math.PI }));
    lamp.add(mesh(G.box(0.31, 0.36, 0.3), glass, { y: -0.43, shadow: false }));
    for (const yy of [-0.64, -0.22]) lamp.add(mesh(G.box(0.38, 0.055, 0.36), metal, { y: yy }));
    lamp.add(mesh(G.cone(0.29, 0.13, 4), metal, { y: -0.16, ry: Math.PI / 4 }));
    for (const xx of [-0.175, 0.175]) for (const zz of [-0.165, 0.165])
      lamp.add(mesh(G.box(0.03, 0.43, 0.03), metal, { x: xx, y: -0.43, z: zz }));
    for (const zz of [-0.185, 0.185])
      lamp.add(mesh(G.box(0.35, 0.025, 0.025), metal, { y: -0.43, z: zz }));
    const markMat = cachedLanternMaterial || (cachedLanternMaterial = new THREE.MeshBasicMaterial(
      { map: lanternMark(), transparent: true, depthWrite: false, side: THREE.DoubleSide, color: 0xfff0c2 }));
    for (const side of [-1, 1]) lamp.add(mesh(new THREE.PlaneGeometry(0.2, 0.22), markMat,
      { y: -0.43, z: side * 0.188, ry: side < 0 ? Math.PI : 0, shadow: false }));
    addOrb(lamp, flame, 0, -0.43, 0, 0.063, 0.11, 0.063, false);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: lampGlow,
      color: 0xffc46b, transparent: true, opacity: 0.65,
      blending: THREE.AdditiveBlending, depthWrite: false }));
    halo.position.set(0, -0.43, 0.04); halo.scale.set(0.85, 0.85, 1);
    lamp.add(halo);
  }

  const wisps = [];
  for (let i = 0; i < 3; i++) {
    const spirit = new THREE.Group();
    const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: wispGlow,
      transparent: true, opacity: 0.76, blending: THREE.AdditiveBlending,
      depthWrite: false }));
    aura.scale.set(0.72, 0.8, 1); spirit.add(aura);
    addOrb(spirit, wispMat, 0, 0, 0.02, 0.16, 0.2, 0.11, false);
    spirit.add(mesh(G.cone(0.1, 0.26, 8), wispMat,
      { y: 0.24, z: 0.02, rz: -0.16, shadow: false }));
    for (const s of [-1, 1]) addOrb(spirit, wispEyes, s * 0.045, 0.01, 0.13, 0.014, 0.02, 0.01, false);
    model.add(spirit); wisps.push(spirit);
  }
  const wispAnchors = [[-1.2, 2.49, 0.02], [1.2, 2.2, 0.02], [-1.22, 1.72, 0.02]];

  heads.forEach((h, i) => batchStatic(h, 'head' + i, [mouths[i]]));
  for (const name of ['armL', 'armR', 'legL', 'legR', 'lampL', 'lampR']) batchStatic(rig[name], name);
  fists.forEach((f, i) => batchStatic(f, 'fist' + i));
  openHands.forEach((h, i) => batchStatic(h, 'openHand' + i));
  wisps.forEach(w => batchStatic(w, 'wisp'));
  batchStatic(body, 'body');

  function update(dt, st) {
    if (!!st.split !== splitShown) {
      splitShown = !!st.split;
      model.visible = !splitShown;
      heads.forEach((h, i) => {
        if (splitShown) { body.remove(h); root.add(h); }
        else {
          root.remove(h); body.add(h);
          h.position.copy(wholeHeadPose[i].position);
          h.scale.copy(wholeHeadPose[i].scale);
          h.visible = true;
        }
        splitAuras[i].visible = splitShown;
      });
    }
    if (st.swimming) swimCycle(rig, st, dt);
    else walkCycle(rig, { ...st, speed: st.speed * 0.8 }, dt, { stride: 0.48, armSwing: 0.5, bob: 0.032, freq: 0.82 });
    if (!st.swimming) {
      rig.armL.rotation.x -= 0.28;
      rig.armR.rotation.x -= 0.28;
      rig.armL.rotation.z += 0.15;
      rig.armR.rotation.z -= 0.15;
    }
    const step = Math.min(1, st.speed / 5);
    rig.lampL.rotation.z = Math.sin(st.t * 8) * 0.14 * step + Math.sin(st.t * 1.6) * 0.035;
    rig.lampR.rotation.z = -Math.sin(st.t * 8) * 0.14 * step - Math.sin(st.t * 1.4) * 0.035;
    const action = st.action;
    const force = action && ['fear', 'hypnosis', 'glare'].includes(action.name)
      ? Math.sin(Math.min(1, action.k) * Math.PI) : 0;
    fists.forEach(f => { f.visible = force < 0.15; });
    openHands.forEach(h => { h.visible = force >= 0.15; });
    if (force) {
      rig.armL.rotation.x = -0.85 * force;
      rig.armR.rotation.x = -0.85 * force;
      rig.armL.rotation.z = 1.05 * force;
      rig.armR.rotation.z = -1.05 * force;
    }
    heads.forEach((h, i) => {
      const part = st.split?.heads?.[i];
      if (splitShown && part) {
        const dx = part.x - root.position.x, dz = part.z - root.position.z;
        const yaw = root.rotation.y, co = Math.cos(yaw), si = Math.sin(yaw);
        h.position.set(co * dx - si * dz,
          part.y - root.position.y + 0.58 + Math.abs(Math.sin(st.t * 7 + i)) * (part.speed > 0.5 ? 0.075 : 0.025),
          si * dx + co * dz);
        h.scale.setScalar(0.84);
        h.visible = !!part.alive;
        h.rotation.y = part.yaw - yaw;
        h.rotation.z = Math.sin(st.t * 6.8 + i) * 0.09;
      } else {
        h.rotation.y = Math.sin(st.t * (1.1 + i * 0.18) + i * 1.6) * 0.06 + (i - 1) * 0.07;
        h.rotation.z = Math.sin(st.t * 1.7 + i * 2) * 0.028 + force * (i - 1) * 0.09;
      }
      mouths[i].scale.y = 0.024 + force * 0.045;
    });
    wisps.forEach((w, i) => {
      const a = st.t * (0.85 + i * 0.08) + i * Math.PI * 2 / 3;
      const anchor = wispAnchors[i];
      w.position.set(anchor[0] + Math.sin(a) * (0.09 + force * 0.14),
        anchor[1] + Math.sin(st.t * 2 + i) * 0.12, anchor[2] + Math.cos(a) * 0.06);
      w.rotation.z = Math.sin(st.t * 2.5 + i) * 0.15;
    });
    squash(root, st, dt);
  }

  return { root, update, height: 3.25 };
}
