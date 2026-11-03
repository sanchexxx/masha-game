"""Builds ../layout.json (v1): every model instance + world-space colliders, hides, ladders, lights,
river, roads, spawns. Coordinates: metres, x east, z south, y up; rotY in degrees (three.js rotation.y)."""
import json
import math
import os
import random

HERE = os.path.dirname(os.path.abspath(__file__))
MAP = os.path.normpath(os.path.join(HERE, ".."))
HALF, FENCE = 65, 63
rnd = random.Random(7)

ROT = {"S": 0, "E": 90, "W": -90, "N": 180}


def meta_of(model):
    p = os.path.join(MAP, model.replace(".gltf", ".json"))
    return json.load(open(p, encoding="utf-8")) if os.path.exists(p) else {}


def rot(x, z, deg):
    a = math.radians(deg)
    c, s = math.cos(a), math.sin(a)
    return x * c + z * s, -x * s + z * c


class Layout:
    def __init__(self):
        self.inst, self.col, self.hides, self.ladders, self.lights, self.fade = [], [], [], [], [], []
        self.extents = []

    def add(self, model, x, z, rotY=0, scale=1.0, y=0.0, node=None, name=None, solid=True, meta=None, sx=None):
        e = {"model": model, "x": round(x, 2), "z": round(z, 2), "rotY": rotY}
        if node:
            e["node"] = node
        if scale != 1.0:
            e["scale"] = scale
        if sx:
            e["scaleX"] = sx
        if y:
            e["y"] = y
        if name:
            e["name"] = name
        self.inst.append(e)
        md = meta if meta is not None else meta_of(model)
        if node:
            md = md.get("nodes", md.get("variants", {})).get(node, {})
            cols = [md["collider"]] if md.get("collider") else []
            hides = [dict(md["hide"], x=0, z=0)] if md.get("hide") else []
            lights = [dict(md["light"], x=0, z=0)] if md.get("light") else []
        else:
            cols, hides, lights = md.get("colliders", []), md.get("hides", []), md.get("lights", [])
        s = scale
        exp = []
        for c in cols:
            if c.get("type") == "pillars":
                exp += [{"type": "circle", "x": px, "z": 0, "r": c["r"], "h": c["h"]} for px in c["x"]]
            else:
                exp.append(c)
        cols = exp
        minx = minz = 1e9
        maxx = maxz = -1e9
        for c in cols:
            c = dict(c)
            cx, cz = rot(c.get("x", 0) * s * (sx or 1), c.get("z", 0) * s, rotY)
            c["x"], c["z"] = round(x + cx, 3), round(z + cz, 3)
            for k in ("h", "bottom"):
                if k in c and c.get("relative") != "deck":
                    c[k] = round(c[k] * s + y, 3)
            if c["type"] in ("box", "roof", "arch", "sag"):
                w, d = c["w"] * s * (sx or 1), c["d"] * s
                if c["type"] == "box" and abs(rotY) % 180 == 90:
                    w, d = d, w
                if c["type"] == "box":
                    c["w"], c["d"] = round(w, 3), round(d, 3)
                else:
                    c["w"], c["d"] = round(w, 3), round(d, 3)
                    c["rotY"] = rotY
                    if c["type"] == "roof":
                        c["eave"] = round(c["eave"] * s + y, 3)
                        c["ridge"] = round(c["ridge"] * s + y, 3)
                        if abs(rotY) % 180 == 90:
                            c["along"] = "z" if c["along"] == "x" else "x"
                            c["w"], c["d"] = c["d"], c["w"]
                    if c["type"] in ("arch", "sag"):
                        c["y"] = y
                ww, dd = (c["w"], c["d"]) if c["type"] == "box" else ((c["d"], c["w"]) if abs(rotY) % 180 == 90 else (c["w"], c["d"]))
            elif c["type"] == "circle":
                c["r"] = round(c["r"] * s, 3)
                ww = dd = 2 * c["r"]
            else:
                c["rotY"] = rotY
                ww = dd = 1.0
            if solid and c.get("bottom", 0) < 1.5 and c["type"] not in ("roof",):
                minx, maxx = min(minx, c["x"] - ww / 2), max(maxx, c["x"] + ww / 2)
                minz, maxz = min(minz, c["z"] - dd / 2), max(maxz, c["z"] + dd / 2)
            self.col.append(c)
        if minx < 1e8 and solid:
            self.extents.append((name or model, minx, minz, maxx, maxz))
        for h in hides:
            h = dict(h)
            hx, hz = rot(h.get("x", 0) * s, h.get("z", 0) * s, rotY)
            h["x"], h["z"] = round(x + hx, 2), round(z + hz, 2)
            h["r"] = round(h["r"] * s, 2)
            if "y" in h:
                h["y"] = round(h["y"] * s + y, 2)
            self.hides.append(h)
        for L in (md.get("ladders", []) if not node else []):
            L = dict(L)
            lx, lz = rot(L["x"] * s, L["z"] * s, rotY)
            nx, nz = rot(L["nx"], L["nz"], rotY)
            L.update(x=round(x + lx, 2), z=round(z + lz, 2), nx=round(nx, 3), nz=round(nz, 3), top=round(L["top"] * s + y, 2))
            self.ladders.append(L)
        for L in lights:
            lx, lz = rot(L.get("x", 0) * s, L.get("z", 0) * s, rotY)
            self.lights.append({"x": round(x + lx, 2), "y": round(L.get("y", 2) * s + y, 2), "z": round(z + lz, 2),
                                "color": L.get("color", "#ffb060")})
        if md.get("crownFade") and not node:
            f = md["crownFade"]
            self.fade.append({"x": x, "z": z, "r": f.get("r", 4) * s, "bottom": f.get("bottom", 3) * s + y, "model": model})
        return e


# ------------------------------------------------------------------ the village
RIVER = [(-66, -26), (-50, -30), (-36, -34), (-18, -36), (0, -35), (18, -36), (32, -34), (40, -24),
         (42, -6), (42, 10), (42, 19), (46, 32), (55, 44), (66, 50)]
RIVER_W = 6.0

BUILDINGS = [
    ("house_inn.gltf", 0, -55.5, "S", "Гостиница духов"),
    ("house_2floor.gltf", -17, -17, "E", "Дом с балконом"),
    ("house_shop.gltf", 17, -16, "W", "Лавка"),
    ("house_tea.gltf", -34, -19, "S", "Чайный домик"),
    ("house_pagoda.gltf", -20, 18, "E", "Храм-пагода"),
    ("house_bath.gltf", 29, 17, "W", "Баня"),
    ("house_barn.gltf", -35, 33, "N", "Амбар"),
    ("storehouse.gltf", 55, -34, "W", "Склад 1"),
    ("storehouse.gltf", 55, -20, "W", "Склад 2"),
    ("storehouse.gltf", 55, -6, "W", "Склад 3"),
    ("house_small.gltf", -14, 38, "E", "Домик (юг)"),
    ("house_small.gltf", 27, -27, "S", "Домик (север)"),
]

ROADS = [
    dict(pts=[(0, -42), (0, 56)], w=6),
    dict(pts=[(-48, 0), (38, 0)], w=6),
    dict(pts=[(-34, -13), (-34, -6), (-22, -2)], w=3.5),
    dict(pts=[(-36, -27), (-37, -30)], w=3),
    dict(pts=[(-38, -40), (-44, -46)], w=3),
    dict(pts=[(-13, 18), (-3, 14)], w=3.5),
    dict(pts=[(-11, -17), (-3, -10)], w=3.5),
    dict(pts=[(11, -16), (3, -10)], w=3.5),
    dict(pts=[(22, 17), (3, 12)], w=3.5),
    dict(pts=[(34, -6), (37, -14)], w=3),
    dict(pts=[(46, -14), (50, -14)], w=3),
    dict(pts=[(-35, 27), (-30, 12), (-6, 4)], w=3.5),
    dict(pts=[(-48, 0), (-50, 2)], w=3),
    dict(pts=[(3, 36), (22, 39)], w=3.5),
    dict(pts=[(-31, 41), (-18, 44), (-3, 46)], w=3),
    dict(pts=[(3, -23.5), (27, -23.5)], w=3),
]


def dist_seg(px, pz, a, b):
    ax, az = a
    bx, bz = b
    dx, dz = bx - ax, bz - az
    t = max(0, min(1, ((px - ax) * dx + (pz - az) * dz) / (dx * dx + dz * dz)))
    return math.hypot(px - ax - t * dx, pz - az - t * dz)


def near_river(x, z, pad):
    return any(dist_seg(x, z, a, b) < RIVER_W / 2 + pad for a, b in zip(RIVER[:-1], RIVER[1:]))


def near_road(x, z, pad):
    return any(dist_seg(x, z, a, b) < r["w"] / 2 + pad for r in ROADS for a, b in zip(r["pts"][:-1], r["pts"][1:]))


def build():
    L = Layout()
    for model, x, z, door, name in BUILDINGS:
        L.add(model, x, z, ROT[door], name=name)
    # bridges
    L.add("bridge_red.gltf", 0, -35, 0, name="Красный мост")
    L.add("bridge_plank.gltf", -36, -34, 90 - 20, name="Мостик (запад)")
    L.add("bridge_plank.gltf", 42, -14, 90, name="Мостик (восток)")
    L.add("walkway.gltf", 55, -27, 0, y=5.15, name="Мостик между складами")
    L.add("walkway.gltf", 55, -13, 0, y=5.15, name="Мостик между складами")
    L.add("bridge_rope.gltf", 55.5, 4.0, 0, y=5.7, name="Подвесной мост", solid=False)
    # climbable trees
    L.add("tree_pine_big.gltf", -22, -50, 0, name="Большая сосна")
    L.add("tree_old_hollow.gltf", -53, 4, 90, name="Старое дерево с дуплом")
    L.add("tree_maple_big.gltf", 56, 14, 0, name="Большой клён")
    # decorative trees
    for kind, x, z in [("sakura", -45, -22), ("sakura", -8, -27), ("sakura", 10, 26), ("sakura", -28, 6),
                       ("sakura", 36, 30), ("sakura", -6, 30), ("sakura", 25, -6), ("sakura", -44, 20),
                       ("willow", 9, -30), ("willow", -26, -31), ("willow", 37, 4), ("willow", 49, 38), ("willow", 30, -42),
                       ("maple", -26, -7), ("maple", 12, -44), ("maple", -46, 12), ("maple", 20, 50), ("maple", 46, 20),
                       ("pine", -12, -44), ("pine", 32, -48), ("pine", -52, 28), ("pine", -8, 54), ("pine", 52, -46)]:
        L.add(f"tree_{kind}.gltf", x, z, rnd.choice([0, 60, 130, 210, 290]), scale=round(rnd.uniform(0.9, 1.15), 2))
    # forest ring outside the fence
    for i in range(170):
        side = i % 4
        t = rnd.uniform(-HALF - 4, HALF + 4)
        o = rnd.uniform(HALF - 1.5, HALF + 6)
        x, z = [(t, -o), (t, o), (-o, t), (o, t)][side]
        L.add("tree_forest.gltf", x, z, rnd.randint(0, 359), scale=round(rnd.uniform(0.9, 1.5), 2), solid=False)
    # fence along the border
    for k in range(-20, 21):
        for (x, z, r) in ((k * 3.0, -FENCE, 0), (k * 3.0, FENCE, 0), (-FENCE, k * 3.0, 90), (FENCE, k * 3.0, 90)):
            if abs(k * 3.0) <= FENCE:
                L.add("props.gltf", x, z, r, node="Fence", solid=False)
    # torii in front of the pagoda, lanterns, signposts
    L.add("props.gltf", -11.5, 18, 90, node="Torii", name="Ворота храма")
    for (x, z) in [(-4, 4), (4, -4), (4, 4), (-4, -4)]:
        L.add("props.gltf", x, z, 0, node="StoneLantern")
    L.add("props.gltf", 4.5, 8, 45, node="Signpost")
    L.add("props.gltf", -4.5, -8, 225, node="Signpost")
    for z in range(-30, 56, 9):
        for sx in (-1, 1):
            if abs(z) < 6:
                continue
            L.add("props.gltf", sx * 4.0, z, 0, node="PostLantern")
    for x in range(-44, 37, 9):
        if abs(x) < 6:
            continue
        for sz in (-1, 1):
            L.add("props.gltf", x, sz * 4.0, 0, node="PostLantern")
    # lantern strings across the main street
    for z in (-24, -12, 12, 24):
        L.add("props.gltf", 0, z, 0, node="LanternString", sx=1.0, solid=False)
    # bamboo grove
    for k in range(34):
        x, z = rnd.uniform(-58, -38), rnd.uniform(-56, -40)
        if math.hypot(x + 22, z + 50) < 8:
            continue
        L.add("bushes.gltf", x, z, rnd.randint(0, 359), node="BambooClump", scale=round(rnd.uniform(0.85, 1.2), 2))
    # maze of hedges (6x6 cells of 4 m) at the south-west
    x0, z0, cell = -56, 34, 4.0
    walls = [(0, 0, 6, 0), (0, 6, 6, 6), (0, 0, 0, 6), (6, 0, 6, 2.5), (6, 3.5, 6, 6),
             (1, 1, 5, 1), (1, 1, 1, 4), (2, 2, 2, 5), (2, 5, 5, 5), (3, 2, 5, 2), (4, 3, 4, 5), (5, 2, 5, 4), (3, 3, 3, 4)]
    for ax, az, bx, bz in walls:
        pa, pb = (x0 + ax * cell, z0 + az * cell), (x0 + bx * cell, z0 + bz * cell)
        length = math.hypot(pb[0] - pa[0], pb[1] - pa[1])
        cx, cz = (pa[0] + pb[0]) / 2, (pa[1] + pb[1]) / 2
        r = 0 if abs(pb[1] - pa[1]) < 0.1 else 90
        L.add("bushes.gltf", cx, cz, r, node="HedgeBlock", sx=round(length / 2.0 + 0.2, 2))
    L.hides.append({"x": x0 + 2.5 * cell, "z": z0 + 3.5 * cell, "r": 2.0, "kind": "maze", "note": "центр лабиринта"})
    L.add("props.gltf", x0 + 2.5 * cell, z0 + 3.5 * cell, 0, node="StoneLantern")
    # pumpkin field + scarecrow + straw hut
    for i in range(6):
        for j in range(4):
            L.add("props.gltf", 25 + i * 3.0, 43 + j * 3.0, rnd.randint(0, 359), node="Pumpkin",
                  scale=round(rnd.uniform(0.8, 1.3), 2))
    L.add("props.gltf", 33, 49, 0, node="Scarecrow")
    L.add("props.gltf", 20, 55, 180, node="StrawHut", name="Шалаш")
    # pond near the bath with stepping stones, fountain, benches
    L.add("props.gltf", 22, 30, 0, node="BambooFountain")
    for (x, z) in [(8, 20), (-8, 22), (-10, -32)]:
        L.add("props.gltf", x, z, rnd.choice([0, 90]), node="Bench")
    # crates / barrels / pots near buildings
    for (n, x, z) in [("Crate", 49, -27), ("Crate", 49.5, -25.8), ("Barrel", 49, -12), ("Barrel", 48.6, -10.8),
                      ("Crate", 23, 8), ("Barrel", 11, -9), ("PotFlower", -30, -14), ("PotPlant", -38, -14),
                      ("Crate", -41, 28), ("Barrel", -42, 30), ("PotFlower", -9, 34), ("PotPlant", 12, -10)]:
        L.add("props.gltf", x, z, rnd.randint(0, 359), node=n)
    # bushes (hiding places), rocks, flowers, grass, leaves — scattered, avoiding houses, roads, river
    def free(x, z, pad):
        if near_river(x, z, pad) or near_road(x, z, pad * 0.6):
            return False
        for (_, a, b, c, d) in L.extents:
            if a - pad < x < c + pad and b - pad < z < d + pad:
                return False
        if math.hypot(x, z - 52) < 6:
            return False
        return abs(x) < FENCE - 2.5 and abs(z) < FENCE - 2.5
    kinds = ["BushRound", "BushFlower", "BushAzalea", "BushTall"]
    placed = 0
    while placed < 56:
        x, z = rnd.uniform(-60, 60), rnd.uniform(-60, 60)
        if not free(x, z, 2.5):
            continue
        L.add("bushes.gltf", x, z, rnd.randint(0, 359), node=kinds[placed % 4], scale=round(rnd.uniform(0.9, 1.25), 2),
              solid=False)
        placed += 1
    placed = 0
    while placed < 30:   # rocks along the river banks
        k = rnd.randrange(len(RIVER) - 1)
        (ax, az), (bx, bz) = RIVER[k], RIVER[k + 1]
        t = rnd.uniform(0, 1)
        px, pz = ax + (bx - ax) * t, az + (bz - az) * t
        nx, nz = -(bz - az), bx - ax
        nl = math.hypot(nx, nz)
        side = rnd.choice([-1, 1])
        x, z = px + side * nx / nl * (RIVER_W / 2 + 0.6), pz + side * nz / nl * (RIVER_W / 2 + 0.6)
        if abs(x) > FENCE - 2 or abs(z) > FENCE - 2 or near_road(x, z, 1.0):
            continue
        L.add("props.gltf", x, z, rnd.randint(0, 359), node=f"Rock{rnd.randint(1, 3)}", scale=round(rnd.uniform(0.7, 1.2), 2))
        placed += 1
    for _ in range(70):
        x, z = rnd.uniform(-60, 60), rnd.uniform(-60, 60)
        if free(x, z, 1.0):
            L.add("props.gltf", x, z, rnd.randint(0, 359), node=rnd.choice(["FlowerPatch", "GrassTuft", "GrassTuft", "Leaves"]),
                  solid=False)
    return L


def main():
    L = build()
    # what the phone build can skip (decoration only, no colliders that matter for play)
    skip_nodes = {"FlowerPatch", "GrassTuft", "Leaves", "Rock1", "Rock2", "Rock3", "LanternString"}
    k_forest = 0
    for e in L.inst:
        if e.get("node") in skip_nodes:
            e["mobile"] = False
        if e["model"] == "tree_forest.gltf":
            k_forest += 1
            if k_forest % 3:
                e["mobile"] = False
        if e.get("node") == "Fence":
            e["mobile"] = False
        if e.get("node") == "BambooClump" and int(e["x"] * 10) % 2:
            e["mobile"] = False
        if e.get("node", "").startswith("Bush") and hash((e["x"], e["z"])) % 3 == 0:
            e["mobile"] = False
    # spacing check between big things
    probs = []
    big = [e for e in L.extents if e[0] and not e[0].endswith(".gltf")]
    for i, a in enumerate(big):
        for b in big[i + 1:]:
            dx = max(b[1] - a[3], a[1] - b[3], 0)
            dz = max(b[2] - a[4], a[2] - b[4], 0)
            g = math.hypot(dx, dz)
            if g < 3.0 and not ("Склад" in a[0] and "Мостик между" in b[0]) and "мост" not in (a[0] + b[0]).lower() and "Ворота" not in (a[0] + b[0]):
                probs.append(f"{a[0]} — {b[0]}: {g:.1f} м")
    out = {
        "version": 1,
        "units": "m", "axes": "x east, z south, y up; rotY = three.js rotation.y in degrees",
        "half": HALF, "fence": FENCE,
        "models": "assets/models/map/*.glb; node = clone this child of props.glb / bushes.glb; scaleX = stretch along local x",
        "instances": L.inst,
        "colliders": L.col,
        "hides": L.hides,
        "ladders": L.ladders,
        "lights": L.lights,
        "crownFade": L.fade,
        "river": {"points": RIVER, "width": RIVER_W, "level": 0.06, "bottom": -1.8},
        "roads": ROADS,
        "spawns": {"playerSpawn": [0, 52], "botSpawns": [[-6, 48], [6, 48], [-24, 4], [24, 5], [-8, -8], [8, -8],
                                                       [-40, 12], [14, 42]],
                   "ghostSpawns": [[0, -28], [-46, -8], [46, 2]]},
        "extentsCheck": probs,
    }
    with open(os.path.join(MAP, "layout.json"), "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, separators=(",", ":"))
    print(len(L.inst), "instances,", len(L.col), "colliders,", len(L.hides), "hides,", len(L.ladders), "ladders,",
          len(L.lights), "lights")
    print("spacing problems:", probs or "none")


if __name__ == "__main__":
    main()
