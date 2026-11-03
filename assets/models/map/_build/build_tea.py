"""house_tea.glb — small tea house with an interior you can run through (door +Z)."""
import math
import os
import sys

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mlib  # noqa: E402
from mlib import Mesh, roty  # noqa: E402

W, D = 8.0, 7.0          # walls footprint
X, Z = W / 2, D / 2
FLOOR = 0.30             # raised floor / veranda height
EAVE = 4.65              # top of walls
LINTEL = 4.10            # bottom of door beams (>= 4.0 for raging No-Face)
RIDGE = 7.0
T = 0.22                 # wall thickness
FRONT_OH, BACK_OH, SIDE_OH = 1.6, 1.0, 0.9


def post(m, x, z, h=EAVE, s=0.26):
    m.box((x, (FLOOR + h) / 2, z), (s, h - FLOOR, s), "Wood")


def wall_x(m, x0, x1, z, window=None, door=False):
    """wall running along x at depth z. window=(wx0, wx1, y0, y1) shoji pane."""
    L = x1 - x0
    cx = (x0 + x1) / 2
    m.box((cx, LINTEL + (EAVE - LINTEL) / 2, z), (L, EAVE - LINTEL, T + 0.04), "Wood")  # top beam
    if door:
        return
    m.box((cx, FLOOR + 0.45, z), (L, 0.9, T), "Wood")                                  # wainscot
    if window:
        wx0, wx1, y0, y1 = window
        segs = [(x0, wx0), (wx1, x1)]
        for a, b in segs:
            if b - a > 0.01:
                m.box(((a + b) / 2, (FLOOR + 0.9 + LINTEL) / 2, z), (b - a, LINTEL - FLOOR - 0.9, T), "Plaster")
        m.box(((wx0 + wx1) / 2, (FLOOR + 0.9 + y0) / 2, z), (wx1 - wx0, y0 - FLOOR - 0.9, T), "Plaster")
        m.box(((wx0 + wx1) / 2, (y1 + LINTEL) / 2, z), (wx1 - wx0, LINTEL - y1, T), "Plaster")
        m.box(((wx0 + wx1) / 2, (y0 + y1) / 2, z), (wx1 - wx0, y1 - y0, 0.06), "Shoji")
        for xx in (wx0, wx1):
            m.box((xx, (y0 + y1) / 2, z), (0.1, y1 - y0 + 0.1, T + 0.06), "Wood")
        m.box(((wx0 + wx1) / 2, y0, z), (wx1 - wx0 + 0.1, 0.1, T + 0.1), "Wood")
        m.box(((wx0 + wx1) / 2, y1, z), (wx1 - wx0 + 0.1, 0.1, T + 0.06), "Wood")
    else:
        m.box((cx, (FLOOR + 0.9 + LINTEL) / 2, z), (L, LINTEL - FLOOR - 0.9, T), "Plaster")


def wall_z(m, z0, z1, x, window=None):
    """same along z: build rotated by swapping axes."""
    sub = Mesh()
    wall_x(sub, z0, z1, 0.0, window)
    R = roty(90)
    for f, mat, uv, sm in zip(sub.f, sub.m, sub.uv, sub.smooth):
        ids = [m.add_v(R @ np.array(sub.v[i]) + [x, 0, 0]) for i in f]
        m.face(ids, mat, uv, sm)


def roof(m):
    """gable roof along x with gently curved slopes and upturned eaves."""
    xs = [-X - SIDE_OH, X + SIDE_OH]
    slope = (RIDGE - EAVE) / Z

    def y_at(zz):
        a = abs(zz)
        y = RIDGE - slope * a
        edge = Z + (FRONT_OH if zz > 0 else BACK_OH)
        out = max(0.0, a - Z) / (edge - Z)
        return y + 0.32 * out ** 2 - 0.10 * math.sin(min(a / Z, 1) * math.pi)

    for sgn, oh in ((1, FRONT_OH), (-1, BACK_OH)):
        zs = [sgn * (Z + oh) * k / 9 for k in range(10)]
        th = 0.2
        for a, b in zip(zs[:-1], zs[1:]):
            ya, yb = y_at(a), y_at(b)
            top = [(xs[0], ya + th, a), (xs[1], ya + th, a), (xs[1], yb + th, b), (xs[0], yb + th, b)]
            bot = [(xs[0], ya, a), (xs[0], yb, b), (xs[1], yb, b), (xs[1], ya, a)]
            sc = mlib.SCALE["Roof"]
            la, lb = abs(a) * 1.2 / sc, abs(b) * 1.2 / sc
            uv = [(xs[0] / sc, la), (xs[1] / sc, la), (xs[1] / sc, lb), (xs[0] / sc, lb)]
            if sgn > 0:
                top = top[::-1]
                bot = bot[::-1]
                uv = uv[::-1]
            m.quad(top, "Roof", uv)
            m.quad(bot, "Wood")
            for xx in xs:  # side edges
                q = [(xx, ya, a), (xx, ya + th, a), (xx, yb + th, b), (xx, yb, b)]
                m.quad(q if (xx > 0) == (sgn > 0) else q[::-1], "Wood")
        e = zs[-1]
        ye = y_at(e)
        m.box((0, ye + 0.08, e), (xs[1] - xs[0] + 0.1, 0.3, 0.16), "Wood")  # fascia
    # ridge with end tiles
    m.box((0, RIDGE + 0.35, 0), (xs[1] - xs[0] + 0.3, 0.42, 0.55), "Roof")
    for xx in (xs[0] - 0.1, xs[1] + 0.1):
        m.box((xx, RIDGE + 0.55, 0), (0.25, 0.8, 0.7), "Roof")
    # gable triangles
    for xx in (-X, X):
        pts = [(xx, EAVE, -Z), (xx, EAVE, Z), (xx, y_at(0.0) - 0.05, 0)]
        if xx < 0:
            pts = pts[::-1]
        m.quad(pts, "Plaster")
        m.box((xx, EAVE + 0.05, 0), (T + 0.08, 0.16, D + 0.3), "Wood")
        # vertical battens on the gable
        for zz in (-1.2, 0, 1.2):
            hh = y_at(zz) - EAVE - 0.1
            m.box((xx + (0.09 if xx > 0 else -0.09), EAVE + hh / 2, zz), (0.05, hh, 0.1), "Wood")


def lantern(m, x, y, z, mat="LanternRed", s=1.0):
    prof = [(0.0, -0.32), (0.18, -0.30), (0.28, -0.18), (0.31, 0.0), (0.28, 0.18), (0.18, 0.30), (0.0, 0.32)]
    m.lathe((x, y, z), [(r * s, yy * s) for r, yy in prof], mat, n=12)
    m.cyl((x, y + 0.30 * s, z), (x, y + 0.40 * s, z), 0.14 * s, 0.14 * s, "Wood", n=10)
    m.cyl((x, y - 0.40 * s, z), (x, y - 0.30 * s, z), 0.12 * s, 0.12 * s, "Wood", n=10)


def stone_lantern(m, x, z, s=1.0):
    st = "Stone"
    m.cyl((x, 0, z), (x, 0.25 * s, z), 0.45 * s, 0.4 * s, st, n=8)
    m.cyl((x, 0.25 * s, z), (x, 0.95 * s, z), 0.14 * s, 0.14 * s, st, n=8)
    m.box((x, 1.05 * s, z), (0.6 * s, 0.2 * s, 0.6 * s), st)
    m.box((x, 1.35 * s, z), (0.42 * s, 0.4 * s, 0.42 * s), "LanternWarm")
    m.lathe((x, 1.55 * s, z), [(0.0, 0.42 * s), (0.25 * s, 0.32 * s), (0.55 * s, 0.05 * s), (0.5 * s, 0.0), (0.0, 0.0)],
            st, n=6, smooth=False)


def plant_pot(m, x, z, s=1.0, mat="Needles"):
    m.lathe((x, 0, z), [(0, 0), (0.25 * s, 0), (0.32 * s, 0.4 * s), (0.28 * s, 0.45 * s), (0, 0.45 * s)], "Stone", n=10)
    m.blob((x, 0.75 * s, z), (0.42 * s, 0.38 * s, 0.42 * s), mat, rows=5, cols=8, rough=0.2, seed=abs(int(x * 7 + z * 13)))


def build(m):
    # stone base and floor
    m.box((0, 0.1, 0), (W + 0.4, 0.2, D + 0.4), "Stone")
    m.box((0, FLOOR - 0.05, 0), (W, 0.1, D), "Wood")
    for i in range(4):          # tatami
        for j in range(2):
            m.box((-2.9 + i * 1.95, FLOOR + 0.01, -1.6 + j * 3.2), (1.85, 0.06, 3.05), "Tatami")
    # veranda (engawa) in front + steps
    m.box((0, FLOOR - 0.06, Z + 0.75), (W + 0.6, 0.12, 1.5), "WoodLight")
    for xx in (-X - 0.2, -1.6, 1.6, X + 0.2):
        m.box((xx, (FLOOR - 0.12) / 2, Z + 1.4), (0.16, FLOOR - 0.12, 0.16), "Wood")
    m.box((0, 0.08, Z + 1.9), (3.2, 0.16, 0.7), "MossStone")
    # posts
    for x in (-X, -2.0, -1.45, 1.45, 2.0, X):
        post(m, x, Z)
    for x in (-X, -2.0, 0.4, 2.8, X):
        post(m, x, -Z)
    for z in (-1.2, 1.2):
        post(m, -X, z)
        post(m, X, z)
    for x in (-X - 0.1, X + 0.1):  # veranda eave posts
        post(m, x, Z + 1.45, EAVE - 0.35, 0.2)
    # walls
    wall_x(m, -X, -1.45, Z, window=(-3.7, -1.75, 1.3, 3.7))
    wall_x(m, -1.45, 1.45, Z, door=True)
    wall_x(m, 1.45, X, Z, window=(1.75, 3.7, 1.3, 3.7))
    wall_x(m, -X, 0.4, -Z, window=(-3.0, -1.0, 2.0, 3.3))
    wall_x(m, 0.4, 2.8, -Z, door=True)
    wall_x(m, 2.8, X, -Z)
    wall_z(m, -Z, Z, -X, window=(-1.2, 1.2, 1.4, 3.3))
    wall_z(m, -Z, Z, X, window=(-1.2, 1.2, 1.4, 3.3))
    # ceiling + beams
    m.box((0, EAVE - 0.05, 0), (W - 0.1, 0.08, D - 0.1), "WoodLight")
    for x in (-2.0, 2.0):
        m.box((x, EAVE - 0.25, 0), (0.22, 0.3, D - 0.2), "Wood")
    roof(m)
    # noren curtain over the front door (top part only — big heroes pass under it)
    for k in (-1, 0, 1):
        x0 = k * 0.9
        m.quad([(x0 - 0.42, LINTEL, Z + 0.16), (x0 + 0.42, LINTEL, Z + 0.16), (x0 + 0.42, 3.35, Z + 0.16),
                (x0 - 0.42, 3.35, Z + 0.16)], "Cloth",
               [(0.02, 1), (0.98, 1), (0.98, 0), (0.02, 0)])
    m.cyl((-1.45, LINTEL + 0.05, Z + 0.16), (1.45, LINTEL + 0.05, Z + 0.16), 0.04, 0.04, "Wood", n=6)
    # hanging red lanterns + warm lamps
    for x in (-3.0, 3.0):
        m.cyl((x, EAVE - 0.1, Z + 1.0), (x, 3.95, Z + 1.0), 0.015, 0.015, "Wood", n=4)
        lantern(m, x, 3.5, Z + 1.0, "LanternRed", 1.0)
    # interior: low table, cushions, tea set, folding screen, wardrobe, chest, floor lamp, ceiling lamp
    tx, tz = -2.2, -0.6
    m.box((tx, FLOOR + 0.42, tz), (1.6, 0.08, 1.0), "Wood")
    for dx, dz in ((-0.7, -0.4), (0.7, -0.4), (-0.7, 0.4), (0.7, 0.4)):
        m.box((tx + dx, FLOOR + 0.2, tz + dz), (0.1, 0.4, 0.1), "Wood")
    for dx, dz in ((0, 0.9), (0, -0.9), (1.15, 0), (-1.15, 0)):
        m.box((tx + dx, FLOOR + 0.08, tz + dz), (0.7, 0.12, 0.7), "LanternRed")
    m.lathe((tx + 0.2, FLOOR + 0.46, tz), [(0, 0), (0.12, 0), (0.15, 0.12), (0.1, 0.2), (0, 0.22)], "Stone", n=10)
    for dx in (-0.4, -0.15):
        m.lathe((tx + dx, FLOOR + 0.46, tz + 0.15), [(0, 0), (0.06, 0), (0.07, 0.08), (0, 0.08)], "Plaster", n=8)
    # byobu folding screen (zigzag), right side
    sx, sz = 2.75, -0.4
    pts = [(sx - 0.15, sz - 1.2), (sx + 0.15, sz - 0.4), (sx - 0.15, sz + 0.4), (sx + 0.15, sz + 1.2)]
    for (ax, az), (bx, bz) in zip(pts[:-1], pts[1:]):
        m.quad([(ax, FLOOR, az), (bx, FLOOR, bz), (bx, FLOOR + 2.2, bz), (ax, FLOOR + 2.2, az)], "Shoji")
        m.box((ax, FLOOR + 1.1, az), (0.07, 2.25, 0.07), "Red")
    m.box((pts[-1][0], FLOOR + 1.1, pts[-1][1]), (0.07, 2.25, 0.07), "Red")
    # tansu wardrobe (hide spot), back-left corner
    wx, wz = -3.15, -2.95
    m.box((wx, FLOOR + 1.35, wz), (1.4, 2.7, 0.7), "Wood")
    m.box((wx, FLOOR + 1.35, wz + 0.36), (0.02, 2.5, 0.02), "Gold")
    for yy in (0.9, 1.8):
        for dx in (-0.25, 0.25):
            m.box((wx + dx, FLOOR + yy, wz + 0.37), (0.12, 0.04, 0.02), "Gold")
    # chest
    m.box((-3.1, FLOOR + 0.35, 2.4), (1.2, 0.7, 0.7), "WoodLight")
    m.box((-3.1, FLOOR + 0.55, 2.76), (0.25, 0.12, 0.02), "Gold")
    # andon floor lamp
    m.box((3.2, FLOOR + 0.55, 2.6), (0.45, 0.8, 0.45), "LanternWarm")
    m.box((3.2, FLOOR + 1.0, 2.6), (0.55, 0.06, 0.55), "Wood")
    # ceiling lamp
    m.box((0, EAVE - 0.6, 0.3), (0.6, 0.4, 0.6), "LanternWarm")
    m.cyl((0, EAVE - 0.4, 0.3), (0, EAVE - 0.1, 0.3), 0.02, 0.02, "Wood", n=4)
    # outside: bench, pots, stone lantern, stepping stones
    m.box((-3.0, FLOOR + 0.4, Z + 1.05), (1.8, 0.08, 0.5), "WoodLight")
    for dx in (-0.75, 0.75):
        m.box((-3.0 + dx, FLOOR + 0.2, Z + 1.05), (0.1, 0.4, 0.4), "Wood")
    plant_pot(m, 4.75, Z + 0.6, 1.0)
    plant_pot(m, -4.8, Z + 0.4, 0.8, "Sakura")
    plant_pot(m, 4.8, -Z + 0.6, 0.9)
    stone_lantern(m, 5.4, Z + 2.4, 1.2)
    for k, (xx, zz) in enumerate([(0.2, Z + 2.8), (-0.4, Z + 3.7), (0.3, Z + 4.6)]):
        m.cyl((xx, 0, zz), (xx, 0.06, zz), 0.45, 0.45, "MossStone", n=9)


def meta():
    """colliders/hides in local coords (door +Z). Integrator rotates by layout rotY."""
    return {
        "footprint": [W + 0.6, D + 1.8],
        "colliders": [
            {"type": "box", "x": 0, "z": 0.75, "w": W + 0.6, "d": D + 1.6, "h": FLOOR, "note": "пол и веранда — ступенька"},
            {"type": "box", "x": -2.725, "z": Z, "w": 2.55, "d": 0.3, "h": EAVE},
            {"type": "box", "x": 2.725, "z": Z, "w": 2.55, "d": 0.3, "h": EAVE},
            {"type": "box", "x": 0, "z": Z, "w": 2.9, "d": 0.3, "h": EAVE, "bottom": LINTEL, "note": "над дверью"},
            {"type": "box", "x": -1.8, "z": -Z, "w": 4.4, "d": 0.3, "h": EAVE},
            {"type": "box", "x": 3.4, "z": -Z, "w": 1.2, "d": 0.3, "h": EAVE},
            {"type": "box", "x": 1.6, "z": -Z, "w": 2.4, "d": 0.3, "h": EAVE, "bottom": LINTEL, "note": "над задней дверью"},
            {"type": "box", "x": -X, "z": 0, "w": 0.3, "d": D, "h": EAVE},
            {"type": "box", "x": X, "z": 0, "w": 0.3, "d": D, "h": EAVE},
            {"type": "roof", "x": 0, "z": 0.3, "w": W + 2 * SIDE_OH, "d": D + FRONT_OH + BACK_OH, "eave": EAVE,
             "ridge": RIDGE, "along": "x"},
            {"type": "box", "x": -2.2, "z": -0.6, "w": 1.6, "d": 1.0, "h": FLOOR + 0.46, "note": "столик — можно залезть"},
            {"type": "box", "x": -3.15, "z": -2.95, "w": 1.4, "d": 0.7, "h": FLOOR + 2.7, "note": "шкаф"},
            {"type": "box", "x": 2.75, "z": -0.4, "w": 0.4, "d": 2.4, "h": FLOOR + 2.2, "sight": True, "note": "ширма"},
            {"type": "box", "x": -3.1, "z": 2.4, "w": 1.2, "d": 0.7, "h": FLOOR + 0.7, "note": "сундук"},
            {"type": "circle", "x": 5.4, "z": Z + 2.4, "r": 0.45, "h": 1.9, "note": "каменный фонарь"},
        ],
        "hides": [
            {"x": 3.45, "z": -0.4, "r": 0.95, "kind": "screen", "note": "за ширмой"},
            {"x": -3.15, "z": -2.25, "r": 0.8, "kind": "cupboard", "note": "у шкафа"},
            {"x": -3.1, "z": 1.7, "r": 0.7, "kind": "chest", "note": "за сундуком"},
        ],
        "doors": [{"x": 0, "z": Z, "w": 2.9, "h": LINTEL - FLOOR}, {"x": 1.6, "z": -Z, "w": 2.4, "h": LINTEL - FLOOR}],
        "lights": [{"x": 0, "y": EAVE - 0.6, "z": 0.3, "color": "#ffb060"}, {"x": -3, "y": 3.5, "z": Z + 1, "color": "#ff7040"},
                   {"x": 3, "y": 3.5, "z": Z + 1, "color": "#ff7040"}],
        "inside": {"x": 0, "z": 0, "w": W - 0.4, "d": D - 0.4, "ceiling": EAVE - 0.1},
    }


if __name__ == "__main__":
    mlib.reset()
    m = Mesh()
    build(m)
    ob = mlib.to_object("TeaHouse", m)
    mlib.bake_ao(ob, "house_tea")
    mlib.export("house_tea.glb", meta())
