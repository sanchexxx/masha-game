// Ввод: клавиатура + мышь на ПК, стик + зона обзора + кнопки на телефоне.
import { CONFIG } from '../config/config.js';

export class Input {
  constructor(canvas, touchRoot) {
    this.keys = new Set();
    this.move = { x: 0, y: 0 };
    this.look = { x: 0, y: 0 };
    this.jumpQueued = false;
    this.dashQueued = false;
    this.lookOnly = false;       // режим «смотреть»: только камера
    this.runToggle = false;
    this.touchRun = false;
    this.enabled = false;
    this.canvas = canvas;

    addEventListener('keydown', e => {
      if (e.code === 'Space') { if (!e.repeat) this.jumpQueued = true; e.preventDefault(); }
      if (e.code === 'KeyE' && !e.repeat) this.dashQueued = true;
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

    this.#setupTouch(touchRoot);
  }

  #setupTouch(root) {
    const stick = root.querySelector('.stick');
    const knob = root.querySelector('.stick-knob');
    const lookZone = root.querySelector('.look-zone');
    const jumpBtn = root.querySelector('.btn-jump');
    const runBtn = root.querySelector('.btn-run');
    const dashBtn = root.querySelector('.btn-dash');
    dashBtn.addEventListener('touchstart', e => { this.dashQueued = true; dashBtn.classList.add('down'); e.preventDefault(); }, { passive: false });
    dashBtn.addEventListener('touchend', () => dashBtn.classList.remove('down'));
    let stickId = null, sx = 0, sy = 0;
    const R = 52;

    const stickZone = root.querySelector('.stick-zone');
    stickZone.addEventListener('touchstart', e => {
      const t = e.changedTouches[0];
      stickId = t.identifier; sx = t.clientX; sy = t.clientY;
      stick.style.left = sx + 'px'; stick.style.top = sy + 'px';
      stick.classList.add('on');
      e.preventDefault();
    }, { passive: false });
    const moveStick = e => {
      for (const t of e.changedTouches) {
        if (t.identifier !== stickId) continue;
        let dx = t.clientX - sx, dy = t.clientY - sy;
        const d = Math.hypot(dx, dy);
        if (d > R) { dx *= R / d; dy *= R / d; }
        knob.style.transform = `translate(${dx}px, ${dy}px)`;
        this.move.x = dx / R; this.move.y = -dy / R;
        // Сильно отклонил стик — бежим сам (как в Roblox на телефоне)
        this.stickRun = d > R * 1.35;
      }
      e.preventDefault();
    };
    const endStick = e => {
      for (const t of e.changedTouches) {
        if (t.identifier !== stickId) continue;
        stickId = null; this.move.x = this.move.y = 0; this.stickRun = false;
        knob.style.transform = ''; stick.classList.remove('on');
      }
    };
    stickZone.addEventListener('touchmove', moveStick, { passive: false });
    stickZone.addEventListener('touchend', endStick);
    stickZone.addEventListener('touchcancel', endStick);

    let lookId = null, lx = 0, ly = 0;
    lookZone.addEventListener('touchstart', e => {
      const t = e.changedTouches[0];
      lookId = t.identifier; lx = t.clientX; ly = t.clientY;
      e.preventDefault();
    }, { passive: false });
    lookZone.addEventListener('touchmove', e => {
      for (const t of e.changedTouches) {
        if (t.identifier !== lookId) continue;
        this.look.x += (t.clientX - lx) * CONFIG.camera.touchSens;
        this.look.y += (t.clientY - ly) * CONFIG.camera.touchSens;
        lx = t.clientX; ly = t.clientY;
      }
      e.preventDefault();
    }, { passive: false });
    const endLook = e => { for (const t of e.changedTouches) if (t.identifier === lookId) lookId = null; };
    lookZone.addEventListener('touchend', endLook);
    lookZone.addEventListener('touchcancel', endLook);

    jumpBtn.addEventListener('touchstart', e => { this.jumpQueued = true; jumpBtn.classList.add('down'); e.preventDefault(); }, { passive: false });
    jumpBtn.addEventListener('touchend', () => jumpBtn.classList.remove('down'));
    runBtn.addEventListener('touchstart', e => { this.touchRun = !this.touchRun; runBtn.classList.toggle('active', this.touchRun); e.preventDefault(); }, { passive: false });
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
      jump: this.jumpQueued,
      dash: this.dashQueued,
      lookX: this.look.x, lookY: this.look.y,
    };
    this.jumpQueued = false;
    this.dashQueued = false;
    this.look.x = this.look.y = 0;
    if (!this.enabled) { out.x = out.y = 0; out.jump = out.dash = false; out.lookX = out.lookY = 0; }
    if (this.lookOnly) { out.x = out.y = 0; out.jump = out.dash = out.run = false; }
    return out;
  }

  releasePointer() {
    if (document.pointerLockElement) document.exitPointerLock();
  }
}
