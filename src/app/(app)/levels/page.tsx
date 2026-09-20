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
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export default async function LevelsPage() {
  const user = await requireCurrentUser();

  const levels = await db.level.findMany({
    orderBy: { order: "asc" },
    include: {
      units: {
        include: { progress: { where: { userId: user.id } } },
      },
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Niveles</h1>
        <p className="text-muted-foreground">
          De A1 a C1 según el Marco Común Europeo de Referencia (CEFR).
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {levels.map((level) => {
          const total = level.units.length;
          const completed = level.units.filter(
            (u) => u.progress[0]?.status === "COMPLETED",
          ).length;
          const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
          const hasContent = total > 0;

          return (
            <Card key={level.id} className={!hasContent ? "opacity-60" : ""}>
              <CardHeader>
                <CardTitle>{level.name}</CardTitle>
                <CardDescription>{level.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {hasContent ? (
                  <>
                    <Progress value={pct} />
                    <p className="text-sm text-muted-foreground">
                      {completed} / {total} unidades completadas
                    </p>
                    <Button
                      nativeButton={false}
                      render={
                        <Link href={`/levels/${level.code}`}>
                          Ver unidades
                        </Link>
                      }
                    />
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Contenido próximamente.
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
