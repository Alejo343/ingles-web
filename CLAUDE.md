# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` / `npm start` — production build / serve
- `npm run lint` — ESLint
- `npx tsc --noEmit` — typecheck (no test suite exists in this repo)
- `npx prisma generate` — regenerate the Prisma client; required after `npm ci`/`npm install` since the client isn't committed and there's no `postinstall` hook for it
- `npx prisma migrate deploy` — apply migrations non-interactively. **`prisma migrate dev` fails in this environment** ("non-interactive environment") — to add a migration, hand-write `prisma/migrations/<timestamp>_<name>/migration.sql` following the existing ones, then run `migrate deploy`
- `npx tsx scripts/sync-content.ts` — upserts everything under `content/` into the DB (idempotent, keyed by `slug`); run after editing/adding content
- `npx tsx scripts/create-user.ts <email> <password> [name]` — only way to create a user; no signup UI
- `scripts/deploy.sh` — the VPS redeploy sequence (git pull → npm ci → prisma generate → migrate deploy → sync-content → build → pm2 restart); mirror this order if you change the deploy flow, `sync-content` and `build` both need the generated client first

## Architecture

**Two data axes.** `Level`/`Unit`/`GrammarContent`/`VocabularyItem`/`Passage`/`Question` are pedagogical content, authored as typed/Zod-validated TS files under `content/levels/<level>/units/*.ts` and synced into Postgres by `scripts/sync-content.ts` — never edited directly in the DB. `slug` fields (on `Unit`, `VocabularyItem`, `Passage`, `Question`) are the natural key sync upserts on, so user progress (which references DB ids) survives content edits as long as slugs don't change. `FlashcardReview`/`UnitProgress`/`QuizSession`+`UserAnswer`/`StudyActivityLog` are the mutable per-user state, all touched through helpers in `src/lib/progress.ts` (`markGrammarViewed`, `recordQuizResult`, `markReadingCompleted`, `recordFlashcardReview`) rather than written ad hoc from route handlers.

**Prisma 7 quirks.** The `datasource` block in `prisma/schema.prisma` has no `url` — connection config lives in `prisma.config.ts` (loaded via `dotenv` from `.env.local`/`.env`, since Prisma 7 no longer auto-reads `.env.local`). `src/lib/db.ts` constructs the client with the `@prisma/adapter-pg` driver adapter; this is required in Prisma 7, not optional.

**UI kit is Base UI, not Radix**, despite being installed via `shadcn`. `src/components/ui/button.tsx` wraps `@base-ui/react/button`. To make a `Button` render as a `Link` (or anything non-`<button>`), pass `render={<Link .../>}` (not `asChild` — that prop doesn't exist here) and `nativeButton={false}`, or Base UI throws a console error about button semantics.

**Auth is custom**, no NextAuth. `src/proxy.ts` (Next.js 16 renamed `middleware.ts` → `proxy.ts`; keep using this convention, not the deprecated one) gate-checks a JWT in an httpOnly `session` cookie (`jose`, `src/lib/auth/session.ts`) for every route except `/login`. Passwords are `bcryptjs`. There's no signup route — users only come from `scripts/create-user.ts`.

**Date-only comparisons must use UTC, not `date-fns` local-time helpers.** `StudyActivityLog.date`/`User.lastActiveDate` are `@db.Date` columns, which Postgres/Prisma treat as UTC-midnight instants; comparing them with `date-fns`'s `isSameDay`/`startOfDay` (which use the process's local timezone) causes every request to look like a new day. `src/lib/progress.ts` has its own `utcDateOnly`/`isSameUTCDay`/`addUTCDays` helpers for this — use them for any new date-only logic instead of reaching for `date-fns`.

**Quiz answer grading** (`src/app/api/quiz/submit/route.ts`, `normalize()`) lowercases, strips accents (NFD + combining-mark strip) and trailing punctuation before comparing free-text answers against `correctAnswer`/`acceptableAnswers`. Keep this lenient-by-default when touching grading — these are Spanish/English answers typed by a language learner, not exact-match tokens.

**Route structure:** `src/app/(auth)/login` is the only public route; everything under `src/app/(app)/` is proxy-protected and shares the nav/streak shell in `(app)/layout.tsx`. Unit sub-pages (`levels/[levelCode]/[unitSlug]/{grammar,vocabulary,quiz,reading}`) each read their slice of the `Unit` and call the matching `progress.ts` helper as a side effect of rendering (grammar/reading) or via `/api/flashcards/review` and `/api/quiz/submit` (vocabulary/quiz).

**Deployment target:** VPS behind OpenLiteSpeed, app run via PM2 (`pm2 restart ingles`) on port 3007, reverse-proxied at `https://ingles.billboard.com.co`. `.env` on the VPS holds a dedicated `ingles_app`/`ingles` Postgres role+database, separate from local dev's `ingles_dev`.
