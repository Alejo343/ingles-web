import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth/current-user";
import { recordQuizResult, markReadingCompleted } from "@/lib/progress";

const bodySchema = z.object({
  unitId: z.string(),
  isReading: z.boolean().optional().default(false),
  answers: z.array(
    z.object({ questionId: z.string(), givenAnswer: z.string() }),
  ),
});

function normalize(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // quita tildes/diacríticos (á->a, ñ->n, etc.)
    .replace(/[.,!?¡¿]/g, "") // ignora puntuación final
    .replace(/\s+/g, " ");
}

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const parsed = bodySchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }
  const { unitId, isReading, answers } = parsed.data;

  const questions = await db.question.findMany({
    where: { id: { in: answers.map((a) => a.questionId) } },
  });
  const questionMap = new Map(questions.map((q) => [q.id, q]));

  const gradedAnswers = answers.map((a) => {
    const question = questionMap.get(a.questionId);
    if (!question) {
      return { ...a, isCorrect: false };
    }
    const acceptable = [
      question.correctAnswer,
      ...((question.acceptableAnswers as string[] | null) ?? []),
    ].map(normalize);
    const isCorrect = acceptable.includes(normalize(a.givenAnswer));
    return { ...a, isCorrect };
  });

  const scoreCorrect = gradedAnswers.filter((a) => a.isCorrect).length;
  const scoreTotal = gradedAnswers.length;

  const session = await db.quizSession.create({
    data: {
      userId: user.id,
      unitId,
      completedAt: new Date(),
      scoreCorrect,
      scoreTotal,
      answers: {
        create: gradedAnswers.map((a) => ({
          questionId: a.questionId,
          givenAnswer: a.givenAnswer,
          isCorrect: a.isCorrect,
        })),
      },
    },
  });

  if (isReading) {
    await markReadingCompleted(user.id, unitId);
  } else {
    await recordQuizResult(user.id, unitId, scoreCorrect, scoreTotal);
  }

  return NextResponse.json({
    sessionId: session.id,
    scoreCorrect,
    scoreTotal,
    results: gradedAnswers.map((a) => ({
      questionId: a.questionId,
      isCorrect: a.isCorrect,
      correctAnswer: questionMap.get(a.questionId)?.correctAnswer,
      explanation: questionMap.get(a.questionId)?.explanation,
    })),
  });
}
