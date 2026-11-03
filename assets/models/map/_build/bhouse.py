"""House construction kit: walls with doors/windows, floors with stairs, balconies, roofs,
furniture. Every piece also writes its colliders / hiding places into the model's .json.
Local coords: metres, Y up, the main door looks to +Z, origin = centre of the footprint."""
import math

import numpy as np

from mlib import Mesh, nrm

STORY = 4.9          # floor-to-floor; clear height inside 4.65 (>= 4.2 for raging No-Face)
LINTEL = 4.1         # door height above the floor
WIN = (1.3, 3.4)     # window band
T = 0.24             # wall thickness


class House:
    def __init__(self, W, D, floors=1, base=0.3):
        self.W, self.D, self.floors, self.base = W, D, floors, base
        self.m = Mesh()
        self.col, self.hides, self.lights, self.ladders, self.doors, self.nodes = [], [], [], [], [], {}
        self.extra = {}

    def y(self, level):
        return self.base + level * STORY

    # ------------------------------------------------------------------ colliders
    def box_col(self, x, z, w, d, top, bottom=0.0, note=None, **kw):
        c = {"type": "box", "x": round(x, 3), "z": round(z, 3), "w": round(w, 3), "d": round(d, 3),
             "h": round(top, 3)}
        if bottom:
            c["bottom"] = round(bottom, 3)
        if note:
            c["note"] = note
        c.update(kw)
        self.col.append(c)

    def hide(self, x, z, r, kind, y=0.0, note=None):
        h = {"x": round(x, 2), "z": round(z, 2), "r": r, "kind": kind}
        if y:
            h["y"] = round(y, 2)
        if note:
            h["note"] = note
        self.hides.append(h)

    def light(self, x, y, z, color="#ffb060"):
        self.lights.append({"x": round(x, 2), "y": round(y, 2), "z": round(z, 2), "color": color})

    # ------------------------------------------------------------------ base
    def foundation(self, mat="Stone", pad=0.25):
        m = self.m
        m.box((0, self.base / 2, 0), (self.W + 2 * pad, self.base, self.D + 2 * pad), mat)
        self.box_col(0, 0, self.W + 2 * pad, self.D + 2 * pad, self.base, note="пол — ступенька")

    def floor_surface(self, level, mat="Tatami"):
        y = self.y(level)
        W, D = self.W - 2 * T, self.D - 2 * T
        if mat == "Tatami":
            nx, nz = max(1, round(W / 1.9)), max(1, round(D / 3.6))
            for i in range(nx):
                for j in range(nz):
                    self.m.box((-W / 2 + (i + 0.5) * W / nx, y + 0.02, -D / 2 + (j + 0.5) * D / nz),
                               (W / nx - 0.06, 0.05, D / nz - 0.06), "Tatami")
        else:
            self.m.box((0, y + 0.02, 0), (W, 0.05, D), mat)

    # ------------------------------------------------------------------ walls
    def wall(self, a, b, level, openings=(), mat="Plaster", lower="Wood", posts=True, shoji="Shoji"):
        """straight wall from a=(x,z) to b=(x,z) on a storey. openings: (t0, t1, kind) with t in metres
        from a; kind 'door' | 'window' | 'open' (no wall at all, e.g. shop counter gap)."""
        a, b = np.array(a, float), np.array(b, float)
        L = float(np.linalg.norm(b - a))
        u = (b - a) / L
        u3 = np.array([u[0], 0, u[1]])
        n3 = np.array([-u[1], 0, u[0]])
        R = np.stack([u3, [0, 1, 0], n3], 1)
        y0 = self.y(level)
        top = y0 + STORY
        m = self.m

        def P(t, yy):
            q = a + u * t
            return np.array([q[0], yy, q[1]])

        def piece(t0, t1, ya, yb, mt, th=T):
            if t1 - t0 < 1e-3 or yb - ya < 1e-3:
                return
            m.box(P((t0 + t1) / 2, (ya + yb) / 2), (t1 - t0, yb - ya, th), mt, R)

        cuts = sorted(openings)
        segs, t = [], 0.0
        for t0, t1, kind in cuts:
            segs.append((t, t0, "solid"))
            segs.append((t0, t1, kind))
            t = t1
        segs.append((t, L, "solid"))
        for t0, t1, kind in segs:
            if t1 - t0 < 1e-3:
                continue
            if kind == "open":
                continue
            piece(t0, t1, y0 + LINTEL, top, "Wood", T + 0.04)
            if kind == "door":
                pass
            else:
                piece(t0, t1, y0, y0 + 0.9, lower)
                if kind == "window":
                    piece(t0, t1, y0 + 0.9, y0 + WIN[0], mat)
                    piece(t0, t1, y0 + WIN[1], y0 + LINTEL, mat)
                    piece(t0 + 0.05, t1 - 0.05, y0 + WIN[0], y0 + WIN[1], shoji, 0.06)
                    piece(t0, t0 + 0.1, y0 + WIN[0], y0 + WIN[1], "Wood", T + 0.06)
                    piece(t1 - 0.1, t1, y0 + WIN[0], y0 + WIN[1], "Wood", T + 0.06)
                    piece(t0, t1, y0 + WIN[0] - 0.08, y0 + WIN[0], "Wood", T + 0.1)
                else:
                    piece(t0, t1, y0 + 0.9, y0 + LINTEL, mat)
            # collider (walls here are axis-aligned)
            pa, pb = a + u * t0, a + u * t1
            cx, cz = (pa + pb) / 2
            w = abs(pb[0] - pa[0]) + (T if abs(u[1]) > 0.5 else 0)
            d = abs(pb[1] - pa[1]) + (T if abs(u[0]) > 0.5 else 0)
            if kind == "door":
                self.box_col(cx, cz, w, d, top, y0 + LINTEL, "над дверью")
                self.doors.append({"x": round(cx, 2), "z": round(cz, 2), "w": round(t1 - t0, 2),
                                   "h": LINTEL, "level": level})
            else:
                self.box_col(cx, cz, w, d, top, y0)
        if posts:
            for t in [0.0, L] + [c for o in cuts for c in o[:2]]:
                m.box(P(min(max(t, 0.13), L - 0.13), (y0 + top) / 2), (0.28, STORY, 0.3), "Wood", R)

    def outer_walls(self, level, front=(), back=(), left=(), right=(), **kw):
        X, Z = self.W / 2, self.D / 2
        self.wall((-X, Z), (X, Z), level, front, **kw)       # front (+Z), t from west
        self.wall((X, -Z), (-X, -Z), level, back, **kw)      # back, t from east
        self.wall((-X, -Z), (-X, Z), level, left, **kw)      # west, t from north
        self.wall((X, Z), (X, -Z), level, right, **kw)       # east, t from south

    # ------------------------------------------------------------------ floors + stairs
    def slab(self, level, hole=None, mat="WoodLight"):
        """floor of storey `level` (>=1). hole = (x0, z0, x1, z1) left open for stairs."""
        y = self.y(level)
        X, Z = self.W / 2 - T / 2, self.D / 2 - T / 2
        rects = [(-X, -Z, X, Z)]
        if hole:
            hx0, hz0, hx1, hz1 = hole
            rects = [(-X, -Z, X, hz0), (-X, hz1, X, Z), (-X, hz0, hx0, hz1), (hx1, hz0, X, hz1)]
        for x0, z0, x1, z1 in rects:
            if x1 - x0 < 0.05 or z1 - z0 < 0.05:
                continue
            self.m.box(((x0 + x1) / 2, y - 0.14, (z0 + z1) / 2), (x1 - x0, 0.28, z1 - z0), "Wood", top_mat=mat)
            self.box_col((x0 + x1) / 2, (z0 + z1) / 2, x1 - x0, z1 - z0, y, y - 0.28, "пол этажа")

    def stairs(self, level, x0, z, direction, width=2.3, mat="WoodLight"):
        """straight stairs from storey `level` up to level+1, starting at x0, running along x
        (direction +1/-1), centred on z. 12 steps of 0.41 m (stepHeight 0.45)."""
        n = 12
        rise = STORY / n
        run = 0.62
        y0 = self.y(level)
        for k in range(n):
            xa = x0 + direction * k * run
            xb = xa + direction * run
            cx = (xa + xb) / 2
            ty = y0 + (k + 1) * rise
            self.m.box((cx, (y0 + ty) / 2, z), (run, ty - y0, width), "Wood", top_mat=mat)
            self.box_col(cx, z, run, width, round(ty, 3), y0 if k else 0.0, None)
        # rails on the open side
        x_end = x0 + direction * n * run
        for side in (-1, 1):
            zz = z + side * (width / 2 + 0.05)
            pts = [(x0, y0 + 1.0, zz), (x_end, y0 + STORY + 1.0, zz)]
            self.m.cyl(pts[0], pts[1], 0.05, 0.05, "Wood", n=6)
            for t in (0.0, 0.5, 1.0):
                px = x0 + (x_end - x0) * t
                py = y0 + STORY * t
                self.m.box((px, py + 0.5, zz), (0.1, 1.0, 0.1), "Wood")
        lo, hi = sorted((x0, x_end))
        return (lo - 0.2, z - width / 2 - 0.2, hi + 0.2, z + width / 2 + 0.2)

    # ------------------------------------------------------------------ balcony
    def balcony(self, level, x0, x1, depth=1.8, side="front", door_gap=None):
        y = self.y(level)
        Z = self.D / 2
        zc = Z + depth / 2
        m = self.m
        m.box(((x0 + x1) / 2, y - 0.1, zc), (x1 - x0, 0.2, depth), "Wood", top_mat="WoodLight")
        self.box_col((x0 + x1) / 2, zc, x1 - x0, depth, y, y - 0.2, "балкон")
        zr = Z + depth - 0.06
        gap = door_gap or (None, None)
        xs = np.linspace(x0 + 0.08, x1 - 0.08, max(2, int((x1 - x0) / 1.2) + 1))
        for x in xs:
            m.box((x, y + 0.55, zr), (0.12, 1.1, 0.12), "Wood")
        m.box(((x0 + x1) / 2, y + 1.1, zr), (x1 - x0, 0.1, 0.12), "Red" if level > 1 else "Wood")
        m.box(((x0 + x1) / 2, y + 0.55, zr), (x1 - x0, 0.06, 0.06), "Wood")
        self.box_col((x0 + x1) / 2, zr, x1 - x0, 0.2, y + 1.15, y, "перила", sight=False)
        for x in (x0 + 0.1, x1 - 0.1):
            m.box((x, y - 0.1 - (y - self.base) / 2 + 0.05, zr), (0.18, y - self.base, 0.18), "Wood")
            m.box((x, (y - 0.2) / 2, zr), (0.2, y - 0.2, 0.2), "Wood")
            self.box_col(x, zr, 0.25, 0.25, y - 0.2)

    def outer_stairs(self, x, z0, direction, top_y, width=2.0):
        """outdoor stairs along z from ground at z0 up to top_y (direction +1/-1)."""
        n = max(1, int(math.ceil(top_y / 0.42)))
        rise = top_y / n
        run = 0.6
        for k in range(n):
            za = z0 + direction * k * run
            zb = za + direction * run
            ty = (k + 1) * rise
            self.m.box((x, ty - 0.1, (za + zb) / 2), (width, 0.2, run), "WoodLight")
            self.box_col(x, (za + zb) / 2, width, run, round(ty, 3), max(0.0, ty - 0.3) if k > 1 else 0.0)
        z_end = z0 + direction * n * run
        for side in (-1, 1):
            xx = x + side * (width / 2 + 0.06)
            self.m.cyl((xx, 1.0, z0), (xx, top_y + 1.0, z_end), 0.05, 0.05, "Wood", n=6)
            for t in (0.0, 0.5, 1.0):
                self.m.box((xx, top_y * t / 2 + 0.5, z0 + (z_end - z0) * t), (0.12, top_y * t + 1.0, 0.12), "Wood")
        return z_end

    # ------------------------------------------------------------------ roofs
    def hip(self, cx, cz, W, D, y_eave, rise, over=1.2, inner=None, y_inner=None, thick=0.22, curve=0.35,
            ridge_mat="Roof", along=None, note="крыша", collide=True):
        """hip roof (inner=None -> ridge) or a skirt roof band between storeys (inner = (w, d))."""
        m = self.m
        ow, od = W / 2 + over, D / 2 + over
        if inner is None:
            if along is None:
                along = "x" if W >= D else "z"
            r = abs(W - D) / 2
            iw, idp = (r, 0.0) if along == "x" else (0.0, r)
            yi = y_eave + rise
        else:
            iw, idp = inner[0] / 2, inner[1] / 2
            yi = y_inner
        outer = [(-ow, od), (ow, od), (ow, -od), (-ow, -od)]
        inn = [(-iw, idp), (iw, idp), (iw, -idp), (-iw, -idp)]
        yo = y_eave
        K = 5
        for i in range(4):
            j = (i + 1) % 4
            rows = []
            for k in range(K + 1):
                t = k / K  # 0 outer -> 1 inner
                lift = curve * (1 - t) ** 2
                sag = -0.12 * math.sin(math.pi * t)
                yy = yo + (yi - yo) * t + lift + sag
                pa = np.array(outer[i]) * (1 - t) + np.array(inn[i]) * t
                pb = np.array(outer[j]) * (1 - t) + np.array(inn[j]) * t
                rows.append(((cx + pa[0], yy, cz + pa[1]), (cx + pb[0], yy, cz + pb[1])))
            for k in range(K):
                (a0, b0), (a1, b1) = rows[k], rows[k + 1]
                up = [(p[0], p[1] + thick, p[2]) for p in (a0, b0, b1, a1)]
                L0 = np.linalg.norm(np.subtract(a0, b0))
                sc = 3.0
                vk0 = k * 1.0 / sc * (abs(rise) / K + 0.6)
                vk1 = (k + 1) * 1.0 / sc * (abs(rise) / K + 0.6)
                uv = [(0, vk0), (L0 / sc, vk0), (L0 / sc, vk1), (0, vk1)]
                m.quad(up, "Roof", uv)
                m.quad([a1, b1, b0, a0], "Wood")
            a0, b0 = rows[0]
            m.quad([a0, b0, (b0[0], b0[1] + thick, b0[2]), (a0[0], a0[1] + thick, a0[2])], "Wood")
        if inner is None:
            # ridge cap
            if along == "x":
                m.box((cx, yi + thick + 0.15, cz), (2 * iw + 0.4, 0.4, 0.5), ridge_mat)
                for s in (-1, 1):
                    m.box((cx + s * (iw + 0.2), yi + thick + 0.4, cz), (0.3, 0.8, 0.6), ridge_mat)
            else:
                m.box((cx, yi + thick + 0.15, cz), (0.5, 0.4, 2 * idp + 0.4), ridge_mat)
                for s in (-1, 1):
                    m.box((cx, yi + thick + 0.4, cz + s * (idp + 0.2)), (0.6, 0.8, 0.3), ridge_mat)
            if collide:
                self.col.append({"type": "roof", "x": cx, "z": cz, "w": round(2 * ow, 2), "d": round(2 * od, 2),
                                 "eave": round(yo, 2), "ridge": round(yi + thick, 2),
                                 "along": "x" if (along == "x") else "z", "note": note})
        return yi

    def gable_ends(self, y_eave, y_ridge, along="x"):
        """plaster triangles closing a hip-less gap under a roof (not needed for hip roofs)."""
        pass

    # ------------------------------------------------------------------ furniture
    def table(self, x, z, w=1.6, d=1.0, level=0, rot=0):
        y = self.y(level)
        m = self.m
        m.box((x, y + 0.42, z), (w, 0.08, d), "Wood")
        for dx in (-w / 2 + 0.1, w / 2 - 0.1):
            for dz in (-d / 2 + 0.1, d / 2 - 0.1):
                m.box((x + dx, y + 0.2, z + dz), (0.1, 0.4, 0.1), "Wood")
        for dx, dz in ((0, d / 2 + 0.45), (0, -d / 2 - 0.45)):
            m.box((x + dx, y + 0.07, z + dz), (0.7, 0.1, 0.7), "LanternRed")
        m.lathe((x + 0.2, y + 0.46, z), [(0, 0), (0.12, 0), (0.15, 0.12), (0.1, 0.2), (0, 0.22)], "Stone", n=8)
        self.box_col(x, z, w, d, y + 0.46, y if level else 0.0, "столик")

    def screen(self, x, z, length=2.4, level=0, along="z"):
        y = self.y(level)
        n = 4
        pts = []
        for k in range(n + 1):
            t = -length / 2 + k * length / n
            off = 0.15 if k % 2 else -0.15
            pts.append((x + off, z + t) if along == "z" else (x + t, z + off))
        for (ax, az), (bx, bz) in zip(pts[:-1], pts[1:]):
            self.m.quad([(ax, y, az), (bx, y, bz), (bx, y + 2.2, bz), (ax, y + 2.2, az)], "Shoji")
        for ax, az in pts:
            self.m.box((ax, y + 1.1, az), (0.07, 2.25, 0.07), "Red")
        w, d = (0.4, length) if along == "z" else (length, 0.4)
        self.box_col(x, z, w, d, y + 2.2, y if level else 0.0, "ширма", sight=True)

    def tansu(self, x, z, level=0, face=(0, 1)):
        y = self.y(level)
        w, d = (1.4, 0.7) if face[1] else (0.7, 1.4)
        self.m.box((x, y + 1.35, z), (w, 2.7, d), "Wood")
        fx, fz = x + face[0] * (d / 2 + 0.01 if face[0] else 0), z + face[1] * (d / 2 + 0.01)
        if face[1]:
            fz = z + face[1] * (0.36)
        else:
            fx = x + face[0] * 0.36
        for yy in (0.9, 1.8):
            self.m.box((fx, y + yy, fz), (0.3 if face[1] else 0.03, 0.05, 0.03 if face[1] else 0.3), "Gold")
        self.box_col(x, z, w, d, y + 2.7, y if level else 0.0, "шкаф")
        self.hide(x + face[0] * 0.8, z + face[1] * 0.8, 0.75, "cupboard", y if level else 0.0, "у шкафа")

    def chest(self, x, z, level=0):
        y = self.y(level)
        self.m.box((x, y + 0.35, z), (1.2, 0.7, 0.7), "WoodLight")
        self.m.box((x, y + 0.55, z + 0.36), (0.25, 0.12, 0.02), "Gold")
        self.box_col(x, z, 1.2, 0.7, y + 0.7, y if level else 0.0, "сундук")

    def futons(self, x, z, level=0, n=4):
        y = self.y(level)
        for k in range(n):
            self.m.box((x, y + 0.12 + k * 0.22, z), (1.6, 0.2, 1.0), "Plaster" if k % 2 else "Cloth")
        self.box_col(x, z, 1.6, 1.0, y + n * 0.22 + 0.05, y if level else 0.0, "футоны")
        self.hide(x, z + 1.0, 0.75, "futon", y if level else 0.0, "за футонами")

    def barrels(self, x, z, level=0, n=3):
        y = self.y(level)
        for k in range(n):
            a = k * 2.1
            bx, bz = x + 0.55 * math.cos(a) * (k > 0), z + 0.55 * math.sin(a) * (k > 0)
            self.m.lathe((bx, y, bz), [(0, 0), (0.38, 0), (0.45, 0.45), (0.38, 0.9), (0, 0.9)], "Wood", n=10)
            self.m.cyl((bx, y + 0.25, bz), (bx, y + 0.3, bz), 0.42, 0.42, "Dark", n=10, cap0=False, cap1=False)
            self.m.cyl((bx, y + 0.62, bz), (bx, y + 0.67, bz), 0.42, 0.42, "Dark", n=10, cap0=False, cap1=False)
        self.box_col(x, z, 1.5, 1.5, y + 0.9, y if level else 0.0, "бочки")
        self.hide(x, z, 1.1, "barrels", y if level else 0.0, "за бочками")

    def crates(self, x, z, level=0, n=3):
        y = self.y(level)
        for k in range(n):
            s = 0.9 - 0.15 * (k == 2)
            dx, dz, dy = [(0, 0, 0), (0.95, 0.1, 0), (0.45, 0.05, 0.9)][k]
            self.m.box((x + dx, y + dy + s / 2, z + dz), (s, s, s), "WoodLight")
        self.box_col(x + 0.45, z, 1.9, 1.0, y + 0.9, y if level else 0.0, "ящики")

    def andon(self, x, z, level=0):
        y = self.y(level)
        self.m.box((x, y + 0.55, z), (0.45, 0.8, 0.45), "LanternWarm")
        self.m.box((x, y + 1.0, z), (0.55, 0.06, 0.55), "Wood")
        self.light(x, y + 0.7, z)

    def ceiling_lamp(self, x, z, level=0):
        y = self.y(level) + STORY - 0.28
        self.m.box((x, y - 0.5, z), (0.6, 0.4, 0.6), "LanternWarm")
        self.m.cyl((x, y - 0.3, z), (x, y, z), 0.02, 0.02, "Wood", n=4)
        self.light(x, y - 0.6, z)

    def hay(self, x, z, level=0, n=4):
        y = self.y(level)
        for k in range(n):
            dx = (k % 2) * 1.3
            dy = (k // 2) * 0.8
            self.m.box((x + dx, y + dy + 0.4, z), (1.2, 0.8, 0.8), "Hay")
        self.box_col(x + 0.65, z, 2.5, 0.8, y + 0.8 * ((n + 1) // 2), y if level else 0.0, "сено")
        self.hide(x + 0.65, z + 0.9, 0.9, "hay", y if level else 0.0, "за сеном")

    # ------------------------------------------------------------------ meta
    def meta(self, **extra):
        d = {"footprint": [self.W, self.D], "floors": self.floors, "storyHeight": STORY, "base": self.base,
             "colliders": self.col, "hides": self.hides, "doors": self.doors, "lights": self.lights,
             "ladders": self.ladders,
             "inside": [{"level": f, "y": round(self.y(f), 2), "w": self.W - 0.5, "d": self.D - 0.5,
                         "ceiling": round(self.y(f) + STORY - 0.28, 2)} for f in range(self.floors)]}
        d.update(self.extra)
        d.update(extra)
        return d
