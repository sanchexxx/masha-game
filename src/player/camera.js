// Камера от третьего лица: орбита вокруг героя, плавное следование,
// подтягивается ближе, если сзади стена. Режим «от первого лица» — задел на потом (mode).
import * as THREE from 'three';
import { CONFIG } from '../config/config.js';

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
    this.curDist = C.distance;
    this.focus = new THREE.Vector3();
    this.ray = new THREE.Raycaster();
    this.mode = 'third';
    this.shake = 0;
  }

  configure(heroCam) {
    this.baseDistance = heroCam?.distance ?? C.distance;
    this.lookHeight = heroCam?.height ?? C.height;
    this.side = heroCam?.side ?? 0;        // «через плечо»: крупные герои не закрывают дорогу
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

    // Стена между героем и камерой — подъезжаем ближе
    const dir = this.#dir();
    this.ray.set(this.focus, dir);
    this.ray.far = this.baseDistance;
    const hit = this.ray.intersectObjects(this.blockers, false)[0];
    const d = hit ? Math.max(C.minDistance, hit.distance - 0.35) : this.baseDistance;
    this.curDist = d < this.curDist ? d : this.curDist + (d - this.curDist) * (1 - Math.exp(-dt * 4));
    this.shake = Math.max(0, this.shake - dt * 1.5);
    this.#place();
  }

  #dir() {
    return new THREE.Vector3(
      Math.sin(this.yaw) * Math.cos(this.pitch),
      Math.sin(this.pitch),
      Math.cos(this.yaw) * Math.cos(this.pitch),
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
