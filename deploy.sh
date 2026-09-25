#!/bin/bash
# Выкладка игры Маши на сервер: https://250bar.ru/masha/
#   ./deploy.sh            — выложить (перед этим на сервере делается снимок прошлой версии)
#   ./deploy.sh rollback   — вернуть последний снимок
#
# Работает и на Маке, и в облачной сессии (Linux).
#   Облако:  MASHA_SSH_KEY=~/.ssh/masha_game  MASHA_SSH_USER=masha  (ставит tools/cloud/setup.sh)
#   Мак:     по умолчанию ключ ~/.ssh/intent_deploy_ed25519, пользователь root
# Сервер: 185.250.44.94, владелец файлов — masha, папка /var/www/masha-game
set -euo pipefail
cd "$(dirname "$0")"

KEY="${MASHA_SSH_KEY:-$HOME/.ssh/intent_deploy_ed25519}"
USER_="${MASHA_SSH_USER:-root}"
HOST="$USER_@${MASHA_HOST:-185.250.44.94}"
BASE="/var/www/masha-game"
SSH="ssh -i $KEY -o IdentitiesOnly=yes -o PreferredAuthentications=publickey -o PasswordAuthentication=no -o ConnectTimeout=20"
# под root надо вернуть файлы пользователю masha; под masha они и так его
FIXOWN="true"
[[ "$USER_" == "root" ]] && FIXOWN="chown -R masha:masha $BASE/public $BASE/docs"

if [[ "${1:-}" == "rollback" ]]; then
  $SSH $HOST "set -e; last=\$(ls -1d $BASE/backups/public-* | tail -1); rsync -a --delete \$last/ $BASE/public/; $FIXOWN; echo \"вернул \$last\""
  exit 0
fi

# проверка синтаксиса всех модулей: сломанный файл = чёрный экран
for f in src/*.js src/*/*.js; do node --check --input-type=module < "$f" || { echo "ОШИБКА в $f"; exit 1; }; done

# ?v= в index.html — чтобы телефоны точно взяли свежие стили и скрипт
# (sed -i.bak одинаково работает на Маке и Linux)
VER=$(date +%Y%m%d%H%M)
sed -i.bak -E "s/(styles\.css|main\.js)\?v=[0-9]+/\1?v=$VER/g" index.html && rm -f index.html.bak

# снимок прошлой версии (храним 10 последних)
$SSH $HOST "set -e; ts=\$(date +%Y%m%d-%H%M%S); if [ -f $BASE/public/index.html ]; then cp -a $BASE/public $BASE/backups/public-\$ts; fi; ls -1dt $BASE/backups/public-* 2>/dev/null | tail -n +11 | xargs -r rm -rf"

rsync -az --delete -e "$SSH" index.html styles.css src vendor assets "$HOST:$BASE/public/"
rsync -az --delete -e "$SSH" README.md BRIEF-stage1.md refs "$HOST:$BASE/docs/"
$SSH $HOST "$FIXOWN"
echo "Готово: https://250bar.ru/masha/  (версия $VER)"
