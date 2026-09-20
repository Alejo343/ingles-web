import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-verb-to-be",
  levelCode: "A1",
  title: "El verbo To Be",
  description:
    "Aprende a usar am/is/are para hablar de ti, de otras personas y de cómo te sientes.",
  order: 1,
  estimatedMinutes: 15,

  grammar: {
    title: "El verbo To Be (am / is / are)",
    explanationMd: `El verbo **to be** ("ser" o "estar") es uno de los verbos más importantes en inglés. Se usa para hablar de identidad, profesión, nacionalidad, edad y sentimientos.

## Formas afirmativas

| Pronombre | Forma | Contracción |
|---|---|---|
| I | am | I'm |
| You | are | You're |
| He / She / It | is | He's / She's / It's |
| We | are | We're |
| They | are | They're |

## Forma negativa

Se añade **not** después del verbo: *I am not*, *he is not (isn't)*, *they are not (aren't)*.

## Forma interrogativa

Se invierte el orden: el verbo va antes del sujeto. Ejemplo: *Are you tired?*, *Is she a teacher?*

## Cuándo se usa

- Identidad y profesión: *I am a student.*
- Nacionalidad y origen: *She is from Mexico.*
- Edad: *He is 20 years old.*
- Sentimientos y estados: *We are happy.*
- El clima: *It is cold today.*`,
    examples: [
      { en: "I am a student.", es: "Yo soy estudiante." },
      { en: "She is my sister.", es: "Ella es mi hermana." },
      { en: "They are from Colombia.", es: "Ellos son de Colombia." },
      { en: "Are you ready?", es: "¿Estás listo/a?" },
      { en: "It is not cold today.", es: "No hace frío hoy." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-tobe-happy",
      termEn: "happy",
      termEs: "feliz",
      exampleEn: "I am happy today.",
      exampleEs: "Estoy feliz hoy.",
      partOfSpeech: "adjective",
      order: 1,
    },
    {
      slug: "a1-tobe-sad",
      termEn: "sad",
      termEs: "triste",
      exampleEn: "He is sad because he is tired.",
      exampleEs: "Él está triste porque está cansado.",
      partOfSpeech: "adjective",
      order: 2,
    },
    {
      slug: "a1-tobe-tired",
      termEn: "tired",
      termEs: "cansado/a",
      exampleEn: "We are tired after work.",
      exampleEs: "Estamos cansados después del trabajo.",
      partOfSpeech: "adjective",
      order: 3,
    },
    {
      slug: "a1-tobe-hungry",
      termEn: "hungry",
      termEs: "hambriento/a",
      exampleEn: "The children are hungry.",
      exampleEs: "Los niños tienen hambre.",
      partOfSpeech: "adjective",
      order: 4,
    },
    {
      slug: "a1-tobe-thirsty",
      termEn: "thirsty",
      termEs: "sediento/a",
      exampleEn: "I am thirsty. I need water.",
      exampleEs: "Tengo sed. Necesito agua.",
      partOfSpeech: "adjective",
      order: 5,
    },
    {
      slug: "a1-tobe-cold",
      termEn: "cold",
      termEs: "frío/a",
      exampleEn: "It is cold in winter.",
      exampleEs: "Hace frío en invierno.",
      partOfSpeech: "adjective",
      order: 6,
    },
    {
      slug: "a1-tobe-hot",
      termEn: "hot",
      termEs: "caliente / caluroso",
      exampleEn: "It is hot in summer.",
      exampleEs: "Hace calor en verano.",
      partOfSpeech: "adjective",
      order: 7,
    },
    {
      slug: "a1-tobe-ready",
      termEn: "ready",
      termEs: "listo/a",
      exampleEn: "Are you ready for the exam?",
      exampleEs: "¿Estás listo/a para el examen?",
      partOfSpeech: "adjective",
      order: 8,
    },
    {
      slug: "a1-tobe-late",
      termEn: "late",
      termEs: "tarde",
      exampleEn: "She is late for class.",
      exampleEs: "Ella llega tarde a clase.",
      partOfSpeech: "adjective",
      order: 9,
    },
    {
      slug: "a1-tobe-married",
      termEn: "married",
      termEs: "casado/a",
      exampleEn: "My parents are married.",
      exampleEs: "Mis padres están casados.",
      partOfSpeech: "adjective",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-tobe-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I ___ a student.",
      options: ["am", "is", "are"],
      correctAnswer: "am",
      explanation: "Con el pronombre 'I' siempre se usa 'am'.",
      order: 1,
    },
    {
      slug: "a1-tobe-q2",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "She ___ my sister.",
      correctAnswer: "is",
      acceptableAnswers: ["is", "'s"],
      explanation: "Con 'she/he/it' se usa 'is'.",
      order: 2,
    },
    {
      slug: "a1-tobe-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "They ___ happy.",
      options: ["am", "is", "are"],
      correctAnswer: "are",
      explanation: "Con 'they/we/you' se usa 'are'.",
      order: 3,
    },
    {
      slug: "a1-tobe-q4",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "He ___ not from Spain. (negativo)",
      correctAnswer: "is",
      acceptableAnswers: ["is", "isn't"],
      explanation: "La forma negativa de 'is' es 'is not' o 'isn't'.",
      order: 4,
    },
    {
      slug: "a1-tobe-q5",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Nosotros somos estudiantes.'",
      correctAnswer: "We are students.",
      acceptableAnswers: ["We are students", "We're students", "We're students."],
      order: 5,
    },
    {
      slug: "a1-tobe-q6",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'You are my friend.'",
      correctAnswer: "Tú eres mi amigo/a.",
      acceptableAnswers: [
        "Tú eres mi amigo",
        "Tú eres mi amiga",
        "Eres mi amigo",
        "Eres mi amiga",
      ],
      order: 6,
    },
    {
      slug: "a1-tobe-q7",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ you tired?",
      options: ["Am", "Is", "Are"],
      correctAnswer: "Are",
      explanation: "Con 'you' en preguntas se usa 'Are'.",
      order: 7,
    },
    {
      slug: "a1-tobe-q8",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "It ___ cold today.",
      correctAnswer: "is",
      acceptableAnswers: ["is", "'s"],
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-tobe-reading-family",
      skill: "READING",
      title: "My Family",
      bodyEn: `Hello! My name is Ana. I am 25 years old and I am a teacher.

My family is small. My mother is a doctor and she is very busy. My father is not a doctor; he is an engineer. My brother is 18 years old and he is a student.

We are happy together. Today we are a little tired because it is very hot outside, but we are ready for dinner!`,
      order: 1,
      questions: [
        {
          slug: "a1-tobe-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What is Ana's job?",
          options: ["Doctor", "Teacher", "Engineer"],
          correctAnswer: "Teacher",
          order: 1,
        },
        {
          slug: "a1-tobe-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Who is a doctor?",
          options: ["Ana's father", "Ana's mother", "Ana's brother"],
          correctAnswer: "Ana's mother",
          order: 2,
        },
        {
          slug: "a1-tobe-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Why is the family a little tired?",
          options: [
            "Because it is very hot",
            "Because they are hungry",
            "Because they are late",
          ],
          correctAnswer: "Because it is very hot",
          order: 3,
        },
      ],
    },
  ],
};
