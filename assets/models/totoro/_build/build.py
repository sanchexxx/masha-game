"""Builds totoro.glb, totoro_mini.glb, totoro_chibi.glb with Blender (bpy module).

Run:  python3 paint.py && python3 build.py
Everything is procedural: geometry, skeleton, animations. Textures come from paint.py.
Coordinates in this file are glTF-style (Y up, face toward +Z, character's left = +X);
they are converted to Blender's Z-up only when meshes/bones are created.
"""
import math
import os
import sys

import bpy
import numpy as np
from mathutils import Matrix, Quaternion, Vector

sys.path.insert(0, os.path.dirname(__file__))
from shape import DEPTH_FRONT, BODY_PROFILE, CHIBI_PROFILE, Profile, surface, smoothstep  # noqa: E402
from paint import (FACE_X0, FACE_X1, FACE_Y0, FACE_Y1, PARTS_RECT)  # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, ".."))
TEX = os.path.join(HERE, "tex")
FPS = 30


def B(p):
    """glTF (x,y,z) -> Blender (x,-z,y)."""
    return Vector((p[0], -p[2], p[1]))


def nrm(v):
    v = np.asarray(v, float)
    n = np.linalg.norm(v)
    return v / n if n > 1e-9 else v


# =============================================================================
# geometry primitives -> "parts" (lists of verts/faces/uvs, glTF coordinates)
# =============================================================================
class Part:
    def __init__(self, mat, smooth=True, region="body"):
        self.v, self.f, self.uv = [], [], []
        self.mat, self.smooth, self.region = mat, smooth, region

    def add_v(self, p):
        self.v.append(tuple(float(c) for c in p))
        return len(self.v) - 1

    def add_f(self, idx, uvs):
        self.f.append(tuple(idx))
        self.uv.append([tuple(map(float, u)) for u in uvs])


def rect_uv(rect, s, t):
    u0, u1, v0, v1 = rect
    return (u0 + (u1 - u0) * s, v0 + (v1 - v0) * t)


def revolve(prof, nu, rows, mat, scale=1.0, bulge=True, region="body"):
    p = Part(mat, True, region)
    ts = np.linspace(0, 1, rows + 1)
    us = np.arange(nu) / nu
    bottom = p.add_v(np.array(surface(prof, [0.5], [0.0], bulge)).ravel() * scale)
    rings = []
    for t in ts[1:-1]:
        x, y, z = surface(prof, us, np.full(nu, t), bulge)
        rings.append([p.add_v(np.array([x[j], y[j], z[j]]) * scale) for j in range(nu)])
    top = p.add_v(np.array(surface(prof, [0.5], [1.0], bulge)).ravel() * scale)
    for j in range(nu):
        j2 = (j + 1) % nu
        u_a, u_b = j / nu, (j + 1) / nu
        r0 = rings[0]
        p.add_f([bottom, r0[j2], r0[j]], [((u_a + u_b) / 2, 0), (u_b, ts[1]), (u_a, ts[1])])
        for k in range(len(rings) - 1):
            a, b = rings[k], rings[k + 1]
            p.add_f([a[j], a[j2], b[j2], b[j]],
                    [(u_a, ts[k + 1]), (u_b, ts[k + 1]), (u_b, ts[k + 2]), (u_a, ts[k + 2])])
        rl = rings[-1]
        p.add_f([rl[j], rl[j2], top], [(u_a, ts[-2]), (u_b, ts[-2]), ((u_a + u_b) / 2, 1)])
    return p


def tube(path, radii, n, mat, uvrect=(0, 1, 0, 1), flat=(1.0, 1.0), up=(0, 0, 1),
         cap0=True, cap1=True, closed=False, region="body", smooth=True, fixed_uv=None):
    p = Part(mat, smooth, region)
    path = [np.asarray(q, float) for q in path]
    K = len(path)
    T = []
    for k in range(K):
        if closed:
            d = path[(k + 1) % K] - path[k - 1]
        else:
            d = path[min(k + 1, K - 1)] - path[max(k - 1, 0)]
        T.append(nrm(d))
    N = nrm(np.cross(T[0], up))
    if np.linalg.norm(N) < 1e-6:
        N = nrm(np.cross(T[0], (1, 0, 0)))
    rings = []
    for k in range(K):
        if k > 0:
            N = nrm(N - np.dot(N, T[k]) * T[k])
        Bn = np.cross(T[k], N)
        ring = []
        for j in range(n):
            a = 2 * math.pi * j / n
            q = path[k] + radii[k] * (math.cos(a) * N * flat[0] + math.sin(a) * Bn * flat[1])
            ring.append(p.add_v(q))
        rings.append(ring)

    def U(s, t):
        return fixed_uv if fixed_uv else rect_uv(uvrect, s, t)

    nk = K if closed else K - 1
    for k in range(nk):
        a, b = rings[k], rings[(k + 1) % K]
        t0, t1 = k / max(K - 1, 1), (k + 1) / max(K - 1, 1)
        for j in range(n):
            j2 = (j + 1) % n
            p.add_f([a[j], a[j2], b[j2], b[j]],
                    [U(j / n, t0), U((j + 1) / n, t0), U((j + 1) / n, t1), U(j / n, t1)])
    if not closed:
        if cap0:
            c = p.add_v(path[0] - T[0] * radii[0] * 0.3)
            for j in range(n):
                p.add_f([c, rings[0][(j + 1) % n], rings[0][j]], [U(0.5, 0), U(0.5, 0), U(0.5, 0)])
        if cap1:
            c = p.add_v(path[-1] + T[-1] * radii[-1] * 0.3)
            for j in range(n):
                p.add_f([rings[-1][j], rings[-1][(j + 1) % n], c], [U(0.5, 1), U(0.5, 1), U(0.5, 1)])
    return p


def ellipsoid(center, radii, mat, rows=8, cols=12, uvrect=(0, 1, 0, 1), region="body",
              rot=None, fixed_uv=None, smooth=True):
    p = Part(mat, smooth, region)
    c = np.asarray(center, float)
    R = np.eye(3) if rot is None else np.asarray(rot)

    def P(th, ph):
        q = np.array([math.sin(th) * math.sin(ph) * radii[0], -math.cos(th) * radii[1],
                      math.sin(th) * math.cos(ph) * radii[2]])
        return c + R @ q

    def U(s, t):
        return fixed_uv if fixed_uv else rect_uv(uvrect, s, t)

    bot = p.add_v(P(0, 0))
    rings = [[p.add_v(P(math.pi * i / rows, 2 * math.pi * j / cols)) for j in range(cols)]
             for i in range(1, rows)]
    top = p.add_v(P(math.pi, 0))
    for j in range(cols):
        j2 = (j + 1) % cols
        p.add_f([bot, rings[0][j2], rings[0][j]], [U(j / cols, 0)] * 3)
        for i in range(rows - 2):
            a, b = rings[i], rings[i + 1]
            p.add_f([a[j], a[j2], b[j2], b[j]],
                    [U(j / cols, i / rows), U((j + 1) / cols, i / rows),
                     U((j + 1) / cols, (i + 1) / rows), U(j / cols, (i + 1) / rows)])
        p.add_f([rings[-1][j], rings[-1][j2], top], [U(j / cols, 1)] * 3)
    return p


def box(center, size, mat, region="equip", rot=None, uvrect=(0, 1, 0, 1)):
    p = Part(mat, False, region)
    c = np.asarray(center, float)
    R = np.eye(3) if rot is None else np.asarray(rot)
    h = np.asarray(size, float) / 2
    corners = []
    for sx in (-1, 1):
        for sy in (-1, 1):
            for sz in (-1, 1):
                corners.append(p.add_v(c + R @ (h * [sx, sy, sz])))
    quads = [(0, 1, 3, 2), (4, 6, 7, 5), (0, 4, 5, 1), (2, 3, 7, 6), (0, 2, 6, 4), (1, 5, 7, 3)]
    for q in quads:
        p.add_f([corners[i] for i in q], [rect_uv(uvrect, 0, 0), rect_uv(uvrect, 1, 0),
                                          rect_uv(uvrect, 1, 1), rect_uv(uvrect, 0, 1)])
    return p


def leaf(center, R, mat, droop=0.25, rings=6, segs=28, tilt=None, notch=True, region="equip"):
    """lily-pad style leaf lying in XZ plane, centre raised; planar UV."""
    p = Part(mat, True, region)
    c = np.asarray(center, float)
    M = np.eye(3) if tilt is None else np.asarray(tilt)
    ctr = p.add_v(c)
    grid = []
    for i in range(1, rings + 1):
        row = []
        for j in range(segs):
            a = 2 * math.pi * j / segs
            rr = R * (i / rings) * (1 + 0.06 * math.sin(5 * a + 0.7) + 0.035 * math.sin(11 * a))
            if notch:
                rr *= 1 - 0.18 * math.exp(-((((a - math.pi * 0.5) + math.pi) % (2 * math.pi) - math.pi) / 0.12) ** 2) * (i / rings)
            q = np.array([rr * math.cos(a), -droop * (rr / R) ** 2 + 0.02 * math.sin(7 * a) * (i / rings), rr * math.sin(a)])
            row.append(p.add_v(c + M @ q))
        grid.append(row)

    def uvp(idx):
        q = np.asarray(p.v[idx]) - c
        q = M.T @ q
        return (0.5 + q[0] / (2 * R), 0.5 - q[2] / (2 * R))

    for j in range(segs):
        j2 = (j + 1) % segs
        p.add_f([ctr, grid[0][j], grid[0][j2]], [uvp(ctr), uvp(grid[0][j]), uvp(grid[0][j2])])
        for i in range(rings - 1):
            a, b = grid[i], grid[i + 1]
            ids = [a[j], b[j], b[j2], a[j2]]
            p.add_f(ids, [uvp(k) for k in ids])
    return p


def fan(center, outline, mat, normal_offset=(0, 0, 0), region="equip", color_uv=(0.5, 0.5)):
    p = Part(mat, False, region)
    c = p.add_v(center)
    ids = [p.add_v(q) for q in outline]
    for j in range(len(ids)):
        p.add_f([c, ids[j], ids[(j + 1) % len(ids)]], [color_uv] * 3)
    return p


def rot_axis(axis, deg):
    a = math.radians(deg)
    x, y, z = nrm(axis)
    c, s = math.cos(a), math.sin(a)
    return np.array([[c + x * x * (1 - c), x * y * (1 - c) - z * s, x * z * (1 - c) + y * s],
                     [y * x * (1 - c) + z * s, c + y * y * (1 - c), y * z * (1 - c) - x * s],
                     [z * x * (1 - c) - y * s, z * y * (1 - c) + x * s, c + z * z * (1 - c)]])


# =============================================================================
# creature definitions (unscaled units: big Totoro, 3.0 m)
# =============================================================================
TOTORO_BONES = {
    # name: (head, tail, parent)
    "Hips": ((0, 0.55, 0), (0, 1.05, 0), None),
    "Spine": ((0, 1.05, 0), (0, 1.50, 0), "Hips"),
    "Chest": ((0, 1.50, 0), (0, 1.92, 0), "Spine"),
    "Head": ((0, 1.92, 0), (0, 2.62, 0), "Chest"),
    "LeftEar": ((0.25, 2.42, -0.02), (0.33, 3.0, -0.04), "Head"),
    "RightEar": ((-0.25, 2.42, -0.02), (-0.33, 3.0, -0.04), "Head"),
    "LeftArm": ((0.70, 1.66, 0.0), (0.95, 1.38, 0.08), "Chest"),
    "LeftForeArm": ((0.95, 1.38, 0.08), (1.12, 1.08, 0.14), "LeftArm"),
    "LeftHand": ((1.12, 1.08, 0.14), (1.17, 0.92, 0.17), "LeftForeArm"),
    "RightArm": ((-0.70, 1.66, 0.0), (-0.95, 1.38, 0.08), "Chest"),
    "RightForeArm": ((-0.95, 1.38, 0.08), (-1.12, 1.08, 0.14), "RightArm"),
    "RightHand": ((-1.12, 1.08, 0.14), (-1.17, 0.92, 0.17), "RightForeArm"),
    "LeftUpLeg": ((0.38, 0.55, 0.15), (0.38, 0.14, 0.35), "Hips"),
    "LeftFoot": ((0.38, 0.14, 0.35), (0.38, 0.07, 0.75), "LeftUpLeg"),
    "RightUpLeg": ((-0.38, 0.55, 0.15), (-0.38, 0.14, 0.35), "Hips"),
    "RightFoot": ((-0.38, 0.14, 0.35), (-0.38, 0.07, 0.75), "RightUpLeg"),
    "Tail": ((0, 0.62, -0.70), (0, 0.50, -1.10), "Hips"),
}

CHIBI_BONES = {
    "Hips": ((0, 0.45, 0), (0, 1.10, 0), None),
    "Spine": ((0, 1.10, 0), (0, 1.55, 0), "Hips"),
    "Head": ((0, 1.55, 0), (0, 2.30, 0), "Spine"),
    "LeftEar": ((0.30, 1.98, 0.0), (0.42, 3.0, -0.02), "Head"),
    "RightEar": ((-0.30, 1.98, 0.0), (-0.42, 3.0, -0.02), "Head"),
    "LeftArm": ((0.80, 1.30, 0.05), (1.00, 1.05, 0.12), "Spine"),
    "LeftHand": ((1.00, 1.05, 0.12), (1.05, 0.88, 0.15), "LeftArm"),
    "RightArm": ((-0.80, 1.30, 0.05), (-1.00, 1.05, 0.12), "Spine"),
    "RightHand": ((-1.00, 1.05, 0.12), (-1.05, 0.88, 0.15), "RightArm"),
    "LeftUpLeg": ((0.38, 0.45, 0.15), (0.38, 0.10, 0.35), "Hips"),
    "LeftFoot": ((0.38, 0.10, 0.35), (0.38, 0.05, 0.70), "LeftUpLeg"),
    "RightUpLeg": ((-0.38, 0.45, 0.15), (-0.38, 0.10, 0.35), "Hips"),
    "RightFoot": ((-0.38, 0.10, 0.35), (-0.38, 0.05, 0.70), "RightUpLeg"),
}


def seg_dist(p, a, b):
    p, a, b = map(lambda q: np.asarray(q, float), (p, a, b))
    ab = b - a
    t = np.clip(np.dot(p - a, ab) / np.dot(ab, ab), 0, 1)
    return np.linalg.norm(p - (a + t * ab))


def nearest_weights(p, names, bones, sharp=6):
    ds = np.array([seg_dist(p, bones[n][0], bones[n][1]) for n in names])
    w = 1.0 / (ds ** sharp + 1e-6)
    order = np.argsort(-w)[:2]
    tot = w[order].sum()
    return {names[i]: float(w[i] / tot) for i in order if w[i] / tot > 0.02}


def body_weights(p, kind):
    x, y, z = p
    if kind == "chibi":
        wh = smoothstep(1.45, 1.70, y)
        ws = smoothstep(0.95, 1.20, y) * (1 - wh)
        wp = 1 - smoothstep(0.95, 1.20, y)
        w = {"Head": wh, "Spine": ws, "Hips": wp}
        leg_top = 0.4
    else:
        wh = smoothstep(1.85, 2.05, y)
        wc = smoothstep(1.35, 1.60, y) * (1 - wh)
        ws = smoothstep(0.85, 1.10, y) * (1 - smoothstep(1.35, 1.60, y))
        wp = 1 - smoothstep(0.85, 1.10, y)
        w = {"Head": wh, "Chest": wc, "Spine": ws, "Hips": wp}
        leg_top = 0.5
    leg = (1 - smoothstep(0.08, leg_top, y)) * smoothstep(0.08, 0.35, abs(x)) * 0.55
    if leg > 0.01:
        w = {k: v * (1 - leg) for k, v in w.items()}
        w["LeftUpLeg" if x > 0 else "RightUpLeg"] = leg
    return {k: float(v) for k, v in w.items() if v > 0.01}


def region_weights(p, region, kind, bones):
    if region in ("body", "face"):
        return body_weights(p, kind)
    side = "Left" if p[0] > 0 else "Right"
    if region == "arm":
        names = [n for n in (f"{side}Arm", f"{side}ForeArm", f"{side}Hand") if n in bones]
        return nearest_weights(p, names, bones)
    if region == "hand":
        return {f"{side}Hand": 1.0}
    if region == "foot":
        return {f"{side}Foot": 1.0}
    if region == "ear":
        y0 = bones[f"{side}Ear"][0][1]
        t = smoothstep(y0 - 0.05, y0 + 0.2, p[1])
        return {"Head": 1 - t, f"{side}Ear": t} if t < 0.99 else {f"{side}Ear": 1.0}
    if region == "tail":
        return {"Tail": 1.0}
    if region == "head":
        return {"Head": 1.0}
    raise ValueError(region)


def creature_parts(kind):
    """skinned parts for 'totoro' or 'chibi' (unscaled)."""
    parts = []
    u0, u1, v0, v1 = PARTS_RECT
    fur = (u0, u1, v0, v1)
    if kind == "totoro":
        prof = Profile(BODY_PROFILE)
        body = revolve(prof, 56, 60, "Body")
        parts.append(body)
        claw_uv = (0.5, 0.33)
        for s in (1, -1):
            # ears
            path = [(s * 0.23, 2.30, -0.01), (s * 0.27, 2.55, -0.02), (s * 0.30, 2.78, -0.03),
                    (s * 0.32, 2.92, -0.035), (s * 0.33, 3.0, -0.04)]
            parts.append(tube(path, [0.13, 0.125, 0.10, 0.06, 0.012], 10, "Body", fur,
                              flat=(1.0, 0.62), up=(0, 0, 1), region="ear"))
            # arms: short and small
            path = [(s * 0.66, 1.70, 0.0), (s * 0.80, 1.55, 0.04), (s * 0.95, 1.38, 0.08),
                    (s * 1.06, 1.20, 0.12), (s * 1.12, 1.06, 0.15), (s * 1.15, 0.97, 0.17)]
            parts.append(tube(path, [0.17, 0.17, 0.16, 0.15, 0.15, 0.11], 12, "Body", fur,
                              region="arm"))
            for k in (-1, 0, 1):  # three little claws
                base = np.array([s * (1.16 + 0.02 * k * s * 0), 0.93, 0.17]) + np.array([s * 0.0, 0, 0.06 * k])
                tip = base + np.array([s * 0.015, -0.09, 0.02 * k])
                parts.append(tube([base, tip], [0.028, 0.004], 6, "Body", fixed_uv=claw_uv,
                                  cap0=True, cap1=True, region="hand"))
            # feet: small, almost under the belly
            parts.append(ellipsoid((s * 0.37, 0.085, 0.50), (0.20, 0.10, 0.25), "Body",
                                   rows=7, cols=12, uvrect=fur, region="foot"))
            for k in (-1, 0, 1):
                base = np.array([s * 0.37 + 0.075 * k, 0.06, 0.70])
                tip = base + np.array([0.01 * k, -0.03, 0.08])
                parts.append(tube([base, tip], [0.03, 0.004], 6, "Body", fixed_uv=claw_uv,
                                  region="foot"))
        parts.append(ellipsoid((0, 0.52, -0.86), (0.30, 0.26, 0.24), "Body", rows=7, cols=12,
                               uvrect=fur, region="tail"))
    else:  # chibi
        prof = Profile(CHIBI_PROFILE)
        parts.append(revolve(prof, 28, 22, "Body", bulge=False))
        for s in (1, -1):
            path = [(s * 0.26, 1.85, 0.0), (s * 0.33, 2.25, -0.01), (s * 0.39, 2.65, -0.015),
                    (s * 0.42, 3.0, -0.02)]
            parts.append(tube(path, [0.17, 0.15, 0.09, 0.012], 8, "Body", fur, flat=(1, 0.6),
                              region="ear"))
            path = [(s * 0.78, 1.32, 0.05), (s * 0.92, 1.15, 0.10), (s * 1.02, 0.98, 0.13)]
            parts.append(tube(path, [0.15, 0.14, 0.11], 8, "Body", fur, region="arm"))
            parts.append(ellipsoid((s * 0.36, 0.08, 0.42), (0.20, 0.10, 0.24), "Body", rows=5,
                                   cols=8, uvrect=fur, region="foot"))
    return parts


def face_parts(body_part, bones):
    """Face decal (alpha-tested atlas) cut from the body surface + 3D whiskers."""
    face = Part("Face", True, "face")
    V = np.array(body_part.v)
    # vertex normals (area weighted) for the offset
    nrms = np.zeros_like(V)
    for f in body_part.f:
        a, b, c = V[f[0]], V[f[1]], V[f[2]]
        n = np.cross(b - a, c - a)
        for i in f:
            nrms[i] += n
    nrms = np.array([nrm(n) for n in nrms])
    remap = {}
    cell = 0.5
    for f in body_part.f:
        pts = V[list(f)]
        if not (np.all(pts[:, 2] > 0.05) and np.all(nrms[list(f)][:, 2] > 0.15)):
            continue
        if not (np.all(pts[:, 0] > FACE_X0 + 0.02) and np.all(pts[:, 0] < FACE_X1 - 0.02)
                and np.all(pts[:, 1] > FACE_Y0 + 0.02) and np.all(pts[:, 1] < FACE_Y1 - 0.02)):
            continue
        ids, uvs = [], []
        for i in f:
            if i not in remap:
                remap[i] = face.add_v(V[i] + nrms[i] * 0.008)
            ids.append(remap[i])
            fx = (V[i][0] - FACE_X0) / (FACE_X1 - FACE_X0)
            fy = (V[i][1] - FACE_Y0) / (FACE_Y1 - FACE_Y0)
            uvs.append((fx * cell, 0.5 + fy * cell))
        face.add_f(ids, uvs)
    # whiskers: 3 per side, from the cheeks, below and outside the eyes
    prof = Profile(BODY_PROFILE)
    wh = Part("Face", False, "head")
    swatch = (0.007, 0.993)
    for s in (1, -1):
        for k, (yy, ang) in enumerate([(2.075, 9), (2.035, 0), (1.995, -9)]):
            r = prof.r_at_y_upper(yy)
            x0 = s * 0.43
            th = math.asin(min(abs(x0) / r, 0.99))
            z0 = r * math.cos(th) * DEPTH_FRONT
            start = np.array([x0, yy, z0 - 0.01])
            d = nrm([s * math.cos(math.radians(ang)), math.sin(math.radians(ang)), -0.25])
            L = 0.50
            pts = [start + d * L * t + np.array([0, -0.04 * t * t, 0]) for t in np.linspace(0, 1, 5)]
            widths = [0.016, 0.013, 0.010, 0.007, 0.003]
            ids = []
            for q, w in zip(pts, widths):
                ids.append((wh.add_v(q + [0, w, 0]), wh.add_v(q - [0, w, 0])))
            for a, b in zip(ids[:-1], ids[1:]):
                wh.add_f([a[1], b[1], b[0], a[0]], [swatch] * 4)
    return [face, wh]


def equipment(kind):
    """dict: node name -> (bone, [parts]) in unscaled big-Totoro coordinates."""
    eq = {}
    # Leaf hat lying ON the crown; ears poke through it
    hat_y = 2.69
    eq["LeafHat"] = ("Head", [leaf((0, hat_y, 0.0), 0.74, "Leaf", droop=0.17, tilt=rot_axis((0, 1, 0), 180))])
    # little white Chibi sitting on top of the hat
    ch = []
    sc = 0.42 / 3.0
    for p in creature_parts("chibi"):
        p2 = Part("Chibi", p.smooth, "equip")
        p2.v = [tuple(np.array(v) * sc + np.array([0.0, hat_y - 0.01, 0.06])) for v in p.v]
        p2.f, p2.uv = p.f, p.uv
        ch.append(p2)
    eq["Chibi"] = ("Head", ch)
    # umbrella leaf in the LEFT hand (+X)
    stem = [(1.17, 0.70, 0.22), (1.17, 1.20, 0.22), (1.15, 1.9, 0.22), (1.08, 2.6, 0.2),
            (0.95, 3.15, 0.16), (0.82, 3.42, 0.12)]
    um = [tube(stem, [0.03, 0.03, 0.028, 0.026, 0.024, 0.02], 6, "Leaf", fixed_uv=(0.25, 0.5),
               region="equip"),
          leaf((0.70, 3.50, 0.10), 0.95, "Leaf", droop=0.40, tilt=rot_axis((0, 0, 1), -14),
               notch=False)]
    eq["UmbrellaLeaf"] = ("LeftHand", um)
    if kind == "mini":
        return eq
    # staff in the RIGHT hand (-X), curled top
    pts = [(-1.24, 0.0, 0.30), (-1.20, 0.6, 0.31), (-1.22, 1.2, 0.30), (-1.18, 1.8, 0.31),
           (-1.22, 2.35, 0.30), (-1.20, 2.65, 0.30)]
    cx, cy = -1.06, 2.78
    for k in range(1, 15):
        a = math.pi + k / 14 * 1.6 * 2 * math.pi * -1
        rr = 0.17 * (1 - k / 14 * 0.65)
        pts.append((cx + rr * math.cos(a) * -1, cy + rr * math.sin(a), 0.30))
    rad = list(np.linspace(0.05, 0.04, 6)) + list(np.linspace(0.038, 0.016, 14))
    eq["Staff"] = ("RightHand", [tube(pts, rad, 7, "Wood", (0, 1, 0, 4), region="equip")])
    # glowing lantern hanging from the curl
    lx, ly, lz = -0.88, 2.42, 0.30
    lan = [tube([(lx, ly - 0.12, lz), (lx, ly + 0.12, lz)], [0.11, 0.11], 8, "Lantern",
                (0, 1, 0, 1), region="equip", smooth=False),
           tube([(lx, ly + 0.12, lz), (lx, ly + 0.22, lz)], [0.14, 0.02], 8, "Wood",
                (0, 1, 0, 1), region="equip", smooth=False),
           tube([(lx, ly - 0.16, lz), (lx, ly - 0.12, lz)], [0.13, 0.13], 8, "Wood",
                (0, 1, 0, 1), region="equip", smooth=False),
           tube([(lx, ly + 0.22, lz), (lx, 2.70, lz)], [0.008, 0.008], 4, "Wood",
                (0, 1, 0, 1), region="equip")]
    eq["Lantern"] = ("RightHand", lan)
    # necklace: rope around the neck + red maple leaf pendant
    prof = Profile(BODY_PROFILE)
    rope = []
    for k in range(24):
        a = 2 * math.pi * k / 24
        yy = 1.82 - 0.14 * max(math.cos(a), 0) ** 2
        r = prof.r_at_y_upper(yy) + 0.02
        c = math.cos(a)
        rope.append((r * math.sin(a), yy, r * c * (DEPTH_FRONT if c > 0 else 0.82) + 0.01))
    neck = [tube(rope, [0.014] * 24, 5, "Wood", fixed_uv=(0.5, 0.5), closed=True, region="equip")]
    py = 1.62
    pr = prof.r_at_y_upper(py)
    pz = pr * DEPTH_FRONT + 0.03
    outline = []
    for k in range(40):
        a = 2 * math.pi * k / 40
        lobe = 0.5 + 0.5 * abs(math.cos(2.5 * (a - math.pi / 2)))
        rr = 0.075 * (0.45 + 0.55 * lobe ** 3)
        outline.append((rr * math.cos(a), py + rr * math.sin(a) - 0.01, pz))
    neck.append(fan((0, py - 0.01, pz + 0.005), outline, "Pendant"))
    eq["Necklace"] = ("Chest", neck)
    # wooden cage backpack with a paw plate
    bk = []
    cxb, cyb, czb = 0.0, 1.48, -0.98
    W, H, D = 0.80, 0.95, 0.42
    t = 0.045
    for sx in (-1, 1):
        for sz in (-1, 1):
            bk.append(box((cxb + sx * W / 2, cyb, czb + sz * D / 2), (t, H, t), "Wood"))
    for yy in (-H / 2, 0, H / 2):
        for sz in (-1, 1):
            bk.append(box((cxb, cyb + yy, czb + sz * D / 2), (W, t, t), "Wood"))
        for sx in (-1, 1):
            bk.append(box((cxb + sx * W / 2, cyb + yy, czb), (t, t, D), "Wood"))
    for sx in (-0.12, 0.12):
        bk.append(box((cxb + sx, cyb, czb - D / 2), (0.03, H, 0.03), "Wood"))
    bk.append(box((cxb, cyb + 0.05, czb - D / 2 - 0.03), (0.26, 0.26, 0.03), "Lantern",
                  uvrect=(0, 1, 0, 1)))
    eq["Backpack"] = ("Chest", bk)
    return eq


# =============================================================================
# Blender scene assembly
# =============================================================================
MATS = {}


def make_material(name, image=None, color=None, emissive=False, alpha_clip=False, double=False,
                  rough=1.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    bsdf = nt.nodes["Principled BSDF"]
    bsdf.inputs["Roughness"].default_value = rough
    bsdf.inputs["Metallic"].default_value = 0.0
    if image:
        img = bpy.data.images.load(image)
        tex = nt.nodes.new("ShaderNodeTexImage")
        tex.image = img
        nt.links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
        if emissive:
            nt.links.new(tex.outputs["Color"], bsdf.inputs["Emission Color"])
            bsdf.inputs["Emission Strength"].default_value = 2.0
        if alpha_clip:
            rnd = nt.nodes.new("ShaderNodeMath")
            rnd.operation = "ROUND"
            nt.links.new(tex.outputs["Alpha"], rnd.inputs[0])
            nt.links.new(rnd.outputs[0], bsdf.inputs["Alpha"])
    elif color:
        bsdf.inputs["Base Color"].default_value = (*color, 1.0)
    m.use_backface_culling = not double
    MATS[name] = m
    return m


def setup_materials(body_tex):
    MATS.clear()
    make_material("Body", body_tex)
    make_material("Face", os.path.join(TEX, "face.png"), alpha_clip=True, double=True)
    make_material("Leaf", os.path.join(TEX, "leaf.jpg"), double=True)
    make_material("Wood", os.path.join(TEX, "wood.jpg"))
    make_material("Lantern", os.path.join(TEX, "lantern.jpg"), emissive=True)
    make_material("Chibi", os.path.join(TEX, "chibi_body.jpg"))
    make_material("Pendant", color=(0.75, 0.08, 0.05), double=True)


def make_object(name, parts, scale, kind=None, bones=None, skinned=False):
    verts, faces, uvs, mats, smooth, weights = [], [], [], [], [], []
    mat_names = []
    for p in parts:
        off = len(verts)
        verts += [B(np.array(v) * scale) for v in p.v]
        if p.mat not in mat_names:
            mat_names.append(p.mat)
        for f, uv in zip(p.f, p.uv):
            faces.append(tuple(i + off for i in f))
            uvs.append(uv)
            mats.append(mat_names.index(p.mat))
            smooth.append(p.smooth)
        if skinned:
            weights += [region_weights(np.array(v), p.region, kind, bones) for v in p.v]
    me = bpy.data.meshes.new(name)
    me.from_pydata([tuple(v) for v in verts], [], faces)
    uvl = me.uv_layers.new(name="UVMap")
    li = 0
    for poly, uv in zip(me.polygons, uvs):
        for k in range(poly.loop_total):
            uvl.data[poly.loop_start + k].uv = uv[k]
        poly.material_index = mats[li]
        poly.use_smooth = smooth[li]
        li += 1
    for mn in mat_names:
        me.materials.append(MATS[mn])
    me.validate()
    me.update()
    ob = bpy.data.objects.new(name, me)
    bpy.context.scene.collection.objects.link(ob)
    if skinned:
        groups = {}
        for vi, w in enumerate(weights):
            for bn, val in w.items():
                if bn not in groups:
                    groups[bn] = ob.vertex_groups.new(name=bn)
                groups[bn].add([vi], val, "REPLACE")
    return ob, len(faces)


def make_armature(bones, scale):
    arm_data = bpy.data.armatures.new("Armature")
    arm = bpy.data.objects.new("Armature", arm_data)
    bpy.context.scene.collection.objects.link(arm)
    bpy.context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode="EDIT")
    eb = {}
    for name, (h, t, par) in bones.items():
        b = arm_data.edit_bones.new(name)
        b.head = B(np.array(h) * scale)
        b.tail = B(np.array(t) * scale)
        b.roll = 0.0
        eb[name] = b
    for name, (h, t, par) in bones.items():
        if par:
            eb[name].parent = eb[par]
            eb[name].use_connect = False
    bpy.ops.object.mode_set(mode="OBJECT")
    return arm


def parent_to_bone(ob, arm, bone_name):
    ob.parent = arm
    ob.parent_type = "BONE"
    ob.parent_bone = bone_name
    bone = arm.data.bones[bone_name]
    m = arm.matrix_world @ bone.matrix_local @ Matrix.Translation((0, bone.length, 0))
    ob.matrix_parent_inverse = m.inverted()


# =============================================================================
# animation
# =============================================================================
AX = {"x": Vector((1, 0, 0)), "y": Vector((0, 0, 1)), "z": Vector((0, -1, 0))}  # gl axis in Blender


def q_gl(rx=0.0, ry=0.0, rz=0.0):
    qx = Quaternion(AX["x"], math.radians(rx))
    qy = Quaternion(AX["y"], math.radians(ry))
    qz = Quaternion(AX["z"], math.radians(rz))
    return qy @ qx @ qz


def mirror(pose):
    """swap Left/Right and mirror rotations across the X=0 plane."""
    out = {}
    for k, v in pose.items():
        if k == "loc":
            out[k] = (-v[0], v[1], v[2])
            continue
        k2 = k.replace("Left", "@").replace("Right", "Left").replace("@", "Right")
        out[k2] = (v[0], -v[1], -v[2])
    return out


def S(t):
    return math.sin(2 * math.pi * t)


def C(t):
    return math.cos(2 * math.pi * t)


def lerp_pose(a, b, t):
    keys = set(a) | set(b)
    out = {}
    for k in keys:
        va = a.get(k, (0, 0, 0))
        vb = b.get(k, (0, 0, 0))
        out[k] = tuple(x + (y - x) * t for x, y in zip(va, vb))
    return out


NEUTRAL = {}


def clips_totoro():
    clips = {}

    def cyc(n, fn, step=2):
        return [(f, fn(f / n)) for f in range(0, n + 1, step)]

    clips["Idle"] = (cyc(60, lambda t: {
        "loc": (0, 0.012 * S(t), 0), "Spine": (1.2 * S(t), 0, 0), "Chest": (-0.8 * S(t), 0, 0),
        "Head": (1.5 * S(t + 0.2), 2.5 * S(t), 1.2 * S(t)),
        "LeftEar": (0, 0, 5 * max(0, S(2 * t)) ** 6), "RightEar": (0, 0, 0),
        "LeftArm": (2 * S(t), 0, 3 + 1.5 * S(t)), "RightArm": (2 * S(t), 0, -3 - 1.5 * S(t)),
        "Tail": (4 * S(t), 0, 0)}, 3), True)

    def walk(t, a=1.0, lean=4, bob=0.04):
        s, c = S(t), C(t)
        return {"loc": (0, bob * C(2 * t), 0), "Hips": (lean * 0.3, 6 * s * a, 7 * s * a),
                "Spine": (lean, 0, 0), "Head": (-lean, -5 * s * a, -6 * s * a),
                "LeftUpLeg": (-28 * s * a, 0, -7 * s * a), "RightUpLeg": (28 * s * a, 0, -7 * s * a),
                "LeftFoot": (-14 * max(0, c) * a, 0, 0), "RightFoot": (-14 * max(0, -c) * a, 0, 0),
                "LeftArm": (22 * s * a, 0, 5), "RightArm": (-22 * s * a, 0, -5),
                "LeftForeArm": (-8, 0, 0), "RightForeArm": (-8, 0, 0),
                "Tail": (6 * C(2 * t), 10 * s, 0),
                "LeftEar": (4 * C(2 * t), 0, 0), "RightEar": (4 * C(2 * t), 0, 0)}

    clips["Walk"] = (cyc(32, lambda t: walk(t)), True)

    def run(t):
        s, c = S(t), C(t)
        return {"loc": (0, 0.10 * max(0, -C(2 * t)) + 0.02, 0),
                "Hips": (12, 8 * s, 5 * s), "Spine": (6, 0, 0), "Head": (-16, -6 * s, -4 * s),
                "LeftUpLeg": (-45 * s, 0, -5 * s), "RightUpLeg": (45 * s, 0, -5 * s),
                "LeftFoot": (-25 * max(0, c), 0, 0), "RightFoot": (-25 * max(0, -c), 0, 0),
                "LeftArm": (40 * s, 0, 22), "RightArm": (-40 * s, 0, -22),
                "LeftForeArm": (-20, 0, 0), "RightForeArm": (-20, 0, 0),
                "Tail": (10 * C(2 * t), 14 * s, 0),
                "LeftEar": (10 + 6 * C(2 * t), 0, 0), "RightEar": (10 + 6 * C(2 * t), 0, 0)}

    clips["Run"] = (cyc(20, run), True)

    up_arms = {"LeftArm": (-60, 0, 70), "RightArm": (-60, 0, -70)}
    clips["Jump"] = ([
        (0, {}),
        (5, {"loc": (0, -0.22, 0), "Spine": (14, 0, 0), "Head": (-8, 0, 0),
             "LeftArm": (30, 0, 10), "RightArm": (30, 0, -10),
             "LeftUpLeg": (-20, 0, 0), "RightUpLeg": (-20, 0, 0)}),
        (9, {"loc": (0, 0.08, 0), "Spine": (-8, 0, 0), "Head": (-10, 0, 0), **up_arms,
             "LeftUpLeg": (12, 0, 0), "RightUpLeg": (12, 0, 0), "LeftEar": (14, 0, 0), "RightEar": (14, 0, 0)}),
        (20, {"loc": (0, 0.0, 0), "Spine": (-4, 0, 0), "LeftArm": (-40, 0, 55), "RightArm": (-40, 0, -55),
              "LeftUpLeg": (8, 0, 0), "RightUpLeg": (8, 0, 0)}),
    ], False)

    clips["Fall"] = (cyc(24, lambda t: {
        "Head": (-12, 0, 0), "Spine": (-4, 0, 0),
        "LeftArm": (-20, 0, 105 + 15 * S(t)), "RightArm": (-20, 0, -105 - 15 * S(t)),
        "LeftHand": (0, 0, 15 * S(t + 0.2)), "RightHand": (0, 0, -15 * S(t + 0.2)),
        "LeftUpLeg": (10 + 10 * S(t), 0, 0), "RightUpLeg": (10 - 10 * S(t), 0, 0),
        "LeftEar": (-18, 0, 0), "RightEar": (-18, 0, 0), "Tail": (-15, 0, 0)}, 3), True)

    clips["Land"] = ([
        (0, {"LeftArm": (-20, 0, 60), "RightArm": (-20, 0, -60)}),
        (4, {"loc": (0, -0.24, 0), "Spine": (14, 0, 0), "Chest": (6, 0, 0), "Head": (-10, 0, 0),
             "LeftArm": (-25, 0, 18), "RightArm": (-25, 0, -18), "LeftUpLeg": (-22, 0, 0),
             "RightUpLeg": (-22, 0, 0), "LeftEar": (20, 0, 0), "RightEar": (20, 0, 0)}),
        (9, {"loc": (0, 0.03, 0), "Spine": (-3, 0, 0)}),
        (14, {}),
    ], False)

    clips["Swim"] = (cyc(40, lambda t: {
        "loc": (0, -0.55, 0), "Hips": (72, 0, 4 * S(t)), "Head": (-50, 4 * S(t), 0),
        "LeftArm": (-95 + 55 * S(t), 0, 35), "RightArm": (-95 - 55 * S(t), 0, -35),
        "LeftForeArm": (-15 + 10 * C(t), 0, 0), "RightForeArm": (-15 - 10 * C(t), 0, 0),
        "LeftUpLeg": (20 * S(2 * t), 0, 0), "RightUpLeg": (-20 * S(2 * t), 0, 0),
        "Tail": (10 * S(2 * t), 0, 0), "LeftEar": (-25, 0, 0), "RightEar": (-25, 0, 0)}), True)

    clips["Crouch"] = (cyc(40, lambda t: {
        "loc": (0, -0.30 + 0.01 * S(t), 0), "Spine": (16, 0, 0), "Chest": (6, 0, 0),
        "Head": (-14, 0, 0), "LeftUpLeg": (-55, 0, 0), "RightUpLeg": (-55, 0, 0),
        "LeftFoot": (30, 0, 0), "RightFoot": (30, 0, 0),
        "LeftArm": (-35, 0, -8), "RightArm": (-35, 0, 8), "LeftEar": (20, 0, 0),
        "RightEar": (20, 0, 0)}, 4), True)

    roar = {"Spine": (-12, 0, 0), "Chest": (-8, 0, 0), "Head": (-20, 0, 0),
            "LeftArm": (-35, 0, 75), "RightArm": (-35, 0, -75), "LeftHand": (0, 0, 20),
            "RightHand": (0, 0, -20), "LeftEar": (-20, 0, 0), "RightEar": (-20, 0, 0),
            "loc": (0, 0.05, 0)}
    keys = [(0, {}), (8, {"Spine": (10, 0, 0), "Head": (12, 0, 0), "LeftArm": (-15, 0, 15),
                          "RightArm": (-15, 0, -15), "loc": (0, -0.08, 0)}), (13, roar)]
    for f in range(16, 32, 3):
        r = dict(roar)
        r["Head"] = (-20, 3 * (1 if f % 2 else -1), 2 * (1 if f % 2 else -1))
        keys.append((f, r))
    keys += [(32, roar), (42, {})]
    clips["Roar"] = (keys, False)

    cast = {"LeftArm": (-150, 0, 18), "RightArm": (-150, 0, -18), "Head": (-12, 0, 0),
            "Spine": (-5, 0, 0)}
    keys = [(0, {}), (10, cast)]
    for f in range(13, 31, 3):
        c = dict(cast)
        w = 1 if (f // 3) % 2 else -1
        c["LeftHand"] = (0, 0, 22 * w)
        c["RightHand"] = (0, 0, -22 * w)
        keys.append((f, c))
    keys += [(31, cast), (40, {})]
    clips["Cast"] = (keys, False)

    clips["Summon"] = ([
        (0, {}),
        (10, {"LeftArm": (-10, 0, 105), "RightArm": (-10, 0, -105), "Head": (-16, 0, 0),
              "Spine": (-6, 0, 0), "loc": (0, 0.05, 0)}),
        (16, {"LeftArm": (-20, 0, 115), "RightArm": (-20, 0, -115), "Head": (-18, 0, 0),
              "Spine": (-7, 0, 0), "loc": (0, 0.06, 0)}),
        (24, {"LeftArm": (-85, 0, 12), "RightArm": (-85, 0, -12), "Spine": (12, 0, 0),
              "Head": (-6, 0, 0), "LeftHand": (-20, 0, 0), "RightHand": (-20, 0, 0)}),
        (32, {"LeftArm": (-80, 0, 12), "RightArm": (-80, 0, -12), "Spine": (10, 0, 0)}),
        (42, {}),
    ], False)

    wave_up = {"LeftArm": (-10, 0, 150), "Head": (0, 0, -6), "Spine": (0, 0, -3)}
    keys = [(0, {}), (8, wave_up)]
    for i, f in enumerate(range(12, 36, 4)):
        w = dict(wave_up)
        w["LeftForeArm"] = (0, 0, 28 if i % 2 else -22)
        w["LeftHand"] = (0, 0, 15 if i % 2 else -15)
        keys.append((f, w))
    keys += [(36, wave_up), (44, {})]
    clips["Wave"] = (keys, False)

    clips["StaffSwing"] = ([
        (0, {}),
        (8, {"RightArm": (-170, 0, -10), "Spine": (-8, -15, 0), "Hips": (0, -10, 0),
             "Head": (-8, 10, 0), "LeftArm": (10, 0, 15)}),
        (12, {"RightArm": (-40, 0, -5), "RightForeArm": (-20, 0, 0), "Spine": (16, 15, 0),
              "Hips": (0, 10, 0), "Head": (-12, -8, 0), "loc": (0, -0.06, 0)}),
        (16, {"RightArm": (-30, 0, -5), "RightForeArm": (-20, 0, 0), "Spine": (14, 12, 0),
              "Hips": (0, 8, 0), "loc": (0, -0.05, 0)}),
        (26, {}),
    ], False)

    clips["Sit"] = (cyc(40, lambda t: {
        "loc": (0, -0.34 + 0.01 * S(t), 0), "Spine": (-4 + 1.2 * S(t), 0, 0),
        "LeftUpLeg": (-80, 0, -6), "RightUpLeg": (-80, 0, 6), "LeftFoot": (20, 0, 0),
        "RightFoot": (20, 0, 0), "LeftArm": (-18, 0, 4), "RightArm": (-18, 0, -4),
        "Head": (2 * S(t), 4 * S(t * 1), 0)}, 4), True)
    return clips


UPRIGHT = {
    "Jump": ("Left", "Right"), "Fall": ("Left", "Right"), "Land": ("Left", "Right"),
    "Swim": ("Left", "Right"), "Crouch": ("Left", "Right"), "Roar": ("Left", "Right"),
    "Cast": ("Left", "Right"), "Summon": ("Left", "Right"), "Wave": ("Left", "Right"),
    "StaffSwing": ("Left",), "Sit": ("Left", "Right"),
}


def build_actions(arm, clips, scale):
    pbones = arm.pose.bones
    arm.animation_data_create()
    for pb in pbones:
        pb.rotation_mode = "QUATERNION"
    rest_q = {pb.name: pb.bone.matrix_local.to_quaternion() for pb in pbones}
    for name, (keys, loop) in clips.items():
        act = bpy.data.actions.new(name)
        act.use_fake_user = True
        arm.animation_data.action = act
        for frame, pose in keys:
            upright = UPRIGHT.get(name, ())
            for pb in pbones:
                rot = pose.get(pb.name, (0, 0, 0))
                q = q_gl(*rot)
                side = pb.name[:-4] if pb.name.endswith("Hand") else None
                if side in upright:
                    # keep the held prop (umbrella / staff) upright while the arm moves
                    qa = q_gl(*pose.get(side + "Arm", (0, 0, 0)))
                    qf = q_gl(*pose.get(side + "ForeArm", (0, 0, 0)))
                    q = (qa @ qf).inverted() @ q
                R = rest_q[pb.name]
                pb.rotation_quaternion = R.inverted() @ q @ R
                pb.keyframe_insert("rotation_quaternion", frame=frame, group=pb.name)
                if pb.name == "Hips":
                    lv = pose.get("loc", (0, 0, 0))
                    wv = B(np.array(lv) * scale)
                    pb.location = R.inverted() @ wv
                    pb.keyframe_insert("location", frame=frame, group=pb.name)
                if "scale" in pose and pb.name in pose["scale"]:
                    pass
        # loop clips: make first and last keys equal and linear-ish tangents
        for fc in iter_fcurves(act):
            for kp in fc.keyframe_points:
                kp.interpolation = "BEZIER"
        track = arm.animation_data.nla_tracks.new()
        track.name = name
        strip = track.strips.new(name, 0, act)
        track.mute = True
        arm.animation_data.action = None
    # rest pose
    for pb in pbones:
        pb.rotation_quaternion = Quaternion()
        pb.location = Vector()


def iter_fcurves(act):
    if hasattr(act, "fcurves") and len(getattr(act, "fcurves", [])) > 0:
        yield from act.fcurves
        return
    for layer in getattr(act, "layers", []):
        for strip in layer.strips:
            for bag in strip.channelbags:
                yield from bag.fcurves


# =============================================================================
def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.context.scene.render.fps = FPS


def build(model):
    reset()
    if model == "totoro":
        scale, kind, bones = 1.0, "totoro", TOTORO_BONES
        setup_materials(os.path.join(OUT, "skins", "classic.jpg"))
    elif model == "mini":
        scale, kind, bones = 0.95 / 3.0, "totoro", TOTORO_BONES
        setup_materials(os.path.join(TEX, "mini_body.jpg"))
    else:
        scale, kind, bones = 0.55 / 3.0, "chibi", CHIBI_BONES
        setup_materials(os.path.join(TEX, "chibi_body.jpg"))

    arm = make_armature(bones, scale)
    parts = creature_parts(kind)
    tris = 0
    body_ob, n = make_object("Body", parts, scale, kind, bones, skinned=True)
    tris += n
    obs = [body_ob]
    if kind == "totoro":
        face_ob, n = make_object("Face", face_parts(parts[0], bones), scale, kind, bones, skinned=True)
        obs.append(face_ob)
        tris += n
    for ob in obs:
        ob.parent = arm
        mod = ob.modifiers.new("Armature", "ARMATURE")
        mod.object = arm
    if model != "chibi":
        for node, (bone, eparts) in equipment("mini" if model == "mini" else "totoro").items():
            ob, n = make_object(node, eparts, scale)
            tris += n
            parent_to_bone(ob, arm, bone)
    clips = clips_totoro()
    if model in ("mini", "chibi"):
        clips = {k: clips[k] for k in ("Idle", "Walk", "Run")}
    build_actions(arm, clips, scale)
    bpy.context.view_layer.update()
    # real triangle count
    deps = bpy.context.evaluated_depsgraph_get()
    tri = 0
    for ob in bpy.context.scene.objects:
        if ob.type == "MESH":
            me = ob.evaluated_get(deps).to_mesh()
            me.calc_loop_triangles()
            tri += len(me.loop_triangles)
            ob.evaluated_get(deps).to_mesh_clear()
    fname = {"totoro": "totoro.glb", "mini": "totoro_mini.glb", "chibi": "totoro_chibi.glb"}[model]
    path = os.path.join(OUT, fname)
    bpy.ops.export_scene.gltf(
        filepath=path, export_format="GLB", export_yup=True, export_apply=False,
        export_animations=True, export_animation_mode="ACTIONS", export_force_sampling=True,
        export_frame_step=1, export_image_format="AUTO", export_skins=True,
        export_draco_mesh_compression_enable=False, export_materials="EXPORT",
        export_texcoords=True, export_normals=True, export_tangents=False,
        export_def_bones=False, export_optimize_animation_size=True)
    print(f"{fname}: {tri} triangles, {os.path.getsize(path) / 1e6:.2f} MB")


if __name__ == "__main__":
    models = sys.argv[1:] or ["totoro", "mini", "chibi"]
    for m in models:
        build(m)
