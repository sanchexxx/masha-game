// Ввод: клавиатура + мышь на ПК, стик-«лапка» + зона обзора + кнопки на телефоне.
// Экранные кнопки (бег, присесть, рывок, прыжок) есть и на ПК — жмутся мышкой, как на телефоне.
// Всё на pointer-событиях: одинаково работает пальцем, мышкой и стилусом.
import { CONFIG } from '../config/config.js?v=2026100901';

export class Input {
  constructor(canvas, touchRoot) {
    this.keys = new Set();
    this.move = { x: 0, y: 0 };
    this.look = { x: 0, y: 0 };
    this.jumpQueued = false;
    this.dashQueued = false;
    this.jumpHeldBtn = false;
    this.lookOnly = false;       // режим «смотреть»: только камера
    this.touchRun = false;
    this.touchCrouch = false;
    this.enabled = false;
    this.canvas = canvas;

    addEventListener('keydown', e => {
      if (e.code === 'Space') { if (!e.repeat) this.jumpQueued = true; e.preventDefault(); }
      if (e.code === 'KeyE' && !e.repeat) this.dashQueued = true;
      if (e.code === 'KeyC' && !e.repeat) this.#setCrouch(!this.touchCrouch);
      this.keys.add(e.code);
    });
    addEventListener('keyup', e => this.keys.delete(e.code));
    addEventListener('blur', () => this.keys.clear());

    // Мышь: клик по сцене — захват курсора; без захвата можно крутить, зажав кнопку
    let dragging = false;
    canvas.addEventListener('mousedown', () => {
      if (!this.enabled) return;
      if (document.pointerLockElement !== canvas && canvas.requestPointerLock) {
        try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch {}
      }
      dragging = true;
    });
    addEventListener('mouseup', () => (dragging = false));
    addEventListener('mousemove', e => {
      if (!this.enabled) return;
      if (document.pointerLockElement === canvas || dragging) {
        this.look.x += e.movementX * CONFIG.camera.mouseSens;
        this.look.y += e.movementY * CONFIG.camera.mouseSens;
      }
    });

    this.root = touchRoot;
    this.#setupButtons(touchRoot);
  }

  #setCrouch(on) {
    this.touchCrouch = on;
    this.root?.querySelector('.btn-crouch')?.classList.toggle('active', on);
  }

  #setupButtons(root) {
    const stick = root.querySelector('.stick');
    const knob = root.querySelector('.stick-knob');
    const stickZone = root.querySelector('.stick-zone');
    const lookZone = root.querySelector('.look-zone');
    const stop = e => { e.preventDefault(); e.stopPropagation(); };
    const press = (sel, down, up) => {
      const b = root.querySelector(sel);
      b.addEventListener('pointerdown', e => { stop(e); b.classList.add('down'); down(); try { b.setPointerCapture(e.pointerId); } catch {} });
      const end = () => { b.classList.remove('down'); up?.(); };
      b.addEventListener('pointerup', end);
      b.addEventListener('pointercancel', end);
      b.addEventListener('mousedown', e => e.stopPropagation());
    };
    press('.btn-jump', () => { this.jumpQueued = true; this.jumpHeldBtn = true; }, () => { this.jumpHeldBtn = false; });
    press('.btn-dash', () => { this.dashQueued = true; });
    press('.btn-run', () => { this.touchRun = !this.touchRun; root.querySelector('.btn-run').classList.toggle('active', this.touchRun); });
    press('.btn-crouch', () => this.#setCrouch(!this.touchCrouch));

    // Стик-«лапка»: тянешь — идёшь, тянешь далеко — бежишь
    let stickId = null, sx = 0, sy = 0;
    const R = 52;
    stickZone.addEventListener('pointerdown', e => {
      stop(e);
      stickId = e.pointerId;
      const box = stickZone.getBoundingClientRect();
      // на ПК стик стоит на месте; на телефоне появляется под пальцем
      const fixed = stickZone.classList.contains('fixed');
      sx = fixed ? box.left + box.width / 2 : e.clientX; sy = fixed ? box.top + box.height / 2 : e.clientY;
      if (!fixed) { stick.style.left = sx + 'px'; stick.style.top = sy + 'px'; }
      stick.classList.add('on');
      try { stickZone.setPointerCapture(e.pointerId); } catch {}
      moveStick(e);
    });
    const moveStick = e => {
      if (e.pointerId !== stickId) return;
      let dx = e.clientX - sx, dy = e.clientY - sy;
      const d = Math.hypot(dx, dy);
      if (d > R) { dx *= R / d; dy *= R / d; }
      knob.style.transform = `translate(${dx}px, ${dy}px)`;
      this.move.x = dx / R; this.move.y = -dy / R;
      this.stickRun = d > R * 1.35;       // сильно отклонил — бежим сам (как в Roblox на телефоне)
      e.preventDefault();
    };
    const endStick = e => {
      if (e.pointerId !== stickId) return;
      stickId = null; this.move.x = this.move.y = 0; this.stickRun = false;
      knob.style.transform = ''; stick.classList.remove('on');
    };
    stickZone.addEventListener('pointermove', moveStick);
    stickZone.addEventListener('pointerup', endStick);
    stickZone.addEventListener('pointercancel', endStick);
    stickZone.addEventListener('mousedown', e => e.stopPropagation());

    // Камера пальцем — правая половина экрана (на ПК камера — мышью по сцене)
    let lookId = null, lx = 0, ly = 0;
    lookZone.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse') return;
      lookId = e.pointerId; lx = e.clientX; ly = e.clientY;
      try { lookZone.setPointerCapture(e.pointerId); } catch {}
      e.preventDefault();
    });
    lookZone.addEventListener('pointermove', e => {
      if (e.pointerId !== lookId) return;
      this.look.x += (e.clientX - lx) * CONFIG.camera.touchSens;
      this.look.y += (e.clientY - ly) * CONFIG.camera.touchSens;
      lx = e.clientX; ly = e.clientY;
      e.preventDefault();
    });
    const endLook = e => { if (e.pointerId === lookId) lookId = null; };
    lookZone.addEventListener('pointerup', endLook);
    lookZone.addEventListener('pointercancel', endLook);
  }

  // Сбросить залипшие кнопки между раундами
  reset() {
    this.touchRun = false; this.#setCrouch(false); this.jumpHeldBtn = false;
    this.root?.querySelector('.btn-run')?.classList.remove('active');
    this.move.x = this.move.y = 0;
  }

  // Считать состояние на этот кадр
  read() {
    const k = this.keys;
    let x = this.move.x, y = this.move.y;
    if (k.has('KeyW') || k.has('ArrowUp')) y += 1;
    if (k.has('KeyS') || k.has('ArrowDown')) y -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) x += 1;
    if (k.has('KeyA') || k.has('ArrowLeft')) x -= 1;
    const len = Math.hypot(x, y);
    if (len > 1) { x /= len; y /= len; }
    const out = {
      x, y,
      run: k.has('ShiftLeft') || k.has('ShiftRight') || this.touchRun || this.stickRun,
      crouch: this.touchCrouch || k.has('ControlLeft'),
      jump: this.jumpQueued,
      jumpHold: k.has('Space') || this.jumpHeldBtn,
      dash: this.dashQueued,
      lookX: this.look.x, lookY: this.look.y,
    };
    this.jumpQueued = false;
    this.dashQueued = false;
    this.look.x = this.look.y = 0;
    if (!this.enabled) { out.x = out.y = 0; out.jump = out.dash = out.jumpHold = false; out.lookX = out.lookY = 0; }
    if (this.lookOnly) { out.x = out.y = 0; out.jump = out.dash = out.run = out.jumpHold = out.crouch = false; }
    return out;
  }

  releasePointer() {
    if (document.pointerLockElement) document.exitPointerLock();
  }
}
