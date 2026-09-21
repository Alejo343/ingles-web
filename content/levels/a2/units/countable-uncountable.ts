import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a2-countable-uncountable",
  levelCode: "A2",
  title: "Contables e incontables: some, any, much, many",
  description: "Sustantivos que se pueden contar y los que no, y cómo hablar de cantidad.",
  order: 7,
  estimatedMinutes: 15,

  grammar: {
    title: "Sustantivos contables e incontables",
    explanationMd: `## Sustantivos contables

Se pueden contar (uno, dos, tres...) y tienen plural: *an apple, two apples, three books.*

## Sustantivos incontables

No se pueden contar de forma individual y **no tienen plural**: *water, rice, sugar, money, information, advice.*

- *I need water.* (no "a water" ni "waters")
- Para cantidades específicas, se usa una unidad: *a glass of water, a piece of advice, a bag of rice.*

## Some / Any

- **some**: en frases afirmativas, con contables e incontables → *I have some apples. I need some water.*
- **any**: en negativas y preguntas → *I don't have any apples. Do you have any water?*

## Much / Many / A lot of

| | Contables | Incontables |
|---|---|---|
| Preguntas / negativas | How **many** apples? / not **many** | How **much** water? / not **much** |
| Afirmativas (más natural) | **a lot of** apples | **a lot of** water |

- *How many books do you have?*
- *How much money do you have?*
- *I have a lot of friends.* (más natural que "many friends" en afirmativo)

## A few / A little

- **a few** + contable: *I have a few friends here.* (algunos, pocos)
- **a little** + incontable: *I have a little time.* (un poco)`,
    examples: [
      { en: "I don't have any money.", es: "No tengo nada de dinero." },
      { en: "How many apples do you want?", es: "¿Cuántas manzanas quieres?" },
      { en: "How much sugar do you need?", es: "¿Cuánta azúcar necesitas?" },
      { en: "There are a lot of people here.", es: "Hay mucha gente aquí." },
      { en: "Can I have some water, please?", es: "¿Me das un poco de agua, por favor?" },
    ],
  },

  vocabulary: [
    {
      slug: "a2-cu-water",
      termEn: "water",
      termEs: "agua",
      exampleEn: "Can I have some water, please?",
      exampleEs: "¿Me das un poco de agua, por favor?",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a2-cu-rice",
      termEn: "rice",
      termEs: "arroz",
      exampleEn: "We need a bag of rice.",
      exampleEs: "Necesitamos una bolsa de arroz.",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a2-cu-money",
      termEn: "money",
      termEs: "dinero",
      exampleEn: "I don't have any money.",
      exampleEs: "No tengo nada de dinero.",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a2-cu-information",
      termEn: "information",
      termEs: "información",
      exampleEn: "I need more information.",
      exampleEs: "Necesito más información.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a2-cu-advice",
      termEn: "advice",
      termEs: "consejo(s)",
      exampleEn: "Can you give me some advice?",
      exampleEs: "¿Me puedes dar algún consejo?",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a2-cu-bread",
      termEn: "bread",
      termEs: "pan",
      exampleEn: "We need to buy some bread.",
      exampleEs: "Necesitamos comprar pan.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a2-cu-time",
      termEn: "time",
      termEs: "tiempo",
      exampleEn: "I have a little time before the meeting.",
      exampleEs: "Tengo un poco de tiempo antes de la reunión.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a2-cu-glass",
      termEn: "glass",
      termEs: "vaso",
      exampleEn: "I'd like a glass of water.",
      exampleEs: "Quisiera un vaso de agua.",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a2-cu-people",
      termEn: "people",
      termEs: "gente / personas",
      exampleEn: "There are a lot of people here.",
      exampleEs: "Hay mucha gente aquí.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a2-cu-few",
      termEn: "a few",
      termEs: "algunos/as (pocos, contable)",
      exampleEn: "I have a few friends here.",
      exampleEs: "Tengo algunos amigos aquí.",
      partOfSpeech: "adjective",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a2-cu-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "How ___ apples do you want?",
      options: ["much", "many", "a little"],
      correctAnswer: "many",
      explanation: "'Apple' es contable, así que se usa 'many'.",
      order: 1,
    },
    {
      slug: "a2-cu-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "How ___ sugar do you need?",
      options: ["much", "many", "a few"],
      correctAnswer: "much",
      explanation: "'Sugar' es incontable, así que se usa 'much'.",
      order: 2,
    },
    {
      slug: "a2-cu-q3",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "I don't have ___ money. (negativo)",
      correctAnswer: "any",
      order: 3,
    },
    {
      slug: "a2-cu-q4",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "Can I have ___ water, please? (afirmativo/petición)",
      correctAnswer: "some",
      order: 4,
    },
    {
      slug: "a2-cu-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "There are ___ people here. (muchas, afirmativo natural)",
      options: ["a lot of", "much", "any"],
      correctAnswer: "a lot of",
      order: 5,
    },
    {
      slug: "a2-cu-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Necesito más información.'",
      correctAnswer: "I need more information.",
      order: 6,
    },
    {
      slug: "a2-cu-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'I have a little time before the meeting.'",
      correctAnswer: "Tengo un poco de tiempo antes de la reunión.",
      order: 7,
    },
    {
      slug: "a2-cu-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'consejo' en inglés?",
      correctAnswer: "advice",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a2-cu-reading-shopping-list",
      skill: "READING",
      title: "Shopping for Dinner",
      bodyEn: `"Do we have any rice?" my mom asks.

"No, we don't have any. And we don't have much bread either," I say.

"OK, let's make a list. We need some rice, a little bread, and a few tomatoes. How much money do we have?"

"We have enough. There aren't many people at the market today, so it will be quick."`,
      order: 1,
      questions: [
        {
          slug: "a2-cu-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Do they have any rice?",
          options: ["Yes", "No", "The text doesn't say"],
          correctAnswer: "No",
          order: 1,
        },
        {
          slug: "a2-cu-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What do they need to buy?",
          options: [
            "Rice, bread, and tomatoes",
            "Only rice",
            "Money",
          ],
          correctAnswer: "Rice, bread, and tomatoes",
          order: 2,
        },
        {
          slug: "a2-cu-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Why will shopping be quick?",
          options: [
            "The market is small",
            "There aren't many people",
            "They have a car",
          ],
          correctAnswer: "There aren't many people",
          order: 3,
        },
      ],
    },
  ],
};
