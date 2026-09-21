import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-numbers-time",
  levelCode: "A1",
  title: "Números y la hora",
  description: "Contar del 1 al 100 y decir la hora en inglés.",
  order: 14,
  estimatedMinutes: 15,

  grammar: {
    title: "Números y la hora",
    explanationMd: `## Números (1-20)

one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty

## Decenas

twenty (20), thirty (30), forty (40), fifty (50), sixty (60), seventy (70), eighty (80), ninety (90), a hundred (100)

Para números como 21, 35, etc.: **decena + guion + unidad** → *twenty-one, thirty-five, forty-two.*

## Preguntar y decir la hora

- *What time is it?* (¿Qué hora es?)
- *It's three o'clock.* (Son las tres en punto.)
- *It's half past three.* (Son las tres y media.) — 3:30
- *It's quarter past three.* (Son las tres y cuarto.) — 3:15
- *It's quarter to four.* (Son las cuatro menos cuarto.) — 3:45
- *It's ten past three.* (Son las tres y diez.) — 3:10
- *It's twenty to four.* (Son las cuatro menos veinte.) — 3:40

## AM / PM

Se usa **a.m.** para la mañana y **p.m.** para la tarde/noche: *The meeting is at 9 a.m. The movie starts at 8 p.m.*

## Preposición "at" con horas

Se usa **at** para decir a qué hora pasa algo: *I wake up at seven o'clock. The class starts at 9 a.m.*`,
    examples: [
      { en: "What time is it? It's half past four.", es: "¿Qué hora es? Son las cuatro y media." },
      { en: "I have thirty-five dollars.", es: "Tengo treinta y cinco dólares." },
      { en: "The meeting is at nine o'clock.", es: "La reunión es a las nueve en punto." },
      { en: "It's quarter to six.", es: "Son las seis menos cuarto." },
      { en: "There are a hundred people here.", es: "Hay cien personas aquí." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-nt-ten",
      termEn: "ten",
      termEs: "diez",
      exampleEn: "I have ten dollars.",
      exampleEs: "Tengo diez dólares.",
      partOfSpeech: "number",
      order: 1,
    },
    {
      slug: "a1-nt-twenty",
      termEn: "twenty",
      termEs: "veinte",
      exampleEn: "She is twenty years old.",
      exampleEs: "Ella tiene veinte años.",
      partOfSpeech: "number",
      order: 2,
    },
    {
      slug: "a1-nt-fifty",
      termEn: "fifty",
      termEs: "cincuenta",
      exampleEn: "There are fifty students.",
      exampleEs: "Hay cincuenta estudiantes.",
      partOfSpeech: "number",
      order: 3,
    },
    {
      slug: "a1-nt-hundred",
      termEn: "a hundred",
      termEs: "cien",
      exampleEn: "There are a hundred people here.",
      exampleEs: "Hay cien personas aquí.",
      partOfSpeech: "number",
      order: 4,
    },
    {
      slug: "a1-nt-whattime",
      termEn: "What time is it?",
      termEs: "¿Qué hora es?",
      exampleEn: "What time is it? It's three o'clock.",
      exampleEs: "¿Qué hora es? Son las tres en punto.",
      partOfSpeech: "phrase",
      order: 5,
    },
    {
      slug: "a1-nt-oclock",
      termEn: "o'clock",
      termEs: "en punto",
      exampleEn: "The train leaves at six o'clock.",
      exampleEs: "El tren sale a las seis en punto.",
      partOfSpeech: "phrase",
      order: 6,
    },
    {
      slug: "a1-nt-halfpast",
      termEn: "half past",
      termEs: "y media",
      exampleEn: "It's half past seven.",
      exampleEs: "Son las siete y media.",
      partOfSpeech: "phrase",
      order: 7,
    },
    {
      slug: "a1-nt-quarterpast",
      termEn: "quarter past",
      termEs: "y cuarto",
      exampleEn: "It's quarter past nine.",
      exampleEs: "Son las nueve y cuarto.",
      partOfSpeech: "phrase",
      order: 8,
    },
    {
      slug: "a1-nt-quarterto",
      termEn: "quarter to",
      termEs: "menos cuarto",
      exampleEn: "It's quarter to five.",
      exampleEs: "Son las cinco menos cuarto.",
      partOfSpeech: "phrase",
      order: 9,
    },
    {
      slug: "a1-nt-midnight",
      termEn: "midnight",
      termEs: "medianoche",
      exampleEn: "The store closes at midnight.",
      exampleEs: "La tienda cierra a medianoche.",
      partOfSpeech: "noun",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-nt-q1",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "Escribe en letras el número 15.",
      correctAnswer: "fifteen",
      order: 1,
    },
    {
      slug: "a1-nt-q2",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "Escribe en letras el número 35.",
      correctAnswer: "thirty-five",
      order: 2,
    },
    {
      slug: "a1-nt-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "3:30 se dice...",
      options: ["quarter past three", "half past three", "quarter to three"],
      correctAnswer: "half past three",
      order: 3,
    },
    {
      slug: "a1-nt-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "3:45 se dice...",
      options: ["quarter past four", "half past three", "quarter to four"],
      correctAnswer: "quarter to four",
      order: 4,
    },
    {
      slug: "a1-nt-q5",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "The class starts ___ nine o'clock. (preposición)",
      correctAnswer: "at",
      order: 5,
    },
    {
      slug: "a1-nt-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: '¿Qué hora es?'",
      correctAnswer: "What time is it?",
      order: 6,
    },
    {
      slug: "a1-nt-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'It's quarter past nine.'",
      correctAnswer: "Son las nueve y cuarto.",
      order: 7,
    },
    {
      slug: "a1-nt-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'medianoche' en inglés?",
      correctAnswer: "midnight",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-nt-reading-schedule",
      skill: "READING",
      title: "My Schedule",
      bodyEn: `I wake up at six o'clock every day. My first class starts at half past seven, and I have lunch at quarter to one.

In the afternoon, I work from two o'clock to six o'clock. I have dinner at quarter past seven, and I go to bed at half past ten.

On weekends, I wake up later — around ten o'clock!`,
      order: 1,
      questions: [
        {
          slug: "a1-nt-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What time does the writer wake up on weekdays?",
          options: ["Six o'clock", "Seven o'clock", "Ten o'clock"],
          correctAnswer: "Six o'clock",
          order: 1,
        },
        {
          slug: "a1-nt-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What time does the writer have lunch?",
          options: ["Half past twelve", "Quarter to one", "One o'clock"],
          correctAnswer: "Quarter to one",
          order: 2,
        },
        {
          slug: "a1-nt-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What time does the writer wake up on weekends?",
          options: ["Six o'clock", "Ten o'clock", "Noon"],
          correctAnswer: "Ten o'clock",
          order: 3,
        },
      ],
    },
  ],
};
