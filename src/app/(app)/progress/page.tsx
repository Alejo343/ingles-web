import { db } from "@/lib/db";
import { requireCurrentUser } from "@/lib/auth/current-user";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default async function ProgressPage() {
  const user = await requireCurrentUser();

  const [levels, totalCards, dueCards, recentSessions] = await Promise.all([
    db.level.findMany({
      orderBy: { order: "asc" },
      include: {
        units: { include: { progress: { where: { userId: user.id } } } },
      },
    }),
    db.flashcardReview.count({ where: { userId: user.id } }),
    db.flashcardReview.count({
      where: { userId: user.id, dueDate: { lte: new Date() } },
    }),
    db.quizSession.findMany({
      where: { userId: user.id, completedAt: { not: null } },
      orderBy: { completedAt: "desc" },
      take: 5,
      include: { unit: true },
    }),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Tu progreso</h1>
        <p className="text-muted-foreground">
          Racha actual: {user.currentStreak} · Racha máxima:{" "}
          {user.longestStreak}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Vocabulario</CardTitle>
            <CardDescription>
              {totalCards} tarjetas en total · {dueCards} pendientes hoy
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quizzes recientes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {recentSessions.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Todavía no has completado ningún quiz.
              </p>
            ) : (
              recentSessions.map((s) => (
                <div key={s.id} className="flex justify-between text-sm">
                  <span>{s.unit.title}</span>
                  <span className="text-muted-foreground">
                    {s.scoreCorrect}/{s.scoreTotal}
                  </span>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Progreso por nivel</h2>
        {levels.map((level) => {
          const total = level.units.length;
          const completed = level.units.filter(
            (u) => u.progress[0]?.status === "COMPLETED",
          ).length;
          const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
          return (
            <Card key={level.id}>
              <CardHeader>
                <CardTitle className="text-base">{level.name}</CardTitle>
                <CardDescription>
                  {total > 0
                    ? `${completed} / ${total} unidades completadas`
                    : "Sin contenido todavía"}
                </CardDescription>
              </CardHeader>
              {total > 0 && (
                <CardContent>
                  <Progress value={pct} />
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
