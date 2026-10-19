#!/usr/bin/env bash
# Новая версия игры: меняет ?v= у файлов игры и version.json.
# Открытые игры (и приложение с иконки iPhone) увидят новую версию и перезагрузятся в меню.
set -euo pipefail
cd "$(dirname "$0")/.."
old=$(grep -o "__gameVersion = '[0-9]*'" index.html | grep -o '[0-9]\+')
new=$(date +%Y%m%d%H%M)
sed -i.bak "s/$old/$new/g" index.html && rm -f index.html.bak
printf '{"v":"%s"}\n' "$new" > version.json
echo "версия $old → $new"
