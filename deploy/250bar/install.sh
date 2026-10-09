#!/usr/bin/env bash
set -euo pipefail

site=/etc/nginx/fastpanel2-sites/starex/250bar.ru.includes
root=/var/www/masha-game-next

if [[ -e "$root" ]] || grep -q 'location = /masha-new' "$site"; then
  echo 'masha-new is already installed; refusing to overwrite it' >&2
  exit 1
fi

cp "$site" "$site.before-masha-new"
install -o masha -g masha -d "$root" "$root/public" "$root/server"
tar -xzf /tmp/masha-next-stage.tgz -C "$root"
chown -R masha:masha "$root"
install -m 0755 /root/.nvm/versions/node/v18.20.5/bin/node /usr/local/bin/node18-masha
install -m 0644 /tmp/masha-game-next.service /etc/systemd/system/masha-game-next.service
systemctl daemon-reload
systemctl enable --now masha-game-next.service

cat /tmp/nginx.inc >> "$site"
if ! nginx -t; then
  cp "$site.before-masha-new" "$site"
  nginx -t
  exit 1
fi
systemctl reload nginx
