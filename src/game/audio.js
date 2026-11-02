// Звук без файлов: всё синтезируется WebAudio. Тихий ночной гул, «вздох» появления
// Безлика, сердцебиение, когда он близко, прыжки и шаги.

export class Sound {
  constructor() { this.ctx = null; this.muted = false; this.voiceCache = new Map(); this.voiceLast = 0; }

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

  // Записанные русские реплики звучат одинаково на iOS, Android и ПК.
  // Три слегка разнесённых и пониженных голоса создают характер трёх братьев.
  // Теневой гнев Безлика: низкий гул + визгливый рёв (страшно, но не слишком — игра детская)
  ghostRage() {
    if (this.muted) return;
    if (!this.ctx) this.unlock();
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    for (const [f0, f1, type, vol, dur] of [[70, 45, 'sawtooth', 0.28, 1.6], [105, 60, 'square', 0.08, 1.4], [620, 260, 'sawtooth', 0.07, 1.1]]) {
      const o = c.createOscillator(); o.type = type;
      o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
      const lfo = c.createOscillator(); lfo.frequency.value = 11; const dg = c.createGain(); dg.gain.value = f0 * 0.08;
      lfo.connect(dg).connect(o.frequency); lfo.start(t); lfo.stop(t + dur);
      const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 900;
      const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.15); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(f).connect(g).connect(this.master); o.start(t); o.stop(t + dur + 0.05);
    }
  }

  // Мультяшные звуки Тоторо — синтез, без файлов: рёв, «ху-ху», писк малышей, мяу-гудок НэкоБуса.
  totoroCue(id) {
    if (this.muted) return;
    if (!this.ctx) this.unlock();
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime, out = this.master;
    const tone = (type, f0, f1, start, dur, vol, filter) => {
      const o = c.createOscillator(); o.type = type;
      o.frequency.setValueAtTime(f0, t + start);
      o.frequency.exponentialRampToValueAtTime(f1, t + start + dur);
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t + start);
      g.gain.exponentialRampToValueAtTime(vol, t + start + Math.min(0.06, dur * 0.3));
      g.gain.exponentialRampToValueAtTime(0.0001, t + start + dur);
      let node = o;
      if (filter) { const f = c.createBiquadFilter(); f.type = filter[0]; f.frequency.value = filter[1]; f.Q.value = filter[2] || 1; node = o.connect(f); }
      node.connect(g).connect(out);
      o.start(t + start); o.stop(t + start + dur + 0.05);
      return o;
    };
    if (id === 'roar') {
      // «ГУОООО!»: низкий рёв с дрожью + шум ветра
      const o = tone('sawtooth', 120, 70, 0, 1.25, 0.32, ['lowpass', 520, 3]);
      const lfo = c.createOscillator(); lfo.frequency.value = 18;
      const depth = c.createGain(); depth.gain.value = 10;
      lfo.connect(depth).connect(o.frequency); lfo.start(t); lfo.stop(t + 1.3);
      tone('square', 240, 130, 0.02, 1.1, 0.06, ['bandpass', 700, 4]);
      const n = this.#noise(1.2);
      const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.setValueAtTime(300, t); f.frequency.linearRampToValueAtTime(900, t + 0.4); f.frequency.linearRampToValueAtTime(200, t + 1.2);
      const g = c.createGain(); g.gain.setValueAtTime(0.18, t); g.gain.exponentialRampToValueAtTime(0.001, t + 1.2);
      n.connect(f).connect(g).connect(out); n.start(t);
    } else if (id === 'select') {
      // доброе «ху-ху»
      tone('sine', 150, 120, 0, 0.32, 0.3, ['lowpass', 900]);
      tone('triangle', 300, 240, 0, 0.32, 0.06);
      tone('sine', 175, 135, 0.36, 0.4, 0.3, ['lowpass', 900]);
      tone('triangle', 350, 270, 0.36, 0.4, 0.06);
    } else if (id === 'grow') {
      [392, 523, 659, 784, 1046].forEach((f, i) => tone('sine', f, f * 1.01, i * 0.07, 0.35, 0.08));
      tone('triangle', 90, 160, 0, 0.6, 0.12);
    } else if (id === 'minis') {
      [0, 0.12, 0.3, 0.42].forEach((d, i) => tone('triangle', 900 + i * 120, 1500 + i * 150, d, 0.09, 0.09));
    } else if (id === 'neko') {
      // мяу + гудок, как у автобуса
      tone('sawtooth', 380, 720, 0, 0.22, 0.14, ['bandpass', 1300, 2]);
      tone('sawtooth', 720, 330, 0.22, 0.38, 0.14, ['bandpass', 1100, 2]);
      tone('square', 330, 330, 0.65, 0.35, 0.07, ['lowpass', 1400]);
      tone('square', 415, 415, 0.65, 0.35, 0.05, ['lowpass', 1400]);
    } else if (id === 'vanish') {
      [1568, 1318, 1046, 784].forEach((f, i) => tone('sine', f, f * 0.8, i * 0.06, 0.3, 0.07));
    } else if (id === 'rain') {
      // шум ливня нарастает и стихает + капли
      const n = this.#noise(3.2);
      const f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 1200;
      const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.09, t + 0.6); g.gain.exponentialRampToValueAtTime(0.0001, t + 3.2);
      n.connect(f).connect(g).connect(out); n.start(t);
      [0.1, 0.35, 0.5, 0.8, 1.1].forEach((d, i) => tone('sine', 1800 + i * 200, 900, d, 0.06, 0.05));
    } else if (id === 'alert') {
      tone('square', 880, 880, 0, 0.1, 0.06, ['lowpass', 2000]);
      tone('square', 660, 660, 0.14, 0.1, 0.06, ['lowpass', 2000]);
    }
  }

  async brothersCue(id) {
    if (!['select', 'fear', 'hypnosis', 'glare', 'resist'].includes(id) || this.muted) return;
    if (!this.ctx) this.unlock();
    if (!this.ctx) return;
    const now = performance.now();
    if (now - this.voiceLast < 550 && id !== 'resist') return;
    this.voiceLast = now;
    let pending = this.voiceCache.get(id);
    if (!pending) {
      pending = fetch(`/assets/audio/brothers/${id}.m4a?v=2026101004`)
        .then(response => { if (!response.ok) throw new Error('voice'); return response.arrayBuffer(); })
        .then(data => this.ctx.decodeAudioData(data));
      this.voiceCache.set(id, pending);
    }
    try {
      const buffer = await pending;
      if (this.muted || !this.ctx) return;
      const t = this.ctx.currentTime;
      for (const [rate, gain, delay, cutoff] of [[0.76, 0.27, 0, 2100], [0.87, 0.18, 0.07, 3100], [0.98, 0.12, 0.13, 4400]]) {
        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        source.playbackRate.value = rate;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass'; filter.frequency.value = cutoff;
        const volume = this.ctx.createGain(); volume.gain.value = gain;
        source.connect(filter).connect(volume).connect(this.master);
        source.start(t + delay);
      }
    } catch {
      this.voiceCache.delete(id);
      this.chime([220, 260, 196]);
    }
  }

  // Короткий мультяшный возглас каждой подпрыгивающей головы.
  async brotherHop(index = 0) {
    if (this.muted) return;
    if (!this.ctx) this.unlock();
    if (!this.ctx) return;
    let pending = this.voiceCache.get('select');
    if (!pending) {
      pending = fetch('/assets/audio/brothers/select.m4a?v=2026101004')
        .then(r => { if (!r.ok) throw new Error('voice'); return r.arrayBuffer(); })
        .then(data => this.ctx.decodeAudioData(data));
      this.voiceCache.set('select', pending);
    }
    try {
      const buffer = await pending;
      if (this.muted || !this.ctx) return;
      const source = this.ctx.createBufferSource();
      source.buffer = buffer;
      source.playbackRate.value = [1.32, 1.55, 1.78][index] || 1.4;
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.11, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      source.connect(gain).connect(this.master);
      source.start(now, Math.min(buffer.duration * 0.18, 0.35), Math.min(0.23, buffer.duration * 0.45));
    } catch { this.voiceCache.delete('select'); this.chime([340 + index * 60]); }
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
