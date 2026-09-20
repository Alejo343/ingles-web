import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { db } from "@/lib/db";
import { requireCurrentUser } from "@/lib/auth/current-user";
import { markGrammarViewed } from "@/lib/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function GrammarPage({
  params,
}: {
  params: Promise<{ unitSlug: string }>;
}) {
  const { unitSlug } = await params;
  const user = await requireCurrentUser();

  const unit = await db.unit.findUnique({
    where: { slug: unitSlug },
    include: { grammarContent: true },
  });

  if (!unit || !unit.grammarContent) notFound();

  await markGrammarViewed(user.id, unit.id);

  const examples = unit.grammarContent.examples as { en: string; es: string }[];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{unit.grammarContent.title}</h1>

      <Card>
        <CardContent className="markdown-content pt-6">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {unit.grammarContent.explanationMd}
          </ReactMarkdown>
        </CardContent>
      </Card>

      <div>
        <h2 className="mb-3 text-lg font-medium">Ejemplos</h2>
        <div className="space-y-3">
          {examples.map((ex, i) => (
            <div key={i}>
              <Card>
                <CardContent className="pt-4">
                  <p className="font-medium">{ex.en}</p>
                  <p className="text-sm text-muted-foreground">{ex.es}</p>
                </CardContent>
              </Card>
              {i < examples.length - 1 && <Separator className="my-1" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
