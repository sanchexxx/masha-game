"""Shape of the No-Face robe (glTF coords: metres, Y up, faces +Z, left hand = +X).

The robe is a lofted surface: for every height y there is an ellipse-like section
(half-width RX, front depth RZF, back depth RZB, centre shifted forward by ZC),
plus cloth folds that grow toward the hem. Used by both painter and builder, so
texture details line up with the geometry.
"""
import math
import os
import sys
import numpy as np
from scipy.interpolate import PchipInterpolator

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "totoro", "_build"))
from shape import vnoise3, fbm, smoothstep  # noqa: E402,F401  (shared noise helpers)

HEIGHT = 2.43
#            y     RX     RZF    RZB    ZC
_TABLE = [
    (0.00, 0.625, 0.500, 0.740, -0.10),
    (0.12, 0.585, 0.470, 0.670, -0.09),
    (0.30, 0.545, 0.440, 0.600, -0.075),
    (0.55, 0.505, 0.410, 0.540, -0.06),
    (0.90, 0.450, 0.360, 0.470, -0.03),
    (1.30, 0.380, 0.300, 0.425, 0.00),
    (1.55, 0.335, 0.275, 0.400, 0.03),
    (1.68, 0.315, 0.265, 0.385, 0.06),
    (1.80, 0.302, 0.265, 0.365, 0.10),
    (1.90, 0.300, 0.270, 0.355, 0.15),
    (2.05, 0.300, 0.275, 0.365, 0.18),
    (2.20, 0.290, 0.265, 0.345, 0.19),
    (2.32, 0.245, 0.225, 0.285, 0.17),
    (2.40, 0.140, 0.125, 0.160, 0.15),
    (HEIGHT, 0.0, 0.0, 0.0, 0.15),
]
_T = np.array(_TABLE)
RX = PchipInterpolator(_T[:, 0], _T[:, 1])
RZF = PchipInterpolator(_T[:, 0], _T[:, 2])
RZB = PchipInterpolator(_T[:, 0], _T[:, 3])
ZC = PchipInterpolator(_T[:, 0], _T[:, 4])

# UV layout of the body texture
V_ROBE0, V_ROBE1 = 0.02, 0.88   # robe (cylindrical)
V_ARM0, V_ARM1 = 0.91, 0.99     # arm/hand strip
UV_INNER = (0.5, 0.008)         # dark inside of the hem


def hem_y(th):
    th = np.asarray(th, float)
    return (0.035 + 0.025 * np.sin(5 * th + 1.0) + 0.015 * np.sin(11 * th + 0.4)
            + 0.008 * np.sin(23 * th + 2.0))


def fold_amp(y):
    y = np.asarray(y, float)
    body = 0.055 * (1 - smoothstep(0.05, 1.45, y)) ** 1.3 + 0.004
    return body * (1 - 0.7 * smoothstep(1.8, 2.0, y))


def fold_pattern(th, y):
    """smooth vertical folds, slightly drifting with height, values ~[-1, 1]."""
    d = 0.18 * np.sin(y * 1.4 + 0.5)
    p = th + d
    return (0.60 * np.sin(5 * p + 0.3) + 0.28 * np.sin(9 * p + 1.7 + 0.3 * y)
            + 0.12 * np.sin(14 * p + 0.9 - 0.5 * y))


def fine_folds(th, y):
    """small folds for the normal map (not in geometry)."""
    d = 0.25 * np.sin(y * 2.1)
    p = th + d
    return (0.5 * np.sin(19 * p + 0.7 + 0.8 * y) + 0.3 * np.sin(27 * p + 2.1 - 0.6 * y)
            + 0.2 * np.sin(41 * p + 1.3))


def section(th, y, folds=True):
    """point on the robe for angle th (0 = front, + toward +X) and height y."""
    th = np.asarray(th, float)
    y = np.asarray(y, float)
    s, c = np.sin(th), np.cos(th)
    rx = RX(y)
    rz = np.where(c > 0, RZF(y), RZB(y))
    # flatter front around the mask (superellipse), plain ellipse elsewhere
    n = 2.0 + 1.3 * smoothstep(1.78, 1.92, y) * (1 - smoothstep(2.30, 2.40, y)) * (c > 0)
    x = rx * np.sign(s) * np.abs(s) ** (2 / n)
    z = rz * np.sign(c) * np.abs(c) ** (2 / n) + ZC(y)
    if folds:
        f = fold_amp(y) * fold_pattern(th, y)
        # push along the horizontal normal of the ellipse
        nx, nz = s / np.maximum(rx, 1e-4), c / np.maximum(rz, 1e-4)
        nl = np.hypot(nx, nz) + 1e-9
        x = x + f * nx / nl
        z = z + f * nz / nl
    return x, y, z


def robe_y(th, v):
    """height for row parameter v in [0,1] (0 = hem, 1 = top)."""
    h = hem_y(th)
    return h + (HEIGHT - h) * np.asarray(v, float)
