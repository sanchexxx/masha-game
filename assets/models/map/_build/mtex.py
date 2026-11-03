"""Tileable 512² textures shared by every map model (painted with numpy/PIL).

Every model uses the same texture files and material names, so the game can share
materials between models and merge static meshes per material (few draw calls).
"""
import math
import os

import numpy as np
from PIL import Image, ImageDraw
from scipy.ndimage import zoom

HERE = os.path.dirname(os.path.abspath(__file__))
TEX = os.path.normpath(os.path.join(HERE, "..", "tex"))
N = 512
rng = np.random.default_rng(11)


def pnoise(cells, seed=0, n=N):
    """periodic smooth noise in [-1, 1] (tileable)."""
    r = np.random.default_rng(seed).uniform(-1, 1, (cells, cells))
    return zoom(r, n / cells, order=3, mode="grid-wrap")[:n, :n]


def fbm(seed, octaves=4, base=4):
    out = np.zeros((N, N))
    amp, tot = 1.0, 0.0
    for o in range(octaves):
        out += amp * pnoise(base * 2 ** o, seed + o)
        tot += amp
        amp *= 0.5
    return out / tot


def save(name, arr, q=88):
    os.makedirs(TEX, exist_ok=True)
    Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB").save(os.path.join(TEX, name), quality=q)


def col(c):
    return np.array(c, float)[None, None, :]


def planks(base, n_planks, seed, grain=0.10):
    y, x = np.mgrid[0:N, 0:N] / N
    plank = np.floor(x * n_planks)
    tone = np.random.default_rng(seed).uniform(-0.12, 0.12, n_planks)[plank.astype(int)]
    g = np.stack([pnoise(64, seed + k)[:, :] for k in range(1)], 0)[0]
    streak = zoom(np.random.default_rng(seed + 7).uniform(-1, 1, (8, 128)), (N / 8, N / 128), order=3,
                  mode="grid-wrap")[:N, :N]
    c = col(base) * (1 + tone[..., None] + grain * streak[..., None] + 0.04 * g[..., None])
    seam = (np.abs((x * n_planks) % 1 - 0.0) < 0.02) | (np.abs((x * n_planks) % 1 - 1) < 0.02)
    c[seam] *= 0.55
    return c


def tex_wood():
    save("map_wood.jpg", planks((96, 62, 40), 6, 1))


def tex_wood_light():
    save("map_wood_light.jpg", planks((176, 132, 88), 5, 2, 0.08))


def tex_red():
    n = fbm(3, 3, 4)
    c = col((172, 42, 34)) * (1 + 0.07 * n[..., None])
    wear = (pnoise(32, 5) > 0.75)
    c[wear] = c[wear] * 0.8 + np.array([90, 50, 30]) * 0.2
    save("map_red.jpg", c)


def tex_roof():
    y, x = np.mgrid[0:N, 0:N] / N
    rows, cols = 8, 10
    fy = (y * rows) % 1
    fx = (x * cols) % 1
    curve = np.cos((fx - 0.5) * math.pi) ** 0.6
    shade = 0.62 + 0.45 * curve * (0.6 + 0.4 * fy)
    lip = fy > 0.86
    c = col((52, 62, 104)) * shade[..., None]
    c[lip] *= 0.55
    c *= (1 + 0.05 * fbm(6, 3, 8))[..., None]
    save("map_roof.jpg", c)


def tex_plaster():
    save("map_plaster.jpg", col((228, 214, 186)) * (1 + 0.05 * fbm(8, 4, 4)[..., None]))


def tex_shoji():
    y, x = np.mgrid[0:N, 0:N] / N
    c = col((252, 226, 172)) * (1 + 0.03 * fbm(9, 3, 8)[..., None])
    # gentle glow toward the centre of each pane
    c *= (0.92 + 0.08 * np.cos((x - 0.5) * math.pi)[..., None])
    lat = (np.abs(((x * 4) % 1) - 0.5) > 0.47) | (np.abs(((y * 5) % 1) - 0.5) > 0.47)
    c[lat] = (86, 56, 34)
    save("map_shoji.jpg", c)


def tex_tatami():
    y, x = np.mgrid[0:N, 0:N] / N
    weave = 0.5 + 0.5 * np.sin(y * N * math.pi / 2)
    c = col((196, 184, 118)) * (0.9 + 0.12 * weave[..., None] + 0.04 * fbm(10, 3, 8)[..., None])
    border = (x < 0.05) | (x > 0.95)
    c[border] = (40, 52, 46)
    save("map_tatami.jpg", c)


def voronoi(n_pts, seed):
    r = np.random.default_rng(seed)
    pts = r.uniform(0, N, (n_pts, 2))
    yy, xx = np.mgrid[0:N, 0:N]
    d1 = np.full((N, N), 1e9)
    d2 = np.full((N, N), 1e9)
    ids = np.zeros((N, N), int)
    for i, (px, py) in enumerate(pts):
        for ox in (-N, 0, N):
            for oy in (-N, 0, N):
                d = np.hypot(xx - px - ox, yy - py - oy)
                closer = d < d1
                d2 = np.where(closer, d1, np.minimum(d2, d))
                ids = np.where(closer, i, ids)
                d1 = np.where(closer, d, d1)
    return d1, d2, ids


def tex_stone():
    d1, d2, ids = voronoi(40, 12)
    edge = np.clip((d2 - d1) / 10, 0, 1)
    tone = np.random.default_rng(13).uniform(-0.12, 0.12, 40)[ids]
    c = col((138, 136, 144)) * (0.55 + 0.45 * edge[..., None]) * (1 + tone[..., None])
    c *= (1 + 0.06 * fbm(14, 3, 8))[..., None]
    moss = (fbm(15, 3, 4) > 0.25) & (edge < 0.6)
    c[moss] = c[moss] * 0.5 + np.array([60, 96, 54]) * 0.5
    save("map_stone.jpg", c)


def tex_moss_stone():
    n = fbm(16, 4, 4)
    c = col((112, 116, 110)) * (1 + 0.15 * n[..., None])
    moss = fbm(17, 4, 4) > -0.05
    c[moss] = c[moss] * 0.35 + np.array([64, 110, 58]) * 0.65 * (1 + 0.1 * n[moss][:, None])
    save("map_moss_stone.jpg", c)


def tex_bark():
    streak = zoom(np.random.default_rng(18).uniform(-1, 1, (6, 48)), (N / 6, N / 48), order=3,
                  mode="grid-wrap")[:N, :N]
    n = fbm(19, 4, 8)
    c = col((92, 64, 46)) * (1 + 0.22 * streak[..., None] + 0.08 * n[..., None])
    cracks = streak < -0.55
    c[cracks] *= 0.55
    save("map_bark.jpg", c)


def tex_needles():
    n = fbm(20, 4, 4)
    y, x = np.mgrid[0:N, 0:N]
    img = Image.fromarray(np.clip(np.broadcast_to(col((62, 124, 92)), (N, N, 3)) * (1 + 0.22 * n[..., None]), 0, 255)
                          .astype(np.uint8))
    d = ImageDraw.Draw(img)
    r = np.random.default_rng(21)
    for _ in range(9000):
        cx, cy = r.uniform(0, N, 2)
        a = r.uniform(0, math.pi * 2)
        L = r.uniform(6, 14)
        g = int(r.uniform(70, 150))
        d.line([(cx, cy), (cx + math.cos(a) * L, cy + math.sin(a) * L)], fill=(int(g * 0.6), int(g * 1.25), int(g * 0.95)), width=1)
    save("map_needles.jpg", np.array(img, float))


def tex_leaves(name, base, hi, seed):
    n = fbm(seed, 4, 6)
    img = Image.fromarray(np.clip(np.broadcast_to(col(base), (N, N, 3)) * (1 + 0.22 * n[..., None]), 0, 255)
                          .astype(np.uint8))
    d = ImageDraw.Draw(img)
    r = np.random.default_rng(seed + 1)
    for _ in range(2600):
        cx, cy = r.uniform(0, N, 2)
        rr = r.uniform(3, 7)
        k = r.uniform(0.75, 1.2)
        c = tuple(int(min(255, v * k)) for v in hi)
        d.ellipse([cx - rr, cy - rr * 0.7, cx + rr, cy + rr * 0.7], fill=c)
    save(name, np.array(img, float))


def tex_lantern(name, base):
    y, x = np.mgrid[0:N, 0:N] / N
    ribs = np.abs(np.sin(y * math.pi * 10)) ** 6
    glow = 0.8 + 0.25 * np.cos((y - 0.5) * math.pi)
    c = col(base) * glow[..., None] * (1 - 0.25 * ribs[..., None])
    c[(y < 0.06) | (y > 0.94)] = (40, 30, 26)
    save(name, c, 90)


def tex_gold():
    save("map_gold.jpg", col((198, 160, 84)) * (1 + 0.12 * fbm(22, 3, 6)[..., None]))


def tex_cloth():
    y, x = np.mgrid[0:N, 0:N] / N
    c = col((40, 54, 104)) * (1 + 0.05 * fbm(23, 3, 8)[..., None])
    ring = np.abs(np.hypot(x - 0.5, y - 0.45) - 0.18) < 0.03
    c[ring] = (236, 232, 220)
    save("map_cloth.jpg", c)


def tex_ground():
    n = fbm(24, 5, 4)
    c = col((44, 70, 50)) * (1 + 0.25 * n[..., None])
    save("map_grass.jpg", c)


def tex_hay():
    streak = zoom(np.random.default_rng(80).uniform(-1, 1, (64, 8)), (N / 64, N / 8), order=3, mode="grid-wrap")[:N, :N]
    save("map_hay.jpg", col((208, 176, 96)) * (1 + 0.2 * streak[..., None] + 0.05 * fbm(81, 3, 8)[..., None]))


def tex_dark():
    save("map_dark.jpg", col((20, 16, 14)) * (1 + 0.1 * fbm(82, 3, 4)[..., None]))


def tex_water():
    n = fbm(90, 4, 6)
    c = col((40, 104, 140)) * (1 + 0.18 * n[..., None])
    c[n > 0.45] = c[n > 0.45] * 0.6 + np.array([170, 210, 230]) * 0.4
    save("map_water.jpg", c)


def tex_bamboo():
    y, x = np.mgrid[0:N, 0:N] / N
    c = col((112, 156, 70)) * (0.85 + 0.25 * np.cos((x - 0.5) * math.pi)[..., None])
    c *= (1 + 0.05 * fbm(91, 3, 8))[..., None]
    node = np.abs(((y * 4) % 1) - 0.5) > 0.47
    c[node] = c[node] * 0.6 + np.array([200, 210, 150]) * 0.4
    save("map_bamboo.jpg", c)


def main():
    for f in (tex_wood, tex_wood_light, tex_red, tex_roof, tex_plaster, tex_shoji, tex_tatami, tex_stone,
              tex_moss_stone, tex_bark, tex_needles, tex_gold, tex_cloth, tex_ground):
        f()
    tex_leaves("map_sakura.jpg", (226, 150, 186), (250, 196, 220), 30)
    tex_leaves("map_maple.jpg", (176, 44, 30), (232, 96, 50), 40)
    tex_leaves("map_leaves.jpg", (58, 108, 60), (110, 160, 84), 50)
    tex_leaves("map_willow.jpg", (104, 150, 84), (170, 204, 120), 60)
    tex_leaves("map_hedge.jpg", (40, 96, 52), (78, 140, 70), 70)
    tex_hay()
    tex_dark()
    tex_water()
    tex_bamboo()
    tex_lantern("map_lantern_red.jpg", (226, 70, 44))
    tex_lantern("map_lantern_warm.jpg", (255, 178, 96))
    print("textures ->", TEX)


if __name__ == "__main__":
    main()
