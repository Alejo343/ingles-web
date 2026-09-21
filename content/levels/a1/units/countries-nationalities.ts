import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-countries-nationalities",
  levelCode: "A1",
  title: "Países y nacionalidades",
  description: "Cómo hablar de tu país de origen y de dónde son otras personas.",
  order: 19,
  estimatedMinutes: 12,

  grammar: {
    title: "Países y nacionalidades",
    explanationMd: `## País vs. nacionalidad

El país es un sustantivo; la nacionalidad es un adjetivo (¡y se escribe con **mayúscula**!).

| País | Nacionalidad |
|---|---|
| Colombia | Colombian |
| Mexico | Mexican |
| Spain | Spanish |
| the United States | American |
| the United Kingdom | British |
| France | French |
| Japan | Japanese |
| Brazil | Brazilian |

## Preguntar y decir de dónde eres

- *Where are you from?* (¿De dónde eres?)
- *I'm from Colombia.* (Soy de Colombia.) — país
- *I'm Colombian.* (Soy colombiano/a.) — nacionalidad

Ambas respuestas son correctas y muy comunes.

## Con el verbo "to be"

- *She is Mexican.*
- *They are American.*
- *Is he French?* — *No, he isn't. He's Italian.*`,
    examples: [
      { en: "Where are you from? I'm from Peru.", es: "¿De dónde eres? Soy de Perú." },
      { en: "She is Mexican.", es: "Ella es mexicana." },
      { en: "Are you British? No, I'm American.", es: "¿Eres británico? No, soy estadounidense." },
      { en: "My friend is Japanese.", es: "Mi amigo es japonés." },
      { en: "They are from Brazil.", es: "Ellos son de Brasil." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-cn-colombian",
      termEn: "Colombian",
      termEs: "colombiano/a",
      exampleEn: "I'm Colombian.",
      exampleEs: "Soy colombiano/a.",
      partOfSpeech: "adjective",
      order: 1,
    },
    {
      slug: "a1-cn-mexican",
      termEn: "Mexican",
      termEs: "mexicano/a",
      exampleEn: "She is Mexican.",
      exampleEs: "Ella es mexicana.",
      partOfSpeech: "adjective",
      order: 2,
    },
    {
      slug: "a1-cn-spanish",
      termEn: "Spanish",
      termEs: "español/a",
      exampleEn: "He is Spanish.",
      exampleEs: "Él es español.",
      partOfSpeech: "adjective",
      order: 3,
    },
    {
      slug: "a1-cn-american",
      termEn: "American",
      termEs: "estadounidense",
      exampleEn: "They are American.",
      exampleEs: "Ellos son estadounidenses.",
      partOfSpeech: "adjective",
      order: 4,
    },
    {
      slug: "a1-cn-british",
      termEn: "British",
      termEs: "británico/a",
      exampleEn: "Are you British?",
      exampleEs: "¿Eres británico?",
      partOfSpeech: "adjective",
      order: 5,
    },
    {
      slug: "a1-cn-french",
      termEn: "French",
      termEs: "francés/a",
      exampleEn: "My friend is French.",
      exampleEs: "Mi amigo es francés.",
      partOfSpeech: "adjective",
      order: 6,
    },
    {
      slug: "a1-cn-japanese",
      termEn: "Japanese",
      termEs: "japonés/a",
      exampleEn: "My friend is Japanese.",
      exampleEs: "Mi amigo es japonés.",
      partOfSpeech: "adjective",
      order: 7,
    },
    {
      slug: "a1-cn-brazilian",
      termEn: "Brazilian",
      termEs: "brasileño/a",
      exampleEn: "They are from Brazil.",
      exampleEs: "Ellos son de Brasil.",
      partOfSpeech: "adjective",
      order: 8,
    },
    {
      slug: "a1-cn-country",
      termEn: "country",
      termEs: "país",
      exampleEn: "What's your favorite country?",
      exampleEs: "¿Cuál es tu país favorito?",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-cn-whereareyoufrom",
      termEn: "Where are you from?",
      termEs: "¿De dónde eres?",
      exampleEn: "Where are you from? I'm from Peru.",
      exampleEs: "¿De dónde eres? Soy de Perú.",
      partOfSpeech: "phrase",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-cn-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I'm from Colombia. I'm ___.",
      options: ["Colombia", "Colombian", "colombia"],
      correctAnswer: "Colombian",
      explanation: "Las nacionalidades en inglés siempre van con mayúscula.",
      order: 1,
    },
    {
      slug: "a1-cn-q2",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'francés/a' en inglés?",
      correctAnswer: "French",
      order: 2,
    },
    {
      slug: "a1-cn-q3",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'japonés/a' en inglés?",
      correctAnswer: "Japanese",
      order: 3,
    },
    {
      slug: "a1-cn-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ are you from?",
      options: ["What", "Where", "Who"],
      correctAnswer: "Where",
      order: 4,
    },
    {
      slug: "a1-cn-q5",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "She ___ Mexican. (verbo to be)",
      correctAnswer: "is",
      order: 5,
    },
    {
      slug: "a1-cn-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Soy de Perú.'",
      correctAnswer: "I'm from Peru.",
      acceptableAnswers: ["I am from Peru"],
      order: 6,
    },
    {
      slug: "a1-cn-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Are you British? No, I'm American.'",
      correctAnswer: "¿Eres británico? No, soy estadounidense.",
      order: 7,
    },
    {
      slug: "a1-cn-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'brasileño/a' en inglés?",
      correctAnswer: "Brazilian",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-cn-reading-hostel",
      skill: "READING",
      title: "New Friends at the Hostel",
      bodyEn: `I'm staying at a hostel in Bogotá, and I'm meeting people from all over the world.

My roommate is French — her name is Claire, and she's from Paris. There's also a Japanese couple, Yuki and Kenji, who are traveling around South America.

At breakfast, I met Marco. He's Brazilian, but he lives in the United States now, so he's also a little American! We're all different nationalities, but we're becoming good friends.`,
      order: 1,
      questions: [
        {
          slug: "a1-cn-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What nationality is Claire?",
          options: ["Spanish", "French", "British"],
          correctAnswer: "French",
          order: 1,
        },
        {
          slug: "a1-cn-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Where are Yuki and Kenji from?",
          options: ["Japan", "France", "Brazil"],
          correctAnswer: "Japan",
          order: 2,
        },
        {
          slug: "a1-cn-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Where does Marco live now?",
          options: ["Brazil", "The United States", "Colombia"],
          correctAnswer: "The United States",
          order: 3,
        },
      ],
    },
  ],
};
