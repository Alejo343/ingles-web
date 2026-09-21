import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-colors-clothes",
  levelCode: "A1",
  title: "Colores y ropa",
  description: "Los colores y las prendas de vestir más comunes, y cómo describirlas.",
  order: 16,
  estimatedMinutes: 12,

  grammar: {
    title: "Colores y ropa",
    explanationMd: `## Describir con colores

El color va normalmente **antes** del sustantivo, como cualquier adjetivo:

- *a red car* (no "a car red")
- *She has a blue dress.*

Con el verbo **to be** para decir de qué color es algo:

- *My car is red.*
- *Her eyes are green.*

## Ropa: vocabulario y verbos

Para hablar de qué ropa llevas puestas, se usa **to wear** (llevar puesto):

- *I'm wearing a black jacket.* (Llevo puesta una chaqueta negra.)
- *He wears glasses.* (Él usa gafas.)

Para comprar ropa: **to buy**. Para probarse ropa: **to try on**.

- *I bought new shoes.*
- *Can I try this on?* (¿Puedo probarme esto?)

## Ropa: singular y plural

Algunas prendas siempre son **plurales** en inglés (por tener dos partes): *trousers/pants, shorts, glasses, shoes* → *These trousers are too big.* (no "this trouser is")`,
    examples: [
      { en: "My favorite color is blue.", es: "Mi color favorito es el azul." },
      { en: "She is wearing a red dress today.", es: "Ella lleva puesto un vestido rojo hoy." },
      { en: "I need to buy new shoes.", es: "Necesito comprar zapatos nuevos." },
      { en: "These trousers are too small.", es: "Estos pantalones me quedan pequeños." },
      { en: "He always wears black.", es: "Él siempre viste de negro." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-cc-red",
      termEn: "red",
      termEs: "rojo",
      exampleEn: "She is wearing a red dress.",
      exampleEs: "Ella lleva puesto un vestido rojo.",
      partOfSpeech: "adjective",
      order: 1,
    },
    {
      slug: "a1-cc-blue",
      termEn: "blue",
      termEs: "azul",
      exampleEn: "My favorite color is blue.",
      exampleEs: "Mi color favorito es el azul.",
      partOfSpeech: "adjective",
      order: 2,
    },
    {
      slug: "a1-cc-black",
      termEn: "black",
      termEs: "negro",
      exampleEn: "He always wears black.",
      exampleEs: "Él siempre viste de negro.",
      partOfSpeech: "adjective",
      order: 3,
    },
    {
      slug: "a1-cc-white",
      termEn: "white",
      termEs: "blanco",
      exampleEn: "I have a white shirt.",
      exampleEs: "Tengo una camisa blanca.",
      partOfSpeech: "adjective",
      order: 4,
    },
    {
      slug: "a1-cc-green",
      termEn: "green",
      termEs: "verde",
      exampleEn: "Her eyes are green.",
      exampleEs: "Sus ojos son verdes.",
      partOfSpeech: "adjective",
      order: 5,
    },
    {
      slug: "a1-cc-shirt",
      termEn: "shirt",
      termEs: "camisa",
      exampleEn: "I need a new shirt for the interview.",
      exampleEs: "Necesito una camisa nueva para la entrevista.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-cc-trousers",
      termEn: "trousers / pants",
      termEs: "pantalones",
      exampleEn: "These trousers are too small.",
      exampleEs: "Estos pantalones me quedan pequeños.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-cc-dress",
      termEn: "dress",
      termEs: "vestido",
      exampleEn: "She bought a beautiful dress.",
      exampleEs: "Ella compró un vestido hermoso.",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-cc-jacket",
      termEn: "jacket",
      termEs: "chaqueta",
      exampleEn: "I'm wearing a black jacket.",
      exampleEs: "Llevo puesta una chaqueta negra.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-cc-wear",
      termEn: "to wear",
      termEs: "llevar puesto / usar (ropa)",
      exampleEn: "He wears glasses.",
      exampleEs: "Él usa gafas.",
      partOfSpeech: "verb",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-cc-q1",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'rojo' en inglés?",
      correctAnswer: "red",
      order: 1,
    },
    {
      slug: "a1-cc-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "She is ___ a red dress today. (usar/llevar puesto)",
      options: ["having", "wearing", "using"],
      correctAnswer: "wearing",
      order: 2,
    },
    {
      slug: "a1-cc-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "These trousers ___ too small. (plural)",
      options: ["is", "are", "am"],
      correctAnswer: "are",
      order: 3,
    },
    {
      slug: "a1-cc-q4",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'verde' en inglés?",
      correctAnswer: "green",
      order: 4,
    },
    {
      slug: "a1-cc-q5",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "He always ___ black. (usar/vestir)",
      correctAnswer: "wears",
      order: 5,
    },
    {
      slug: "a1-cc-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Necesito comprar zapatos nuevos.'",
      correctAnswer: "I need to buy new shoes.",
      order: 6,
    },
    {
      slug: "a1-cc-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'My favorite color is blue.'",
      correctAnswer: "Mi color favorito es el azul.",
      order: 7,
    },
    {
      slug: "a1-cc-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'chaqueta' en inglés?",
      correctAnswer: "jacket",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-cc-reading-shopping",
      skill: "READING",
      title: "Shopping for a Job Interview",
      bodyEn: `Tomorrow, Carlos has a job interview. He wants to buy new clothes, so he goes shopping.

In the store, he finds a white shirt and black trousers. "Can I try this on?" he asks the shop assistant. The shirt fits well, but the trousers are too small.

He tries a bigger size, and now they fit perfectly. Carlos also buys a blue jacket. Now he's ready for his interview!`,
      order: 1,
      questions: [
        {
          slug: "a1-cc-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Why does Carlos go shopping?",
          options: [
            "For a party",
            "For a job interview",
            "For his birthday",
          ],
          correctAnswer: "For a job interview",
          order: 1,
        },
        {
          slug: "a1-cc-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What's wrong with the first trousers?",
          options: ["Wrong color", "Too small", "Too expensive"],
          correctAnswer: "Too small",
          order: 2,
        },
        {
          slug: "a1-cc-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What color is the jacket he buys?",
          options: ["Black", "White", "Blue"],
          correctAnswer: "Blue",
          order: 3,
        },
      ],
    },
  ],
};
