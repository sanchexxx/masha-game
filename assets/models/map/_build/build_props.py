"""props.glb — small things, one node per kind (clone a node by name and place it).
props.json lists colliders / hiding places / lights for every node in local coords."""
import math
import os
import sys

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mlib  # noqa: E402
from mlib import Mesh  # noqa: E402
from build_tea import lantern, stone_lantern, plant_pot  # noqa: E402

P, META = {}, {}


def prop(name, col=None, hide=None, light=None, note=None):
    def deco(fn):
        m = Mesh()
        fn(m)
        P[name] = m
        META[name] = {k: v for k, v in (("collider", col), ("hide", hide), ("light", light), ("note", note)) if v}
        return fn
    return deco


@prop("StoneLantern", {"type": "circle", "r": 0.5, "h": 2.0}, light={"y": 1.6, "color": "#ffb060"})
def _(m):
    stone_lantern(m, 0, 0, 1.25)


@prop("PostLantern", {"type": "circle", "r": 0.2, "h": 2.6}, light={"y": 2.3, "color": "#ffb060"})
def _(m):
    m.box((0, 1.2, 0), (0.16, 2.4, 0.16), "Wood")
    m.box((0, 2.35, 0), (0.42, 0.5, 0.42), "LanternWarm")
    m.box((0, 2.65, 0), (0.56, 0.1, 0.56), "Roof")
    m.box((0, 0.05, 0), (0.4, 0.1, 0.4), "Stone")


@prop("Crate", {"type": "box", "w": 1.0, "d": 1.0, "h": 1.0})
def _(m):
    m.box((0, 0.5, 0), (1.0, 1.0, 1.0), "WoodLight")
    for s in (-1, 1):
        for a in (0, 90):
            R = mlib.roty(a)
            m.box(tuple(R @ np.array([0, 0.5, s * 0.51])), (1.02, 0.12, 0.03) if a == 0 else (0.03, 0.12, 1.02), "Wood")
            m.box(tuple(R @ np.array([0, 0.5, s * 0.51])), (0.12, 1.0, 0.03) if a == 0 else (0.03, 1.0, 0.12), "Wood")


@prop("Barrel", {"type": "circle", "r": 0.45, "h": 0.95})
def _(m):
    m.lathe((0, 0, 0), [(0, 0), (0.38, 0), (0.46, 0.47), (0.38, 0.95), (0, 0.95)], "Wood", n=12)
    for y in (0.22, 0.72):
        m.cyl((0, y, 0), (0, y + 0.06, 0), 0.445, 0.445, "Dark", n=12, cap0=False, cap1=False)


@prop("Pumpkin", {"type": "circle", "r": 0.5, "h": 0.6})
def _(m):
    m.blob((0, 0.3, 0), (0.48, 0.32, 0.48), "LanternRed", rows=5, cols=10, rough=0.12, seed=1, normal_center=(0, 0.1, 0))
    m.cyl((0, 0.55, 0), (0.05, 0.75, 0.02), 0.05, 0.035, "Leaves", n=5)


@prop("Fence", {"type": "box", "w": 3.0, "d": 0.2, "h": 1.2}, note="3 м вдоль x")
def _(m):
    for x in (-1.45, 0, 1.45):
        m.box((x, 0.6, 0), (0.14, 1.2, 0.14), "Wood")
    for y in (0.45, 0.95):
        m.box((0, y, 0), (3.0, 0.08, 0.06), "Wood")


@prop("BambooFence", {"type": "box", "w": 3.0, "d": 0.2, "h": 1.3}, note="3 м вдоль x")
def _(m):
    for k in range(13):
        x = -1.45 + k * 0.242
        m.cyl((x, 0, 0), (x, 1.25 + 0.05 * (k % 2), 0), 0.05, 0.05, "Bamboo", n=5)
    for y in (0.4, 0.95):
        m.box((0, y, 0.06), (3.0, 0.06, 0.05), "Wood")


@prop("Signpost", {"type": "circle", "r": 0.15, "h": 2.2})
def _(m):
    m.box((0, 1.1, 0), (0.12, 2.2, 0.12), "Wood")
    for k, (a, y) in enumerate(((25, 1.9), (-150, 1.5), (80, 1.15))):
        R = mlib.roty(a)
        m.box(tuple(R @ np.array([0.45, y, 0])), (0.9, 0.22, 0.05), "WoodLight", R)


@prop("BambooFountain", {"type": "circle", "r": 0.8, "h": 0.6})
def _(m):
    m.lathe((0, 0, 0), [(0, 0), (0.75, 0), (0.8, 0.35), (0.6, 0.4), (0, 0.4)], "MossStone", n=10)
    m.cyl((0, 0.36, 0), (0, 0.38, 0), 0.58, 0.58, "Water", n=10)
    m.cyl((0.5, 0, 0.4), (0.5, 1.1, 0.4), 0.06, 0.06, "Bamboo", n=5)
    m.cyl((-0.5, 0, 0.4), (-0.5, 1.1, 0.4), 0.06, 0.06, "Bamboo", n=5)
    m.cyl((-0.1, 1.0, 0.4), (0.9, 0.55, 0.4), 0.07, 0.06, "Bamboo", n=6)
    m.cyl((-0.7, 0.95, 0.0), (0.0, 0.85, 0.3), 0.05, 0.05, "Bamboo", n=6)


@prop("Bench", {"type": "box", "w": 2.0, "d": 0.6, "h": 0.5})
def _(m):
    m.box((0, 0.48, 0), (2.0, 0.08, 0.55), "WoodLight")
    for x in (-0.8, 0.8):
        m.box((x, 0.22, 0), (0.12, 0.44, 0.5), "Wood")


@prop("PotPlant", {"type": "circle", "r": 0.35, "h": 0.5})
def _(m):
    plant_pot(m, 0, 0, 1.0, "Leaves")


@prop("PotFlower", {"type": "circle", "r": 0.35, "h": 0.5})
def _(m):
    plant_pot(m, 0, 0, 1.0, "Sakura")


for _k, (_r, _s) in enumerate([((1.0, 0.6, 0.8), 1), ((0.6, 0.45, 0.7), 2), ((1.6, 1.0, 1.3), 3)]):
    def _mk(r=_r, s=_s, k=_k):
        @prop(f"Rock{k + 1}", {"type": "circle", "r": round(max(r[0], r[2]) * 0.85, 2), "h": round(r[1] * 0.9, 2)})
        def _(m):
            m.blob((0, r[1] * 0.35, 0), r, "MossStone", rows=6, cols=9, rough=0.18, seed=s * 11)
    _mk()


@prop("FlowerPatch", note="не мешает ходить")
def _(m):
    rng = np.random.default_rng(3)
    for k in range(16):
        a, r = rng.uniform(0, 2 * math.pi), rng.uniform(0, 1.0)
        x, z = math.cos(a) * r, math.sin(a) * r
        h = rng.uniform(0.25, 0.45)
        m.cyl((x, 0, z), (x, h, z), 0.012, 0.012, "Leaves", n=3, cap0=False, cap1=False)
        m.blob((x, h, z), (0.08, 0.05, 0.08), ["Sakura", "LanternWarm", "Plaster"][k % 3], rows=3, cols=5, rough=0.0,
               seed=k)


@prop("GrassTuft", note="не мешает ходить")
def _(m):
    for k in range(9):
        a = k * 2 * math.pi / 9
        x, z = 0.15 * math.cos(a), 0.15 * math.sin(a)
        tx, tz = x + 0.35 * math.cos(a), z + 0.35 * math.sin(a)
        m.quad([(x - 0.04, 0, z), (x + 0.04, 0, z), (tx, 0.55 + 0.1 * (k % 3), tz), (tx, 0.55 + 0.1 * (k % 3), tz)],
               "Leaves", [(0, 0), (0.1, 0), (0.05, 0.5), (0.05, 0.5)])


@prop("Torii", {"type": "pillars", "x": [-2.2, 2.2], "r": 0.3, "h": 5.4}, note="проход 4 м")
def _(m):
    for x in (-2.2, 2.2):
        m.cyl((x, 0, 0), (x, 5.0, 0), 0.26, 0.22, "Red", n=10)
        m.cyl((x, 0, 0), (x, 0.5, 0), 0.32, 0.32, "Dark", n=10)
    m.box((0, 4.2, 0), (5.2, 0.3, 0.3), "Red")
    m.box((0, 5.15, 0), (6.6, 0.35, 0.5), "Dark")
    m.box((0, 4.9, 0), (6.0, 0.3, 0.4), "Red")
    m.box((0, 4.6, 0.02), (0.4, 0.7, 0.32), "Dark")


@prop("LanternString", note="верёвка 10 м вдоль x на высоте 4,6 м; тянуть scale.x под нужную длину")
def _(m):
    pts = [(x, 4.6 - 0.6 * (1 - (x / 5) ** 2), 0) for x in np.linspace(-5, 5, 11)]
    m.tube(pts, [0.02] * len(pts), "Dark", n=4)
    for k, (x, y, z) in enumerate(pts[1:-1]):
        m.cyl((x, y, z), (x, y - 0.25, z), 0.01, 0.01, "Dark", n=3)
        lantern(m, x, y - 0.55, z, "LanternRed" if k % 2 else "LanternWarm", 0.55)


@prop("Scarecrow", {"type": "circle", "r": 0.2, "h": 2.4}, hide={"r": 0.8, "kind": "scarecrow"})
def _(m):
    m.box((0, 1.2, 0), (0.12, 2.4, 0.12), "Wood")
    m.box((0, 1.7, 0), (1.6, 0.1, 0.1), "Wood")
    m.box((0, 1.45, 0), (0.7, 0.8, 0.35), "Cloth")
    m.blob((0, 2.2, 0), (0.24, 0.26, 0.24), "Hay", rows=5, cols=8, rough=0.05, seed=2)
    m.lathe((0, 2.35, 0), [(0, 0.35), (0.25, 0.12), (0.6, 0.0), (0, 0.0)], "Hay", n=10)


@prop("StrawHut", {"type": "circle", "r": 1.9, "h": 3.0, "door": "+z"}, hide={"r": 1.4, "kind": "hut"},
      note="круглый шалаш у тыквенного поля, вход спереди")
def _(m):
    n = 12
    for k in range(n):
        a = 2 * math.pi * k / n
        if abs(math.atan2(math.sin(a - math.pi / 2), math.cos(a - math.pi / 2))) < 0.5:
            continue
        m.box((1.9 * math.cos(a), 1.0, 1.9 * math.sin(a)), (0.9, 2.0, 0.15), "Hay", mlib.roty(-math.degrees(a) + 90))
    m.lathe((0, 1.9, 0), [(0, 1.8), (0.5, 1.4), (2.6, 0.0), (2.3, -0.1), (0, 0.6)], "Hay", n=14)


@prop("Leaves", note="опавшие листья, плоско")
def _(m):
    rng = np.random.default_rng(8)
    for k in range(18):
        a, r = rng.uniform(0, 2 * math.pi), rng.uniform(0, 1.4)
        x, z = math.cos(a) * r, math.sin(a) * r
        s = rng.uniform(0.08, 0.14)
        R = mlib.roty(rng.uniform(0, 360))
        pts = [tuple(R @ np.array(p) + [x, 0.02, z]) for p in ((-s, 0, 0), (0, 0, s * 1.3), (s, 0, 0), (0, 0, -s * 1.3))]
        m.quad(pts[::-1], ["Maple", "Hay", "LanternRed"][k % 3])


if __name__ == "__main__":
    mlib.reset()
    for name, mesh in P.items():
        mlib.to_object(name, mesh)
    mlib.export("props.glb", {"nodes": META, "note": "у каждого узла начало координат на земле в центре"})
