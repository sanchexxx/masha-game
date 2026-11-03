"""All village buildings except the tea house (that one is build_tea.py).
Run: python3 build_houses.py [name ...]"""
import math
import os
import sys

import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mlib  # noqa: E402
from mlib import Mesh  # noqa: E402
from bhouse import House, STORY, T  # noqa: E402
from build_tea import lantern, stone_lantern, plant_pot  # noqa: E402


def cap_walls(h, level, mat="Wood"):
    y = h.y(level)
    X, Z = h.W / 2, h.D / 2
    for (cx, cz, w, d) in ((0, Z, h.W + 0.3, 0.34), (0, -Z, h.W + 0.3, 0.34), (X, 0, 0.34, h.D), (-X, 0, 0.34, h.D)):
        h.m.box((cx, y + 0.3, cz), (w, 0.6, d), mat)


def eave_lanterns(h, xs, z, y, mat="LanternRed"):
    for x in xs:
        h.m.cyl((x, y + 0.75, z), (x, y + 0.4, z), 0.015, 0.015, "Wood", n=4)
        lantern(h.m, x, y, z, mat, 0.9)


def save(name, h, node="Building", **extra):
    mlib.reset()
    ob = mlib.to_object(node, h.m)
    mlib.bake_ao(ob, name.replace(".glb", ""))
    for k, (mesh) in h.nodes.items():
        mlib.to_object(k, mesh)
    return mlib.export(name, h.meta(**extra))


# ------------------------------------------------------------------------------------------------
def house_small():
    h = House(8, 6)
    h.foundation()
    h.floor_surface(0)
    h.outer_walls(0, front=[(0.6, 2.4, "window"), (2.7, 5.3, "door"), (5.7, 7.4, "window")],
                  back=[(1.0, 3.4, "door"), (4.6, 7.0, "window")],
                  left=[(1.8, 4.2, "window")], right=[(1.8, 4.2, "window")])
    cap_walls(h, 1)
    h.hip(0, 0, 8, 6, h.y(1) - 0.3, 2.3, over=1.1)
    h.futons(-2.8, -1.9)
    h.chest(2.9, -2.2)
    h.table(0.4, -0.4)
    h.andon(-3.3, 2.2)
    h.ceiling_lamp(0, 0.5)
    eave_lanterns(h, (-1.8, 1.8), 3.75, 3.6)
    plant_pot(h.m, -4.6, 3.6, 0.9)
    plant_pot(h.m, 4.6, 3.6, 0.8, "Sakura")
    return save("house_small.glb", h)


def shop():
    h = House(10, 7)
    h.foundation()
    h.floor_surface(0, "WoodLight")
    h.outer_walls(0, front=[(0.4, 3.3, "open"), (3.7, 6.3, "door"), (6.7, 9.6, "open")],
                  back=[(1.2, 3.6, "door")], left=[(2.2, 4.8, "window")], right=[(2.2, 4.8, "window")])
    cap_walls(h, 1)
    Z = h.D / 2
    y0 = h.y(0)
    # counters in the open front gaps + goods
    for (a, b) in ((-4.6, -1.7), (1.7, 4.6)):
        cx = (a + b) / 2
        h.m.box((cx, y0 + 0.55, Z - 0.35), (b - a, 1.1, 0.6), "Wood", top_mat="WoodLight")
        h.box_col(cx, Z - 0.35, b - a, 0.6, y0 + 1.1, note="прилавок")
        for k in range(4):
            x = a + 0.4 + k * (b - a - 0.8) / 3
            mat = ["Red", "Gold", "Stone", "LanternRed"][k]
            h.m.lathe((x, y0 + 1.1, Z - 0.35), [(0, 0), (0.18, 0), (0.24, 0.2), (0.12, 0.38), (0, 0.4)], mat, n=8)
        # awning over the counter
        h.m.quad([(a - 0.2, y0 + 4.1, Z + 0.1), (b + 0.2, y0 + 4.1, Z + 0.1), (b + 0.2, y0 + 3.5, Z + 1.3),
                  (a - 0.2, y0 + 3.5, Z + 1.3)], "Roof")
        h.m.quad([(a - 0.2, y0 + 3.5, Z + 1.3), (b + 0.2, y0 + 3.5, Z + 1.3), (b + 0.2, y0 + 4.1, Z + 0.1),
                  (a - 0.2, y0 + 4.1, Z + 0.1)], "Wood")
    # shelves along the back wall with pots and boxes
    for x0 in (-3.8, 2.2):
        for lvl in range(3):
            yy = y0 + 0.6 + lvl * 0.9
            h.m.box((x0 + 0.8, yy, -Z + 0.5), (1.8, 0.06, 0.6), "Wood")
            for k in range(3):
                h.m.box((x0 + 0.2 + k * 0.6, yy + 0.2, -Z + 0.5), (0.36, 0.36, 0.36),
                        ["Red", "Hay", "Cloth"][(k + lvl) % 3])
        for dx in (0, 1.6):
            h.m.box((x0 + dx, y0 + 1.5, -Z + 0.5), (0.08, 3.0, 0.6), "Wood")
        h.box_col(x0 + 0.8, -Z + 0.5, 1.8, 0.6, y0 + 3.0, note="полки")
    h.barrels(-3.8, 0.6)
    h.crates(2.4, 0.3)
    h.ceiling_lamp(0, 0)
    # banner cloth by the door
    h.m.quad([(-1.3, y0 + 4.05, Z + 0.17), (1.3, y0 + 4.05, Z + 0.17), (1.3, y0 + 3.3, Z + 0.17),
              (-1.3, y0 + 3.3, Z + 0.17)], "Cloth", [(0, 1), (1, 1), (1, 0), (0, 0)])
    h.hip(0, 0, 10, 7, h.y(1) - 0.3, 2.5, over=1.1)
    eave_lanterns(h, (-5.2, 5.2), Z + 0.9, 3.7)
    stone_lantern(h.m, 6.0, Z + 1.8, 1.1)
    return save("house_shop.glb", h)


def house_2floor():
    h = House(10, 8, floors=2)
    h.foundation()
    h.floor_surface(0, "WoodLight")
    h.outer_walls(0, front=[(0.6, 3.0, "window"), (3.7, 6.3, "door"), (7.0, 9.4, "window")],
                  back=[(1.2, 4.0, "window")], left=[(2.4, 5.4, "window")],
                  right=[(2.2, 4.8, "door")])
    hole = h.stairs(0, -4.62, -h.D / 2 + T + 1.3, +1)
    h.slab(1, hole, "Tatami")
    h.outer_walls(1, front=[(0.6, 3.0, "window"), (3.7, 6.3, "door"), (7.0, 9.4, "window")],
                  back=[(1.0, 4.0, "window"), (6.0, 9.0, "window")], left=[(2.4, 5.4, "window")],
                  right=[(2.4, 5.4, "window")])
    cap_walls(h, 2)
    h.balcony(1, -5.0, 5.0, 1.8)
    # outdoor stairs on the west side up to the balcony (second way up/down)
    xs = -h.W / 2 - 1.3
    z_end = h.outer_stairs(xs, -h.D / 2 - 0.2, +1, h.y(1))
    zl0, zl1 = min(z_end, h.D / 2), h.D / 2 + 1.8
    h.m.box((xs + 0.3, h.y(1) - 0.1, (zl0 + zl1) / 2), (2.6, 0.2, zl1 - zl0), "WoodLight")
    h.box_col(xs + 0.3, (zl0 + zl1) / 2, 2.6, zl1 - zl0, h.y(1), h.y(1) - 0.2, "площадка лестницы")
    h.hip(0, 0, 10, 8, h.y(2) - 0.3, 2.6, over=1.3)
    # furniture
    h.table(2.0, 1.0)
    h.tansu(4.1, 2.6, face=(-1, 0))
    h.barrels(-3.8, 2.2)
    h.ceiling_lamp(0, 1.5)
    h.futons(-3.6, 1.6, level=1)
    h.screen(1.0, 1.4, level=1)
    h.chest(3.6, -2.9, level=1)
    h.andon(3.9, 2.8, level=1)
    h.ceiling_lamp(-1.0, 0.8, level=1)
    eave_lanterns(h, (-4.0, 0.0, 4.0), h.D / 2 + 1.7, h.y(1) + 2.6, "LanternRed")
    plant_pot(h.m, 5.8, 4.4, 1.0, "Sakura")
    return save("house_2floor.glb", h)


def pagoda():
    h = House(10, 10, floors=2, base=0.6)
    m = h.m
    m.box((0, 0.3, 0), (11.6, 0.6, 11.6), "Stone")
    h.box_col(0, 0, 11.6, 11.6, 0.6, note="каменное основание")
    for k in range(2):
        m.box((0, 0.15 + k * 0.15 - 0.075, 6.1 + 0.4 * (1 - k)), (4.0, 0.3 * (k + 1) / 2 + 0.15, 0.6), "Stone")
    h.floor_surface(0, "WoodLight")
    h.outer_walls(0, front=[(3.5, 6.5, "door")], back=[(0.8, 3.0, "window"), (7.0, 9.2, "window")],
                  left=[(6.5, 9.0, "door"), (1.2, 4.0, "window")], right=[(6.5, 9.0, "door"), (1.2, 4.0, "window")],
                  lower="Red")
    hole = h.stairs(0, -4.62, -h.D / 2 + T + 1.3, +1)
    h.slab(1, hole, "WoodLight")
    h.outer_walls(1, front=[(1.0, 3.0, "window"), (3.5, 6.5, "door"), (7.0, 9.0, "window")],
                  back=[(1.0, 4.0, "window"), (6.0, 9.0, "window")],
                  left=[(2.0, 4.5, "window"), (5.5, 8.0, "window")], right=[(2.0, 4.5, "window"), (5.5, 8.0, "window")],
                  lower="Red")
    cap_walls(h, 2, "Red")
    # first tier: wide skirt roof between the storeys
    h.hip(0, 0, 10, 10, h.y(1) - 0.6, 0, over=2.0, inner=(10.2, 10.2), y_inner=h.y(1) + 0.4, curve=0.45)
    # top roof + spire
    top = h.hip(0, 0, 10, 10, h.y(2) - 0.4, 3.0, over=1.8, curve=0.5)
    m.cyl((0, top, 0), (0, top + 4.0, 0), 0.12, 0.08, "Gold", n=8)
    for k in range(5):
        y = top + 1.0 + k * 0.55
        m.cyl((0, y, 0), (0, y + 0.12, 0), 0.4 - k * 0.05, 0.4 - k * 0.05, "Gold", n=10)
    m.lathe((0, top + 4.0, 0), [(0, 0), (0.25, 0.1), (0.3, 0.3), (0, 0.65)], "Gold", n=10)
    # red rails around the upper storey (veranda look)
    for ang in range(4):
        R = mlib.roty(90 * ang)
        a = R @ np.array([-5.6, h.y(1) + 1.0, 5.6])
        b = R @ np.array([5.6, h.y(1) + 1.0, 5.6])
    # lanterns hanging from the tier corners, komainu by the steps
    for sx in (-1, 1):
        for sz in (-1, 1):
            lantern(m, sx * 6.4, h.y(1) - 1.2, sz * 6.4, "LanternRed", 0.9)
        m.box((sx * 2.6, 0.9, 6.6), (0.9, 0.6, 0.9), "Stone")
        m.blob((sx * 2.6, 1.6, 6.6), (0.42, 0.55, 0.45), "Stone", rows=5, cols=8, rough=0.15, seed=3 + sx)
        m.blob((sx * 2.6, 2.25, 6.75), (0.3, 0.3, 0.3), "Stone", rows=4, cols=8, rough=0.1, seed=7 + sx)
        h.box_col(sx * 2.6, 6.6, 0.9, 0.9, 2.5, note="львы-хранители")
        stone_lantern(m, sx * 4.6, 7.2, 1.2)
    # inside: altar, lamps, screens
    y0 = h.y(0)
    m.box((0, y0 + 0.6, -3.9), (3.0, 1.2, 1.0), "Red")
    m.box((0, y0 + 1.25, -3.9), (3.2, 0.1, 1.2), "Gold")
    for dx in (-1, 0, 1):
        m.lathe((dx * 0.9, y0 + 1.3, -3.9), [(0, 0), (0.15, 0), (0.2, 0.3), (0, 0.45)], "Gold", n=8)
    h.box_col(0, -3.9, 3.0, 1.0, y0 + 1.3, note="алтарь")
    h.hide(0, -2.8, 0.9, "altar", note="за алтарём")
    h.andon(-3.8, 3.6)
    h.andon(3.8, 3.6)
    h.ceiling_lamp(0, 1.0)
    h.screen(2.5, 1.0, level=1)
    h.barrels(-3.5, 2.8, level=1)
    h.ceiling_lamp(0, 1.0, level=1)
    return save("house_pagoda.glb", h)


def water_wheel(cx, cy, cz, R=2.4):
    w = Mesh()
    for dz in (-0.35, 0.35):
        ring = [(cx + R * math.cos(a), cy + R * math.sin(a), cz + dz) for a in np.linspace(0, 2 * math.pi, 25)[:-1]]
        w.tube(ring, [0.08] * len(ring), "Wood", n=6, closed=True, up=(0, 0, 1))
    for k in range(8):
        a = k * math.pi / 4
        for dz in (-0.35, 0.35):
            w.cyl((cx, cy, cz + dz), (cx + R * math.cos(a), cy + R * math.sin(a), cz + dz), 0.07, 0.07, "Wood", n=5)
    for k in range(16):
        a = k * math.pi / 8
        px, py = cx + (R + 0.05) * math.cos(a), cy + (R + 0.05) * math.sin(a)
        Rm = mlib.rotz(math.degrees(a))
        w.box((px, py, cz), (0.6, 0.06, 0.9), "WoodLight", Rm)
    w.cyl((cx, cy, cz - 1.2), (cx, cy, cz + 0.6), 0.16, 0.16, "Dark", n=8)
    return w


def bath():
    h = House(13, 10)
    h.foundation()
    h.floor_surface(0, "WoodLight")
    h.outer_walls(0, front=[(0.8, 4.0, "window"), (5.2, 7.8, "door"), (9.0, 12.2, "window")],
                  back=[(2.0, 5.0, "window"), (8.0, 11.0, "window")],
                  left=[(5.5, 8.0, "door"), (1.5, 4.5, "window")], right=[(3.0, 6.5, "window")])
    cap_walls(h, 1)
    m = h.m
    y0 = h.y(0)
    Z = h.D / 2
    # red gate frame + noren at the entrance
    for sx in (-1, 1):
        m.box((sx * 1.6, 2.4, Z + 0.9), (0.32, 4.8, 0.32), "Red")
    m.box((0, 4.7, Z + 0.9), (4.4, 0.32, 0.4), "Red")
    m.box((0, 5.15, Z + 0.9), (5.0, 0.22, 0.5), "Dark")
    for k in (-1, 0, 1):
        m.quad([(k * 0.9 - 0.42, 4.4, Z + 0.95), (k * 0.9 + 0.42, 4.4, Z + 0.95), (k * 0.9 + 0.42, 3.4, Z + 0.95),
                (k * 0.9 - 0.42, 3.4, Z + 0.95)], "Cloth", [(0, 1), (1, 1), (1, 0), (0, 0)])
    h.box_col(-1.6, Z + 0.9, 0.35, 0.35, 4.8)
    h.box_col(1.6, Z + 0.9, 0.35, 0.35, 4.8)
    # hot bath tub inside
    m.box((-2.4, y0 + 0.4, -2.0), (5.4, 0.8, 3.6), "Wood")
    m.box((-2.4, y0 + 0.78, -2.0), (5.0, 0.06, 3.2), "Water")
    h.box_col(-2.4, -2.0, 5.4, 3.6, y0 + 0.8, note="купель — можно залезть")
    h.barrels(4.4, -3.2)
    h.screen(2.6, 1.4)
    h.futons(4.6, 2.4)
    h.ceiling_lamp(-2.4, -2.0)
    h.ceiling_lamp(2.5, 1.5)
    # chimney
    m.box((4.6, 5.5, -3.0), (1.1, 11.0, 1.1), "Stone")
    m.box((4.6, 11.1, -3.0), (1.4, 0.3, 1.4), "Stone")
    h.box_col(4.6, -3.0, 1.1, 1.1, 11.0, note="труба")
    h.hip(0, 0, 13, 10, h.y(1) - 0.3, 2.8, over=1.3)
    eave_lanterns(h, (-4.0, 4.0), Z + 1.2, 3.6, "LanternWarm")
    for sx in (-1, 1):
        plant_pot(m, sx * 6.9, Z + 0.8, 1.0, "Sakura")
    h.nodes["WaterWheel"] = water_wheel(0.0, 2.1, -Z - 1.1)
    h.box_col(0, -Z - 1.1, 5.2, 1.0, 4.6, note="водяное колесо")
    return save("house_bath.glb", h, steam={"x": 4.6, "y": 11.4, "z": -3.0},
                wheel={"node": "WaterWheel", "x": 0.0, "y": 2.1, "z": round(-Z - 1.1, 2), "axis": "z",
                       "note": "крутить узел WaterWheel вокруг оси Z"})


def barn():
    h = House(12, 9)
    h.foundation("Stone", 0.2)
    h.floor_surface(0, "Hay")
    h.outer_walls(0, front=[(4.0, 8.0, "door")], back=[(4.0, 8.0, "door")],
                  left=[(3.0, 6.0, "window")], right=[(3.0, 6.0, "window")], mat="WoodLight", lower="Wood")
    cap_walls(h, 1)
    m = h.m
    Z = h.D / 2
    # gate leaves swung open (perpendicular to the wall)
    for sx in (-1, 1):
        for sz in (-1, 1):
            m.box((sx * 2.1, 2.2, sz * (Z + 1.05)), (0.14, 4.0, 1.9), "Wood")
            h.box_col(sx * 2.1, sz * (Z + 1.05), 0.2, 1.9, 4.2, note="створка ворот")
    # loft over the back half, with a ladder
    yl = h.y(1)
    m.box((0, yl - 0.12, -2.25), (h.W - 0.5, 0.24, 4.3), "Wood", top_mat="WoodLight")
    h.box_col(0, -2.25, h.W - 0.5, 4.3, yl, yl - 0.24, "чердак")
    for x in (-4.0, 0.0, 4.0):
        m.box((x, (yl - 0.24) / 2, -0.15), (0.24, yl - 0.24, 0.24), "Wood")
        h.box_col(x, -0.15, 0.3, 0.3, yl - 0.24)
    for sx in (-0.4, 0.4):
        m.cyl((2.0 + sx, 0.0, 0.25), (2.0 + sx, yl + 1.0, -0.05), 0.05, 0.05, "Wood", n=6)
    for k in range(1, 13):
        y = k * 0.42
        if y > yl + 0.8:
            break
        t = y / (yl + 1.0)
        m.cyl((1.6, y, 0.25 - 0.3 * t), (2.4, y, 0.25 - 0.3 * t), 0.035, 0.035, "WoodLight", n=5)
    h.ladders.append({"x": 2.0, "z": 0.2, "nx": 0, "nz": 1, "w": 0.9, "top": round(yl, 2), "note": "на чердак"})
    h.hay(-4.8, -3.4, level=1)
    h.hay(1.0, -3.6, level=1, n=2)
    h.hide(-2.0, -1.2, 1.2, "loft", yl, "на чердаке за сеном")
    h.hay(-5.2, 2.6)
    h.barrels(4.6, 2.8)
    h.crates(3.4, -3.6)
    h.ceiling_lamp(0, 2.0)
    h.hip(0, 0, 12, 9, h.y(1) - 0.3, 3.4, over=1.0, along="x")
    eave_lanterns(h, (-3.0, 3.0), Z + 0.9, 3.6, "LanternWarm")
    return save("house_barn.glb", h)


def storehouse():
    h = House(8, 8)
    h.foundation()
    h.floor_surface(0, "WoodLight")
    h.outer_walls(0, front=[(2.7, 5.3, "door")], back=[(2.8, 5.2, "door")],
                  left=[(3.0, 5.0, "window")], right=[(3.0, 5.0, "window")], lower="Dark")
    cap_walls(h, 1, "Dark")
    h.crates(-3.0, -2.6)
    h.barrels(2.6, -2.4)
    h.crates(-2.8, 2.2, n=2)
    h.ceiling_lamp(0, 0)
    eave = h.y(1) - 0.2
    h.hip(0, 0, 8, 8, eave, 1.6, over=0.8, along="x")
    m = h.m
    # ladder up to the roof on the east wall
    X = h.W / 2
    for sz in (-0.4, 0.4):
        m.cyl((X + 0.3, 0, 1.6 + sz), (X + 0.12, eave + 1.4, 1.6 + sz), 0.05, 0.05, "Wood", n=6)
    for k in range(1, 16):
        y = k * 0.42
        if y > eave + 1.2:
            break
        m.cyl((X + 0.3 - 0.18 * y / (eave + 1.4), y, 1.2), (X + 0.3 - 0.18 * y / (eave + 1.4), y, 2.0), 0.035, 0.035,
              "WoodLight", n=5)
    h.ladders.append({"x": X + 0.25, "z": 1.6, "nx": 1, "nz": 0, "w": 0.9, "top": round(eave + 0.9, 2),
                      "note": "на крышу (там мостики к соседним складам)"})
    eave_lanterns(h, (-2.0,), h.D / 2 + 0.6, 3.6, "LanternWarm")
    return save("storehouse.glb", h)


def inn():
    h = House(26, 14, floors=3, base=0.6)
    m = h.m
    m.box((0, 0.3, 0), (27.0, 0.6, 15.0), "Stone")
    h.box_col(0, 0, 27.0, 15.0, 0.6, note="основание")
    for k in range(2):
        m.box((0, 0.15 + 0.15 * k, 7.9 + 0.4 * (1 - k)), (7.0, 0.3 + 0.3 * k, 0.6), "Stone")
    win = lambda a, b: (a, b, "window")  # noqa: E731
    h.floor_surface(0, "WoodLight")
    h.outer_walls(0, front=[win(1, 5), win(6, 10), (11, 15, "door"), win(16, 20), win(21, 25)],
                  back=[(4, 7, "door"), win(9, 12), win(14, 17)],
                  left=[win(2, 5), win(9, 12)], right=[(5.5, 8.5, "door"), win(1.5, 4.5), win(10, 13)])
    hole0 = h.stairs(0, -12.6, -h.D / 2 + T + 1.3, +1)
    h.slab(1, hole0, "Tatami")
    floor_front = [win(1, 5), win(6, 10), (11, 15, "door"), win(16, 20), win(21, 25)]
    h.outer_walls(1, front=floor_front, back=[win(2, 5), win(9, 12), win(14, 17), win(20, 23)],
                  left=[win(2, 5), win(9, 12)], right=[win(2, 5), win(9, 12)])
    hole1 = h.stairs(1, 12.6, -h.D / 2 + T + 1.3, -1)
    h.slab(2, hole1, "Tatami")
    h.outer_walls(2, front=floor_front, back=[win(2, 5), win(9, 12), win(14, 17), win(20, 23)],
                  left=[win(2, 5), win(9, 12)], right=[win(2, 5), win(9, 12)])
    cap_walls(h, 3)
    h.balcony(1, -13.0, 13.0, 1.8)
    h.balcony(2, -13.0, 13.0, 1.8)
    # back skirt roofs between storeys (front has balconies)
    for lvl in (1, 2):
        y = h.y(lvl)
        h.m.quad([(13.6, y - 0.6, -8.2), (-13.6, y - 0.6, -8.2), (-13.6, y + 0.3, -7.05), (13.6, y + 0.3, -7.05)], "Roof")
        h.m.quad([(13.6, y - 0.6, -8.2), (-13.6, y - 0.6, -8.2), (-13.6, y + 0.3, -7.05), (13.6, y + 0.3, -7.05)][::-1], "Wood")
    top = h.hip(0, 0, 26, 14, h.y(3) - 0.3, 3.6, over=1.8, curve=0.5)
    # gable crest over the entrance on the roof
    m.box((0, h.y(3) + 1.6, 7.4), (5.0, 0.3, 0.3), "Gold")
    # lantern rows along both balconies + big entrance lanterns
    for lvl in (1, 2):
        for x in np.linspace(-12, 12, 9):
            lantern(m, x, h.y(lvl + 1) - 1.0, h.D / 2 + 1.6, "LanternRed", 0.75)
    for sx in (-1, 1):
        stone_lantern(m, sx * 5.0, 9.0, 1.5)
        h.box_col(sx * 5.0, 9.0, 0.9, 0.9, 2.4)
    # interiors
    h.table(-6.0, 2.0)
    h.table(6.0, 2.0)
    m.box((0, h.y(0) + 0.6, -2.8), (5.0, 1.2, 0.8), "Wood", top_mat="WoodLight")
    h.box_col(0, -2.8, 5.0, 0.8, h.y(0) + 1.2, note="стойка")
    h.barrels(10.5, 3.6)
    h.screen(-9.5, 2.5)
    h.ceiling_lamp(-6, 1)
    h.ceiling_lamp(6, 1)
    for lvl in (1, 2):
        h.futons(-10.5, 3.5, level=lvl)
        h.futons(9.8, 3.5, level=lvl)
        h.screen(-4.0, 1.5, level=lvl)
        h.screen(4.0, 1.5, level=lvl)
        h.tansu(0.0, -1.6 if lvl == 1 else -1.6, level=lvl, face=(0, 1))
        h.chest(-1.8 if lvl == 1 else 2.0, 4.6, level=lvl)
        h.ceiling_lamp(-6, 1, level=lvl)
        h.ceiling_lamp(6, 1, level=lvl)
    return save("house_inn.glb", h)


BUILD = {"house_small": house_small, "shop": shop, "house_2floor": house_2floor, "pagoda": pagoda,
         "bath": bath, "barn": barn, "storehouse": storehouse, "inn": inn}

if __name__ == "__main__":
    names = sys.argv[1:] or list(BUILD)
    for n in names:
        BUILD[n]()
