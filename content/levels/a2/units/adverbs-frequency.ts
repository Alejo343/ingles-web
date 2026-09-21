import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a2-adverbs-frequency",
  levelCode: "A2",
  title: "Adverbios de frecuencia",
  description: "Always, usually, often, sometimes, never... y dónde colocarlos en la frase.",
  order: 8,
  estimatedMinutes: 10,

  grammar: {
    title: "Adverbios de frecuencia",
    explanationMd: `Indican **con qué frecuencia** pasa algo, de más a menos frecuente:

| Adverbio | Significado | % aproximado |
|---|---|---|
| always | siempre | 100% |
| usually | normalmente | ~90% |
| often | a menudo | ~70% |
| sometimes | a veces | ~50% |
| rarely / seldom | rara vez | ~10% |
| never | nunca | 0% |

## Posición en la frase

Van **antes del verbo principal**, pero **después de "to be"**.

- Antes del verbo: *I **always** drink coffee in the morning.*
- Después de "to be": *She **is** usually tired on Mondays.*
- Con verbos auxiliares (can, have...): *I **can** never remember his name.*

## Preguntas con "how often"

Se usa **how often** para preguntar por la frecuencia: *How often do you exercise?* — *I exercise three times a week.*

Otras expresiones de frecuencia: *every day, once a week, twice a month, three times a year.*`,
    examples: [
      { en: "I always brush my teeth before bed.", es: "Siempre me cepillo los dientes antes de dormir." },
      { en: "She is usually late for class.", es: "Ella normalmente llega tarde a clase." },
      { en: "We sometimes eat out on weekends.", es: "A veces comemos fuera los fines de semana." },
      { en: "He never drinks alcohol.", es: "Él nunca toma alcohol." },
      { en: "How often do you go to the gym?", es: "¿Con qué frecuencia vas al gimnasio?" },
    ],
  },

  vocabulary: [
    {
      slug: "a2-af-brush",
      termEn: "to brush your teeth",
      termEs: "cepillarse los dientes",
      exampleEn: "I always brush my teeth before bed.",
      exampleEs: "Siempre me cepillo los dientes antes de dormir.",
      partOfSpeech: "verb",
      order: 1,
    },
    {
      slug: "a2-af-late",
      termEn: "late",
      termEs: "tarde",
      exampleEn: "She is usually late for class.",
      exampleEs: "Ella normalmente llega tarde a clase.",
      partOfSpeech: "adjective",
      order: 2,
    },
    {
      slug: "a2-af-eatout",
      termEn: "to eat out",
      termEs: "comer fuera / salir a comer",
      exampleEn: "We sometimes eat out on weekends.",
      exampleEs: "A veces comemos fuera los fines de semana.",
      partOfSpeech: "verb",
      order: 3,
    },
    {
      slug: "a2-af-alcohol",
      termEn: "alcohol",
      termEs: "alcohol",
      exampleEn: "He never drinks alcohol.",
      exampleEs: "Él nunca toma alcohol.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a2-af-gym",
      termEn: "gym",
      termEs: "gimnasio",
      exampleEn: "How often do you go to the gym?",
      exampleEs: "¿Con qué frecuencia vas al gimnasio?",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a2-af-remember",
      termEn: "to remember",
      termEs: "recordar",
      exampleEn: "I can never remember his name.",
      exampleEs: "Nunca puedo recordar su nombre.",
      partOfSpeech: "verb",
      order: 6,
    },
    {
      slug: "a2-af-exercise",
      termEn: "to exercise",
      termEs: "hacer ejercicio",
      exampleEn: "I exercise three times a week.",
      exampleEs: "Hago ejercicio tres veces a la semana.",
      partOfSpeech: "verb",
      order: 7,
    },
    {
      slug: "a2-af-onceaweek",
      termEn: "once a week",
      termEs: "una vez a la semana",
      exampleEn: "I clean my house once a week.",
      exampleEs: "Limpio mi casa una vez a la semana.",
      partOfSpeech: "adverb",
      order: 8,
    },
    {
      slug: "a2-af-rarely",
      termEn: "rarely",
      termEs: "rara vez",
      exampleEn: "We rarely go to the movies.",
      exampleEs: "Rara vez vamos al cine.",
      partOfSpeech: "adverb",
      order: 9,
    },
    {
      slug: "a2-af-cleaning",
      termEn: "cleaning",
      termEs: "limpieza",
      exampleEn: "Cleaning is my least favorite chore.",
      exampleEs: "La limpieza es mi tarea menos favorita.",
      partOfSpeech: "noun",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a2-af-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I ___ drink coffee in the morning. (colocación correcta)",
      options: ["always drink", "drink always", "am always drink"],
      correctAnswer: "always drink",
      order: 1,
    },
    {
      slug: "a2-af-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "She ___ tired on Mondays. (con 'to be')",
      options: ["usually is", "is usually", "is being usually"],
      correctAnswer: "is usually",
      order: 2,
    },
    {
      slug: "a2-af-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "He ___ drinks alcohol. (0%)",
      options: ["always", "never", "usually"],
      correctAnswer: "never",
      order: 3,
    },
    {
      slug: "a2-af-q4",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "How ___ do you go to the gym?",
      correctAnswer: "often",
      order: 4,
    },
    {
      slug: "a2-af-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I can ___ remember his name. (nunca puedo)",
      options: ["never", "always", "sometimes"],
      correctAnswer: "never",
      order: 5,
    },
    {
      slug: "a2-af-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'A veces comemos fuera.'",
      correctAnswer: "We sometimes eat out.",
      order: 6,
    },
    {
      slug: "a2-af-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'How often do you exercise?'",
      correctAnswer: "¿Con qué frecuencia haces ejercicio?",
      order: 7,
    },
    {
      slug: "a2-af-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'rara vez' en inglés?",
      correctAnswer: "rarely",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a2-af-reading-habits",
      skill: "READING",
      title: "Healthy Habits",
      bodyEn: `My doctor asked me about my habits last week. I told her: "I usually sleep eight hours a night, and I always eat breakfast. I exercise three times a week, but I rarely eat vegetables."

She said, "You should eat vegetables more often. You don't have to eat them every day, but you should try to eat them at least four times a week."

Now I sometimes add vegetables to my breakfast. It's a small change, but I never skip it anymore!`,
      order: 1,
      questions: [
        {
          slug: "a2-af-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "How often does the writer exercise?",
          options: ["Once a week", "Three times a week", "Every day"],
          correctAnswer: "Three times a week",
          order: 1,
        },
        {
          slug: "a2-af-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What does the doctor recommend?",
          options: [
            "Sleep more",
            "Eat vegetables more often",
            "Exercise every day",
          ],
          correctAnswer: "Eat vegetables more often",
          order: 2,
        },
        {
          slug: "a2-af-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What does the writer do now?",
          options: [
            "Sometimes adds vegetables to breakfast",
            "Never eats breakfast",
            "Stopped exercising",
          ],
          correctAnswer: "Sometimes adds vegetables to breakfast",
          order: 3,
        },
      ],
    },
  ],
};
