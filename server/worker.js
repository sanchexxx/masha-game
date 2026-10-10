// Cloudflare Worker: раздаёт саму игру (статические файлы) и держит комнаты совместной игры.
// /room/КОД — WebSocket в комнату. Каждая комната — отдельный Durable Object «Room».
import { DurableObject } from 'cloudflare:workers';
import { RoomCore } from './room.js';

export class Room extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.ctx = ctx;
    this.env = env;
    this.core = new RoomCore((ws, obj) => { try { ws.send(typeof obj === 'string' ? obj : JSON.stringify(obj)); } catch {} },
      summary => this.ctx.waitUntil(this.publish(summary)));
  }
  publish(summary) {
    if (!this.code) return Promise.resolve();
    this.publishQueue = (this.publishQueue || Promise.resolve()).catch(() => {}).then(() => {
      const id = this.env.ROOM_DIRECTORY.idFromName('public');
      return this.env.ROOM_DIRECTORY.get(id).fetch('https://rooms.internal/', {
        method: summary.players ? 'POST' : 'DELETE',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ code: this.code, ...summary }),
      });
    });
    return this.publishQueue;
  }
  async fetch(request) {
    if (request.headers.get('Upgrade') !== 'websocket') return new Response('Нужен WebSocket', { status: 426 });
    this.code = new URL(request.url).pathname.split('/').pop().toUpperCase();
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

export class RoomDirectory extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.storage = ctx.storage;
  }
  async fetch(request) {
    if (request.method === 'GET') {
      const now = Date.now();
      const entries = await this.storage.list({ prefix: 'room:' });
      const rooms = [...entries.values()].filter(r => r.players > 0 && now - r.updated < 90000)
        .sort((a, b) => b.updated - a.updated).slice(0, 100);
      return Response.json({ rooms }, { headers: { 'cache-control': 'no-store' } });
    }
    const data = await request.json().catch(() => ({}));
    if (!/^[A-Z0-9]{3,8}$/.test(data.code || '')) return new Response('Bad room', { status: 400 });
    const key = `room:${data.code}`;
    if (request.method === 'DELETE') await this.storage.delete(key);
    else if (request.method === 'POST') await this.storage.put(key, {
      code: data.code, host: String(data.host || 'Игрок').slice(0, 20),
      players: Math.min(8, Math.max(0, Number(data.players) || 0)),
      started: !!data.started, updated: Date.now(),
    });
    else return new Response('Method not allowed', { status: 405 });
    return new Response(null, { status: 204 });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/rooms') {
      if (request.method !== 'GET') return new Response('Method not allowed', { status: 405 });
      return env.ROOM_DIRECTORY.get(env.ROOM_DIRECTORY.idFromName('public')).fetch(request);
    }
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
