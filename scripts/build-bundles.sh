#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if [[ -n "${ESBUILD_BIN:-}" ]]; then
  builder=("$ESBUILD_BIN")
elif command -v esbuild >/dev/null 2>&1; then
  builder=(esbuild)
elif command -v pnpm >/dev/null 2>&1; then
  builder=(pnpm dlx esbuild@0.25.11)
elif command -v npx >/dev/null 2>&1; then
  builder=(npx --yes esbuild@0.25.11)
else
  echo 'Нужен esbuild, pnpm или npx' >&2
  exit 1
fi

common=(src/main.js --bundle --target=safari15,chrome70 --format=iife --minify)
"${builder[@]}" "${common[@]}" --alias:three=./vendor/three.min.js --outfile=src/main.bundle.js
"${builder[@]}" "${common[@]}" --alias:three=./vendor/three.r160.js --outfile=src/main.legacy.bundle.js
python3 scripts/build-inline-pages.py
