// Звук без файлов: всё синтезируется WebAudio. Тихий ночной гул, «вздох» появления
// Безлика, сердцебиение, когда он близко, прыжки и шаги.

export class Sound {
  constructor() { this.ctx = null; this.muted = false; }

  unlock() {
    if (this.ctx) { this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.55;
    this.master.connect(this.ctx.destination);
    this.#ambient();
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.value = m ? 0 : 0.55;
  }

  #ambient() {
    const c = this.ctx;
    // мягкий аккорд-гул
    this.amb = c.createGain();
    this.amb.gain.value = 0.05;
    this.amb.connect(this.master);
    for (const f of [110, 164.8, 220, 277.2]) {
      const o = c.createOscillator();
      o.type = 'sine';
      o.frequency.value = f;
      const g = c.createGain();
      g.gain.value = 0.25;
      const lfo = c.createOscillator();
      lfo.frequency.value = 0.07 + Math.random() * 0.1;
      const lg = c.createGain();
      lg.gain.value = 0.2;
      lfo.connect(lg).connect(g.gain);
      o.connect(g).connect(this.amb);
      o.start(); lfo.start();
    }
    // сверчки: короткие щелчки шума через полосовой фильтр
    const tick = () => {
      if (!this.ctx) return;
      if (!this.muted) this.#chirp();
      setTimeout(tick, 350 + Math.random() * 1400);
    };
    tick();
    // «напряжение» — нарастает, когда Безлик рядом
    this.tension = c.createGain();
    this.tension.gain.value = 0;
    this.tension.connect(this.master);
    const o = c.createOscillator();
    o.type = 'sawtooth'; o.frequency.value = 55;
    const f = c.createBiquadFilter();
    f.type = 'lowpass'; f.frequency.value = 220;
    o.connect(f).connect(this.tension);
    o.start();
  }

  #noise(dur) {
    const c = this.ctx;
    const b = c.createBuffer(1, Math.max(1, c.sampleRate * dur), c.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const s = c.createBufferSource();
    s.buffer = b;
    return s;
  }

  #chirp() {
    const c = this.ctx, t = c.currentTime;
    for (let k = 0; k < 3; k++) {
      const o = c.createOscillator();
      o.frequency.value = 4200 + Math.random() * 400;
      const g = c.createGain();
      g.gain.setValueAtTime(0, t + k * 0.06);
      g.gain.linearRampToValueAtTime(0.012, t + k * 0.06 + 0.01);
      g.gain.linearRampToValueAtTime(0, t + k * 0.06 + 0.04);
      o.connect(g).connect(this.master);
      o.start(t + k * 0.06); o.stop(t + k * 0.06 + 0.05);
    }
  }

  jump() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator();
    o.type = 'triangle';
    o.frequency.setValueAtTime(320, t);
    o.frequency.exponentialRampToValueAtTime(640, t + 0.12);
    const g = c.createGain();
    g.gain.setValueAtTime(0.12, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    o.connect(g).connect(this.master);
    o.start(t); o.stop(t + 0.2);
  }

  land(power) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const n = this.#noise(0.12);
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500;
    const g = c.createGain();
    g.gain.setValueAtTime(Math.min(0.25, 0.05 + power * 0.01), t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    n.connect(f).connect(g).connect(this.master);
    n.start(t);
  }

  step() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const n = this.#noise(0.05);
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 900 + Math.random() * 300;
    const g = c.createGain();
    g.gain.setValueAtTime(0.03, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    n.connect(f).connect(g).connect(this.master);
    n.start(t);
  }

  ghostAppear() {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    // низкий «вздох» + звенящий колокольчик
    const n = this.#noise(2.4);
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 3;
    f.frequency.setValueAtTime(200, t); f.frequency.exponentialRampToValueAtTime(700, t + 1.2); f.frequency.exponentialRampToValueAtTime(150, t + 2.3);
    const g = c.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.35, t + 0.8); g.gain.linearRampToValueAtTime(0, t + 2.4);
    n.connect(f).connect(g).connect(this.master);
    n.start(t);
    for (const [fr, dl] of [[880, 0], [1318, 0.35], [1046, 0.7]]) {
      const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = fr;
      const og = c.createGain();
      og.gain.setValueAtTime(0, t + dl); og.gain.linearRampToValueAtTime(0.08, t + dl + 0.02); og.gain.exponentialRampToValueAtTime(0.001, t + dl + 1.6);
      o.connect(og).connect(this.master); o.start(t + dl); o.stop(t + dl + 1.7);
    }
  }

  // 0..1 — насколько близко Безлик
  setTension(k) {
    if (!this.ctx) return;
    this.tension.gain.setTargetAtTime(k * 0.07, this.ctx.currentTime, 0.3);
    this.amb.gain.setTargetAtTime(0.05 * (1 - k * 0.6), this.ctx.currentTime, 0.5);
    const now = this.ctx.currentTime;
    if (k > 0.25 && (!this.nextBeat || now > this.nextBeat)) {
      this.#beat(k);
      this.nextBeat = now + 1.1 - k * 0.65;
    }
  }

  #beat(k) {
    const c = this.ctx, t = c.currentTime;
    for (const dl of [0, 0.16]) {
      const o = c.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(70, t + dl); o.frequency.exponentialRampToValueAtTime(40, t + dl + 0.12);
      const g = c.createGain();
      g.gain.setValueAtTime(0.28 * k, t + dl); g.gain.exponentialRampToValueAtTime(0.001, t + dl + 0.15);
      o.connect(g).connect(this.master); o.start(t + dl); o.stop(t + dl + 0.16);
    }
  }

  chime(notes) { this.#arp(notes, 0.08, 'sine'); }

  win() { this.#arp([523, 659, 784, 1046], 0.12, 'triangle'); }
  lose() { this.#arp([392, 330, 262, 196], 0.18, 'sine'); }

  #arp(notes, step, type) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    notes.forEach((fr, i) => {
      const o = c.createOscillator(); o.type = type; o.frequency.value = fr;
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t + i * step);
      g.gain.linearRampToValueAtTime(0.14, t + i * step + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t + i * step + 0.5);
      o.connect(g).connect(this.master); o.start(t + i * step); o.stop(t + i * step + 0.55);
    });
  }
}
