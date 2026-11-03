"""Masha (game heroine) — stylised 3D model, 1.34 m. Run: python3 mpaint.py && python3 mbuild.py
glTF coordinates in this file: metres, Y up, faces +Z, her left hand = +X."""
import math
import os
import sys

import bpy
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.path.insert(1, os.path.join(HERE, "..", "..", "totoro", "_build"))
import build as T  # noqa: E402
from build import Part, tube, ellipsoid, B, nrm, make_armature, parent_to_bone, rot_axis, q_gl  # noqa: E402
from shape import smoothstep  # noqa: E402

OUT = os.path.normpath(os.path.join(HERE, ".."))
TEX = os.path.join(HERE, "tex")

HEAD_C = np.array([0.0, 1.18, 0.01])
HEAD_R = np.array([0.122, 0.135, 0.118])
FX0, FX1, FY0, FY1 = -0.11, 0.11, 1.07, 1.29   # face atlas frame (front projection)

BONES = {
    "Hips": ((0, 0.70, 0), (0, 0.82, 0), None),
    "Spine": ((0, 0.82, 0), (0, 0.93, 0), "Hips"),
    "Chest": ((0, 0.93, 0), (0, 1.04, 0), "Spine"),
    "Head": ((0, 1.04, 0), (0, 1.32, 0.01), "Chest"),
    "Braid1": ((0, 1.17, -0.13), (0, 1.03, -0.16), "Head"),
    "Braid2": ((0, 1.03, -0.16), (0, 0.90, -0.155), "Braid1"),
    "Braid3": ((0, 0.90, -0.155), (0, 0.76, -0.14), "Braid2"),
    "LeftArm": ((0.15, 0.985, 0.0), (0.245, 0.80, 0.0), "Chest"),
    "LeftForeArm": ((0.245, 0.80, 0.0), (0.33, 0.63, 0.02), "LeftArm"),
    "LeftHand": ((0.33, 0.63, 0.02), (0.36, 0.56, 0.025), "LeftForeArm"),
    "RightArm": ((-0.15, 0.985, 0.0), (-0.245, 0.80, 0.0), "Chest"),
    "RightForeArm": ((-0.245, 0.80, 0.0), (-0.33, 0.63, 0.02), "RightArm"),
    "RightHand": ((-0.33, 0.63, 0.02), (-0.36, 0.56, 0.025), "RightForeArm"),
    "LeftUpLeg": ((0.065, 0.72, 0.0), (0.07, 0.40, 0.005), "Hips"),
    "LeftLeg": ((0.07, 0.40, 0.005), (0.07, 0.075, -0.01), "LeftUpLeg"),
    "LeftFoot": ((0.07, 0.075, -0.01), (0.07, 0.03, 0.10), "LeftLeg"),
    "RightUpLeg": ((-0.065, 0.72, 0.0), (-0.07, 0.40, 0.005), "Hips"),
    "RightLeg": ((-0.07, 0.40, 0.005), (-0.07, 0.075, -0.01), "RightUpLeg"),
    "RightFoot": ((-0.07, 0.075, -0.01), (-0.07, 0.03, 0.10), "RightLeg"),
}


def seg(p, a, b):
    p, a, b = (np.asarray(q, float) for q in (p, a, b))
    ab = b - a
    t = np.clip(np.dot(p - a, ab) / np.dot(ab, ab), 0, 1)
    return np.linalg.norm(p - (a + t * ab))


def nearest(p, names, sharp=6):
    ds = np.array([seg(p, *BONES[n][:2]) for n in names])
    w = 1 / (ds ** sharp + 1e-9)
    o = np.argsort(-w)[:2]
    tot = w[o].sum()
    return {names[i]: float(w[i] / tot) for i in o if w[i] / tot > 0.02}


def weights(region, p):
    x, y, z = p
    side = "Left" if x > 0 else "Right"
    if region == "head":
        return {"Head": 1.0}
    if region == "braid":
        return nearest(p, ["Braid1", "Braid2", "Braid3"])
    if region == "arm":
        w = nearest(p, [side + "Arm", side + "ForeArm", side + "Hand"])
        if y > 0.95:
            k = smoothstep(0.95, 1.0, y) * smoothstep(0.17, 0.12, abs(x))
            w = {n: v * (1 - k) for n, v in w.items()}
            w["Chest"] = w.get("Chest", 0) + k
        return w
    if region == "leg":
        return nearest(p, [side + "UpLeg", side + "Leg", side + "Foot"])
    if region == "foot":
        return {side + "Foot": 1.0}
    # torso / dress
    wh = smoothstep(1.03, 1.07, y)
    wc = smoothstep(0.88, 0.96, y) * (1 - wh)
    ws = smoothstep(0.78, 0.86, y) * (1 - smoothstep(0.88, 0.96, y))
    wp = 1 - smoothstep(0.78, 0.86, y)
    w = {"Head": wh, "Chest": wc, "Spine": ws, "Hips": wp}
    leg = (1 - smoothstep(0.45, 0.72, y)) * smoothstep(0.0, 0.12, abs(x)) * 0.45
    if leg > 0.01:
        w = {k: v * (1 - leg) for k, v in w.items()}
        w[side + "UpLeg"] = leg
    return {k: float(v) for k, v in w.items() if v > 0.01}


# ------------------------------------------------------------------ geometry
DRESS = [(0.235, 0.43), (0.215, 0.50), (0.185, 0.61), (0.150, 0.72), (0.122, 0.785), (0.118, 0.80),
         (0.128, 0.88), (0.134, 0.94), (0.128, 0.985), (0.10, 1.02), (0.062, 1.045), (0.05, 1.05)]


def dress():
    p = Part("Dress", True, "body")
    prof = np.array(DRESS)
    n = 40
    rings = []
    for k, (r, y) in enumerate(prof):
        ring = []
        skirt = y < 0.79
        fold = 0.013 * smoothstep(0.78, 0.46, y) if skirt else 0.0
        for j in range(n):
            th = 2 * math.pi * j / n
            s, c = math.sin(th), math.cos(th)
            rr = r + fold * math.sin(12 * th + 0.4)
            dz = 0.92 if skirt else 0.70
            ring.append(p.add_v((rr * s, y, rr * c * dz + (0.0 if skirt else 0.006))))
        rings.append(ring)
    for k in range(len(rings) - 1):
        a, b = rings[k], rings[k + 1]
        v0, v1 = (prof[k][1] - 0.45) / 0.6, (prof[k + 1][1] - 0.45) / 0.6
        for j in range(n):
            j2 = (j + 1) % n
            u0, u1 = j / n * 3, (j + 1) / n * 3
            p.add_f([a[j], a[j2], b[j2], b[j]], [(u0, v0), (u1, v0), (u1, v1), (u0, v1)])
    return p


def head_parts():
    parts = []
    parts.append(ellipsoid(HEAD_C, HEAD_R, "Skin", rows=14, cols=20, region="head"))
    parts.append(tube([(0, 1.0, 0.0), (0, 1.08, 0.005)], [0.042, 0.04], 10, "Skin", cap0=False, cap1=False, region="head"))
    for s in (1, -1):   # ears peeking under the hair
        parts.append(ellipsoid((s * 0.122, 1.165, 0.0), (0.018, 0.03, 0.022), "Skin", rows=5, cols=8, region="head"))
    # face decal: sits 2 mm over the front of the head ellipsoid
    face = Part("Face", True, "head")
    G = 26
    grid = []
    for i in range(G + 1):
        row = []
        for j in range(G + 1):
            x = FX0 + (FX1 - FX0) * j / G
            y = FY0 + (FY1 - FY0) * i / G
            q = 1 - (x / HEAD_R[0]) ** 2 - ((y - HEAD_C[1]) / HEAD_R[1]) ** 2
            if q < 0.06:
                row.append(None)
                continue
            z = HEAD_C[2] + HEAD_R[2] * math.sqrt(q) + 0.0025
            row.append((face.add_v((x, y, z)), (j / G * 0.5, 0.5 + i / G * 0.5)))
        grid.append(row)
    for i in range(G):
        for j in range(G):
            a, b, c, d = grid[i][j], grid[i][j + 1], grid[i + 1][j + 1], grid[i + 1][j]
            if None in (a, b, c, d):
                continue
            face.add_f([a[0], b[0], c[0], d[0]], [a[1], b[1], c[1], d[1]])
    parts.append(face)
    return parts


def hair_parts():
    parts = []
    hp = Part("Hair", True, "head")
    c = np.array([0.0, 1.195, -0.012])
    r = np.array([0.131, 0.146, 0.137])
    rows, cols = 22, 56
    cols_v = []
    for jc in range(cols):
        ph = 2 * math.pi * jc / cols
        sx, cz = math.sin(ph), math.cos(ph)
        front = smoothstep(-0.15, 0.45, cz)
        hairline = 1.262 - 0.13 * abs(sx * 0.95) ** 1.5 + 0.006 * sx
        y_low = 1.085 * (1 - front) + hairline * front
        th_min = math.acos(np.clip((c[1] - y_low) / r[1], -1, 1))
        col = []
        for i in range(rows + 1):
            th = th_min + (math.pi - th_min) * i / rows
            d = np.array([math.sin(th) * sx, -math.cos(th), math.sin(th) * cz])
            col.append(hp.add_v(c + d * r))
        cols_v.append(col)
    for jc in range(cols):
        j2 = (jc + 1) % cols
        for i in range(rows):
            u0, u1 = jc / cols * 2, (jc + 1) / cols * 2
            v0, v1 = i / rows, (i + 1) / rows
            hp.add_f([cols_v[jc][i], cols_v[j2][i], cols_v[j2][i + 1], cols_v[jc][i + 1]],
                     [(u0, v0), (u1, v0), (u1, v1), (u0, v1)])
    parts.append(hp)
    # braid: overlapping lobes, alternate sides
    br = Part("Hair", True, "braid")
    path = [np.array(BONES["Braid1"][0])] + [np.array(BONES[n][1]) for n in ("Braid1", "Braid2", "Braid3")]
    L = sum(np.linalg.norm(b - a) for a, b in zip(path[:-1], path[1:]))
    nseg = 16
    for k in range(nseg):
        t = (k + 0.5) / nseg
        dist = t * L
        for a, b in zip(path[:-1], path[1:]):
            l = np.linalg.norm(b - a)
            if dist <= l:
                pt = a + (b - a) * dist / l
                break
            dist -= l
        s = 1 if k % 2 else -1
        w = 0.036 - 0.014 * t
        br.v += []
        e = ellipsoid(pt + [s * w * 0.35, 0, -0.004], (w * 0.85, w * 1.25, w * 0.75), "Hair", rows=5, cols=8,
                      region="braid", rot=rot_axis((0, 0, 1), s * 25))
        parts.append(e)
    tip = path[-1]
    parts.append(tube([tip, tip + [0, -0.05, 0.004], tip + [0, -0.085, 0.01]], [0.02, 0.022, 0.004], 8, "Hair",
                      (0, 1, 0, 1), cap0=False, region="braid"))
    # hair ties: lilac pompoms + green ribbon at the top, small tie at the bottom
    for s in (1, -1):
        parts.append(ellipsoid((s * 0.03, 1.19, -0.15), (0.027, 0.027, 0.027), "Tie", rows=6, cols=10, region="head"))
        parts.append(tube([(s * 0.02, 1.19, -0.152), (s * 0.03, 1.12, -0.17), (s * 0.026, 1.05, -0.17)], [0.008, 0.008, 0.006],
                          6, "Ribbon", (0, 1, 0, 1), flat=(1.0, 0.4), region="braid"))
        parts.append(ellipsoid((s * 0.026, 1.045, -0.17), (0.022, 0.022, 0.022), "Tie", rows=5, cols=8, region="braid"))
    parts.append(ellipsoid(tip + [0, -0.005, 0.0], (0.022, 0.012, 0.022), "Tie", rows=4, cols=8, region="braid"))
    return parts


def limbs():
    parts = []
    for s in (1, -1):
        # puff sleeves (dress fabric) with a darker cuff band
        parts.append(ellipsoid((s * 0.165, 0.955, 0.0), (0.062, 0.075, 0.062), "Dress", rows=7, cols=12, region="arm",
                               rot=rot_axis((0, 0, 1), s * 28)))
        parts.append(tube([(s * 0.18, 0.905, 0.0), (s * 0.19, 0.89, 0.0)], [0.047, 0.047], 12, "Cuff", (0, 1, 0, 1),
                          cap0=False, cap1=False, region="arm"))
        arm = [(s * 0.16, 0.95, 0.0), (s * 0.245, 0.80, 0.0), (s * 0.33, 0.63, 0.02)]
        parts.append(tube(arm, [0.034, 0.03, 0.025], 10, "Skin", cap0=False, region="arm"))
        parts.append(ellipsoid((s * 0.345, 0.59, 0.025), (0.024, 0.042, 0.015), "Skin", rows=6, cols=8, region="arm",
                               rot=rot_axis((0, 0, 1), s * 15)))
        parts.append(tube([(s * 0.338, 0.615, 0.04), (s * 0.34, 0.585, 0.052)], [0.009, 0.007], 6, "Skin", region="arm"))
        # legs: skin, white socks, black Mary Jane shoes
        x = s * 0.068
        parts.append(tube([(x, 0.72, 0.0), (x, 0.40, 0.005), (x, 0.2, -0.004), (x, 0.09, -0.01)],
                          [0.058, 0.045, 0.038, 0.032], 10, "Skin", cap0=False, region="leg"))
        parts.append(tube([(x, 0.19, -0.005), (x, 0.06, -0.01)], [0.036, 0.034], 10, "Sock", cap0=False, region="leg"))
        parts.append(tube([(x, 0.19, -0.005), (x, 0.17, -0.005)], [0.04, 0.04], 10, "Sock", cap0=False, cap1=False, region="leg"))
        parts.append(ellipsoid((x, 0.035, 0.035), (0.045, 0.036, 0.09), "Shoe", rows=7, cols=12, region="foot"))
        parts.append(tube([(x - 0.04, 0.06, 0.03), (x, 0.075, 0.035), (x + 0.04, 0.06, 0.03)], [0.007] * 3, 5, "Shoe",
                          (0, 1, 0, 1), region="foot"))
    return parts


def trims():
    parts = []
    # Peter-Pan collar: two rounded white lobes meeting at the front
    for s in (1, -1):
        pts = [(s * 0.005, 1.035, 0.083), (s * 0.04, 1.03, 0.08), (s * 0.07, 1.035, 0.06), (s * 0.085, 1.045, 0.025),
               (s * 0.07, 1.052, -0.02), (s * 0.03, 1.055, -0.05)]
        parts.append(tube(pts, [0.018, 0.026, 0.026, 0.022, 0.016, 0.01], 8, "Collar", (0, 1, 0, 1), flat=(0.3, 1.0),
                          up=(0, 1, 0), region="body"))
    # buttons down the front
    for k, y in enumerate((0.99, 0.94, 0.89, 0.84, 0.74)):
        r = np.interp(y, [d[1] for d in DRESS], [d[0] for d in DRESS])
        z = r * (0.70 if y > 0.79 else 0.92) + (0.006 if y > 0.79 else 0.0) + 0.006
        parts.append(ellipsoid((0, y, z), (0.011, 0.011, 0.006), "Collar", rows=4, cols=8, region="body"))
    # waist seam
    ring = []
    for j in range(32):
        th = 2 * math.pi * j / 32
        ring.append((0.124 * math.sin(th), 0.79, 0.124 * math.cos(th) * 0.8 + 0.004))
    parts.append(tube(ring, [0.006] * 32, 4, "Cuff", (0, 1, 0, 1), closed=True, region="body"))
    return parts


def spirits():
    parts = []
    for (x, y, z, s) in ((-0.55, 1.05, 0.25, 1.0), (0.58, 1.25, 0.15, 0.8), (0.45, 0.62, 0.35, 0.7)):
        parts.append(ellipsoid((x, y, z), (0.07 * s, 0.07 * s, 0.07 * s), "Spirit", rows=6, cols=10, region="equip"))
        parts.append(tube([(x, y + 0.04 * s, z), (x + 0.02 * s, y + 0.11 * s, z), (x + 0.045 * s, y + 0.16 * s, z)],
                          [0.055 * s, 0.028 * s, 0.003], 10, "Spirit", fixed_uv=(0.5, 0.5), cap0=False, region="equip"))
    return parts


# ------------------------------------------------------------------ materials / objects
def mat(name, img=None, color=None, rough=0.8, emit=None, alpha=False, double=False, normal=None):
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
    if normal:
        tn = nt.nodes.new("ShaderNodeTexImage")
        tn.image = bpy.data.images.load(os.path.join(TEX, normal), check_existing=True)
        tn.image.colorspace_settings.name = "Non-Color"
        nm = nt.nodes.new("ShaderNodeNormalMap")
        nt.links.new(tn.outputs["Color"], nm.inputs["Color"])
        nt.links.new(nm.outputs["Normal"], b.inputs["Normal"])
    m.use_backface_culling = not double
    T.MATS[name] = m


def setup_materials():
    T.MATS.clear()
    mat("Skin", "skin.jpg", rough=0.6)
    mat("Face", "face.png", alpha=True, double=True, rough=0.6)
    mat("Hair", "hair.jpg", rough=0.45, double=True, normal="hair_n.jpg")
    mat("Dress", "classic_dress.jpg", rough=0.85, double=True, normal="dress_n.jpg")
    mat("Cuff", "classic_cuff.jpg", rough=0.85)
    mat("Collar", "classic_collar.jpg", rough=0.6)
    mat("Sock", color=(0.93, 0.92, 0.9), rough=0.9)
    mat("Shoe", color=(0.03, 0.03, 0.035), rough=0.25)
    mat("Tie", color=(0.62, 0.55, 0.85), rough=0.6)
    mat("Ribbon", color=(0.55, 0.85, 0.7), rough=0.5)
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
            wts += [weights(p.region, np.array(v)) for v in p.v]
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
    return ob


# ------------------------------------------------------------------ animation
def S(t):
    return math.sin(2 * math.pi * t)


def C(t):
    return math.cos(2 * math.pi * t)


def cyc(n, fn, step=2):
    return [(f, fn(f / n)) for f in range(0, n + 1, step)]


def braid(t, amp=8, lag=0.0, back=0.0):
    return {"Braid1": (back + amp * 0.4 * S(t - lag), 0, amp * 0.5 * S(t - lag + 0.1)),
            "Braid2": (amp * 0.4 * S(t - lag - 0.15), 0, amp * 0.6 * S(t - lag - 0.05)),
            "Braid3": (amp * 0.5 * S(t - lag - 0.3), 0, amp * 0.8 * S(t - lag - 0.2))}


def clips():
    c = {}
    c["Idle"] = (cyc(60, lambda t: {
        "loc": (0, 0.004 * S(t), 0), "Spine": (1.5 * S(t), 0, 0), "Head": (1.5 * S(t + 0.2), 3 * S(t * 1), 1.5 * S(t)),
        "LeftArm": (2 * S(t), 0, -2 + 2 * S(t)), "RightArm": (2 * S(t), 0, 2 - 2 * S(t)),
        "LeftForeArm": (-6, 0, 0), "RightForeArm": (-6, 0, 0), **braid(t, 3)}, 3), True)

    def walk(t):
        s, co = S(t), C(t)
        return {"loc": (0, 0.012 * C(2 * t), 0), "Hips": (0, 5 * s, 2 * s), "Spine": (3, -4 * s, 0), "Head": (-3, 3 * s, 0),
                "LeftUpLeg": (-24 * s, 0, 0), "RightUpLeg": (24 * s, 0, 0),
                "LeftLeg": (max(0, 38 * S(t + 0.25)), 0, 0), "RightLeg": (max(0, -38 * S(t + 0.25)), 0, 0),
                "LeftFoot": (-8 * co, 0, 0), "RightFoot": (8 * co, 0, 0),
                "LeftArm": (22 * s, 0, -6), "RightArm": (-22 * s, 0, 6),
                "LeftForeArm": (-12 - 6 * max(0, -s), 0, 0), "RightForeArm": (-12 - 6 * max(0, s), 0, 0),
                **braid(2 * t, 7, 0.1, 4)}
    c["Walk"] = (cyc(32, walk), True)

    def run(t):
        s = S(t)
        return {"loc": (0, 0.04 * max(0, -C(2 * t)) + 0.01, 0), "Hips": (8, 8 * s, 3 * s), "Spine": (6, -6 * s, 0),
                "Head": (-10, 5 * s, 0),
                "LeftUpLeg": (-48 * s, 0, 0), "RightUpLeg": (48 * s, 0, 0),
                "LeftLeg": (max(0, 85 * S(t + 0.2)), 0, 0) if True else 0, "RightLeg": (max(0, -85 * S(t + 0.2)), 0, 0),
                "LeftFoot": (-15 * C(t), 0, 0), "RightFoot": (15 * C(t), 0, 0),
                "LeftArm": (45 * s, 0, -10), "RightArm": (-45 * s, 0, 10),
                "LeftForeArm": (-70, 0, 0), "RightForeArm": (-70, 0, 0), **braid(2 * t, 14, 0.15, 18)}
    c["Run"] = (cyc(20, run), True)

    up = {"LeftArm": (-40, 0, 60), "RightArm": (-40, 0, -60), "LeftForeArm": (-20, 0, 0), "RightForeArm": (-20, 0, 0)}
    c["Jump"] = ([(0, {}),
                  (5, {"loc": (0, -0.08, 0), "Spine": (14, 0, 0), "LeftUpLeg": (-40, 0, 0), "RightUpLeg": (-40, 0, 0),
                       "LeftLeg": (70, 0, 0), "RightLeg": (70, 0, 0), "LeftArm": (30, 0, 10), "RightArm": (30, 0, -10)}),
                  (10, {"loc": (0, 0.02, 0), "Spine": (-6, 0, 0), **up, "LeftUpLeg": (-25, 0, 0), "RightUpLeg": (10, 0, 0),
                        "LeftLeg": (60, 0, 0), "RightLeg": (20, 0, 0), **braid(0.3, 0, 0, 30)}),
                  (20, {"LeftArm": (-30, 0, 50), "RightArm": (-30, 0, -50), "LeftUpLeg": (-20, 0, 0), "RightUpLeg": (-5, 0, 0),
                        "LeftLeg": (40, 0, 0), "RightLeg": (30, 0, 0), **braid(0, 0, 0, 20)})], False)
    c["Fall"] = (cyc(24, lambda t: {"Head": (-8, 0, 0), "LeftArm": (-20, 0, 80 + 10 * S(t)), "RightArm": (-20, 0, -80 - 10 * S(t)),
                                    "LeftUpLeg": (-20 + 10 * S(t), 0, 0), "RightUpLeg": (-5 - 10 * S(t), 0, 0),
                                    "LeftLeg": (40, 0, 0), "RightLeg": (25, 0, 0), **braid(t, 10, 0, -35)}, 3), True)
    c["Land"] = ([(0, {"LeftArm": (-20, 0, 50), "RightArm": (-20, 0, -50)}),
                  (4, {"loc": (0, -0.12, 0), "Spine": (18, 0, 0), "Head": (-10, 0, 0), "LeftUpLeg": (-55, 0, 0),
                       "RightUpLeg": (-55, 0, 0), "LeftLeg": (95, 0, 0), "RightLeg": (95, 0, 0), "LeftFoot": (-35, 0, 0),
                       "RightFoot": (-35, 0, 0), "LeftArm": (-30, 0, 25), "RightArm": (-30, 0, -25)}),
                  (10, {"loc": (0, 0.01, 0)}), (14, {})], False)
    c["Swim"] = (cyc(36, lambda t: {"loc": (0, -0.35, 0), "Hips": (75, 0, 4 * S(t)), "Head": (-55, 0, 0),
                                    "LeftArm": (-100 + 60 * S(t), 0, 25), "RightArm": (-100 - 60 * S(t), 0, -25),
                                    "LeftForeArm": (-20, 0, 0), "RightForeArm": (-20, 0, 0),
                                    "LeftUpLeg": (20 * S(2 * t), 0, 0), "RightUpLeg": (-20 * S(2 * t), 0, 0),
                                    "LeftLeg": (15, 0, 0), "RightLeg": (15, 0, 0), **braid(t, 10, 0, -40)}), True)
    c["Crouch"] = (cyc(40, lambda t: {"loc": (0, -0.22 + 0.004 * S(t), 0), "Spine": (22, 0, 0), "Head": (-18, 0, 0),
                                      "LeftUpLeg": (-80, 0, 6), "RightUpLeg": (-80, 0, -6), "LeftLeg": (120, 0, 0),
                                      "RightLeg": (120, 0, 0), "LeftFoot": (-40, 0, 0), "RightFoot": (-40, 0, 0),
                                      "LeftArm": (-40, 0, -10), "RightArm": (-40, 0, 10), "LeftForeArm": (-50, 0, 0),
                                      "RightForeArm": (-50, 0, 0), **braid(t, 3, 0, 10)}, 4), True)
    wave_up = {"LeftArm": (-10, 0, 140), "LeftForeArm": (0, 0, 20), "Head": (0, 0, -6), "Spine": (0, 0, -3)}
    keys = [(0, {}), (8, wave_up)]
    for i, f in enumerate(range(12, 36, 4)):
        w = dict(wave_up)
        w["LeftForeArm"] = (0, 0, 35 if i % 2 else 0)
        w["LeftHand"] = (0, 0, 15 if i % 2 else -15)
        keys.append((f, w))
    keys += [(36, wave_up), (44, {})]
    c["Wave"] = (keys, False)
    # 1 «Светлый круг»: arms open wide and draw a circle around her
    circ = [(0, {})]
    for k, f in enumerate(range(6, 36, 5)):
        a = k / 6 * 2 * math.pi
        circ.append((f, {"LeftArm": (-60 + 30 * math.cos(a), 0, 70 + 20 * math.sin(a)),
                         "RightArm": (-60 + 30 * math.cos(a), 0, -70 - 20 * math.sin(a)),
                         "LeftForeArm": (-10, 0, 0), "RightForeArm": (-10, 0, 0), "Spine": (-4, 0, 0), "Head": (-8, 0, 0)}))
    circ.append((44, {}))
    c["Cast"] = (circ, False)
    # 2 «Энергия духа»: hands together at the chest, then push forward
    c["Spirit"] = ([(0, {}),
                    (8, {"LeftArm": (-45, 0, -25), "RightArm": (-45, 0, 25), "LeftForeArm": (-80, 0, 0),
                         "RightForeArm": (-80, 0, 0), "Spine": (6, 0, 0), "Head": (6, 0, 0)}),
                    (16, {"LeftArm": (-48, 0, -25), "RightArm": (-48, 0, 25), "LeftForeArm": (-85, 0, 0),
                          "RightForeArm": (-85, 0, 0), "Spine": (8, 0, 0), "Head": (8, 0, 0)}),
                    (22, {"LeftArm": (-85, 0, -8), "RightArm": (-85, 0, 8), "LeftForeArm": (-5, 0, 0),
                          "RightForeArm": (-5, 0, 0), "Spine": (-6, 0, 0), "Head": (-6, 0, 0), "loc": (0, 0.01, 0)}),
                    (32, {"LeftArm": (-80, 0, -8), "RightArm": (-80, 0, 8), "Spine": (-4, 0, 0)}), (42, {})], False)
    # 3 «Связь с духами»: one hand reaches up to call a spirit
    c["Summon"] = ([(0, {}),
                    (10, {"RightArm": (-150, 0, -20), "RightForeArm": (-10, 0, 0), "Head": (-15, -10, 0),
                          "LeftArm": (-20, 0, 30), "Spine": (-4, -8, 0)}),
                    (26, {"RightArm": (-155, 0, -25), "RightForeArm": (-15, 0, 0), "Head": (-18, -10, 0),
                          "LeftArm": (-25, 0, 35), "Spine": (-5, -8, 0)}), (36, {})], False)
    # 4 «Сила кос»: she spins and the braid whips around her
    spin = [(0, {})]
    for k, f in enumerate(range(4, 34, 3)):
        t = k / 10
        spin.append((f, {"Hips": (0, 360 * t, 0), "LeftArm": (-10, 0, 70), "RightArm": (-10, 0, -70),
                         "Braid1": (-50, 0, 40), "Braid2": (-20, 0, 25), "Braid3": (-15, 0, 20), "Head": (-5, 0, 0)}))
    spin.append((40, {}))
    c["Braid"] = (spin, False)
    return c


def build_actions(arm, cl):
    pbs = arm.pose.bones
    arm.animation_data_create()
    for pb in pbs:
        pb.rotation_mode = "QUATERNION"
    rest = {pb.name: pb.bone.matrix_local.to_quaternion() for pb in pbs}
    from mathutils import Quaternion, Vector
    for name, (keys, loop) in cl.items():
        act = bpy.data.actions.new(name)
        act.use_fake_user = True
        arm.animation_data.action = act
        for frame, pose in keys:
            for pb in pbs:
                R = rest[pb.name]
                q = q_gl(*pose.get(pb.name, (0, 0, 0)))
                pb.rotation_quaternion = R.inverted() @ q @ R
                pb.keyframe_insert("rotation_quaternion", frame=frame, group=pb.name)
                if pb.name == "Hips":
                    pb.location = R.inverted() @ B(np.array(pose.get("loc", (0, 0, 0))))
                    pb.keyframe_insert("location", frame=frame, group=pb.name)
        tr = arm.animation_data.nla_tracks.new()
        tr.name = name
        tr.strips.new(name, 0, act)
        tr.mute = True
        arm.animation_data.action = None
    for pb in pbs:
        pb.rotation_quaternion = Quaternion()
        pb.location = Vector()


def main():
    T.reset()
    setup_materials()
    arm = make_armature(BONES, 1.0)
    objs = [make_object("Body", head_parts() + limbs()), make_object("Dress", [dress()] + trims()),
            make_object("Hair", hair_parts())]
    for o in objs:
        o.parent = arm
        md = o.modifiers.new("Armature", "ARMATURE")
        md.object = arm
    sp = make_object("Spirits", spirits(), skinned=False)
    parent_to_bone(sp, arm, "Hips")
    build_actions(arm, clips())
    bpy.context.view_layer.update()
    deps = bpy.context.evaluated_depsgraph_get()
    total = 0
    for o in bpy.context.scene.objects:
        if o.type == "MESH":
            m = o.evaluated_get(deps).to_mesh()
            m.calc_loop_triangles()
            total += len(m.loop_triangles)
            o.evaluated_get(deps).to_mesh_clear()
    path = os.path.join(OUT, "masha.glb")
    bpy.ops.export_scene.gltf(
        filepath=path, export_format="GLB", export_yup=True, export_apply=False, export_animations=True,
        export_animation_mode="ACTIONS", export_force_sampling=True, export_frame_step=1, export_image_format="AUTO",
        export_skins=True, export_draco_mesh_compression_enable=False, export_materials="EXPORT",
        export_texcoords=True, export_normals=True, export_tangents=False, export_def_bones=False,
        export_optimize_animation_size=True)
    print(f"masha.glb: {total} triangles, {os.path.getsize(path) / 1e6:.2f} MB")


if __name__ == "__main__":
    main()
