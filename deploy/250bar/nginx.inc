# New game at /masha-new/, isolated from the existing /masha/ version.
location = /masha-new { return 301 /masha-new/; }
location ^~ /masha-new/room/ {
    proxy_pass http://127.0.0.1:18787/room/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_read_timeout 3600s;
}
location ^~ /masha-new/ {
    alias /var/www/masha-game-next/public/;
    index index.html;
    add_header Cache-Control "no-cache" always;
}
