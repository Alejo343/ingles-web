import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-family",
  levelCode: "A1",
  title: "La familia",
  description: "Vocabulario de la familia y cómo describir a tus parientes.",
  order: 17,
  estimatedMinutes: 12,

  grammar: {
    title: "La familia",
    explanationMd: `## Miembros de la familia

La familia inmediata: *parents (padres), mother/mom, father/dad, siblings (hermanos en general), brother, sister, son, daughter.*

La familia extendida: *grandparents, grandmother/grandma, grandfather/grandpa, aunt (tía), uncle (tío), cousin (primo/a), niece (sobrina), nephew (sobrino).*

## Describir a la familia

Combina lo que ya sabes: **to be** + adjetivo, **have got** + característica, posesivos:

- *My mother is a doctor.*
- *I have got two brothers.*
- *My grandparents live in the countryside.*

## Singular y plural con "s"

*Cousin* es igual para hombre y mujer; *sibling* también es neutro (no dice si es hermano o hermana). Para el plural, se aplican las reglas normales: *brother → brothers, child → children.*

## "In-law" (familia política)

Se añade **-in-law** para la familia política: *mother-in-law (suegra), brother-in-law (cuñado).*`,
    examples: [
      { en: "I have two siblings: a brother and a sister.", es: "Tengo dos hermanos: un hermano y una hermana." },
      { en: "My grandparents live in the countryside.", es: "Mis abuelos viven en el campo." },
      { en: "Her uncle is a firefighter.", es: "Su tío es bombero." },
      { en: "We visit our cousins every summer.", es: "Visitamos a nuestros primos cada verano." },
      { en: "My mother-in-law is very kind.", es: "Mi suegra es muy amable." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-fam-parents2",
      termEn: "parents",
      termEs: "padres",
      exampleEn: "My parents live in Cali.",
      exampleEs: "Mis padres viven en Cali.",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a1-fam-siblings2",
      termEn: "siblings",
      termEs: "hermanos (en general)",
      exampleEn: "I have two siblings.",
      exampleEs: "Tengo dos hermanos.",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a1-fam-grandparents",
      termEn: "grandparents",
      termEs: "abuelos",
      exampleEn: "My grandparents live in the countryside.",
      exampleEs: "Mis abuelos viven en el campo.",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a1-fam-grandmother",
      termEn: "grandmother",
      termEs: "abuela",
      exampleEn: "My grandmother cooks amazing food.",
      exampleEs: "Mi abuela cocina una comida increíble.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a1-fam-aunt",
      termEn: "aunt",
      termEs: "tía",
      exampleEn: "My aunt lives in Spain.",
      exampleEs: "Mi tía vive en España.",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a1-fam-uncle",
      termEn: "uncle",
      termEs: "tío",
      exampleEn: "Her uncle is a firefighter.",
      exampleEs: "Su tío es bombero.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-fam-cousin",
      termEn: "cousin",
      termEs: "primo/a",
      exampleEn: "We visit our cousins every summer.",
      exampleEs: "Visitamos a nuestros primos cada verano.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-fam-son",
      termEn: "son",
      termEs: "hijo",
      exampleEn: "Their son is a doctor.",
      exampleEs: "Su hijo es doctor.",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-fam-daughter",
      termEn: "daughter",
      termEs: "hija",
      exampleEn: "My daughter is five years old.",
      exampleEs: "Mi hija tiene cinco años.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-fam-motherinlaw",
      termEn: "mother-in-law",
      termEs: "suegra",
      exampleEn: "My mother-in-law is very kind.",
      exampleEs: "Mi suegra es muy amable.",
      partOfSpeech: "noun",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-fam-q1",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'abuela' en inglés?",
      correctAnswer: "grandmother",
      order: 1,
    },
    {
      slug: "a1-fam-q2",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'tío' en inglés?",
      correctAnswer: "uncle",
      order: 2,
    },
    {
      slug: "a1-fam-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I have two ___. (hermanos en general)",
      options: ["sibling", "siblings", "brother"],
      correctAnswer: "siblings",
      order: 3,
    },
    {
      slug: "a1-fam-q4",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'primo/a' en inglés?",
      correctAnswer: "cousin",
      order: 4,
    },
    {
      slug: "a1-fam-q5",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "My ___ live in the countryside. (abuelos)",
      correctAnswer: "grandparents",
      order: 5,
    },
    {
      slug: "a1-fam-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Su tío es bombero.'",
      correctAnswer: "Her uncle is a firefighter.",
      order: 6,
    },
    {
      slug: "a1-fam-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'We visit our cousins every summer.'",
      correctAnswer: "Visitamos a nuestros primos cada verano.",
      order: 7,
    },
    {
      slug: "a1-fam-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'suegra' en inglés?",
      correctAnswer: "mother-in-law",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-fam-reading-reunion",
      skill: "READING",
      title: "A Family Reunion",
      bodyEn: `Every December, my whole family meets for a big reunion. My parents host the party at their house.

My grandparents are always the first to arrive. Then come my aunt and uncle with my three cousins. My brother and sister bring their children too, so there are a lot of kids running around!

My mother-in-law also joins us — she's part of the family now. We eat, talk, and laugh together for hours.`,
      order: 1,
      questions: [
        {
          slug: "a1-fam-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "When does the family meet?",
          options: ["Every December", "Every summer", "Every weekend"],
          correctAnswer: "Every December",
          order: 1,
        },
        {
          slug: "a1-fam-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Who arrives first?",
          options: ["The aunt and uncle", "The grandparents", "The cousins"],
          correctAnswer: "The grandparents",
          order: 2,
        },
        {
          slug: "a1-fam-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "How many cousins does the writer have?",
          options: ["Two", "Three", "Four"],
          correctAnswer: "Three",
          order: 3,
        },
      ],
    },
  ],
};
