# Inglés

Web personal para estudiar y repasar inglés (A1-C1, por ahora A1/A2), con progreso persistente y repaso espaciado de vocabulario.

## Stack

Next.js (App Router) + TypeScript · Tailwind + shadcn/ui · Prisma + PostgreSQL · autenticación propia (bcryptjs + jose) · contenido pedagógico versionado en `content/` y sincronizado a la DB.

## Desarrollo local

1. Crear la base de datos local (PostgreSQL) y configurar `.env.local` (ver `.env.example`).
2. `npm install`
3. `npx prisma migrate deploy` (o `npx prisma migrate dev` si se van a crear migraciones nuevas)
4. `npx tsx scripts/sync-content.ts` — sincroniza el contenido de `content/` a la base de datos.
5. `npx tsx scripts/create-user.ts <email> <password> [nombre]` — crea un usuario.
6. `npm run dev`

## Añadir contenido nuevo

Cada unidad vive en `content/levels/<nivel>/units/<slug>.ts`, tipada y validada con Zod (`content/schema.ts`). Tras añadir o editar una unidad, agregarla al `index.ts` del nivel y correr `npx tsx scripts/sync-content.ts` (idempotente, usa los `slug` como clave natural).

## Despliegue

Ver `scripts/deploy.sh` para el flujo de redeploy en el VPS (git pull, migraciones, sync de contenido, build, reinicio con PM2).
