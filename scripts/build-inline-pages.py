#!/usr/bin/env python3
"""Embed each browser bundle in a mobile HTML page (one network request)."""

from pathlib import Path
import re


root = Path(__file__).resolve().parent.parent
html = (root / 'index.html').read_text()
start = html.index('<!-- Если 3D не запустилось')
end = html.index('</script>', start) + len('</script>')

diagnostics = '''<!-- Мобильная страница получает игру вместе с HTML: второго запроса нет. -->
<script>
(function () {
  var shown = false;
  function say(msg) {
    var t = document.querySelector('.load-text');
    if (!t || shown) return;
    shown = true;
    t.style.color = '#ffb8a8';
    t.style.maxWidth = '90vw';
    t.style.textAlign = 'center';
    t.style.lineHeight = '1.4';
    t.textContent = 'Не запустилось: ' + msg + ' · ' + navigator.userAgent.replace(/^.*?\\((.*?)\\).*$/, '$1');
  }
  window.addEventListener('error', function (e) { say(e.message || 'ошибка выполнения игры'); }, true);
  window.addEventListener('unhandledrejection', function (e) { say(String(e.reason && (e.reason.message || e.reason))); });
  window.__bundleVariant = '__VARIANT__';
  window.__bootStage = 'выполняем встроенную игру (__VARIANT__)';
  setTimeout(function () {
    if (!shown && !window.__started && !window.__bootFailed)
      say('загрузка остановилась на этапе «' + window.__bootStage + '»');
  }, 30000);
})();
</script>'''

for variant, bundle_name, output_name in (
    ('modern', 'main.bundle.js', 'index.mobile-modern.html'),
    ('legacy', 'main.legacy.bundle.js', 'index.mobile-legacy.html'),
):
    bundle = (root / 'src' / bundle_name).read_text()
    bundle = re.sub(r'</script', r'<\\/script', bundle, flags=re.IGNORECASE)
    embedded = diagnostics.replace('__VARIANT__', variant) + '\n<script>\n' + bundle + '\n</script>'
    (root / output_name).write_text(html[:start] + embedded + html[end:])
