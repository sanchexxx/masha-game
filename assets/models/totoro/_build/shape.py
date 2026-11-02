"""Shared shape description for the Totoro family (big, mini, chibi).

All coordinates are glTF-style: metres, +Y up, character looks toward +Z,
character's LEFT hand is +X. Geometry is built for the big Totoro (3.0 m to
ear tips) and scaled for the others.
"""
import math
import numpy as np
from scipy.interpolate import CubicSpline

# ---- body silhouette (radius, height) from bottom pole to top pole ----------
BODY_PROFILE = [
    (0.00, 0.00), (0.40, 0.02), (0.72, 0.12), (0.95, 0.38), (1.04, 0.78),
    (1.02, 1.12), (0.94, 1.44), (0.82, 1.70), (0.72, 1.92), (0.66, 2.12),
    (0.60, 2.30), (0.49, 2.46), (0.29, 2.57), (0.00, 2.61),
]
CHIBI_PROFILE = [
    (0.00, 0.00), (0.42, 0.03), (0.78, 0.18), (0.98, 0.55), (1.00, 0.95),
    (0.93, 1.35), (0.80, 1.70), (0.62, 2.00), (0.36, 2.22), (0.00, 2.30),
]

DEPTH_FRONT = 0.97
DEPTH_BACK = 0.82


class Profile:
    def __init__(self, pts):
        pts = np.asarray(pts, float)
        seg = np.linalg.norm(np.diff(pts, axis=0), axis=1)
        s = np.concatenate([[0], np.cumsum(seg)])
        self.sr = CubicSpline(s, pts[:, 0], bc_type="natural")
        self.sy = CubicSpline(s, pts[:, 1], bc_type="natural")
        dense = np.linspace(0, s[-1], 4000)
        r = np.maximum(self.sr(dense), 0.0)
        y = self.sy(dense)
        d = np.concatenate([[0], np.cumsum(np.hypot(np.diff(r), np.diff(y)))])
        self.t_tab = d / d[-1]
        self.r_tab = r
        self.y_tab = y
        self.r_tab[0] = 0.0
        self.r_tab[-1] = 0.0

    def at(self, t):
        t = np.asarray(t, float)
        return np.interp(t, self.t_tab, self.r_tab), np.interp(t, self.t_tab, self.y_tab)

    def r_at_y_upper(self, y):
        """radius on the upper half (above the belly max) for a given height."""
        i0 = int(np.argmax(self.r_tab))
        yy = self.y_tab[i0:]
        rr = self.r_tab[i0:]
        return float(np.interp(y, yy, rr))


def surface(prof, u, t, bulge=True):
    """u in [0,1] (0.5 = front), t in [0,1] bottom->top. returns x,y,z (arrays)."""
    th = (np.asarray(u) - 0.5) * 2 * math.pi
    r, y = prof.at(t)
    c = np.cos(th)
    x = r * np.sin(th)
    z = r * c * np.where(c > 0, DEPTH_FRONT, DEPTH_BACK)
    if bulge:
        # belly pushes forward a little
        z = z + 0.15 * np.exp(-((y - 0.85) / 0.5) ** 2) * np.maximum(c, 0) ** 2
    return x, y, z


# ---- value noise ------------------------------------------------------------
def _hash(ix, iy, iz, seed):
    h = (ix * 73856093) ^ (iy * 19349663) ^ (iz * 83492791) ^ (seed * 2654435761)
    h = h & 0xFFFFFFFF
    h = ((h ^ (h >> 13)) * 1274126177) & 0xFFFFFFFF
    h = h ^ (h >> 16)
    return (h & 0xFFFF).astype(np.float64) / 65535.0


def vnoise3(x, y, z, seed=0):
    xi = np.floor(x).astype(np.int64)
    yi = np.floor(y).astype(np.int64)
    zi = np.floor(z).astype(np.int64)
    fx, fy, fz = x - xi, y - yi, z - zi
    fx = fx * fx * (3 - 2 * fx)
    fy = fy * fy * (3 - 2 * fy)
    fz = fz * fz * (3 - 2 * fz)
    out = 0
    for dx in (0, 1):
        wx = fx if dx else 1 - fx
        for dy in (0, 1):
            wy = fy if dy else 1 - fy
            for dz in (0, 1):
                wz = fz if dz else 1 - fz
                out = out + wx * wy * wz * _hash(xi + dx, yi + dy, zi + dz, seed)
    return out * 2 - 1


def fbm(x, y, z, octaves=4, seed=0):
    a, tot, amp = 0.0, 0.0, 1.0
    for o in range(octaves):
        a = a + amp * vnoise3(x * 2 ** o, y * 2 ** o, z * 2 ** o, seed + o * 17)
        tot += amp
        amp *= 0.5
    return a / tot


def smoothstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)
