"""Builds moti.glb (Uncle Moti, 2.4 m) with Blender. Run: python3 mpaint.py && python3 mbuild.py
Shares the primitives, skeleton tools and base animation set with the Totoro build."""
import math
import os
import sys

import bpy
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.path.insert(1, os.path.join(HERE, "..", "..", "totoro", "_build"))
import build as T  # noqa: E402  (Totoro build: primitives, armature, clips)
from build import Part, tube, ellipsoid, B, nrm, make_armature, parent_to_bone, rot_axis  # noqa: E402
from mshape import PROF, surface, body_weights, smoothstep, FX0, FX1, FY0, FY1  # noqa: E402

OUT = os.path.normpath(os.path.join(HERE, ".."))
TEX = os.path.join(HERE, "tex")
rng = np.random.default_rng(42)

BONES = {
    "Hips": ((0, 0.55, 0), (0, 0.90, 0), None),
    "Spine": ((0, 0.90, 0), (0, 1.25, 0), "Hips"),
    "Chest": ((0, 1.25, 0), (0, 1.60, 0.02), "Spine"),
    "Head": ((0, 1.60, 0.02), (0, 2.25, 0.02), "Chest"),
    "LeftArm": ((0.70, 1.52, 0.02), (0.90, 1.16, 0.10), "Chest"),
    "LeftForeArm": ((0.90, 1.16, 0.10), (0.98, 0.86, 0.16), "LeftArm"),
    "LeftHand": ((0.98, 0.86, 0.16), (1.00, 0.70, 0.19), "LeftForeArm"),
    "RightArm": ((-0.70, 1.52, 0.02), (-0.90, 1.16, 0.10), "Chest"),
    "RightForeArm": ((-0.90, 1.16, 0.10), (-0.98, 0.86, 0.16), "RightArm"),
    "RightHand": ((-0.98, 0.86, 0.16), (-1.00, 0.70, 0.19), "RightForeArm"),
    "LeftUpLeg": ((0.38, 0.50, 0.05), (0.38, 0.14, 0.12), "Hips"),
    "LeftFoot": ((0.38, 0.14, 0.12), (0.38, 0.05, 0.45), "LeftUpLeg"),
    "RightUpLeg": ((-0.38, 0.50, 0.05), (-0.38, 0.14, 0.12), "Hips"),
    "RightFoot": ((-0.38, 0.14, 0.12), (-0.38, 0.05, 0.45), "RightUpLeg"),
}


def seg_dist(p, a, b):
    p, a, b = (np.asarray(q, float) for q in (p, a, b))
    ab = b - a
    t = np.clip(np.dot(p - a, ab) / np.dot(ab, ab), 0, 1)
    return np.linalg.norm(p - (a + t * ab))


def arm_weights(p):
    side = "Left" if p[0] > 0 else "Right"
    names = [side + n for n in ("Arm", "ForeArm", "Hand")]
    ds = np.array([seg_dist(p, BONES[n][0], BONES[n][1]) for n in names])
    w = 1 / (ds ** 6 + 1e-7)
    o = np.argsort(-w)[:2]
    tot = w[o].sum()
    out = {names[i]: float(w[i] / tot) for i in o if w[i] / tot > 0.02}
    if p[1] > 1.42:  # shoulder blends into the chest
        k = smoothstep(1.42, 1.6, p[1])
        out = {n: v * (1 - k) for n, v in out.items()}
        out["Chest"] = out.get("Chest", 0) + k
    return out


def weights(region, p):
    side = "Left" if p[0] > 0 else "Right"
    if region in ("body", "face"):
        return body_weights(p[1], p[0])
    if region == "arm":
        return arm_weights(p)
    if region == "hand":
        return {side + "Hand": 1.0}
    if region == "leg":
        t = smoothstep(0.12, 0.45, p[1])
        return {side + "UpLeg": t, side + "Foot": 1 - t} if 0 < t < 1 else {side + ("UpLeg" if t >= 1 else "Foot"): 1.0}
    if region == "foot":
        return {side + "Foot": 1.0}
    if region == "head":
        return {"Head": 1.0}
    raise ValueError(region)


# ------------------------------------------------------------------ geometry
def revolve_body(nu=48, rows=44):
    p = Part("Body", True, "body")
    ts = np.linspace(0, 1, rows + 1)
    us = np.arange(nu) / nu
    bot = p.add_v(np.ravel(surface([0.5], [0.0])))
    rings = []
    for t in ts[1:-1]:
        x, y, z = surface(us, np.full(nu, t))
        rings.append([p.add_v((x[j], y[j], z[j])) for j in range(nu)])
    top = p.add_v(np.ravel(surface([0.5], [1.0])))
    for j in range(nu):
        j2 = (j + 1) % nu
        ua, ub = j / nu, (j + 1) / nu
        p.add_f([bot, rings[0][j2], rings[0][j]], [((ua + ub) / 2, 0), (ub, ts[1]), (ua, ts[1])])
        for k in range(len(rings) - 1):
            a, b = rings[k], rings[k + 1]
            p.add_f([a[j], a[j2], b[j2], b[j]], [(ua, ts[k + 1]), (ub, ts[k + 1]), (ub, ts[k + 2]), (ua, ts[k + 2])])
        p.add_f([rings[-1][j], rings[-1][j2], top], [(ua, ts[-2]), (ub, ts[-2]), ((ua + ub) / 2, 1)])
    return p


FUR_UV = (0.02, 0.10, 0.45, 0.60)   # plain-fur patch of the body texture for limbs


def limbs():
    parts = []
    for s in (1, -1):
        path = [(s * 0.62, 1.58, 0.0), (s * 0.80, 1.40, 0.05), (s * 0.90, 1.16, 0.10), (s * 0.96, 0.98, 0.14),
                (s * 0.99, 0.84, 0.17)]
        parts.append(tube(path, [0.24, 0.25, 0.23, 0.21, 0.19], 14, "Body", FUR_UV, region="arm"))
        parts.append(ellipsoid((s * 1.0, 0.72, 0.19), (0.19, 0.17, 0.19), "Body", rows=7, cols=12, uvrect=FUR_UV,
                               region="hand"))
        for k in (-1, 0, 1):
            base = np.array([s * (1.0 + 0.02 * k), 0.60, 0.25 + 0.07 * k])
            parts.append(tube([base, base + [s * 0.01, -0.07, 0.04]], [0.03, 0.006], 6, "Claw", fixed_uv=(0.5, 0.5),
                              region="hand"))
        # stubby legs + feet
        parts.append(tube([(s * 0.36, 0.62, 0.05), (s * 0.37, 0.34, 0.08), (s * 0.38, 0.12, 0.12)], [0.30, 0.29, 0.26],
                          14, "Body", FUR_UV, cap0=False, region="leg"))
        parts.append(ellipsoid((s * 0.38, 0.08, 0.22), (0.27, 0.10, 0.32), "Body", rows=6, cols=12, uvrect=FUR_UV,
                               region="foot"))
        for k in (-1, 0, 1):
            base = np.array([s * 0.38 + 0.09 * k, 0.05, 0.50])
            parts.append(tube([base, base + [0.01 * k, -0.03, 0.07]], [0.035, 0.006], 6, "Claw", fixed_uv=(0.5, 0.5),
                              region="foot"))
    return parts


def jowls():
    """big fluffy cheek tufts + moustache under the nose (on the turnaround they frame the mouth)."""
    parts = []
    for s in (1, -1):
        parts.append(ellipsoid((s * 0.25, 1.66, 0.64), (0.15, 0.09, 0.09), "Body", rows=7, cols=12,
                               uvrect=FUR_UV, region="head", rot=rot_axis((0, 0, 1), s * 12)))
    return parts


def face_decal(body):
    face = Part("Face", True, "face")
    V = np.array(body.v)
    nrms = np.zeros_like(V)
    for f in body.f:
        a, b, c = V[f[0]], V[f[1]], V[f[2]]
        n = np.cross(b - a, c - a)
        for i in f:
            nrms[i] += n
    nrms = np.array([nrm(n) for n in nrms])
    remap = {}
    for f in body.f:
        pts = V[list(f)]
        if not (np.all(pts[:, 2] > 0.1) and np.all(nrms[list(f)][:, 2] > 0.2)):
            continue
        if not (np.all(pts[:, 0] > FX0 + 0.02) and np.all(pts[:, 0] < FX1 - 0.02) and np.all(pts[:, 1] > FY0 + 0.02)
                and np.all(pts[:, 1] < FY1 - 0.02)):
            continue
        ids, uvs = [], []
        for i in f:
            if i not in remap:
                remap[i] = face.add_v(V[i] + nrms[i] * 0.006)
            ids.append(remap[i])
            uvs.append(((V[i][0] - FX0) / (FX1 - FX0) * 0.5, 0.5 + (V[i][1] - FY0) / (FY1 - FY0) * 0.5))
        face.add_f(ids, uvs)
    return face


def card(part, root, out, down, length, width, region):
    """hanging fur tuft: root at `root`, hangs along `down`, faces `out`. UV v=1 at the root."""
    out = nrm(out)
    down = nrm(down - np.dot(down, out) * out)
    side = nrm(np.cross(out, down))
    root = np.asarray(root, float) + out * 0.015
    tip = root + down * length + out * length * 0.25
    c = [root - side * width / 2, root + side * width / 2, tip + side * width * 0.6, tip - side * width * 0.6]
    ids = [part.add_v(q) for q in c]
    part.add_f(ids, [(0.05, 1), (0.95, 1), (0.95, 0), (0.05, 0)])
    part.regions = getattr(part, "regions", []) + [region] * 4


def fur_cards():
    p = Part("FurCard", True, "mixed")
    # body: denser on the sides, shoulders, chest ruff and under the jowls
    n = 0
    while n < 150:
        u, t = rng.uniform(0, 1), rng.uniform(0.12, 0.93)
        x, y, z = (float(q[0]) for q in surface([u], [t]))
        th = (u - 0.5) * 2 * math.pi
        if abs(x) < 0.5 and z > 0.3 and 1.5 < y < 2.05:    # keep the face clear
            continue
        if z > 0.2 and abs(x) < 0.45 and 0.55 < y < 1.4:   # smoother belly
            continue
        out = np.array([math.sin(th), 0.25, math.cos(th) * 0.9])
        L = rng.uniform(0.15, 0.24) * (1.25 if 1.3 < y < 1.65 else 1.0)
        card(p, (x, y, z), out, np.array([0, -1, 0]) + out * 0.6, L, rng.uniform(0.24, 0.32), "body")
        n += 1
    # chest ruff / beard under the jowls
    for k in range(26):
        a = rng.uniform(-1.1, 1.1)
        y = rng.uniform(1.42, 1.58)
        r = PROF.r_at_y_upper(y) if hasattr(PROF, "r_at_y_upper") else 0.85
        x, z = math.sin(a) * r * 0.95, math.cos(a) * r * 0.86 + 0.02
        card(p, (x, y, z), np.array([math.sin(a), 0.1, math.cos(a)]), np.array([0, -1, 0.35]), rng.uniform(0.2, 0.28),
             0.3, "body")
    # jowl tufts (curl outward like a moustache)
    for s in (1, -1):
        for k in range(14):
            a = rng.uniform(-0.8, 0.8)
            root = np.array([s * 0.25, 1.66, 0.64]) + np.array([s * 0.15 * math.cos(a), 0.08 * math.sin(a), 0.06])
            card(p, root, np.array([s * 0.6, 0.0, 1.0]), np.array([s * 1.0, -0.5, 0.1]), rng.uniform(0.13, 0.2), 0.16,
                 "head")
    # arms: hanging tufts down the outer side
    for s in (1, -1):
        for k in range(24):
            t = rng.uniform(0, 1)
            a = rng.uniform(-1.9, 1.9)
            p0 = np.array([s * 0.62, 1.58, 0.0]) * (1 - t) + np.array([s * 0.98, 0.86, 0.17]) * t
            out = np.array([s * math.cos(a), 0.0, math.sin(a)])
            card(p, p0 + out * 0.2, out, np.array([0, -1, 0]) + out * 0.5, rng.uniform(0.13, 0.2), 0.24, "arm")
        for k in range(12):   # legs
            a = rng.uniform(-math.pi, math.pi)
            y = rng.uniform(0.18, 0.5)
            out = np.array([math.cos(a), 0, math.sin(a)])
            card(p, np.array([s * 0.38, y, 0.08]) + out * 0.26, out, np.array([0, -1, 0]), 0.18, 0.2, "leg")
    return p


def hat():
    m = Part("Hat", True, "head")
    prof = [(0.0, 2.43), (0.22, 2.42), (0.38, 2.36), (0.46, 2.24), (0.50, 2.10), (0.53, 2.04), (0.60, 2.02),
            (0.74, 1.99), (0.80, 1.95), (0.79, 1.93), (0.60, 1.97), (0.50, 1.99), (0.0, 2.0)]
    n = 28
    cx, cz = 0.0, -0.02
    rings = []
    for (r, y) in prof:
        rings.append([m.add_v((cx + r * math.cos(2 * math.pi * j / n), y, cz + r * math.sin(2 * math.pi * j / n)))
                      if r > 0 else m.add_v((cx, y, cz)) for j in range(n)] if r > 0 else [m.add_v((cx, y, cz))])
    for k in range(len(rings) - 1):
        a, b = rings[k], rings[k + 1]
        v0, v1 = k / (len(rings) - 1), (k + 1) / (len(rings) - 1)
        for j in range(n):
            j2 = (j + 1) % n
            u0, u1 = j / n * 4, (j + 1) / n * 4
            vv0, vv1 = 1 - v0, 1 - v1
            if len(a) == 1:
                m.add_f([a[0], b[j2], b[j]], [(u0, vv0), (u1, vv1), (u0, vv1)])
            elif len(b) == 1:
                m.add_f([a[j], a[j2], b[0]], [(u0, vv0), (u1, vv0), (u0, vv1)])
            else:
                m.add_f([a[j], a[j2], b[j2], b[j]], [(u0, vv0), (u1, vv0), (u1, vv1), (u0, vv1)])
    # a slight backward tilt like on the sheet
    R = rot_axis((1, 0, 0), -7)
    piv = np.array([0, 2.0, 0])
    m.v = [tuple(R @ (np.array(v) - piv) + piv + [0, 0, -0.02]) for v in m.v]
    return m


def loincloth():
    m = Part("Cloth", True, "body")
    # belt hugging the body at y ~ 0.60 (dips a little in front)
    pts, rad = [], []
    for k in range(32):
        a = 2 * math.pi * k / 32
        y = 0.66 - 0.05 * max(math.cos(a), 0) ** 2
        r = PROF.r_at_y_upper(y) if False else float(np.interp(y, PROF.y_tab[:np.argmax(PROF.r_tab)], PROF.r_tab[:np.argmax(PROF.r_tab)]))
        c = math.cos(a)
        z = r * c * (0.86 if c > 0 else 0.82) + 0.10 * math.exp(-((y - 0.95) / 0.35) ** 2) * max(c, 0) ** 2
        pts.append((r * math.sin(a) * 1.02, y, z * 1.02 + 0.01))
    m2 = tube(pts, [0.06] * 32, 6, "Cloth", (0, 8, 0, 0.3), closed=True, flat=(1.0, 0.5), up=(0, 1, 0), region="body")
    # front apron: hangs from the belt
    ap = Part("Cloth", True, "body")
    rows = 6
    for i in range(rows):
        for j in range(6):
            pass
    grid = []
    for i in range(rows + 1):
        t = i / rows
        row = []
        for j in range(7):
            s = -1 + 2 * j / 6
            w = 0.36 - 0.12 * t
            x = s * w
            y = 0.61 - 0.40 * t
            z0 = float(np.interp(0.61, PROF.y_tab[:np.argmax(PROF.r_tab)], PROF.r_tab[:np.argmax(PROF.r_tab)])) * 0.86
            z = z0 + 0.10 - 0.06 * t - 0.12 * s * s * (1 - t * 0.5) + 0.02 * math.sin(t * 6 + s * 2)
            row.append(ap.add_v((x, y, z)))
        grid.append(row)
    for i in range(rows):
        for j in range(6):
            a, b, c, d = grid[i][j], grid[i][j + 1], grid[i + 1][j + 1], grid[i + 1][j]
            ap.add_f([a, d, c, b], [(j / 6, 1 - i / rows), (j / 6, 1 - (i + 1) / rows), ((j + 1) / 6, 1 - (i + 1) / rows),
                                     ((j + 1) / 6, 1 - i / rows)])
    return [m2, ap]


def backpack():
    """wooden shrine-house on the back: frame, shelves, little roof, paw banner, jars, scrolls, lanterns."""
    parts = []
    zc, yc = -0.98, 1.38
    W, H, D = 1.15, 1.35, 0.62

    def box(c, s, mat):
        parts.append(T.box(c, s, mat))

    t = 0.07
    for sx in (-1, 1):
        for sz in (-1, 1):
            box((sx * W / 2, yc, zc + sz * D / 2), (t, H, t), "Wood")
    for y in (yc - H / 2, yc - 0.12, yc + 0.32, yc + H / 2):
        box((0, y, zc), (W + t, 0.06, D + t), "WoodLight")
    for k in range(7):   # back wall of vertical planks
        x = -W / 2 + (k + 0.5) * W / 7
        box((x, yc, zc - D / 2 + 0.02), (W / 7 - 0.015, H, 0.05), "Wood" if k % 2 else "WoodLight")
    for sx in (-1, 1):   # lower side walls + a window gap above
        for k in range(4):
            z = zc - D / 2 + (k + 0.5) * D / 4
            box((sx * (W / 2 + 0.01), yc - H / 4 - 0.05, z), (0.05, H / 2 - 0.1, D / 4 - 0.015), "WoodLight" if k % 2 else "Wood")
        box((sx * (W / 2 + 0.03), yc + 0.32, zc), (0.06, 0.08, D + 0.1), "Wood")
    # roof
    rp = Part("Roof", True, "equip")
    yr = yc + H / 2 + 0.04
    for sgn in (-1, 1):
        q = [(-W / 2 - 0.15, yr + 0.32, zc), (W / 2 + 0.15, yr + 0.32, zc), (W / 2 + 0.15, yr, zc + sgn * (D / 2 + 0.2)),
             (-W / 2 - 0.15, yr, zc + sgn * (D / 2 + 0.2))]
        ids = [rp.add_v(v) for v in q]
        rp.add_f(ids if sgn > 0 else ids[::-1], [(0, 1), (2, 1), (2, 0), (0, 0)])
    parts.append(rp)
    box((0, yr + 0.34, zc), (W + 0.4, 0.07, 0.07), "Wood")
    # paw banner on the back
    bn = Part("Banner", False, "equip")
    zb = zc - D / 2 - 0.05
    ids = [bn.add_v(v) for v in ((0.32, yc + 0.5, zb), (-0.32, yc + 0.5, zb), (-0.3, yc - 0.32, zb - 0.03), (0.3, yc - 0.32, zb - 0.03))]
    bn.add_f(ids, [(0, 1), (1, 1), (1, 0), (0, 0)])
    parts.append(bn)
    box((0, yc + 0.52, zb), (0.78, 0.04, 0.04), "Wood")
    # jars, scrolls and bundles on the shelves (visible from the sides)
    cols = ["Red", "Hay", "Cloth", "LampGlow"]
    for k in range(6):
        sx = -0.38 + (k % 3) * 0.38
        y = yc - 0.12 + 0.03 if k < 3 else yc + 0.32 + 0.03
        parts.append(ellipsoid((sx, y + 0.13, zc + 0.05), (0.12, 0.13, 0.12), cols[k % 3] if k != 4 else "Hay", rows=5, cols=8,
                               region="equip"))
    for k, (x, y) in enumerate(((-W / 2 - 0.06, yc - 0.35), (W / 2 + 0.06, yc - 0.1))):
        parts.append(tube([(x, y, zc - 0.2), (x, y, zc + 0.2)], [0.13, 0.13], 10, "Cloth", (0, 1, 0, 1), region="equip"))
    # two little lanterns hanging from the roof corners
    for sx in (-1, 1):
        x = sx * (W / 2 + 0.12)
        parts.append(tube([(x, yr + 0.05, zc + 0.3), (x, yr - 0.15, zc + 0.3)], [0.01, 0.01], 4, "Wood", (0, 1, 0, 1),
                          region="equip"))
        parts.append(ellipsoid((x, yr - 0.32, zc + 0.3), (0.1, 0.15, 0.1), "LampGlow", rows=5, cols=8, region="equip"))
    # hanging gourds and leaves
    for k, (x, y) in enumerate(((-0.45, yc - H / 2 - 0.15), (0.2, yc - H / 2 - 0.2), (0.5, yc - H / 2 - 0.1))):
        parts.append(ellipsoid((x, y, zc - D / 2 - 0.02), (0.09, 0.12, 0.09), "Red" if k % 2 else "Hay", rows=5, cols=8,
                               region="equip"))
    lv = Part("Leaf", True, "equip")
    for k in range(18):
        a = rng.uniform(0, 2 * math.pi)
        c = np.array([rng.choice([-1, 1]) * W / 2 * rng.uniform(0.6, 1.1), yc + rng.uniform(-0.6, 0.7), zc + rng.uniform(-0.35, 0.35)])
        s = rng.uniform(0.22, 0.34)
        o = nrm(np.array([np.sign(c[0]), rng.uniform(-0.3, 0.3), rng.uniform(-0.4, 0.4)]))
        t1 = nrm(np.cross(o, [0, 1, 0]))
        t2 = np.cross(o, t1)
        ids = [lv.add_v(c + (dx * t1 + dy * t2) * s / 2) for dx, dy in ((-1, -1), (1, -1), (1, 1), (-1, 1))]
        lv.add_f(ids, [(0, 0), (1, 0), (1, 1), (0, 1)])
    parts.append(lv)
    # straps over the shoulders (outside the face, down to the armpits)
    for sx in (-1, 1):
        parts.append(tube([(sx * 0.55, 1.75, zc + D / 2 - 0.05), (sx * 0.72, 1.72, -0.25), (sx * 0.80, 1.55, 0.25),
                           (sx * 0.80, 1.45, 0.32)], [0.05] * 4, 6, "Strap", (0, 1, 0, 1), flat=(1.0, 0.4), region="equip"))
    return parts


def staff_lantern():
    parts = []
    # wooden staff held in the right hand (-X), from the ground up past the shoulder
    path = [(-1.07, 0.0, 0.32), (-1.05, 0.7, 0.30), (-1.04, 1.4, 0.29), (-1.06, 2.05, 0.30), (-1.0, 2.25, 0.32),
            (-0.86, 2.30, 0.33)]
    parts.append(tube(path, [0.045, 0.045, 0.043, 0.04, 0.035, 0.03], 7, "Wood", (0, 1, 0, 3), region="equip"))
    hx, hy, hz = -0.82, 2.22, 0.33
    parts.append(tube([(hx, 2.30, hz), (hx, hy, hz)], [0.012, 0.012], 4, "Wood", (0, 1, 0, 1), region="equip"))
    # paw lantern: frame + glowing panes
    ly = 1.88
    parts.append(T.box((hx, ly + 0.27, hz), (0.36, 0.06, 0.36), "WoodDark"))
    parts.append(T.box((hx, ly - 0.25, hz), (0.34, 0.05, 0.34), "WoodDark"))
    pane = Part("PawLamp", False, "equip")
    s, h0, h1 = 0.15, ly - 0.22, ly + 0.24
    for k in range(4):
        R = rot_axis((0, 1, 0), 90 * k)
        q = [R @ np.array(v) + [hx, 0, hz] for v in ((-s, h0, s), (s, h0, s), (s, h1, s), (-s, h1, s))]
        ids = [pane.add_v(v) for v in q]
        pane.add_f(ids, [(0, 0), (1, 0), (1, 1), (0, 1)])
    parts.append(pane)
    for sx in (-1, 1):
        for sz in (-1, 1):
            parts.append(T.box((hx + sx * s, ly, hz + sz * s), (0.035, 0.5, 0.035), "WoodDark"))
    parts.append(ellipsoid((hx, ly + 0.36, hz), (0.07, 0.07, 0.07), "WoodDark", rows=4, cols=8, region="equip"))
    return parts


def spirits():
    parts = []
    for (x, y, z, s) in ((-1.35, 1.25, 0.5, 1.0), (1.3, 1.65, 0.35, 0.85)):
        e = ellipsoid((x, y, z), (0.13 * s, 0.13 * s, 0.13 * s), "Spirit", rows=6, cols=10, region="equip")
        parts.append(e)
        parts.append(tube([(x, y + 0.08 * s, z), (x + 0.03 * s, y + 0.2 * s, z), (x + 0.07 * s, y + 0.3 * s, z)],
                          [0.1 * s, 0.05 * s, 0.006], 10, "Spirit", fixed_uv=(0.5, 0.5), cap0=False, region="equip"))
    return parts


# ------------------------------------------------------------------ materials / objects
def mat(name, img=None, color=None, rough=0.92, emit=None, alpha=False, double=False, normal=None, sheen=None):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    b = nt.nodes["Principled BSDF"]
    b.inputs["Roughness"].default_value = rough
    b.inputs["Metallic"].default_value = 0.0
    if img:
        t = nt.nodes.new("ShaderNodeTexImage")
        t.image = bpy.data.images.load(os.path.join(TEX, img), check_existing=True)
        nt.links.new(t.outputs["Color"], b.inputs["Base Color"])
        if alpha:
            r = nt.nodes.new("ShaderNodeMath")
            r.operation = "ROUND"
            nt.links.new(t.outputs["Alpha"], r.inputs[0])
            nt.links.new(r.outputs[0], b.inputs["Alpha"])
        if emit:
            nt.links.new(t.outputs["Color"], b.inputs["Emission Color"])
            b.inputs["Emission Strength"].default_value = emit
    if color:
        b.inputs["Base Color"].default_value = (*color, 1)
        if emit:
            b.inputs["Emission Color"].default_value = (*color, 1)
            b.inputs["Emission Strength"].default_value = emit
    if normal:
        tn = nt.nodes.new("ShaderNodeTexImage")
        tn.image = bpy.data.images.load(os.path.join(TEX, normal), check_existing=True)
        tn.image.colorspace_settings.name = "Non-Color"
        nm = nt.nodes.new("ShaderNodeNormalMap")
        nt.links.new(tn.outputs["Color"], nm.inputs["Color"])
        nt.links.new(nm.outputs["Normal"], b.inputs["Normal"])
    if sheen:
        b.inputs["Sheen Weight"].default_value = 0.6
        b.inputs["Sheen Tint"].default_value = (*sheen, 1)
    m.use_backface_culling = not double
    T.MATS[name] = m


def setup_materials():
    T.MATS.clear()
    mat("Body", "classic_fur.jpg", normal="fur_n.jpg", rough=1.0, sheen=(1.0, 0.95, 0.9))
    mat("FurCard", "classic_card.png", rough=1.0, alpha=True, double=True)
    mat("Face", "face.png", alpha=True, double=True)
    mat("Hat", "classic_hat.jpg", rough=0.8, double=True)
    mat("Cloth", "classic_cloth.jpg", rough=0.85, double=True)
    mat("Claw", color=(0.42, 0.34, 0.28), rough=0.6)
    mat("Wood", "wood.jpg")
    mat("WoodLight", "wood_light.jpg")
    mat("WoodDark", "bark.jpg")
    mat("Roof", "roof.jpg", rough=0.7, double=True)
    mat("Banner", "banner.jpg", double=True)
    mat("Strap", color=(0.36, 0.22, 0.13), rough=0.8)
    mat("Leaf", "leaf_card.png", alpha=True, double=True)
    mat("Hay", "hay.jpg")
    mat("Red", color=(0.62, 0.12, 0.08), rough=0.6)
    mat("LampGlow", "lantern_warm.jpg", emit=1.6)
    mat("PawLamp", "pawlamp.jpg", emit=2.2, double=True)
    mat("Spirit", "spirit.jpg", emit=2.4)


def make_object(name, parts, skinned=True):
    verts, faces, uvs, mats, smooth, wts, names = [], [], [], [], [], [], []
    for p in parts:
        off = len(verts)
        verts += [B(np.array(v)) for v in p.v]
        if p.mat not in names:
            names.append(p.mat)
        for f, uv in zip(p.f, p.uv):
            faces.append(tuple(i + off for i in f))
            uvs.append(uv)
            mats.append(names.index(p.mat))
            smooth.append(p.smooth)
        if skinned:
            regs = getattr(p, "regions", None)
            for k, v in enumerate(p.v):
                wts.append(weights(regs[k] if regs else p.region, np.array(v)))
    me = bpy.data.meshes.new(name)
    me.from_pydata([tuple(v) for v in verts], [], faces)
    uvl = me.uv_layers.new(name="UVMap")
    for li, (poly, uv) in enumerate(zip(me.polygons, uvs)):
        for k in range(poly.loop_total):
            uvl.data[poly.loop_start + k].uv = uv[k]
        poly.material_index = mats[li]
        poly.use_smooth = smooth[li]
    for n in names:
        me.materials.append(T.MATS[n])
    me.validate()
    me.update()
    ob = bpy.data.objects.new(name, me)
    bpy.context.scene.collection.objects.link(ob)
    if skinned:
        groups = {}
        for vi, w in enumerate(wts):
            for bn, val in w.items():
                if bn not in groups:
                    groups[bn] = ob.vertex_groups.new(name=bn)
                groups[bn].add([vi], val, "REPLACE")
    return ob, len(me.polygons) + sum(max(0, p.loop_total - 3) for p in me.polygons)


# ------------------------------------------------------------------ animation
def clips():
    base = T.clips_totoro()
    c = {k: base[k] for k in ("Idle", "Walk", "Run", "Jump", "Fall", "Land", "Swim", "Crouch", "Cast", "Summon", "Wave")}
    c["Swing"] = base["StaffSwing"]
    c["Path"] = ([
        (0, {}),
        (8, {"RightArm": (-75, 0, -12), "RightForeArm": (-15, 0, 0), "Spine": (6, -10, 0), "Head": (-4, -12, 0)}),
        (24, {"RightArm": (-80, 0, -14), "RightForeArm": (-12, 0, 0), "Spine": (6, -8, 0), "Head": (-6, -8, 0),
              "LeftArm": (-20, 0, 25)}),
        (34, {}),
    ], False)
    return c


def main():
    T.reset()
    setup_materials()
    arm = make_armature(BONES, 1.0)
    body = revolve_body()
    parts = [body] + limbs() + jowls()
    objs = []
    tri = {}
    ob, tri["Body"] = make_object("Body", parts)
    objs.append(ob)
    ob, tri["Face"] = make_object("Face", [face_decal(body)])
    objs.append(ob)
    ob, tri["Fur"] = make_object("Fur", [fur_cards()])
    objs.append(ob)
    ob, tri["Cloth"] = make_object("Loincloth", loincloth())
    objs.append(ob)
    for o in objs:
        o.parent = arm
        md = o.modifiers.new("Armature", "ARMATURE")
        md.object = arm
    ob, tri["Hat"] = make_object("Hat", [hat()], skinned=False)
    parent_to_bone(ob, arm, "Head")
    ob, tri["Backpack"] = make_object("Backpack", backpack(), skinned=False)
    parent_to_bone(ob, arm, "Chest")
    ob, tri["Lantern"] = make_object("Lantern", staff_lantern(), skinned=False)
    parent_to_bone(ob, arm, "RightHand")
    ob, tri["Spirits"] = make_object("Spirits", spirits(), skinned=False)
    parent_to_bone(ob, arm, "Hips")
    T.UPRIGHT["Path"] = ("Left",)
    T.UPRIGHT["Swing"] = ("Left",)
    T.build_actions(arm, clips(), 0.8)
    bpy.context.view_layer.update()
    deps = bpy.context.evaluated_depsgraph_get()
    total = 0
    for o in bpy.context.scene.objects:
        if o.type == "MESH":
            m = o.evaluated_get(deps).to_mesh()
            m.calc_loop_triangles()
            total += len(m.loop_triangles)
            o.evaluated_get(deps).to_mesh_clear()
    path = os.path.join(OUT, "moti.glb")
    bpy.ops.export_scene.gltf(
        filepath=path, export_format="GLB", export_yup=True, export_apply=False, export_animations=True,
        export_animation_mode="ACTIONS", export_force_sampling=True, export_frame_step=1, export_image_format="AUTO",
        export_skins=True, export_draco_mesh_compression_enable=False, export_materials="EXPORT",
        export_texcoords=True, export_normals=True, export_tangents=False, export_def_bones=False,
        export_optimize_animation_size=True)
    print(f"moti.glb: {total} triangles, {os.path.getsize(path) / 1e6:.2f} MB")


if __name__ == "__main__":
    main()
