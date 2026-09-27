// Контроллер персонажа «как в Roblox»: быстрый разгон, короткое торможение,
// прыжок с «запасом» у края, заход на ступеньки, разворот по ходу движения, рывок.
// Плюс «настоящая» физика: подтягивание на уступ (так залезают на ящики и крыши),
// лестницы, потолок над головой, тяжёлое приземление с большой высоты, заносы на скорости.
// Одним и тем же контроллером управляют игрок (клавиатура), боты («мозг») и Безлик.
// Цифры берутся из CONFIG.heroes[id] КАЖДЫЙ кадр — ползунки в игре меняют их вживую.
import * as THREE from '../../vendor/three.min.js?v=r186s15';
import { CONFIG } from '../config/config.js';

const W = CONFIG.world;
const _fwd = new THREE.Vector3(), _right = new THREE.Vector3(), _wish = new THREE.Vector3(), _hv = new THREE.Vector3();

export class PlayerController {
  constructor(hero, world) {
    this.hero = hero;            // запись из HEROES (или GHOST)
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
    this.slowMul = 1;            // замедление снаружи (огоньки Моти на Безлике)
    this.speed = 0;
    this.stagger = 0;            // после жёсткого приземления — секунда «приходим в себя»
    this.mantle = null;          // подтягиваемся на уступ
    this.climbing = false;       // на лестнице
    this.flying = false;         // Безлик парит вверх
    this.flyEnergy = 1;
    this.dashCharges = 0;
    this.chargeT = 0;
    this.crouching = false;
  }

  get phys() { return CONFIG.heroes[this.hero.id]; }
  get radius() { return this.hero.radius; }
  // Присел — ниже почти вдвое: прячется за ящиками и заборами, пролезает в низкие щели
  get height() { return this.hero.height * (this.crouching ? 0.58 : 1); }
  get elevated() { return this.pos.y > 1.3; }

  spawn(p, yaw = Math.PI) {
    this.pos.copy(p);
    this.vel.set(0, 0, 0);
    this.yaw = yaw;
    this.stamina = 1;
    this.exhausted = false;
    this.grounded = true;
    this.dashT = this.dashCd = this.boostT = this.stagger = 0;
    this.mantle = null;
    this.climbing = this.flying = this.crouching = false;
    this.flyEnergy = 1;
    this.dashCharges = this.phys.dash.charges ?? 0;
    this.chargeT = 0;
  }

  // Сколько рывков доступно сейчас (у героев без зарядов — 1 или 0 по перезарядке)
  get dashReady() { return this.dashCd <= 0 && (this.phys.dash.charges ? this.dashCharges > 0 : true); }

  // inp — {x, y, run, jump, jumpHold, dash}; camYaw — поворот камеры (движение относительно неё)
  update(dt, inp, camYaw) {
    const ph = this.phys;
    _fwd.set(-Math.sin(camYaw), 0, -Math.cos(camYaw));
    _right.set(-_fwd.z, 0, _fwd.x);
    _wish.set(0, 0, 0).addScaledVector(_fwd, inp.y || 0).addScaledVector(_right, inp.x || 0);   // нет ввода (гость ещё не прислал) — стоим
    const wishLen = Math.min(1, _wish.length());
    if (wishLen > 0.001) _wish.normalize();
    const wishX = _wish.x, wishZ = _wish.z;

    this.dashed = false;
    this.jumped = false;
    this.landed = false;

    // Подтягивание на уступ: короткая анимация, физика отключена
    if (this.mantle) return this.#doMantle(dt);

    // Присесть: только на земле; встать — если над головой есть место
    if (inp.crouch && this.grounded && ph.jump > 0) this.crouching = true;
    else if (this.crouching && (!inp.crouch || !this.grounded)) {
      if (this.world.ceilingAt(this.pos.x, this.pos.z, this.radius, this.pos.y + 0.1) > this.pos.y + this.hero.height) this.crouching = false;
    }

    // Бег и выносливость
    const wantRun = inp.run && wishLen > 0.2 && !this.crouching;
    if (this.exhausted && this.stamina > 0.35) this.exhausted = false;
    this.running = wantRun && !this.exhausted;
    if (this.running) {
      this.stamina -= dt / ph.stamina;
      if (this.stamina <= 0) { this.stamina = 0; this.exhausted = true; this.running = false; }
    } else {
      // стоя отдыхаем быстрее, чем на ходу
      this.stamina = Math.min(1, this.stamina + dt * ph.regen * (wishLen < 0.1 ? 1.4 : 1));
    }

    // Рывок: короткое ускорение сверх бега. У Безлика — ограниченные заряды.
    this.dashCd = Math.max(0, this.dashCd - dt);
    this.dashT = Math.max(0, this.dashT - dt);
    if (ph.dash.charges) {
      if (this.dashCharges < ph.dash.charges) {
        this.chargeT += dt;
        if (this.chargeT >= ph.dash.recharge) { this.chargeT = 0; this.dashCharges++; }
      } else this.chargeT = 0;
    }
    if (inp.dash && this.dashReady && (wishLen > 0.2 || this.speed > 1)) {
      this.dashT = ph.dash.time;
      this.dashCd = ph.dash.cooldown;
      if (ph.dash.charges) this.dashCharges--;
      this.dashed = true;
    }
    const dashing = this.dashT > 0;

    this.boostT = Math.max(0, this.boostT - dt);
    this.stagger = Math.max(0, this.stagger - dt);
    const tired = this.exhausted ? 0.85 : 1;                // выдохся — даже шагом медленнее
    const mul = this.moveMul * this.slowMul * (this.boostT > 0 ? this.boostMul : 1) * (this.stagger > 0 ? 0.45 : 1);
    let maxSpeed = (this.running ? ph.run : ph.walk * tired * (this.crouching ? 0.5 : 1)) * wishLen * mul;
    if (dashing) maxSpeed = ph.run * ph.dash.mul * this.moveMul * this.slowMul;
    const target = (dashing && wishLen < 0.2 ? _wish.set(Math.sin(this.yaw), 0, Math.cos(this.yaw)) : _wish).multiplyScalar(maxSpeed);
    _hv.set(this.vel.x, 0, this.vel.z);
    let accel = this.grounded ? (wishLen > 0.01 ? ph.accel : ph.decel) : ph.air;
    // Занос: на большой скорости резкий разворот «съедает» сцепление — тяжёлых заносит сильнее
    if (this.grounded && wishLen > 0.2) {
      const hs = _hv.length();
      if (hs > ph.walk) {
        const cos = (_hv.x * target.x + _hv.z * target.z) / (hs * (target.length() || 1));
        if (cos < 0.3) accel *= THREE.MathUtils.lerp(0.55, 1, (cos + 1) / 1.3) ** (ph.mass > 2 ? 1.6 : 1);
      }
    }
    if (dashing) accel = ph.accel * 3;
    const diff = target.sub(_hv);
    const step = accel * dt;
    if (diff.length() > step) diff.setLength(step);
    this.vel.x += diff.x;
    this.vel.z += diff.z;

    // Лестница: упёрся в неё — лезешь вверх
    const lad = this.world.ladderAt(this.pos.x, this.pos.z, this.radius, this.pos.y);
    this.climbing = !!(lad && wishLen > 0.3 && (wishX * -lad.nx + wishZ * -lad.nz) > 0.4);
    const g = W.gravity * ph.gravity;

    // Прыжок: буфер нажатия + «время койота»
    if (inp.jump) this.jumpBuf = W.jumpBuffer;
    else this.jumpBuf -= dt;
    this.coyote = this.grounded || this.climbing ? W.coyoteTime : this.coyote - dt;
    if (this.jumpBuf > 0 && this.coyote > 0 && ph.jump > 0 && !this.crouching) {
      this.vel.y = Math.sqrt(2 * g * ph.jump);
      if (this.climbing && lad) { this.vel.x += lad.nx * 4; this.vel.z += lad.nz * 4; }   // оттолкнулись от лестницы
      this.grounded = false;
      this.climbing = false;
      this.coyote = 0;
      this.jumpBuf = 0;
      this.jumped = true;
      this.stamina = Math.max(0, this.stamina - 0.03);
    }

    // Парение (Безлик): держишь прыжок — поднимаешься, пока есть силы
    this.flying = false;
    if (ph.fly) {
      const want = inp.jumpHold || inp.jump;
      if (want && this.flyEnergy > 0) {
        this.flying = true;
        this.vel.y += (ph.fly.speed - this.vel.y) * Math.min(1, dt * 8);
        this.flyEnergy = Math.max(0, this.flyEnergy - dt / ph.fly.time);
        this.grounded = false;
      } else if (this.grounded) this.flyEnergy = Math.min(1, this.flyEnergy + dt * ph.fly.regen);
    }

    if (this.climbing) {
      this.vel.y = ph.climb ?? 3.2;
      this.vel.x *= 0.5; this.vel.z *= 0.5;
      this.grounded = false;
    } else if (!this.flying) {
      // Безлик плывёт: падает мягко
      this.vel.y = Math.max(-W.maxFall * (ph.fly ? 0.3 : 1), this.vel.y - g * dt * (ph.fly && this.vel.y < 0 ? 0.35 : 1));
    }
    this.#integrate(dt);

    // Уступ впереди, а мы в воздухе и жмём к нему — подтягиваемся
    if (!this.grounded && !this.mantle && wishLen > 0.3 && this.vel.y < 4 && ph.reach > 0) {
      const probe = this.radius + 0.3;
      const px = this.pos.x + wishX * probe, pz = this.pos.z + wishZ * probe;
      const T = this.world.ledgeAt(px, pz, this.pos.y, ph.reach, this.height);
      if (T !== null) {
        const to = new THREE.Vector3(this.pos.x + wishX * (this.radius + 0.35), T, this.pos.z + wishZ * (this.radius + 0.35));
        this.mantle = { t: 0, dur: 0.22 + (T - this.pos.y) * 0.12 * (ph.mass > 2 ? 1.4 : 1), from: this.pos.clone(), to };
        this.vel.set(0, 0, 0);
        this.stamina = Math.max(0, this.stamina - 0.05);
        this.climbing = false;
      }
    }

    // Разворот по ходу движения
    const hs = Math.hypot(this.vel.x, this.vel.z);
    if (hs > 0.4 && (wishLen > 0.05 || dashing)) {
      const targetYaw = Math.atan2(this.vel.x, this.vel.z);
      const d = Math.atan2(Math.sin(targetYaw - this.yaw), Math.cos(targetYaw - this.yaw));
      this.yaw += d * Math.min(1, ph.turn * dt);
    } else if (this.climbing && lad) this.yaw = Math.atan2(-lad.nx, -lad.nz);
    this.speed = hs;
  }

  #doMantle(dt) {
    const m = this.mantle;
    m.t += dt;
    const k = Math.min(1, m.t / m.dur);
    // сначала вверх, потом вперёд — как настоящее подтягивание
    const up = Math.min(1, k / 0.65), fw = Math.max(0, (k - 0.35) / 0.65);
    const ease = x => x * x * (3 - 2 * x);
    this.pos.y = m.from.y + (m.to.y - m.from.y) * ease(up);
    this.pos.x = m.from.x + (m.to.x - m.from.x) * ease(fw);
    this.pos.z = m.from.z + (m.to.z - m.from.z) * ease(fw);
    this.grounded = false;
    this.speed = 0;
    if (k >= 1) {
      this.mantle = null;
      const next = { x: this.pos.x, y: this.pos.y, z: this.pos.z };
      this.world.resolve(next, this.radius, this.pos.y + W.stepHeight, this.pos.y + this.height * 0.9);
      this.pos.x = next.x; this.pos.z = next.z;
      this.pos.y = Math.max(this.pos.y, this.world.groundAt(this.pos.x, this.pos.z, this.radius, this.pos.y + 0.1));
      this.grounded = true;
      this.vel.set(0, 0, 0);
    }
  }

  #integrate(dt) {
    const stepTop = this.pos.y + (this.grounded ? W.stepHeight : 0.08);
    const headY = this.pos.y + this.height * 0.9;
    const next = { x: this.pos.x + this.vel.x * dt, y: this.pos.y, z: this.pos.z + this.vel.z * dt };
    const bx = next.x, bz = next.z;
    this.hitWall = this.world.resolve(next, this.radius, stepTop, headY);
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
    // Потолок: стукнулись головой — вверх дальше не летим
    if (this.vel.y > 0) {
      const ceil = this.world.ceilingAt(this.pos.x, this.pos.z, this.radius, this.pos.y - this.vel.y * dt + this.height * 0.5);
      if (this.pos.y + this.height > ceil) { this.pos.y = Math.max(groundH, ceil - this.height); this.vel.y = 0; }
    }
    if (this.pos.y <= groundH) {
      if (!wasGrounded) {
        this.landed = true; this.landSpeed = this.vel.y;
        if (this.vel.y < -15 && !this.phys.fly) this.stagger = Math.min(0.6, (-this.vel.y - 15) * 0.06 + 0.2);
      }
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
    const m = this.mantle;
    return {
      t, speed: m ? 0 : this.speed || 0, grounded: this.grounded && !m, vy: m || this.climbing ? 3 : this.vel.y,
      running: this.running || this.dashT > 0, landed: this.landed, landSpeed: this.landSpeed, crouch: this.crouching,
    };
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
      if (A.mantle || B.mantle || Math.abs(A.pos.y - B.pos.y) > 1.4) continue;
      const dx = B.pos.x - A.pos.x, dz = B.pos.z - A.pos.z;
      const min = A.radius + B.radius;
      const d2 = dx * dx + dz * dz;
      if (d2 >= min * min || d2 < 1e-8) continue;
      const d = Math.sqrt(d2), over = (min - d) * k;
      const ma = A.phys.mass, mb = B.phys.mass, sum = ma + mb;
      const nx = dx / d, nz = dz / d;
      // растолкнули — но не сквозь стену
      const pa = { x: A.pos.x - nx * over * (mb / sum), y: A.pos.y, z: A.pos.z - nz * over * (mb / sum) };
      const pb = { x: B.pos.x + nx * over * (ma / sum), y: B.pos.y, z: B.pos.z + nz * over * (ma / sum) };
      A.world.resolve(pa, A.radius, A.pos.y + W.stepHeight, A.pos.y + A.height * 0.9);
      B.world.resolve(pb, B.radius, B.pos.y + W.stepHeight, B.pos.y + B.height * 0.9);
      A.pos.x = pa.x; A.pos.z = pa.z; B.pos.x = pb.x; B.pos.z = pb.z;
    }
  }
}
