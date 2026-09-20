import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Circle, PlayCircle } from "lucide-react";
import { db } from "@/lib/db";
import { requireCurrentUser } from "@/lib/auth/current-user";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { LevelCode } from "@prisma/client";

const STATUS_ICON = {
  COMPLETED: CheckCircle2,
  IN_PROGRESS: PlayCircle,
  NOT_STARTED: Circle,
};

export default async function LevelUnitsPage({
  params,
}: {
  params: Promise<{ levelCode: string }>;
}) {
  const { levelCode } = await params;
  const user = await requireCurrentUser();

  const level = await db.level.findUnique({
    where: { code: levelCode.toUpperCase() as LevelCode },
    include: {
      units: {
        orderBy: { order: "asc" },
        include: { progress: { where: { userId: user.id } } },
      },
    },
  });

  if (!level) notFound();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{level.name}</h1>
        <p className="text-muted-foreground">{level.description}</p>
      </div>

      {level.units.length === 0 ? (
        <p className="text-muted-foreground">
          Todavía no hay unidades publicadas para este nivel.
        </p>
      ) : (
        <div className="space-y-3">
          {level.units.map((unit) => {
            const status = unit.progress[0]?.status ?? "NOT_STARTED";
            const Icon = STATUS_ICON[status];
            return (
              <Link key={unit.id} href={`/levels/${level.code}/${unit.slug}`}>
                <Card className="transition-colors hover:bg-accent">
                  <CardHeader className="flex-row items-center gap-3 space-y-0">
                    <Icon
                      className={`size-5 shrink-0 ${
                        status === "COMPLETED"
                          ? "text-green-600"
                          : "text-muted-foreground"
                      }`}
                    />
                    <div>
                      <CardTitle className="text-base">{unit.title}</CardTitle>
                      <CardDescription>{unit.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
