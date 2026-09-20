"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

export type QuizQuestion = {
  id: string;
  answerFormat: "MULTIPLE_CHOICE" | "FILL_BLANK" | "TEXT_INPUT";
  prompt: string;
  options: string[] | null;
};

type SubmitResult = {
  scoreCorrect: number;
  scoreTotal: number;
  results: {
    questionId: string;
    isCorrect: boolean;
    correctAnswer?: string;
    explanation?: string | null;
  }[];
};

export function QuizRunner({
  unitId,
  questions,
  isReading = false,
  redirectTo,
}: {
  unitId: string;
  questions: QuizQuestion[];
  isReading?: boolean;
  redirectTo: string;
}) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);

  const allAnswered = questions.every((q) => (answers[q.id] ?? "").trim());

  async function submit() {
    setSubmitting(true);
    try {
      const res = await fetch("/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          unitId,
          isReading,
          answers: questions.map((q) => ({
            questionId: q.id,
            givenAnswer: answers[q.id] ?? "",
          })),
        }),
      });
      setResult(await res.json());
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    const pct = Math.round((result.scoreCorrect / result.scoreTotal) * 100);
    return (
      <div className="space-y-4">
        <Card>
          <CardContent className="space-y-2 pt-6 text-center">
            <p className="text-lg font-medium">
              Obtuviste {result.scoreCorrect} / {result.scoreTotal} ({pct}%)
            </p>
            <Progress value={pct} />
          </CardContent>
        </Card>

        <div className="space-y-3">
          {questions.map((q) => {
            const r = result.results.find((res) => res.questionId === q.id);
            return (
              <Card
                key={q.id}
                className={r?.isCorrect ? "border-green-600" : "border-destructive"}
              >
                <CardContent className="space-y-1 pt-4">
                  <p className="font-medium">{q.prompt}</p>
                  <p className="text-sm">
                    Tu respuesta:{" "}
                    <span
                      className={
                        r?.isCorrect ? "text-green-600" : "text-destructive"
                      }
                    >
                      {answers[q.id]}
                    </span>
                  </p>
                  {!r?.isCorrect && r?.correctAnswer && (
                    <p className="text-sm text-muted-foreground">
                      Respuesta correcta: {r.correctAnswer}
                    </p>
                  )}
                  {r?.explanation && (
                    <p className="text-sm text-muted-foreground">
                      {r.explanation}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Button onClick={() => router.push(redirectTo)}>Continuar</Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {questions.map((q, i) => (
        <Card key={q.id}>
          <CardContent className="space-y-3 pt-4">
            <p className="font-medium">
              {i + 1}. {q.prompt}
            </p>
            {q.answerFormat === "MULTIPLE_CHOICE" && q.options ? (
              <div className="grid gap-2 sm:grid-cols-3">
                {q.options.map((opt) => (
                  <Button
                    key={opt}
                    type="button"
                    variant={answers[q.id] === opt ? "default" : "outline"}
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [q.id]: opt }))
                    }
                  >
                    {opt}
                  </Button>
                ))}
              </div>
            ) : (
              <Input
                value={answers[q.id] ?? ""}
                onChange={(e) =>
                  setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                }
                placeholder="Escribe tu respuesta"
              />
            )}
          </CardContent>
        </Card>
      ))}

      <Button disabled={!allAnswered || submitting} onClick={submit}>
        {submitting ? "Enviando..." : "Enviar respuestas"}
      </Button>
    </div>
  );
}
