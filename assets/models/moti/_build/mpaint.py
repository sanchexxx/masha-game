"""Textures for Uncle Moti: per-skin fur (colour + normal), fur-tuft cards, hat, loincloth; face atlas;
backpack bits (re-uses the map textures at 512)."""
import math
import os
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from scipy.ndimage import gaussian_filter, zoom

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from mshape import PROF, surface, vnoise3, fbm, smoothstep, FX0, FX1, FY0, FY1, EYE_X, EYE_Y  # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, ".."))
TEX = os.path.join(HERE, "tex")
MAPTEX = os.environ.get("MAPTEX", os.path.normpath(os.path.join(HERE, "..", "..", "map", "tex")))  # from branch claude/masha-map-detail

SKINS = {   # from src/characters/moti.js MOTI_SKINS
    "classic": dict(fur=(242, 237, 227), shade=(214, 202, 184), hat=(196, 49, 42), band=(142, 33, 28), cloth=(196, 49, 42)),
    "winter": dict(fur=(233, 240, 250), shade=(196, 212, 236), hat=(127, 166, 216), band=(63, 95, 149), cloth=(74, 120, 184)),
    "forest": dict(fur=(240, 234, 216), shade=(214, 202, 172), hat=(79, 138, 58), band=(46, 90, 34), cloth=(217, 119, 43)),
    "holiday": dict(fur=(246, 239, 230), shade=(222, 206, 190), hat=(216, 50, 58), band=(232, 182, 74), cloth=(184, 36, 44),
                    pattern=True),
}


def col(c):
    return np.array(c, float)[None, None, :]


def fur(skin, size=1024):
    S = SKINS[skin]
    u = (np.arange(size) + 0.5) / size
    v = 1 - (np.arange(size) + 0.5) / size
    U, V = np.meshgrid(u, v)
    x, y, z = surface(U, V)
    r = np.hypot(x, z) + 1e-6
    front = smoothstep(0.0, 0.45, z / r)
    strands = vnoise3(x * 70, y * 9, z * 70, 1) * 0.6 + vnoise3(x * 160, y * 22, z * 160, 2) * 0.4
    clumps = vnoise3(x * 9, y * 4, z * 9, 3)
    belly = front * smoothstep(0.55, 0.75, y) * (1 - smoothstep(1.2, 1.4, y)) * (1 - smoothstep(0.35, 0.6, np.abs(x)))
    t = 0.78 + 0.14 * strands * (1 - 0.6 * belly) + 0.08 * clumps
    c = col(S["shade"]) * (1 - t[..., None]) + col(S["fur"]) * t[..., None]
    c = c * (1 + 0.04 * belly[..., None])
    # painted occlusion: underside, under the jowls, around the legs, under the hat brim
    ao = 1 - 0.35 * (1 - smoothstep(0.3, 0.65, y)) - 0.12 * smoothstep(1.95, 2.1, y) \
        - 0.10 * front * np.exp(-((y - 1.42) / 0.06) ** 2)
    c *= ao[..., None]
    img = Image.fromarray(np.clip(c, 0, 255).astype(np.uint8), "RGB")
    img.save(os.path.join(TEX, f"{skin}_fur.jpg"), quality=88)
    if skin == "classic":
        h = 0.5 + 0.35 * strands * (1 - 0.6 * belly) + 0.1 * clumps
        gx = (np.roll(h, -1, 1) - np.roll(h, 1, 1)) * 2
        gy = (np.roll(h, 1, 0) - np.roll(h, -1, 0)) * 2
        n = np.stack([-gx, -gy, np.ones_like(h)], -1)
        n /= np.linalg.norm(n, axis=-1, keepdims=True)
        Image.fromarray(((n * 0.5 + 0.5) * 255).astype(np.uint8)).save(os.path.join(TEX, "fur_n.jpg"), quality=92)


def fur_card(skin, S=512, seed=4):
    """a tuft of hanging, slightly wavy hair. top = root (v=1 in Blender = image top)."""
    C = SKINS[skin]
    rng = np.random.default_rng(seed)
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    for i in range(1100):
        x0 = S * 0.5 + rng.normal(0, S * 0.15)
        y0 = rng.uniform(0, S * 0.12)
        L = S * rng.uniform(0.45, 0.9) * (1 - 1.3 * abs(x0 - S / 2) / S)
        w = rng.uniform(3, 6)
        k = rng.uniform(0.93, 1.04)
        pts = []
        for s in np.linspace(0, 1, 12):
            pts.append((x0 + math.sin(s * 3 + i) * 7 * s + (x0 - S / 2) * 0.25 * s, y0 + L * s))
        for a, b in zip(pts[:-1], pts[1:]):
            s = (a[1] - y0) / max(L, 1)
            tone = 0.9 + 0.1 * s
            cc = tuple(int(min(255, ch * k * tone)) for ch in C["fur"]) + (255,)
            d.line([a, b], fill=cc, width=max(1, int(w * (1 - 0.6 * s))))
    img = img.filter(ImageFilter.SMOOTH)
    a = np.array(img)
    alpha = a[..., 3:4].astype(float) / 255
    rgb = a[..., :3].astype(float)
    blur = gaussian_filter(rgb * alpha, (6, 6, 0)) / np.maximum(gaussian_filter(alpha, (6, 6, 0)), 1e-3)
    a[..., :3] = np.where(alpha > 0.5, rgb, blur).clip(0, 255)
    Image.fromarray(a.astype(np.uint8)).save(os.path.join(TEX, f"{skin}_card.png"))


def fabric(name, base, size=512, pattern=False, band=None, band_rows=None):
    yy, xx = np.mgrid[0:size, 0:size] / size
    weave = (np.sin(xx * size * math.pi / 2) * np.sin(yy * size * math.pi / 2)) * 0.5 + 0.5
    n = gaussian_filter(np.random.default_rng(5).uniform(-1, 1, (size, size)), 6, mode="wrap") * 6
    c = col(base) * (0.9 + 0.08 * weave[..., None] + 0.05 * n[..., None])
    if band is not None:
        r0, r1 = band_rows
        m = (yy > r0) & (yy < r1)
        c[m] = np.array(band, float) * (0.9 + 0.08 * weave[m][..., None])
    if pattern:
        dots = (np.hypot(((xx * 8) % 1) - 0.5, ((yy * 8 + 0.5 * np.floor(xx * 8)) % 1) - 0.5) < 0.12)
        c[dots] = (240, 206, 110)
    Image.fromarray(np.clip(c, 0, 255).astype(np.uint8)).save(os.path.join(TEX, name), quality=90)


def face_atlas(cell=512):
    atlas = Image.new("RGBA", (cell * 2, cell * 2), (0, 0, 0, 0))
    for i, kind in enumerate(["normal", "blink", "open", "joy"]):
        S = 2048
        im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
        d = ImageDraw.Draw(im)

        def P(fx, fy):
            return ((fx - FX0) / (FX1 - FX0) * S, (FY1 - fy) / (FY1 - FY0) * S)

        def m(v):
            return v / (FX1 - FX0) * S

        def curve(pts, w, fill):
            pp = [P(*p) for p in pts]
            d.line(pp, fill=fill, width=int(m(w)), joint="curve")
            for p in (pp[0], pp[-1]):
                r = m(w) / 2
                d.ellipse([p[0] - r, p[1] - r, p[0] + r, p[1] + r], fill=fill)

        dark = (46, 34, 30, 255)
        d.rectangle([0, 0, S * 0.03, S * 0.03], fill=dark)
        # soft blush
        for s in (-1, 1):
            cx, cy = P(s * 0.30, 1.72)
            rr = m(0.09)
            blush = Image.new("RGBA", (S, S), (0, 0, 0, 0))
            ImageDraw.Draw(blush).ellipse([cx - rr, cy - rr * 0.7, cx + rr, cy + rr * 0.7], fill=(240, 150, 150, 110))
            im.alpha_composite(blush.filter(ImageFilter.GaussianBlur(25)))
        d = ImageDraw.Draw(im)
        for s in (-1, 1):
            ex = s * EYE_X
            if kind in ("normal", "open"):
                cx, cy = P(ex, EYE_Y)
                w, h = m(0.052), m(0.030)
                d.ellipse([cx - w, cy - h, cx + w, cy + h], fill=dark)
                d.ellipse([cx - w * 0.15 - m(0.012), cy - h * 0.55 - m(0.012), cx - w * 0.15 + m(0.012),
                           cy - h * 0.55 + m(0.012)], fill=(255, 255, 255, 255))
                curve([(ex + t * 0.07, EYE_Y + 0.035 - 0.012 * t * t) for t in np.linspace(-1, 1, 9)], 0.012,
                      (90, 70, 60, 255))
            else:
                curve([(ex + t * 0.055, EYE_Y - 0.004 + (0.018 if kind == "joy" else -0.012) * (1 - t * t))
                       for t in np.linspace(-1, 1, 11)], 0.014, dark)
        nx, ny = P(0, 1.765)
        d.ellipse([nx - m(0.035), ny - m(0.02), nx + m(0.035), ny + m(0.022)], fill=(110, 80, 74, 255))
        if kind == "open":
            top = [(t * 0.08, 1.725 - 0.01 * (1 - t * t)) for t in np.linspace(-1, 1, 15)]
            bot = [(t * 0.08, 1.725 - 0.10 * (1 - t * t) ** 0.6) for t in np.linspace(1, -1, 15)]
            d.polygon([P(*p) for p in top + bot], fill=(120, 40, 44, 255))
            d.polygon([P(*p) for p in [(t * 0.05, 1.655 + 0.025 * (1 - t * t)) for t in np.linspace(-1, 1, 10)] +
                       [(0.05, 1.645), (-0.05, 1.645)]], fill=(226, 120, 128, 255))
            for s in (-1, 1):
                d.rectangle([*P(s * 0.025 - 0.013, 1.718), *P(s * 0.025 + 0.013, 1.696)], fill=(250, 248, 240, 255))
        elif kind == "joy":
            curve([(t * 0.08, 1.70 - 0.035 * (1 - t * t)) for t in np.linspace(-1, 1, 13)], 0.014, dark)
        else:
            curve([(t * 0.06, 1.705 - 0.015 * (1 - t * t)) for t in np.linspace(-1, 1, 11)], 0.012, dark)
        atlas.paste(im.resize((cell, cell), Image.LANCZOS), ((i % 2) * cell, (i // 2) * cell))
    a = np.array(atlas)
    a[..., :3] = np.where(a[..., 3:4] > 5, a[..., :3], 200)
    Image.fromarray(a).save(os.path.join(TEX, "face.png"))


def pack_bits():
    for n in ("map_wood.jpg", "map_wood_light.jpg", "map_roof.jpg", "map_lantern_warm.jpg", "map_leaf_card.png",
              "map_bark.jpg", "map_hay.jpg"):
        im = Image.open(os.path.join(MAPTEX, n))
        im.resize((512, 512), Image.LANCZOS).save(os.path.join(TEX, n.replace("map_", "")))
    # paw banner
    S = 512
    im = Image.new("RGB", (S, S), (232, 220, 196))
    d = ImageDraw.Draw(im)
    pc = (70, 52, 60)
    d.ellipse([S * 0.32, S * 0.45, S * 0.68, S * 0.78], fill=pc)
    for px, py in ((0.27, 0.34), (0.41, 0.24), (0.59, 0.24), (0.73, 0.34)):
        d.ellipse([S * (px - 0.07), S * (py - 0.08), S * (px + 0.07), S * (py + 0.08)], fill=pc)
    im.save(os.path.join(TEX, "banner.jpg"), quality=90)
    # glowing paw lantern pane
    im = Image.new("RGB", (S, S), (255, 196, 96))
    d = ImageDraw.Draw(im)
    pc = (190, 90, 30)
    d.ellipse([S * 0.32, S * 0.45, S * 0.68, S * 0.78], fill=pc)
    for px, py in ((0.27, 0.34), (0.41, 0.24), (0.59, 0.24), (0.73, 0.34)):
        d.ellipse([S * (px - 0.07), S * (py - 0.08), S * (px + 0.07), S * (py + 0.08)], fill=pc)
    im.save(os.path.join(TEX, "pawlamp.jpg"), quality=90)
    # flame spirit
    yy, xx = np.mgrid[0:256, 0:256] / 256
    g = np.exp(-((xx - 0.5) ** 2 / 0.06 + (yy - 0.55) ** 2 / 0.09))
    c = np.stack([255 * np.ones_like(g), 160 + 80 * g, 60 + 120 * g], -1)
    Image.fromarray(c.clip(0, 255).astype(np.uint8)).save(os.path.join(TEX, "spirit.jpg"), quality=90)


def main():
    os.makedirs(TEX, exist_ok=True)
    os.makedirs(os.path.join(OUT, "skins"), exist_ok=True)
    for sk, S in SKINS.items():
        fur(sk)
        fur_card(sk)
        fabric(f"{sk}_hat.jpg", S["hat"], band=S["band"], band_rows=(0.62, 0.72), pattern=S.get("pattern", False))
        fabric(f"{sk}_cloth.jpg", S["cloth"], pattern=S.get("pattern", False))
        print("skin", sk)
    face_atlas()
    pack_bits()


if __name__ == "__main__":
    main()
