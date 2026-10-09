// Комната совместной игры: кто в ней, кто хозяин (его устройство считает игру), кто за какую карту.
// Сервер ничего не считает — только пересылает сообщения:
//  • от хозяина — всем (или одному, если указано to);
//  • от гостя — только хозяину (с пометкой from).
// Этот же код работает и в Cloudflare (worker.js), и на локальном сервере для проверки (dev.mjs).
export const MAX_PLAYERS = 8;

export class RoomCore {
  constructor(send) {
    this.send = send;            // send(conn, obj)
    this.players = new Map();    // conn → {id, name, hero, skin, vote}
    this.hostConn = null;
    this.seq = 0;
    this.started = false;
  }

  join(conn) {
    if (this.players.size >= MAX_PLAYERS) { this.send(conn, { t: 'full' }); return false; }
    const id = 'p' + (++this.seq);
    this.players.set(conn, { id, name: 'Игрок ' + this.seq, hero: 'kid', skin: 'classic', vote: 'village' });
    if (!this.hostConn) this.hostConn = conn;
    this.send(conn, { t: 'welcome', id, started: this.started });
    this.#lobby();
    return true;
  }

  message(conn, raw) {
    const me = this.players.get(conn);
    if (!me) return;
    let m;
    try { m = JSON.parse(raw); } catch { return; }
    if (!m || typeof m.t !== 'string') return;
    if (m.t === 'ping') { this.send(conn, { t: 'pong' }); return; }
    if (m.t === 'hello') {
      me.name = String(m.name || me.name).slice(0, 20);
      me.hero = String(m.hero || me.hero).slice(0, 16);
      me.skin = String(m.skin || me.skin).slice(0, 400);
      return this.#lobby();
    }
    if (m.t === 'vote') { me.vote = String(m.map || 'village').slice(0, 16); return this.#lobby(); }
    if (conn === this.hostConn) {
      if (m.t === 'start') this.started = true;
      if (m.t === 'lobbyBack') this.started = false;
      const text = JSON.stringify(m);
      for (const [c, p] of this.players) {
        if (c === conn) continue;
        if (m.to && m.to !== p.id) continue;
        this.send(c, text);
      }
    } else if (this.hostConn) {
      m.from = me.id;
      this.send(this.hostConn, m);
    }
  }

  leave(conn) {
    const me = this.players.get(conn);
    if (!me) return;
    this.players.delete(conn);
    if (conn === this.hostConn) {
      this.hostConn = this.players.keys().next().value || null;
      // Раунд считается на устройстве хозяина. Если оно отключилось, остальные
      // должны вернуться в лобби, иначе останутся на последнем снимке игры.
      this.started = false;
    }
    if (!this.players.size) this.started = false;
    for (const c of this.players.keys()) this.send(c, { t: 'left', id: me.id });
    this.#lobby();
  }

  #lobby() {
    const host = this.hostConn ? this.players.get(this.hostConn)?.id : null;
    const players = [...this.players.values()];
    for (const c of this.players.keys()) this.send(c, { t: 'lobby', players, host, started: this.started });
  }
}
