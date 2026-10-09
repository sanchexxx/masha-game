// Точка входа.
async function boot() {
  try {
    const { Game } = await import('./game/game.js?v=2026100901');
    window.__started = true; // вся цепочка игровых модулей загружена

    // Старые Safari не умеют roundRect на canvas — рисуем скруглённый прямоугольник сами.
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
    await game.start();
  } catch (err) {
    console.error(err);
    const label = document.querySelector('.load-text');
    if (label) label.textContent = 'Не получилось запустить игру: ' + (err?.message || String(err));
  }
}

boot();
