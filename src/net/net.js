// Связь с комнатой совместной игры (WebSocket). Сервер только пересылает сообщения:
// хозяин комнаты считает игру у себя и рассылает картинку, гости присылают хозяину свои нажатия.
export class Net {
  constructor() {
    this.ws = null;
    this.id = null;
    this.host = null;
    this.players = [];
    this.handlers = new Map();
    this.code = null;
  }

  get isHost() { return !!this.id && this.id === this.host; }
  get connected() { return this.ws?.readyState === 1; }

  on(type, fn) { (this.handlers.get(type) || this.handlers.set(type, []).get(type)).push(fn); }
  #emit(type, m) { for (const fn of this.handlers.get(type) || []) fn(m); }

  static newCode() {
    const A = 'ABCDEFGHJKLMNPRSTUVWXYZ23456789';
    return Array.from({ length: 4 }, () => A[(Math.random() * A.length) | 0]).join('');
  }

  // Подключиться; hello — {name, hero, skin}. Промис: true — подключились, false — сервера нет.
  connect(code, hello) {
    this.code = code.toUpperCase();
    this.hello = hello;
    return new Promise(resolve => {
      let done = false;
      const finish = ok => { if (!done) { done = true; resolve(ok); } };
      let ws;
      try { ws = new WebSocket(`${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/room/${this.code}`); }
      catch { return finish(false); }
      this.ws = ws;
      const timer = setTimeout(() => { finish(false); try { ws.close(); } catch {} }, 6000);
      ws.onmessage = e => {
        let m; try { m = JSON.parse(e.data); } catch { return; }
        if (m.t === 'welcome') { this.id = m.id; clearTimeout(timer); this.send({ t: 'hello', ...this.hello }); finish(true); }
        if (m.t === 'lobby') { this.players = m.players; this.host = m.host; }
        this.#emit(m.t, m);
        this.#emit('*', m);
      };
      ws.onclose = () => { clearTimeout(timer); finish(false); if (this.ws === ws) { this.ws = null; this.#emit('close', {}); } };
      ws.onerror = () => {};
    });
  }

  send(obj) { if (this.connected) this.ws.send(JSON.stringify(obj)); }
  update(hello) { this.hello = { ...this.hello, ...hello }; this.send({ t: 'hello', ...this.hello }); }

  leave() {
    const ws = this.ws;
    this.ws = null; this.id = null; this.host = null; this.players = []; this.code = null;
    try { ws?.close(); } catch {}
  }

  name(id) { return this.players.find(p => p.id === id)?.name || 'Игрок'; }
}
