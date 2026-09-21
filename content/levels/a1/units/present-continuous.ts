import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-present-continuous",
  levelCode: "A1",
  title: "Presente continuo",
  description: "Hablar de acciones que están pasando ahora mismo: am/is/are + verbo-ing.",
  order: 11,
  estimatedMinutes: 15,

  grammar: {
    title: "Presente continuo (Present Continuous)",
    explanationMd: `Se usa para hablar de acciones que están pasando **en este momento** o alrededor de este momento (no necesariamente en el segundo exacto).

## Estructura

**am/is/are + verbo-ing**

| Pronombre | Forma |
|---|---|
| I | am watching |
| he/she/it | is watching |
| you/we/they | are watching |

- *I am reading a book right now.*
- *She is cooking dinner.*
- *They are playing football.*

## Negativo y preguntas

- *I am not working today.* (I'm not)
- *She isn't studying.*
- *Are you listening?* — *Yes, I am. / No, I'm not.*

## Reglas para el -ing

| Verbo | -ing |
|---|---|
| play → | playing |
| e final muda → se quita la e | make → making |
| consonante + vocal + consonante (1 sílaba) → se dobla | run → running, sit → sitting |
| terminado en -ie → -ying | lie → lying |

## Present Simple vs. Present Continuous

- **Present Simple**: rutinas y hechos generales → *I work every day.*
- **Present Continuous**: ahora mismo, o algo temporal → *I am working right now.*`,
    examples: [
      { en: "I am studying English right now.", es: "Estoy estudiando inglés ahora mismo." },
      { en: "She is cooking dinner.", es: "Ella está cocinando la cena." },
      { en: "They aren't listening to music.", es: "Ellos no están escuchando música." },
      { en: "What are you doing?", es: "¿Qué estás haciendo?" },
      { en: "He is writing an email.", es: "Él está escribiendo un correo." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-pc-read",
      termEn: "to read",
      termEs: "leer",
      exampleEn: "I am reading a book.",
      exampleEs: "Estoy leyendo un libro.",
      partOfSpeech: "verb",
      order: 1,
    },
    {
      slug: "a1-pc-write",
      termEn: "to write",
      termEs: "escribir",
      exampleEn: "He is writing an email.",
      exampleEs: "Él está escribiendo un correo.",
      partOfSpeech: "verb",
      order: 2,
    },
    {
      slug: "a1-pc-listen",
      termEn: "to listen",
      termEs: "escuchar",
      exampleEn: "We are listening to music.",
      exampleEs: "Estamos escuchando música.",
      partOfSpeech: "verb",
      order: 3,
    },
    {
      slug: "a1-pc-run",
      termEn: "to run",
      termEs: "correr",
      exampleEn: "She is running in the park.",
      exampleEs: "Ella está corriendo en el parque.",
      partOfSpeech: "verb",
      order: 4,
    },
    {
      slug: "a1-pc-wait",
      termEn: "to wait",
      termEs: "esperar",
      exampleEn: "I am waiting for the bus.",
      exampleEs: "Estoy esperando el bus.",
      partOfSpeech: "verb",
      order: 5,
    },
    {
      slug: "a1-pc-cook",
      termEn: "to cook",
      termEs: "cocinar",
      exampleEn: "They are cooking dinner.",
      exampleEs: "Ellos están cocinando la cena.",
      partOfSpeech: "verb",
      order: 6,
    },
    {
      slug: "a1-pc-rain",
      termEn: "to rain",
      termEs: "llover",
      exampleEn: "It's raining right now.",
      exampleEs: "Está lloviendo ahora mismo.",
      partOfSpeech: "verb",
      order: 7,
    },
    {
      slug: "a1-pc-sleep",
      termEn: "to sleep",
      termEs: "dormir",
      exampleEn: "The baby is sleeping.",
      exampleEs: "El bebé está durmiendo.",
      partOfSpeech: "verb",
      order: 8,
    },
    {
      slug: "a1-pc-talk",
      termEn: "to talk",
      termEs: "hablar / conversar",
      exampleEn: "They are talking on the phone.",
      exampleEs: "Ellos están hablando por teléfono.",
      partOfSpeech: "verb",
      order: 9,
    },
    {
      slug: "a1-pc-rightnow",
      termEn: "right now",
      termEs: "ahora mismo",
      exampleEn: "I'm busy right now.",
      exampleEs: "Estoy ocupado ahora mismo.",
      partOfSpeech: "adverb",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-pc-q1",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "I ___ (read) a book right now.",
      correctAnswer: "am reading",
      order: 1,
    },
    {
      slug: "a1-pc-q2",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "She ___ (cook) dinner.",
      correctAnswer: "is cooking",
      order: 2,
    },
    {
      slug: "a1-pc-q3",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "They ___ (not / listen) to music.",
      correctAnswer: "aren't listening",
      order: 3,
    },
    {
      slug: "a1-pc-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "What ___ you doing?",
      options: ["is", "are", "am"],
      correctAnswer: "are",
      order: 4,
    },
    {
      slug: "a1-pc-q5",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Escribe la forma -ing de 'run'.",
      correctAnswer: "running",
      explanation: "Verbo de una sílaba, consonante-vocal-consonante: se dobla la última letra.",
      order: 5,
    },
    {
      slug: "a1-pc-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Está lloviendo ahora mismo.'",
      correctAnswer: "It's raining right now.",
      acceptableAnswers: ["It is raining right now"],
      order: 6,
    },
    {
      slug: "a1-pc-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'He is writing an email.'",
      correctAnswer: "Él está escribiendo un correo.",
      order: 7,
    },
    {
      slug: "a1-pc-q8",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I work every day. / I ___ working right now. (contraste con present simple)",
      options: ["work", "am", "is"],
      correctAnswer: "am",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-pc-reading-saturday",
      skill: "READING",
      title: "A Busy Saturday",
      bodyEn: `It's Saturday morning. In my house, everyone is doing something different.

My mother is cooking breakfast in the kitchen. My father is reading the newspaper. My little sister is watching cartoons, and my brother is talking on the phone with his friends.

I am writing this text and listening to music at the same time! What are you doing right now?`,
      order: 1,
      questions: [
        {
          slug: "a1-pc-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What is the mother doing?",
          options: ["Reading", "Cooking breakfast", "Watching cartoons"],
          correctAnswer: "Cooking breakfast",
          order: 1,
        },
        {
          slug: "a1-pc-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Who is talking on the phone?",
          options: ["The father", "The sister", "The brother"],
          correctAnswer: "The brother",
          order: 2,
        },
        {
          slug: "a1-pc-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What is the writer doing?",
          options: [
            "Cooking and reading",
            "Writing and listening to music",
            "Watching cartoons",
          ],
          correctAnswer: "Writing and listening to music",
          order: 3,
        },
      ],
    },
  ],
};
