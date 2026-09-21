import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-have-got",
  levelCode: "A1",
  title: "Have got / Has got",
  description: "Cómo hablar de posesión y características físicas con 'have got'.",
  order: 9,
  estimatedMinutes: 12,

  grammar: {
    title: "Have got / Has got",
    explanationMd: `**Have got** significa "tener" (posesión, características físicas, familia). Es muy común en inglés británico; en inglés americano se suele usar solo **have/has** sin "got", pero ambas formas son correctas y muy comunes.

## Estructura

| Pronombre | Afirmativo | Negativo | Pregunta |
|---|---|---|---|
| I/you/we/they | have got | haven't got | Have...got...? |
| he/she/it | has got | hasn't got | Has...got...? |

- *I have got a sister.* = *I have a sister.*
- *She has got blue eyes.* = *She has blue eyes.*
- *We haven't got a car.*
- *Has he got a dog?* — *Yes, he has. / No, he hasn't.*

## Usos comunes

- Familia: *I've got two brothers.*
- Posesiones: *She's got a new phone.*
- Características físicas: *He's got brown hair and green eyes.*

## Contracciones

*I've got, you've got, he's got, she's got, it's got, we've got, they've got* son las formas habladas más comunes.`,
    examples: [
      { en: "I've got a new car.", es: "Tengo un carro nuevo." },
      { en: "She's got long black hair.", es: "Ella tiene pelo negro y largo." },
      { en: "We haven't got any children.", es: "No tenemos hijos." },
      { en: "Have you got a pen?", es: "¿Tienes un lapicero?" },
      { en: "He hasn't got a job right now.", es: "Él no tiene trabajo ahora mismo." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-hg-hair",
      termEn: "hair",
      termEs: "pelo / cabello",
      exampleEn: "She's got long hair.",
      exampleEs: "Ella tiene el pelo largo.",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a1-hg-eyes",
      termEn: "eyes",
      termEs: "ojos",
      exampleEn: "He's got green eyes.",
      exampleEs: "Él tiene ojos verdes.",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a1-hg-pen",
      termEn: "pen",
      termEs: "lapicero / bolígrafo",
      exampleEn: "Have you got a pen?",
      exampleEs: "¿Tienes un lapicero?",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a1-hg-tall",
      termEn: "tall",
      termEs: "alto/a",
      exampleEn: "My brother has got a tall friend.",
      exampleEs: "Mi hermano tiene un amigo alto.",
      partOfSpeech: "adjective",
      order: 4,
    },
    {
      slug: "a1-hg-short",
      termEn: "short",
      termEs: "bajo/a, corto/a",
      exampleEn: "She's got short hair.",
      exampleEs: "Ella tiene el pelo corto.",
      partOfSpeech: "adjective",
      order: 5,
    },
    {
      slug: "a1-hg-pet",
      termEn: "pet",
      termEs: "mascota",
      exampleEn: "Have you got a pet?",
      exampleEs: "¿Tienes una mascota?",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-hg-umbrella",
      termEn: "umbrella",
      termEs: "paraguas",
      exampleEn: "I haven't got an umbrella today.",
      exampleEs: "Hoy no tengo paraguas.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-hg-beard",
      termEn: "beard",
      termEs: "barba",
      exampleEn: "He's got a beard.",
      exampleEs: "Él tiene barba.",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-hg-money",
      termEn: "money",
      termEs: "dinero",
      exampleEn: "We haven't got much money.",
      exampleEs: "No tenemos mucho dinero.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-hg-siblings",
      termEn: "siblings",
      termEs: "hermanos (en general)",
      exampleEn: "How many siblings have you got?",
      exampleEs: "¿Cuántos hermanos tienes?",
      partOfSpeech: "noun",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-hg-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I ___ got a new phone.",
      options: ["have", "has", "haven't"],
      correctAnswer: "have",
      order: 1,
    },
    {
      slug: "a1-hg-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "She ___ got blue eyes.",
      options: ["have", "has", "haven't"],
      correctAnswer: "has",
      order: 2,
    },
    {
      slug: "a1-hg-q3",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "We ___ got any pets. (negativo)",
      correctAnswer: "haven't",
      order: 3,
    },
    {
      slug: "a1-hg-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ you got a pen?",
      options: ["Have", "Has", "Do"],
      correctAnswer: "Have",
      order: 4,
    },
    {
      slug: "a1-hg-q5",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "He ___ got a job right now. (negativo)",
      correctAnswer: "hasn't",
      order: 5,
    },
    {
      slug: "a1-hg-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Ella tiene el pelo largo.'",
      correctAnswer: "She's got long hair.",
      acceptableAnswers: ["She has got long hair", "She has long hair"],
      order: 6,
    },
    {
      slug: "a1-hg-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Have you got a pet?'",
      correctAnswer: "¿Tienes una mascota?",
      order: 7,
    },
    {
      slug: "a1-hg-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'barba' en inglés?",
      correctAnswer: "beard",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-hg-reading-description",
      skill: "READING",
      title: "Describing My Friends",
      bodyEn: `My friend Luis has got short black hair and a beard. He's got brown eyes and he's very tall.

My other friend, Carla, has got long brown hair. She hasn't got a pet, but she really wants a dog.

Have you got a best friend? What has he or she got — tall or short, long hair or short hair?`,
      order: 1,
      questions: [
        {
          slug: "a1-hg-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What has Luis got on his face?",
          options: ["Glasses", "A beard", "Short hair"],
          correctAnswer: "A beard",
          order: 1,
        },
        {
          slug: "a1-hg-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Has Carla got a pet?",
          options: ["Yes", "No", "The text doesn't say"],
          correctAnswer: "No",
          order: 2,
        },
        {
          slug: "a1-hg-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What color is Carla's hair?",
          options: ["Black", "Brown", "Blonde"],
          correctAnswer: "Brown",
          order: 3,
        },
      ],
    },
  ],
};
