"""Blender helpers for map models (glTF coords: metres, Y up, door/front = +Z, east = +X)."""
import json
import math
import os

import bpy
import numpy as np
from mathutils import Vector

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, ".."))
TEX = os.path.join(OUT, "tex")

# material name -> (texture, metres per texture repeat, options)
MATS = {
    "Wood": ("map_wood.jpg", 2.4, {}),
    "WoodLight": ("map_wood_light.jpg", 2.4, {}),
    "Red": ("map_red.jpg", 2.0, {"rough": 0.55}),
    "Roof": ("map_roof.jpg", 3.0, {"rough": 0.7}),
    "Plaster": ("map_plaster.jpg", 3.0, {}),
    "Shoji": ("map_shoji.jpg", 1.6, {"emit": 0.9, "double": True}),
    "Tatami": ("map_tatami.jpg", 1.8, {}),
    "Stone": ("map_stone.jpg", 2.5, {}),
    "MossStone": ("map_moss_stone.jpg", 2.0, {}),
    "Bark": ("map_bark.jpg", 2.2, {}),
    "Needles": ("map_needles.jpg", 3.0, {"double": True, "emit": 0.22}),
    "Sakura": ("map_sakura.jpg", 3.0, {"double": True, "emit": 0.3}),
    "Gold": ("map_gold.jpg", 1.0, {"rough": 0.4, "metal": 0.6}),
    "Cloth": ("map_cloth.jpg", 1.0, {"double": True}),
    "LanternRed": ("map_lantern_red.jpg", 1.0, {"emit": 0.9}),
    "LanternWarm": ("map_lantern_warm.jpg", 1.0, {"emit": 1.3}),
    "Grass": ("map_grass.jpg", 6.0, {}),
    "Maple": ("map_maple.jpg", 3.0, {"double": True, "emit": 0.28}),
    "Leaves": ("map_leaves.jpg", 3.0, {"double": True, "emit": 0.22}),
    "Willow": ("map_willow.jpg", 2.0, {"double": True, "emit": 0.25}),
    "Hedge": ("map_hedge.jpg", 2.0, {"emit": 0.18}),
    "Hay": ("map_hay.jpg", 1.5, {}),
    "Dark": ("map_dark.jpg", 2.0, {}),
    "Water": ("map_water.jpg", 4.0, {"rough": 0.15}),
    "Bamboo": ("map_bamboo.jpg", 2.0, {}),
    "SakuraCard": ("map_sakura_card.png", 1.0, {"double": True, "alpha": True, "emit": 0.25}),
    "MapleCard": ("map_maple_card.png", 1.0, {"double": True, "alpha": True, "emit": 0.22}),
    "LeafCard": ("map_leaf_card.png", 1.0, {"double": True, "alpha": True, "emit": 0.18}),
    "NeedleCard": ("map_needle_card.png", 1.0, {"double": True, "alpha": True, "emit": 0.18}),
    "WillowCard": ("map_willow_card.png", 1.0, {"double": True, "alpha": True, "emit": 0.2}),
    "HedgeCard": ("map_hedge_card.png", 1.0, {"double": True, "alpha": True, "emit": 0.14}),
}
SCALE = {k: v[1] for k, v in MATS.items()}
_mats = {}


def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    _mats.clear()


def material(name):
    if name in _mats:
        return _mats[name]
    tex, _, o = MATS[name]
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    bsdf = nt.nodes["Principled BSDF"]
    t = nt.nodes.new("ShaderNodeTexImage")
    t.image = bpy.data.images.load(os.path.join(TEX, tex), check_existing=True)
    nt.links.new(t.outputs["Color"], bsdf.inputs["Base Color"])
    bsdf.inputs["Roughness"].default_value = o.get("rough", 0.92)
    bsdf.inputs["Metallic"].default_value = o.get("metal", 0.0)
    if o.get("emit"):
        nt.links.new(t.outputs["Color"], bsdf.inputs["Emission Color"])
        bsdf.inputs["Emission Strength"].default_value = o["emit"]
    if o.get("alpha"):
        rnd = nt.nodes.new("ShaderNodeMath")
        rnd.operation = "ROUND"
        nt.links.new(t.outputs["Alpha"], rnd.inputs[0])
        nt.links.new(rnd.outputs[0], bsdf.inputs["Alpha"])
    nfile = os.path.join(TEX, tex.replace(".jpg", "_n.jpg"))
    if tex.endswith(".jpg") and os.path.exists(nfile):
        tn = nt.nodes.new("ShaderNodeTexImage")
        tn.image = bpy.data.images.load(nfile, check_existing=True)
        tn.image.colorspace_settings.name = "Non-Color"
        nm = nt.nodes.new("ShaderNodeNormalMap")
        nt.links.new(tn.outputs["Color"], nm.inputs["Color"])
        nt.links.new(nm.outputs["Normal"], bsdf.inputs["Normal"])
    m.use_backface_culling = not o.get("double", False)
    _mats[name] = m
    return m


def B(p):
    return Vector((p[0], -p[2], p[1]))


def nrm(v):
    v = np.asarray(v, float)
    n = np.linalg.norm(v)
    return v / n if n > 1e-9 else v


def roty(deg):
    a = math.radians(deg)
    c, s = math.cos(a), math.sin(a)
    return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])


def rotx(deg):
    a = math.radians(deg)
    c, s = math.cos(a), math.sin(a)
    return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])


def rotz(deg):
    a = math.radians(deg)
    c, s = math.cos(a), math.sin(a)
    return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])


class Mesh:
    """collects geometry for one glTF node; faces carry material + optional uv."""

    def __init__(self):
        self.v, self.f, self.uv, self.m, self.smooth = [], [], [], [], []
        self.cn = {}  # custom normals per vertex index

    def add_v(self, p):
        self.v.append(tuple(float(c) for c in p))
        return len(self.v) - 1

    def face(self, ids, mat, uv=None, smooth=False):
        self.f.append(tuple(ids))
        self.m.append(mat)
        self.uv.append(uv)
        self.smooth.append(smooth)

    # ------------------------------------------------------------- primitives --
    def box(self, c, size, mat, R=None, top_mat=None, uv_off=(0, 0)):
        c = np.asarray(c, float)
        R = np.eye(3) if R is None else R
        h = np.asarray(size, float) / 2
        idx = {}
        for sx in (-1, 1):
            for sy in (-1, 1):
                for sz in (-1, 1):
                    idx[(sx, sy, sz)] = self.add_v(c + R @ (h * [sx, sy, sz]))
        faces = [((-1, -1, -1), (-1, -1, 1), (-1, 1, 1), (-1, 1, -1)),
                 ((1, -1, -1), (1, 1, -1), (1, 1, 1), (1, -1, 1)),
                 ((-1, -1, -1), (1, -1, -1), (1, -1, 1), (-1, -1, 1)),
                 ((-1, 1, -1), (-1, 1, 1), (1, 1, 1), (1, 1, -1)),
                 ((-1, -1, -1), (-1, 1, -1), (1, 1, -1), (1, -1, -1)),
                 ((-1, -1, 1), (1, -1, 1), (1, 1, 1), (-1, 1, 1))]
        for k, q in enumerate(faces):
            mm = top_mat if (top_mat and k == 3) else mat
            self.face([idx[p] for p in q], mm, None)

    def cyl(self, p0, p1, r0, r1, mat, n=10, cap0=True, cap1=True, smooth=True, up=(0, 1, 0)):
        self.tube([p0, p1], [r0, r1], mat, n, cap0, cap1, smooth, up)

    def tube(self, path, radii, mat, n=10, cap0=True, cap1=True, smooth=True, up=(0, 0, 1), closed=False,
             flat=(1, 1)):
        path = [np.asarray(q, float) for q in path]
        K = len(path)
        T = []
        for k in range(K):
            if closed:
                d = path[(k + 1) % K] - path[k - 1]
            else:
                d = path[min(k + 1, K - 1)] - path[max(k - 1, 0)]
            T.append(nrm(d))
        N0 = nrm(np.cross(T[0], up))
        if np.linalg.norm(N0) < 1e-6:
            N0 = nrm(np.cross(T[0], (1, 0, 0)))
        rings, Nk = [], N0
        lens = [0.0]
        for k in range(1, K):
            lens.append(lens[-1] + np.linalg.norm(path[k] - path[k - 1]))
        sc = SCALE[mat]
        for k in range(K):
            if k:
                Nk = nrm(Nk - np.dot(Nk, T[k]) * T[k])
            Bk = np.cross(T[k], Nk)
            rings.append([self.add_v(path[k] + radii[k] * (math.cos(2 * math.pi * j / n) * Nk * flat[0]
                                                         + math.sin(2 * math.pi * j / n) * Bk * flat[1]))
                          for j in range(n)])
        circ = 2 * math.pi * max(radii) / sc
        nk = K if closed else K - 1
        for k in range(nk):
            a, b = rings[k], rings[(k + 1) % K]
            v0, v1 = lens[k] / sc, (lens[(k + 1) % K] if (k + 1) < K else lens[-1] + np.linalg.norm(path[0] - path[-1])) / sc
            for j in range(n):
                j2 = (j + 1) % n
                u0, u1 = j / n * circ, (j + 1) / n * circ
                self.face([a[j], a[j2], b[j2], b[j]], mat, [(u0, v0), (u1, v0), (u1, v1), (u0, v1)], smooth)
        if not closed:
            for cap, ring, T_, sgn in ((cap0, rings[0], T[0], -1), (cap1, rings[-1], T[-1], 1)):
                if not cap:
                    continue
                cpos = np.mean([self.v[i] for i in ring], axis=0)
                ci = self.add_v(cpos)
                for j in range(n):
                    j2 = (j + 1) % n
                    ids = [ci, ring[j2], ring[j]] if sgn < 0 else [ci, ring[j], ring[j2]]
                    self.face(ids, mat, None, False)

    def lathe(self, base, prof, mat, n=12, smooth=True):
        """profile [(r, y)] revolved around the vertical axis at base."""
        base = np.asarray(base, float)
        rings = []
        for r, y in prof:
            if r < 1e-4:
                rings.append([self.add_v(base + [0, y, 0])])
            else:
                rings.append([self.add_v(base + [r * math.cos(2 * math.pi * j / n), y, r * math.sin(2 * math.pi * j / n)])
                              for j in range(n)])
        sc = SCALE[mat]
        for k in range(len(rings) - 1):
            a, b = rings[k], rings[k + 1]
            for j in range(n):
                j2 = (j + 1) % n
                uv = [(j / n, k / len(rings)), ((j + 1) / n, k / len(rings)), ((j + 1) / n, (k + 1) / len(rings)),
                      (j / n, (k + 1) / len(rings))]
                if len(a) == 1:
                    self.face([a[0], b[j2], b[j]], mat, [uv[0], uv[2], uv[3]], smooth)
                elif len(b) == 1:
                    self.face([a[j], a[j2], b[0]], mat, [uv[0], uv[1], uv[2]], smooth)
                else:
                    self.face([a[j], a[j2], b[j2], b[j]], mat, uv, smooth)

    def blob(self, c, radii, mat, rows=6, cols=10, rough=0.12, seed=0, normal_center=None, squash=1.0):
        """lumpy ellipsoid; custom normals point away from normal_center -> soft, fluffy shading."""
        c = np.asarray(c, float)
        nc = c if normal_center is None else np.asarray(normal_center, float)
        r = np.random.default_rng(abs(int(seed)))
        ph = r.uniform(0, 6.28, 6)
        sc = SCALE[mat]

        def P(th, phi):
            d = np.array([math.sin(th) * math.cos(phi), -math.cos(th), math.sin(th) * math.sin(phi)])
            k = 1 + rough * (math.sin(3 * phi + ph[0]) * math.sin(2 * th + ph[1]) + 0.5 * math.sin(5 * phi + ph[2]))
            return c + d * np.asarray(radii) * k

        bot = self.add_v(P(0, 0))
        rings = [[self.add_v(P(math.pi * i / rows, 2 * math.pi * j / cols)) for j in range(cols)]
                 for i in range(1, rows)]
        top = self.add_v(P(math.pi, 0))
        allv = [bot, top] + [i for ring in rings for i in ring]
        for vi in allv:
            q = np.asarray(self.v[vi]) - nc
            q[1] *= squash
            self.cn[vi] = nrm(q)

        def U(vi):
            q = self.v[vi]
            return (q[0] / sc + q[1] * 0.3 / sc, q[2] / sc + q[1] / sc)

        for j in range(cols):
            j2 = (j + 1) % cols
            self.face([bot, rings[0][j2], rings[0][j]], mat, [U(bot), U(rings[0][j2]), U(rings[0][j])], True)
            for i in range(rows - 2):
                a, b = rings[i], rings[i + 1]
                ids = [a[j], a[j2], b[j2], b[j]]
                self.face(ids, mat, [U(k) for k in ids], True)
            ids = [rings[-1][j], rings[-1][j2], top]
            self.face(ids, mat, [U(k) for k in ids], True)

    def cards(self, c, radii, mat, n, size, normal_center=None, seed=0, inward=0.15, stretch=1.0):
        """n alpha-tested leaf-cluster cards scattered over an ellipsoid surface (fluffy edge)."""
        c = np.asarray(c, float)
        nc = c if normal_center is None else np.asarray(normal_center, float)
        r = np.random.default_rng(abs(int(seed)))
        for _ in range(n):
            u = r.normal(size=3)
            u /= np.linalg.norm(u)
            p = c + u * np.asarray(radii) * r.uniform(1 - inward, 1.02)
            out = nrm(p - nc + r.normal(size=3) * 0.35)
            t1 = nrm(np.cross(out, r.normal(size=3)))
            t2 = np.cross(out, t1)
            s = size * r.uniform(0.75, 1.2)
            corners = [p + (-t1 - t2 * stretch) * s / 2, p + (t1 - t2 * stretch) * s / 2,
                       p + (t1 + t2 * stretch) * s / 2, p + (-t1 + t2 * stretch) * s / 2]
            ids = [self.add_v(q) for q in corners]
            for i, q in zip(ids, corners):
                self.cn[i] = nrm(np.asarray(q) - nc)
            self.face(ids, mat, [(0, 0), (1, 0), (1, 1), (0, 1)], True)

    def quad(self, pts, mat, uv=None, smooth=False):
        ids = [self.add_v(p) for p in pts]
        self.face(ids, mat, uv, smooth)

    def tris(self):
        return sum(len(f) - 2 for f in self.f)


def auto_uv(pts, mat):
    sc = SCALE[mat]
    P = np.asarray(pts)
    n = np.cross(P[1] - P[0], P[2] - P[0])
    a = np.argmax(np.abs(n))
    if a == 1:
        return [(p[0] / sc, p[2] / sc) for p in P]
    if a == 0:
        return [(p[2] / sc, p[1] / sc) for p in P]
    return [(p[0] / sc, p[1] / sc) for p in P]


def to_object(name, mesh, parent=None):
    me = bpy.data.meshes.new(name)
    me.from_pydata([tuple(B(v)) for v in mesh.v], [], mesh.f)
    uvl = me.uv_layers.new(name="UVMap")
    names = []
    for mn in mesh.m:
        if mn not in names:
            names.append(mn)
    for mn in names:
        me.materials.append(material(mn))
    for poly, f, uv, mn, sm in zip(me.polygons, mesh.f, mesh.uv, mesh.m, mesh.smooth):
        if uv is None:
            uv = auto_uv([mesh.v[i] for i in f], mn)
        for k in range(poly.loop_total):
            uvl.data[poly.loop_start + k].uv = uv[k]
        poly.material_index = names.index(mn)
        poly.use_smooth = sm
    me.validate()
    me.update()
    if mesh.cn:
        normals = []
        for i in range(len(mesh.v)):
            n = mesh.cn.get(i)
            normals.append(tuple(B(n)) if n is not None else (0, 0, 0))
        if all(n != (0, 0, 0) for n in normals):
            me.normals_split_custom_set_from_vertices(normals)
    ob = bpy.data.objects.new(name, me)
    bpy.context.scene.collection.objects.link(ob)
    if parent is not None:
        ob.parent = parent
    return ob


def empty(name):
    ob = bpy.data.objects.new(name, None)
    bpy.context.scene.collection.objects.link(ob)
    return ob


def _gltf_output_group():
    g = bpy.data.node_groups.get("glTF Material Output")
    if g is None:
        g = bpy.data.node_groups.new("glTF Material Output", "ShaderNodeTree")
        g.interface.new_socket("Occlusion", in_out="INPUT", socket_type="NodeSocketFloat")
    return g


def bake_ao(obj, tag, size=1024, samples=24, distance=2.5):
    """bake ambient occlusion of obj (with a temporary ground plane) into tex/<tag>_ao.jpg on a 2nd UV set,
    and hook it up as glTF occlusionTexture (TEXCOORD_1). Materials of obj get a per-model copy."""
    sc = bpy.context.scene
    sc.render.engine = "CYCLES"
    sc.cycles.device = "CPU"
    sc.cycles.samples = samples
    sc.world = sc.world or bpy.data.worlds.new("W")
    sc.world.light_settings.distance = distance
    me = obj.data
    uv = me.uv_layers.new(name="AO")
    me.uv_layers.active = uv
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.mode_set(mode="EDIT")
    bpy.ops.mesh.select_all(action="SELECT")
    bpy.ops.uv.smart_project(angle_limit=math.radians(60), island_margin=0.004, area_weight=0.0, scale_to_bounds=True)
    bpy.ops.object.mode_set(mode="OBJECT")
    bpy.ops.mesh.primitive_plane_add(size=400, location=(0, 0, -0.01))
    ground = bpy.context.active_object
    img = bpy.data.images.new(f"{tag}_ao", size, size, alpha=False)
    img.generated_color = (1, 1, 1, 1)
    group = _gltf_output_group()
    for i, slot in enumerate(obj.material_slots):
        mat = slot.material.copy()
        mat.name = f"{slot.material.name}@{tag}"
        slot.material = mat
        nt = mat.node_tree
        uvn = nt.nodes.new("ShaderNodeUVMap")
        uvn.uv_map = "AO"
        t = nt.nodes.new("ShaderNodeTexImage")
        t.image = img
        t.image.colorspace_settings.name = "Non-Color"
        nt.links.new(uvn.outputs["UV"], t.inputs["Vector"])
        for n in nt.nodes:
            n.select = False
        t.select = True
        nt.nodes.active = t
        go = nt.nodes.new("ShaderNodeGroup")
        go.node_tree = group
        nt.links.new(t.outputs["Color"], go.inputs["Occlusion"])
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    me.uv_layers.active = me.uv_layers["AO"]       # bake writes through the ACTIVE uv map
    sc.render.bake.margin = 6
    bpy.ops.object.bake(type="AO", margin=6, use_clear=True)
    me.uv_layers.active = me.uv_layers["UVMap"]
    me.uv_layers["UVMap"].active_render = True
    bpy.data.objects.remove(ground, do_unlink=True)
    # soften and brighten a little (AO in games looks better a touch lighter)
    px = np.array(img.pixels[:]).reshape(size, size, 4)
    px[..., :3] = 0.25 + 0.75 * px[..., :3]
    img.pixels[:] = px.ravel()
    path = os.path.join(TEX, f"{tag}_ao.jpg")
    img.filepath_raw = path
    img.file_format = "JPEG"
    img.save()
    img.filepath = path
    img.source = "FILE"
    img.reload()


def export(fname, meta=None):
    path = os.path.join(OUT, fname)
    gpath = path.replace(".glb", ".gltf")
    for old in (path, gpath, path.replace(".glb", ".bin")):
        if os.path.exists(old):
            os.remove(old)
    bpy.ops.export_scene.gltf(filepath=gpath, export_format="GLTF_SEPARATE", export_texture_dir="tex",
                              export_keep_originals=True, export_yup=True, export_apply=True,
                              export_animations=False, export_image_format="AUTO",
                              export_draco_mesh_compression_enable=False, export_materials="EXPORT",
                              export_texcoords=True, export_normals=True, export_tangents=False)
    tris = 0
    deps = bpy.context.evaluated_depsgraph_get()
    for ob in bpy.context.scene.objects:
        if ob.type == "MESH":
            m = ob.evaluated_get(deps).to_mesh()
            m.calc_loop_triangles()
            tris += len(m.loop_triangles)
            ob.evaluated_get(deps).to_mesh_clear()
    if meta is not None:
        meta = dict(meta)
        meta["model"] = fname
        meta["triangles"] = tris
        with open(path.replace(".glb", ".json"), "w", encoding="utf-8") as f:
            json.dump(meta, f, ensure_ascii=False, indent=1)
    size = os.path.getsize(gpath) + os.path.getsize(gpath.replace(".gltf", ".bin"))
    print(f"{fname.replace('.glb', '.gltf')}: {tris} tris, {size / 1e6:.2f} MB (+ shared tex/)")
    return tris
