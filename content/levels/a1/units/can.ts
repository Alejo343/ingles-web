import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-can",
  levelCode: "A1",
  title: "Can / Can't",
  description: "Hablar de habilidades y pedir/dar permiso con 'can' y 'can't'.",
  order: 8,
  estimatedMinutes: 12,

  grammar: {
    title: "Can / Can't (habilidad y permiso)",
    explanationMd: `**Can** es un verbo modal: no cambia con la persona y va seguido del verbo en infinitivo **sin "to"**.

## Habilidad (saber/poder hacer algo)

- *I can swim.* (Sé nadar.)
- *She can speak three languages.* (Ella sabe hablar tres idiomas.)
- *He can't drive.* (Él no sabe conducir.) — **can't** = *cannot*

## Permiso

- *Can I open the window?* (¿Puedo abrir la ventana?)
- *You can't park here.* (No puedes estacionar aquí.)

## Estructura

| | Afirmativo | Negativo | Pregunta |
|---|---|---|---|
| Todos los pronombres | subject + **can** + verbo | subject + **can't** + verbo | **Can** + subject + verbo? |

- *I can cook.* / *I can't cook.* / *Can you cook?*

No se añade -s con he/she/it: *He can swim* (no "cans" ni "can swims").

## Respuestas cortas

*Can you drive? Yes, I can. / No, I can't.*`,
    examples: [
      { en: "I can play the guitar.", es: "Sé tocar la guitarra." },
      { en: "She can't come to the party.", es: "Ella no puede venir a la fiesta." },
      { en: "Can you help me, please?", es: "¿Puedes ayudarme, por favor?" },
      { en: "He can speak English and French.", es: "Él sabe hablar inglés y francés." },
      { en: "We can't find the keys.", es: "No podemos encontrar las llaves." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-can-swim",
      termEn: "to swim",
      termEs: "nadar",
      exampleEn: "I can swim very well.",
      exampleEs: "Sé nadar muy bien.",
      partOfSpeech: "verb",
      order: 1,
    },
    {
      slug: "a1-can-drive",
      termEn: "to drive",
      termEs: "conducir / manejar",
      exampleEn: "He can't drive yet.",
      exampleEs: "Él todavía no sabe conducir.",
      partOfSpeech: "verb",
      order: 2,
    },
    {
      slug: "a1-can-cook",
      termEn: "to cook",
      termEs: "cocinar",
      exampleEn: "Can you cook Italian food?",
      exampleEs: "¿Sabes cocinar comida italiana?",
      partOfSpeech: "verb",
      order: 3,
    },
    {
      slug: "a1-can-guitar",
      termEn: "guitar",
      termEs: "guitarra",
      exampleEn: "She can play the guitar.",
      exampleEs: "Ella sabe tocar la guitarra.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a1-can-help",
      termEn: "to help",
      termEs: "ayudar",
      exampleEn: "Can you help me with this?",
      exampleEs: "¿Puedes ayudarme con esto?",
      partOfSpeech: "verb",
      order: 5,
    },
    {
      slug: "a1-can-language",
      termEn: "language",
      termEs: "idioma",
      exampleEn: "How many languages can you speak?",
      exampleEs: "¿Cuántos idiomas sabes hablar?",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-can-park",
      termEn: "to park",
      termEs: "estacionar / aparcar",
      exampleEn: "You can't park here.",
      exampleEs: "No puedes estacionar aquí.",
      partOfSpeech: "verb",
      order: 7,
    },
    {
      slug: "a1-can-ride",
      termEn: "to ride a bike",
      termEs: "andar en bicicleta",
      exampleEn: "My daughter can ride a bike now.",
      exampleEs: "Mi hija ya sabe andar en bicicleta.",
      partOfSpeech: "verb",
      order: 8,
    },
    {
      slug: "a1-can-window",
      termEn: "window",
      termEs: "ventana",
      exampleEn: "Can I open the window?",
      exampleEs: "¿Puedo abrir la ventana?",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-can-find",
      termEn: "to find",
      termEs: "encontrar",
      exampleEn: "We can't find the keys.",
      exampleEs: "No podemos encontrar las llaves.",
      partOfSpeech: "verb",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-can-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I ___ speak three languages.",
      options: ["can", "cans", "can't"],
      correctAnswer: "can",
      order: 1,
    },
    {
      slug: "a1-can-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "She ___ swim; she never learned.",
      options: ["can", "can't", "cans"],
      correctAnswer: "can't",
      order: 2,
    },
    {
      slug: "a1-can-q3",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "___ you help me, please? (pregunta)",
      correctAnswer: "Can",
      order: 3,
    },
    {
      slug: "a1-can-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "He ___ drive a car.",
      options: ["can to", "can", "cans"],
      correctAnswer: "can",
      explanation: "Después de 'can' el verbo va sin 'to'.",
      order: 4,
    },
    {
      slug: "a1-can-q5",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Responde corto: 'Can you cook?' (respuesta afirmativa)",
      correctAnswer: "Yes, I can.",
      acceptableAnswers: ["Yes, I can", "Yes I can"],
      order: 5,
    },
    {
      slug: "a1-can-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'No puedo encontrar mis llaves.'",
      correctAnswer: "I can't find my keys.",
      order: 6,
    },
    {
      slug: "a1-can-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'You can't park here.'",
      correctAnswer: "No puedes estacionar aquí.",
      order: 7,
    },
    {
      slug: "a1-can-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'conducir' en inglés?",
      correctAnswer: "to drive",
      acceptableAnswers: ["drive"],
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-can-reading-talent",
      skill: "READING",
      title: "A Talented Family",
      bodyEn: `In my family, everyone has a talent. My father can cook amazing food. My mother can't cook very well, but she can play the guitar beautifully.

My brother can swim really fast — he's in a swimming team. I can't swim well, but I can speak two languages: Spanish and English.

Can you guess what talent I want to learn next? I want to learn to drive!`,
      order: 1,
      questions: [
        {
          slug: "a1-can-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What can the father do well?",
          options: ["Swim", "Cook", "Play guitar"],
          correctAnswer: "Cook",
          order: 1,
        },
        {
          slug: "a1-can-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What can the mother do?",
          options: [
            "Play the guitar",
            "Cook very well",
            "Speak three languages",
          ],
          correctAnswer: "Play the guitar",
          order: 2,
        },
        {
          slug: "a1-can-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What does the writer want to learn?",
          options: ["To swim", "To cook", "To drive"],
          correctAnswer: "To drive",
          order: 3,
        },
      ],
    },
  ],
};
