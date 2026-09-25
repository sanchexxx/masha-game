// Контроллер персонажа «как в Roblox»: быстрый разгон, короткое торможение,
// прыжок с «запасом» у края, заход на ступеньки, разворот по ходу движения, рывок.
// Одним и тем же контроллером управляет игрок (ввод с клавиатуры) и боты (ввод от «мозга»).
// Цифры берутся из CONFIG.heroes[id] КАЖДЫЙ кадр — ползунки в игре меняют их вживую.
import * as THREE from 'three';
import { CONFIG } from '../config/config.js';

const W = CONFIG.world;
const _fwd = new THREE.Vector3(), _right = new THREE.Vector3(), _wish = new THREE.Vector3(), _hv = new THREE.Vector3();

export class PlayerController {
  constructor(hero, world) {
    this.hero = hero;            // запись из HEROES
    this.world = world;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.grounded = true;
    this.coyote = 0;
    this.jumpBuf = 0;
    this.stamina = 1;
    this.exhausted = false;
    this.running = false;
    this.landed = false;
    this.landSpeed = 0;
    this.dashT = 0;              // сколько ещё длится рывок
    this.dashCd = 0;             // перезарядка рывка
    this.boostT = 0;             // временное ускорение (Тёплый свет)
    this.boostMul = 1;
    this.moveMul = 1;            // во время колдовства герой еле шевелится
    this.speed = 0;
  }

  get phys() { return CONFIG.heroes[this.hero.id]; }
  get radius() { return this.hero.radius; }

  spawn(p, yaw = Math.PI) {
    this.pos.copy(p);
    this.vel.set(0, 0, 0);
    this.yaw = yaw;
    this.stamina = 1;
    this.exhausted = false;
    this.grounded = true;
    this.dashT = this.dashCd = this.boostT = 0;
  }

  // inp — {x, y, run, jump, dash}; camYaw — поворот камеры (движение относительно неё)
  update(dt, inp, camYaw) {
    const ph = this.phys;
    _fwd.set(-Math.sin(camYaw), 0, -Math.cos(camYaw));
    _right.set(-_fwd.z, 0, _fwd.x);
    _wish.set(0, 0, 0).addScaledVector(_fwd, inp.y).addScaledVector(_right, inp.x);
    const wishLen = Math.min(1, _wish.length());
    if (wishLen > 0.001) _wish.normalize();

    // Бег и выносливость
    const wantRun = inp.run && wishLen > 0.2;
    if (this.exhausted && this.stamina > 0.35) this.exhausted = false;
    this.running = wantRun && !this.exhausted;
    if (this.running) {
      this.stamina -= dt / ph.stamina;
      if (this.stamina <= 0) { this.stamina = 0; this.exhausted = true; this.running = false; }
    } else {
      this.stamina = Math.min(1, this.stamina + dt * ph.regen);
    }

    // Рывок: короткое ускорение сверх бега, с перезарядкой
    this.dashCd = Math.max(0, this.dashCd - dt);
    this.dashT = Math.max(0, this.dashT - dt);
    this.dashed = false;
    if (inp.dash && this.dashCd <= 0 && wishLen > 0.2) {
      this.dashT = ph.dash.time;
      this.dashCd = ph.dash.cooldown;
      this.dashed = true;
    }
    const dashing = this.dashT > 0;

    this.boostT = Math.max(0, this.boostT - dt);
    let maxSpeed = (this.running ? ph.run : ph.walk) * wishLen * this.moveMul * (this.boostT > 0 ? this.boostMul : 1);
    if (dashing) maxSpeed = ph.run * ph.dash.mul;
    const target = (dashing && wishLen < 0.2 ? _wish.set(Math.sin(this.yaw), 0, Math.cos(this.yaw)) : _wish).multiplyScalar(maxSpeed);
    _hv.set(this.vel.x, 0, this.vel.z);
    let accel = this.grounded ? (wishLen > 0.01 ? ph.accel : ph.decel) : ph.air;
    if (dashing) accel = ph.accel * 3;
    const diff = target.sub(_hv);
    const step = accel * dt;
    if (diff.length() > step) diff.setLength(step);
    this.vel.x += diff.x;
    this.vel.z += diff.z;

    // Прыжок: буфер нажатия + «время койота»
    const g = W.gravity * ph.gravity;
    if (inp.jump) this.jumpBuf = W.jumpBuffer;
    else this.jumpBuf -= dt;
    this.coyote = this.grounded ? W.coyoteTime : this.coyote - dt;
    this.jumped = false;
    if (this.jumpBuf > 0 && this.coyote > 0) {
      this.vel.y = Math.sqrt(2 * g * ph.jump);
      this.grounded = false;
      this.coyote = 0;
      this.jumpBuf = 0;
      this.jumped = true;
    }

    this.vel.y = Math.max(-W.maxFall, this.vel.y - g * dt);
    this.#integrate(dt);

    // Разворот по ходу движения
    const hs = Math.hypot(this.vel.x, this.vel.z);
    if (hs > 0.4 && (wishLen > 0.05 || dashing)) {
      const targetYaw = Math.atan2(this.vel.x, this.vel.z);
      const d = Math.atan2(Math.sin(targetYaw - this.yaw), Math.cos(targetYaw - this.yaw));
      this.yaw += d * Math.min(1, ph.turn * dt);
    }
    this.speed = hs;
  }

  #integrate(dt) {
    const stepTop = this.pos.y + (this.grounded ? W.stepHeight : 0.08);
    const next = { x: this.pos.x + this.vel.x * dt, y: this.pos.y, z: this.pos.z + this.vel.z * dt };
    const bx = next.x, bz = next.z;
    this.hitWall = this.world.resolve(next, this.radius, stepTop);
    // упёрлись в стену — гасим скорость в стену, чтобы не «липнуть»
    const px = next.x - bx, pz = next.z - bz;
    const pl = Math.hypot(px, pz);
    if (pl > 1e-5) {
      const nx = px / pl, nz = pz / pl;
      const into = this.vel.x * nx + this.vel.z * nz;
      if (into < 0) { this.vel.x -= into * nx; this.vel.z -= into * nz; }
    }
    this.pos.x = next.x; this.pos.z = next.z;

    const wasGrounded = this.grounded;
    const groundH = this.world.groundAt(this.pos.x, this.pos.z, this.radius, stepTop);
    this.pos.y += this.vel.y * dt;
    this.landed = false;
    if (this.pos.y <= groundH) {
      if (!wasGrounded) { this.landed = true; this.landSpeed = this.vel.y; }
      this.pos.y = groundH;
      this.vel.y = 0;
      this.grounded = true;
    } else if (wasGrounded && this.vel.y <= 0 && this.pos.y - groundH < W.stepHeight) {
      this.pos.y = groundH;       // спускаемся со ступеньки — прилипаем к земле
      this.vel.y = 0;
      this.grounded = true;
    } else {
      this.grounded = false;
    }
  }

  animState(t) {
    return { t, speed: this.speed || 0, grounded: this.grounded, vy: this.vel.y, running: this.running || this.dashT > 0, landed: this.landed, landSpeed: this.landSpeed };
  }
}

// Герои толкают друг друга: круги расходятся, тяжёлый сдвигается меньше
export function separate(agents) {
  const k = CONFIG.world.pushStrength;
  for (let i = 0; i < agents.length; i++) {
    const a = agents[i];
    if (!a.alive) continue;
    for (let j = i + 1; j < agents.length; j++) {
      const b = agents[j];
      if (!b.alive) continue;
      const A = a.ctrl, B = b.ctrl;
      if (Math.abs(A.pos.y - B.pos.y) > 1.4) continue;
      const dx = B.pos.x - A.pos.x, dz = B.pos.z - A.pos.z;
      const min = A.radius + B.radius;
      const d2 = dx * dx + dz * dz;
      if (d2 >= min * min || d2 < 1e-8) continue;
      const d = Math.sqrt(d2), over = (min - d) * k;
      const ma = A.phys.mass, mb = B.phys.mass, sum = ma + mb;
      const nx = dx / d, nz = dz / d;
      A.pos.x -= nx * over * (mb / sum); A.pos.z -= nz * over * (mb / sum);
      B.pos.x += nx * over * (ma / sum); B.pos.z += nz * over * (ma / sum);
    }
  }
}
