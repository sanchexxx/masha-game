#!/usr/bin/env bash
# Выкладка игры + комнат совместной игры на Cloudflare (бесплатно): https://masha-game.<поддомен>.workers.dev
# Нужны переменные окружения CLOUDFLARE_API_TOKEN и CLOUDFLARE_ACCOUNT_ID (токен — шаблон «Edit Cloudflare Workers»)
# и доступ в сеть к api.cloudflare.com. Запуск из корня репозитория: bash tools/cloud/deploy-cloudflare.sh
set -euo pipefail
cd "$(dirname "$0")/../.."
: "${CLOUDFLARE_API_TOKEN:?Нет CLOUDFLARE_API_TOKEN — добавь в настройки окружения}"
: "${CLOUDFLARE_ACCOUNT_ID:?Нет CLOUDFLARE_ACCOUNT_ID — добавь в настройки окружения}"
API="https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID"
AUTH=(-H "Authorization: Bearer $CLOUDFLARE_API_TOKEN")

# 1) Проверка всех модулей (как в deploy.sh)
for f in $(find src server -name '*.js'); do node --check "$f"; done

# 2) Поддомен *.workers.dev — у нового аккаунта его ещё нет, заводим
SUB=$(curl -fsS "${AUTH[@]}" "$API/workers/subdomain" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{console.log(JSON.parse(s).result?.subdomain||"")}catch{console.log("")}})')
if [ -z "$SUB" ]; then
  WANT="${CF_SUBDOMAIN:-masha-game-$(date +%s | tail -c 5)}"
  echo "Регистрирую поддомен $WANT.workers.dev…"
  curl -fsS "${AUTH[@]}" -X PUT -H 'Content-Type: application/json' --data "{\"subdomain\":\"$WANT\"}" "$API/workers/subdomain" >/dev/null
  SUB="$WANT"
fi

# 3) Версия файлов — чтобы телефоны не держали старые скрипты
VER=$(date +%Y%m%d%H%M)
sed -i.bak -E "s/(styles\.css|main\.js)\?v=[0-9]+/\1?v=$VER/g" index.html && rm -f index.html.bak

# 4) Выкладка: один Worker раздаёт игру и держит комнаты
npx --yes wrangler@4 deploy --config wrangler.toml
echo
echo "Готово: https://masha-game.$SUB.workers.dev/"
