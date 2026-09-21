import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-articles",
  levelCode: "A1",
  title: "Artículos: a / an / the",
  description: "Cuándo usar 'a', 'an', 'the' o ningún artículo en inglés.",
  order: 3,
  estimatedMinutes: 12,

  grammar: {
    title: "Artículos: a / an / the",
    explanationMd: `## a / an (artículo indefinido)

Se usan con sustantivos **contables en singular**, cuando hablamos de algo **no específico** (uno cualquiera, o la primera vez que lo mencionamos).

- **a** + palabra que empieza con **sonido de consonante**: *a book, a car, a university* (suena "yu-")
- **an** + palabra que empieza con **sonido de vocal**: *an apple, an hour* (la "h" no suena), *an umbrella*

## the (artículo definido)

Se usa cuando hablamos de algo **específico**, que ya conocemos o que ya mencionamos antes.

- *I have a dog. The dog is brown.* (la segunda vez ya es específico)
- Cosas únicas: *the sun, the moon, the internet*
- Cuando solo hay una: *the capital of France*

## Sin artículo

No se usa artículo con sustantivos **plurales o incontables** en general, ni con nombres propios, comidas o idiomas en general:

- *I like apples.* (no "the apples", hablamos de manzanas en general)
- *She speaks English.*
- *I drink coffee every morning.*`,
    examples: [
      { en: "I have a car.", es: "Tengo un carro." },
      { en: "She is an engineer.", es: "Ella es ingeniera." },
      { en: "The book on the table is mine.", es: "El libro en la mesa es mío." },
      { en: "I like dogs.", es: "Me gustan los perros." },
      { en: "He is an honest man.", es: "Él es un hombre honesto." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-art-apple",
      termEn: "apple",
      termEs: "manzana",
      exampleEn: "I eat an apple every day.",
      exampleEs: "Como una manzana cada día.",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a1-art-umbrella",
      termEn: "umbrella",
      termEs: "paraguas",
      exampleEn: "Take an umbrella, it's raining.",
      exampleEs: "Lleva un paraguas, está lloviendo.",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a1-art-engineer",
      termEn: "engineer",
      termEs: "ingeniero/a",
      exampleEn: "She is an engineer.",
      exampleEs: "Ella es ingeniera.",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a1-art-hour",
      termEn: "hour",
      termEs: "hora",
      exampleEn: "It takes an hour by bus.",
      exampleEs: "Toma una hora en bus.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a1-art-university",
      termEn: "university",
      termEs: "universidad",
      exampleEn: "He studies at a university.",
      exampleEs: "Él estudia en una universidad.",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a1-art-sun",
      termEn: "sun",
      termEs: "sol",
      exampleEn: "The sun is very bright today.",
      exampleEs: "El sol está muy brillante hoy.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-art-table",
      termEn: "table",
      termEs: "mesa",
      exampleEn: "The keys are on the table.",
      exampleEs: "Las llaves están sobre la mesa.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-art-orange",
      termEn: "orange",
      termEs: "naranja",
      exampleEn: "Can I have an orange, please?",
      exampleEs: "¿Me das una naranja, por favor?",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-art-idea",
      termEn: "idea",
      termEs: "idea",
      exampleEn: "That's a great idea.",
      exampleEs: "Esa es una gran idea.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-art-honest",
      termEn: "honest",
      termEs: "honesto/a",
      exampleEn: "He is an honest person.",
      exampleEs: "Él es una persona honesta.",
      partOfSpeech: "adjective",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-art-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I have ___ dog.",
      options: ["a", "an", "the"],
      correctAnswer: "a",
      explanation: "'Dog' empieza con sonido de consonante, así que usamos 'a'.",
      order: 1,
    },
    {
      slug: "a1-art-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "She is ___ engineer.",
      options: ["a", "an", "the"],
      correctAnswer: "an",
      explanation: "'Engineer' empieza con sonido de vocal, así que usamos 'an'.",
      order: 2,
    },
    {
      slug: "a1-art-q3",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "I have a cat. ___ cat is black. (ya es específico)",
      correctAnswer: "The",
      explanation: "La segunda vez que mencionamos algo específico, usamos 'the'.",
      order: 3,
    },
    {
      slug: "a1-art-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ sun is very hot today.",
      options: ["A", "An", "The"],
      correctAnswer: "The",
      explanation: "El sol es único, siempre lleva 'the'.",
      order: 4,
    },
    {
      slug: "a1-art-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "It takes ___ hour to get there.",
      options: ["a", "an", "the"],
      correctAnswer: "an",
      explanation: "'Hour' se pronuncia sin la 'h', empieza con sonido de vocal.",
      order: 5,
    },
    {
      slug: "a1-art-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Ella es una doctora excelente.'",
      correctAnswer: "She is an excellent doctor.",
      order: 6,
    },
    {
      slug: "a1-art-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'I like apples.'",
      correctAnswer: "Me gustan las manzanas.",
      order: 7,
    },
    {
      slug: "a1-art-q8",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I like ___ (en general, sin artículo).",
      options: ["dogs", "a dogs", "the dogs"],
      correctAnswer: "dogs",
      explanation: "Para hablar en general de algo plural, no se usa artículo.",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-art-reading-office",
      skill: "READING",
      title: "A New Job",
      bodyEn: `Maria has a new job. She is an accountant at a big company downtown.

On her first day, there is an orange on her desk — a small welcome gift from her team! The office has a kitchen, and the coffee is free.

Maria likes her new job. The people are friendly, and the work is interesting.`,
      order: 1,
      questions: [
        {
          slug: "a1-art-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What is Maria's job?",
          options: ["Engineer", "Accountant", "Teacher"],
          correctAnswer: "Accountant",
          order: 1,
        },
        {
          slug: "a1-art-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What gift is on her desk?",
          options: ["An apple", "An orange", "A book"],
          correctAnswer: "An orange",
          order: 2,
        },
        {
          slug: "a1-art-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Is the coffee free?",
          options: ["Yes", "No", "The text doesn't say"],
          correctAnswer: "Yes",
          order: 3,
        },
      ],
    },
  ],
};
