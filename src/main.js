// Точка входа.
window.__started = true;   // скрипты игры разобрались и начали выполняться (см. «ловушку ошибок» в index.html)
import { Game } from './game/game.js';

// Старые Safari (iPhone с iOS 15) не умеют roundRect на canvas — рисуем скруглённый прямоугольник сами
if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r = 0) {
    r = Math.min(Array.isArray(r) ? r[0] || 0 : r, w / 2, h / 2);
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
  };
}

const game = new Game(document.getElementById('scene'));
game.start().catch(err => {
  console.error(err);
  document.querySelector('.load-text').textContent = 'Не получилось запустить 3D: ' + err.message;
});
