# Старт для облачного агента (скопируй владельцу в первое сообщение)

Репозиторий: sanchexxx/int · ветка: masha-game · игра: https://250bar.ru/masha/

1. `git fetch origin masha-game && git checkout masha-game` (или выбери эту ветку при запуске сессии).
2. Прочитай `CLAUDE.md`, затем `HANDOFF-CLOUD.md` (ТЗ, доступ, очередь задач), затем `README.md`.
3. `bash tools/cloud/setup.sh` — нужна переменная окружения `MASHA_SSH_KEY_B64` (ключ пользователя masha).
   Без неё можно писать код и коммитить, выкладку сделает владелец.
4. Открой игру локально (`python3 -m http.server 8080`) или по ссылке, скажи владельцу, что видишь.
5. Проверка баланса без браузера: `node --import ./tools/sim/register.mjs tools/sim/sim.mjs 10 2`.
6. Новая работа — в ветке `claude/masha-<тема>`; выкладка `./deploy.sh`, откат `./deploy.sh rollback`.

Не использовать для игры ключ `INTENT_SSH_KEY_B64` (он root-доступ к серверу сайтов) — только `MASHA_SSH_KEY_B64`.
