import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, GraduationCap, ListChecks, SpellCheck } from "lucide-react";
import { db } from "@/lib/db";
import { requireCurrentUser } from "@/lib/auth/current-user";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function UnitOverviewPage({
  params,
}: {
  params: Promise<{ levelCode: string; unitSlug: string }>;
}) {
  const { levelCode, unitSlug } = await params;
  const user = await requireCurrentUser();

  const unit = await db.unit.findUnique({
    where: { slug: unitSlug },
    include: {
      grammarContent: true,
      vocabulary: true,
      questions: { where: { passageId: null } },
      passages: true,
      progress: { where: { userId: user.id } },
    },
  });

  if (!unit) notFound();

  const progress = unit.progress[0];
  const base = `/levels/${levelCode}/${unitSlug}`;

  const sections = [
    unit.grammarContent && {
      href: `${base}/grammar`,
      title: "Gramática",
      description: unit.grammarContent.title,
      icon: GraduationCap,
      done: progress?.grammarViewed ?? false,
    },
    unit.vocabulary.length > 0 && {
      href: `${base}/vocabulary`,
      title: "Vocabulario",
      description: `${unit.vocabulary.length} tarjetas`,
      icon: SpellCheck,
      done: (progress?.vocabIntroducedCount ?? 0) >= unit.vocabulary.length,
    },
    unit.questions.length > 0 && {
      href: `${base}/quiz`,
      title: "Quiz",
      description: `${unit.questions.length} preguntas`,
      icon: ListChecks,
      done: (progress?.bestQuizScore ?? 0) >= 70,
    },
    unit.passages.length > 0 && {
      href: `${base}/reading`,
      title: "Lectura",
      description: unit.passages[0]?.title,
      icon: BookOpen,
      done: progress?.readingCompleted ?? false,
    },
  ].filter(Boolean) as {
    href: string;
    title: string;
    description: string | null;
    icon: typeof BookOpen;
    done: boolean;
  }[];

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">{unit.title}</h1>
          {progress?.status === "COMPLETED" && (
            <Badge className="bg-green-600">Completada</Badge>
          )}
        </div>
        <p className="text-muted-foreground">{unit.description}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map(({ href, title, description, icon: Icon, done }) => (
          <Link key={href} href={href}>
            <Card className="h-full transition-colors hover:bg-accent">
              <CardHeader className="flex-row items-start gap-3 space-y-0">
                <Icon className="size-5 shrink-0 text-primary" />
                <div>
                  <CardTitle className="text-base">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </div>
                {done && (
                  <Badge variant="secondary" className="ml-auto">
                    ✓
                  </Badge>
                )}
              </CardHeader>
              <CardContent />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
