import Link from "next/link";
import { db } from "@/lib/db";
import { requireCurrentUser } from "@/lib/auth/current-user";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const user = await requireCurrentUser();

  const [dueCount, levels] = await Promise.all([
    db.flashcardReview.count({
      where: { userId: user.id, dueDate: { lte: new Date() } },
    }),
    db.level.findMany({
      orderBy: { order: "asc" },
      include: {
        units: {
          orderBy: { order: "asc" },
          include: { progress: { where: { userId: user.id } } },
        },
      },
    }),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">
          Hola{user.displayName ? `, ${user.displayName}` : ""} 👋
        </h1>
        <p className="text-muted-foreground">
          Racha actual: {user.currentStreak}{" "}
          {user.currentStreak === 1 ? "día" : "días"} · Racha máxima:{" "}
          {user.longestStreak}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Repaso de hoy</CardTitle>
          <CardDescription>
            {dueCount > 0
              ? `Tienes ${dueCount} tarjeta${dueCount === 1 ? "" : "s"} de vocabulario para repasar.`
              : "No tienes tarjetas pendientes por ahora."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {dueCount === 0 ? (
            <Button disabled>Repasar ahora</Button>
          ) : (
            <Button
              nativeButton={false}
              render={<Link href="/review">Repasar ahora</Link>}
            />
          )}
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Tus niveles</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {levels.map((level) => {
            const completed = level.units.filter(
              (u) => u.progress[0]?.status === "COMPLETED",
            ).length;
            return (
              <Card key={level.id}>
                <CardHeader>
                  <CardTitle>{level.name}</CardTitle>
                  <CardDescription>
                    {level.units.length === 0
                      ? "Contenido próximamente"
                      : `${completed} / ${level.units.length} unidades completadas`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="secondary"
                    nativeButton={false}
                    render={
                      <Link href={`/levels/${level.code}`}>Ver unidades</Link>
                    }
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
