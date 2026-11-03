"""bridge_red.glb — humped red bridge along Z (span 15 m, width 5 m), lanterns under the span,
mossy stones in the water below (hiding place). Water surface y = 0.06, river bed about -1.8."""
import math
import os
import sys

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mlib  # noqa: E402
from mlib import Mesh  # noqa: E402

L = 15.0
HALF = L / 2
WID = 5.0
PEAK = 2.4
END_Y = 0.25
DECK_T = 0.28
STEPS = 30


def deck_y(z):
    t = min(abs(z) / HALF, 1.0)
    return END_Y + (PEAK - END_Y) * (1 - t * t)


def build(b, under):
    zs = np.linspace(-HALF, HALF, STEPS + 1)
    hx = WID / 2
    # deck surface: planks across the width (UV along z gives plank stripes across)
    for a, c in zip(zs[:-1], zs[1:]):
        ya, yc = deck_y(a), deck_y(c)
        top = [(-hx, ya, a), (-hx, yc, c), (hx, yc, c), (hx, ya, a)]
        sc = mlib.SCALE["WoodLight"]
        uv = [(a / 0.9, 0), (c / 0.9, 0), (c / 0.9, WID / sc), (a / 0.9, WID / sc)]
        b.quad(top, "WoodLight", uv)
        bot = [(-hx, ya - DECK_T, a), (hx, ya - DECK_T, a), (hx, yc - DECK_T, c), (-hx, yc - DECK_T, c)]
        b.quad(bot, "Wood")
    # side girders (red, curved) with gold caps
    for sx in (-1, 1):
        x = sx * (hx + 0.06)
        for a, c in zip(zs[:-1], zs[1:]):
            ya, yc = deck_y(a), deck_y(c)
            q = [(x, ya + 0.08, a), (x, ya - 0.55, a), (x, yc - 0.55, c), (x, yc + 0.08, c)]
            b.quad(q if sx > 0 else q[::-1], "Red")
            q2 = [(x - sx * 0.14, ya - 0.55, a), (x - sx * 0.14, ya + 0.08, a), (x - sx * 0.14, yc + 0.08, c),
                  (x - sx * 0.14, yc - 0.55, c)]
            b.quad(q2 if sx > 0 else q2[::-1], "Red")
            b.quad([(x, ya - 0.55, a), (x - sx * 0.14, ya - 0.55, a), (x - sx * 0.14, yc - 0.55, c), (x, yc - 0.55, c)][::(1 if sx > 0 else -1)], "Red")
        for z in np.linspace(-HALF + 1.2, HALF - 1.2, 6):
            y = deck_y(z)
            b.box((x + sx * 0.03, y - 0.22, z), (0.04, 0.3, 0.42), "Gold")
    # railings: posts, top rail, middle rail, onion caps on the end posts
    post_z = np.linspace(-HALF + 0.3, HALF - 0.3, 11)
    for sx in (-1, 1):
        x = sx * (hx - 0.05)
        tops, mids = [], []
        for i, z in enumerate(post_z):
            y = deck_y(z)
            end = i in (0, len(post_z) - 1)
            s = 0.26 if end else 0.17
            h = 1.35 if end else 1.15
            b.box((x, y + h / 2, z), (s, h, s), "Red")
            if end:
                b.lathe((x, y + h, z), [(0, 0), (0.16, 0.02), (0.2, 0.12), (0.14, 0.24), (0.05, 0.36), (0, 0.46)],
                        "Gold", n=10)
            else:
                b.box((x, y + h + 0.03, z), (0.2, 0.06, 0.2), "Gold")
            tops.append((x, y + 1.08, z))
            mids.append((x, y + 0.55, z))
        b.tube(tops, [0.07] * len(tops), "Red", n=7)
        b.tube(mids, [0.05] * len(mids), "Red", n=6)
    # piers into the water with cross beams
    for z in (-4.6, 0.0, 4.6):
        y = deck_y(z) - DECK_T
        for sx in (-1, 1):
            b.box((sx * (hx - 0.35), (y - 1.8) / 2, z), (0.34, y + 1.8, 0.34), "Red")
        b.box((0, y - 0.35, z), (WID - 0.2, 0.22, 0.24), "Red")
        b.box((0, 0.15, z), (WID - 0.3, 0.18, 0.2), "Red")
    # lanterns hanging under both girders
    for sx in (-1, 1):
        x = sx * (hx - 0.25)
        for z in np.linspace(-5.4, 5.4, 9):
            y = deck_y(z) - DECK_T
            ly = y - 0.75
            if ly < 0.55:
                continue
            under.cyl((x, y, z), (x, ly + 0.3, z), 0.01, 0.01, "Wood", n=4)
            under.lathe((x, ly, z), [(0, -0.3), (0.13, -0.27), (0.2, -0.1), (0.2, 0.1), (0.13, 0.27), (0, 0.3)],
                        "LanternWarm", n=8)
            under.cyl((x, ly + 0.28, z), (x, ly + 0.34, z), 0.1, 0.1, "Wood", n=8, smooth=False)
    # stone landings + steps at both ends
    for sz in (-1, 1):
        b.box((0, 0.1, sz * (HALF + 0.9)), (WID + 0.8, 0.2, 1.8), "Stone")
        b.box((0, 0.05, sz * (HALF + 2.0)), (WID + 0.4, 0.1, 0.6), "Stone")
        for sx in (-1, 1):
            b.box((sx * (WID / 2 + 0.8), 0.45, sz * (HALF + 0.9)), (0.7, 0.9, 0.7), "Stone")
    # stepping stones in the water under the bridge (hiding place)
    r = np.random.default_rng(5)
    for (x, z, s) in [(-1.2, -1.5, 1.0), (0.8, -0.2, 1.1), (-0.6, 1.2, 0.9), (1.4, 2.4, 0.8), (-1.6, 2.9, 0.75),
                      (0.2, -2.9, 0.85), (2.6, -1.0, 0.7), (-2.8, 0.6, 0.7)]:
        under.blob((x, 0.02, z), (0.7 * s, 0.36, 0.6 * s), "MossStone", rows=5, cols=9, rough=0.15,
                   seed=int(r.integers(0, 9999)), normal_center=(x, -0.6, z))
    # reeds near the stones
    for (x, z) in [(3.0, 3.2), (-3.1, -2.6), (2.8, -3.4)]:
        for k in range(5):
            a = k * 1.3
            under.cyl((x + 0.15 * math.cos(a), -0.2, z + 0.15 * math.sin(a)),
                      (x + 0.35 * math.cos(a), 1.2 + 0.2 * k % 3, z + 0.35 * math.sin(a)), 0.03, 0.005, "Needles", n=4)


def meta():
    return {
        "colliders": [
            {"type": "arch", "x": 0, "z": 0, "w": WID, "d": L, "along": "z", "endY": END_Y, "peak": PEAK,
             "thickness": DECK_T,
             "formula": "top(z) = endY + (peak - endY) * (1 - (z / (d/2))^2); снизу пусто (bottom = top - thickness) — под мостом проходят"},
            {"type": "box", "x": -(WID / 2 + 0.05), "z": 0, "w": 0.2, "d": L, "h": 1.2, "relative": "deck", "note": "перила"},
            {"type": "box", "x": (WID / 2 + 0.05), "z": 0, "w": 0.2, "d": L, "h": 1.2, "relative": "deck", "note": "перила"},
            {"type": "box", "x": 0, "z": -(HALF + 0.9), "w": WID + 0.8, "d": 1.8, "h": 0.2},
            {"type": "box", "x": 0, "z": HALF + 0.9, "w": WID + 0.8, "d": 1.8, "h": 0.2},
            {"type": "circle", "x": -1.2, "z": -1.5, "r": 0.6, "h": 0.28, "note": "камни под мостом — на них стоят"},
            {"type": "circle", "x": 0.8, "z": -0.2, "r": 0.65, "h": 0.28},
            {"type": "circle", "x": -0.6, "z": 1.2, "r": 0.55, "h": 0.28},
            {"type": "circle", "x": 1.4, "z": 2.4, "r": 0.5, "h": 0.28},
            {"type": "circle", "x": 0.2, "z": -2.9, "r": 0.5, "h": 0.28},
        ],
        "hides": [{"x": 0, "z": 0, "r": 2.6, "y": 0.28, "kind": "under_bridge", "note": "под пролётом на камнях"}],
        "water": {"level": 0.06, "bottom": -1.8, "note": "река проходит поперёк моста (вдоль x)"},
        "lights": [{"x": 0, "y": 1.2, "z": 0, "color": "#ffc070"}],
    }


if __name__ == "__main__":
    mlib.reset()
    b, u = Mesh(), Mesh()
    build(b, u)
    ob = mlib.to_object("Bridge", b)
    mlib.bake_ao(ob, "bridge_red", size=512)
    mlib.to_object("UnderBridge", u)
    mlib.export("bridge_red.glb", meta())
