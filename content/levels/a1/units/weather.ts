import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-weather",
  levelCode: "A1",
  title: "El clima",
  description: "Cómo hablar del clima y las estaciones del año con 'it is'.",
  order: 23,
  estimatedMinutes: 10,

  grammar: {
    title: "El clima",
    explanationMd: `## Hablar del clima con "it"

En inglés, siempre se usa el pronombre **it** (sin traducción propia) para hablar del clima:

- *It's sunny today.* (Hoy hace sol.)
- *It's raining.* (Está lloviendo.)
- *It was very cold yesterday.* (Ayer hizo mucho frío.)

## Preguntar por el clima

- *What's the weather like?* (¿Cómo está el clima?)
- *How's the weather today?*

## Adjetivos de clima

sunny (soleado), cloudy (nublado), rainy (lluvioso), windy (con viento), snowy (con nieve), hot (caluroso), cold (frío), warm (templado/cálido).

## Las estaciones del año

spring (primavera), summer (verano), autumn/fall (otoño), winter (invierno).

- *It's usually hot in summer.*
- *It rains a lot in autumn.*`,
    examples: [
      { en: "What's the weather like today? It's sunny.", es: "¿Cómo está el clima hoy? Está soleado." },
      { en: "It's raining, so take an umbrella.", es: "Está lloviendo, así que lleva un paraguas." },
      { en: "It's very cold in winter.", es: "Hace mucho frío en invierno." },
      { en: "It was windy yesterday.", es: "Ayer hizo viento." },
      { en: "I love spring because the weather is warm.", es: "Me encanta la primavera porque el clima es cálido." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-wx-sunny",
      termEn: "sunny",
      termEs: "soleado",
      exampleEn: "It's sunny today.",
      exampleEs: "Hoy está soleado.",
      partOfSpeech: "adjective",
      order: 1,
    },
    {
      slug: "a1-wx-rainy",
      termEn: "rainy / it's raining",
      termEs: "lluvioso / está lloviendo",
      exampleEn: "It's raining, so take an umbrella.",
      exampleEs: "Está lloviendo, así que lleva un paraguas.",
      partOfSpeech: "adjective",
      order: 2,
    },
    {
      slug: "a1-wx-cloudy",
      termEn: "cloudy",
      termEs: "nublado",
      exampleEn: "It's cloudy this morning.",
      exampleEs: "Está nublado esta mañana.",
      partOfSpeech: "adjective",
      order: 3,
    },
    {
      slug: "a1-wx-windy",
      termEn: "windy",
      termEs: "con viento",
      exampleEn: "It was windy yesterday.",
      exampleEs: "Ayer hizo viento.",
      partOfSpeech: "adjective",
      order: 4,
    },
    {
      slug: "a1-wx-snowy",
      termEn: "snowy / it's snowing",
      termEs: "nevado / está nevando",
      exampleEn: "It's snowing in the mountains.",
      exampleEs: "Está nevando en las montañas.",
      partOfSpeech: "adjective",
      order: 5,
    },
    {
      slug: "a1-wx-spring",
      termEn: "spring",
      termEs: "primavera",
      exampleEn: "I love spring because the weather is warm.",
      exampleEs: "Me encanta la primavera porque el clima es cálido.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-wx-summer",
      termEn: "summer",
      termEs: "verano",
      exampleEn: "It's usually hot in summer.",
      exampleEs: "Normalmente hace calor en verano.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-wx-autumn",
      termEn: "autumn / fall",
      termEs: "otoño",
      exampleEn: "It rains a lot in autumn.",
      exampleEs: "Llueve mucho en otoño.",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-wx-winter",
      termEn: "winter",
      termEs: "invierno",
      exampleEn: "It's very cold in winter.",
      exampleEs: "Hace mucho frío en invierno.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-wx-whatstheweather",
      termEn: "What's the weather like?",
      termEs: "¿Cómo está el clima?",
      exampleEn: "What's the weather like today?",
      exampleEs: "¿Cómo está el clima hoy?",
      partOfSpeech: "phrase",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-wx-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ sunny today.",
      options: ["It's", "He's", "There's"],
      correctAnswer: "It's",
      order: 1,
    },
    {
      slug: "a1-wx-q2",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'nublado' en inglés?",
      correctAnswer: "cloudy",
      order: 2,
    },
    {
      slug: "a1-wx-q3",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'invierno' en inglés?",
      correctAnswer: "winter",
      order: 3,
    },
    {
      slug: "a1-wx-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "It ___ yesterday. (hizo viento)",
      options: ["was windy", "is windy", "windy"],
      correctAnswer: "was windy",
      order: 4,
    },
    {
      slug: "a1-wx-q5",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'primavera' en inglés?",
      correctAnswer: "spring",
      order: 5,
    },
    {
      slug: "a1-wx-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: '¿Cómo está el clima hoy?'",
      correctAnswer: "What's the weather like today?",
      order: 6,
    },
    {
      slug: "a1-wx-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'It's raining, so take an umbrella.'",
      correctAnswer: "Está lloviendo, así que lleva un paraguas.",
      order: 7,
    },
    {
      slug: "a1-wx-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'con nieve/nevando' en inglés?",
      correctAnswer: "snowy",
      acceptableAnswers: ["it's snowing", "snowing"],
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-wx-reading-forecast",
      skill: "READING",
      title: "The Weather This Week",
      bodyEn: `This week has different weather every day. On Monday, it's sunny and warm — perfect for a walk in the park.

On Tuesday and Wednesday, it's cloudy and windy. By Thursday, it starts raining, and it doesn't stop until Friday night.

The weekend looks great, though: it's going to be sunny again, with clear skies. It's a typical week of spring weather!`,
      order: 1,
      questions: [
        {
          slug: "a1-wx-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What's the weather like on Monday?",
          options: ["Rainy", "Sunny and warm", "Snowy"],
          correctAnswer: "Sunny and warm",
          order: 1,
        },
        {
          slug: "a1-wx-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "When does it start raining?",
          options: ["Tuesday", "Thursday", "Saturday"],
          correctAnswer: "Thursday",
          order: 2,
        },
        {
          slug: "a1-wx-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What season does this describe?",
          options: ["Winter", "Summer", "Spring"],
          correctAnswer: "Spring",
          order: 3,
        },
      ],
    },
  ],
};
