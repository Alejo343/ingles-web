import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { requireCurrentUser } from "@/lib/auth/current-user";
import { QuizRunner } from "@/components/quiz/quiz-runner";

export default async function QuizPage({
  params,
}: {
  params: Promise<{ levelCode: string; unitSlug: string }>;
}) {
  const { levelCode, unitSlug } = await params;
  await requireCurrentUser();

  const unit = await db.unit.findUnique({
    where: { slug: unitSlug },
    include: {
      questions: { where: { passageId: null }, orderBy: { order: "asc" } },
    },
  });

  if (!unit) notFound();

  const questions = unit.questions.map((q) => ({
    id: q.id,
    answerFormat: q.answerFormat,
    prompt: q.prompt,
    options: q.options as string[] | null,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Quiz</h1>
        <p className="text-muted-foreground">{unit.title}</p>
      </div>
      <QuizRunner
        unitId={unit.id}
        questions={questions}
        redirectTo={`/levels/${levelCode}/${unitSlug}`}
      />
    </div>
  );
}
