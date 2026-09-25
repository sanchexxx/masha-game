#!/bin/bash
# Один раз в начале облачной сессии: раскладывает ключ выкладки и проверяет вход на сервер.
# Ключ владелец кладёт в настройки облачного окружения переменной MASHA_SSH_KEY_B64
# (base64 от закрытого ключа ~/.ssh/masha_game_cloud_ed25519 с Мака).
# Ключ пускает ТОЛЬКО пользователя masha — он может менять лишь /var/www/masha-game.
set -euo pipefail

if [[ -z "${MASHA_SSH_KEY_B64:-}" ]]; then
  echo "Нет переменной MASHA_SSH_KEY_B64 — попроси владельца добавить её в настройки окружения."; exit 1
fi
mkdir -p ~/.ssh && chmod 700 ~/.ssh
echo "$MASHA_SSH_KEY_B64" | base64 -d > ~/.ssh/masha_game
chmod 600 ~/.ssh/masha_game
ssh-keygen -lf ~/.ssh/masha_game >/dev/null || { echo "Ключ повреждён (переменная обрезалась при копировании?)"; exit 1; }

# Отпечаток сервера закреплён: если он поменяется — это повод остановиться и спросить владельца
grep -q "185.250.44.94 ssh-rsa" ~/.ssh/known_hosts 2>/dev/null || cat >> ~/.ssh/known_hosts <<'KH'
185.250.44.94 ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCmi6VAR86lclXOIIxyEeqtSxPPmGLJbrvPhAI3x7q+gypEuzINPZItqqZYK67l6LDQNIQGxu6VFFlPiTMUc3OlmSePHwAO9ktU0Kzs8ZWyYxvIgpacDmgCmwgiWShycmVbug4IMvCYfQaD+6hEzNJmutjT1Z3KuSK12CopbEFW7pGNSVbQV1DL0HywPr1XWS4N4T5YTWm1E/UcJIis54byFgvhtZxuANBAqN1k27y/128/PExNc+GSLCidzm7i3tFSoFCset17C1und8/9nRH/cdfI9asD0gzBariA/PAUXjyGnSXipH3XIZweygQ55XnOdgNUZrT1iGh+esQ75L3x8RSykqms7cIEaXOqwxqWyqF1e2YIVLmJdnaQ2U0CjMzb5Vf6nTYADGO7Yg1z+eYCZ2K4PllMrMQCnY3TsVfDedqIT5Jk0BIKZjD7nxF0cxuJncnFu4PE5Hg5Mo+unAkxLlfeDgz3nKiowzVFtuDdv5D+oKnfR2g9jZEN3eaLZS8=
KH

grep -q "Host masha-srv" ~/.ssh/config 2>/dev/null || cat >> ~/.ssh/config <<'CFG'
Host masha-srv
  HostName 185.250.44.94
  User masha
  IdentityFile ~/.ssh/masha_game
  IdentitiesOnly yes
  StrictHostKeyChecking yes
CFG
chmod 600 ~/.ssh/config

# Переменные для ./deploy.sh
grep -q MASHA_SSH_KEY ~/.bashrc 2>/dev/null || printf 'export MASHA_SSH_KEY=~/.ssh/masha_game\nexport MASHA_SSH_USER=masha\n' >> ~/.bashrc
export MASHA_SSH_KEY=~/.ssh/masha_game MASHA_SSH_USER=masha

command -v rsync >/dev/null || { echo "Ставлю rsync…"; (sudo apt-get install -y rsync >/dev/null 2>&1 || apt-get install -y rsync >/dev/null 2>&1) || echo "rsync поставить не вышло — выкладка не пойдёт"; }

if ssh -o ConnectTimeout=15 masha-srv 'ls /var/www/masha-game/public/index.html' >/dev/null 2>&1; then
  echo "OK: вход на сервер работает, выкладка: ./deploy.sh"
else
  echo "Вход не удался. Причины по частоте: 1) окружению закрыт выход в интернет/порт 22;"
  echo "2) владелец ещё не добавил ключ на сервер; 3) переменная обрезалась. Скажи владельцу, какая."
  exit 1
fi
