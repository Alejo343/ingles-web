#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

git pull
npm ci
npx tsx scripts/sync-content.ts
npx prisma migrate deploy
npm run build
pm2 restart ingles
