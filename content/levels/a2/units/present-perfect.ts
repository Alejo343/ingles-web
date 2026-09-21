import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a2-present-perfect",
  levelCode: "A2",
  title: "Presente perfecto (introducción)",
  description: "Have/has + participio, para hablar de experiencias con ever, never, already, yet, just, for y since.",
  order: 10,
  estimatedMinutes: 20,

  grammar: {
    title: "Presente perfecto: have/has + participio",
    explanationMd: `El presente perfecto conecta el pasado con el presente. En A2 nos enfocamos en su uso para hablar de **experiencias de vida** (sin decir cuándo exactamente pasaron).

## Estructura

**have/has + participio pasado (past participle)**

| Pronombre | Forma |
|---|---|
| I/you/we/they | have + participio |
| he/she/it | has + participio |

- Verbos regulares: participio = infinitivo + **-ed** (igual que el pasado simple): *worked, studied*
- Verbos irregulares: tienen su propia forma de participio, hay que memorizarla: *go → gone, see → seen, eat → eaten, do → done, have → had, write → written*

## Ever / Never (experiencias)

- *Have you **ever** been to Japan?* (¿Alguna vez has estado en Japón?) — *Yes, I have. / No, I haven't.*
- *I have **never** eaten sushi.* (Nunca he comido sushi.)

## Already / Yet

- **already** (ya) — en frases afirmativas: *I have already finished my homework.*
- **yet** (todavía / ya) — en negativas y preguntas, al final de la frase: *I haven't finished yet. Have you finished yet?*

## Just (acción muy reciente)

**Just** indica que algo pasó hace muy poco tiempo. Va entre "have/has" y el participio:

- *I have **just** finished my homework.* (Acabo de terminar mi tarea.)
- *She has **just** arrived.* (Ella acaba de llegar.)

## For / Since (duración)

Se usan para decir **cuánto tiempo lleva** pasando algo que empezó en el pasado y sigue en el presente.

- **for** + un **periodo** de tiempo: *for two years, for a long time, for five minutes*
- **since** + un **punto** específico en el tiempo: *since 2020, since Monday, since I was a child*

Ejemplos:

- *I have lived here **for** three years.* (Llevo viviendo aquí tres años.)
- *I have lived here **since** 2021.* (Vivo aquí desde 2021.)
- *How long have you known her?* — *I've known her **for** ten years.*

## Present Perfect vs. Past Simple

- **Present Perfect**: no importa cuándo, solo que pasó alguna vez, o una situación que continúa → *I have visited Paris. I have lived here for three years.*
- **Past Simple**: momento específico del pasado, ya terminado → *I visited Paris in 2019.*`,
    examples: [
      { en: "Have you ever been to Europe?", es: "¿Alguna vez has estado en Europa?" },
      { en: "I have never tried Thai food.", es: "Nunca he probado la comida tailandesa." },
      { en: "She has already finished the report.", es: "Ella ya terminó el informe." },
      { en: "We haven't seen that movie yet.", es: "Todavía no hemos visto esa película." },
      { en: "He has lived in three different countries.", es: "Él ha vivido en tres países diferentes." },
      { en: "I have just finished my homework.", es: "Acabo de terminar mi tarea." },
      { en: "I have lived here for three years.", es: "Llevo viviendo aquí tres años." },
      { en: "I have lived here since 2021.", es: "Vivo aquí desde 2021." },
    ],
  },

  vocabulary: [
    {
      slug: "a2-pp-been",
      termEn: "to be / been",
      termEs: "ser/estar / participio",
      exampleEn: "Have you ever been to Japan?",
      exampleEs: "¿Alguna vez has estado en Japón?",
      partOfSpeech: "verb",
      order: 1,
    },
    {
      slug: "a2-pp-tried",
      termEn: "to try / tried",
      termEs: "probar / probado",
      exampleEn: "I have never tried Thai food.",
      exampleEs: "Nunca he probado la comida tailandesa.",
      partOfSpeech: "verb",
      order: 2,
    },
    {
      slug: "a2-pp-seen",
      termEn: "to see / seen",
      termEs: "ver / visto",
      exampleEn: "We haven't seen that movie yet.",
      exampleEs: "Todavía no hemos visto esa película.",
      partOfSpeech: "verb",
      order: 3,
    },
    {
      slug: "a2-pp-finished",
      termEn: "to finish / finished",
      termEs: "terminar / terminado",
      exampleEn: "She has already finished the report.",
      exampleEs: "Ella ya terminó el informe.",
      partOfSpeech: "verb",
      order: 4,
    },
    {
      slug: "a2-pp-lived",
      termEn: "to live / lived",
      termEs: "vivir / vivido",
      exampleEn: "He has lived in three countries.",
      exampleEs: "Él ha vivido en tres países.",
      partOfSpeech: "verb",
      order: 5,
    },
    {
      slug: "a2-pp-eaten",
      termEn: "to eat / eaten",
      termEs: "comer / comido",
      exampleEn: "Have you ever eaten sushi?",
      exampleEs: "¿Alguna vez has comido sushi?",
      partOfSpeech: "verb",
      order: 6,
    },
    {
      slug: "a2-pp-read2",
      termEn: "to read / read",
      termEs: "leer / leído",
      exampleEn: "I have already read that book.",
      exampleEs: "Ya leí ese libro.",
      partOfSpeech: "verb",
      order: 7,
    },
    {
      slug: "a2-pp-met",
      termEn: "to meet / met",
      termEs: "conocer / conocido",
      exampleEn: "I have never met him in person.",
      exampleEs: "Nunca lo he conocido en persona.",
      partOfSpeech: "verb",
      order: 8,
    },
    {
      slug: "a2-pp-experience",
      termEn: "experience",
      termEs: "experiencia",
      exampleEn: "It was an amazing experience.",
      exampleEs: "Fue una experiencia increíble.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a2-pp-yet",
      termEn: "yet",
      termEs: "todavía / ya (en negativas/preguntas)",
      exampleEn: "Have you finished yet?",
      exampleEs: "¿Ya terminaste?",
      partOfSpeech: "adverb",
      order: 10,
    },
    {
      slug: "a2-pp-just",
      termEn: "just",
      termEs: "acabar de / recién",
      exampleEn: "I have just finished my homework.",
      exampleEs: "Acabo de terminar mi tarea.",
      partOfSpeech: "adverb",
      order: 11,
    },
    {
      slug: "a2-pp-for",
      termEn: "for (+ periodo)",
      termEs: "durante / desde hace",
      exampleEn: "I have lived here for three years.",
      exampleEs: "Llevo viviendo aquí tres años.",
      partOfSpeech: "preposition",
      order: 12,
    },
    {
      slug: "a2-pp-since",
      termEn: "since (+ punto en el tiempo)",
      termEs: "desde",
      exampleEn: "I have lived here since 2021.",
      exampleEs: "Vivo aquí desde 2021.",
      partOfSpeech: "preposition",
      order: 13,
    },
  ],

  questions: [
    {
      slug: "a2-pp-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ you ever been to Europe?",
      options: ["Have", "Has", "Did"],
      correctAnswer: "Have",
      order: 1,
    },
    {
      slug: "a2-pp-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "She ___ already finished the report.",
      options: ["have", "has", "is"],
      correctAnswer: "has",
      order: 2,
    },
    {
      slug: "a2-pp-q3",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Escribe el participio de 'go'.",
      correctAnswer: "gone",
      order: 3,
    },
    {
      slug: "a2-pp-q4",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Escribe el participio de 'eat'.",
      correctAnswer: "eaten",
      order: 4,
    },
    {
      slug: "a2-pp-q5",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "I have ___ tried Thai food. (nunca)",
      correctAnswer: "never",
      order: 5,
    },
    {
      slug: "a2-pp-q6",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "We haven't seen that movie ___.",
      options: ["already", "yet", "ever"],
      correctAnswer: "yet",
      order: 6,
    },
    {
      slug: "a2-pp-q7",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Ella ya terminó el informe.'",
      correctAnswer: "She has already finished the report.",
      order: 7,
    },
    {
      slug: "a2-pp-q8",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Have you ever eaten sushi?'",
      correctAnswer: "¿Alguna vez has comido sushi?",
      order: 8,
    },
    {
      slug: "a2-pp-q9",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I have lived here ___ three years. (periodo de tiempo)",
      options: ["for", "since", "just"],
      correctAnswer: "for",
      order: 9,
    },
    {
      slug: "a2-pp-q10",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I have lived here ___ 2021. (punto específico en el tiempo)",
      options: ["for", "since", "ever"],
      correctAnswer: "since",
      order: 10,
    },
    {
      slug: "a2-pp-q11",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "She has ___ arrived. (acción muy reciente)",
      correctAnswer: "just",
      order: 11,
    },
  ],

  passages: [
    {
      slug: "a2-pp-reading-travel",
      skill: "READING",
      title: "Places I Have Visited",
      bodyEn: `I love traveling. I have visited ten countries so far. I have been to Mexico, Peru, and Spain, but I have never been to Asia.

Last year, my sister asked me, "Have you ever tried Japanese food?" I said, "Yes, I have! I've eaten sushi many times." But I haven't tried Thai food yet — I really want to!

My goal for next year is simple: I want to visit a country in Asia for the first time.`,
      order: 1,
      questions: [
        {
          slug: "a2-pp-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "How many countries has the writer visited?",
          options: ["Five", "Ten", "Three"],
          correctAnswer: "Ten",
          order: 1,
        },
        {
          slug: "a2-pp-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Has the writer tried Thai food?",
          options: ["Yes, many times", "No, not yet", "The text doesn't say"],
          correctAnswer: "No, not yet",
          order: 2,
        },
        {
          slug: "a2-pp-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What is the writer's goal for next year?",
          options: [
            "Learn Japanese",
            "Visit a country in Asia",
            "Try Thai food",
          ],
          correctAnswer: "Visit a country in Asia",
          order: 3,
        },
      ],
    },
  ],
};
