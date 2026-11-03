"""Textures for No-Face: robe colour per skin, robe normal map, hem smoke, mask atlas, aura."""
import math
import os
import sys
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from nf_shape import (HEIGHT, RX, RZF, RZB, V_ROBE0, V_ROBE1, V_ARM0, V_ARM1, hem_y,  # noqa: E402
                      fold_amp, fold_pattern, fine_folds, robe_y, section, vnoise3, fbm,
                      smoothstep)

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, ".."))
TEX = os.path.join(HERE, "tex")
N = 2048


def robe_coords(size=N):
    u = (np.arange(size) + 0.5) / size
    v = 1.0 - (np.arange(size) + 0.5) / size
    U, V = np.meshgrid(u, v)
    th = (U - 0.5) * 2 * math.pi
    vr = np.clip((V - V_ROBE0) / (V_ROBE1 - V_ROBE0), 0, 1)
    y = robe_y(th, vr)
    return U, V, th, y


def fabric_fields(th, y, seed=1):
    x, _, z = section(th, y, folds=False)
    big = fold_pattern(th, y)
    fine = fine_folds(th, y)
    streak = vnoise3(x * 60, y * 5, z * 60, seed)
    weave = vnoise3(x * 900, y * 900, z * 900, seed + 2)
    mott = fbm(x * 3, y * 3, z * 3, 3, seed + 5)
    return x, z, big, fine, streak, weave, mott


def paint_robe(skin, size=N):
    U, V, th, y = robe_coords(size)
    x, z, big, fine, streak, weave, mott = fabric_fields(th, y)
    amp = fold_amp(y) / 0.056
    crest = np.clip(big, 0, 1) * amp
    valley = np.clip(-big, 0, 1) * amp
    shade = 0.10 * fine + 0.06 * streak + 0.04 * mott + 0.03 * weave
    hood = smoothstep(1.85, 1.95, y)

    if skin in ("classic", "spirit"):
        base = np.array([38, 42, 54], float)
        hi = np.array([56, 64, 82], float)
    elif skin == "shadow":
        base = np.array([62, 64, 74], float)
        hi = np.array([120, 124, 140], float)
    else:  # cloth: blue-green kimono
        base = np.array([30, 66, 84], float)
        hi = np.array([60, 104, 120], float)

    col = (base[None, None] * (1 + shade[..., None] * 1.4)
           + hi[None, None] * (0.30 * crest[..., None] + 0.12 * hood[..., None])
           - base[None, None] * 0.45 * valley[..., None])
    # hem a touch lighter / hazier
    hemf = 1 - smoothstep(0.0, 0.35, y - hem_y(th))
    col = col + hi[None, None] * 0.12 * hemf[..., None]

    # back of the hood: woven oval patch, like the turnaround's back view
    bx = x / 0.17
    by = (y - 2.12) / 0.24
    back = (np.cos(th) < -0.55) & (bx ** 2 + by ** 2 < 1)
    if skin != "cloth":
        patt = 0.5 + 0.5 * np.sin(x * 420) * np.sin(y * 420)
        edge = smoothstep(0.75, 1.0, bx ** 2 + by ** 2)
        pc = np.array([168, 158, 138], float) * (0.70 + 0.35 * patt[..., None]) * (1 - 0.5 * edge[..., None])
        if skin == "shadow":
            pc = pc * 1.6
        col = np.where(back[..., None], pc, col)

    if skin == "cloth":
        col = kimono(col, th, x, y, z)
    if skin == "spirit":
        sp = vnoise3(x * 14, y * 14, z * 14, 33)
        dots = smoothstep(0.78, 0.86, sp)
        col = col + np.array([[[80, 150, 230]]]) * 0.5 * dots[..., None]
    if skin == "shadow":
        col = col * (0.85 + 0.15 * crest)[..., None]

    # arm / hand strip
    arm = (V >= V_ARM0 - 0.01)
    ac = {"shadow": (82, 84, 96), "cloth": (34, 34, 40)}.get(skin, (34, 34, 42))
    an = vnoise3(U * 400, V * 60, np.zeros_like(U), 9)
    armcol = np.array(ac, float)[None, None] * (1 + 0.08 * an[..., None])
    col = np.where(arm[..., None], armcol, col)
    # inside of the hem
    col = np.where((V < V_ROBE0)[..., None], np.array([[[8, 8, 12]]], float), col)
    return Image.fromarray(np.clip(col, 0, 255).astype(np.uint8), "RGB")


def kimono(col, th, x, y, z):
    """seigaiha wave pattern, gold trim at hem / collar / front overlap, red obi."""
    s = 0.09
    gx, gy = x / s + 0.0 * z, y / (s * 0.5)
    row = np.floor(gy)
    cx = gx + 0.5 * (row % 2)
    fx = (cx % 1) - 0.5
    fy = gy - row
    r = np.hypot(fx, fy)
    rings = (np.abs(np.sin(r * math.pi * 3.0)) < 0.25) & (fy > 0)
    front = np.cos(th) > 0
    lighter = np.array([[[120, 180, 196]]], float)
    col = np.where((rings & (y < 1.85))[..., None], col * 0.4 + lighter * 0.6, col)
    gold = np.array([[[212, 168, 74]]], float)
    # hem band
    hem = (y - hem_y(th)) < 0.10
    col = np.where(hem[..., None], gold, col)
    # front overlap line: diagonal from neck (x=-0.05,y=1.8) to hem (x=0.18,y=0.1)
    line_x = -0.05 + (1.8 - y) / 1.7 * 0.23
    band = front & (np.abs(x - line_x) < 0.03) & (y < 1.85)
    col = np.where(band[..., None], gold, col)
    # collar V
    collar = front & (y > 1.62) & (y < 1.86) & (np.abs(np.abs(x) - (1.86 - y) * 0.9) < 0.035)
    col = np.where(collar[..., None], np.array([[[236, 230, 214]]], float), col)
    # obi sash
    obi = (y > 0.98) & (y < 1.18)
    oc = np.array([[[150, 38, 42]]], float) * (1 + 0.1 * np.sin(y * 300)[..., None])
    col = np.where(obi[..., None], oc, col)
    obi_edge = obi & ((y < 1.0) | (y > 1.16))
    col = np.where(obi_edge[..., None], gold, col)
    return col


def paint_normal(size=N):
    U, V, th, y = robe_coords(size)
    x, z, big, fine, streak, weave, mott = fabric_fields(th, y)
    hood = 1 - smoothstep(1.78, 1.92, y)
    H = (0.0035 * fine * (1 - smoothstep(0.3, 1.6, y) * 0.6) * hood + 0.0012 * streak * hood + 0.00025 * weave)
    # metres per texel
    r = 0.5 * (RX(y) + 0.5 * (RZF(y) + RZB(y)))
    dx = 2 * math.pi * np.maximum(r, 0.05) / size
    dy = (HEIGHT - hem_y(th)) / (size * (V_ROBE1 - V_ROBE0))
    gx = np.gradient(H, axis=1) / dx
    gy = -np.gradient(H, axis=0) / dy  # rows go downward, y goes up
    n = np.stack([-gx, -gy, np.ones_like(gx)], -1)
    n /= np.linalg.norm(n, axis=-1, keepdims=True)
    flat = (V >= V_ARM0 - 0.01) | (V < V_ROBE0)
    n[flat] = (0, 0, 1)
    img = ((n * 0.5 + 0.5) * 255).astype(np.uint8)
    return Image.fromarray(img, "RGB")


def paint_hem(w=1024, h=256):
    u = (np.arange(w) + 0.5) / w
    t = (np.arange(h) + 0.5) / h  # 0 top -> 1 bottom
    U, T = np.meshgrid(u, t)
    tong = vnoise3(U * 40, np.zeros_like(U), np.zeros_like(U), 3) * 0.5 + 0.5
    tong2 = vnoise3(U * 110, T * 3, np.zeros_like(U), 4) * 0.5 + 0.5
    reach = 0.25 + 0.75 * tong ** 1.3 * (0.6 + 0.4 * tong2)
    a = 1 - smoothstep(0.05, 1.0, T / reach)
    a = a * (0.75 + 0.25 * tong2)
    col = np.stack([14 + 22 * T, 15 + 24 * T, 24 + 40 * T], -1)
    rgba = np.concatenate([col, (a * 235)[..., None]], -1)
    return Image.fromarray(np.clip(rgba, 0, 255).astype(np.uint8), "RGBA")


# ---- mask atlas ------------------------------------------------------------
MW, MH = 0.40, 0.56  # painted area of one cell (metres)
WHITE = (241, 237, 229)
PURPLE = (150, 126, 172, 255)
BLACK = (30, 27, 32, 255)


def mask_cell(kind, S=2048):
    # base: porcelain white with soft edge shading (the geometry gives the outline)
    yy, xx = np.mgrid[0:S, 0:S]
    mx = (xx + 0.5) / S * MW - MW / 2
    my = MH / 2 - (yy + 0.5) / S * MH
    a = 0.16 * np.sqrt(np.clip(1 - (my / 0.28) ** 2, 0, 1)) * (1 + 0.10 * my / 0.28)
    e = np.clip(np.abs(mx) / np.maximum(a, 1e-3), 0, 1.5)
    edge = smoothstep(0.55, 1.0, e) * 0.10 + smoothstep(0.6, 1.0, np.abs(my) / 0.28) * 0.06
    warm = 0.02 * (my / 0.28)
    base = np.array(WHITE, float)[None, None] * (1 - edge[..., None] + warm[..., None])
    img = Image.fromarray(np.clip(np.concatenate([base, np.full((S, S, 1), 255.0)], -1), 0, 255)
                          .astype(np.uint8), "RGBA")
    d = ImageDraw.Draw(img)

    def P(x, y):
        return ((x + MW / 2) / MW * S, (MH / 2 - y) / MH * S)

    def m(v):
        return v / MW * S

    def ell(cx, cy, rx, ry, fill, rot=0.0, n=48):
        pts = []
        for k in range(n):
            t = 2 * math.pi * k / n
            px, py = rx * math.cos(t), ry * math.sin(t)
            c, s = math.cos(rot), math.sin(rot)
            pts.append(P(cx + px * c - py * s, cy + px * s + py * c))
        d.polygon(pts, fill=fill)

    def bar(cx, y0, y1, w0, w1, fill, lean=0.0):
        """vertical rounded tapered bar from y0 (top) to y1 (bottom)."""
        n = 24
        left, right = [], []
        for k in range(n + 1):
            t = k / n
            yv = y0 + (y1 - y0) * t
            w = (w0 + (w1 - w0) * t) * math.sin(math.pi * (0.08 + 0.84 * t)) ** 0.35
            xc = cx + lean * (t - 0.5)
            left.append(P(xc - w / 2, yv))
            right.append(P(xc + w / 2, yv))
        d.polygon(left + right[::-1], fill=fill)

    def arc(cx, cy, w, bend, width, fill=BLACK, tilt=0.0):
        pts = [(cx + t * w, cy + bend * (1 - t * t) + tilt * t) for t in np.linspace(-1, 1, 24)]
        pp = [P(*q) for q in pts]
        d.line(pp, fill=fill, width=int(m(width)), joint="curve")
        for q in (pp[0], pp[-1]):
            r = m(width) / 2
            d.ellipse([q[0] - r, q[1] - r, q[0] + r, q[1] + r], fill=fill)

    EX, EY = 0.070, 0.062
    # purple marks (same on all masks; angry tilts the upper ones)
    for sgn in (-1, 1):
        lean_up = {"angry": -0.012 * sgn, "sad": 0.010 * sgn}.get(kind, 0.0)
        bar(sgn * EX, 0.205, 0.100, 0.020, 0.026, PURPLE, lean=lean_up)
        bar(sgn * (EX + 0.002), 0.020, -0.098, 0.027, 0.018, PURPLE)
    arc(0, -0.183, 0.024, 0.0, 0.007, fill=PURPLE)

    # eyes
    for sgn in (-1, 1):
        ex = sgn * EX
        if kind in ("calm", "open"):
            ell(ex, EY, 0.034, 0.011, BLACK)
            arc(ex, EY - 0.024, 0.022, 0.0, 0.005)
        elif kind == "sad":
            ell(ex, EY - 0.002, 0.033, 0.010, BLACK, rot=-sgn * 0.22)
            arc(ex, EY - 0.026, 0.022, 0.0, 0.005)
        elif kind == "surprised":
            ell(ex, EY + 0.002, 0.026, 0.020, BLACK)
            arc(ex, EY - 0.032, 0.020, 0.0, 0.005)
        elif kind == "sly":
            if sgn < 0:
                ell(ex, EY, 0.034, 0.006, BLACK, rot=0.10)
            else:
                ell(ex, EY, 0.034, 0.011, BLACK, rot=-0.08)
            arc(ex, EY - 0.024, 0.022, 0.0, 0.005)
        elif kind == "angry":
            ell(ex, EY, 0.036, 0.010, BLACK, rot=sgn * 0.32)
            arc(ex, EY - 0.026, 0.022, 0.0, 0.005)
        elif kind == "sleepy":
            arc(ex, EY - 0.004, 0.032, -0.010, 0.008)
            arc(ex, EY - 0.026, 0.022, 0.0, 0.005)
        elif kind == "smile":
            arc(ex, EY - 0.006, 0.032, 0.012, 0.010)
            arc(ex, EY - 0.030, 0.022, 0.0, 0.005)
    # mouth
    MY = -0.145
    if kind == "calm":
        ell(0, MY, 0.040, 0.010, BLACK)
    elif kind == "sad":
        arc(0, MY - 0.006, 0.040, 0.012, 0.014)
    elif kind == "surprised":
        ell(0, MY, 0.020, 0.022, BLACK)
    elif kind == "sly":
        arc(0.010, MY, 0.036, -0.004, 0.012, tilt=0.010)
    elif kind == "angry":
        ell(0, MY, 0.046, 0.016, BLACK)
        arc(0, MY + 0.008, 0.044, 0.008, 0.010)
    elif kind == "sleepy":
        ell(0, MY, 0.022, 0.006, BLACK)
    elif kind == "smile":
        arc(0, MY + 0.006, 0.044, -0.014, 0.014)
    elif kind == "open":
        ell(0, MY + 0.005, 0.070, 0.058, (60, 14, 22, 255))
        ell(0, MY - 0.022, 0.044, 0.022, (176, 56, 70, 255))
        for k in range(8):
            tx = -0.050 + k * 0.0143
            ty = MY + 0.005 + 0.058 * math.sqrt(max(0, 1 - (tx / 0.07) ** 2)) - 0.002
            d.polygon([P(tx - 0.0065, ty), P(tx + 0.0065, ty), P(tx, ty - 0.016)], fill=(246, 242, 232, 255))
            by = MY + 0.005 - 0.058 * math.sqrt(max(0, 1 - (tx / 0.07) ** 2)) + 0.002
            d.polygon([P(tx - 0.0065, by), P(tx + 0.0065, by), P(tx, by + 0.013)], fill=(246, 242, 232, 255))
        # outline
        pts = [P(0.07 * math.cos(t), MY + 0.005 + 0.058 * math.sin(t)) for t in np.linspace(0, 2 * math.pi, 60)]
        d.line(pts + [pts[0]], fill=BLACK, width=int(m(0.006)))
    return img


MASKS = ["calm", "sad", "surprised", "sly", "angry", "sleepy", "smile", "open"]


def paint_mask_atlas(cell=512):
    atlas = Image.new("RGBA", (cell * 4, cell * 2), WHITE + (255,))
    for i, k in enumerate(MASKS):
        im = mask_cell(k).resize((cell, cell), Image.LANCZOS)
        atlas.paste(im, ((i % 4) * cell, (i // 4) * cell))
    return atlas.convert("RGB")


def paint_aura(size=256):
    u = (np.arange(size) + 0.5) / size * 2 - 1
    X, Y = np.meshgrid(u, -u)
    r = np.hypot(X / 0.9, (Y - 0.1) / 1.0)
    a = np.exp(-(r / 0.55) ** 2) * (1 - smoothstep(0.85, 1.0, r))
    col = np.stack([150 + 60 * (1 - r), 100 + 40 * (1 - r), 210 + 30 * (1 - r)], -1)
    rgba = np.concatenate([np.clip(col, 0, 255), (a * 255)[..., None]], -1)
    return Image.fromarray(rgba.astype(np.uint8), "RGBA")


def main():
    os.makedirs(TEX, exist_ok=True)
    os.makedirs(os.path.join(OUT, "skins"), exist_ok=True)
    for sk in ("classic", "shadow", "cloth", "spirit"):
        paint_robe(sk).save(os.path.join(OUT, "skins", f"{sk}.jpg"), quality=88)
        print("skin", sk)
    paint_normal().save(os.path.join(TEX, "robe_normal.jpg"), quality=92)
    paint_hem().save(os.path.join(TEX, "hem.png"))
    atlas = paint_mask_atlas()
    atlas.save(os.path.join(TEX, "mask.png"))
    atlas.resize((1024, 512), Image.LANCZOS).save(os.path.join(TEX, "mask_small.png"))
    paint_aura().save(os.path.join(TEX, "aura.png"))
    print("done")


if __name__ == "__main__":
    main()
