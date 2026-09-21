import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a2-past-simple-verbs",
  levelCode: "A2",
  title: "Pasado simple: verbos regulares e irregulares",
  description: "Cómo formar el pasado de los verbos y contar lo que hiciste ayer.",
  order: 2,
  estimatedMinutes: 18,

  grammar: {
    title: "Pasado simple de verbos (regulares e irregulares)",
    explanationMd: `## Verbos regulares: + ed

- work → work**ed**
- play → play**ed**
- e final → solo se añade **d**: live → live**d**
- consonante + y → **-y → -ied**: study → stud**ied**
- consonante-vocal-consonante (1 sílaba) → se dobla: stop → stop**ped**

Esta forma es **igual para todos los pronombres**: *I worked, she worked, they worked.*

## Verbos irregulares

No siguen ninguna regla — hay que memorizarlos. Algunos muy comunes:

| Infinitivo | Pasado |
|---|---|
| go | went |
| have | had |
| do | did |
| see | saw |
| eat | ate |
| get | got |
| make | made |
| take | took |
| come | came |
| write | wrote |

## Negativo y preguntas

Con **didn't** + verbo en infinitivo (¡sin -ed ni forma irregular!):

- *I didn't work yesterday.*
- *She didn't go to the party.*

Preguntas con **did**:

- *Did you go to the party?* — *Yes, I did. / No, I didn't.*
- *Did she see the movie?* — *Yes, she did. / No, she didn't.*`,
    examples: [
      { en: "I worked late last night.", es: "Trabajé hasta tarde anoche." },
      { en: "She went to Mexico last year.", es: "Ella fue a México el año pasado." },
      { en: "We didn't have time to eat.", es: "No tuvimos tiempo de comer." },
      { en: "Did you see that movie?", es: "¿Viste esa película?" },
      { en: "They made a delicious dinner.", es: "Ellos hicieron una cena deliciosa." },
    ],
  },

  vocabulary: [
    {
      slug: "a2-pv-go-went",
      termEn: "go / went",
      termEs: "ir / fue",
      exampleEn: "She went to Mexico last year.",
      exampleEs: "Ella fue a México el año pasado.",
      partOfSpeech: "verb",
      order: 1,
    },
    {
      slug: "a2-pv-see-saw",
      termEn: "see / saw",
      termEs: "ver / vio",
      exampleEn: "Did you see that movie?",
      exampleEs: "¿Viste esa película?",
      partOfSpeech: "verb",
      order: 2,
    },
    {
      slug: "a2-pv-eat-ate",
      termEn: "eat / ate",
      termEs: "comer / comió",
      exampleEn: "We ate pizza last night.",
      exampleEs: "Comimos pizza anoche.",
      partOfSpeech: "verb",
      order: 3,
    },
    {
      slug: "a2-pv-make-made",
      termEn: "make / made",
      termEs: "hacer / hizo",
      exampleEn: "They made a delicious dinner.",
      exampleEs: "Ellos hicieron una cena deliciosa.",
      partOfSpeech: "verb",
      order: 4,
    },
    {
      slug: "a2-pv-take-took",
      termEn: "take / took",
      termEs: "tomar/llevar / tomó",
      exampleEn: "He took the bus to work.",
      exampleEs: "Él tomó el bus al trabajo.",
      partOfSpeech: "verb",
      order: 5,
    },
    {
      slug: "a2-pv-write-wrote",
      termEn: "write / wrote",
      termEs: "escribir / escribió",
      exampleEn: "I wrote an email this morning.",
      exampleEs: "Escribí un correo esta mañana.",
      partOfSpeech: "verb",
      order: 6,
    },
    {
      slug: "a2-pv-study-studied",
      termEn: "study / studied",
      termEs: "estudiar / estudió",
      exampleEn: "She studied for three hours.",
      exampleEs: "Ella estudió durante tres horas.",
      partOfSpeech: "verb",
      order: 7,
    },
    {
      slug: "a2-pv-arrive-arrived",
      termEn: "arrive / arrived",
      termEs: "llegar / llegó",
      exampleEn: "We arrived late to the airport.",
      exampleEs: "Llegamos tarde al aeropuerto.",
      partOfSpeech: "verb",
      order: 8,
    },
    {
      slug: "a2-pv-buy-bought",
      termEn: "buy / bought",
      termEs: "comprar / compró",
      exampleEn: "I bought a new phone.",
      exampleEs: "Compré un teléfono nuevo.",
      partOfSpeech: "verb",
      order: 9,
    },
    {
      slug: "a2-pv-have-had",
      termEn: "have / had",
      termEs: "tener / tuvo",
      exampleEn: "We didn't have time to eat.",
      exampleEs: "No tuvimos tiempo de comer.",
      partOfSpeech: "verb",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a2-pv-q1",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Escribe el pasado de 'go'.",
      correctAnswer: "went",
      order: 1,
    },
    {
      slug: "a2-pv-q2",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Escribe el pasado de 'study'.",
      correctAnswer: "studied",
      order: 2,
    },
    {
      slug: "a2-pv-q3",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Escribe el pasado de 'work' (regular).",
      correctAnswer: "worked",
      order: 3,
    },
    {
      slug: "a2-pv-q4",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "I ___ (not / have) time to eat.",
      correctAnswer: "didn't have",
      order: 4,
    },
    {
      slug: "a2-pv-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ you see that movie?",
      options: ["Do", "Did", "Were"],
      correctAnswer: "Did",
      order: 5,
    },
    {
      slug: "a2-pv-q6",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "She ___ to the party yesterday. (irregular: go)",
      options: ["goed", "went", "go"],
      correctAnswer: "went",
      order: 6,
    },
    {
      slug: "a2-pv-q7",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Compré un teléfono nuevo ayer.'",
      correctAnswer: "I bought a new phone yesterday.",
      order: 7,
    },
    {
      slug: "a2-pv-q8",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'We arrived late to the airport.'",
      correctAnswer: "Llegamos tarde al aeropuerto.",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a2-pv-reading-weekend",
      skill: "READING",
      title: "My Weekend",
      bodyEn: `Last weekend was very busy. On Saturday, I studied for my English exam in the morning. Then I went shopping with my sister and bought a new jacket.

In the evening, we made dinner for the whole family — we cooked pasta and a salad. Everyone loved it!

On Sunday, we didn't have any plans, so we watched movies all day. I wrote a message to my friend, but she didn't answer until Monday.`,
      order: 1,
      questions: [
        {
          slug: "a2-pv-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What did the writer buy on Saturday?",
          options: ["A jacket", "A phone", "Books"],
          correctAnswer: "A jacket",
          order: 1,
        },
        {
          slug: "a2-pv-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What did the family cook for dinner?",
          options: ["Pizza", "Pasta and salad", "Soup"],
          correctAnswer: "Pasta and salad",
          order: 2,
        },
        {
          slug: "a2-pv-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "When did the friend answer the message?",
          options: ["On Sunday", "On Monday", "She never answered"],
          correctAnswer: "On Monday",
          order: 3,
        },
      ],
    },
  ],
};
