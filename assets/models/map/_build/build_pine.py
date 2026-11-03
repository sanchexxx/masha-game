"""tree_pine_big.glb — huge old pine you can climb: ladder on the trunk (+Z side), deck in the crown."""
import math
import os
import sys

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mlib  # noqa: E402
from mlib import Mesh  # noqa: E402

DECK_Y = 8.0
DECK_R = 3.4
TRUNK_R0 = 1.25


def trunk_path():
    pts, rad = [], []
    for k in range(13):
        y = k * 1.4
        lean = max(0.0, y - DECK_Y) / 8
        x = 0.9 * lean ** 1.5 * 2 - 0.25 * math.sin(y * 0.35)
        z = -0.6 * lean
        pts.append((x if y > DECK_Y else 0.0, y, z if y > DECK_Y else 0.0))
        rad.append(TRUNK_R0 * (1 - 0.55 * (y / 16.8)) + (0.35 if k == 0 else 0))
    return pts, rad


def build(trunk, crown, deck):
    pts, rad = trunk_path()
    trunk.tube(pts, rad, "Bark", n=14, cap0=False, cap1=True)
    # roots
    for i in range(7):
        a = 2 * math.pi * i / 7 + 0.3
        if abs(math.atan2(math.sin(a - math.pi / 2), math.cos(a - math.pi / 2))) < 0.35:
            continue  # leave the ladder side clear
        d = np.array([math.cos(a), 0, math.sin(a)])
        p0 = d * 0.6 + [0, 1.4, 0]
        p1 = d * 1.6 + [0, 0.55, 0]
        p2 = d * 2.7 + [0, 0.12, 0]
        p3 = d * 3.4 + [0, -0.05, 0]
        trunk.tube([p0, p1, p2, p3], [0.55, 0.42, 0.24, 0.08], "Bark", n=8)
    # branches to pads
    pads = [
        # centre, horizontal radius, thickness
        ((3.9, 9.2, 0.8), 2.6, 1.0), ((-3.6, 9.5, -1.2), 2.7, 1.0), ((0.6, 9.3, -4.0), 2.5, 0.95),
        ((-2.4, 9.0, 3.1), 2.0, 0.9), ((3.0, 9.6, -3.0), 2.0, 0.9),
        ((2.6, 11.8, 1.0), 3.3, 1.2), ((-2.6, 12.6, -0.6), 3.2, 1.2), ((0.6, 12.2, -3.0), 2.6, 1.1),
        ((1.2, 14.2, -0.2), 3.0, 1.1), ((-1.0, 15.6, -0.8), 2.4, 1.0), ((0.9, 16.8, -0.5), 1.8, 0.9),
        ((4.6, 13.0, -1.6), 1.9, 0.9), ((-4.4, 11.0, 2.0), 1.8, 0.9),
    ]
    for (c, R, th) in pads:
        c = np.array(c, float)
        ty = min(c[1] - 1.2, 15.4)
        k = int(round(ty / 1.4))
        base = np.array(pts[min(k, len(pts) - 1)], float)
        base[1] = ty
        mid = (base + c) / 2 + [0, 0.5, 0]
        trunk.tube([base, mid, c - [0, th * 0.4, 0]], [0.32, 0.22, 0.12], "Bark", n=7)
        r = np.random.default_rng(int(abs(c[0] * 100 + c[2] * 10 + c[1])))
        nb = 6 if R > 2.4 else 5
        for b in range(nb):
            a = 2 * math.pi * b / nb + r.uniform(-0.3, 0.3)
            dd = R * (0.25 + 0.5 * r.uniform()) if b else 0
            bc = c + [math.cos(a) * dd, r.uniform(-0.15, 0.25) * th, math.sin(a) * dd]
            br = R * r.uniform(0.48, 0.62)
            rad = (br, th * r.uniform(1.0, 1.25), br)
            crown.blob(bc, tuple(x * 0.85 for x in rad), "Needles", rows=5, cols=8, rough=0.22,
                       seed=int(r.integers(0, 10000)), normal_center=c - [0, R * 1.1, 0], squash=1.0)
            crown.cards(bc, rad, "NeedleCard", 12, br * 1.0, normal_center=c - [0, R * 1.1, 0], seed=int(r.integers(0, 10000)))
    # deck around the trunk
    n = 16
    for j in range(n):
        a0, a1 = 2 * math.pi * j / n, 2 * math.pi * (j + 1) / n
        ri, ro = TRUNK_R0 * 0.62, DECK_R
        P = [(ri * math.cos(a0), DECK_Y, ri * math.sin(a0)), (ro * math.cos(a0), DECK_Y, ro * math.sin(a0)),
             (ro * math.cos(a1), DECK_Y, ro * math.sin(a1)), (ri * math.cos(a1), DECK_Y, ri * math.sin(a1))]
        top = [(p[0], p[1] + 0.16, p[2]) for p in P]
        deck.quad(top[::-1], "WoodLight")
        deck.quad(P, "Wood")
        deck.quad([P[1], P[2], top[2], top[1]], "Wood")
    # railing (opening at the ladder, +Z side)
    posts = []
    for j in range(18):
        a = 2 * math.pi * j / 18
        if abs(math.atan2(math.sin(a - math.pi / 2), math.cos(a - math.pi / 2))) < 0.3:
            continue
        x, z = (DECK_R - 0.12) * math.cos(a), (DECK_R - 0.12) * math.sin(a)
        deck.box((x, DECK_Y + 0.66, z), (0.12, 1.0, 0.12), "Wood")
        posts.append((x, DECK_Y + 1.12, z))
    gap = [k for k in range(len(posts) - 1)]
    for k in gap:
        a, b = np.array(posts[k]), np.array(posts[k + 1])
        if np.linalg.norm(a - b) < 1.6:
            deck.cyl(a, b, 0.05, 0.05, "Wood", n=5)
            deck.cyl(a - [0, 0.45, 0], b - [0, 0.45, 0], 0.04, 0.04, "Wood", n=5)
    # brackets under the deck
    for j in range(4):
        a = math.pi / 4 + j * math.pi / 2
        d = np.array([math.cos(a), 0, math.sin(a)])
        deck.cyl(d * 0.75 + [0, DECK_Y - 2.0, 0], d * (DECK_R - 0.4) + [0, DECK_Y - 0.02, 0], 0.11, 0.11, "Wood", n=6)
    # ladder on the +Z face of the trunk
    def trunk_r(y):
        return TRUNK_R0 * (1 - 0.55 * (y / 16.8))

    rails = []
    for sx in (-0.38, 0.38):
        a = (sx, 0.0, trunk_r(0.0) + 0.42)
        b = (sx, DECK_Y + 1.0, trunk_r(DECK_Y) + 0.22)
        deck.cyl(a, b, 0.06, 0.06, "Wood", n=6)
        rails.append((np.array(a), np.array(b)))
    for k in range(1, int((DECK_Y + 0.9) / 0.42)):
        t = k * 0.42 / (DECK_Y + 1.0)
        pa = rails[0][0] + (rails[0][1] - rails[0][0]) * t
        pb = rails[1][0] + (rails[1][1] - rails[1][0]) * t
        deck.cyl(pa, pb, 0.04, 0.04, "WoodLight", n=5)
    # two lanterns hanging under the pads + a little sign
    for (x, z) in ((2.6, 1.6), (-2.2, -2.4)):
        deck.cyl((x, DECK_Y - 0.0, z), (x, DECK_Y - 0.6, z), 0.012, 0.012, "Wood", n=4)
        deck.lathe((x, DECK_Y - 0.95, z), [(0, -0.3), (0.16, -0.26), (0.24, 0), (0.16, 0.26), (0, 0.3)],
                   "LanternWarm", n=10)
    deck.cyl((1.6, 0, 2.6), (1.6, 1.3, 2.6), 0.06, 0.06, "Wood", n=6)
    deck.box((1.6, 1.25, 2.62), (0.9, 0.45, 0.06), "WoodLight")


def meta():
    return {
        "colliders": [
            {"type": "circle", "x": 0, "z": 0, "r": TRUNK_R0, "h": DECK_Y, "note": "ствол"},
            {"type": "circle", "x": 0, "z": 0, "r": DECK_R, "h": DECK_Y + 0.16, "bottom": DECK_Y - 0.1,
             "platform": True, "note": "площадка в кроне: снизу проходят, сверху стоят"},
        ],
        "ladders": [{"x": 0, "z": TRUNK_R0 + 0.35, "nx": 0, "nz": 1, "w": 0.9, "top": DECK_Y + 0.16}],
        "hides": [{"x": 0, "z": 0, "r": DECK_R, "y": DECK_Y, "kind": "crown", "note": "на площадке в кроне"}],
        "crownFade": {"x": 0, "z": 0, "r": 5.5, "bottom": DECK_Y + 0.3, "note": "крона прозрачнеет, если в неё зашла камера"},
        "lights": [{"x": 2.6, "y": DECK_Y - 0.95, "z": 1.6, "color": "#ffb060"}],
        "nodes": {"Trunk": "ствол, корни, ветки", "Crown": "хвоя (прозрачнеет у камеры)", "Deck": "площадка, перила, лестница"},
    }


if __name__ == "__main__":
    mlib.reset()
    t, c, d = Mesh(), Mesh(), Mesh()
    build(t, c, d)
    mlib.to_object("Trunk", t)
    mlib.to_object("Crown", c)
    mlib.to_object("Deck", d)
    mlib.export("tree_pine_big.glb", meta())
