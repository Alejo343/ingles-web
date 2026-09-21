import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-food",
  levelCode: "A1",
  title: "La comida",
  description: "Vocabulario de comida y bebida, y cómo pedir en un restaurante.",
  order: 21,
  estimatedMinutes: 12,

  grammar: {
    title: "La comida",
    explanationMd: `## Comidas del día

breakfast (desayuno), lunch (almuerzo), dinner (cena), snack (merienda/pasabocas).

- *What's for breakfast?* (¿Qué hay de desayuno?)
- *I have lunch at one o'clock.*

## Pedir comida (en un restaurante)

- *Can I have the menu, please?*
- *I'd like a coffee, please.* (Quisiera un café, por favor.) — más educado que "I want"
- *What would you like to drink?*
- *Can I get the bill, please?* (¿Me trae la cuenta, por favor?)

## Contable e incontable (repaso básico)

Algunos alimentos son contables (*an apple, two eggs*) y otros incontables (*rice, water, bread*) — se profundiza más en A2, pero desde ya puedes usar **some**: *I'd like some rice and some water.*

## Adjetivos para describir comida

delicious (delicioso), fresh (fresco), spicy (picante), sweet (dulce), healthy (saludable).`,
    examples: [
      { en: "I'd like a coffee, please.", es: "Quisiera un café, por favor." },
      { en: "What's for breakfast?", es: "¿Qué hay de desayuno?" },
      { en: "This soup is delicious!", es: "¡Esta sopa está deliciosa!" },
      { en: "Can I have the menu, please?", es: "¿Me trae el menú, por favor?" },
      { en: "I don't like spicy food.", es: "No me gusta la comida picante." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-food-breakfast",
      termEn: "breakfast",
      termEs: "desayuno",
      exampleEn: "What's for breakfast?",
      exampleEs: "¿Qué hay de desayuno?",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a1-food-lunch",
      termEn: "lunch",
      termEs: "almuerzo",
      exampleEn: "I have lunch at one o'clock.",
      exampleEs: "Almuerzo a la una.",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a1-food-dinner",
      termEn: "dinner",
      termEs: "cena",
      exampleEn: "We're having pasta for dinner.",
      exampleEs: "Vamos a cenar pasta.",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a1-food-egg",
      termEn: "egg",
      termEs: "huevo",
      exampleEn: "I eat two eggs every morning.",
      exampleEs: "Como dos huevos cada mañana.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a1-food-vegetables",
      termEn: "vegetables",
      termEs: "verduras",
      exampleEn: "You should eat more vegetables.",
      exampleEs: "Deberías comer más verduras.",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a1-food-meat",
      termEn: "meat",
      termEs: "carne",
      exampleEn: "I don't eat meat.",
      exampleEs: "No como carne.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-food-menu",
      termEn: "menu",
      termEs: "menú",
      exampleEn: "Can I have the menu, please?",
      exampleEs: "¿Me trae el menú, por favor?",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-food-bill",
      termEn: "bill",
      termEs: "cuenta (de restaurante)",
      exampleEn: "Can I get the bill, please?",
      exampleEs: "¿Me trae la cuenta, por favor?",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-food-delicious",
      termEn: "delicious",
      termEs: "delicioso/a",
      exampleEn: "This soup is delicious!",
      exampleEs: "¡Esta sopa está deliciosa!",
      partOfSpeech: "adjective",
      order: 9,
    },
    {
      slug: "a1-food-spicy",
      termEn: "spicy",
      termEs: "picante",
      exampleEn: "I don't like spicy food.",
      exampleEs: "No me gusta la comida picante.",
      partOfSpeech: "adjective",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-food-q1",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'almuerzo' en inglés?",
      correctAnswer: "lunch",
      order: 1,
    },
    {
      slug: "a1-food-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I'___ like a coffee, please. (petición educada)",
      options: ["want", "d", "am"],
      correctAnswer: "d",
      explanation: "\"I'd like\" = \"I would like\", más educado que \"I want\".",
      order: 2,
    },
    {
      slug: "a1-food-q3",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'picante' en inglés?",
      correctAnswer: "spicy",
      order: 3,
    },
    {
      slug: "a1-food-q4",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'delicioso/a' en inglés?",
      correctAnswer: "delicious",
      order: 4,
    },
    {
      slug: "a1-food-q5",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "Can I have the ___, please? (para ver los platos)",
      correctAnswer: "menu",
      order: 5,
    },
    {
      slug: "a1-food-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: '¿Me trae la cuenta, por favor?'",
      correctAnswer: "Can I get the bill, please?",
      order: 6,
    },
    {
      slug: "a1-food-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'You should eat more vegetables.'",
      correctAnswer: "Deberías comer más verduras.",
      order: 7,
    },
    {
      slug: "a1-food-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'huevo' en inglés?",
      correctAnswer: "egg",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-food-reading-restaurant",
      skill: "READING",
      title: "Dinner at a New Restaurant",
      bodyEn: `Last night, my friends and I went to a new restaurant. "Can I have the menu, please?" I asked the waiter.

I ordered vegetables and rice. My friend Ana doesn't eat meat, so she ordered a salad. Our other friend loves spicy food, so he ordered the spicy chicken.

Everything was delicious! At the end, we asked for the bill and paid together. We're definitely coming back!`,
      order: 1,
      questions: [
        {
          slug: "a1-food-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What did the writer order?",
          options: ["Meat", "Vegetables and rice", "A salad"],
          correctAnswer: "Vegetables and rice",
          order: 1,
        },
        {
          slug: "a1-food-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Why did Ana order a salad?",
          options: [
            "She doesn't eat meat",
            "She doesn't like spicy food",
            "It was cheap",
          ],
          correctAnswer: "She doesn't eat meat",
          order: 2,
        },
        {
          slug: "a1-food-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Was the food good?",
          options: ["Yes, delicious", "No, it was bad", "The text doesn't say"],
          correctAnswer: "Yes, delicious",
          order: 3,
        },
      ],
    },
  ],
};
