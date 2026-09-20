import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth/current-user";
import { schedule, type Quality } from "@/lib/srs";
import { recordFlashcardReview } from "@/lib/progress";

const bodySchema = z.object({
  vocabularyItemId: z.string(),
  quality: z.union([z.literal(0), z.literal(3), z.literal(4), z.literal(5)]),
});

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const parsed = bodySchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }
  const { vocabularyItemId, quality } = parsed.data;

  const vocabItem = await db.vocabularyItem.findUnique({
    where: { id: vocabularyItemId },
  });
  if (!vocabItem) {
    return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  }

  const existing = await db.flashcardReview.findUnique({
    where: {
      userId_vocabularyItemId: {
        userId: user.id,
        vocabularyItemId,
      },
    },
  });

  const cardState = existing ?? {
    easeFactor: 2.5,
    intervalDays: 0,
    repetitions: 0,
    lapses: 0,
  };

  const result = schedule(cardState, quality as Quality);

  await db.flashcardReview.upsert({
    where: { userId_vocabularyItemId: { userId: user.id, vocabularyItemId } },
    update: {
      easeFactor: result.easeFactor,
      intervalDays: result.intervalDays,
      repetitions: result.repetitions,
      lapses: result.lapses,
      dueDate: result.dueDate,
      lastReviewedAt: new Date(),
    },
    create: {
      userId: user.id,
      vocabularyItemId,
      easeFactor: result.easeFactor,
      intervalDays: result.intervalDays,
      repetitions: result.repetitions,
      lapses: result.lapses,
      dueDate: result.dueDate,
      lastReviewedAt: new Date(),
    },
  });

  await recordFlashcardReview(user.id, vocabItem.unitId);

  return NextResponse.json({ dueDate: result.dueDate });
}
