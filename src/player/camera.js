// Камера от третьего лица: орбита вокруг героя, плавное следование,
// подтягивается ближе, если сзади стена. Режим «от первого лица» — задел на потом (mode).
import * as THREE from 'three';
import { CONFIG } from '../config/config.js?v=2026100901';

const C = CONFIG.camera;

export class ThirdPersonCamera {
  constructor(camera, blockers) {
    this.cam = camera;
    this.blockers = blockers;
    this.yaw = 0;
    this.pitch = 0.32;
    this.distance = C.distance;
    this.baseDistance = C.distance;
    this.lookHeight = C.height;
    this.side = 0;
    this.sideTarget = 0;
    this.curDist = C.distance;
    this.focus = new THREE.Vector3();
    this.ray = new THREE.Raycaster();
    this.mode = 'third';
    this.shake = 0;
  }

  configure(heroCam) {
    this.baseDistance = heroCam?.distance ?? C.distance;
    this.lookHeight = heroCam?.height ?? C.height;
    this.sideTarget = heroCam?.side ?? 0;   // «через плечо»: крупные герои не закрывают дорогу
  }

  snap(target) {
    this.focus.set(target.x, target.y + this.lookHeight, target.z);
    this.curDist = this.baseDistance;
    this.#place();
  }

  update(dt, target, inp) {
    this.yaw -= inp.lookX;
    this.pitch = THREE.MathUtils.clamp(this.pitch + inp.lookY, C.pitchMin, C.pitchMax);

    const want = new THREE.Vector3(target.x, target.y + this.lookHeight, target.z);
    // по горизонтали держимся плотно, по вертикали — мягче (прыжки не трясут экран)
    const kH = 1 - Math.exp(-dt * C.follow * 1.6);
    const kV = 1 - Math.exp(-dt * C.follow * 0.6);
    this.focus.x += (want.x - this.focus.x) * kH;
    this.focus.z += (want.z - this.focus.z) * kH;
    this.focus.y += (want.y - this.focus.y) * kV;

    // Проверяем луч по той же боковой линии, на которой #place ставит камеру.
    // Если герой стоит внутри укрытия или ствола, сдвигаем камеру на другое
    // плечо/центр: луч изнутри объёма иначе видит только его дальнюю стенку.
    const rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
    const probe = (side, pitch = this.pitch) => {
      const origin = this.focus.clone();
      origin.x += rx * side; origin.z += rz * side;
      this.ray.set(origin, this.#dir(pitch));
      this.ray.far = this.baseDistance;
      const hit = this.ray.intersectObjects(this.blockers, false)[0];
      return { side, pitch, distance: hit ? Math.max(0.4, hit.distance - 0.35) : this.baseDistance };
    };
    let best = probe(this.sideTarget);
    if (best.distance < 1.4 && Math.abs(this.sideTarget) > 0.1) {
      for (const side of [-this.sideTarget, 0]) {
        const candidate = probe(side);
        if (candidate.distance > best.distance + 0.25) best = candidate;
      }
    }
    // Если и плечо, и центр зажаты между кронами/стенами, поднимаем взгляд
    // и камеру над препятствием. Положение меняется только при явном выигрыше,
    // поэтому свободная камера не плавает по высоте каждый кадр.
    if (best.distance < 1.4) {
      const sides = [...new Set([this.sideTarget, -this.sideTarget, 0])];
      for (const pitch of [Math.min(C.pitchMax, this.pitch + 0.32), Math.min(C.pitchMax, this.pitch + 0.78)]) {
        for (const side of sides) {
          const candidate = probe(side, pitch);
          if (candidate.distance > best.distance + 0.3) best = candidate;
        }
      }
    }
    if (best.side !== this.side && best.distance > 1.4) this.side = best.side;
    else if (best.side === this.sideTarget) this.side = this.sideTarget;
    if (best.pitch > this.pitch && best.distance > 1.4) this.pitch = best.pitch;
    const hit = best.distance < this.baseDistance ? best : null;
    // При тесном проходе камера должна остановиться перед препятствием,
    // даже если это ближе обычной минимальной дистанции. Иначе она проходит
    // сквозь крону/камень и остаётся внутри геометрии, закрывая весь обзор.
    const d = hit ? hit.distance : this.baseDistance;
    this.curDist = d < this.curDist ? d : this.curDist + (d - this.curDist) * (1 - Math.exp(-dt * 4));
    this.shake = Math.max(0, this.shake - dt * 1.5);
    this.#place();
  }

  #dir(pitch = this.pitch) {
    return new THREE.Vector3(
      Math.sin(this.yaw) * Math.cos(pitch),
      Math.sin(pitch),
      Math.cos(this.yaw) * Math.cos(pitch),
    ).normalize();
  }

  #place() {
    // смещаем и камеру, и точку взгляда вбок — герой уходит чуть влево, дорога впереди видна
    const rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
    const look = this.focus.clone();
    look.x += rx * this.side; look.z += rz * this.side;
    const p = look.clone().addScaledVector(this.#dir(), this.curDist);
    p.y = Math.max(0.35, p.y);
    if (this.shake > 0) {
      const s = this.shake * 0.12;
      p.x += (Math.random() - 0.5) * s; p.y += (Math.random() - 0.5) * s; p.z += (Math.random() - 0.5) * s;
    }
    this.cam.position.copy(p);
    this.cam.lookAt(look);
  }
}
