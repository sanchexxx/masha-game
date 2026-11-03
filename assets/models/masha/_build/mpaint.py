"""Textures for Masha: skin, face atlas (4 expressions), hair (+normal), dress per skin (+normal), trims."""
import math
import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from scipy.ndimage import gaussian_filter, zoom

HERE = os.path.dirname(os.path.abspath(__file__))
TEX = os.path.join(HERE, "tex")
FX0, FX1, FY0, FY1 = -0.11, 0.11, 1.07, 1.29
N = 512

# skins from the character sheet: classic navy school dress, summer light blue, forest green, school holiday (lace)
SKINS = {
    "classic": dict(dress=(30, 36, 72), cuff=(20, 24, 50), collar=(246, 244, 238)),
    "summer": dict(dress=(150, 190, 228), cuff=(110, 150, 196), collar=(250, 250, 250)),
    "forest": dict(dress=(70, 118, 66), cuff=(110, 76, 44), collar=(214, 226, 170), leaves=True),
    "holiday": dict(dress=(30, 36, 72), cuff=(20, 24, 50), collar=(250, 250, 250), lace=True),
}


def pn(cells, seed, sx=None):
    r = np.random.default_rng(seed).uniform(-1, 1, (cells, sx or cells))
    return zoom(r, (N / cells, N / (sx or cells)), order=3, mode="grid-wrap")[:N, :N]


def save(name, c, q=90):
    Image.fromarray(np.clip(c, 0, 255).astype(np.uint8), "RGB").save(os.path.join(TEX, name), quality=q)


def normal(name, h, k):
    gx = (np.roll(h, -1, 1) - np.roll(h, 1, 1)) * k
    gy = (np.roll(h, 1, 0) - np.roll(h, -1, 0)) * k
    n = np.stack([-gx, -gy, np.ones_like(h)], -1)
    n /= np.linalg.norm(n, axis=-1, keepdims=True)
    save(name, (n * 0.5 + 0.5) * 255, 92)


yy, xx = np.mgrid[0:N, 0:N] / N


def skin():
    c = np.array([246, 214, 194], float)[None, None] * (1 + 0.02 * pn(8, 1)[..., None])
    save("skin.jpg", c)


def hair():
    strands = pn(4, 2, sx=96) * 0.6 + pn(8, 3, sx=200) * 0.4      # along v (hair flows down)
    c = np.array([62, 38, 26], float)[None, None] * (0.8 + 0.35 * (strands[..., None] * 0.5 + 0.5))
    shine = np.exp(-((yy - 0.35) / 0.06) ** 2) * (0.5 + 0.5 * strands)
    c += np.array([60, 44, 34])[None, None] * shine[..., None]
    save("hair.jpg", c)
    normal("hair_n.jpg", 0.5 + 0.3 * strands, 3.0)


def dress(name, S):
    weave = (np.sin(xx * N * math.pi / 2) * np.sin(yy * N * math.pi / 2)) * 0.5 + 0.5
    # soft pleat shading running down the skirt (u wraps 3 times around the dress)
    pleat = np.sin(xx * 2 * math.pi * 4) * 0.5 + 0.5
    c = np.array(S["dress"], float)[None, None] * (0.85 + 0.08 * weave[..., None] + 0.12 * pleat[..., None] * (yy > 0.45)[..., None])
    if S.get("lace"):
        # white lace apron band near the hem + small dots
        band = (yy > 0.82) & (yy < 0.9)
        c[band] = np.array([240, 240, 236]) * (0.85 + 0.15 * (np.sin(xx[band] * 300) > 0))[..., None]
        dots = (np.hypot(((xx * 24) % 1) - 0.5, ((yy * 24) % 1) - 0.5) < 0.12) & (yy > 0.45)
        c[dots] = c[dots] * 0.5 + np.array([200, 200, 210]) * 0.5
    if S.get("leaves"):
        img = Image.fromarray(np.clip(c, 0, 255).astype(np.uint8))
        d = ImageDraw.Draw(img)
        rng = np.random.default_rng(7)
        for _ in range(220):
            x, y = rng.uniform(0, N, 2)
            a = rng.uniform(0, 6.28)
            s = rng.uniform(6, 13)
            pts = [(x + math.cos(a + t) * s * (0.5 + 0.5 * abs(math.cos(t / 2))) * (1 if k % 2 else 0.45),
                    y + math.sin(a + t) * s * (0.5 + 0.5 * abs(math.cos(t / 2))) * (1 if k % 2 else 0.45))
                   for k, t in enumerate(np.linspace(0, 6.28, 12))]
            g = rng.uniform(0.8, 1.3)
            d.polygon(pts, fill=(int(90 * g), int(150 * g), int(70 * g)))
        c = np.array(img, float)
    save(f"{name}_dress.jpg", c)
    save(f"{name}_cuff.jpg", np.array(S["cuff"], float)[None, None] * (0.9 + 0.1 * weave[..., None]))
    save(f"{name}_collar.jpg", np.array(S["collar"], float)[None, None] * (0.95 + 0.05 * weave[..., None]))
    if name == "classic":
        normal("dress_n.jpg", 0.5 + 0.12 * weave + 0.25 * pleat * (yy > 0.45), 2.0)


def face_atlas(cell=512):
    atlas = Image.new("RGBA", (cell * 2, cell * 2), (0, 0, 0, 0))
    for i, kind in enumerate(["grin", "blink", "laugh", "wow"]):
        S = 2048
        im = Image.new("RGBA", (S, S), (0, 0, 0, 0))

        def P(fx, fy):
            return ((fx - FX0) / (FX1 - FX0) * S, (FY1 - fy) / (FY1 - FY0) * S)

        def m(v):
            return v / (FX1 - FX0) * S

        # blush
        bl = Image.new("RGBA", (S, S), (0, 0, 0, 0))
        bd = ImageDraw.Draw(bl)
        for s in (-1, 1):
            cx, cy = P(s * 0.066, 1.142)
            bd.ellipse([cx - m(0.026), cy - m(0.015), cx + m(0.026), cy + m(0.015)], fill=(236, 130, 130, 120))
        im.alpha_composite(bl.filter(ImageFilter.GaussianBlur(40)))
        d = ImageDraw.Draw(im)
        dark = (40, 26, 20, 255)

        def curve(pts, w, fill=dark):
            pp = [P(*p) for p in pts]
            d.line(pp, fill=fill, width=max(2, int(m(w))), joint="curve")
            for q in (pp[0], pp[-1]):
                r = m(w) / 2
                d.ellipse([q[0] - r, q[1] - r, q[0] + r, q[1] + r], fill=fill)

        EY, EX = 1.183, 0.046
        for s in (-1, 1):
            ex = s * EX
            # brows: soft and slightly arched
            lift = 0.006 if kind == "wow" else 0.0
            curve([(ex + t * 0.02, 1.222 + lift + 0.004 * (1 - t * t) - s * 0.0015 * t) for t in np.linspace(-1, 1, 9)], 0.004,
                  (70, 44, 30, 255))
            if kind == "blink":
                curve([(ex + t * 0.017, EY - 0.002 + 0.007 * (1 - t * t)) for t in np.linspace(-1, 1, 11)], 0.0045)
                continue
            h = 0.03 if kind == "wow" else 0.026
            w = 0.018
            cx, cy = P(ex, EY)
            d.ellipse([cx - m(w), cy - m(h / 2 + 0.002), cx + m(w), cy + m(h / 2 + 0.002)], fill=(252, 250, 246, 255))
            d.ellipse([cx - m(w * 0.82), cy - m(h / 2), cx + m(w * 0.82), cy + m(h / 2)], fill=(92, 56, 34, 255))
            d.ellipse([cx - m(w * 0.48), cy - m(h * 0.3), cx + m(w * 0.48), cy + m(h * 0.3)], fill=(30, 18, 12, 255))
            d.ellipse([cx - m(0.0065), cy - m(0.009), cx - m(0.0005), cy - m(0.003)], fill=(255, 255, 255, 255))
            d.ellipse([cx + m(0.003), cy + m(0.004), cx + m(0.0065), cy + m(0.0075)], fill=(255, 255, 255, 220))
            curve([(ex + t * 0.018, EY + h / 2 + 0.0015 - 0.002 * t * t) for t in np.linspace(-1, 1, 9)], 0.0035)
        # nose: tiny soft shade
        curve([(-0.004, 1.152), (0.0, 1.149), (0.004, 1.152)], 0.003, (196, 130, 112, 255))
        MY = 1.118
        if kind == "blink":
            curve([(t * 0.024, MY - 0.009 * (1 - t * t)) for t in np.linspace(-1, 1, 13)], 0.0035, (150, 70, 66, 255))
        elif kind in ("laugh", "grin"):
            W_ = 0.03 if kind == "grin" else 0.028
            D_ = 0.02 if kind == "grin" else 0.027
            top = [(t * W_, MY + 0.004 + 0.004 * t * t) for t in np.linspace(-1, 1, 15)]
            bot = [(t * W_, MY + 0.004 + 0.004 * t * t - D_ * (1 - t * t) ** 0.8) for t in np.linspace(1, -1, 15)]
            d.polygon([P(*p) for p in top + bot], fill=(120, 40, 44, 255))
            d.polygon([P(*p) for p in [(t * 0.013, MY - 0.017 + 0.006 * (1 - t * t)) for t in np.linspace(-1, 1, 9)] +
                       [(0.013, MY - 0.02), (-0.013, MY - 0.02)]], fill=(226, 120, 128, 255))
            for k, x0 in enumerate((-0.021, -0.012, 0.004, 0.013)):   # top teeth with a little gap (lost tooth)
                d.rectangle([*P(x0, MY + 0.0045), *P(x0 + 0.0078, MY - 0.002)], fill=(252, 250, 244, 255))
        else:
            cx, cy = P(0, MY - 0.004)
            d.ellipse([cx - m(0.008), cy - m(0.009), cx + m(0.008), cy + m(0.009)], fill=(120, 40, 44, 255))
        atlas.paste(im.resize((cell, cell), Image.LANCZOS), ((i % 2) * cell, (i // 2) * cell))
    a = np.array(atlas)
    a[..., :3] = np.where(a[..., 3:4] > 4, a[..., :3], np.array([246, 214, 194]))
    Image.fromarray(a).save(os.path.join(TEX, "face.png"))


def spirit():
    g = np.exp(-((xx - 0.5) ** 2 / 0.06 + (yy - 0.55) ** 2 / 0.09))
    save("spirit.jpg", np.stack([255 * np.ones_like(g), 170 + 70 * g, 70 + 110 * g], -1))


def main():
    os.makedirs(TEX, exist_ok=True)
    skin()
    hair()
    for k, s in SKINS.items():
        dress(k, s)
    face_atlas()
    spirit()
    print("ok")


if __name__ == "__main__":
    main()
