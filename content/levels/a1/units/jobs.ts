import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-jobs",
  levelCode: "A1",
  title: "Profesiones y trabajos",
  description: "Vocabulario de profesiones y cómo hablar de a qué te dedicas.",
  order: 18,
  estimatedMinutes: 12,

  grammar: {
    title: "Profesiones y trabajos",
    explanationMd: `## Preguntar y decir la profesión

- *What do you do?* / *What's your job?* (¿A qué te dedicas?)
- *I'm a teacher.* / *I work as a teacher.* (Soy profesor.)

Se usa el artículo **a/an** antes de la profesión: *She is a nurse. He is an engineer.*

## Dónde trabaja cada profesión

- *A teacher works at a school.*
- *A doctor works at a hospital.*
- *A chef works at a restaurant.*

## Verbo "to work"

- *I work for a big company.* (trabajo para)
- *I work as a designer.* (trabajo como)
- *I work in marketing.* (trabajo en el área de)

## Vocabulario de profesiones comunes

teacher, doctor, nurse, engineer, lawyer, chef, waiter, police officer, firefighter, accountant, designer, driver`,
    examples: [
      { en: "What do you do? I'm an engineer.", es: "¿A qué te dedicas? Soy ingeniero." },
      { en: "She works as a nurse at the hospital.", es: "Ella trabaja como enfermera en el hospital." },
      { en: "My brother is a police officer.", es: "Mi hermano es policía." },
      { en: "He works for a big company.", es: "Él trabaja para una empresa grande." },
      { en: "I work in marketing.", es: "Trabajo en el área de marketing." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-job-teacher",
      termEn: "teacher",
      termEs: "profesor/a",
      exampleEn: "She is a teacher.",
      exampleEs: "Ella es profesora.",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a1-job-doctor",
      termEn: "doctor",
      termEs: "médico/a",
      exampleEn: "He is a doctor.",
      exampleEs: "Él es médico.",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a1-job-nurse",
      termEn: "nurse",
      termEs: "enfermero/a",
      exampleEn: "She works as a nurse.",
      exampleEs: "Ella trabaja como enfermera.",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a1-job-engineer",
      termEn: "engineer",
      termEs: "ingeniero/a",
      exampleEn: "I'm an engineer.",
      exampleEs: "Soy ingeniero.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a1-job-lawyer",
      termEn: "lawyer",
      termEs: "abogado/a",
      exampleEn: "My sister is a lawyer.",
      exampleEs: "Mi hermana es abogada.",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a1-job-chef",
      termEn: "chef",
      termEs: "chef / cocinero(a)",
      exampleEn: "He works as a chef.",
      exampleEs: "Él trabaja como chef.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-job-waiter",
      termEn: "waiter / waitress",
      termEs: "mesero/a",
      exampleEn: "She's a waitress at that restaurant.",
      exampleEs: "Ella es mesera en ese restaurante.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-job-police",
      termEn: "police officer",
      termEs: "policía (persona)",
      exampleEn: "My brother is a police officer.",
      exampleEs: "Mi hermano es policía.",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-job-firefighter",
      termEn: "firefighter",
      termEs: "bombero/a",
      exampleEn: "Her uncle is a firefighter.",
      exampleEs: "Su tío es bombero.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-job-accountant",
      termEn: "accountant",
      termEs: "contador/a",
      exampleEn: "He works as an accountant.",
      exampleEs: "Él trabaja como contador.",
      partOfSpeech: "noun",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-job-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "She is ___ nurse.",
      options: ["a", "an", "the"],
      correctAnswer: "a",
      order: 1,
    },
    {
      slug: "a1-job-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "He is ___ engineer.",
      options: ["a", "an", "the"],
      correctAnswer: "an",
      order: 2,
    },
    {
      slug: "a1-job-q3",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'abogado/a' en inglés?",
      correctAnswer: "lawyer",
      order: 3,
    },
    {
      slug: "a1-job-q4",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'bombero/a' en inglés?",
      correctAnswer: "firefighter",
      order: 4,
    },
    {
      slug: "a1-job-q5",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "I ___ as a designer. (trabajar)",
      correctAnswer: "work",
      order: 5,
    },
    {
      slug: "a1-job-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: '¿A qué te dedicas?'",
      correctAnswer: "What do you do?",
      order: 6,
    },
    {
      slug: "a1-job-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'He works for a big company.'",
      correctAnswer: "Él trabaja para una empresa grande.",
      order: 7,
    },
    {
      slug: "a1-job-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'contador/a' en inglés?",
      correctAnswer: "accountant",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-job-reading-careerday",
      skill: "READING",
      title: "Career Day at School",
      bodyEn: `Today is Career Day at my daughter's school. Parents come to talk about their jobs.

Mr. Lopez is a firefighter, and he brings the fire truck! The kids love it. Mrs. Garcia is a doctor, and she talks about how to stay healthy.

My job is boring in comparison — I'm an accountant, so I talk about numbers. But the kids still ask good questions. Next year, maybe I'll bring a calculator for them to try!`,
      order: 1,
      questions: [
        {
          slug: "a1-job-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What is Mr. Lopez's job?",
          options: ["Doctor", "Firefighter", "Teacher"],
          correctAnswer: "Firefighter",
          order: 1,
        },
        {
          slug: "a1-job-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What does Mrs. Garcia talk about?",
          options: [
            "How to stay healthy",
            "Numbers",
            "Fire trucks",
          ],
          correctAnswer: "How to stay healthy",
          order: 2,
        },
        {
          slug: "a1-job-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What is the writer's job?",
          options: ["Firefighter", "Doctor", "Accountant"],
          correctAnswer: "Accountant",
          order: 3,
        },
      ],
    },
  ],
};
