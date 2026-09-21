import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a2-must-have-to-should",
  levelCode: "A2",
  title: "Must, have to, should",
  description: "Obligación, necesidad y consejos: la diferencia entre 'must', 'have to' y 'should'.",
  order: 6,
  estimatedMinutes: 15,

  grammar: {
    title: "Must, have to, should",
    explanationMd: `## Must / Have to (obligación)

Ambos expresan obligación o necesidad, pero con un matiz:

- **must**: la obligación viene de quien habla (una regla que yo considero importante). *I must study tonight.* (yo decido que es necesario)
- **have to**: la obligación viene de fuera (una regla, ley, o alguien más). *I have to wear a uniform at work.* (es una regla del trabajo, no mi decisión)

En la práctica, en inglés cotidiano se usan casi indistintamente para hablar de obligación.

**Have to** cambia con la persona (como un verbo normal): *I have to / she has to*. Negativo: *don't have to / doesn't have to* — ¡significa que **no es necesario**, no que está prohibido!

**Must** no cambia y su negativo, **mustn't**, sí significa **prohibición**: *You mustn't smoke here.* (está prohibido)

## Should (consejo, recomendación)

**Should** expresa un **consejo**, no una obligación fuerte. Es más suave.

- *You should drink more water.* (te lo recomiendo)
- *You shouldn't eat so much sugar.* (te aconsejo que no)

Estructura: **should/shouldn't + verbo infinitivo**, igual para todos los pronombres.

## Resumen

| Forma | Significado |
|---|---|
| must / have to | obligación (es necesario) |
| mustn't | prohibido |
| don't have to | no es necesario (pero se puede) |
| should / shouldn't | consejo / recomendación |`,
    examples: [
      { en: "I have to finish this report today.", es: "Tengo que terminar este informe hoy." },
      { en: "You mustn't park here.", es: "No puedes/debes estacionar aquí (está prohibido)." },
      { en: "You don't have to come if you're busy.", es: "No es necesario que vengas si estás ocupado." },
      { en: "You should see a doctor.", es: "Deberías ver a un médico." },
      { en: "We must be careful.", es: "Debemos tener cuidado." },
    ],
  },

  vocabulary: [
    {
      slug: "a2-mhs-report",
      termEn: "report",
      termEs: "informe",
      exampleEn: "I have to finish this report today.",
      exampleEs: "Tengo que terminar este informe hoy.",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a2-mhs-rule",
      termEn: "rule",
      termEs: "regla",
      exampleEn: "You must follow the rules.",
      exampleEs: "Debes seguir las reglas.",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a2-mhs-doctor",
      termEn: "doctor",
      termEs: "médico/a",
      exampleEn: "You should see a doctor.",
      exampleEs: "Deberías ver a un médico.",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a2-mhs-careful",
      termEn: "careful",
      termEs: "cuidadoso/a",
      exampleEn: "We must be careful on the road.",
      exampleEs: "Debemos tener cuidado en la carretera.",
      partOfSpeech: "adjective",
      order: 4,
    },
    {
      slug: "a2-mhs-smoke",
      termEn: "to smoke",
      termEs: "fumar",
      exampleEn: "You mustn't smoke here.",
      exampleEs: "No está permitido fumar aquí.",
      partOfSpeech: "verb",
      order: 5,
    },
    {
      slug: "a2-mhs-uniform",
      termEn: "uniform",
      termEs: "uniforme",
      exampleEn: "I have to wear a uniform at work.",
      exampleEs: "Tengo que usar uniforme en el trabajo.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a2-mhs-sugar",
      termEn: "sugar",
      termEs: "azúcar",
      exampleEn: "You shouldn't eat so much sugar.",
      exampleEs: "No deberías comer tanta azúcar.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a2-mhs-exercise",
      termEn: "to exercise",
      termEs: "hacer ejercicio",
      exampleEn: "You should exercise more.",
      exampleEs: "Deberías hacer más ejercicio.",
      partOfSpeech: "verb",
      order: 8,
    },
    {
      slug: "a2-mhs-permission",
      termEn: "permission",
      termEs: "permiso",
      exampleEn: "You don't have to ask for permission.",
      exampleEs: "No es necesario que pidas permiso.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a2-mhs-necessary",
      termEn: "necessary",
      termEs: "necesario/a",
      exampleEn: "Is it necessary to arrive early?",
      exampleEs: "¿Es necesario llegar temprano?",
      partOfSpeech: "adjective",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a2-mhs-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "You ___ smoke here. (prohibido)",
      options: ["don't have to", "mustn't", "should"],
      correctAnswer: "mustn't",
      order: 1,
    },
    {
      slug: "a2-mhs-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "You ___ come if you're busy. (no es necesario)",
      options: ["mustn't", "don't have to", "shouldn't"],
      correctAnswer: "don't have to",
      order: 2,
    },
    {
      slug: "a2-mhs-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "You ___ see a doctor. (consejo)",
      options: ["must", "should", "have to"],
      correctAnswer: "should",
      order: 3,
    },
    {
      slug: "a2-mhs-q4",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "She ___ to wear a uniform at work. (have, tercera persona)",
      correctAnswer: "has",
      order: 4,
    },
    {
      slug: "a2-mhs-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "You ___ eat so much sugar. (consejo negativo)",
      options: ["shouldn't", "mustn't", "don't have to"],
      correctAnswer: "shouldn't",
      order: 5,
    },
    {
      slug: "a2-mhs-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Debemos tener cuidado.'",
      correctAnswer: "We must be careful.",
      order: 6,
    },
    {
      slug: "a2-mhs-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'You don't have to ask for permission.'",
      correctAnswer: "No es necesario que pidas permiso.",
      order: 7,
    },
    {
      slug: "a2-mhs-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'necesario' en inglés?",
      correctAnswer: "necessary",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a2-mhs-reading-newjob",
      skill: "READING",
      title: "Rules at My New Job",
      bodyEn: `I started a new job last week. There are some rules I must follow. I have to arrive before 8 a.m. every day, and I have to wear a uniform.

We mustn't use our phones during work hours — it's strictly forbidden. However, we don't have to eat lunch at the office; we can go out if we want.

My manager also gave me some advice: "You should ask questions if you don't understand something. And you shouldn't be afraid of making mistakes."`,
      order: 1,
      questions: [
        {
          slug: "a2-mhs-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What time does the writer have to arrive?",
          options: ["Before 8 a.m.", "After 8 a.m.", "At 9 a.m."],
          correctAnswer: "Before 8 a.m.",
          order: 1,
        },
        {
          slug: "a2-mhs-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Is it necessary to eat lunch at the office?",
          options: ["Yes, it's required", "No, it's not necessary", "The text doesn't say"],
          correctAnswer: "No, it's not necessary",
          order: 2,
        },
        {
          slug: "a2-mhs-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What advice does the manager give?",
          options: [
            "Don't ask questions",
            "Ask questions if you don't understand",
            "Never make mistakes",
          ],
          correctAnswer: "Ask questions if you don't understand",
          order: 3,
        },
      ],
    },
  ],
};
