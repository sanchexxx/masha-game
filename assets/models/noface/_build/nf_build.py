"""Builds noface.glb with Blender (bpy). Run: python3 nf_paint.py && python3 nf_build.py

glTF coordinates in this file (Y up, faces +Z, left hand = +X); converted to Blender's
Z-up when meshes/bones are created (helpers shared with the Totoro build).
"""
import math
import os
import sys

import bpy
import numpy as np
from mathutils import Quaternion, Vector

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.path.insert(1, os.path.join(HERE, "..", "..", "totoro", "_build"))
from nf_shape import (HEIGHT, RX, RZF, ZC, V_ROBE0, V_ROBE1, V_ARM0, V_ARM1, UV_INNER,  # noqa: E402
                      section, robe_y, smoothstep)
from build import (Part, tube, ellipsoid, nrm, B, q_gl, make_armature, parent_to_bone,  # noqa: E402
                   iter_fcurves, rot_axis)

OUT = os.path.normpath(os.path.join(HERE, ".."))
TEX = os.path.join(HERE, "tex")
FPS = 30
NU, NV = 88, 66

# ---------------------------------------------------------------- skeleton ----
SKIRT_N = 8
BONES = {
    "Hips": ((0, 0.35, -0.03), (0, 0.95, -0.03), None),
    "Spine": ((0, 0.95, -0.03), (0, 1.40, -0.01), "Hips"),
    "Chest": ((0, 1.40, -0.01), (0, 1.78, 0.10), "Spine"),
    "Head": ((0, 1.78, 0.10), (0, 2.42, 0.15), "Chest"),
    "LeftArm": ((0.26, 1.64, 0.03), (0.62, 1.42, 0.06), "Chest"),
    "LeftForeArm": ((0.62, 1.42, 0.06), (0.92, 1.18, 0.08), "LeftArm"),
    "LeftHand": ((0.92, 1.18, 0.08), (1.05, 1.07, 0.09), "LeftForeArm"),
    "RightArm": ((-0.26, 1.64, 0.03), (-0.62, 1.42, 0.06), "Chest"),
    "RightForeArm": ((-0.62, 1.42, 0.06), (-0.92, 1.18, 0.08), "RightArm"),
    "RightHand": ((-0.92, 1.18, 0.08), (-1.05, 1.07, 0.09), "RightForeArm"),
}
SKIRT_ANG = [2 * math.pi * i / SKIRT_N for i in range(SKIRT_N)]
for i, a in enumerate(SKIRT_ANG):
    hx, hy, hz = section(a, 0.80, folds=False)
    tx, ty, tz = section(a, 0.05, folds=False)
    BONES[f"Skirt{i}"] = ((0.45 * float(hx), 0.80, 0.45 * (float(hz) - float(ZC(0.8))) + float(ZC(0.8))),
                          (float(tx), 0.05, float(tz)), "Hips")


def skirt_weights(th):
    a = (th % (2 * math.pi)) / (2 * math.pi / SKIRT_N)
    i0 = int(math.floor(a)) % SKIRT_N
    f = a - math.floor(a)
    return {f"Skirt{i0}": 1 - f, f"Skirt{(i0 + 1) % SKIRT_N}": f}


def body_weights(p, th):
    x, y, z = p
    wh = smoothstep(1.74, 1.90, y)
    wc = smoothstep(1.28, 1.50, y) * (1 - wh)
    ws = smoothstep(0.85, 1.05, y) * (1 - smoothstep(1.28, 1.50, y))
    wp = 1 - smoothstep(0.85, 1.05, y)
    w = {"Head": wh, "Chest": wc, "Spine": ws, "Hips": wp}
    sk = 1 - smoothstep(0.08, 0.85, y)
    if sk > 0.01:
        w = {k: v * (1 - sk) for k, v in w.items()}
        for k, v in skirt_weights(th).items():
            w[k] = w.get(k, 0) + sk * v
    return {k: float(v) for k, v in w.items() if v > 0.01}


def seg_dist(p, a, b):
    p, a, b = (np.asarray(q, float) for q in (p, a, b))
    ab = b - a
    t = np.clip(np.dot(p - a, ab) / np.dot(ab, ab), 0, 1)
    return np.linalg.norm(p - (a + t * ab))


def arm_weights(p):
    side = "Left" if p[0] > 0 else "Right"
    names = [f"{side}Arm", f"{side}ForeArm", f"{side}Hand"]
    ds = np.array([seg_dist(p, BONES[n][0], BONES[n][1]) for n in names])
    w = 1 / (ds ** 6 + 1e-7)
    o = np.argsort(-w)[:2]
    tot = w[o].sum()
    return {names[i]: float(w[i] / tot) for i in o if w[i] / tot > 0.02}


# ------------------------------------------------------------------ geometry --
def robe_part():
    p = Part("Body", True, "body")
    p.th = []
    vs = np.linspace(0, 1, NV + 1)[:-1]
    rows = []
    for v in vs:
        row = []
        for j in range(NU):
            th = (j / NU - 0.5) * 2 * math.pi
            y = float(robe_y(th, v))
            x, _, z = section(th, y)
            row.append(p.add_v((float(x), y, float(z))))
            p.th.append(th)
        rows.append(row)
    top = p.add_v((0, HEIGHT, float(ZC(HEIGHT))))
    p.th.append(0.0)
    inner = p.add_v((0, 0.30, float(ZC(0.3))))
    p.th.append(0.0)

    def V(v):
        return V_ROBE0 + (V_ROBE1 - V_ROBE0) * v

    for i in range(NV - 1):
        for j in range(NU):
            j2 = (j + 1) % NU
            ua, ub = j / NU, (j + 1) / NU
            p.add_f([rows[i][j], rows[i][j2], rows[i + 1][j2], rows[i + 1][j]],
                    [(ua, V(vs[i])), (ub, V(vs[i])), (ub, V(vs[i + 1])), (ua, V(vs[i + 1]))])
    for j in range(NU):
        j2 = (j + 1) % NU
        ua, ub = j / NU, (j + 1) / NU
        p.add_f([rows[-1][j], rows[-1][j2], top], [(ua, V(vs[-1])), (ub, V(vs[-1])), ((ua + ub) / 2, V(1))])
        p.add_f([rows[0][j2], rows[0][j], inner], [UV_INNER] * 3)
    p.rows = rows
    return p


def hem_part():
    """soft smoke skirt hanging over the hem: opaque at top, fading out downward."""
    p = Part("Hem", True, "body")
    p.th = []
    ts = [0.0, 0.33, 0.66, 1.0]
    rings = []
    for t in ts:
        ring = []
        for j in range(NU):
            th = (j / NU - 0.5) * 2 * math.pi
            y_top = float(robe_y(th, 0.075))
            y_hem = float(robe_y(th, 0.0))
            y = y_top + (min(y_hem - 0.06, 0.0) - y_top) * t
            y = max(y, -0.01)
            x, _, z = section(th, max(y, 0.0))
            c = float(ZC(max(y, 0)))
            out = 1.010 + 0.10 * t
            ring.append(p.add_v((float(x) * out, y, (float(z) - c) * out + c)))
            p.th.append(th)
        rings.append(ring)
    for k in range(len(ts) - 1):
        for j in range(NU):
            j2 = (j + 1) % NU
            ua, ub = j / NU, (j + 1) / NU
            va, vb = 1 - ts[k], 1 - ts[k + 1]
            p.add_f([rings[k][j], rings[k + 1][j], rings[k + 1][j2], rings[k][j2]],
                    [(ua, va), (ua, vb), (ub, vb), (ub, va)])
    return p


def arm_parts(s):
    """long thin arm with a five-fingered hand (A-pose like the turnaround)."""
    parts = []
    path = [(s * 0.20, 1.665, 0.03), (s * 0.34, 1.605, 0.035), (s * 0.48, 1.52, 0.045),
            (s * 0.62, 1.42, 0.06), (s * 0.77, 1.30, 0.07), (s * 0.92, 1.18, 0.08)]
    radii = [0.072, 0.062, 0.052, 0.045, 0.040, 0.034]
    arm = tube(path, radii, 9, "Body", (0, 1, V_ARM0, V_ARM1), cap0=True, cap1=False,
               region="arm")
    parts.append(arm)
    wrist = np.array(path[-1])
    d = nrm(np.array(path[-1]) - np.array(path[-2]))
    down = np.array([0, -1, 0.0])
    n = nrm(down - np.dot(down, d) * d)  # palm normal (palm faces down/back)
    side = nrm(np.cross(d, n))
    palm_c = wrist + d * 0.045
    R = np.stack([side, -n, d], 1)  # local x=side, y=up(-n), z=along
    parts.append(ellipsoid(palm_c, (0.050, 0.019, 0.060), "Body", rows=5, cols=8,
                           uvrect=(0, 1, V_ARM0, V_ARM1), rot=R, region="hand"))
    for k, off in enumerate([-0.027, -0.009, 0.009, 0.027]):
        base = palm_c + d * 0.040 + side * off * s
        L = [0.125, 0.145, 0.14, 0.12][k]
        spread = side * s * off * 0.9
        pts = [base, base + (d * 0.5 * L) + spread * 0.5 + n * 0.008,
               base + d * 0.85 * L + spread + n * 0.025, base + d * L + spread * 1.1 + n * 0.045]
        parts.append(tube(pts, [0.0125, 0.011, 0.009, 0.0055], 6, "Body",
                          (0, 1, V_ARM0, V_ARM1), region="hand"))
    tb = palm_c + d * 0.005 - side * s * 0.040
    tp = [tb, tb + d * 0.035 - side * s * 0.03 + n * 0.01, tb + d * 0.07 - side * s * 0.04 + n * 0.03]
    parts.append(tube(tp, [0.012, 0.010, 0.006], 6, "Body", (0, 1, V_ARM0, V_ARM1), region="hand"))
    return parts


MASK_YC = 2.07
MASK_H = 0.28


def mask_outline(my):
    return 0.16 * np.sqrt(np.clip(1 - (my / MASK_H) ** 2, 0, 1)) * (1 + 0.10 * my / MASK_H)


def mask_part(center=(0, MASK_YC, float(ZC(MASK_YC)) + 0.29), scale=1.0, mat="Mask", cell=0, cells=(4, 2), yaw=0.0,
              tilt=0.0, region="equip", res=(16, 24)):
    """porcelain mask: domed front + thin rim + back. UV = one cell of the atlas."""
    p = Part(mat, True, region)
    S_, T_ = res
    c = np.asarray(center, float)
    M = rot_axis((0, 1, 0), yaw) @ rot_axis((1, 0, 0), tilt)
    cx, cy = cells
    u0 = (cell % cx) / cx
    v0 = 1 - (cell // cx + 1) / cy

    def uv(mx, my):
        return (u0 + (mx + 0.20) / 0.40 / cx, v0 + (my + 0.28) / 0.56 / cy)

    def front(s, t):
        my = t * MASK_H * 0.995
        a = mask_outline(my)
        mx = s * a
        rr = (mx / 0.17) ** 2 + (my / 0.295) ** 2
        z = 0.075 * np.sqrt(max(0.0, 1 - rr)) - 0.03 - 0.008 * t
        return np.array([mx, my, z])

    grid = []
    for i in range(T_ + 1):
        t = -1 + 2 * i / T_
        row = []
        for j in range(S_ + 1):
            s = -1 + 2 * j / S_
            q = front(s, t)
            row.append((p.add_v(c + M @ (q * scale)), uv(q[0], q[1])))
        grid.append(row)
    for i in range(T_):
        for j in range(S_):
            a, b, d_, e = grid[i][j], grid[i][j + 1], grid[i + 1][j + 1], grid[i + 1][j]
            p.add_f([a[0], b[0], d_[0], e[0]], [a[1], b[1], d_[1], e[1]])
    # rim: walk the outline, extrude backward
    edge_uv = uv(-0.145, 0.0)
    outline = [grid[0][j] for j in range(S_ + 1)] + [grid[i][S_] for i in range(1, T_ + 1)] + \
              [grid[T_][j] for j in range(S_ - 1, -1, -1)] + [grid[i][0] for i in range(T_ - 1, 0, -1)]
    back_c = p.add_v(c + M @ (np.array([0, 0, -0.03]) * scale))
    prev = None
    first = None
    for vid, _ in outline:
        q = np.asarray(p.v[vid])
        bk = p.add_v(q + M @ np.array([0, 0, -0.022 * scale]))
        if prev is not None:
            p.add_f([prev[0], prev[1], bk, vid], [edge_uv] * 4)
            p.add_f([prev[1], back_c, bk], [edge_uv] * 3)
        else:
            first = (vid, bk)
        prev = (vid, bk)
    p.add_f([prev[0], prev[1], first[1], first[0]], [edge_uv] * 4)
    p.add_f([prev[1], back_c, first[1]], [edge_uv] * 3)
    return p


def aura_part():
    p = Part("Aura", True, "equip")
    w, h, y0, z = 2.5, 2.9, 0.45, -0.42
    ids = [p.add_v((-w / 2, y0, z)), p.add_v((w / 2, y0, z)), p.add_v((w / 2, y0 + h, z)),
           p.add_v((-w / 2, y0 + h, z))]
    p.add_f(ids, [(0, 0), (1, 0), (1, 1), (0, 1)])
    return p


def floating_masks():
    parts = []
    spots = [(1.00, 2.25, 0.35, 1, 30), (-1.05, 2.10, 0.25, 4, -30), (0.95, 1.45, 0.45, 6, 25),
             (-0.95, 1.55, 0.40, 2, -20), (0.55, 2.62, 0.10, 5, 15), (-0.60, 0.95, 0.45, 3, -25)]
    for x, y, z, cell, yaw in spots:
        parts.append(mask_part(center=(x, y, z), scale=0.42, mat="FloatingMask", cell=cell,
                               yaw=yaw, tilt=-8, res=(6, 8)))
    return parts


def wisps():
    parts = []
    for x, y, z, s in [(-0.85, 1.90, 0.55, 1.0), (0.80, 1.85, 0.60, 0.8), (0.35, 0.80, 0.70, 0.7)]:
        e = ellipsoid((x, y, z), (0.08 * s, 0.09 * s, 0.08 * s), "Wisp", rows=6, cols=8,
                      fixed_uv=(0.5, 0.5), region="equip")
        tipi = e.add_v((x + 0.02 * s, y + 0.22 * s, z))
        parts.append(e)
        parts.append(tube([(x, y + 0.06 * s, z), (x + 0.015 * s, y + 0.12 * s, z), (x + 0.04 * s, y + 0.17 * s, z)],
                          [0.045 * s, 0.022 * s, 0.003], 8, "Wisp", fixed_uv=(0.5, 0.5), cap0=False,
                          region="equip"))
    return parts


# ------------------------------------------------------------------ materials --
MATS = {}


def new_mat(name, image=None, normal=None, rough=0.9, blend=False, double=False, emission=None,
            emis_strength=1.0, sheen=None, color=None, alpha=None):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    bsdf = nt.nodes["Principled BSDF"]
    bsdf.inputs["Roughness"].default_value = rough
    bsdf.inputs["Metallic"].default_value = 0.0
    tex = None
    if image:
        tex = nt.nodes.new("ShaderNodeTexImage")
        tex.image = bpy.data.images.load(image)
        nt.links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
        if blend:
            nt.links.new(tex.outputs["Alpha"], bsdf.inputs["Alpha"])
    if color:
        bsdf.inputs["Base Color"].default_value = (*color, 1)
    if alpha is not None:
        bsdf.inputs["Alpha"].default_value = alpha
    if normal:
        nt_ = nt.nodes.new("ShaderNodeTexImage")
        nt_.image = bpy.data.images.load(normal)
        nt_.image.colorspace_settings.name = "Non-Color"
        nm = nt.nodes.new("ShaderNodeNormalMap")
        nm.inputs["Strength"].default_value = 1.0
        nt.links.new(nt_.outputs["Color"], nm.inputs["Color"])
        nt.links.new(nm.outputs["Normal"], bsdf.inputs["Normal"])
    if emission is not None:
        if emission == "tex" and tex is not None:
            nt.links.new(tex.outputs["Color"], bsdf.inputs["Emission Color"])
        else:
            bsdf.inputs["Emission Color"].default_value = (*emission, 1)
        bsdf.inputs["Emission Strength"].default_value = emis_strength
    if sheen:
        bsdf.inputs["Sheen Weight"].default_value = 1.0
        bsdf.inputs["Sheen Tint"].default_value = (*sheen, 1)
        bsdf.inputs["Sheen Roughness"].default_value = 0.45
    if blend or alpha is not None:
        try:
            m.surface_render_method = "BLENDED"
        except Exception:
            pass
    m.use_backface_culling = not double
    MATS[name] = m
    return m


def setup_materials():
    MATS.clear()
    new_mat("Body", os.path.join(OUT, "skins", "classic.jpg"), os.path.join(TEX, "robe_normal.jpg"),
            rough=0.95, sheen=(0.22, 0.25, 0.32), double=True)
    new_mat("Hem", os.path.join(TEX, "hem.png"), rough=0.95, blend=True, double=True)
    new_mat("Mask", os.path.join(TEX, "mask.png"), rough=0.35, emission="tex", emis_strength=0.18)
    new_mat("FloatingMask", os.path.join(TEX, "mask_small.png"), rough=0.4, emission="tex",
            emis_strength=0.25, double=True)
    new_mat("Aura", os.path.join(TEX, "aura.png"), blend=True, double=False, emission="tex",
            emis_strength=1.4, rough=1.0)
    new_mat("Wisp", color=(0.18, 0.42, 0.95), emission=(0.25, 0.55, 1.0), emis_strength=0.9,
            alpha=0.85, rough=0.5)


# ------------------------------------------------------------------ objects ----
def make_object(name, parts, weights_fn=None):
    verts, faces, uvs, mats, smooth, weights, mat_names = [], [], [], [], [], [], []
    for p in parts:
        off = len(verts)
        verts += [B(np.array(v)) for v in p.v]
        if p.mat not in mat_names:
            mat_names.append(p.mat)
        for f, uv in zip(p.f, p.uv):
            faces.append(tuple(i + off for i in f))
            uvs.append(uv)
            mats.append(mat_names.index(p.mat))
            smooth.append(p.smooth)
        if weights_fn:
            for k, v in enumerate(p.v):
                weights.append(weights_fn(p, k, np.array(v)))
    me = bpy.data.meshes.new(name)
    me.from_pydata([tuple(v) for v in verts], [], faces)
    uvl = me.uv_layers.new(name="UVMap")
    for li, (poly, uv) in enumerate(zip(me.polygons, uvs)):
        for k in range(poly.loop_total):
            uvl.data[poly.loop_start + k].uv = uv[k]
        poly.material_index = mats[li]
        poly.use_smooth = smooth[li]
    for mn in mat_names:
        me.materials.append(MATS[mn])
    me.validate()
    me.update()
    ob = bpy.data.objects.new(name, me)
    bpy.context.scene.collection.objects.link(ob)
    if weights_fn:
        groups = {}
        for vi, w in enumerate(weights):
            for bn, val in w.items():
                if bn not in groups:
                    groups[bn] = ob.vertex_groups.new(name=bn)
                groups[bn].add([vi], val, "REPLACE")
    return ob, len(faces)


def wfn(p, k, v):
    if p.region == "arm":
        return arm_weights(v)
    if p.region == "hand":
        return {("Left" if v[0] > 0 else "Right") + "Hand": 1.0}
    return body_weights(v, p.th[k])


# ------------------------------------------------------------------ animation --
def S(t):
    return math.sin(2 * math.pi * t)


def C(t):
    return math.cos(2 * math.pi * t)


def mirror_arms(pose):
    out = dict(pose)
    for k, v in pose.items():
        if k.startswith("Left"):
            out["Right" + k[4:]] = (v[0], -v[1], -v[2])
    return out


ARM_POSES = {
    "fold": [(0.25, -1, 0.22), (-0.62, -0.30, 0.72), (-0.45, -0.80, 0.40)],
    "down": [(0.30, -1, 0.06), (0.14, -1, 0.14), (0.05, -1, 0.22)],
    "back": [(0.35, -0.80, -0.60), (0.20, -0.60, -0.80), (0.10, -0.45, -0.88)],
    "wide": [(1, 0.50, 0.15), (0.85, 0.70, 0.25), (0.6, 0.9, 0.35)],
    "reach": [(0.22, -0.20, 1), (0.06, -0.15, 1), (0.0, -0.35, 1)],
    "grip": [(0.22, -0.20, 1), (-0.10, -0.20, 1), (-0.1, -1, 0.3)],
    "eat": [(0.30, -0.90, 0.45), (-0.45, 0.62, 0.65), (-0.40, 0.85, 0.30)],
    "face": [(0.30, -0.15, 1), (-0.55, 0.80, 0.30), (-0.30, 0.90, 0.2)],
    "swipe": [(0.15, -0.10, 1), (0.60, 0.70, 0.40), (0.50, 0.85, 0.2)],
}
ARM_BONES = ("Arm", "ForeArm", "Hand")


def arms(left, right=None, lw=None, rw=None):
    """aim both arms; left/right = pose name or list of 3 directions (left-side coords)."""
    right = left if right is None else right
    out = {}
    for side, pose, sx in (("Left", left, 1), ("Right", right, -1)):
        dirs = ARM_POSES[pose] if isinstance(pose, str) else pose
        for bn, d in zip(ARM_BONES, dirs):
            out["aim:" + side + bn] = (sx * d[0], d[1], d[2])
    return out


def mix(a, b, t):
    pa = ARM_POSES[a] if isinstance(a, str) else a
    pb = ARM_POSES[b] if isinstance(b, str) else b
    return [tuple(x + (y - x) * t for x, y in zip(u, v)) for u, v in zip(pa, pb)]


def lerp(a, b, t):
    out = {}
    for k in set(a) | set(b):
        if k == "scale":
            sa, sb = a.get("scale", {}), b.get("scale", {})
            out["scale"] = {n: sa.get(n, 1.0) + (sb.get(n, 1.0) - sa.get(n, 1.0)) * t for n in set(sa) | set(sb)}
            continue
        if k == "skirt":
            va, vb = a.get(k, (0, 0, 0, 1)), b.get(k, (0, 0, 0, 1))
        else:
            va, vb = a.get(k, (0, 0, 0)), b.get(k, (0, 0, 0))
        out[k] = tuple(x + (y - x) * t for x, y in zip(va, vb))
    return out


def keyed(keys):
    """one-shot clip from sparse keys -> function of frame (smoothstep easing)."""
    def fn(f):
        for (f0, p0), (f1, p1) in zip(keys[:-1], keys[1:]):
            if f0 <= f <= f1:
                t = (f - f0) / max(f1 - f0, 1)
                return lerp(p0, p1, t * t * (3 - 2 * t))
        return keys[-1][1]
    return fn


def clips():
    c = {}
    fold = arms("fold")

    def idle(f, N=80):
        t = f / N
        p = arms(mix("fold", "down", 0.06 + 0.04 * S(t)), mix("fold", "down", 0.06 + 0.04 * S(t + 0.1)))
        p.update({"loc": (0, 0.035 * S(t), 0), "Spine": (1.5 * S(t), 0, 0),
                  "Head": (2 * S(t + 0.25), 4 * S(t), 2 * S(t)), "skirt": (0, 2 + 1 * S(t), 3, 1)})
        return p
    c["Idle"] = (80, True, idle)

    def glide(f, N=48):
        t = f / N
        p = arms(mix("down", "back", 0.25 + 0.2 * S(t)), mix("down", "back", 0.25 - 0.2 * S(t)))
        p.update({"loc": (0, 0.03 * S(t), 0), "Hips": (8 + 1.5 * S(2 * t), 3 * S(t), 2 * S(t)),
                  "Head": (-7, -3 * S(t), 0), "skirt": (14, 5, 6, 2)})
        return p
    c["Glide"] = (48, True, glide)

    def run(f, N=24):
        t = f / N
        p = arms(mix("back", "down", 0.35 + 0.35 * S(t)), mix("back", "down", 0.35 - 0.35 * S(t)))
        p.update({"loc": (0, 0.04 * C(2 * t), 0), "Hips": (18, 5 * S(t), 3 * S(t)), "Head": (-15, 0, 0),
                  "skirt": (26, 7, 9, 2)})
        return p
    c["Run"] = (24, True, run)

    def fly(f, N=40):
        t = f / N
        p = arms(mix("back", "wide", 0.12 + 0.06 * S(t)))
        p.update({"loc": (0, 0.05 * S(t), 0), "Hips": (38, 0, 3 * S(t)), "Head": (-30, 0, 0),
                  "skirt": (24, 5, 8, 2)})
        return p
    c["Fly"] = (40, True, fly)

    c["Dash"] = (18, False, keyed([
        (0, {**arms("down"), "skirt": (10, 4, 3, 1)}),
        (5, {**arms(mix("down", "back", 0.5)), "Spine": (-12, 0, 0), "loc": (0, -0.05, 0), "skirt": (0, 12, 2, 1)}),
        (9, {**arms("back"), "Hips": (42, 0, 0), "Head": (-32, 0, 0), "skirt": (28, 8, 6, 1)}),
        (18, {**arms("down"), "Hips": (10, 0, 0), "skirt": (16, 5, 4, 1)})]))

    c["Grab"] = (24, False, keyed([
        (0, {**fold, "skirt": (0, 2, 2, 1)}),
        (8, {**arms("reach"), "Spine": (16, 0, 0), "Head": (6, 0, 0), "skirt": (8, 6, 3, 1)}),
        (14, {**arms("grip"), "Spine": (12, 0, 0), "skirt": (6, 4, 3, 1)}),
        (24, {**fold, "skirt": (0, 2, 2, 1)})]))

    eat = arms("eat")
    c["Eat"] = (40, False, keyed([
        (0, {**fold}),
        (8, {**eat, "Spine": (22, 0, 0), "Chest": (8, 0, 0), "Head": (16, 0, 0), "skirt": (0, 4, 2, 1)}),
        (14, {**eat, "Spine": (12, 0, 0), "Head": (-12, 0, 0), "scale": {"Chest": 1.16, "Spine": 1.08}}),
        (20, {**eat, "Spine": (8, 0, 0), "Head": (-4, 0, 0), "scale": {"Chest": 0.96, "Spine": 1.12}}),
        (28, {**fold, "scale": {"Chest": 1.05, "Spine": 1.04}, "skirt": (0, 6, 3, 1)}),
        (40, {**fold})]))

    def rage(f, N=30):
        t = f / N
        wl = [(1, 0.35 + 0.45 * S(t), 0.15 + 0.25 * C(t)), (0.8, 0.6 + 0.4 * S(t + 0.2), 0.25),
              (0.6, 0.9, 0.35 + 0.3 * S(t + 0.3))]
        wr = [(1, 0.35 + 0.45 * S(t + 0.5), 0.15 + 0.25 * C(t + 0.5)), (0.8, 0.6 + 0.4 * S(t + 0.7), 0.25),
              (0.6, 0.9, 0.35 + 0.3 * S(t + 0.8))]
        p = arms(wl, wr)
        p.update({"loc": (0, 0.06 * abs(S(2 * t)), 0), "Head": (-22 + 5 * S(2 * t), 6 * S(t), 0),
                  "Spine": (-6, 0, 3 * S(t)),
                  "scale": {"Spine": 1.12 + 0.04 * S(2 * t), "Chest": 1.16 + 0.05 * S(2 * t + 0.2)},
                  "skirt": (0, 22, 10, 2)})
        return p
    c["Rage"] = (30, True, rage)

    c["MaskSwap"] = (24, False, keyed([
        (0, {**fold}),
        (7, {**arms("fold", "face"), "Head": (4, -8, 0)}),
        (12, {**arms("fold", "swipe"), "Head": (4, 10, 0), "skirt": (0, 6, 4, 1)}),
        (17, {**arms("fold", "down"), "Head": (0, 4, 0)}),
        (24, {**fold})]))

    def stunned(f, N=40):
        t = f / N
        p = arms(mix("down", "wide", 0.15 + 0.05 * S(t)), mix("down", "wide", 0.15 + 0.05 * S(t + 0.5)))
        p.update({"Hips": (4 * C(t), 0, 7 * S(t)), "Head": (8 * C(t), 0, -10 * S(t)),
                  "skirt": (0, 3, 4, 1)})
        return p
    c["Stunned"] = (40, True, stunned)

    c["Appear"] = (36, False, keyed([
        (0, {**arms("wide"), "scale": {"Hips": 0.02}, "loc": (0, 0.5, 0), "skirt": (0, 30, 0, 1)}),
        (14, {**arms("down"), "scale": {"Hips": 1.12}, "loc": (0, 0.05, 0), "skirt": (0, 18, 6, 1)}),
        (22, {**fold, "scale": {"Hips": 0.96}, "skirt": (0, 6, 4, 1)}),
        (30, {**fold, "scale": {"Hips": 1.0}, "skirt": (0, 2, 3, 1)}),
        (36, {**fold, "scale": {"Hips": 1.0}, "skirt": (0, 2, 3, 1)})]))
    return c


def skirt_quat(i, f, N, params):
    trail, flare, amp, cyc = params
    a = SKIRT_ANG[i]
    ph = 2 * math.pi * cyc * f / N - 2 * a
    t_ax = (math.cos(a), 0, -math.sin(a))
    r_ax = (math.sin(a), 0, math.cos(a))
    q1 = Quaternion(B(t_ax), math.radians(-(flare + amp * math.sin(ph))))
    q2 = Quaternion(B(r_ax), math.radians(0.6 * amp * math.cos(ph)))
    return q_gl(trail, 0, 0) @ q1 @ q2


def build_actions(arm):
    pbs = arm.pose.bones
    arm.animation_data_create()
    for pb in pbs:
        pb.rotation_mode = "QUATERNION"
    rest = {pb.name: pb.bone.matrix_local.to_quaternion() for pb in pbs}
    for name, (N, loop, fn) in clips().items():
        act = bpy.data.actions.new(name)
        act.use_fake_user = True
        arm.animation_data.action = act
        frames = list(range(0, N + 1, 2))
        if frames[-1] != N:
            frames.append(N)
        for f in frames:
            pose = fn(f)
            sk = pose.get("skirt", (0, 0, 0, 1))
            acc = {}
            for pb in pbs:
                R = rest[pb.name]
                par = pb.parent.name if pb.parent else None
                qp = acc.get(par, Quaternion())
                if pb.name.startswith("Skirt"):
                    q = skirt_quat(int(pb.name[5:]), f, N, sk)
                elif "aim:" + pb.name in pose:
                    D = Vector(B(np.array(pose["aim:" + pb.name])))
                    D = acc.get("Chest", Quaternion()) @ D
                    D.normalize()
                    d0 = (pb.bone.tail_local - pb.bone.head_local).normalized()
                    q = qp.inverted() @ d0.rotation_difference(D)
                else:
                    q = q_gl(*pose.get(pb.name, (0, 0, 0)))
                acc[pb.name] = qp @ q
                pb.rotation_quaternion = R.inverted() @ q @ R
                pb.keyframe_insert("rotation_quaternion", frame=f, group=pb.name)
                s = pose.get("scale", {}).get(pb.name, 1.0)
                pb.scale = (s, s, s)
                pb.keyframe_insert("scale", frame=f, group=pb.name)
                if pb.name == "Hips":
                    pb.location = R.inverted() @ B(np.array(pose.get("loc", (0, 0, 0))))
                    pb.keyframe_insert("location", frame=f, group=pb.name)
        tr = arm.animation_data.nla_tracks.new()
        tr.name = name
        tr.strips.new(name, 0, act)
        tr.mute = True
        arm.animation_data.action = None
    for pb in pbs:
        pb.rotation_quaternion = Quaternion()
        pb.location = Vector()
        pb.scale = (1, 1, 1)


# ------------------------------------------------------------------ main -------
def main():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.context.scene.render.fps = FPS
    setup_materials()
    arm = make_armature(BONES, 1.0)
    robe = robe_part()
    body_parts = [robe] + arm_parts(1) + arm_parts(-1)
    for p in body_parts:
        if not hasattr(p, "th"):
            p.th = [0.0] * len(p.v)
    tris = {}
    body, tris["Body"] = make_object("Body", body_parts, wfn)
    hem = hem_part()
    hem_ob, tris["Hem"] = make_object("Hem", [hem], wfn)
    for ob in (body, hem_ob):
        ob.parent = arm
        m = ob.modifiers.new("Armature", "ARMATURE")
        m.object = arm
    mask, tris["Mask"] = make_object("Mask", [mask_part(scale=1.05)])
    parent_to_bone(mask, arm, "Head")
    aura, tris["Aura"] = make_object("Aura", [aura_part()])
    parent_to_bone(aura, arm, "Chest")
    fm, tris["FloatingMasks"] = make_object("FloatingMasks", floating_masks())
    parent_to_bone(fm, arm, "Hips")
    wp, tris["Wisps"] = make_object("Wisps", wisps())
    parent_to_bone(wp, arm, "Hips")
    build_actions(arm)
    bpy.context.view_layer.update()
    deps = bpy.context.evaluated_depsgraph_get()
    tri = {}
    for ob in bpy.context.scene.objects:
        if ob.type == "MESH":
            me = ob.evaluated_get(deps).to_mesh()
            me.calc_loop_triangles()
            tri[ob.name] = len(me.loop_triangles)
            ob.evaluated_get(deps).to_mesh_clear()
    path = os.path.join(OUT, "noface.glb")
    bpy.ops.export_scene.gltf(
        filepath=path, export_format="GLB", export_yup=True, export_apply=False,
        export_animations=True, export_animation_mode="ACTIONS", export_force_sampling=True,
        export_frame_step=1, export_image_format="AUTO", export_skins=True,
        export_draco_mesh_compression_enable=False, export_materials="EXPORT",
        export_texcoords=True, export_normals=True, export_tangents=False,
        export_def_bones=False, export_optimize_animation_size=True)
    print("triangles:", tri, "total", sum(tri.values()))
    print(f"noface.glb {os.path.getsize(path) / 1e6:.2f} MB")


if __name__ == "__main__":
    main()
