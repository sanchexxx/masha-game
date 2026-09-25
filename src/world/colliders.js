// Простая физика мира: стены — прямоугольники и круги на плоскости с высотой.
// Этого хватает для Roblox-движения: упираемся в стены, запрыгиваем на ящики,
// заходим на низкие ступеньки без прыжка.

export class CollisionWorld {
  constructor(half = 32) {
    this.half = half;          // карта от -half до +half
    this.boxes = [];           // {minX,maxX,minZ,maxZ,top,sight,nav}
    this.circles = [];         // {x,z,r,top,sight,nav}
    this.bushes = [];          // укрытия: не мешают идти, но прячут от взгляда
  }

  addBox(cx, cz, w, d, top, opt = {}) {
    const b = { minX: cx - w / 2, maxX: cx + w / 2, minZ: cz - d / 2, maxZ: cz + d / 2, top, sight: opt.sight ?? top > 1.4, nav: opt.nav ?? true };
    this.boxes.push(b);
    return b;
  }

  addCircle(x, z, r, top, opt = {}) {
    const c = { x, z, r, top, sight: opt.sight ?? top > 1.4, nav: opt.nav ?? true };
    this.circles.push(c);
    return c;
  }

  addBush(x, z, r) { this.bushes.push({ x, z, r }); }

  inBush(x, z) {
    return this.bushes.some(b => (x - b.x) ** 2 + (z - b.z) ** 2 < (b.r * 0.9) ** 2);
  }

  // Высота опоры под точкой (для приземления). maxTop — выше этого не считаем опорой.
  groundAt(x, z, r, maxTop) {
    let g = 0;
    const rr = r * 0.7;
    for (const b of this.boxes) {
      if (b.top > maxTop || b.top <= g) continue;
      if (x + rr > b.minX && x - rr < b.maxX && z + rr > b.minZ && z - rr < b.maxZ) g = b.top;
    }
    for (const c of this.circles) {
      if (c.top > maxTop || c.top <= g) continue;
      if ((x - c.x) ** 2 + (z - c.z) ** 2 < (c.r + rr) ** 2) g = c.top;
    }
    return g;
  }

  // Выталкиваем круг (игрока) из препятствий, которые выше, чем он может перешагнуть.
  // pos — {x,y,z}; меняется на месте. Возвращает true, если было касание стены.
  resolve(pos, r, stepTop) {
    let hit = false;
    for (let iter = 0; iter < 3; iter++) {
      let moved = false;
      for (const b of this.boxes) {
        if (b.top <= stepTop) continue;
        const cx = Math.max(b.minX, Math.min(pos.x, b.maxX));
        const cz = Math.max(b.minZ, Math.min(pos.z, b.maxZ));
        let dx = pos.x - cx, dz = pos.z - cz;
        const d2 = dx * dx + dz * dz;
        if (d2 >= r * r) continue;
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
      for (const c of this.circles) {
        if (c.top <= stepTop) continue;
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

  // Прямая видимость на уровне глаз (стены, деревья, кусты загораживают).
  lineOfSight(ax, az, bx, bz, ignoreBushes = false) {
    const dx = bx - ax, dz = bz - az;
    const len = Math.hypot(dx, dz);
    const steps = Math.ceil(len / 0.4);
    for (let i = 1; i < steps; i++) {
      const t = i / steps;
      const x = ax + dx * t, z = az + dz * t;
      for (const b of this.boxes) if (b.sight && x > b.minX && x < b.maxX && z > b.minZ && z < b.maxZ) return false;
      for (const c of this.circles) if (c.sight && (x - c.x) ** 2 + (z - c.z) ** 2 < c.r * c.r) return false;
      if (!ignoreBushes) for (const k of this.bushes) if ((x - k.x) ** 2 + (z - k.z) ** 2 < (k.r * 0.8) ** 2) return false;
    }
    return true;
  }
}
