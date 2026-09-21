import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { requireCurrentUser } from "@/lib/auth/current-user";
import { QuizRunner } from "@/components/quiz/quiz-runner";
import { Card, CardContent } from "@/components/ui/card";
import { BackLink } from "@/components/ui/back-link";

export default async function ReadingPage({
  params,
}: {
  params: Promise<{ levelCode: string; unitSlug: string }>;
}) {
  const { levelCode, unitSlug } = await params;
  await requireCurrentUser();

  const unit = await db.unit.findUnique({
    where: { slug: unitSlug },
    include: {
      passages: {
        orderBy: { order: "asc" },
        include: { questions: { orderBy: { order: "asc" } } },
      },
    },
  });

  if (!unit) notFound();
  const passage = unit.passages[0];
  if (!passage) notFound();

  const questions = passage.questions.map((q) => ({
    id: q.id,
    answerFormat: q.answerFormat,
    prompt: q.prompt,
    options: q.options as string[] | null,
  }));

  return (
    <div className="space-y-6">
      <BackLink href={`/levels/${levelCode}/${unitSlug}`}>{unit.title}</BackLink>

      <div>
        <h1 className="text-2xl font-semibold">{passage.title}</h1>
        <p className="text-muted-foreground">
          {passage.skill === "READING" ? "Comprensión de lectura" : "Listening"}
        </p>
      </div>

      <Card>
        <CardContent className="markdown-content pt-6 whitespace-pre-line">
          {passage.bodyEn}
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h2 className="text-lg font-medium">Preguntas de comprensión</h2>
        <QuizRunner
          unitId={unit.id}
          questions={questions}
          isReading
          redirectTo={`/levels/${levelCode}/${unitSlug}`}
        />
      </div>
    </div>
  );
}
