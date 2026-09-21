import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a2-comparatives-superlatives",
  levelCode: "A2",
  title: "Comparativos y superlativos",
  description: "Comparar cosas y personas: más...que, el/la más...",
  order: 3,
  estimatedMinutes: 15,

  grammar: {
    title: "Comparativos y superlativos",
    explanationMd: `## Adjetivos cortos (1 sílaba, o 2 terminadas en -y)

| Adjetivo | Comparativo (+ than) | Superlativo (the +) |
|---|---|---|
| tall | tall**er** than | the tall**est** |
| big | big**ger** than (se dobla la consonante) | the big**gest** |
| happy | happ**ier** than (-y → -ier) | the happ**iest** |

## Adjetivos largos (2+ sílabas)

Se usa **more** / **the most** antes del adjetivo, sin cambiar la palabra:

- *This book is **more interesting** than that one.*
- *She is **the most intelligent** student in the class.*

## Irregulares

| Adjetivo | Comparativo | Superlativo |
|---|---|---|
| good | better | the best |
| bad | worse | the worst |
| far | farther/further | the farthest/furthest |

## Estructura

- Comparativo: *A + is + adjetivo-er/more + than + B*
- Superlativo: *A + is + the + adjetivo-est/most + (de un grupo)*

Ejemplos: *My car is faster than yours. This is the fastest car in the world.*`,
    examples: [
      { en: "My brother is taller than me.", es: "Mi hermano es más alto que yo." },
      { en: "This is the most expensive restaurant in the city.", es: "Este es el restaurante más caro de la ciudad." },
      { en: "Today is colder than yesterday.", es: "Hoy hace más frío que ayer." },
      { en: "She is the best student in the class.", es: "Ella es la mejor estudiante de la clase." },
      { en: "This exercise is easier than the last one.", es: "Este ejercicio es más fácil que el anterior." },
    ],
  },

  vocabulary: [
    {
      slug: "a2-cs-tall",
      termEn: "tall / taller / the tallest",
      termEs: "alto / más alto / el más alto",
      exampleEn: "My brother is taller than me.",
      exampleEs: "Mi hermano es más alto que yo.",
      partOfSpeech: "adjective",
      order: 1,
    },
    {
      slug: "a2-cs-fast",
      termEn: "fast / faster / the fastest",
      termEs: "rápido / más rápido / el más rápido",
      exampleEn: "This car is faster than that one.",
      exampleEs: "Este carro es más rápido que ese.",
      partOfSpeech: "adjective",
      order: 2,
    },
    {
      slug: "a2-cs-expensive",
      termEn: "expensive / more expensive / the most expensive",
      termEs: "caro / más caro / el más caro",
      exampleEn: "This restaurant is more expensive than that café.",
      exampleEs: "Este restaurante es más caro que ese café.",
      partOfSpeech: "adjective",
      order: 3,
    },
    {
      slug: "a2-cs-interesting",
      termEn: "interesting / more interesting / the most interesting",
      termEs: "interesante / más interesante / el más interesante",
      exampleEn: "This book is more interesting than the movie.",
      exampleEs: "Este libro es más interesante que la película.",
      partOfSpeech: "adjective",
      order: 4,
    },
    {
      slug: "a2-cs-good",
      termEn: "good / better / the best",
      termEs: "bueno / mejor / el mejor",
      exampleEn: "She is the best student in the class.",
      exampleEs: "Ella es la mejor estudiante de la clase.",
      partOfSpeech: "adjective",
      order: 5,
    },
    {
      slug: "a2-cs-bad",
      termEn: "bad / worse / the worst",
      termEs: "malo / peor / el peor",
      exampleEn: "This is the worst movie I've seen.",
      exampleEs: "Esta es la peor película que he visto.",
      partOfSpeech: "adjective",
      order: 6,
    },
    {
      slug: "a2-cs-easy",
      termEn: "easy / easier / the easiest",
      termEs: "fácil / más fácil / el más fácil",
      exampleEn: "This exercise is easier than the last one.",
      exampleEs: "Este ejercicio es más fácil que el anterior.",
      partOfSpeech: "adjective",
      order: 7,
    },
    {
      slug: "a2-cs-big",
      termEn: "big / bigger / the biggest",
      termEs: "grande / más grande / el más grande",
      exampleEn: "Their house is bigger than ours.",
      exampleEs: "Su casa es más grande que la nuestra.",
      partOfSpeech: "adjective",
      order: 8,
    },
    {
      slug: "a2-cs-cold",
      termEn: "cold / colder / the coldest",
      termEs: "frío / más frío / el más frío",
      exampleEn: "Today is colder than yesterday.",
      exampleEs: "Hoy hace más frío que ayer.",
      partOfSpeech: "adjective",
      order: 9,
    },
    {
      slug: "a2-cs-intelligent",
      termEn: "intelligent",
      termEs: "inteligente",
      exampleEn: "She is the most intelligent person I know.",
      exampleEs: "Ella es la persona más inteligente que conozco.",
      partOfSpeech: "adjective",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a2-cs-q1",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Comparativo de 'tall':",
      correctAnswer: "taller",
      order: 1,
    },
    {
      slug: "a2-cs-q2",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Superlativo de 'big':",
      correctAnswer: "the biggest",
      acceptableAnswers: ["biggest"],
      order: 2,
    },
    {
      slug: "a2-cs-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "This book is ___ than the movie. (interesting)",
      options: ["interestinger", "more interesting", "the most interesting"],
      correctAnswer: "more interesting",
      order: 3,
    },
    {
      slug: "a2-cs-q4",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Comparativo de 'good':",
      correctAnswer: "better",
      order: 4,
    },
    {
      slug: "a2-cs-q5",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Superlativo de 'happy':",
      correctAnswer: "the happiest",
      acceptableAnswers: ["happiest"],
      order: 5,
    },
    {
      slug: "a2-cs-q6",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "She is ___ student in the class. (the best / the goodest)",
      options: ["the best", "the goodest", "more good"],
      correctAnswer: "the best",
      order: 6,
    },
    {
      slug: "a2-cs-q7",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Mi hermano es más alto que yo.'",
      correctAnswer: "My brother is taller than me.",
      order: 7,
    },
    {
      slug: "a2-cs-q8",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'This is the most expensive restaurant in the city.'",
      correctAnswer: "Este es el restaurante más caro de la ciudad.",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a2-cs-reading-cities",
      skill: "READING",
      title: "Two Cities",
      bodyEn: `Bogotá and Medellín are both great Colombian cities, but they are very different.

Bogotá is bigger than Medellín, and it's the capital of the country. The weather in Bogotá is colder than in Medellín, especially at night.

Many people say Medellín has the best weather in Colombia — it's warmer and sunnier most of the year. Bogotá, however, has more museums and is more expensive to live in.

Which city is better? It depends on what you're looking for!`,
      order: 1,
      questions: [
        {
          slug: "a2-cs-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Which city is bigger?",
          options: ["Bogotá", "Medellín", "They are the same size"],
          correctAnswer: "Bogotá",
          order: 1,
        },
        {
          slug: "a2-cs-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Which city has better weather, according to many people?",
          options: ["Bogotá", "Medellín", "The text doesn't say"],
          correctAnswer: "Medellín",
          order: 2,
        },
        {
          slug: "a2-cs-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Which city is more expensive to live in?",
          options: ["Bogotá", "Medellín", "They cost the same"],
          correctAnswer: "Bogotá",
          order: 3,
        },
      ],
    },
  ],
};
