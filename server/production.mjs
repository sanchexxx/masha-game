// WebSocket rooms for the 250bar.ru mirror. Static game files are served by nginx.
import http from 'node:http';
import { WebSocketServer } from 'ws';
import { RoomCore } from './room.js';

const PORT = Number(process.env.PORT || 18787);
const rooms = new Map();
const server = http.createServer((req, res) => {
  res.writeHead(req.url === '/health' ? 200 : 404, { 'Content-Type': 'text/plain' });
  res.end(req.url === '/health' ? 'ok' : 'not found');
});
const wss = new WebSocketServer({ noServer: true });

server.on('upgrade', (req, socket, head) => {
  const match = /^\/room\/([A-Z0-9]{3,8})$/i.exec(req.url || '');
  if (!match) return socket.destroy();
  const code = match[1].toUpperCase();
  if (!rooms.has(code)) {
    rooms.set(code, new RoomCore((ws, message) => {
      if (ws.readyState === 1) ws.send(typeof message === 'string' ? message : JSON.stringify(message));
    }));
  }
  const room = rooms.get(code);
  wss.handleUpgrade(req, socket, head, ws => {
    if (!room.join(ws)) return ws.close();
    ws.on('message', data => room.message(ws, data.toString()));
    ws.on('close', () => {
      room.leave(ws);
      if (!room.players.size) rooms.delete(code);
    });
  });
});

server.listen(PORT, '127.0.0.1');
