"""Stage (a) of HANDOFF-MAP-DETAIL: the new «Деревня духов» plan (130×130 m).

Writes ../layout.json (draft v0: districts, buildings, river, bridges, roads, climbable trees,
hiding places, spawns) and refs/map-2026-11/after/plan.png (top view with labels).
Coordinates: metres, centre (0,0), +x = east (right on the plan), +z = south (down on the plan),
same as the current map (shrine/Безлик in the north at -z, player spawn in the south at +z).
"""
import json
import math
import os

from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, "..", "..", "..", ".."))
HALF = 65
FENCE = 63

# ------------------------------------------------------------------ layout ----
BUILDINGS = [
    # id, model, kind (label), x, z, w, d, door side, floors, notes
    dict(id="spirit_inn", model="house_inn.glb", name="Гостиница духов", x=0, z=-52, w=26, d=14,
         door="S", floors=3, notes="3 этажа, балконы, мост между корпусами, лестница ко входу"),
    dict(id="house_2floor", model="house_2floor.glb", name="Дом с балконом", x=-17, z=-17, w=10, d=8,
         door="E", floors=2, notes="наружная лестница, балкон = второй выход"),
    dict(id="shop", model="house_shop.glb", name="Лавка", x=17, z=-16, w=10, d=7, door="W", floors=1),
    dict(id="tea", model="house_tea.glb", name="Чайный домик", x=-34, z=-20, w=8, d=7, door="S", floors=1),
    dict(id="pagoda", model="house_pagoda.glb", name="Храм-пагода", x=-19, z=18, w=10, d=10, door="E",
         floors=2, notes="лестница внутри на 2-й ярус"),
    dict(id="bath", model="house_bath.glb", name="Баня (пар, водяное колесо)", x=29, z=17, w=13, d=10,
         door="W", floors=1, notes="водяное колесо в речке с восточной стороны"),
    dict(id="barn", model="house_barn.glb", name="Амбар", x=-35, z=33, w=12, d=9, door="N", floors=1,
         notes="ворота с двух сторон, сено, бочки"),
    dict(id="store_n", model="storehouse.glb", name="Склад", x=55, z=-34, w=8, d=8, door="W", floors=1),
    dict(id="store_m", model="storehouse.glb", name="Склад", x=55, z=-20, w=8, d=8, door="W", floors=1),
    dict(id="store_s", model="storehouse.glb", name="Склад", x=55, z=-6, w=8, d=8, door="W", floors=1),
    dict(id="house_small_sw", model="house_small.glb", name="Домик", x=-14, z=38, w=8, d=6, door="E", floors=1),
    dict(id="house_small_ne", model="house_small.glb", name="Домик", x=21, z=-27, w=8, d=6, door="S", floors=1),
]

RIVER = [(-66, -26), (-50, -30), (-36, -35), (-18, -38), (0, -37), (18, -38), (32, -35), (40, -24),
         (42, -6), (42, 10), (42, 19), (46, 32), (55, 44), (66, 50)]
RIVER_W = 6.0

BRIDGES = [
    dict(id="red_bridge", model="bridge_red.glb", name="Красный мост", x=0, z=-37, length=15, width=5,
         rotY=0, peak=2.4, notes="горбатый, фонарики под пролётом, под ним прятаться на камнях"),
    dict(id="plank_w", model="bridge_plank.glb", name="Мостик", x=-36, z=-35, length=10, width=3, rotY=-20),
    dict(id="plank_e", model="bridge_plank.glb", name="Мостик", x=41.5, z=-14, length=10, width=3, rotY=90),
    dict(id="rope", model="bridge_rope.glb", name="Подвесной мост", x=55.5, z=2.5, length=11, width=1.8,
         rotY=0, height=6.0, notes="с крыши южного склада на площадку клёна"),
    dict(id="walk_ns", model="walkway.glb", name="", x=55, z=-27, length=6, width=1.8, rotY=0, height=4.5),
    dict(id="walk_ms", model="walkway.glb", name="", x=55, z=-13, length=6, width=1.8, rotY=0, height=4.5),
]

ROADS = [  # polylines, width (stone)
    dict(pts=[(0, -30), (0, 56)], w=6),
    dict(pts=[(-48, 0), (38, 0)], w=6),
    dict(pts=[(-34, -16), (-34, -6), (-20, -2)], w=3.5),
    dict(pts=[(-36, -24), (-38, -31)], w=3),
    dict(pts=[(-38, -40), (-44, -46)], w=3),
    dict(pts=[(-11, 18), (-3, 14)], w=3.5),
    dict(pts=[(22, 17), (3, 12)], w=3.5),
    dict(pts=[(34, -6), (37, -14)], w=3),
    dict(pts=[(46, -14), (51, -14)], w=3),
    dict(pts=[(-35, 27), (-30, 12), (-6, 4)], w=3.5),
    dict(pts=[(-48, 0), (-50, 2)], w=3),
    dict(pts=[(3, 36), (22, 39)], w=3.5),
    dict(pts=[(-31, 41), (-14, 46), (-3, 46)], w=3),
    dict(pts=[(3, -22), (21, -22)], w=3),
]

CLIMB_TREES = [
    dict(id="pine", model="tree_pine_big.glb", name="Большая сосна", x=-21, z=-49, r_crown=7,
         platform=8.0, access="лестница по стволу", trunk=1.2),
    dict(id="old_tree", model="tree_old_hollow.glb", name="Старое дерево с дуплом", x=-53, z=4, r_crown=7,
         platform=7.0, access="дупло-дверь + ступеньки вокруг ствола", trunk=1.6),
    dict(id="maple", model="tree_maple_big.glb", name="Большой клён", x=56, z=13, r_crown=6.5,
         platform=6.0, access="ветки-ступеньки + подвесной мост со склада", trunk=1.1),
]

TREES = [  # decorative (kind, x, z, r)
    ("sakura", -44, -22, 3.2), ("sakura", -8, -27, 3.0), ("sakura", 10, 26, 3.0), ("sakura", -28, 6, 2.8),
    ("sakura", 36, 30, 3.0), ("sakura", -6, 30, 2.6), ("sakura", 24, -6, 2.6),
    ("willow", 8, -32, 3.4), ("willow", -26, -33, 3.2), ("willow", 37, 4, 3.0), ("willow", 49, 38, 3.2),
    ("maple", -26, -8, 2.8), ("maple", 12, -42, 3.0), ("maple", -45, 18, 3.0), ("maple", 20, 50, 2.8),
    ("pine", -12, -44, 2.6), ("pine", 30, -46, 3.0), ("pine", -50, 28, 2.8),
]

AREAS = [
    dict(id="bamboo", name="Бамбуковая роща", x=-48, z=-47, w=22, d=16, kind="bamboo"),
    dict(id="maze", name="Лабиринт", x=-44, z=46, w=24, d=24, kind="maze"),
    dict(id="pumpkins", name="Тыквенное поле", x=32, z=47, w=18, d=12, kind="field"),
    dict(id="pond", name="Пруд с камнями", x=18, z=31, r=4.5, kind="pond"),
]

HIDES = [
    ("crown", "в кронах 3 больших деревьев (снизу не видно)"),
    ("bridge", "под красным мостом, на камнях в воде"),
    ("inside", "в домах: шкафы, ширмы, сундуки, футоны, бочки"),
    ("inn", "на балконах и в коридорах гостиницы"),
    ("bush", "кусты 4 видов, бамбук, кукуруза у тыкв"),
    ("maze", "тупики лабиринта"),
]

SPAWNS = dict(
    playerSpawn=(0, 52),
    botSpawns=[(-6, 48), (6, 48), (-24, 4), (24, 5), (-8, -8), (8, -8), (-40, 12), (14, 42)],
    ghostSpawns=[(0, -28), (-46, -8), (46, 2)],
)


def rect(b, pad=0.0):
    return (b["x"] - b["w"] / 2 - pad, b["z"] - b["d"] / 2 - pad, b["x"] + b["w"] / 2 + pad,
            b["z"] + b["d"] / 2 + pad)


def gap(a, b):
    ax0, az0, ax1, az1 = rect(a)
    bx0, bz0, bx1, bz1 = rect(b)
    dx = max(bx0 - ax1, ax0 - bx1, 0)
    dz = max(bz0 - az1, az0 - bz1, 0)
    return math.hypot(dx, dz)


def check():
    probs = []
    for i, a in enumerate(BUILDINGS):
        x0, z0, x1, z1 = rect(a)
        if min(x0, z0) < -FENCE + 3 or max(x1, z1) > FENCE - 3:
            probs.append(f"{a['id']} too close to fence")
        for b in BUILDINGS[i + 1:]:
            if a["id"].startswith("store") and b["id"].startswith("store"):
                if gap(a, b) < 4:
                    probs.append(f"{a['id']}-{b['id']} gap {gap(a, b):.1f}")
                continue
            if gap(a, b) < 4:
                probs.append(f"{a['id']}-{b['id']} gap {gap(a, b):.1f}")
    # buildings vs river
    for b in BUILDINGS:
        for (x0, z0), (x1, z1) in zip(RIVER[:-1], RIVER[1:]):
            for k in range(21):
                t = k / 20
                px, pz = x0 + (x1 - x0) * t, z0 + (z1 - z0) * t
                bx0, bz0, bx1, bz1 = rect(b)
                dx = max(bx0 - px, px - bx1, 0)
                dz = max(bz0 - pz, pz - bz1, 0)
                if math.hypot(dx, dz) < RIVER_W / 2 + 1.0:
                    probs.append(f"{b['id']} in river")
                    break
    return sorted(set(probs))


def layout():
    return {
        "version": 0,
        "status": "plan (этап а) — модели ещё не сделаны",
        "units": "m", "axes": "x east, z south, y up; centre (0,0)",
        "half": HALF, "fence": FENCE,
        "buildings": BUILDINGS,
        "river": {"points": RIVER, "width": RIVER_W, "depth": 1.6},
        "bridges": BRIDGES,
        "roads": ROADS,
        "climbTrees": CLIMB_TREES,
        "trees": [dict(kind=k, x=x, z=z, r=r) for k, x, z, r in TREES],
        "areas": AREAS,
        "hides": [dict(kind=k, text=t) for k, t in HIDES],
        "spawns": SPAWNS,
    }


# ------------------------------------------------------------------ drawing ---
S = 10  # px per metre
M = 60  # margin px
W = 2 * HALF * S + 2 * M + 600


def P(x, z):
    return (M + (x + HALF) * S, M + (z + HALF) * S)


def draw():
    img = Image.new("RGB", (W, 2 * HALF * S + 2 * M), (14, 20, 38))
    d = ImageDraw.Draw(img, "RGBA")
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 17)
    small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 15)
    big = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 30)

    # ground + forest ring
    d.rectangle([*P(-HALF, -HALF), *P(HALF, HALF)], fill=(34, 58, 44))
    import random
    rnd = random.Random(3)
    for _ in range(520):
        x, z = rnd.uniform(-HALF, HALF), rnd.uniform(-HALF, HALF)
        if max(abs(x), abs(z)) < FENCE - 4:
            continue
        r = rnd.uniform(2.0, 3.6)
        c = rnd.choice([(22, 52, 40), (28, 64, 46), (18, 44, 36)])
        d.ellipse([*P(x - r, z - r), *P(x + r, z + r)], fill=c)
    # fence
    d.rectangle([*P(-FENCE, -FENCE), *P(FENCE, FENCE)], outline=(130, 96, 60), width=3)

    # areas
    for a in AREAS:
        if a["kind"] == "pond":
            r = a["r"]
            d.ellipse([*P(a["x"] - r, a["z"] - r), *P(a["x"] + r, a["z"] + r)], fill=(52, 104, 150))
            for k in range(5):
                ang = k * 1.2
                sx, sz = a["x"] + math.cos(ang) * r * 0.55, a["z"] + math.sin(ang) * r * 0.55
                d.ellipse([*P(sx - 0.6, sz - 0.6), *P(sx + 0.6, sz + 0.6)], fill=(150, 150, 140))
            continue
        x0, z0 = a["x"] - a["w"] / 2, a["z"] - a["d"] / 2
        x1, z1 = a["x"] + a["w"] / 2, a["z"] + a["d"] / 2
        if a["kind"] == "bamboo":
            d.rectangle([*P(x0, z0), *P(x1, z1)], fill=(48, 90, 46))
            for _ in range(160):
                bx, bz = rnd.uniform(x0, x1), rnd.uniform(z0, z1)
                d.ellipse([*P(bx - 0.5, bz - 0.5), *P(bx + 0.5, bz + 0.5)], fill=(120, 170, 80))
        elif a["kind"] == "maze":
            d.rectangle([*P(x0, z0), *P(x1, z1)], fill=(40, 70, 44))
            cell = a["w"] / 6
            walls = [(0, 0, 6, 0), (0, 6, 6, 6), (0, 0, 0, 6), (6, 0, 6, 2.5), (6, 3.5, 6, 6),
                     (1, 1, 5, 1), (1, 1, 1, 4), (2, 2, 2, 5), (2, 5, 5, 5), (3, 2, 5, 2), (4, 3, 4, 5),
                     (5, 2, 5, 4), (3, 3, 3, 4)]
            for ax, az, bx, bz in walls:
                d.line([P(x0 + ax * cell, z0 + az * cell), P(x0 + bx * cell, z0 + bz * cell)],
                       fill=(30, 120, 60), width=7)
        elif a["kind"] == "field":
            d.rectangle([*P(x0, z0), *P(x1, z1)], fill=(84, 66, 40))
            for i in range(6):
                for j in range(4):
                    px, pz = x0 + 1.5 + i * 3, z0 + 1.5 + j * 3
                    d.ellipse([*P(px - 0.7, pz - 0.6), *P(px + 0.7, pz + 0.6)], fill=(232, 128, 42))
            hx, hz = x0 - 5, z1 + 3
            d.ellipse([*P(hx - 2.2, hz - 2.2), *P(hx + 2.2, hz + 2.2)], fill=(210, 180, 100))

    # roads
    for r in ROADS:
        d.line([P(*p) for p in r["pts"]], fill=(128, 126, 140), width=int(r["w"] * S), joint="curve")
        for p in r["pts"]:
            rr = r["w"] / 2
            d.ellipse([*P(p[0] - rr, p[1] - rr), *P(p[0] + rr, p[1] + rr)], fill=(128, 126, 140))

    # river
    pts = [P(*p) for p in RIVER]
    d.line(pts, fill=(60, 120, 178), width=int((RIVER_W + 1.4) * S), joint="curve")
    d.line(pts, fill=(78, 146, 204), width=int(RIVER_W * S), joint="curve")
    for p in RIVER[1:-1]:
        rr = RIVER_W / 2
        d.ellipse([*P(p[0] - rr, p[1] - rr), *P(p[0] + rr, p[1] + rr)], fill=(78, 146, 204))

    # trees
    colors = {"sakura": (236, 160, 196), "willow": (110, 168, 96), "maple": (206, 84, 50),
              "pine": (30, 92, 64)}
    for k, x, z, r in TREES:
        d.ellipse([*P(x - r, z - r), *P(x + r, z + r)], fill=colors[k], outline=(20, 30, 20), width=2)

    # bridges
    for b in BRIDGES:
        ang = math.radians(b["rotY"])
        L, Wd = b["length"] / 2, b["width"] / 2
        ux, uz = math.sin(ang), math.cos(ang)  # along
        vx, vz = uz, -ux
        corners = [(b["x"] + sx * L * ux + sy * Wd * vx, b["z"] + sx * L * uz + sy * Wd * vz)
                   for sx, sy in [(-1, -1), (1, -1), (1, 1), (-1, 1)]]
        col = {"bridge_red.glb": (196, 50, 44), "bridge_rope.glb": (196, 160, 100),
               "walkway.glb": (150, 110, 70)}.get(b["model"], (160, 118, 72))
        d.polygon([P(*c) for c in corners], fill=col, outline=(40, 20, 10))

    # buildings
    for b in BUILDINGS:
        x0, z0, x1, z1 = rect(b)
        roof = (44, 52, 110) if b["id"] != "pagoda" else (120, 40, 40)
        if b["id"] == "barn" or b["id"].startswith("store"):
            roof = (110, 80, 52)
        d.rectangle([*P(x0, z0), *P(x1, z1)], fill=roof, outline=(240, 200, 120), width=3)
        # door marker
        dx, dz = {"N": (0, -1), "S": (0, 1), "E": (1, 0), "W": (-1, 0)}[b["door"]]
        px, pz = b["x"] + dx * b["w"] / 2, b["z"] + dz * b["d"] / 2
        d.ellipse([*P(px - 1.2, pz - 1.2), *P(px + 1.2, pz + 1.2)], fill=(255, 210, 120))
        if b["floors"] > 1:
            d.text(P(x0 + 0.6, z0 + 0.4), f"{b['floors']} эт.", fill=(255, 230, 180), font=small)

    # climbable trees
    for t in CLIMB_TREES:
        r = t["r_crown"]
        d.ellipse([*P(t["x"] - r, t["z"] - r), *P(t["x"] + r, t["z"] + r)], fill=(60, 130, 70, 220),
                  outline=(255, 230, 120), width=4)
        d.ellipse([*P(t["x"] - 2.5, t["z"] - 2.5), *P(t["x"] + 2.5, t["z"] + 2.5)], outline=(255, 230, 120),
                  width=3)
        star(d, P(t["x"], t["z"]), 14)

    # old map outline
    for i in range(-44, 44, 4):
        d.line([P(i, -44), P(i + 2, -44)], fill=(255, 255, 255, 150), width=2)
        d.line([P(i, 44), P(i + 2, 44)], fill=(255, 255, 255, 150), width=2)
        d.line([P(-44, i), P(-44, i + 2)], fill=(255, 255, 255, 150), width=2)
        d.line([P(44, i), P(44, i + 2)], fill=(255, 255, 255, 150), width=2)

    # spawns
    px, pz = SPAWNS["playerSpawn"]
    d.ellipse([*P(px - 1.6, pz - 1.6), *P(px + 1.6, pz + 1.6)], fill=(80, 220, 120), outline="white", width=2)
    for gx, gz in SPAWNS["ghostSpawns"]:
        d.ellipse([*P(gx - 1.6, gz - 1.6), *P(gx + 1.6, gz + 1.6)], fill=(20, 20, 30), outline=(200, 160, 255),
                  width=3)
    for bx, bz in SPAWNS["botSpawns"]:
        d.ellipse([*P(bx - 0.9, bz - 0.9), *P(bx + 0.9, bz + 0.9)], fill=(120, 200, 255))

    # labels
    def label(x, z, text, f=font):
        tx, ty = P(x, z)
        bb = d.textbbox((0, 0), text, font=f)
        w, h = bb[2] - bb[0], bb[3] - bb[1]
        d.rounded_rectangle([tx - w / 2 - 6, ty - h / 2 - 5, tx + w / 2 + 6, ty + h / 2 + 7], 6,
                            fill=(10, 14, 28, 200))
        d.text((tx - w / 2, ty - h / 2 - 2), text, fill=(255, 244, 220), font=f)

    for b in BUILDINGS:
        if b["id"] in ("store_m", "store_s"):
            continue
        dz = -b["d"] / 2 - 2.2 if b["z"] > -50 else b["d"] / 2 + 2.6
        label(b["x"], b["z"] + dz, "Склады с мостиками" if b["id"] == "store_n" else b["name"])
    for t in CLIMB_TREES:
        label(t["x"], t["z"] + t["r_crown"] + 2.3, f"★ {t['name']}")
    label(0, -30.5 + 0.2, "Красный мост")
    for a in AREAS:
        dz = (a.get("d", 2 * a.get("r", 0)) / 2) + 2.2
        label(a["x"], a["z"] - dz if a["id"] != "maze" else a["z"], a["name"])
    label(55.5, 6.5, "подвесной мост", small)
    label(-36, -30.5, "мостик", small)
    label(41.5, -8.5, "мостик", small)
    label(-58, -26, "речка", small)
    label(0, 41.2, "старая карта 88×88", small)

    # legend
    lx = 2 * HALF * S + 2 * M + 10
    y = M
    d.text((lx, y), "Деревня духов — новый план", fill="white", font=big)
    y += 44
    d.text((lx, y), "130 × 130 м (было 88 × 88)", fill=(220, 220, 230), font=font)
    y += 40
    items = [
        ((44, 52, 110), "дом (жёлтая точка — дверь)"),
        ((196, 50, 44), "мост"),
        ((78, 146, 204), "речка — можно плавать и нырять"),
        ((128, 126, 140), "каменные дорожки"),
        ((236, 160, 196), "сакура"), ((110, 168, 96), "ива у воды"), ((206, 84, 50), "клён"),
        ((30, 92, 64), "сосна"),
        ((80, 220, 120), "старт героев"), ((20, 20, 30), "где появляется Безлик"),
        ((120, 200, 255), "старт ботов"),
    ]
    for col, t in items:
        d.rectangle([lx, y + 2, lx + 26, y + 22], fill=col, outline=(200, 200, 200))
        d.text((lx + 36, y), t, fill=(230, 230, 236), font=small)
        y += 30
    star(d, (lx + 13, y + 12), 12)
    d.text((lx + 36, y), "дерево, на которое можно залезть", fill=(230, 230, 236), font=small)
    y += 30
    d.line([lx, y + 12, lx + 26, y + 12], fill=(255, 255, 255, 150), width=2)
    d.text((lx + 36, y), "граница старой карты", fill=(230, 230, 236), font=small)
    y += 48
    d.text((lx, y), "Где прятаться:", fill="white", font=font)
    y += 30
    for _, t in HIDES:
        for line in wrap(t, 44):
            d.text((lx + 8, y), "• " + line if line == wrap(t, 44)[0] else "  " + line,
                   fill=(230, 230, 236), font=small)
            y += 22
        y += 4
    y += 20
    d.text((lx, y), "Проходы между домами ≥ 4 м,", fill=(200, 200, 210), font=small)
    y += 22
    d.text((lx, y), "двери ≥ 2,4 м, потолки ≥ 4,2 м.", fill=(200, 200, 210), font=small)
    # scale bar
    sx, sy = P(-60, 60)
    d.line([sx, sy, sx + 10 * S, sy], fill="white", width=4)
    d.text((sx, sy + 6), "10 м", fill="white", font=small)
    # compass
    cx, cy = P(58, -58)
    d.polygon([(cx, cy - 22), (cx - 9, cy + 6), (cx + 9, cy + 6)], fill=(255, 230, 160))
    d.text((cx - 7, cy + 8), "С", fill="white", font=font)
    return img


def star(d, c, r):
    pts = []
    for k in range(10):
        a = -math.pi / 2 + k * math.pi / 5
        rr = r if k % 2 == 0 else r * 0.45
        pts.append((c[0] + rr * math.cos(a), c[1] + rr * math.sin(a)))
    d.polygon(pts, fill=(255, 220, 90), outline=(80, 50, 10))


def wrap(t, n):
    words, lines, cur = t.split(), [], ""
    for w in words:
        if len(cur) + len(w) + 1 > n:
            lines.append(cur)
            cur = w
        else:
            cur = (cur + " " + w).strip()
    lines.append(cur)
    return lines


if __name__ == "__main__":
    probs = check()
    print("problems:", probs or "none")
    out = os.path.join(ROOT, "assets", "models", "map", "layout.json")
    with open(out, "w", encoding="utf-8") as f:
        json.dump(layout(), f, ensure_ascii=False, indent=1)
    os.makedirs(os.path.join(ROOT, "refs", "map-2026-11", "after"), exist_ok=True)
    draw().save(os.path.join(ROOT, "refs", "map-2026-11", "after", "plan.png"))
    print("ok")
