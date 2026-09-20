"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { QUALITY_LABELS, type Quality } from "@/lib/srs";

export type FlashcardData = {
  vocabularyItemId: string;
  termEn: string;
  termEs: string;
  exampleEn?: string | null;
  exampleEs?: string | null;
};

export function FlashcardViewer({
  cards,
  redirectTo,
}: {
  cards: FlashcardData[];
  redirectTo: string;
}) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const current = cards[index];
  const done = index >= cards.length;

  async function rate(quality: Quality) {
    if (!current || submitting) return;
    setSubmitting(true);
    try {
      await fetch("/api/flashcards/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vocabularyItemId: current.vocabularyItemId,
          quality,
        }),
      });
      setFlipped(false);
      setIndex((i) => i + 1);
    } finally {
      setSubmitting(false);
    }
  }

  if (cards.length === 0) {
    return (
      <p className="text-muted-foreground">
        No tienes tarjetas para repasar ahora mismo.
      </p>
    );
  }

  if (done) {
    return (
      <Card>
        <CardContent className="space-y-4 pt-6 text-center">
          <p className="text-lg font-medium">
            ¡Repaso completado! Revisaste {cards.length} tarjeta
            {cards.length === 1 ? "" : "s"}.
          </p>
          <Button onClick={() => router.push(redirectTo)}>Continuar</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Progress value={(index / cards.length) * 100} />
      <p className="text-sm text-muted-foreground">
        {index + 1} / {cards.length}
      </p>

      <Card
        className="min-h-48 cursor-pointer select-none"
        onClick={() => setFlipped((f) => !f)}
      >
        <CardContent className="flex min-h-48 flex-col items-center justify-center gap-2 text-center">
          {!flipped ? (
            <p className="text-2xl font-semibold">{current.termEn}</p>
          ) : (
            <>
              <p className="text-2xl font-semibold">{current.termEs}</p>
              {current.exampleEn && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {current.exampleEn}
                </p>
              )}
              {current.exampleEs && (
                <p className="text-sm text-muted-foreground">
                  {current.exampleEs}
                </p>
              )}
            </>
          )}
          <p className="mt-4 text-xs text-muted-foreground">
            {flipped ? "" : "Toca para ver la traducción"}
          </p>
        </CardContent>
      </Card>

      {flipped && (
        <div className="grid grid-cols-4 gap-2">
          {QUALITY_LABELS.map(({ quality, label }) => (
            <Button
              key={quality}
              variant={quality < 3 ? "outline" : "default"}
              disabled={submitting}
              onClick={() => rate(quality)}
            >
              {label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
