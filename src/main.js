// Точка входа.
import { Game } from './game/game.js';

const game = new Game(document.getElementById('scene'));
game.start().catch(err => {
  console.error(err);
  document.querySelector('.load-text').textContent = 'Не получилось запустить 3D: ' + err.message;
});
