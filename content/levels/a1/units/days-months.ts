import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-days-months",
  levelCode: "A1",
  title: "Días, meses y fechas",
  description: "Los días de la semana, los meses del año y cómo decir la fecha.",
  order: 15,
  estimatedMinutes: 12,

  grammar: {
    title: "Días, meses y fechas",
    explanationMd: `## Días de la semana

Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday

Siempre se escriben con **mayúscula inicial**. El fin de semana (*the weekend*) es Saturday y Sunday.

## Meses del año

January, February, March, April, May, June, July, August, September, October, November, December

También llevan **mayúscula inicial**.

## Preposiciones con fechas

| Preposición | Se usa con... | Ejemplo |
|---|---|---|
| **on** | días y fechas | *on Monday, on May 3rd* |
| **in** | meses, años, estaciones | *in June, in 2026, in summer* |
| **at** | momentos del día/festividades | *at night, at Christmas* |

## Decir la fecha

*What's the date today?* — *It's May third.* (se dice el número ordinal: first, second, third, fourth...)

Se escribe: *May 3rd* / *3rd May* — se lee: *"May the third"* o *"the third of May"*.`,
    examples: [
      { en: "My birthday is in April.", es: "Mi cumpleaños es en abril." },
      { en: "The meeting is on Monday.", es: "La reunión es el lunes." },
      { en: "What's the date today? It's June 5th.", es: "¿Qué fecha es hoy? Es 5 de junio." },
      { en: "We don't work on Sundays.", es: "No trabajamos los domingos." },
      { en: "School starts in September.", es: "La escuela empieza en septiembre." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-dm-monday",
      termEn: "Monday",
      termEs: "lunes",
      exampleEn: "I go to the gym on Mondays.",
      exampleEs: "Voy al gimnasio los lunes.",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a1-dm-friday",
      termEn: "Friday",
      termEs: "viernes",
      exampleEn: "We go out on Fridays.",
      exampleEs: "Salimos los viernes.",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a1-dm-weekend",
      termEn: "weekend",
      termEs: "fin de semana",
      exampleEn: "I relax on the weekend.",
      exampleEs: "Descanso el fin de semana.",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a1-dm-january",
      termEn: "January",
      termEs: "enero",
      exampleEn: "The new year starts in January.",
      exampleEs: "El año nuevo empieza en enero.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a1-dm-december",
      termEn: "December",
      termEs: "diciembre",
      exampleEn: "Christmas is in December.",
      exampleEs: "La Navidad es en diciembre.",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a1-dm-birthday",
      termEn: "birthday",
      termEs: "cumpleaños",
      exampleEn: "My birthday is in April.",
      exampleEs: "Mi cumpleaños es en abril.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-dm-date",
      termEn: "date",
      termEs: "fecha",
      exampleEn: "What's the date today?",
      exampleEs: "¿Qué fecha es hoy?",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-dm-year",
      termEn: "year",
      termEs: "año",
      exampleEn: "I was born in 1998.",
      exampleEs: "Nací en 1998.",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-dm-today",
      termEn: "today",
      termEs: "hoy",
      exampleEn: "Today is Tuesday.",
      exampleEs: "Hoy es martes.",
      partOfSpeech: "adverb",
      order: 9,
    },
    {
      slug: "a1-dm-tomorrow",
      termEn: "tomorrow",
      termEs: "mañana (día siguiente)",
      exampleEn: "See you tomorrow!",
      exampleEs: "¡Nos vemos mañana!",
      partOfSpeech: "adverb",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-dm-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "The meeting is ___ Monday.",
      options: ["on", "in", "at"],
      correctAnswer: "on",
      order: 1,
    },
    {
      slug: "a1-dm-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "My birthday is ___ April.",
      options: ["on", "in", "at"],
      correctAnswer: "in",
      order: 2,
    },
    {
      slug: "a1-dm-q3",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cuál es el primer día de la semana laboral en inglés? (una palabra)",
      correctAnswer: "Monday",
      order: 3,
    },
    {
      slug: "a1-dm-q4",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'diciembre' en inglés?",
      correctAnswer: "December",
      order: 4,
    },
    {
      slug: "a1-dm-q5",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "We don't work ___ Sundays. (preposición)",
      correctAnswer: "on",
      order: 5,
    },
    {
      slug: "a1-dm-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: '¿Qué fecha es hoy?'",
      correctAnswer: "What's the date today?",
      acceptableAnswers: ["What is the date today?"],
      order: 6,
    },
    {
      slug: "a1-dm-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'School starts in September.'",
      correctAnswer: "La escuela empieza en septiembre.",
      order: 7,
    },
    {
      slug: "a1-dm-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'cumpleaños' en inglés?",
      correctAnswer: "birthday",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-dm-reading-party",
      skill: "READING",
      title: "A Birthday Party",
      bodyEn: `My sister's birthday is on June 12th. This year, we're having a party on Saturday, June 14th, because June 12th is a Tuesday and everyone is busy.

The party starts at 3 p.m. In the morning, we're going to buy a cake and decorations. My sister loves parties in summer because the weather is nice.

Her birthday present is a secret — I can't tell you until the party!`,
      order: 1,
      questions: [
        {
          slug: "a1-dm-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "When is the sister's actual birthday?",
          options: ["June 12th", "June 14th", "June 3rd"],
          correctAnswer: "June 12th",
          order: 1,
        },
        {
          slug: "a1-dm-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Why is the party on a different day?",
          options: [
            "The cake isn't ready",
            "June 12th is a Tuesday and everyone is busy",
            "It's raining",
          ],
          correctAnswer: "June 12th is a Tuesday and everyone is busy",
          order: 2,
        },
        {
          slug: "a1-dm-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What time does the party start?",
          options: ["12 p.m.", "3 p.m.", "6 p.m."],
          correctAnswer: "3 p.m.",
          order: 3,
        },
      ],
    },
  ],
};
