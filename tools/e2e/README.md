# Проверки в браузере (WebKit = движок Safari/iPhone)

Нужно: `pip install playwright && python -m playwright install webkit`.
1. Собрать бандлы: `bash scripts/build-bundles.sh` (игра грузит только `src/main.bundle.js`).
2. Отдать игру локально: `python3 -m http.server 8093` из корня проекта.
3. `python3 tools/e2e/checks.py <проверка> [папка]` — снимки в `<папка>/shots/`.
   Живой сайт: `BASE=https://bezlik.ru/ python3 tools/e2e/checks.py menu`.

Проверки: `menu` (экскурсия обучения ПК+iPhone), `train` (тренировка за Машу до конца),
`totoro` (все умения Тоторо), `watch` (бот-Тоторо в «Смотреть», 40 с), `phone` (обучение за Тоторо
на iPhone кнопками), `look` (крупные планы всех героев с 3 сторон — для работы над дизайном).
Прохождение видно по JSON в конце (номера заданий растут, значения не нулевые) и по снимкам.
