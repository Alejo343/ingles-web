import { db } from "@/lib/db";

const PASSING_RATIO = 0.7;

// `@db.Date` columns son fecha pura sin hora, y Postgres/Prisma las trata en
// UTC. Comparar con date-fns (que usa la hora local del proceso) puede hacer
// que el mismo día se interprete como días distintos según la zona horaria.
// Por eso aquí todo se normaliza y compara en UTC explícitamente.
function utcDateOnly(d: Date): Date {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

function isSameUTCDay(a: Date, b: Date): boolean {
  return utcDateOnly(a).getTime() === utcDateOnly(b).getTime();
}

function addUTCDays(d: Date, days: number): Date {
  const r = utcDateOnly(d);
  r.setUTCDate(r.getUTCDate() + days);
  return r;
}

export async function logStudyActivity(userId: string): Promise<void> {
  const today = utcDateOnly(new Date());

  await db.studyActivityLog.upsert({
    where: { userId_date: { userId, date: today } },
    update: {},
    create: { userId, date: today },
  });

  const user = await db.user.findUniqueOrThrow({ where: { id: userId } });

  if (user.lastActiveDate && isSameUTCDay(user.lastActiveDate, today)) {
    return;
  }

  const yesterday = addUTCDays(today, -1);
  const continuesStreak =
    user.lastActiveDate && isSameUTCDay(user.lastActiveDate, yesterday);

  const currentStreak = continuesStreak ? user.currentStreak + 1 : 1;
  const longestStreak = Math.max(user.longestStreak, currentStreak);

  await db.user.update({
    where: { id: userId },
    data: { currentStreak, longestStreak, lastActiveDate: today },
  });
}

async function getOrCreateUnitProgress(userId: string, unitId: string) {
  return db.unitProgress.upsert({
    where: { userId_unitId: { userId, unitId } },
    update: {},
    create: { userId, unitId },
  });
}

export async function markGrammarViewed(
  userId: string,
  unitId: string,
): Promise<void> {
  await getOrCreateUnitProgress(userId, unitId);
  await db.unitProgress.update({
    where: { userId_unitId: { userId, unitId } },
    data: { status: "IN_PROGRESS", grammarViewed: true },
  });
  await evaluateUnitCompletion(userId, unitId);
  await logStudyActivity(userId);
}

export async function recordQuizResult(
  userId: string,
  unitId: string,
  scoreCorrect: number,
  scoreTotal: number,
): Promise<void> {
  const progress = await getOrCreateUnitProgress(userId, unitId);
  const ratio = scoreTotal > 0 ? scoreCorrect / scoreTotal : 0;
  const bestQuizScore = Math.max(progress.bestQuizScore ?? 0, Math.round(ratio * 100));

  await db.unitProgress.update({
    where: { userId_unitId: { userId, unitId } },
    data: { status: "IN_PROGRESS", bestQuizScore },
  });
  await evaluateUnitCompletion(userId, unitId);
  await logStudyActivity(userId);
}

export async function markReadingCompleted(
  userId: string,
  unitId: string,
): Promise<void> {
  await getOrCreateUnitProgress(userId, unitId);
  await db.unitProgress.update({
    where: { userId_unitId: { userId, unitId } },
    data: { status: "IN_PROGRESS", readingCompleted: true },
  });
  await evaluateUnitCompletion(userId, unitId);
  await logStudyActivity(userId);
}

export async function recordFlashcardReview(
  userId: string,
  unitId: string,
): Promise<void> {
  await getOrCreateUnitProgress(userId, unitId);

  const vocabIntroducedCount = await db.flashcardReview.count({
    where: { userId, vocabularyItem: { unitId } },
  });

  await db.unitProgress.update({
    where: { userId_unitId: { userId, unitId } },
    data: { status: "IN_PROGRESS", vocabIntroducedCount },
  });
  await evaluateUnitCompletion(userId, unitId);
  await logStudyActivity(userId);
}

async function evaluateUnitCompletion(
  userId: string,
  unitId: string,
): Promise<void> {
  const [unit, progress] = await Promise.all([
    db.unit.findUniqueOrThrow({
      where: { id: unitId },
      include: {
        grammarContent: true,
        passages: { select: { id: true } },
        questions: { where: { passageId: null }, select: { id: true } },
      },
    }),
    db.unitProgress.findUniqueOrThrow({
      where: { userId_unitId: { userId, unitId } },
    }),
  ]);

  const grammarOk = !unit.grammarContent || progress.grammarViewed;
  const readingOk = unit.passages.length === 0 || progress.readingCompleted;
  const quizOk =
    unit.questions.length === 0 ||
    (progress.bestQuizScore ?? 0) >= PASSING_RATIO * 100;

  if (grammarOk && readingOk && quizOk) {
    await db.unitProgress.update({
      where: { userId_unitId: { userId, unitId } },
      data: { status: "COMPLETED", completedAt: new Date() },
    });
  }
}
