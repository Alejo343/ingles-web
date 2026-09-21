#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

git pull
npm ci
npx prisma generate
npx prisma migrate deploy
npx tsx scripts/sync-content.ts
npm run build
pm2 restart ingles
