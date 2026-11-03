"""Trees, bushes, bamboo + the two other climbable trees and the small bridges.
Run: python3 build_trees.py [name ...]"""
import math
import os
import sys

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mlib  # noqa: E402
from mlib import Mesh  # noqa: E402
from build_tea import lantern  # noqa: E402


def export(name, parts, meta):
    mlib.reset()
    for node, mesh in parts.items():
        mlib.to_object(node, mesh)
    return mlib.export(name, meta)


def trunk(m, H, r0, r1, lean=(0.0, 0.0), roots=5, seed=0, twist=0.0):
    rng = np.random.default_rng(seed)
    pts, rad = [], []
    K = 7
    for k in range(K + 1):
        t = k / K
        y = H * t
        x = lean[0] * t ** 1.6 + twist * math.sin(t * 3.0)
        z = lean[1] * t ** 1.6 + twist * 0.6 * math.cos(t * 2.4)
        pts.append((x, y, z))
        rad.append(r0 + (r1 - r0) * t ** 0.8 + (0.25 * r0 if k == 0 else 0))
    m.tube(pts, rad, "Bark", n=10, cap0=False)
    for i in range(roots):
        a = 2 * math.pi * i / roots + rng.uniform(-0.3, 0.3)
        d = np.array([math.cos(a), 0, math.sin(a)])
        L = r0 * rng.uniform(1.8, 2.6)
        m.tube([d * r0 * 0.4 + [0, r0 * 1.1, 0], d * (r0 + L * 0.45) + [0, r0 * 0.35, 0], d * (r0 + L) + [0, -0.05, 0]],
               [r0 * 0.42, r0 * 0.26, r0 * 0.06], "Bark", n=7)
    return pts


CARD = {"Sakura": "SakuraCard", "Maple": "MapleCard", "Leaves": "LeafCard", "Needles": "NeedleCard",
        "Willow": "LeafCard", "Hedge": "HedgeCard"}


def crown(m, c, R, mat, n=9, flat=0.8, seed=0, rough=0.18, rows=5, cols=8, spread=0.55, cards=16):
    rng = np.random.default_rng(seed)
    c = np.asarray(c, float)
    for b in range(n):
        if b == 0:
            off = np.zeros(3)
        else:
            a = rng.uniform(0, 2 * math.pi)
            e = rng.uniform(-0.6, 0.9)
            off = np.array([math.cos(a) * math.cos(e), math.sin(e) * flat, math.sin(a) * math.cos(e)]) * R * spread
        br = R * rng.uniform(0.5, 0.68)
        rad = (br, br * flat * rng.uniform(0.85, 1.05), br)
        m.blob(c + off, tuple(x * 0.84 for x in rad), mat, rows=rows, cols=cols, rough=rough,
               seed=int(rng.integers(0, 99999)), normal_center=c - [0, R * 0.5, 0])
        m.cards(c + off, rad, CARD[mat], cards, br * 1.15, normal_center=c - [0, R * 0.5, 0],
                seed=int(rng.integers(0, 99999)))


def branches(m, base_y, c, R, k=4, seed=0, r=0.18):
    rng = np.random.default_rng(seed + 1)
    for i in range(k):
        a = 2 * math.pi * i / k + rng.uniform(-0.4, 0.4)
        tip = np.asarray(c) + [math.cos(a) * R * 0.55, rng.uniform(-0.3, 0.2) * R, math.sin(a) * R * 0.55]
        base = np.array([0, base_y + rng.uniform(-0.4, 0.6), 0])
        m.tube([base, (base + tip) / 2 + [0, 0.4, 0], tip], [r, r * 0.7, r * 0.35], "Bark", n=6)


# ------------------------------------------------------------------ decorative trees
def sakura():
    t, c = Mesh(), Mesh()
    trunk(t, 3.4, 0.42, 0.22, lean=(0.5, 0.2), seed=1, twist=0.25)
    branches(t, 3.0, (0.4, 5.0, 0.1), 3.4, k=5, seed=1)
    crown(c, (0.4, 5.2, 0.1), 3.4, "Sakura", n=11, flat=0.7, seed=2)
    # fallen petals
    ring = [(3.2 * math.cos(a) * (1 + 0.12 * math.sin(5 * a)), 0.03, 3.2 * math.sin(a) * (1 + 0.12 * math.sin(5 * a)))
            for a in np.linspace(0, 2 * math.pi, 19)[:-1]]
    ci = t.add_v((0, 0.03, 0))
    ids = [t.add_v(p) for p in ring]
    for k in range(len(ids)):
        t.face([ci, ids[(k + 1) % len(ids)], ids[k]], "Sakura")
    return export("tree_sakura.glb", {"Trunk": t, "Crown": c},
                  {"colliders": [{"type": "circle", "x": 0, "z": 0, "r": 0.5, "h": 4.0}], "crownFade": {"r": 3.6, "bottom": 3.6}})


def maple():
    t, c = Mesh(), Mesh()
    trunk(t, 3.8, 0.4, 0.22, lean=(-0.3, 0.3), seed=3, twist=0.15)
    branches(t, 3.2, (0, 5.6, 0), 3.0, k=4, seed=3)
    crown(c, (-0.2, 5.8, 0.2), 3.1, "Maple", n=10, flat=0.85, seed=4)
    return export("tree_maple.glb", {"Trunk": t, "Crown": c},
                  {"colliders": [{"type": "circle", "x": 0, "z": 0, "r": 0.5, "h": 4.0}], "crownFade": {"r": 3.4, "bottom": 3.8}})


def willow():
    t, c = Mesh(), Mesh()
    trunk(t, 3.6, 0.5, 0.25, lean=(0.6, -0.2), seed=5, twist=0.2)
    top = np.array([0.6, 5.0, -0.2])
    crown(c, top, 2.6, "Willow", n=7, flat=0.6, seed=6)
    rng = np.random.default_rng(7)
    for k in range(30):
        a = 2 * math.pi * k / 30 + rng.uniform(-0.1, 0.1)
        r = rng.uniform(1.6, 3.0)
        x0, z0 = top[0] + math.cos(a) * r, top[2] + math.sin(a) * r
        y0 = top[1] + rng.uniform(-0.6, 0.4)
        y1 = rng.uniform(0.9, 2.2)
        w = 0.32
        tx, tz = -math.sin(a) * w, math.cos(a) * w
        bend = 0.25
        c.quad([(x0 - tx * 2, y0, z0 - tz * 2), (x0 + tx * 2, y0, z0 + tz * 2),
                (x0 + tx * 2 + math.cos(a) * bend, y1, z0 + tz * 2 + math.sin(a) * bend),
                (x0 - tx * 2 + math.cos(a) * bend, y1, z0 - tz * 2 + math.sin(a) * bend)], "WillowCard",
               [(0, 1), (1, 1), (1, 0), (0, 0)])
        for i in range(len(c.v) - 4, len(c.v)):
            c.cn[i] = mlib.nrm(np.asarray(c.v[i]) - top + [0, 3.0, 0])
    return export("tree_willow.glb", {"Trunk": t, "Crown": c},
                  {"colliders": [{"type": "circle", "x": 0, "z": 0, "r": 0.6, "h": 4.0}],
                   "hides": [{"x": 0.6, "z": -0.2, "r": 2.2, "kind": "willow", "note": "под ветками ивы"}],
                   "crownFade": {"r": 3.2, "bottom": 1.5}})


def pine_small():
    t, c = Mesh(), Mesh()
    pts = trunk(t, 6.5, 0.5, 0.2, lean=(0.8, 0.0), seed=8, twist=0.3)
    pads = [((1.8, 4.6, 0.6), 1.8, 0.8), ((-1.4, 5.4, -0.6), 1.7, 0.75), ((0.9, 6.6, -0.2), 1.9, 0.85),
            ((-0.3, 7.7, 0.3), 1.4, 0.7)]
    for (pc, R, th) in pads:
        pc = np.array(pc)
        t.tube([(pc[0] * 0.2, pc[1] - 0.8, pc[2] * 0.2), pc - [0, th * 0.3, 0]], [0.14, 0.07], "Bark", n=6)
        crown(c, pc, R, "Needles", n=4, flat=0.5, seed=int(pc[1] * 10), rows=5, cols=8, spread=0.6)
    return export("tree_pine.glb", {"Trunk": t, "Crown": c},
                  {"colliders": [{"type": "circle", "x": 0, "z": 0, "r": 0.55, "h": 4.0}], "crownFade": {"r": 2.6, "bottom": 3.8}})


def forest_tree():
    """cheap tree for the forest ring around the map (~150 tris)."""
    t, c = Mesh(), Mesh()
    t.cyl((0, 0, 0), (0, 3.5, 0), 0.45, 0.25, "Bark", n=6, cap0=False)
    for (y, r) in ((4.2, 2.6), (6.0, 2.0), (7.6, 1.3)):
        c.blob((0, y, 0), (r * 0.88, r * 0.72, r * 0.88), "Hedge", rows=4, cols=7, rough=0.15, seed=int(y * 10),
               normal_center=(0, y - r, 0))
        c.cards((0, y, 0), (r, r * 0.8, r), "HedgeCard", 6, r * 1.1, normal_center=(0, y - r, 0), seed=int(y * 7))
    return export("tree_forest.glb", {"Trunk": t, "Crown": c},
                  {"colliders": [{"type": "circle", "x": 0, "z": 0, "r": 0.5, "h": 4.0}]})


def bushes():
    parts = {}
    meta = {"variants": {}}
    specs = {
        "BushRound": [("Hedge", (0, 0.8, 0), (1.3, 1.0, 1.3))],
        "BushFlower": [("Hedge", (0, 0.8, 0), (1.25, 0.95, 1.25)), ("Sakura", (0.4, 1.5, 0.3), (0.5, 0.35, 0.5)),
                       ("Sakura", (-0.5, 1.3, -0.3), (0.45, 0.3, 0.45)), ("Sakura", (0.1, 1.2, -0.7), (0.4, 0.3, 0.4))],
        "BushAzalea": [("Leaves", (0, 0.7, 0), (1.4, 0.85, 1.2)), ("Maple", (0.3, 1.3, 0.2), (0.6, 0.35, 0.55)),
                       ("Maple", (-0.6, 1.1, -0.2), (0.5, 0.35, 0.5))],
        "BushTall": [("Leaves", (0, 1.1, 0), (1.1, 1.4, 1.1)), ("Leaves", (0.4, 2.1, 0.1), (0.8, 0.8, 0.8))],
    }
    for name, blobs in specs.items():
        m = Mesh()
        for k, (mat, c, r) in enumerate(blobs):
            m.blob(c, tuple(x * 0.85 for x in r), mat, rows=5, cols=8, rough=0.2, seed=k * 7 + len(name),
                   normal_center=(0, 0.2, 0))
            m.cards(c, r, CARD[mat], 10 if k == 0 else 5, max(r) * 0.95, normal_center=(0, 0.2, 0), seed=k * 13 + len(name))
        parts[name] = m
        meta["variants"][name] = {"hide": {"r": 1.3, "kind": "bush"}, "collider": None}
    # bamboo clump (hiding place)
    b = Mesh()
    rng = np.random.default_rng(9)
    for k in range(7):
        a = rng.uniform(0, 2 * math.pi)
        r = rng.uniform(0, 0.8)
        x, z = math.cos(a) * r, math.sin(a) * r
        h = rng.uniform(6, 9)
        b.cyl((x, 0, z), (x + rng.uniform(-0.4, 0.4), h, z + rng.uniform(-0.4, 0.4)), 0.09, 0.07, "Bamboo", n=5, cap0=False)
        b.cards((x, h - 0.8, z), (0.9, 1.0, 0.9), "LeafCard", 5, 1.2, normal_center=(x, h - 2.0, z), seed=k)
    parts["BambooClump"] = b
    meta["variants"]["BambooClump"] = {"hide": {"r": 1.1, "kind": "bamboo"},
                                       "collider": {"type": "circle", "r": 0.7, "h": 6.0, "sight": False}}
    # hedge block for the maze (scale x/z to the wall length)
    hb = Mesh()
    hb.box((0, 1.25, 0), (2.0, 2.5, 0.8), "Hedge")
    for k in range(4):
        hb.blob((-0.75 + k * 0.5, 2.5, 0), (0.4, 0.25, 0.45), "Hedge", rows=4, cols=6, rough=0.2, seed=k, normal_center=(0, 1.5, 0))
    parts["HedgeBlock"] = hb
    meta["variants"]["HedgeBlock"] = {"collider": {"type": "box", "w": 2.0, "d": 0.8, "h": 2.5},
                                      "note": "стенка лабиринта 2 м: тянуть по x (scale.x = длина/2)"}
    return export("bushes.glb", parts, meta)


# ------------------------------------------------------------------ climbable trees
def old_hollow():
    t, c, d = Mesh(), Mesh(), Mesh()
    R0, DECK = 1.8, 7.0
    trunk(t, 11.0, R0, 0.8, lean=(0.0, 0.0), roots=7, seed=11, twist=0.25)
    # hollow door on +Z
    zf = R0 + 0.05
    d.quad([(-0.7, 0.05, zf), (0.7, 0.05, zf), (0.7, 2.3, zf), (-0.7, 2.3, zf)], "Dark")
    d.lathe((0, 2.3, zf), [(0.0, 0.55), (0.45, 0.4), (0.72, 0.0)], "Dark", n=10)
    for sx in (-1, 1):
        d.box((sx * 0.78, 1.3, zf + 0.05), (0.14, 2.6, 0.16), "WoodLight")
    d.box((0, 2.68, zf + 0.05), (1.7, 0.16, 0.16), "WoodLight")
    d.box((0.95, 1.15, zf + 0.55), (0.08, 2.2, 1.0), "Wood", mlib.roty(-30))
    lantern(d, -1.2, 2.6, zf + 0.4, "LanternWarm", 0.7)
    # spiral steps around the trunk up to the deck
    steps = []
    n = int(DECK / 0.41)
    for k in range(n):
        a = math.pi / 2 + 0.8 + k * 0.52
        y = (k + 1) * DECK / n
        r_here = R0 * (1 - 0.55 * y / 11) + 0.65
        x, z = math.cos(a) * r_here, math.sin(a) * r_here
        d.box((x, y - 0.08, z), (1.3, 0.16, 0.95), "WoodLight", mlib.roty(-math.degrees(a)))
        d.cyl((x * 0.7, y - 0.6, z * 0.7), (x, y - 0.16, z), 0.06, 0.06, "Wood", n=5)
        steps.append({"type": "box", "x": round(x, 2), "z": round(z, 2), "w": 1.1, "d": 1.1, "h": round(y, 2),
                      "bottom": round(max(0.0, y - 0.4), 2), "note": "ступенька вокруг ствола"})
    # deck
    nn = 16
    for j in range(nn):
        a0, a1 = 2 * math.pi * j / nn, 2 * math.pi * (j + 1) / nn
        ri, ro = R0 * 0.5, 3.8
        P = [(ri * math.cos(a0), DECK, ri * math.sin(a0)), (ro * math.cos(a0), DECK, ro * math.sin(a0)),
             (ro * math.cos(a1), DECK, ro * math.sin(a1)), (ri * math.cos(a1), DECK, ri * math.sin(a1))]
        d.quad([(p[0], p[1] + 0.16, p[2]) for p in P][::-1], "WoodLight")
        d.quad(P, "Wood")
        if j % 2 == 0:
            x, z = (ro - 0.1) * math.cos(a0), (ro - 0.1) * math.sin(a0)
            d.box((x, DECK + 0.6, z), (0.12, 1.0, 0.12), "Wood")
    ring = [((3.7) * math.cos(a), DECK + 1.1, 3.7 * math.sin(a)) for a in np.linspace(0, 2 * math.pi, 25)[:-1]]
    d.tube(ring, [0.05] * len(ring), "Wood", n=5, closed=True)
    for (x, z) in ((2.8, 1.6), (-2.4, -2.2)):
        d.cyl((x, DECK, z), (x, DECK - 0.5, z), 0.012, 0.012, "Wood", n=4)
        lantern(d, x, DECK - 0.85, z, "LanternWarm", 0.6)
    # crown: big rounded clusters above and around the deck
    branches(t, 9.0, (0, 12.5, 0), 5.0, k=6, seed=12, r=0.35)
    crown(c, (0, 12.8, 0), 5.2, "Leaves", n=12, flat=0.7, seed=13)
    for a in range(5):
        aa = a * 2 * math.pi / 5 + 0.4
        crown(c, (4.0 * math.cos(aa), 9.2, 4.0 * math.sin(aa)), 1.9, "Leaves", n=3, flat=0.7, seed=20 + a, rows=5, cols=8)
    meta = {
        "colliders": [{"type": "circle", "x": 0, "z": 0, "r": R0, "h": DECK, "note": "ствол"},
                      {"type": "circle", "x": 0, "z": 0, "r": 3.8, "h": DECK + 0.16, "bottom": DECK - 0.1, "platform": True,
                       "note": "площадка"}] + steps,
        "hides": [{"x": 0, "z": 0, "r": 3.4, "y": DECK, "kind": "crown"},
                  {"x": 0, "z": R0 + 0.6, "r": 0.8, "kind": "hollow", "note": "в дупле-двери"}],
        "crownFade": {"r": 6.0, "bottom": DECK + 0.3},
        "note": "ступеньки 1,1 м — для детей и Безлика; большие герои (Тоторо, НэкоБус) залезают по своим умениям",
        "lights": [{"x": -1.2, "y": 2.6, "z": R0 + 0.4, "color": "#ffb060"}],
    }
    return export("tree_old_hollow.glb", {"Trunk": t, "Crown": c, "Deck": d}, meta)


def maple_big():
    t, c, d = Mesh(), Mesh(), Mesh()
    R0, DECK = 1.1, 6.0
    trunk(t, 9.5, R0, 0.5, lean=(0.3, 0.0), roots=6, seed=21, twist=0.2)
    # branch steps spiralling up
    steps = []
    n = int(DECK / 0.41)
    for k in range(n):
        a = -math.pi / 2 + k * 0.6
        y = (k + 1) * DECK / n
        r_here = R0 * (1 - 0.5 * y / 9.5)
        x0, z0 = math.cos(a) * r_here * 0.8, math.sin(a) * r_here * 0.8
        x1, z1 = math.cos(a) * (r_here + 1.1), math.sin(a) * (r_here + 1.1)
        d.tube([(x0, y - 0.12, z0), (x1, y - 0.12, z1)], [0.2, 0.16], "Bark", n=7)
        d.box(((x0 + x1) / 2 * 1.1, y - 0.02, (z0 + z1) / 2 * 1.1), (0.9, 0.06, 0.5), "WoodLight", mlib.roty(-math.degrees(a)))
        steps.append({"type": "box", "x": round(x1 * 0.8, 2), "z": round(z1 * 0.8, 2), "w": 1.0, "d": 1.0, "h": round(y, 2),
                      "bottom": round(max(0.0, y - 0.4), 2), "note": "ветка-ступенька"})
    nn = 16
    for j in range(nn):
        a0, a1 = 2 * math.pi * j / nn, 2 * math.pi * (j + 1) / nn
        ri, ro = R0 * 0.5, 3.2
        P = [(ri * math.cos(a0), DECK, ri * math.sin(a0)), (ro * math.cos(a0), DECK, ro * math.sin(a0)),
             (ro * math.cos(a1), DECK, ro * math.sin(a1)), (ri * math.cos(a1), DECK, ri * math.sin(a1))]
        d.quad([(p[0], p[1] + 0.16, p[2]) for p in P][::-1], "WoodLight")
        d.quad(P, "Wood")
    ring = [(3.1 * math.cos(a), DECK + 1.1, 3.1 * math.sin(a)) for a in np.linspace(0, 2 * math.pi, 25)[:-1]
            if not (-2.0 < a - 3 * math.pi / 2 < 0.5 and False)]
    d.tube(ring, [0.05] * len(ring), "Red", n=5, closed=True)
    for a in np.linspace(0, 2 * math.pi, 10)[:-1]:
        d.box((3.1 * math.cos(a), DECK + 0.6, 3.1 * math.sin(a)), (0.12, 1.0, 0.12), "Red")
    for (x, z) in ((2.2, 1.8), (-2.0, 1.2)):
        d.cyl((x, DECK, z), (x, DECK - 0.5, z), 0.012, 0.012, "Wood", n=4)
        lantern(d, x, DECK - 0.85, z, "LanternRed", 0.6)
    branches(t, 7.0, (0.3, 9.8, 0), 4.4, k=5, seed=22, r=0.28)
    crown(c, (0.3, 10.0, 0), 4.4, "Maple", n=12, flat=0.75, seed=23)
    for a in range(4):
        aa = a * math.pi / 2 + 0.5
        crown(c, (3.4 * math.cos(aa), 7.6, 3.4 * math.sin(aa)), 1.7, "Maple", n=3, flat=0.7, seed=30 + a, rows=5, cols=8)
    meta = {
        "colliders": [{"type": "circle", "x": 0, "z": 0, "r": R0, "h": DECK},
                      {"type": "circle", "x": 0, "z": 0, "r": 3.2, "h": DECK + 0.16, "bottom": DECK - 0.1, "platform": True}] + steps,
        "hides": [{"x": 0, "z": 0, "r": 2.8, "y": DECK, "kind": "crown"}],
        "crownFade": {"r": 5.0, "bottom": DECK + 0.3},
        "ropeBridgeAnchor": {"x": 0, "z": -3.2, "y": DECK + 0.16, "note": "сюда приходит подвесной мост (local -Z)"},
    }
    return export("tree_maple_big.glb", {"Trunk": t, "Crown": c, "Deck": d}, meta)


# ------------------------------------------------------------------ small bridges
def bridge_plank():
    m = Mesh()
    L, W = 10.0, 3.0
    zs = np.linspace(-L / 2, L / 2, 21)
    y = lambda z: 0.25 + 0.45 * (1 - (2 * z / L) ** 2)  # noqa: E731
    for a, b in zip(zs[:-1], zs[1:]):
        m.box((0, y((a + b) / 2) - 0.08, (a + b) / 2), (W, 0.16, (b - a) * 0.92), "WoodLight")
    for z in np.linspace(-L / 2 + 0.6, L / 2 - 0.6, 5):
        for sx in (-1, 1):
            m.box((sx * (W / 2 - 0.15), (y(z) - 1.8) / 2, z), (0.22, y(z) + 1.8, 0.22), "Wood")
            m.box((sx * (W / 2 - 0.05), y(z) + 0.45, z), (0.12, 0.9, 0.12), "Wood")
    for sx in (-1, 1):
        m.tube([(sx * (W / 2 - 0.05), y(z) + 0.9, z) for z in np.linspace(-L / 2 + 0.6, L / 2 - 0.6, 9)],
               [0.05] * 9, "Wood", n=5)
    meta = {"colliders": [{"type": "arch", "x": 0, "z": 0, "w": W, "d": L, "along": "z", "endY": 0.25, "peak": 0.7,
                           "thickness": 0.16}]}
    return export("bridge_plank.glb", {"Bridge": m}, meta)


def bridge_rope():
    m = Mesh()
    L, W, sag = 11.0, 1.8, 0.6
    zs = np.linspace(-L / 2, L / 2, 23)
    y = lambda z: -sag * (1 - (2 * z / L) ** 2)  # noqa: E731
    for z in zs:
        m.box((0, y(z) - 0.05, z), (W, 0.1, 0.38), "WoodLight")
    for sx in (-1, 1):
        for h in (0.0, 1.0):
            m.tube([(sx * W / 2, y(z) + h + (0.1 if h else 0.0), z) for z in zs], [0.035] * len(zs), "Hay", n=4)
        for z in zs[::2]:
            m.cyl((sx * W / 2, y(z), z), (sx * W / 2, y(z) + 1.1, z), 0.02, 0.02, "Hay", n=4)
    meta = {"colliders": [{"type": "sag", "x": 0, "z": 0, "w": W, "d": L, "along": "z", "sag": sag, "thickness": 0.1,
                           "note": "верх = height + (-sag * (1 - (2z/d)^2)); перила по краям 1 м"}],
            "note": "ставить на высоту площадок (y = height из layout)"}
    return export("bridge_rope.glb", {"Bridge": m}, meta)


def walkway():
    m = Mesh()
    L, W = 6.0, 1.8
    for z in np.linspace(-L / 2 + 0.2, L / 2 - 0.2, 14):
        m.box((0, -0.06, z), (W, 0.12, 0.38), "WoodLight")
    for sx in (-1, 1):
        m.box((sx * W / 2, -0.15, 0), (0.14, 0.2, L), "Wood")
        for z in (-L / 2 + 0.2, 0, L / 2 - 0.2):
            m.box((sx * W / 2, 0.5, z), (0.1, 1.0, 0.1), "Wood")
        m.box((sx * W / 2, 1.0, 0), (0.08, 0.08, L), "Wood")
    meta = {"colliders": [{"type": "box", "x": 0, "z": 0, "w": W, "d": L, "h": 0.0, "bottom": -0.2, "relative": "height"}]}
    return export("walkway.glb", {"Bridge": m}, meta)


BUILD = {f.__name__: f for f in (sakura, maple, willow, pine_small, forest_tree, bushes, old_hollow, maple_big,
                                 bridge_plank, bridge_rope, walkway)}

if __name__ == "__main__":
    for n in (sys.argv[1:] or list(BUILD)):
        BUILD[n]()
