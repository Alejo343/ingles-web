import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a2-past-simple-be",
  levelCode: "A2",
  title: "Pasado simple: was / were",
  description: "El pasado del verbo to be, para hablar de cómo eran las cosas antes.",
  order: 1,
  estimatedMinutes: 12,

  grammar: {
    title: "Was / Were (pasado de to be)",
    explanationMd: `**Was** y **were** son el pasado de *am/is/are*.

| Presente | Pasado |
|---|---|
| I am | I **was** |
| he/she/it is | he/she/it **was** |
| you/we/they are | you/we/they **were** |

## Afirmativo

- *I was tired yesterday.*
- *They were at home last night.*

## Negativo

- *I wasn't ready.* (was not)
- *We weren't happy with the result.* (were not)

## Preguntas

- *Was she at the party?* — *Yes, she was. / No, she wasn't.*
- *Were you at work yesterday?* — *Yes, I was. / No, I wasn't.*

## Expresiones de tiempo pasado comunes

*yesterday, last night, last week, last year, two days ago, in 2020*`,
    examples: [
      { en: "I was at school yesterday.", es: "Ayer estuve en la escuela." },
      { en: "She wasn't happy with her job.", es: "Ella no estaba contenta con su trabajo." },
      { en: "Were you at the meeting?", es: "¿Estuviste en la reunión?" },
      { en: "They were on vacation last week.", es: "Ellos estuvieron de vacaciones la semana pasada." },
      { en: "It was very cold last winter.", es: "Hizo mucho frío el invierno pasado." },
    ],
  },

  vocabulary: [
    {
      slug: "a2-wb-yesterday",
      termEn: "yesterday",
      termEs: "ayer",
      exampleEn: "I was at school yesterday.",
      exampleEs: "Ayer estuve en la escuela.",
      partOfSpeech: "adverb",
      order: 1,
    },
    {
      slug: "a2-wb-lastnight",
      termEn: "last night",
      termEs: "anoche",
      exampleEn: "They were at the cinema last night.",
      exampleEs: "Ellos estuvieron en el cine anoche.",
      partOfSpeech: "adverb",
      order: 2,
    },
    {
      slug: "a2-wb-lastweek",
      termEn: "last week",
      termEs: "la semana pasada",
      exampleEn: "We were on vacation last week.",
      exampleEs: "Estuvimos de vacaciones la semana pasada.",
      partOfSpeech: "adverb",
      order: 3,
    },
    {
      slug: "a2-wb-vacation",
      termEn: "vacation",
      termEs: "vacaciones",
      exampleEn: "Our vacation was amazing.",
      exampleEs: "Nuestras vacaciones fueron increíbles.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a2-wb-meeting",
      termEn: "meeting",
      termEs: "reunión",
      exampleEn: "Were you at the meeting this morning?",
      exampleEs: "¿Estuviste en la reunión esta mañana?",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a2-wb-party",
      termEn: "party",
      termEs: "fiesta",
      exampleEn: "The party was a lot of fun.",
      exampleEs: "La fiesta fue muy divertida.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a2-wb-tired",
      termEn: "tired",
      termEs: "cansado/a",
      exampleEn: "I was very tired after work.",
      exampleEs: "Estaba muy cansado después del trabajo.",
      partOfSpeech: "adjective",
      order: 7,
    },
    {
      slug: "a2-wb-agoword",
      termEn: "ago",
      termEs: "hace (tiempo)",
      exampleEn: "She was here two days ago.",
      exampleEs: "Ella estuvo aquí hace dos días.",
      partOfSpeech: "adverb",
      order: 8,
    },
    {
      slug: "a2-wb-result",
      termEn: "result",
      termEs: "resultado",
      exampleEn: "We weren't happy with the result.",
      exampleEs: "No estuvimos contentos con el resultado.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a2-wb-childhood",
      termEn: "childhood",
      termEs: "infancia",
      exampleEn: "My childhood was very happy.",
      exampleEs: "Mi infancia fue muy feliz.",
      partOfSpeech: "noun",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a2-wb-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I ___ at home yesterday.",
      options: ["was", "were", "am"],
      correctAnswer: "was",
      order: 1,
    },
    {
      slug: "a2-wb-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "They ___ at the party last night.",
      options: ["was", "were", "are"],
      correctAnswer: "were",
      order: 2,
    },
    {
      slug: "a2-wb-q3",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "She ___ happy with her job. (negativo)",
      correctAnswer: "wasn't",
      order: 3,
    },
    {
      slug: "a2-wb-q4",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "We ___ ready for the exam. (negativo, plural)",
      correctAnswer: "weren't",
      order: 4,
    },
    {
      slug: "a2-wb-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ you at the meeting?",
      options: ["Was", "Were", "Did"],
      correctAnswer: "Were",
      order: 5,
    },
    {
      slug: "a2-wb-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Ayer estuve muy cansado.'",
      correctAnswer: "I was very tired yesterday.",
      order: 6,
    },
    {
      slug: "a2-wb-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Were you at work yesterday?'",
      correctAnswer: "¿Estuviste en el trabajo ayer?",
      order: 7,
    },
    {
      slug: "a2-wb-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'infancia' en inglés?",
      correctAnswer: "childhood",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a2-wb-reading-trip",
      skill: "READING",
      title: "Our Trip to the Coast",
      bodyEn: `Last week, my family and I were on vacation at the coast. The weather was perfect — it wasn't too hot or too cold.

We were at the beach every morning, and in the afternoon we were usually at the pool. My brother wasn't happy on the first day because it was a bit windy, but the rest of the week was great.

Was it a good vacation? Yes, it was one of the best!`,
      order: 1,
      questions: [
        {
          slug: "a2-wb-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "How was the weather during the trip?",
          options: ["Perfect", "Too hot", "Too cold"],
          correctAnswer: "Perfect",
          order: 1,
        },
        {
          slug: "a2-wb-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Why wasn't the brother happy on the first day?",
          options: ["It was raining", "It was windy", "It was too hot"],
          correctAnswer: "It was windy",
          order: 2,
        },
        {
          slug: "a2-wb-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Where were they every morning?",
          options: ["At the pool", "At the beach", "At home"],
          correctAnswer: "At the beach",
          order: 3,
        },
      ],
    },
  ],
};
