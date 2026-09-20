import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { requireCurrentUser } from "@/lib/auth/current-user";
import { FlashcardViewer } from "@/components/flashcards/flashcard-viewer";

export default async function VocabularyPage({
  params,
}: {
  params: Promise<{ levelCode: string; unitSlug: string }>;
}) {
  const { levelCode, unitSlug } = await params;
  await requireCurrentUser();

  const unit = await db.unit.findUnique({
    where: { slug: unitSlug },
    include: { vocabulary: { orderBy: { order: "asc" } } },
  });

  if (!unit) notFound();

  const cards = unit.vocabulary.map((v) => ({
    vocabularyItemId: v.id,
    termEn: v.termEn,
    termEs: v.termEs,
    exampleEn: v.exampleEn,
    exampleEs: v.exampleEs,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Vocabulario</h1>
        <p className="text-muted-foreground">{unit.title}</p>
      </div>
      <FlashcardViewer
        cards={cards}
        redirectTo={`/levels/${levelCode}/${unitSlug}`}
      />
    </div>
  );
}
