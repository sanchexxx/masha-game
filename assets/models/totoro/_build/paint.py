"""Paints all textures for the Totoro models (numpy + PIL, no network).

Body textures use the cylindrical UV of the revolved body: u = angle (0.5 = front),
v = position along the silhouette (0 = bottom). Each texel is mapped back to its
3D point, so marks/belly/eyes are painted without stretching.
"""
import math
import os
import sys
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

sys.path.insert(0, os.path.dirname(__file__))
from shape import (Profile, BODY_PROFILE, CHIBI_PROFILE, surface, vnoise3, fbm,
                   smoothstep)

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, ".."))
TEX = os.path.join(HERE, "tex")

# plain-fur rectangle used by ears/arms/feet/tail (kept free of decorations)
PARTS_RECT = (0.02, 0.12, 0.45, 0.60)  # u0,u1,v0,v1

SKINS = {
    "classic": dict(base=(116, 119, 126), belly=(236, 226, 198)),
    "winter": dict(base=(226, 230, 238), belly=(250, 250, 252), scarf=True),
    "rain": dict(base=(104, 140, 182), belly=(222, 234, 242), drops=True),
    "spring": dict(base=(118, 158, 104), belly=(240, 236, 206), flowers=True),
    "mini": dict(base=(142, 160, 182), belly=(238, 234, 214)),
}

MARKS = [(-0.28, 1.48), (0.0, 1.48), (0.28, 1.48),
         (-0.42, 1.29), (-0.14, 1.29), (0.14, 1.29), (0.42, 1.29)]


def texel_grid(size):
    u = (np.arange(size) + 0.5) / size
    v = 1.0 - (np.arange(size) + 0.5) / size  # row 0 = top = v 1
    return np.meshgrid(u, v)


def chevron_dist(x, y, cx, cy, w=0.095, h=0.05):
    best = np.full(x.shape, 9.0)
    for s in np.linspace(-1, 1, 25):
        px, py = cx + s * w, cy - h * s * s
        best = np.minimum(best, np.hypot(x - px, y - py))
    return best


def paint_body(skin, size=2048, prof_pts=BODY_PROFILE, marks=True, belly=True,
               chibi_eyes=False, seed=1):
    cfg = SKINS[skin] if isinstance(skin, str) else skin
    prof = Profile(prof_pts)
    U, V = texel_grid(size)
    x, y, z = surface(prof, U, V, bulge=belly)
    r = np.hypot(x, z) + 1e-6
    front = smoothstep(0.0, 0.35, z / r)

    streak = vnoise3(x * 55, y * 6, z * 55, seed)
    streak2 = vnoise3(x * 23, y * 3, z * 23, seed + 3)
    fine = vnoise3(x * 140, y * 140, z * 140, seed + 5)
    mott = fbm(x * 2.2, y * 2.2, z * 2.2, 3, seed + 9)

    base = np.array(cfg["base"], float)[None, None, :]
    col = base * (1 + 0.11 * streak[..., None] + 0.05 * fine[..., None]
                  + 0.07 * mott[..., None])
    # painted soft shading: darker underneath, a touch lighter on top
    ymax = prof.y_tab.max()
    shade = 0.78 + 0.22 * smoothstep(0.0, 0.25 * ymax, y) + 0.05 * smoothstep(0.6 * ymax, ymax, y)
    col *= shade[..., None]

    if belly:
        e = (x / 0.80) ** 2 + ((y - 0.95) / 0.80) ** 2 + 0.07 * streak2 + 0.03 * streak
        m = (1 - smoothstep(0.90, 1.0, e)) * front
        bcol = np.array(cfg["belly"], float)[None, None, :] * (
            1 + 0.05 * streak[..., None] + 0.03 * fine[..., None])
        col = col * (1 - m[..., None]) + bcol * m[..., None]
        if marks:
            dmin = np.full(x.shape, 9.0)
            for cx, cy in MARKS:
                dmin = np.minimum(dmin, chevron_dist(x, y, cx, cy))
            mk = (1 - smoothstep(0.016, 0.024 + 0.004 * streak, dmin)) * front
            mcol = base * 0.95 * (1 + 0.08 * streak[..., None])
            col = col * (1 - mk[..., None]) + mcol * mk[..., None]

    if cfg.get("scarf"):
        yy = y + 0.025 * np.sin(np.arctan2(x, z) * 3)
        band = smoothstep(1.76, 1.79, yy) * (1 - smoothstep(1.97, 2.0, yy))
        stripe = (np.floor((yy - 1.76) / 0.05) % 2)
        scol = np.where(stripe[..., None] > 0, [[[196, 40, 46]]], [[[236, 236, 236]]])
        knit = 1 + 0.08 * vnoise3(x * 90, y * 30, z * 90, 4)[..., None]
        col = col * (1 - band[..., None]) + scol * knit * band[..., None]

    if cfg.get("drops"):
        d = vnoise3(x * 9, y * 9, z * 9, 21)
        drop = smoothstep(0.62, 0.7, d) * (1 - front * 0.0)
        col = col * (1 - 0.25 * drop[..., None]) + np.array([[[200, 225, 245]]]) * 0.25 * drop[..., None]

    if chibi_eyes:
        for ex in (-0.30, 0.30):
            d = np.hypot(x - ex, y - 1.55) + (1 - front) * 5
            eye = 1 - smoothstep(0.11, 0.125, d)
            col = col * (1 - eye[..., None]) + np.array([[[22, 22, 26]]]) * eye[..., None]
            dh = np.hypot(x - ex + 0.035, y - 1.59) + (1 - front) * 5
            hl = 1 - smoothstep(0.028, 0.036, dh)
            col = col * (1 - hl[..., None]) + 255 * hl[..., None]

    img = Image.fromarray(np.clip(col, 0, 255).astype(np.uint8), "RGB")

    if cfg.get("flowers"):
        img = add_flowers(img, prof, size)
    return img


def add_flowers(img, prof, size):
    rng = np.random.default_rng(7)
    dr = ImageDraw.Draw(img)
    placed = 0
    while placed < 46:
        u = rng.uniform(0, 1)
        v = rng.uniform(0.55, 0.97)
        x, y, z = surface(prof, np.array([u]), np.array([v]))
        x, y, z = float(x[0]), float(y[0]), float(z[0])
        if z > 0.1 and abs(x) < 0.55 and 1.85 < y < 2.45:
            continue  # keep the face clear
        u0, u1, v0, v1 = PARTS_RECT
        if u0 - 0.03 < u < u1 + 0.03 and v0 - 0.03 < v < v1 + 0.03:
            continue
        r, _ = prof.at(v)
        r = max(float(r), 0.15)
        sx = size / (2 * math.pi * r)  # px per metre horizontally
        sy = size / 4.6  # approx px per metre along the silhouette
        rad = rng.uniform(0.035, 0.06)
        cx, cy = u * size, (1 - v) * size
        pink = (246, 160 + int(rng.integers(0, 40)), 196)
        for k in range(5):
            a = k * 2 * math.pi / 5 + rng.uniform(0, 1)
            px = cx + math.cos(a) * rad * 0.6 * sx
            py = cy + math.sin(a) * rad * 0.6 * sy
            dr.ellipse([px - rad * 0.55 * sx, py - rad * 0.55 * sy,
                        px + rad * 0.55 * sx, py + rad * 0.55 * sy], fill=pink)
        dr.ellipse([cx - rad * 0.3 * sx, cy - rad * 0.3 * sy,
                    cx + rad * 0.3 * sx, cy + rad * 0.3 * sy], fill=(250, 214, 90))
        placed += 1
    return img


# ---- face atlas -------------------------------------------------------------
FACE_X0, FACE_X1 = -0.65, 0.65
FACE_Y0, FACE_Y1 = 1.47, 2.77
EYE_X, EYE_Y = 0.285, 2.215
DARK = (34, 32, 36, 255)


def paint_face_cell(kind, S=2048):
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    def P(fx, fy):
        return ((fx - FACE_X0) / (FACE_X1 - FACE_X0) * S,
                (FACE_Y1 - fy) / (FACE_Y1 - FACE_Y0) * S)

    def m(v):
        return v / (FACE_X1 - FACE_X0) * S

    def circle(fx, fy, rr, fill):
        cx, cy = P(fx, fy)
        d.ellipse([cx - m(rr), cy - m(rr), cx + m(rr), cy + m(rr)], fill=fill)

    def curve(pts, width, fill=DARK):
        pp = [P(a, b) for a, b in pts]
        d.line(pp, fill=fill, width=int(m(width)), joint="curve")
        for p in (pp[0], pp[-1]):
            rr = m(width) / 2
            d.ellipse([p[0] - rr, p[1] - rr, p[0] + rr, p[1] + rr], fill=fill)

    # black swatch in the corner: whiskers sample it in every cell
    d.rectangle([0, 0, S * 0.03, S * 0.03], fill=DARK)

    # eyes
    for sgn in (-1, 1):
        ex = sgn * EYE_X
        if kind == "blink":
            pts = [(ex + sgn * 0 + t * 0.085, EYE_Y - 0.025 * (1 - t * t))
                   for t in np.linspace(-1, 1, 15)]
            curve(pts, 0.018)
        else:
            rw = 0.100 if kind == "roar" else 0.094
            circle(ex, EYE_Y, rw + 0.012, DARK)
            circle(ex, EYE_Y, rw, (248, 246, 240, 255))
            pr = 0.044 if kind == "roar" else 0.054
            px = ex - sgn * 0.006
            circle(px, EYE_Y - 0.004, pr, (24, 22, 26, 255))
            circle(px - 0.016, EYE_Y + 0.014, pr * 0.32, (255, 255, 255, 255))
            if kind == "smile":  # happy lower lids
                pts = [(ex + t * 0.10, EYE_Y - 0.075 + 0.03 * (1 - t * t))
                       for t in np.linspace(-1, 1, 15)]
                curve(pts, 0.03, fill=(0, 0, 0, 0))
    # nose: small, between the eyes and a bit lower than their centres
    nx, ny = P(0, 2.168)
    w, h = m(0.050), m(0.028)
    d.polygon([(nx - w, ny - h * 0.6), (nx + w, ny - h * 0.6), (nx + w * 0.55, ny + h * 0.5),
               (nx, ny + h * 0.9), (nx - w * 0.55, ny + h * 0.5)], fill=DARK)
    d.ellipse([nx - w, ny - h, nx + w, ny + h * 0.2], fill=DARK)

    # mouth
    if kind in ("normal", "blink"):
        pts = [(t * 0.21, 2.058 - 0.030 * (1 - t * t)) for t in np.linspace(-1, 1, 25)]
        curve(pts, 0.013)
    elif kind == "smile":
        top = [(t * 0.28, 2.075 - 0.012 * (1 - t * t)) for t in np.linspace(-1, 1, 25)]
        bot = [(t * 0.28, 2.075 - 0.13 * (1 - t ** 2) ** 0.8) for t in np.linspace(1, -1, 25)]
        d.polygon([P(*p) for p in top + bot], fill=(92, 30, 34, 255))
        teeth = [(t * 0.25, 2.07 - 0.03 * (1 - t * t) ** 0.3) for t in np.linspace(1, -1, 20)]
        d.polygon([P(*p) for p in top[2:-2] + teeth], fill=(250, 248, 240, 255))
        tongue = [(t * 0.12, 1.985 - 0.04 * (1 - t * t) ** 0.6) for t in np.linspace(-1, 1, 20)]
        d.polygon([P(*p) for p in tongue], fill=(214, 96, 104, 255))
        curve(top + [top[0]], 0.012)
        curve(bot, 0.012)
    elif kind == "roar":
        top = [(t * 0.40, 2.04 - 0.02 * (1 - t * t)) for t in np.linspace(-1, 1, 30)]
        bot = [(t * 0.40, 2.04 - 0.32 * (1 - t ** 2) ** 0.7) for t in np.linspace(1, -1, 30)]
        d.polygon([P(*p) for p in top + bot], fill=(70, 18, 26, 255))
        tongue = [(t * 0.18, 1.78 + 0.06 * (1 - t * t) ** 0.5) for t in np.linspace(-1, 1, 20)]
        d.polygon([P(*p) for p in tongue + [(0.16, 1.74), (-0.16, 1.74)]], fill=(210, 84, 96, 255))
        for i in range(9):  # top teeth
            tx = -0.34 + i * 0.085
            ty = 2.04 - 0.02 * (1 - (tx / 0.40) ** 2) - 0.004
            d.polygon([P(tx - 0.035, ty), P(tx + 0.035, ty), P(tx, ty - 0.055)],
                      fill=(250, 248, 240, 255))
        curve(top, 0.014)
        curve(bot + [bot[0]], 0.014)
    return img


def paint_face_atlas(cell=512):
    atlas = Image.new("RGBA", (cell * 2, cell * 2), (0, 0, 0, 0))
    for i, kind in enumerate(["normal", "blink", "smile", "roar"]):
        im = paint_face_cell(kind).resize((cell, cell), Image.LANCZOS)
        atlas.paste(im, ((i % 2) * cell, (i // 2) * cell))
    # alpha-tested in game: give colour to transparent pixels to avoid dark fringes
    a = np.array(atlas)
    alpha = a[..., 3:4].astype(float) / 255
    rgb = a[..., :3].astype(float)
    a[..., :3] = np.where(alpha > 0.02, rgb / np.maximum(alpha, 1e-3) * 1.0, 40).clip(0, 255)
    return Image.fromarray(a.astype(np.uint8), "RGBA")


# ---- leaf / wood / lantern --------------------------------------------------
def paint_leaf(size=512, base=(92, 164, 70), seed=3):
    u = (np.arange(size) + 0.5) / size * 2 - 1
    X, Y = np.meshgrid(u, -u)
    r = np.hypot(X, Y)
    a = np.arctan2(Y, X)
    n = vnoise3(X * 12, Y * 12, np.zeros_like(X), seed)
    col = np.array(base, float)[None, None] * (0.85 + 0.25 * (1 - r)[..., None]
                                               + 0.06 * n[..., None])
    # radial veins + a few rings of side veins
    k = 9
    ang = (a / (2 * math.pi) * k) % 1.0
    vein = np.exp(-((ang - 0.5) * k * r * 2.2) ** 2 * 6) * smoothstep(0.03, 0.12, r)
    side = np.exp(-(((r * 7) % 1) - 0.5) ** 2 * 60) * np.exp(-((ang - 0.5) * 2.5) ** 2) * 0.35
    v = np.clip(vein + side * (r > 0.15), 0, 1)
    col = col * (1 - 0.45 * v[..., None]) + np.array([[[196, 226, 140]]]) * 0.45 * v[..., None]
    edge = smoothstep(0.82, 1.0, r)
    col = col * (1 - 0.25 * edge[..., None])
    return Image.fromarray(np.clip(col, 0, 255).astype(np.uint8), "RGB")


def paint_wood(size=256, seed=5):
    u = (np.arange(size) + 0.5) / size
    X, Y = np.meshgrid(u, u)
    n1 = vnoise3(X * 40, Y * 3, np.zeros_like(X), seed)
    n2 = vnoise3(X * 120, Y * 8, np.ones_like(X), seed + 1)
    base = np.array([112, 70, 42], float)
    col = base[None, None] * (1 + 0.18 * n1[..., None] + 0.1 * n2[..., None])
    return Image.fromarray(np.clip(col, 0, 255).astype(np.uint8), "RGB")


def paint_lantern(size=256):
    u = (np.arange(size) + 0.5) / size
    X, Y = np.meshgrid(u, u)
    glow = 1 - 0.35 * np.hypot(X - 0.5, Y - 0.5) * 2
    col = np.stack([255 * glow, 196 * glow, 92 * glow], -1)
    img = Image.fromarray(np.clip(col, 0, 255).astype(np.uint8), "RGB")
    d = ImageDraw.Draw(img)
    c = (150, 70, 20)
    s = size
    d.ellipse([s * 0.33, s * 0.45, s * 0.67, s * 0.75], fill=c)
    for (px, py) in [(0.28, 0.33), (0.42, 0.25), (0.58, 0.25), (0.72, 0.33)]:
        d.ellipse([s * (px - 0.06), s * (py - 0.07), s * (px + 0.06), s * (py + 0.07)], fill=c)
    return img


def main():
    os.makedirs(TEX, exist_ok=True)
    os.makedirs(os.path.join(OUT, "skins"), exist_ok=True)
    for sk in ("classic", "winter", "rain", "spring"):
        paint_body(sk).save(os.path.join(OUT, "skins", f"{sk}.jpg"), quality=88)
        print("skin", sk)
    paint_body("mini", size=1024).save(os.path.join(TEX, "mini_body.jpg"), quality=88)
    paint_body(dict(base=(244, 245, 248)), size=512, prof_pts=CHIBI_PROFILE, marks=False,
               belly=False, chibi_eyes=True).save(os.path.join(TEX, "chibi_body.jpg"), quality=90)
    paint_face_atlas().save(os.path.join(TEX, "face.png"))
    paint_leaf().save(os.path.join(TEX, "leaf.jpg"), quality=88)
    paint_wood().save(os.path.join(TEX, "wood.jpg"), quality=88)
    paint_lantern().save(os.path.join(TEX, "lantern.jpg"), quality=90)
    print("done")


if __name__ == "__main__":
    main()
