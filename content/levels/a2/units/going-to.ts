import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a2-going-to",
  levelCode: "A2",
  title: "Futuro: going to",
  description: "Hablar de planes e intenciones, y hacer predicciones con evidencia.",
  order: 4,
  estimatedMinutes: 12,

  grammar: {
    title: "Going to (planes y predicciones)",
    explanationMd: `Se usa **going to** para hablar de:

1. **Planes e intenciones** (decisiones ya tomadas): *I am going to travel to Peru next month.*
2. **Predicciones con evidencia visible ahora**: *Look at those clouds! It's going to rain.*

## Estructura

**am/is/are + going to + verbo infinitivo**

| Pronombre | Forma |
|---|---|
| I | am going to |
| he/she/it | is going to |
| you/we/they | are going to |

## Negativo y preguntas

- *I'm not going to work tomorrow.*
- *She isn't going to come to the party.*
- *Are you going to study tonight?* — *Yes, I am. / No, I'm not.*

## Going to vs. Present Continuous

Ambos se pueden usar para planes futuros ya decididos: *I'm meeting my friend tomorrow.* = *I'm going to meet my friend tomorrow.* Pero solo **going to** se usa para predicciones con evidencia (*Look! It's going to rain.*), nunca el present continuous.`,
    examples: [
      { en: "I'm going to visit my grandmother this weekend.", es: "Voy a visitar a mi abuela este fin de semana." },
      { en: "She's going to start a new job next month.", es: "Ella va a empezar un nuevo trabajo el próximo mes." },
      { en: "Look at the sky! It's going to rain.", es: "¡Mira el cielo! Va a llover." },
      { en: "We aren't going to travel this year.", es: "No vamos a viajar este año." },
      { en: "Are you going to buy a new car?", es: "¿Vas a comprar un carro nuevo?" },
    ],
  },

  vocabulary: [
    {
      slug: "a2-gt-plan",
      termEn: "plan",
      termEs: "plan",
      exampleEn: "What's your plan for the weekend?",
      exampleEs: "¿Cuál es tu plan para el fin de semana?",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a2-gt-travel",
      termEn: "to travel",
      termEs: "viajar",
      exampleEn: "I'm going to travel to Peru.",
      exampleEs: "Voy a viajar a Perú.",
      partOfSpeech: "verb",
      order: 2,
    },
    {
      slug: "a2-gt-startjob",
      termEn: "to start a job",
      termEs: "empezar un trabajo",
      exampleEn: "She's going to start a new job.",
      exampleEs: "Ella va a empezar un nuevo trabajo.",
      partOfSpeech: "verb",
      order: 3,
    },
    {
      slug: "a2-gt-move",
      termEn: "to move (house)",
      termEs: "mudarse",
      exampleEn: "We're going to move next year.",
      exampleEs: "Nos vamos a mudar el próximo año.",
      partOfSpeech: "verb",
      order: 4,
    },
    {
      slug: "a2-gt-clouds",
      termEn: "clouds",
      termEs: "nubes",
      exampleEn: "Look at those clouds! It's going to rain.",
      exampleEs: "¡Mira esas nubes! Va a llover.",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a2-gt-graduate",
      termEn: "to graduate",
      termEs: "graduarse",
      exampleEn: "He's going to graduate next year.",
      exampleEs: "Él se va a graduar el próximo año.",
      partOfSpeech: "verb",
      order: 6,
    },
    {
      slug: "a2-gt-getmarried",
      termEn: "to get married",
      termEs: "casarse",
      exampleEn: "They're going to get married in June.",
      exampleEs: "Ellos se van a casar en junio.",
      partOfSpeech: "verb",
      order: 7,
    },
    {
      slug: "a2-gt-weekend",
      termEn: "weekend",
      termEs: "fin de semana",
      exampleEn: "I'm going to relax this weekend.",
      exampleEs: "Voy a descansar este fin de semana.",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a2-gt-fall",
      termEn: "to fall",
      termEs: "caer(se)",
      exampleEn: "Be careful, you're going to fall!",
      exampleEs: "¡Cuidado, te vas a caer!",
      partOfSpeech: "verb",
      order: 9,
    },
    {
      slug: "a2-gt-nextmonth",
      termEn: "next month",
      termEs: "el próximo mes",
      exampleEn: "We're going to move next month.",
      exampleEs: "Nos vamos a mudar el próximo mes.",
      partOfSpeech: "adverb",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a2-gt-q1",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "I ___ (be) going to visit my grandmother.",
      correctAnswer: "am",
      order: 1,
    },
    {
      slug: "a2-gt-q2",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "She ___ (be) going to start a new job.",
      correctAnswer: "is",
      order: 2,
    },
    {
      slug: "a2-gt-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "Look at those clouds! It ___ rain.",
      options: ["is going to", "was going to", "going to"],
      correctAnswer: "is going to",
      order: 3,
    },
    {
      slug: "a2-gt-q4",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "We ___ (not) going to travel this year.",
      correctAnswer: "aren't",
      order: 4,
    },
    {
      slug: "a2-gt-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ you going to buy a new car?",
      options: ["Are", "Is", "Do"],
      correctAnswer: "Are",
      order: 5,
    },
    {
      slug: "a2-gt-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Ellos se van a casar en junio.'",
      correctAnswer: "They're going to get married in June.",
      acceptableAnswers: ["They are going to get married in June"],
      order: 6,
    },
    {
      slug: "a2-gt-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'We're going to move next year.'",
      correctAnswer: "Nos vamos a mudar el próximo año.",
      order: 7,
    },
    {
      slug: "a2-gt-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'graduarse' en inglés?",
      correctAnswer: "to graduate",
      acceptableAnswers: ["graduate"],
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a2-gt-reading-plans",
      skill: "READING",
      title: "Big Plans for Next Year",
      bodyEn: `My sister has big plans for next year. She's going to graduate from university in May, and then she's going to travel to Europe for two months.

After her trip, she's going to start a new job at a marketing company. She's also going to move to a new apartment closer to work.

I'm not going to do anything so exciting — I'm just going to keep studying English!`,
      order: 1,
      questions: [
        {
          slug: "a2-gt-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "When is the sister going to graduate?",
          options: ["In May", "In June", "Next year"],
          correctAnswer: "In May",
          order: 1,
        },
        {
          slug: "a2-gt-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Where is she going to travel?",
          options: ["Asia", "Europe", "South America"],
          correctAnswer: "Europe",
          order: 2,
        },
        {
          slug: "a2-gt-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What is the writer going to do?",
          options: [
            "Travel to Europe too",
            "Start a new job",
            "Keep studying English",
          ],
          correctAnswer: "Keep studying English",
          order: 3,
        },
      ],
    },
  ],
};
