import { config as loadEnv } from "dotenv";

loadEnv({ path: ".env.local" });
loadEnv({ path: ".env" });

async function main() {
  const { db } = await import("../src/lib/db");
  const { levels } = await import("../content/index");
  const { unitContentSchema } = await import("../content/schema");

  let unitCount = 0;
  let vocabCount = 0;
  let questionCount = 0;
  let passageCount = 0;

  for (const { meta, units } of levels) {
    const level = await db.level.upsert({
      where: { code: meta.code },
      update: {
        name: meta.name,
        description: meta.description,
        order: meta.order,
      },
      create: {
        code: meta.code,
        name: meta.name,
        description: meta.description,
        order: meta.order,
      },
    });

    for (const rawUnit of units) {
      const unitContent = unitContentSchema.parse(rawUnit);
      unitCount++;

      const unit = await db.unit.upsert({
        where: { slug: unitContent.slug },
        update: {
          levelId: level.id,
          title: unitContent.title,
          description: unitContent.description,
          order: unitContent.order,
          estimatedMinutes: unitContent.estimatedMinutes,
        },
        create: {
          slug: unitContent.slug,
          levelId: level.id,
          title: unitContent.title,
          description: unitContent.description,
          order: unitContent.order,
          estimatedMinutes: unitContent.estimatedMinutes,
        },
      });

      if (unitContent.grammar) {
        await db.grammarContent.upsert({
          where: { unitId: unit.id },
          update: {
            title: unitContent.grammar.title,
            explanationMd: unitContent.grammar.explanationMd,
            examples: unitContent.grammar.examples,
          },
          create: {
            unitId: unit.id,
            title: unitContent.grammar.title,
            explanationMd: unitContent.grammar.explanationMd,
            examples: unitContent.grammar.examples,
          },
        });
      }

      for (const item of unitContent.vocabulary) {
        await db.vocabularyItem.upsert({
          where: { slug: item.slug },
          update: { ...item, unitId: unit.id },
          create: { ...item, unitId: unit.id },
        });
        vocabCount++;
      }

      for (const q of unitContent.questions) {
        await db.question.upsert({
          where: { slug: q.slug },
          update: {
            unitId: unit.id,
            passageId: null,
            skill: q.skill,
            answerFormat: q.answerFormat,
            prompt: q.prompt,
            options: q.options,
            correctAnswer: q.correctAnswer,
            acceptableAnswers: q.acceptableAnswers,
            explanation: q.explanation,
            order: q.order,
          },
          create: {
            slug: q.slug,
            unitId: unit.id,
            skill: q.skill,
            answerFormat: q.answerFormat,
            prompt: q.prompt,
            options: q.options,
            correctAnswer: q.correctAnswer,
            acceptableAnswers: q.acceptableAnswers,
            explanation: q.explanation,
            order: q.order,
          },
        });
        questionCount++;
      }

      for (const p of unitContent.passages) {
        const passage = await db.passage.upsert({
          where: { slug: p.slug },
          update: {
            unitId: unit.id,
            skill: p.skill,
            title: p.title,
            bodyEn: p.bodyEn,
            audioUrl: p.audioUrl,
            order: p.order,
          },
          create: {
            slug: p.slug,
            unitId: unit.id,
            skill: p.skill,
            title: p.title,
            bodyEn: p.bodyEn,
            audioUrl: p.audioUrl,
            order: p.order,
          },
        });
        passageCount++;

        for (const q of p.questions) {
          await db.question.upsert({
            where: { slug: q.slug },
            update: {
              unitId: unit.id,
              passageId: passage.id,
              skill: q.skill,
              answerFormat: q.answerFormat,
              prompt: q.prompt,
              options: q.options,
              correctAnswer: q.correctAnswer,
              acceptableAnswers: q.acceptableAnswers,
              explanation: q.explanation,
              order: q.order,
            },
            create: {
              slug: q.slug,
              unitId: unit.id,
              passageId: passage.id,
              skill: q.skill,
              answerFormat: q.answerFormat,
              prompt: q.prompt,
              options: q.options,
              correctAnswer: q.correctAnswer,
              acceptableAnswers: q.acceptableAnswers,
              explanation: q.explanation,
              order: q.order,
            },
          });
          questionCount++;
        }
      }
    }
  }

  console.log(
    `Sync completo: ${unitCount} unidades, ${vocabCount} vocabulario, ${questionCount} preguntas, ${passageCount} lecturas.`,
  );
  await db.$disconnect();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
