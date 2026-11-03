"""Detail pass: 1024² colour + normal maps (from painted height fields) and leaf-cluster cards.
Overwrites the textures of mtex.py with richer ones; adds *_n.jpg normal maps and *_card.png."""
import math
import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from scipy.ndimage import zoom, gaussian_filter

HERE = os.path.dirname(os.path.abspath(__file__))
TEX = os.path.normpath(os.path.join(HERE, "..", "tex"))
N = 1024


def pn(cells, seed, n=N, sx=None):
    r = np.random.default_rng(seed).uniform(-1, 1, (cells, sx or cells))
    return zoom(r, (n / cells, n / (sx or cells)), order=3, mode="grid-wrap")[:n, :n]


def fbm(seed, base=4, octaves=5, aniso=1.0):
    out, amp, tot = np.zeros((N, N)), 1.0, 0.0
    for o in range(octaves):
        c = base * 2 ** o
        out += amp * pn(max(2, int(c / aniso)), seed + o, sx=c)
        tot += amp
        amp *= 0.5
    return out / tot


def save_rgb(name, c, q=88):
    Image.fromarray(np.clip(c, 0, 255).astype(np.uint8), "RGB").save(os.path.join(TEX, name), quality=q)


def save_normal(name, h, strength):
    """height in [0,1] (tileable) -> tangent-space normal map (+Y up = image up)."""
    gx = (np.roll(h, -1, 1) - np.roll(h, 1, 1)) * 0.5 * strength
    gy = (np.roll(h, 1, 0) - np.roll(h, -1, 0)) * 0.5 * strength
    n = np.stack([-gx, -gy, np.ones_like(h)], -1)
    n /= np.linalg.norm(n, axis=-1, keepdims=True)
    save_rgb(name, (n * 0.5 + 0.5) * 255, 92)


def col(c):
    return np.array(c, float)[None, None, :]


def mix(a, b, t):
    return a * (1 - t[..., None]) + b * t[..., None]


yy, xx = np.mgrid[0:N, 0:N] / N


# ------------------------------------------------------------------ wood
def wood(name, base, dark, planks, seed):
    pidx = np.floor(xx * planks).astype(int)
    fx = (xx * planks) % 1
    rng = np.random.default_rng(seed)
    tone = rng.uniform(-0.14, 0.14, planks)[pidx]
    offs = rng.uniform(0, 1, planks)[pidx]
    grain = pn(16, seed + 1, sx=160)                       # long streaks along y
    grain2 = pn(32, seed + 2, sx=320)
    rings = np.sin((fx * 6 + grain * 1.6 + offs * 10) * math.pi * 2) * 0.5 + 0.5
    # knots
    knot = np.zeros((N, N))
    for k in range(planks):
        cx, cy = (rng.integers(0, planks) + rng.uniform(0.3, 0.7)) / planks, rng.uniform(0, 1)
        d = np.hypot((xx - cx) * planks * 2.2, ((yy - cy + 0.5) % 1 - 0.5) * 9)
        knot = np.maximum(knot, np.clip(1 - d, 0, 1))
    seam = np.clip(1 - np.minimum(fx, 1 - fx) / 0.018, 0, 1)
    endseam = (np.abs(((yy + offs) * 2) % 1 - 0.5) > 0.495).astype(float)
    t = np.clip(0.5 + 0.35 * grain + 0.18 * grain2 + 0.15 * (rings - 0.5) + tone, 0, 1)
    c = mix(col(dark), col(base), t)
    c = mix(c, col(dark) * 0.8, knot ** 2 * 0.45)
    c *= (1 - 0.55 * np.maximum(seam, endseam))[..., None]
    save_rgb(f"map_{name}.jpg", c)
    h = 0.6 + 0.08 * grain + 0.05 * grain2 + 0.04 * rings - 0.5 * np.maximum(seam, endseam) - 0.15 * knot ** 2
    save_normal(f"map_{name}_n.jpg", gaussian_filter(h, 0.8, mode="wrap"), 9.0)


# ------------------------------------------------------------------ roof tiles (hongawara)
def roof():
    rows, cols = 7, 9
    fy = (yy * rows) % 1
    row = np.floor(yy * rows)
    fx = (xx * cols + 0.5 * (row % 2) * 0) % 1
    # rounded tiles: alternating convex caps and concave pans
    ph = fx * 2 * math.pi
    profile = np.cos(ph)                       # +1 cap centre, -1 pan centre
    lap = np.clip((fy - 0.82) / 0.18, 0, 1)    # bottom lip of the row above overlaps
    h = 0.5 + 0.35 * profile * (0.6 + 0.4 * fy) - 0.25 * lap + 0.05 * fy
    jitter = pn(rows * 4, 51, sx=cols * 4) * 0.04
    h = h + jitter + 0.02 * fbm(52, 16, 3)
    dirt = np.clip(-profile, 0, 1) ** 2 * (0.5 + 0.5 * fbm(53, 6, 3))
    moss = np.clip(fbm(54, 4, 4) * 1.6 - 0.35, 0, 1) * np.clip(-profile, 0, 1)
    c = col((70, 82, 128)) * (0.55 + 0.6 * (h - 0.15))[..., None]
    c *= (1 + 0.06 * fbm(55, 8, 3))[..., None]
    c = mix(c, col((34, 38, 52)), dirt * 0.5)
    c = mix(c, col((70, 96, 60)), moss * 0.6)
    edge = (fy > 0.84) & (fy < 0.88)
    c[edge] *= 0.55
    save_rgb("map_roof.jpg", c)
    save_normal("map_roof_n.jpg", gaussian_filter(h, 1.0, mode="wrap"), 14.0)


# ------------------------------------------------------------------ plaster, red lacquer
def plaster():
    n = fbm(60, 6, 5)
    cracks = np.zeros((N, N))
    img = Image.new("L", (N, N), 0)
    d = ImageDraw.Draw(img)
    rng = np.random.default_rng(61)
    for _ in range(14):
        x, y = rng.uniform(0, N, 2)
        a = rng.uniform(0, 2 * math.pi)
        for _ in range(int(rng.integers(8, 22))):
            a += rng.uniform(-0.6, 0.6)
            nx, ny = x + math.cos(a) * 9, y + math.sin(a) * 9
            d.line([(x % N, y % N), (nx % N, ny % N)], fill=255, width=1)
            x, y = nx, ny
    cracks = np.array(img, float) / 255
    stain = np.clip(fbm(62, 3, 4) * 1.4, 0, 1)
    c = col((232, 220, 194)) * (1 + 0.05 * n[..., None])
    c = mix(c, col((196, 180, 150)), stain * 0.35)
    c = mix(c, col((120, 108, 92)), cracks * 0.7)
    save_rgb("map_plaster.jpg", c)
    save_normal("map_plaster_n.jpg", 0.5 + 0.06 * n - 0.25 * cracks, 6.0)


def red():
    grain = pn(16, 63, sx=160)
    wear = np.clip(fbm(64, 8, 4) * 2 - 0.8, 0, 1)
    c = col((176, 40, 32)) * (1 + 0.06 * grain[..., None] + 0.05 * fbm(65, 8, 3)[..., None])
    c = mix(c, col((96, 58, 40)), wear * 0.7)
    save_rgb("map_red.jpg", c)
    save_normal("map_red_n.jpg", 0.5 + 0.04 * grain - 0.08 * wear, 6.0)


# ------------------------------------------------------------------ stone, moss stone, bark
def voronoi(n_pts, seed):
    from scipy.spatial import cKDTree
    rng = np.random.default_rng(seed)
    pts = rng.uniform(0, 1, (n_pts, 2))
    tiled = np.concatenate([pts + [dx, dy] for dx in (-1, 0, 1) for dy in (-1, 0, 1)])
    tree = cKDTree(tiled)
    q = np.stack([xx.ravel(), yy.ravel()], 1)
    d, i = tree.query(q, k=2)
    return d[:, 0].reshape(N, N), d[:, 1].reshape(N, N), (i[:, 0] % n_pts).reshape(N, N)


def stone():
    d1, d2, ids = voronoi(46, 70)
    edge = np.clip((d2 - d1) * 30, 0, 1)
    bump = np.sqrt(edge)
    tone = np.random.default_rng(71).uniform(-0.15, 0.15, 46)[ids]
    n = fbm(72, 8, 4)
    h = 0.25 + 0.6 * bump + 0.06 * n
    c = col((140, 138, 146)) * (0.6 + 0.45 * bump[..., None]) * (1 + tone[..., None] + 0.08 * n[..., None])
    moss = (edge < 0.5) * np.clip(fbm(73, 4, 4) * 2 + 0.3, 0, 1)
    c = mix(c, col((58, 92, 50)), moss * 0.75)
    save_rgb("map_stone.jpg", c)
    save_normal("map_stone_n.jpg", gaussian_filter(h, 1.2, mode="wrap"), 12.0)


def moss_stone():
    n = fbm(74, 4, 6)
    moss = np.clip(fbm(75, 3, 5) * 2.2 + 0.1, 0, 1)
    c = col((118, 120, 116)) * (1 + 0.18 * n[..., None])
    fine = fbm(76, 32, 3)
    c = mix(c, col((70, 112, 58)) * (1 + 0.25 * fine[..., None]), moss)
    save_rgb("map_moss_stone.jpg", c)
    save_normal("map_moss_stone_n.jpg", 0.5 + 0.2 * n + 0.08 * fine * moss, 10.0)


def bark():
    ridges = pn(6, 80, sx=40)
    cracks = np.abs(pn(8, 81, sx=56)) < 0.12
    n = fbm(82, 8, 4)
    h = 0.5 + 0.35 * ridges + 0.08 * n - 0.35 * cracks
    c = col((96, 70, 52)) * (0.6 + 0.6 * (h - 0.1))[..., None]
    lichen = np.clip(fbm(83, 4, 4) * 2 - 0.6, 0, 1)
    c = mix(c, col((120, 128, 100)), lichen * 0.4)
    save_rgb("map_bark.jpg", c)
    save_normal("map_bark_n.jpg", gaussian_filter(h, 1.0, mode="wrap"), 14.0)


def tatami():
    weave = (np.sin(yy * N * math.pi / 3) * 0.5 + 0.5)
    stitch = (np.sin(xx * 40 * math.pi) * 0.5 + 0.5) ** 6
    c = col((198, 186, 120)) * (0.86 + 0.16 * weave[..., None] + 0.04 * fbm(84, 8, 3)[..., None])
    c = mix(c, col((150, 140, 84)), stitch * 0.4)
    border = (xx < 0.05) | (xx > 0.95)
    c[border] = (40, 54, 46)
    save_rgb("map_tatami.jpg", c)
    save_normal("map_tatami_n.jpg", 0.5 + 0.12 * weave - 0.1 * stitch - 0.2 * border, 6.0)


def hay():
    s = pn(64, 85, sx=8)
    c = col((210, 178, 98)) * (1 + 0.22 * s[..., None] + 0.05 * fbm(86, 8, 3)[..., None])
    save_rgb("map_hay.jpg", c)
    save_normal("map_hay_n.jpg", 0.5 + 0.25 * s, 8.0)


def bamboo():
    c = col((116, 158, 72)) * (0.82 + 0.25 * np.cos((xx - 0.5) * math.pi)[..., None])
    c *= (1 + 0.05 * pn(8, 87, sx=64)[..., None])
    node = np.clip(1 - np.abs(((yy * 4) % 1) - 0.5) * 2 / 0.06 + 15, 0, 1)
    nd = np.abs(((yy * 4) % 1) - 0.5) > 0.47
    c[nd] = c[nd] * 0.6 + np.array([200, 210, 150]) * 0.4
    save_rgb("map_bamboo.jpg", c)
    save_normal("map_bamboo_n.jpg", 0.5 + 0.3 * nd, 8.0)


def grass():
    blades = pn(48, 88, sx=480) * 0.5 + pn(96, 89, sx=600) * 0.5
    n = fbm(90, 4, 5)
    c = col((52, 80, 56)) * (1 + 0.3 * n[..., None] + 0.18 * blades[..., None])
    dry = np.clip(fbm(91, 3, 4) * 2 - 0.7, 0, 1)
    c = mix(c, col((96, 96, 60)), dry * 0.4)
    save_rgb("map_grass.jpg", c)
    save_normal("map_grass_n.jpg", 0.5 + 0.15 * blades + 0.05 * n, 6.0)


# ------------------------------------------------------------------ leaf cluster cards (RGBA)
def card(name, kind, seed, S=512):
    rng = np.random.default_rng(seed)
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    def leaf(x, y, size, ang, color):
        pts = []
        for t in np.linspace(0, 2 * math.pi, 14):
            r = size * (0.5 + 0.5 * abs(math.cos(t / 2))) * (0.55 if kind != "maple" else 1.0)
            if kind == "maple":
                r = size * (0.55 + 0.45 * abs(math.cos(2.5 * t)) ** 0.6)
            px, py = r * math.cos(t) * (0.55 if kind == "leaf" else 1.0), r * math.sin(t)
            c, s = math.cos(ang), math.sin(ang)
            pts.append((x + px * c - py * s, y + px * s + py * c))
        d.polygon(pts, fill=color)

    def flower(x, y, size, color):
        for k in range(5):
            a = k * 2 * math.pi / 5 + rng.uniform(0, 1)
            px, py = x + math.cos(a) * size * 0.55, y + math.sin(a) * size * 0.55
            d.ellipse([px - size * 0.45, py - size * 0.45, px + size * 0.45, py + size * 0.45], fill=color)
        d.ellipse([x - size * 0.2, y - size * 0.2, x + size * 0.2, y + size * 0.2], fill=(250, 220, 120, 255))

    count = {"sakura": 230, "maple": 150, "leaf": 260, "needle": 0, "willow": 0, "hedge": 320}[kind]
    for i in range(count):
        r = S * 0.45 * math.sqrt(rng.uniform(0, 1))
        a = rng.uniform(0, 2 * math.pi)
        x, y = S / 2 + r * math.cos(a), S / 2 + r * math.sin(a) * 0.9
        shade = rng.uniform(0.7, 1.15) * (0.75 + 0.35 * (1 - (y / S)))
        if kind == "sakura":
            base = rng.choice([0, 1, 2], p=[0.75, 0.15, 0.1])
            colr = [(248, 186, 212), (255, 222, 236), (226, 140, 176)][base]
            colr = tuple(int(min(255, v * shade)) for v in colr) + (255,)
            if rng.uniform() < 0.12:
                leaf(x, y, rng.uniform(10, 16), rng.uniform(0, 6.28), (int(110 * shade), int(150 * shade), 80, 255))
            else:
                flower(x, y, rng.uniform(9, 15), colr)
        elif kind == "maple":
            colr = [(204, 50, 30), (232, 96, 40), (170, 30, 26), (240, 140, 50)][int(rng.integers(0, 4))]
            leaf(x, y, rng.uniform(16, 26), rng.uniform(0, 6.28), tuple(int(min(255, v * shade)) for v in colr) + (255,))
        elif kind in ("leaf", "hedge"):
            colr = (int(70 * shade), int(126 * shade), int(66 * shade)) if kind == "leaf" else \
                (int(50 * shade), int(108 * shade), int(58 * shade))
            leaf(x, y, rng.uniform(12, 20), rng.uniform(0, 6.28), colr + (255,))
    if kind == "needle":
        for i in range(240):
            cx, cy = S / 2 + rng.normal(0, S * 0.17), S / 2 + rng.normal(0, S * 0.13)
            for k in range(30):
                a = rng.uniform(0, 2 * math.pi)
                L = rng.uniform(18, 34)
                g = rng.uniform(0.7, 1.2)
                d.line([(cx, cy), (cx + math.cos(a) * L, cy + math.sin(a) * L * 0.7)],
                       fill=(int(56 * g), int(118 * g), int(86 * g), 255), width=2)
    if kind == "willow":
        for i in range(90):
            x0 = rng.uniform(S * 0.1, S * 0.9)
            y0 = rng.uniform(0, S * 0.2)
            L = rng.uniform(S * 0.6, S * 0.95)
            g = rng.uniform(0.75, 1.2)
            for k in range(int(L / 9)):
                y = y0 + k * 9
                x = x0 + math.sin(y * 0.01 + i) * 6
                leaf(x, y, rng.uniform(6, 9), 1.57 + rng.uniform(-0.3, 0.3),
                     (int(120 * g), int(170 * g), int(96 * g), 255))
    img = img.filter(ImageFilter.SMOOTH)
    a = np.array(img)
    rgb = a[..., :3].astype(float)
    alpha = a[..., 3:4].astype(float) / 255
    # bleed colour into transparent pixels (avoids dark fringes with mip-maps)
    blur = gaussian_filter(rgb * alpha, (6, 6, 0)) / np.maximum(gaussian_filter(alpha, (6, 6, 0)), 1e-3)
    a[..., :3] = np.where(alpha > 0.5, rgb, blur).clip(0, 255)
    Image.fromarray(a.astype(np.uint8), "RGBA").save(os.path.join(TEX, f"map_{name}_card.png"))


def main():
    wood("wood", (118, 78, 50), (62, 40, 28), 6, 1)
    wood("wood_light", (190, 146, 98), (128, 92, 60), 5, 2)
    roof()
    plaster()
    red()
    stone()
    moss_stone()
    bark()
    tatami()
    hay()
    bamboo()
    grass()
    for n, k, s in (("sakura", "sakura", 1), ("maple", "maple", 2), ("leaf", "leaf", 3), ("needle", "needle", 4),
                    ("willow", "willow", 5), ("hedge", "hedge", 6)):
        card(n, k, s)
    print("detail textures ->", TEX)


if __name__ == "__main__":
    main()
