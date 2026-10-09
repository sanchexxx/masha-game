// Cloudflare Worker: раздаёт саму игру (статические файлы) и держит комнаты совместной игры.
// /room/КОД — WebSocket в комнату. Каждая комната — отдельный Durable Object «Room».
import { DurableObject } from 'cloudflare:workers';
import { RoomCore } from './room.js';

export class Room extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.core = new RoomCore((ws, obj) => { try { ws.send(typeof obj === 'string' ? obj : JSON.stringify(obj)); } catch {} });
  }
  async fetch(request) {
    if (request.headers.get('Upgrade') !== 'websocket') return new Response('Нужен WebSocket', { status: 426 });
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    server.accept();
    if (!this.core.join(server)) { server.close(1000, 'full'); return new Response(null, { status: 101, webSocket: client }); }
    server.addEventListener('message', e => this.core.message(server, e.data));
    const bye = () => this.core.leave(server);
    server.addEventListener('close', bye);
    server.addEventListener('error', bye);
    return new Response(null, { status: 101, webSocket: client });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const m = url.pathname.match(/^\/room\/([A-Z0-9]{3,8})$/i);
    if (m) {
      const id = env.ROOMS.idFromName(m[1].toUpperCase());
      return env.ROOMS.get(id).fetch(request);
    }
    // Мобильный Safari может зависнуть на отдельной загрузке большого JS-файла.
    // Отдаём страницу с уже встроенным скриптом, оставляя адрес и ?room без изменений.
    const ua = request.headers.get('User-Agent') || '';
    if (/^\/(?:index\.html)?$/.test(url.pathname) && /iPhone|iPad|iPod|Android/.test(ua)) {
      const ios = /\bOS (\d+)_/.exec(ua);
      const chrome = /(?:Chrome|CriOS)\/(\d+)/.exec(ua);
      const legacy = (/iPhone|iPad|iPod/.test(ua) && ios && Number(ios[1]) <= 16) ||
        (/Android/.test(ua) && (!chrome || Number(chrome[1]) < 100));
      const target = new URL(request.url);
      // Cloudflare redirects *.html to extensionless paths; fetch the canonical
      // asset path so the browser keeps its original /?room=... URL.
      target.pathname = legacy ? '/index.mobile-legacy' : '/index.mobile-modern';
      return env.ASSETS.fetch(new Request(target, request));
    }
    return env.ASSETS.fetch(request);
  },
};
