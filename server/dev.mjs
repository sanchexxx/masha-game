// Локальный сервер для проверки совместной игры: раздаёт файлы игры и держит комнаты (как worker.js).
// Запуск: cd server && npm install && node dev.mjs [порт=8787]  → http://localhost:8787/?room=TEST
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';
import { RoomCore } from './room.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = +(process.argv[2] || 8787);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.json': 'application/json' };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p === '/api/rooms') {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
    return res.end(JSON.stringify({ rooms: [...rooms].map(([code, room]) => ({ code, ...room.summary(), updated: Date.now() })) }));
  }
  if (p.endsWith('/')) p += 'index.html';
  const file = path.join(ROOT, p);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end('нет'); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});

const rooms = new Map();
const wss = new WebSocketServer({ noServer: true });
server.on('upgrade', (req, sock, head) => {
  const m = req.url.match(/^\/room\/([A-Z0-9]{3,8})$/i);
  if (!m) return sock.destroy();
  const code = m[1].toUpperCase();
  if (!rooms.has(code)) rooms.set(code, new RoomCore((ws, obj) => { if (ws.readyState === 1) ws.send(typeof obj === 'string' ? obj : JSON.stringify(obj)); }));
  const core = rooms.get(code);
  wss.handleUpgrade(req, sock, head, ws => {
    if (!core.join(ws)) return ws.close();
    ws.on('message', d => core.message(ws, d.toString()));
    ws.on('close', () => { core.leave(ws); if (!core.players.size) rooms.delete(code); });
  });
});
server.listen(PORT, () => console.log(`Игра: http://localhost:${PORT}/  (комната: ?room=КОД)`));
