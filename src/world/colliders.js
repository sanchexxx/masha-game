// Физика мира: препятствия — прямоугольники и круги на плоскости, у каждого есть низ и верх.
// Поэтому можно:
//  • заходить в дома (стены — отдельные коробки, над дверью — перемычка с «низом» 2.7 м);
//  • стоять на крышах (скат крыши — коробка с topAt: высота меняется от карниза к коньку);
//  • стукаться головой о потолок, подтягиваться на уступ, лезть по лестнице.
// Чтобы не перебирать все стены каждый кадр, коробки разложены по корзинам сетки 4×4 м.

const BUCKET = 4;
const EDGE = 1.5;          // запас при раскладке по корзинам (радиус самого крупного героя + чуть-чуть)

export class CollisionWorld {
  constructor(half = 32) {
    this.half = half;          // карта от -half до +half
    this.boxes = [];           // {minX,maxX,minZ,maxZ,bottom,top,topAt?,sight,nav}
    this.circles = [];         // {x,z,r,bottom,top,sight,nav}
    this.bushes = [];          // укрытия: не мешают идти, но прячут от взгляда (кусты, ширмы в домах)
    this.ladders = [];         // {x,z,nx,nz,w,top} — nx,nz смотрят ОТ стены
    this.grid = null;
  }

  addBox(cx, cz, w, d, top, opt = {}) {
    const bottom = opt.bottom ?? 0;
    const b = {
      minX: cx - w / 2, maxX: cx + w / 2, minZ: cz - d / 2, maxZ: cz + d / 2,
      bottom, top, topAt: opt.topAt || null,
      sight: opt.sight ?? top - bottom > 1.4, nav: opt.nav ?? bottom < 1.2,
    };
    this.boxes.push(b);
    this.grid = null;
    return b;
  }

  // Двускатная крыша: along — вдоль конька ('x' или 'z'), от карниза eave до конька ridge
  addRoof(cx, cz, w, d, eave, ridge, along = 'x') {
    const half = (along === 'x' ? d : w) / 2;
    const topAt = along === 'x'
      ? (x, z) => eave + (ridge - eave) * Math.max(0, 1 - Math.abs(z - cz) / half)
      : (x, z) => eave + (ridge - eave) * Math.max(0, 1 - Math.abs(x - cx) / half);
    return this.addBox(cx, cz, w, d, ridge, { bottom: eave - 0.25, topAt, sight: true, nav: false });
  }

  addCircle(x, z, r, top, opt = {}) {
    const c = { x, z, r, bottom: opt.bottom ?? 0, top, sight: opt.sight ?? top > 1.4, nav: opt.nav ?? true };
    this.circles.push(c);
    this.grid = null;
    return c;
  }

  addBush(x, z, r, kind = 'bush') { this.bushes.push({ x, z, r, kind }); }

  addLadder(x, z, nx, nz, w, top) { this.ladders.push({ x, z, nx, nz, w, top }); }

  // ---------- Корзины ----------
  #build() {
    const n = Math.ceil((this.half * 2 + 8) / BUCKET);
    const cells = Array.from({ length: n * n }, () => ({ boxes: [], circles: [] }));
    const idx = v => Math.max(0, Math.min(n - 1, Math.floor((v + this.half + 4) / BUCKET)));
    for (const b of this.boxes) {
      for (let j = idx(b.minZ - EDGE); j <= idx(b.maxZ + EDGE); j++)
        for (let i = idx(b.minX - EDGE); i <= idx(b.maxX + EDGE); i++) cells[j * n + i].boxes.push(b);
    }
    for (const c of this.circles) {
      for (let j = idx(c.z - c.r - EDGE); j <= idx(c.z + c.r + EDGE); j++)
        for (let i = idx(c.x - c.r - EDGE); i <= idx(c.x + c.r + EDGE); i++) cells[j * n + i].circles.push(c);
    }
    this.grid = { n, cells, idx };
  }
  near(x, z) {
    if (!this.grid) this.#build();
    const { n, cells, idx } = this.grid;
    return cells[idx(z) * n + idx(x)];
  }

  topOf(b, x, z) { return b.topAt ? b.topAt(x, z) : b.top; }

  inBush(x, z, y = 0) {
    if (y > 1.2) return false;
    return this.bushes.some(b => (x - b.x) ** 2 + (z - b.z) ** 2 < (b.r * 0.9) ** 2);
  }

  // Высота опоры под точкой (для приземления). maxTop — выше этого не считаем опорой.
  groundAt(x, z, r, maxTop) {
    let g = 0;
    const rr = r * 0.7;
    const cell = this.near(x, z);
    for (const b of cell.boxes) {
      if (!(x + rr > b.minX && x - rr < b.maxX && z + rr > b.minZ && z - rr < b.maxZ)) continue;
      const cx = Math.max(b.minX, Math.min(x, b.maxX)), cz = Math.max(b.minZ, Math.min(z, b.maxZ));
      const top = this.topOf(b, cx, cz);
      if (top > maxTop || top <= g) continue;
      g = top;
    }
    for (const c of cell.circles) {
      if (c.top > maxTop || c.top <= g) continue;
      if ((x - c.x) ** 2 + (z - c.z) ** 2 < (c.r + rr) ** 2) g = c.top;
    }
    return g;
  }

  // Самый низкий потолок над точкой y (или Infinity)
  ceilingAt(x, z, r, y) {
    let c = Infinity;
    const rr = r * 0.7;
    const cell = this.near(x, z);
    for (const b of cell.boxes) {
      if (b.bottom <= y + 0.05 || b.bottom >= c) continue;
      if (x + rr > b.minX && x - rr < b.maxX && z + rr > b.minZ && z - rr < b.maxZ) c = b.bottom;
    }
    for (const k of cell.circles) {
      if (k.bottom <= y + 0.05 || k.bottom >= c) continue;
      if ((x - k.x) ** 2 + (z - k.z) ** 2 < (k.r + rr) ** 2) c = k.bottom;
    }
    return c;
  }

  // Выталкиваем круг (героя) из препятствий, которые выше, чем он может перешагнуть,
  // и ниже его макушки. pos — {x,y,z}; меняется на месте. Возвращает true, если было касание стены.
  resolve(pos, r, stepTop, headY = Infinity) {
    let hit = false;
    const cell = this.near(pos.x, pos.z);
    for (let iter = 0; iter < 3; iter++) {
      let moved = false;
      for (const b of cell.boxes) {
        if (b.bottom >= headY) continue;
        const cx = Math.max(b.minX, Math.min(pos.x, b.maxX));
        const cz = Math.max(b.minZ, Math.min(pos.z, b.maxZ));
        const dx = pos.x - cx, dz = pos.z - cz;
        const d2 = dx * dx + dz * dz;
        if (d2 >= r * r) continue;
        if (this.topOf(b, cx, cz) <= stepTop) continue;
        if (d2 > 1e-8) {
          const d = Math.sqrt(d2);
          pos.x += (dx / d) * (r - d);
          pos.z += (dz / d) * (r - d);
        } else {
          // центр внутри прямоугольника — выталкиваем к ближайшей грани
          const opts = [[pos.x - b.minX, -1, 0], [b.maxX - pos.x, 1, 0], [pos.z - b.minZ, 0, -1], [b.maxZ - pos.z, 0, 1]];
          opts.sort((a, c) => a[0] - c[0]);
          const [dist, nx, nz] = opts[0];
          pos.x += nx * (dist + r);
          pos.z += nz * (dist + r);
        }
        hit = moved = true;
      }
      for (const c of cell.circles) {
        if (c.top <= stepTop || c.bottom >= headY) continue;
        const dx = pos.x - c.x, dz = pos.z - c.z;
        const min = r + c.r;
        const d2 = dx * dx + dz * dz;
        if (d2 >= min * min) continue;
        const d = Math.sqrt(d2) || 1e-4;
        pos.x = c.x + (dx / d) * min;
        pos.z = c.z + (dz / d) * min;
        hit = moved = true;
      }
      if (!moved) break;
    }
    const lim = this.half - r - 0.3;
    pos.x = Math.max(-lim, Math.min(lim, pos.x));
    pos.z = Math.max(-lim, Math.min(lim, pos.z));
    return hit;
  }

  // Уступ в точке (x,z), на который можно подтянуться: верх препятствия выше ног
  // хотя бы на 0.3 м и не выше reach, а над ним есть место для героя. Вернёт высоту или null.
  ledgeAt(x, z, y, reach, height) {
    const cell = this.near(x, z);
    let T = -Infinity;
    for (const b of cell.boxes) {
      if (x <= b.minX || x >= b.maxX || z <= b.minZ || z >= b.maxZ) continue;
      const top = this.topOf(b, x, z);
      if (top > y + 0.3 && top <= y + reach && b.bottom < y + height && top > T) T = top;
    }
    for (const c of cell.circles) {
      if ((x - c.x) ** 2 + (z - c.z) ** 2 >= c.r * c.r) continue;
      if (c.top > y + 0.3 && c.top <= y + reach && c.bottom < y + height && c.top > T) T = c.top;
    }
    if (T === -Infinity) return null;
    // место над уступом свободно?
    for (const b of cell.boxes) {
      if (x <= b.minX || x >= b.maxX || z <= b.minZ || z >= b.maxZ) continue;
      if (this.topOf(b, x, z) > T + 0.05 && b.bottom < T + height * 0.8) return null;
    }
    for (const c of cell.circles) {
      if ((x - c.x) ** 2 + (z - c.z) ** 2 >= c.r * c.r) continue;
      if (c.top > T + 0.05 && c.bottom < T + height * 0.8) return null;
    }
    return T;
  }

  // Лестница, у которой стоит герой (или null)
  ladderAt(x, z, r, y) {
    for (const l of this.ladders) {
      const dx = x - l.x, dz = z - l.z;
      const out = dx * l.nx + dz * l.nz;                   // насколько отошли от стены
      const side = Math.abs(dx * -l.nz + dz * l.nx);      // вдоль стены
      if (out > -0.2 && out < r + 0.45 && side < l.w / 2 && y < l.top - 0.1) return l;
    }
    return null;
  }

  // Прямая видимость (стены, крыши, деревья, кусты загораживают). ay/by — высота глаз.
  lineOfSight(ax, az, bx, bz, ignoreBushes = false, ay = 1.5, by = 1.5) {
    const dx = bx - ax, dz = bz - az;
    const len = Math.hypot(dx, dz);
    const steps = Math.ceil(len / 0.4);
    for (let i = 1; i < steps; i++) {
      const t = i / steps;
      const x = ax + dx * t, z = az + dz * t, y = ay + (by - ay) * t;
      const cell = this.near(x, z);
      for (const b of cell.boxes) {
        if (!b.sight || x <= b.minX || x >= b.maxX || z <= b.minZ || z >= b.maxZ) continue;
        if (y > b.bottom && y < this.topOf(b, x, z)) return false;
      }
      for (const c of cell.circles) if (c.sight && y > c.bottom && y < c.top && (x - c.x) ** 2 + (z - c.z) ** 2 < c.r * c.r) return false;
      if (!ignoreBushes && y < 1.6) for (const k of this.bushes) if ((x - k.x) ** 2 + (z - k.z) ** 2 < (k.r * 0.8) ** 2) return false;
    }
    return true;
  }
}
