import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-likes-preferences",
  levelCode: "A1",
  title: "Gustos y preferencias",
  description: "Cómo decir lo que te gusta, no te gusta y prefieres, usando el verbo + -ing.",
  order: 24,
  estimatedMinutes: 12,

  grammar: {
    title: "Gustos y preferencias",
    explanationMd: `## Verbos de gusto

**like, love, hate, don't like** + sustantivo o verbo-ing.

- *I like coffee.* (sustantivo)
- *I like reading.* (verbo + -ing, no "to read")
- *She loves dancing.*
- *He hates cleaning.*
- *I don't like spicy food.*

## Con tercera persona (he/she/it)

No olvides la **-s**: *She likes music. He loves swimming.*

## Preferir: "prefer"

- *I prefer tea to coffee.* (Prefiero el té al café.)
- *Do you prefer summer or winter?*

## Preguntar sobre gustos

- *Do you like pizza?* — *Yes, I love it! / No, I don't like it.*
- *What kind of music do you like?*

## "Would like" para pedir algo (distinto de "like")

Recuerda: *I like coffee* (me gusta el café en general) es diferente de *I'd like a coffee* (quiero pedir un café ahora) — ya viste esto en la unidad de comida.`,
    examples: [
      { en: "I like reading books.", es: "Me gusta leer libros." },
      { en: "She loves dancing.", es: "A ella le encanta bailar." },
      { en: "He hates cleaning the house.", es: "Él odia limpiar la casa." },
      { en: "I prefer tea to coffee.", es: "Prefiero el té al café." },
      { en: "Do you like pizza? Yes, I love it!", es: "¿Te gusta la pizza? ¡Sí, me encanta!" },
    ],
  },

  vocabulary: [
    {
      slug: "a1-like-love",
      termEn: "to love",
      termEs: "encantar / amar",
      exampleEn: "She loves dancing.",
      exampleEs: "A ella le encanta bailar.",
      partOfSpeech: "verb",
      order: 1,
    },
    {
      slug: "a1-like-hate",
      termEn: "to hate",
      termEs: "odiar",
      exampleEn: "He hates cleaning the house.",
      exampleEs: "Él odia limpiar la casa.",
      partOfSpeech: "verb",
      order: 2,
    },
    {
      slug: "a1-like-prefer",
      termEn: "to prefer",
      termEs: "preferir",
      exampleEn: "I prefer tea to coffee.",
      exampleEs: "Prefiero el té al café.",
      partOfSpeech: "verb",
      order: 3,
    },
    {
      slug: "a1-like-reading",
      termEn: "reading",
      termEs: "leer / la lectura",
      exampleEn: "I like reading books.",
      exampleEs: "Me gusta leer libros.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a1-like-dancing",
      termEn: "dancing",
      termEs: "bailar / el baile",
      exampleEn: "She loves dancing.",
      exampleEs: "A ella le encanta bailar.",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a1-like-swimming",
      termEn: "swimming",
      termEs: "nadar / la natación",
      exampleEn: "He loves swimming.",
      exampleEs: "A él le encanta nadar.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-like-cooking",
      termEn: "cooking",
      termEs: "cocinar",
      exampleEn: "I don't like cooking.",
      exampleEs: "No me gusta cocinar.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-like-music",
      termEn: "music",
      termEs: "música",
      exampleEn: "What kind of music do you like?",
      exampleEs: "¿Qué tipo de música te gusta?",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-like-watchingmovies",
      termEn: "watching movies",
      termEs: "ver películas",
      exampleEn: "We like watching movies on weekends.",
      exampleEs: "Nos gusta ver películas los fines de semana.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-like-favorite",
      termEn: "favorite",
      termEs: "favorito/a",
      exampleEn: "What's your favorite color?",
      exampleEs: "¿Cuál es tu color favorito?",
      partOfSpeech: "adjective",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-like-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I like ___ books. (verbo + -ing)",
      options: ["read", "reading", "to reading"],
      correctAnswer: "reading",
      order: 1,
    },
    {
      slug: "a1-like-q2",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "She ___ (love) dancing. (tercera persona)",
      correctAnswer: "loves",
      order: 2,
    },
    {
      slug: "a1-like-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I prefer tea ___ coffee.",
      options: ["than", "to", "that"],
      correctAnswer: "to",
      order: 3,
    },
    {
      slug: "a1-like-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ you like pizza?",
      options: ["Do", "Does", "Are"],
      correctAnswer: "Do",
      order: 4,
    },
    {
      slug: "a1-like-q5",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'odiar' en inglés?",
      correctAnswer: "to hate",
      acceptableAnswers: ["hate"],
      order: 5,
    },
    {
      slug: "a1-like-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'A él le encanta nadar.'",
      correctAnswer: "He loves swimming.",
      order: 6,
    },
    {
      slug: "a1-like-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'What's your favorite color?'",
      correctAnswer: "¿Cuál es tu color favorito?",
      order: 7,
    },
    {
      slug: "a1-like-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'preferir' en inglés?",
      correctAnswer: "to prefer",
      acceptableAnswers: ["prefer"],
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-like-reading-hobbies",
      skill: "READING",
      title: "My Family's Hobbies",
      bodyEn: `Everyone in my family likes different things. I love reading and watching movies. My brother prefers sports — he loves swimming and playing football.

My mother likes cooking, but she hates cleaning the kitchen afterward! My father's favorite hobby is gardening; he spends hours in the garden every weekend.

Do you like any of these hobbies? What's your favorite thing to do in your free time?`,
      order: 1,
      questions: [
        {
          slug: "a1-like-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What does the writer love?",
          options: [
            "Reading and watching movies",
            "Cooking",
            "Gardening",
          ],
          correctAnswer: "Reading and watching movies",
          order: 1,
        },
        {
          slug: "a1-like-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What does the mother hate?",
          options: [
            "Cooking",
            "Cleaning the kitchen",
            "Swimming",
          ],
          correctAnswer: "Cleaning the kitchen",
          order: 2,
        },
        {
          slug: "a1-like-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What is the father's favorite hobby?",
          options: ["Football", "Gardening", "Reading"],
          correctAnswer: "Gardening",
          order: 3,
        },
      ],
    },
  ],
};
