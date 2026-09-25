// Поиск пути по сетке 1×1 м (A*). Карта маленькая — считаем быстро и часто.

export class NavGrid {
  constructor(world, clearance = 0.55, cell = 1) {
    this.cell = cell;
    this.half = world.half;
    this.n = Math.round((world.half * 2) / cell);
    this.blocked = new Uint8Array(this.n * this.n);
    for (let j = 0; j < this.n; j++) {
      for (let i = 0; i < this.n; i++) {
        const x = -this.half + (i + 0.5) * cell, z = -this.half + (j + 0.5) * cell;
        let b = Math.abs(x) > this.half - 1.4 || Math.abs(z) > this.half - 1.4;
        if (!b) for (const r of world.boxes) {
          if (!r.nav || r.top < 0.35) continue;
          if (x > r.minX - clearance && x < r.maxX + clearance && z > r.minZ - clearance && z < r.maxZ + clearance) { b = true; break; }
        }
        if (!b) for (const c of world.circles) {
          if (!c.nav || c.top < 0.35) continue;
          if ((x - c.x) ** 2 + (z - c.z) ** 2 < (c.r + clearance) ** 2) { b = true; break; }
        }
        this.blocked[j * this.n + i] = b ? 1 : 0;
      }
    }
    this.g = new Float32Array(this.n * this.n);
    this.from = new Int32Array(this.n * this.n);
    this.closed = new Uint8Array(this.n * this.n);
  }

  toCell(x, z) {
    const i = Math.max(0, Math.min(this.n - 1, Math.floor((x + this.half) / this.cell)));
    const j = Math.max(0, Math.min(this.n - 1, Math.floor((z + this.half) / this.cell)));
    return [i, j];
  }
  center(i, j) { return [-this.half + (i + 0.5) * this.cell, -this.half + (j + 0.5) * this.cell]; }
  free(i, j) { return i >= 0 && j >= 0 && i < this.n && j < this.n && !this.blocked[j * this.n + i]; }

  nearestFree(i, j) {
    if (this.free(i, j)) return [i, j];
    for (let r = 1; r < 8; r++) {
      let best = null, bd = 1e9;
      for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) {
        if (Math.max(Math.abs(di), Math.abs(dj)) !== r || !this.free(i + di, j + dj)) continue;
        const d = di * di + dj * dj;
        if (d < bd) { bd = d; best = [i + di, j + dj]; }
      }
      if (best) return best;
    }
    return [i, j];
  }

  // Путь из (ax,az) в (bx,bz): массив точек [x,z], уже «выпрямленный»
  find(ax, az, bx, bz) {
    const n = this.n;
    const [si, sj] = this.nearestFree(...this.toCell(ax, az));
    const [ti, tj] = this.nearestFree(...this.toCell(bx, bz));
    const start = sj * n + si, goal = tj * n + ti;
    this.g.fill(Infinity);
    this.closed.fill(0);
    this.from.fill(-1);
    this.g[start] = 0;
    const open = new MinHeap();
    const h = (i, j) => { const dx = Math.abs(i - ti), dy = Math.abs(j - tj); return (dx + dy) + (Math.SQRT2 - 2) * Math.min(dx, dy); };
    open.push(start, h(si, sj));
    let found = false, iter = 0;
    while (open.size && iter++ < 5000) {
      const cur = open.pop();
      if (cur === goal) { found = true; break; }
      if (this.closed[cur]) continue;
      this.closed[cur] = 1;
      const ci = cur % n, cj = (cur / n) | 0;
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
        if (!di && !dj) continue;
        const ni = ci + di, nj = cj + dj;
        if (!this.free(ni, nj)) continue;
        if (di && dj && (!this.free(ci + di, cj) || !this.free(ci, cj + dj))) continue; // не срезаем углы
        const nid = nj * n + ni;
        const cost = this.g[cur] + (di && dj ? Math.SQRT2 : 1);
        if (cost < this.g[nid]) {
          this.g[nid] = cost;
          this.from[nid] = cur;
          open.push(nid, cost + h(ni, nj));
        }
      }
    }
    if (!found) return null;
    const cells = [];
    for (let c = goal; c !== -1; c = this.from[c]) cells.push(c);
    cells.reverse();
    // выпрямляем путь: пропускаем точки, до которых видно напрямую
    const pts = cells.map(c => this.center(c % n, (c / n) | 0));
    pts[pts.length - 1] = [bx, bz];
    const out = [];
    let a = [ax, az], k = 0;
    while (k < pts.length - 1) {
      let far = k + 1;
      for (let m = pts.length - 1; m > k + 1; m--) if (this.clear(a[0], a[1], pts[m][0], pts[m][1])) { far = m; break; }
      out.push(pts[far]);
      a = pts[far];
      k = far;
    }
    if (!out.length) out.push([bx, bz]);
    return out;
  }

  clear(ax, az, bx, bz) {
    const len = Math.hypot(bx - ax, bz - az);
    const steps = Math.ceil(len / (this.cell * 0.4));
    for (let s = 1; s < steps; s++) {
      const t = s / steps;
      const [i, j] = this.toCell(ax + (bx - ax) * t, az + (bz - az) * t);
      if (this.blocked[j * this.n + i]) return false;
    }
    return true;
  }
}

class MinHeap {
  constructor() { this.a = []; this.p = []; }
  get size() { return this.a.length; }
  push(v, pr) {
    const a = this.a, p = this.p;
    a.push(v); p.push(pr);
    let i = a.length - 1;
    while (i > 0) {
      const q = (i - 1) >> 1;
      if (p[q] <= p[i]) break;
      [a[q], a[i]] = [a[i], a[q]]; [p[q], p[i]] = [p[i], p[q]];
      i = q;
    }
  }
  pop() {
    const a = this.a, p = this.p;
    const top = a[0];
    const lv = a.pop(), lp = p.pop();
    if (a.length) {
      a[0] = lv; p[0] = lp;
      let i = 0;
      for (;;) {
        const l = i * 2 + 1, r = l + 1;
        let m = i;
        if (l < a.length && p[l] < p[m]) m = l;
        if (r < a.length && p[r] < p[m]) m = r;
        if (m === i) break;
        [a[m], a[i]] = [a[i], a[m]]; [p[m], p[i]] = [p[i], p[m]];
        i = m;
      }
    }
    return top;
  }
}
