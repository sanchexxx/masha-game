import test from 'node:test';
import assert from 'node:assert/strict';
import { RoomCore } from './room.js';

function makeRoom() {
  const received = new Map();
  const room = new RoomCore((conn, message) => {
    const list = received.get(conn);
    if (list) list.push(typeof message === 'string' ? JSON.parse(message) : message);
  });
  const connect = name => {
    const conn = { name };
    received.set(conn, []);
    room.join(conn);
    received.get(conn).length = 0;
    return conn;
  };
  const send = (conn, message) => room.message(conn, JSON.stringify(message));
  return { room, connect, send, received };
}

test('host disconnect ends that round and tells every remaining player the new lobby host', () => {
  const { room, connect, send, received } = makeRoom();
  const host = connect('host');
  const nextHost = connect('next host');
  const guest = connect('guest');
  send(host, { t: 'start' });
  assert.equal(room.started, true);

  room.leave(host);

  assert.equal(room.started, false);
  for (const conn of [nextHost, guest]) {
    const lobby = received.get(conn).filter(m => m.t === 'lobby').at(-1);
    assert.equal(lobby.host, 'p2');
    assert.equal(lobby.started, false);
  }

  received.get(nextHost).length = 0;
  received.get(guest).length = 0;
  send(nextHost, { t: 'start' });
  assert.equal(room.started, true);
  assert.ok(received.get(guest).some(m => m.t === 'start'));
});

test('a guest disconnect does not end the host round', () => {
  const { room, connect, send } = makeRoom();
  const host = connect('host');
  const guest = connect('guest');
  send(host, { t: 'start' });

  room.leave(guest);

  assert.equal(room.started, true);
  assert.equal(room.hostConn, host);
});

test('room enforces the eight-player limit', () => {
  const { room, connect } = makeRoom();
  for (let i = 0; i < 8; i++) connect(`player ${i}`);
  const overflow = { name: 'overflow' };

  assert.equal(room.join(overflow), false);
});
