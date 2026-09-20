import { z } from "zod";

export const levelCodeSchema = z.enum(["A1", "A2", "B1", "B2", "C1"]);

export const levelMetaSchema = z.object({
  code: levelCodeSchema,
  name: z.string(),
  description: z.string().optional(),
  order: z.number().int(),
});
export type LevelMeta = z.infer<typeof levelMetaSchema>;

export const grammarExampleSchema = z.object({
  en: z.string(),
  es: z.string(),
});

export const grammarContentSchema = z.object({
  title: z.string(),
  explanationMd: z.string(),
  examples: z.array(grammarExampleSchema).min(1),
});

export const vocabItemContentSchema = z.object({
  slug: z.string(),
  termEn: z.string(),
  termEs: z.string(),
  exampleEn: z.string().optional(),
  exampleEs: z.string().optional(),
  partOfSpeech: z.string().optional(),
  imageUrl: z.string().optional(),
  audioUrl: z.string().optional(),
  order: z.number().int(),
});
export type VocabItemContent = z.infer<typeof vocabItemContentSchema>;

export const skillSchema = z.enum([
  "GRAMMAR",
  "VOCAB",
  "TRANSLATION_ES_EN",
  "TRANSLATION_EN_ES",
  "READING",
  "LISTENING",
]);

export const answerFormatSchema = z.enum([
  "MULTIPLE_CHOICE",
  "FILL_BLANK",
  "TEXT_INPUT",
]);

export const questionContentSchema = z
  .object({
    slug: z.string(),
    skill: skillSchema,
    answerFormat: answerFormatSchema,
    prompt: z.string(),
    options: z.array(z.string()).optional(),
    correctAnswer: z.string(),
    acceptableAnswers: z.array(z.string()).optional(),
    explanation: z.string().optional(),
    order: z.number().int(),
  })
  .refine(
    (q) => q.answerFormat !== "MULTIPLE_CHOICE" || (q.options?.length ?? 0) >= 2,
    { message: "MULTIPLE_CHOICE necesita al menos 2 options" },
  );
export type QuestionContent = z.infer<typeof questionContentSchema>;

export const passageSkillSchema = z.enum(["READING", "LISTENING"]);

export const passageContentSchema = z.object({
  slug: z.string(),
  skill: passageSkillSchema,
  title: z.string(),
  bodyEn: z.string(),
  audioUrl: z.string().optional(),
  order: z.number().int(),
  questions: z.array(questionContentSchema).min(1),
});
export type PassageContent = z.infer<typeof passageContentSchema>;

export const unitContentSchema = z.object({
  slug: z.string(),
  levelCode: levelCodeSchema,
  title: z.string(),
  description: z.string().optional(),
  order: z.number().int(),
  estimatedMinutes: z.number().int().optional().default(10),
  grammar: grammarContentSchema.optional(),
  vocabulary: z.array(vocabItemContentSchema).optional().default([]),
  passages: z.array(passageContentSchema).optional().default([]),
  questions: z.array(questionContentSchema).optional().default([]),
});
export type UnitContent = z.infer<typeof unitContentSchema>;
