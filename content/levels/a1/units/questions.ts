import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-questions",
  levelCode: "A1",
  title: "Preguntas: Yes/No y Wh-questions",
  description:
    "Cómo hacer preguntas de sí/no y preguntas con what, where, who, when, why y how.",
  order: 12,
  estimatedMinutes: 15,

  grammar: {
    title: "Preguntas: Yes/No y Wh-questions",
    explanationMd: `## Yes/No questions (respuesta sí o no)

Se forman invirtiendo el orden: el verbo auxiliar (o "to be"/"can") va **antes** del sujeto. Ya usaste esta estructura en unidades anteriores:

| Con... | Ejemplo |
|---|---|
| to be | **Are** you Colombian? |
| do/does | **Do** you work here? |
| can | **Can** you swim? |
| have got | **Have** you got a car? |
| there is/are | **Is** there a bank near here? |

Se responde corto: *Yes, I am. / No, I don't. / Yes, she can.*

## Wh-questions (piden información)

Empiezan con una palabra interrogativa y **piden información**, no se responden con sí/no.

| Palabra | Pregunta por... | Ejemplo |
|---|---|---|
| what | cosas | **What** do you do? (¿A qué te dedicas?) |
| where | lugar | **Where** do you live? |
| who | personas | **Who** is that man? |
| when | tiempo | **When** do you work? |
| why | razón | **Why** are you here? |
| how | manera | **How** are you? |
| how old | edad | **How old** are you? |
| how much/many | cantidad | **How much** does it cost? |
| which | elección | **Which** color do you like? |
| whose | posesión | **Whose** phone is this? |

## Estructura

**Wh-word + auxiliar (do/does/is/are/can) + sujeto + verbo?**

- *What **do** you **do**?*
- *Where **does** she **live**?*
- *Why **are** you **late**?*

Con "who" como sujeto de la pregunta, no se usa auxiliar: *Who **lives** here?* (no "Who does live here?")`,
    examples: [
      { en: "What do you do?", es: "¿A qué te dedicas?" },
      { en: "Where do you live?", es: "¿Dónde vives?" },
      { en: "Why are you late?", es: "¿Por qué llegas tarde?" },
      { en: "How old are you?", es: "¿Cuántos años tienes?" },
      { en: "Who is that woman?", es: "¿Quién es esa mujer?" },
    ],
  },

  vocabulary: [
    {
      slug: "a1-q-what",
      termEn: "what",
      termEs: "qué",
      exampleEn: "What is your name?",
      exampleEs: "¿Cuál es tu nombre?",
      partOfSpeech: "pronoun",
      order: 1,
    },
    {
      slug: "a1-q-where",
      termEn: "where",
      termEs: "dónde",
      exampleEn: "Where do you live?",
      exampleEs: "¿Dónde vives?",
      partOfSpeech: "adverb",
      order: 2,
    },
    {
      slug: "a1-q-who",
      termEn: "who",
      termEs: "quién",
      exampleEn: "Who is that man?",
      exampleEs: "¿Quién es ese hombre?",
      partOfSpeech: "pronoun",
      order: 3,
    },
    {
      slug: "a1-q-when",
      termEn: "when",
      termEs: "cuándo",
      exampleEn: "When do you work?",
      exampleEs: "¿Cuándo trabajas?",
      partOfSpeech: "adverb",
      order: 4,
    },
    {
      slug: "a1-q-why",
      termEn: "why",
      termEs: "por qué",
      exampleEn: "Why are you late?",
      exampleEs: "¿Por qué llegas tarde?",
      partOfSpeech: "adverb",
      order: 5,
    },
    {
      slug: "a1-q-how",
      termEn: "how",
      termEs: "cómo",
      exampleEn: "How are you?",
      exampleEs: "¿Cómo estás?",
      partOfSpeech: "adverb",
      order: 6,
    },
    {
      slug: "a1-q-howold",
      termEn: "how old",
      termEs: "cuántos años",
      exampleEn: "How old are you?",
      exampleEs: "¿Cuántos años tienes?",
      partOfSpeech: "adverb",
      order: 7,
    },
    {
      slug: "a1-q-howmuch",
      termEn: "how much",
      termEs: "cuánto (incontable)",
      exampleEn: "How much does it cost?",
      exampleEs: "¿Cuánto cuesta?",
      partOfSpeech: "adverb",
      order: 8,
    },
    {
      slug: "a1-q-which",
      termEn: "which",
      termEs: "cuál",
      exampleEn: "Which color do you like?",
      exampleEs: "¿Cuál color te gusta?",
      partOfSpeech: "pronoun",
      order: 9,
    },
    {
      slug: "a1-q-whose",
      termEn: "whose",
      termEs: "de quién",
      exampleEn: "Whose phone is this?",
      exampleEs: "¿De quién es este teléfono?",
      partOfSpeech: "pronoun",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-q-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ do you live?",
      options: ["What", "Where", "Who"],
      correctAnswer: "Where",
      order: 1,
    },
    {
      slug: "a1-q-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ is that woman? (pregunta por una persona)",
      options: ["What", "Who", "How"],
      correctAnswer: "Who",
      order: 2,
    },
    {
      slug: "a1-q-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ are you late?",
      options: ["Why", "When", "Where"],
      correctAnswer: "Why",
      order: 3,
    },
    {
      slug: "a1-q-q4",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "___ do you do? (pregunta por profesión/actividad)",
      correctAnswer: "What",
      order: 4,
    },
    {
      slug: "a1-q-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "Are you Colombian? (tipo de pregunta)",
      options: ["Yes/No question", "Wh-question"],
      correctAnswer: "Yes/No question",
      order: 5,
    },
    {
      slug: "a1-q-q6",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "___ old are you?",
      correctAnswer: "How",
      order: 6,
    },
    {
      slug: "a1-q-q7",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: '¿A qué te dedicas?'",
      correctAnswer: "What do you do?",
      order: 7,
    },
    {
      slug: "a1-q-q8",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Whose phone is this?'",
      correctAnswer: "¿De quién es este teléfono?",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-q-reading-interview",
      skill: "READING",
      title: "A Short Interview",
      bodyEn: `"What's your name?" "My name is Sofia."

"Where are you from?" "I'm from Ecuador."

"What do you do?" "I'm a nurse. I work at a hospital."

"How old are you?" "I'm 27 years old."

"Why are you studying English?" "Because I want to work abroad next year."`,
      order: 1,
      questions: [
        {
          slug: "a1-q-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Where is Sofia from?",
          options: ["Colombia", "Ecuador", "Peru"],
          correctAnswer: "Ecuador",
          order: 1,
        },
        {
          slug: "a1-q-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What is Sofia's job?",
          options: ["Doctor", "Nurse", "Teacher"],
          correctAnswer: "Nurse",
          order: 2,
        },
        {
          slug: "a1-q-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Why is Sofia studying English?",
          options: [
            "She wants to travel",
            "She wants to work abroad",
            "It's required at her job",
          ],
          correctAnswer: "She wants to work abroad",
          order: 3,
        },
      ],
    },
  ],
};
