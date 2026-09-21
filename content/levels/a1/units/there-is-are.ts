import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-there-is-are",
  levelCode: "A1",
  title: "There is / There are",
  description: "Cómo decir que algo existe o está en un lugar.",
  order: 6,
  estimatedMinutes: 12,

  grammar: {
    title: "There is / There are",
    explanationMd: `Se usan para decir que algo **existe** o **está** en un lugar (equivale a "hay" en español).

| | Afirmativo | Negativo | Pregunta |
|---|---|---|---|
| Singular / incontable | there **is** | there **isn't** | **Is** there...? |
| Plural | there **are** | there **aren't** | **Are** there...? |

## Ejemplos

- *There is a book on the table.* (Hay un libro sobre la mesa.)
- *There are three chairs in the room.* (Hay tres sillas en la habitación.)
- *There isn't any milk in the fridge.* (No hay leche en la nevera.)
- *There aren't many people here.* (No hay mucha gente aquí.)
- *Is there a bank near here?* (¿Hay un banco cerca de aquí?)
- *Are there any restaurants open?* (¿Hay restaurantes abiertos?)

## Respuestas cortas

- *Is there a pool? Yes, there is. / No, there isn't.*
- *Are there any seats? Yes, there are. / No, there aren't.*

## Some / any

Con *there is/are*, usamos **some** en frases afirmativas y **any** en negativas y preguntas: *There are some apples. There aren't any apples. Are there any apples?*`,
    examples: [
      { en: "There is a park near my house.", es: "Hay un parque cerca de mi casa." },
      { en: "There are two bathrooms in the apartment.", es: "Hay dos baños en el apartamento." },
      { en: "There isn't any sugar.", es: "No hay azúcar." },
      { en: "Are there any hotels here?", es: "¿Hay hoteles aquí?" },
      { en: "There aren't many cars on this street.", es: "No hay muchos carros en esta calle." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-there-park",
      termEn: "park",
      termEs: "parque",
      exampleEn: "There is a park near my house.",
      exampleEs: "Hay un parque cerca de mi casa.",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a1-there-bathroom",
      termEn: "bathroom",
      termEs: "baño",
      exampleEn: "There are two bathrooms.",
      exampleEs: "Hay dos baños.",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a1-there-fridge",
      termEn: "fridge",
      termEs: "nevera / refrigerador",
      exampleEn: "There isn't any milk in the fridge.",
      exampleEs: "No hay leche en la nevera.",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a1-there-hotel",
      termEn: "hotel",
      termEs: "hotel",
      exampleEn: "Is there a hotel near here?",
      exampleEs: "¿Hay un hotel cerca de aquí?",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a1-there-pool",
      termEn: "pool",
      termEs: "piscina",
      exampleEn: "There is a pool in the hotel.",
      exampleEs: "Hay una piscina en el hotel.",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a1-there-chair",
      termEn: "chair",
      termEs: "silla",
      exampleEn: "There are five chairs.",
      exampleEs: "Hay cinco sillas.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-there-sugar",
      termEn: "sugar",
      termEs: "azúcar",
      exampleEn: "There isn't any sugar left.",
      exampleEs: "No queda azúcar.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-there-bank",
      termEn: "bank",
      termEs: "banco",
      exampleEn: "There is a bank on this street.",
      exampleEs: "Hay un banco en esta calle.",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-there-restaurant",
      termEn: "restaurant",
      termEs: "restaurante",
      exampleEn: "Are there any restaurants open?",
      exampleEs: "¿Hay restaurantes abiertos?",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-there-supermarket",
      termEn: "supermarket",
      termEs: "supermercado",
      exampleEn: "There is a supermarket next to my house.",
      exampleEs: "Hay un supermercado al lado de mi casa.",
      partOfSpeech: "noun",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-there-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ a book on the table.",
      options: ["There is", "There are", "There isn't"],
      correctAnswer: "There is",
      order: 1,
    },
    {
      slug: "a1-there-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ three chairs in the room.",
      options: ["There is", "There are", "Is there"],
      correctAnswer: "There are",
      order: 2,
    },
    {
      slug: "a1-there-q3",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "There ___ any milk in the fridge. (negativo, singular)",
      correctAnswer: "isn't",
      order: 3,
    },
    {
      slug: "a1-there-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ a bank near here? (pregunta)",
      options: ["Is there", "Are there", "There is"],
      correctAnswer: "Is there",
      order: 4,
    },
    {
      slug: "a1-there-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ many people here today.",
      options: ["There aren't", "There isn't", "There don't"],
      correctAnswer: "There aren't",
      order: 5,
    },
    {
      slug: "a1-there-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Hay un parque cerca de aquí.'",
      correctAnswer: "There is a park near here.",
      order: 6,
    },
    {
      slug: "a1-there-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Are there any restaurants open?'",
      correctAnswer: "¿Hay restaurantes abiertos?",
      order: 7,
    },
    {
      slug: "a1-there-q8",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "Is there a pool? Yes, ___.",
      options: ["there is", "it is", "there are"],
      correctAnswer: "there is",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-there-reading-apartment",
      skill: "READING",
      title: "My New Apartment",
      bodyEn: `I have a new apartment. There are two bedrooms and one bathroom. There is a small kitchen with a fridge and a table.

There isn't a pool, but there is a nice park very close. There are also two supermarkets and a bank on my street.

Is there a bus stop near my apartment? Yes, there is — right in front of the building!`,
      order: 1,
      questions: [
        {
          slug: "a1-there-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "How many bedrooms are there?",
          options: ["One", "Two", "Three"],
          correctAnswer: "Two",
          order: 1,
        },
        {
          slug: "a1-there-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Is there a pool in the building?",
          options: ["Yes", "No", "The text doesn't say"],
          correctAnswer: "No",
          order: 2,
        },
        {
          slug: "a1-there-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Where is the bus stop?",
          options: [
            "Far from the building",
            "In front of the building",
            "Next to the park",
          ],
          correctAnswer: "In front of the building",
          order: 3,
        },
      ],
    },
  ],
};
