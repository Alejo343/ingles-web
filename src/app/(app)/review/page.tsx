import { db } from "@/lib/db";
import { requireCurrentUser } from "@/lib/auth/current-user";
import { FlashcardViewer } from "@/components/flashcards/flashcard-viewer";

export default async function ReviewPage() {
  const user = await requireCurrentUser();

  const dueReviews = await db.flashcardReview.findMany({
    where: { userId: user.id, dueDate: { lte: new Date() } },
    orderBy: { dueDate: "asc" },
    include: { vocabularyItem: true },
  });

  const cards = dueReviews.map((r) => ({
    vocabularyItemId: r.vocabularyItem.id,
    termEn: r.vocabularyItem.termEn,
    termEs: r.vocabularyItem.termEs,
    exampleEn: r.vocabularyItem.exampleEn,
    exampleEs: r.vocabularyItem.exampleEs,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Repaso de hoy</h1>
        <p className="text-muted-foreground">
          Tarjetas de vocabulario de todos tus niveles, según su fecha de
          repaso.
        </p>
      </div>
      <FlashcardViewer cards={cards} redirectTo="/dashboard" />
    </div>
  );
}
