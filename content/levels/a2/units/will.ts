import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a2-will",
  levelCode: "A2",
  title: "Futuro: will",
  description: "Decisiones espontáneas, predicciones y promesas con 'will'.",
  order: 5,
  estimatedMinutes: 12,

  grammar: {
    title: "Will (decisiones espontáneas y predicciones)",
    explanationMd: `**Will** es un verbo modal (no cambia con la persona) y se usa para:

1. **Decisiones espontáneas** (tomadas en el momento de hablar): *It's cold. I'll close the window.*
2. **Predicciones sin evidencia clara** (opiniones sobre el futuro): *I think it will rain tomorrow.*
3. **Promesas y ofrecimientos**: *I'll help you with your homework.*

## Estructura

**will + verbo infinitivo** (igual para todos los pronombres)

- *I will call you later.* (I'll)
- *She will be here soon.* (She'll)
- *They won't come to the party.* (will not)

## Preguntas

- *Will you help me?* — *Yes, I will. / No, I won't.*

## Will vs. Going to

- **will**: decisión en el momento, promesa, predicción de opinión → *I think I'll stay home.*
- **going to**: plan ya decidido antes, o predicción con evidencia → *I'm going to stay home. (ya lo decidí)*`,
    examples: [
      { en: "I'll call you tomorrow.", es: "Te llamaré mañana." },
      { en: "I think it will be sunny this weekend.", es: "Creo que hará sol este fin de semana." },
      { en: "She won't be at the meeting.", es: "Ella no estará en la reunión." },
      { en: "Will you marry me?", es: "¿Te casarás conmigo?" },
      { en: "Don't worry, I'll help you.", es: "No te preocupes, te ayudaré." },
    ],
  },

  vocabulary: [
    {
      slug: "a2-will-promise",
      termEn: "to promise",
      termEs: "prometer",
      exampleEn: "I promise I'll call you.",
      exampleEs: "Prometo que te llamaré.",
      partOfSpeech: "verb",
      order: 1,
    },
    {
      slug: "a2-will-sunny",
      termEn: "sunny",
      termEs: "soleado",
      exampleEn: "I think it will be sunny tomorrow.",
      exampleEs: "Creo que mañana estará soleado.",
      partOfSpeech: "adjective",
      order: 2,
    },
    {
      slug: "a2-will-future",
      termEn: "future",
      termEs: "futuro",
      exampleEn: "No one knows the future.",
      exampleEs: "Nadie sabe el futuro.",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a2-will-probably",
      termEn: "probably",
      termEs: "probablemente",
      exampleEn: "She will probably be late.",
      exampleEs: "Ella probablemente llegará tarde.",
      partOfSpeech: "adverb",
      order: 4,
    },
    {
      slug: "a2-will-decide",
      termEn: "to decide",
      termEs: "decidir",
      exampleEn: "I'll decide later.",
      exampleEs: "Decidiré más tarde.",
      partOfSpeech: "verb",
      order: 5,
    },
    {
      slug: "a2-will-close",
      termEn: "to close",
      termEs: "cerrar",
      exampleEn: "It's cold. I'll close the window.",
      exampleEs: "Hace frío. Cerraré la ventana.",
      partOfSpeech: "verb",
      order: 6,
    },
    {
      slug: "a2-will-worry",
      termEn: "to worry",
      termEs: "preocuparse",
      exampleEn: "Don't worry, I'll help you.",
      exampleEs: "No te preocupes, te ayudaré.",
      partOfSpeech: "verb",
      order: 7,
    },
    {
      slug: "a2-will-later",
      termEn: "later",
      termEs: "más tarde",
      exampleEn: "I'll call you later.",
      exampleEs: "Te llamaré más tarde.",
      partOfSpeech: "adverb",
      order: 8,
    },
    {
      slug: "a2-will-soon",
      termEn: "soon",
      termEs: "pronto",
      exampleEn: "She will be here soon.",
      exampleEs: "Ella estará aquí pronto.",
      partOfSpeech: "adverb",
      order: 9,
    },
    {
      slug: "a2-will-believe",
      termEn: "to believe",
      termEs: "creer",
      exampleEn: "I believe things will get better.",
      exampleEs: "Creo que las cosas mejorarán.",
      partOfSpeech: "verb",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a2-will-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I think it ___ rain tomorrow.",
      options: ["will", "wills", "is will"],
      correctAnswer: "will",
      order: 1,
    },
    {
      slug: "a2-will-q2",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "She ___ be at the meeting. (negativo)",
      correctAnswer: "won't",
      order: 2,
    },
    {
      slug: "a2-will-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ you help me with this?",
      options: ["Will", "Do", "Are"],
      correctAnswer: "Will",
      order: 3,
    },
    {
      slug: "a2-will-q4",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Responde corto: 'Will you marry me?' (afirmativo)",
      correctAnswer: "Yes, I will.",
      acceptableAnswers: ["Yes, I will", "Yes I will"],
      order: 4,
    },
    {
      slug: "a2-will-q5",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "It's cold. I ___ close the window. (decisión espontánea)",
      correctAnswer: "will",
      acceptableAnswers: ["'ll", "will"],
      order: 5,
    },
    {
      slug: "a2-will-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Te llamaré mañana.'",
      correctAnswer: "I'll call you tomorrow.",
      acceptableAnswers: ["I will call you tomorrow"],
      order: 6,
    },
    {
      slug: "a2-will-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Don't worry, I'll help you.'",
      correctAnswer: "No te preocupes, te ayudaré.",
      order: 7,
    },
    {
      slug: "a2-will-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'prometer' en inglés?",
      correctAnswer: "to promise",
      acceptableAnswers: ["promise"],
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a2-will-reading-fortune",
      skill: "READING",
      title: "The Fortune Teller",
      bodyEn: `"Let me tell your future," says the fortune teller. "You will travel to a new country. You will meet someone important, and you will start a new job."

"Will I be happy?" I ask.

"Yes, you will," she says. "But you won't get rich quickly. You'll need to work hard first."

I don't really believe in fortune tellers, but it's fun to imagine the future!`,
      order: 1,
      questions: [
        {
          slug: "a2-will-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "According to the fortune teller, what will happen?",
          options: [
            "The person will stay home",
            "The person will travel to a new country",
            "The person will lose their job",
          ],
          correctAnswer: "The person will travel to a new country",
          order: 1,
        },
        {
          slug: "a2-will-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Will the person get rich quickly?",
          options: ["Yes", "No", "The text doesn't say"],
          correctAnswer: "No",
          order: 2,
        },
        {
          slug: "a2-will-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Does the writer believe in fortune tellers?",
          options: ["Yes, completely", "Not really", "The text doesn't say"],
          correctAnswer: "Not really",
          order: 3,
        },
      ],
    },
  ],
};
