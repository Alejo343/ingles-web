import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a2-object-pronouns",
  levelCode: "A2",
  title: "Pronombres de objeto y posesivos",
  description: "Me, you, him, her... y mine, yours, his... para no repetir sustantivos.",
  order: 9,
  estimatedMinutes: 12,

  grammar: {
    title: "Pronombres de objeto y pronombres posesivos",
    explanationMd: `## Pronombres de objeto

Reemplazan al **objeto** de la frase (quien recibe la acción), no al sujeto.

| Sujeto | Objeto |
|---|---|
| I | me |
| you | you |
| he | him |
| she | her |
| it | it |
| we | us |
| they | them |

- *She loves **him**.* (no "she loves he")
- *Can you help **me**?*
- *I don't understand **them**.*

## Pronombres posesivos

Reemplazan a "adjetivo posesivo + sustantivo" — **no** van seguidos de un sustantivo.

| Adjetivo posesivo | Pronombre posesivo |
|---|---|
| my | mine |
| your | yours |
| his | his |
| her | hers |
| its | (no se usa) |
| our | ours |
| their | theirs |

- *This is my book.* → *This book is **mine**.*
- *Is that your car?* → *Is that car **yours**?*
- *Their house is bigger than **ours**.*

**Ojo:** *his* funciona igual como adjetivo posesivo y como pronombre posesivo: *This is his car. This car is his.*`,
    examples: [
      { en: "Can you help me, please?", es: "¿Puedes ayudarme, por favor?" },
      { en: "I saw her at the store.", es: "La vi a ella en la tienda." },
      { en: "This phone is mine, not yours.", es: "Este teléfono es mío, no tuyo." },
      { en: "We invited them to the party.", es: "Los invitamos a ellos a la fiesta." },
      { en: "Their house is bigger than ours.", es: "Su casa es más grande que la nuestra." },
    ],
  },

  vocabulary: [
    {
      slug: "a2-op-invite",
      termEn: "to invite",
      termEs: "invitar",
      exampleEn: "We invited them to the party.",
      exampleEs: "Los invitamos a ellos a la fiesta.",
      partOfSpeech: "verb",
      order: 1,
    },
    {
      slug: "a2-op-understand",
      termEn: "to understand",
      termEs: "entender",
      exampleEn: "I don't understand them.",
      exampleEs: "No los entiendo a ellos.",
      partOfSpeech: "verb",
      order: 2,
    },
    {
      slug: "a2-op-miss",
      termEn: "to miss (someone)",
      termEs: "extrañar",
      exampleEn: "I miss him a lot.",
      exampleEs: "Lo extraño mucho.",
      partOfSpeech: "verb",
      order: 3,
    },
    {
      slug: "a2-op-store",
      termEn: "store",
      termEs: "tienda",
      exampleEn: "I saw her at the store.",
      exampleEs: "La vi a ella en la tienda.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a2-op-give",
      termEn: "to give",
      termEs: "dar",
      exampleEn: "Can you give it to me?",
      exampleEs: "¿Me lo puedes dar?",
      partOfSpeech: "verb",
      order: 5,
    },
    {
      slug: "a2-op-borrow",
      termEn: "to borrow",
      termEs: "pedir prestado",
      exampleEn: "Can I borrow your pen? This one is mine.",
      exampleEs: "¿Me prestas tu lapicero? Este es el mío.",
      partOfSpeech: "verb",
      order: 6,
    },
    {
      slug: "a2-op-visit",
      termEn: "to visit",
      termEs: "visitar",
      exampleEn: "We're going to visit them this weekend.",
      exampleEs: "Vamos a visitarlos este fin de semana.",
      partOfSpeech: "verb",
      order: 7,
    },
    {
      slug: "a2-op-thankfor",
      termEn: "to thank someone",
      termEs: "agradecer a alguien",
      exampleEn: "I want to thank you for your help.",
      exampleEs: "Quiero agradecerte por tu ayuda.",
      partOfSpeech: "verb",
      order: 8,
    },
    {
      slug: "a2-op-call",
      termEn: "to call",
      termEs: "llamar",
      exampleEn: "She calls him every day.",
      exampleEs: "Ella lo llama a él todos los días.",
      partOfSpeech: "verb",
      order: 9,
    },
    {
      slug: "a2-op-trust",
      termEn: "to trust",
      termEs: "confiar en",
      exampleEn: "I trust her completely.",
      exampleEs: "Confío en ella completamente.",
      partOfSpeech: "verb",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a2-op-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "She loves ___. (he)",
      options: ["he", "him", "his"],
      correctAnswer: "him",
      order: 1,
    },
    {
      slug: "a2-op-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "Can you help ___? (I)",
      options: ["I", "me", "my"],
      correctAnswer: "me",
      order: 2,
    },
    {
      slug: "a2-op-q3",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "We invited ___ to the party. (they)",
      correctAnswer: "them",
      order: 3,
    },
    {
      slug: "a2-op-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "This phone is ___, not yours. (my → pronombre posesivo)",
      options: ["my", "mine", "me"],
      correctAnswer: "mine",
      order: 4,
    },
    {
      slug: "a2-op-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "Their house is bigger than ___. (our)",
      options: ["ours", "our", "us"],
      correctAnswer: "ours",
      order: 5,
    },
    {
      slug: "a2-op-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'La vi a ella en la tienda.'",
      correctAnswer: "I saw her at the store.",
      order: 6,
    },
    {
      slug: "a2-op-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'This book is mine.'",
      correctAnswer: "Este libro es mío.",
      order: 7,
    },
    {
      slug: "a2-op-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'confiar en' en inglés?",
      correctAnswer: "to trust",
      acceptableAnswers: ["trust"],
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a2-op-reading-lostphone",
      skill: "READING",
      title: "A Lost Phone",
      bodyEn: `"Is this phone yours?" the waiter asks Marco.

"No, it's not mine. Maybe it's hers," Marco says, pointing at Elena.

"Is it yours, Elena?" the waiter asks her.

"No, it's not mine either. Let's call the number and ask them," Elena suggests.

They call the number, and a woman answers. "Yes! That's my phone. Thank you so much for finding it! Can you leave it with the waiter? I'll pick it up from him tonight."`,
      order: 1,
      questions: [
        {
          slug: "a2-op-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Is the phone Marco's?",
          options: ["Yes", "No", "The text doesn't say"],
          correctAnswer: "No",
          order: 1,
        },
        {
          slug: "a2-op-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What does Elena suggest?",
          options: [
            "Keep the phone",
            "Call the number",
            "Give it to Marco",
          ],
          correctAnswer: "Call the number",
          order: 2,
        },
        {
          slug: "a2-op-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Who will pick up the phone?",
          options: ["Marco", "Elena", "The woman who owns it"],
          correctAnswer: "The woman who owns it",
          order: 3,
        },
      ],
    },
  ],
};
