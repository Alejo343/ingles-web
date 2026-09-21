import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-demonstratives",
  levelCode: "A1",
  title: "This, that, these, those",
  description: "Cómo señalar cosas cercanas o lejanas, en singular o plural.",
  order: 5,
  estimatedMinutes: 10,

  grammar: {
    title: "Demostrativos: this, that, these, those",
    explanationMd: `Se usan para señalar algo, según la **distancia** y el **número**.

| | Cerca | Lejos |
|---|---|---|
| Singular | **this** (este/esta) | **that** (ese/esa, aquel/aquella) |
| Plural | **these** (estos/estas) | **those** (esos/esas, aquellos/as) |

## Uso

- *This is my phone.* (el teléfono que tengo en la mano)
- *That is your car.* (el carro que está lejos, allá)
- *These are my keys.* (las llaves que tengo cerca)
- *Those are your books.* (los libros que están lejos)

También se usan **antes de un sustantivo**:

- *This book is interesting.*
- *Those shoes are expensive.*

## This / That is → contracciones

En conversación, "this is" y "that is" a veces se acortan a *this's* / *that's*, pero **that's** es mucho más común que "this's" (que casi no se usa).`,
    examples: [
      { en: "This is my sister.", es: "Esta es mi hermana." },
      { en: "That is a beautiful house.", es: "Esa es una casa hermosa." },
      { en: "These are my shoes.", es: "Estos son mis zapatos." },
      { en: "Those are expensive.", es: "Esos son caros." },
      { en: "This book is mine.", es: "Este libro es mío." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-dem-shoes",
      termEn: "shoes",
      termEs: "zapatos",
      exampleEn: "These shoes are new.",
      exampleEs: "Estos zapatos son nuevos.",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a1-dem-keys",
      termEn: "keys",
      termEs: "llaves",
      exampleEn: "Are these your keys?",
      exampleEs: "¿Estas son tus llaves?",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a1-dem-expensive",
      termEn: "expensive",
      termEs: "caro/a",
      exampleEn: "Those shoes are expensive.",
      exampleEs: "Esos zapatos son caros.",
      partOfSpeech: "adjective",
      order: 3,
    },
    {
      slug: "a1-dem-cheap",
      termEn: "cheap",
      termEs: "barato/a",
      exampleEn: "This restaurant is cheap.",
      exampleEs: "Este restaurante es barato.",
      partOfSpeech: "adjective",
      order: 4,
    },
    {
      slug: "a1-dem-beautiful",
      termEn: "beautiful",
      termEs: "hermoso/a",
      exampleEn: "That is a beautiful painting.",
      exampleEs: "Esa es una pintura hermosa.",
      partOfSpeech: "adjective",
      order: 5,
    },
    {
      slug: "a1-dem-picture",
      termEn: "picture",
      termEs: "foto / cuadro",
      exampleEn: "This picture is from my trip.",
      exampleEs: "Esta foto es de mi viaje.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-dem-glasses",
      termEn: "glasses",
      termEs: "gafas / lentes",
      exampleEn: "Those glasses look good on you.",
      exampleEs: "Esos lentes te quedan bien.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-dem-bag",
      termEn: "bag",
      termEs: "bolso / bolsa",
      exampleEn: "This bag is heavy.",
      exampleEs: "Este bolso pesa mucho.",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-dem-mountains",
      termEn: "mountains",
      termEs: "montañas",
      exampleEn: "Those mountains are very tall.",
      exampleEs: "Esas montañas son muy altas.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-dem-street",
      termEn: "street",
      termEs: "calle",
      exampleEn: "That street is very busy.",
      exampleEs: "Esa calle es muy transitada.",
      partOfSpeech: "noun",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-dem-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ is my phone. (en tu mano, singular, cerca)",
      options: ["This", "That", "These"],
      correctAnswer: "This",
      order: 1,
    },
    {
      slug: "a1-dem-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ are my shoes. (plural, cerca)",
      options: ["This", "That", "These"],
      correctAnswer: "These",
      order: 2,
    },
    {
      slug: "a1-dem-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ mountains are beautiful. (plural, lejos)",
      options: ["This", "Those", "That"],
      correctAnswer: "Those",
      order: 3,
    },
    {
      slug: "a1-dem-q4",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "___ car over there is very expensive. (singular, lejos)",
      correctAnswer: "That",
      order: 4,
    },
    {
      slug: "a1-dem-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "Are ___ your keys? (plural, cerca de la otra persona)",
      options: ["this", "that", "these"],
      correctAnswer: "these",
      order: 5,
    },
    {
      slug: "a1-dem-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Esta es mi casa.'",
      correctAnswer: "This is my house.",
      order: 6,
    },
    {
      slug: "a1-dem-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Those shoes are expensive.'",
      correctAnswer: "Esos zapatos son caros.",
      order: 7,
    },
    {
      slug: "a1-dem-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'barato' en inglés?",
      correctAnswer: "cheap",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-dem-reading-shopping",
      skill: "READING",
      title: "Shopping for Shoes",
      bodyEn: `"Excuse me, how much are these shoes?" Ana asks.

"Those are $40," says the shop assistant. "But this pair here is cheaper, only $25."

"And that bag on the shelf? Is it expensive?"

"No, that bag is on sale today. It's very cheap!"

Ana buys the shoes and the bag. She is happy with her shopping.`,
      order: 1,
      questions: [
        {
          slug: "a1-dem-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "How much are the shoes Ana asks about first?",
          options: ["$25", "$40", "$15"],
          correctAnswer: "$40",
          order: 1,
        },
        {
          slug: "a1-dem-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Why is the bag cheap?",
          options: [
            "It's old",
            "It's on sale today",
            "It's small",
          ],
          correctAnswer: "It's on sale today",
          order: 2,
        },
        {
          slug: "a1-dem-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What does Ana buy?",
          options: [
            "Only shoes",
            "Only a bag",
            "Shoes and a bag",
          ],
          correctAnswer: "Shoes and a bag",
          order: 3,
        },
      ],
    },
  ],
};
