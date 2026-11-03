"""Uncle Moti body shape (glTF coords: metres, Y up, faces +Z, left hand = +X). Height 2.4 m with the hat."""
import math
import os
import sys

import numpy as np

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "totoro", "_build"))
from shape import Profile, vnoise3, fbm, smoothstep  # noqa: E402,F401

BODY = [(0.00, 0.40), (0.42, 0.42), (0.70, 0.52), (0.88, 0.72), (0.92, 0.98), (0.88, 1.25), (0.85, 1.50),
        (0.78, 1.68), (0.62, 1.86), (0.45, 2.00), (0.25, 2.10), (0.00, 2.14)]
DF, DB = 0.86, 0.82
PROF = Profile(BODY)

# face frame (front projection) used by the face decal atlas
FX0, FX1, FY0, FY1 = -0.55, 0.55, 1.40, 2.10
EYE_X, EYE_Y = 0.19, 1.84


def surface(u, t):
    th = (np.asarray(u) - 0.5) * 2 * math.pi
    r, y = PROF.at(t)
    c = np.cos(th)
    x = r * np.sin(th)
    z = r * c * np.where(c > 0, DF, DB)
    z = z + 0.10 * np.exp(-((y - 0.95) / 0.35) ** 2) * np.maximum(c, 0) ** 2   # round belly
    return x, y, z


def body_weights(y, x=0.0):
    wh = smoothstep(1.55, 1.75, y)
    wc = smoothstep(1.10, 1.30, y) * (1 - wh)
    ws = smoothstep(0.70, 0.90, y) * (1 - smoothstep(1.10, 1.30, y))
    wp = 1 - smoothstep(0.70, 0.90, y)
    w = {"Head": wh, "Chest": wc, "Spine": ws, "Hips": wp}
    leg = (1 - smoothstep(0.32, 0.6, y)) * smoothstep(0.1, 0.35, abs(x)) * 0.5
    if leg > 0.01:
        w = {k: v * (1 - leg) for k, v in w.items()}
        w["LeftUpLeg" if x > 0 else "RightUpLeg"] = leg
    return {k: float(v) for k, v in w.items() if v > 0.01}
