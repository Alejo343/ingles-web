import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-prepositions-place",
  levelCode: "A1",
  title: "Preposiciones de lugar",
  description: "In, on, under, next to, between... para decir dónde están las cosas.",
  order: 10,
  estimatedMinutes: 12,

  grammar: {
    title: "Preposiciones de lugar",
    explanationMd: `Se usan para describir **dónde** está algo o alguien.

| Preposición | Significado | Ejemplo |
|---|---|---|
| in | dentro de | The keys are **in** the bag. |
| on | sobre / encima de | The book is **on** the table. |
| under | debajo de | The cat is **under** the bed. |
| next to | al lado de | The bank is **next to** the school. |
| between | entre (dos cosas) | The pharmacy is **between** the bank and the park. |
| in front of | delante de | She is standing **in front of** the door. |
| behind | detrás de | The garden is **behind** the house. |
| near | cerca de | There is a park **near** my house. |

## In vs. on vs. at (lugares)

- **in** un espacio cerrado: *in the room, in the car, in the city*
- **on** una superficie: *on the table, on the wall, on the street*
- **at** un punto específico: *at the door, at the bus stop, at home*`,
    examples: [
      { en: "The cat is under the table.", es: "El gato está debajo de la mesa." },
      { en: "My keys are in my bag.", es: "Mis llaves están en mi bolso." },
      { en: "The bank is between the school and the park.", es: "El banco está entre la escuela y el parque." },
      { en: "There is a picture on the wall.", es: "Hay un cuadro en la pared." },
      { en: "The dog is behind the sofa.", es: "El perro está detrás del sofá." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-prep-bag",
      termEn: "bag",
      termEs: "bolso / bolsa",
      exampleEn: "My keys are in my bag.",
      exampleEs: "Mis llaves están en mi bolso.",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a1-prep-wall",
      termEn: "wall",
      termEs: "pared",
      exampleEn: "There is a picture on the wall.",
      exampleEs: "Hay un cuadro en la pared.",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a1-prep-bed",
      termEn: "bed",
      termEs: "cama",
      exampleEn: "The cat is under the bed.",
      exampleEs: "El gato está debajo de la cama.",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a1-prep-sofa",
      termEn: "sofa",
      termEs: "sofá",
      exampleEn: "The dog is behind the sofa.",
      exampleEs: "El perro está detrás del sofá.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a1-prep-pharmacy",
      termEn: "pharmacy",
      termEs: "farmacia",
      exampleEn: "The pharmacy is next to the bank.",
      exampleEs: "La farmacia está al lado del banco.",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a1-prep-door",
      termEn: "door",
      termEs: "puerta",
      exampleEn: "She is standing in front of the door.",
      exampleEs: "Ella está parada delante de la puerta.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-prep-garden",
      termEn: "garden",
      termEs: "jardín",
      exampleEn: "The garden is behind the house.",
      exampleEs: "El jardín está detrás de la casa.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-prep-busstop",
      termEn: "bus stop",
      termEs: "parada de bus",
      exampleEn: "I'm waiting at the bus stop.",
      exampleEs: "Estoy esperando en la parada de bus.",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-prep-corner",
      termEn: "corner",
      termEs: "esquina",
      exampleEn: "The store is on the corner.",
      exampleEs: "La tienda está en la esquina.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-prep-shelf",
      termEn: "shelf",
      termEs: "estante",
      exampleEn: "The books are on the shelf.",
      exampleEs: "Los libros están en el estante.",
      partOfSpeech: "noun",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-prep-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "The cat is ___ the table. (debajo de)",
      options: ["on", "under", "in"],
      correctAnswer: "under",
      order: 1,
    },
    {
      slug: "a1-prep-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "The keys are ___ the bag. (dentro de)",
      options: ["in", "on", "next to"],
      correctAnswer: "in",
      order: 2,
    },
    {
      slug: "a1-prep-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "There is a picture ___ the wall. (sobre)",
      options: ["in", "on", "under"],
      correctAnswer: "on",
      order: 3,
    },
    {
      slug: "a1-prep-q4",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "The bank is ___ the school and the park. (entre las dos)",
      correctAnswer: "between",
      order: 4,
    },
    {
      slug: "a1-prep-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "The garden is ___ the house. (detrás de)",
      options: ["behind", "in front of", "next to"],
      correctAnswer: "behind",
      order: 5,
    },
    {
      slug: "a1-prep-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'El banco está al lado de la farmacia.'",
      correctAnswer: "The bank is next to the pharmacy.",
      order: 6,
    },
    {
      slug: "a1-prep-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'The books are on the shelf.'",
      correctAnswer: "Los libros están en el estante.",
      order: 7,
    },
    {
      slug: "a1-prep-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'esquina' en inglés?",
      correctAnswer: "corner",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-prep-reading-room",
      skill: "READING",
      title: "My Bedroom",
      bodyEn: `My bedroom is small but I like it. My bed is next to the window. There is a shelf on the wall with my books.

Under the bed, there is a box with old photos. My desk is in front of the window, and my chair is behind the desk.

My cat usually sleeps under the bed or on my pillow!`,
      order: 1,
      questions: [
        {
          slug: "a1-prep-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Where is the bed?",
          options: ["Next to the window", "Behind the desk", "Under the shelf"],
          correctAnswer: "Next to the window",
          order: 1,
        },
        {
          slug: "a1-prep-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What is under the bed?",
          options: ["The cat", "A box with photos", "The desk"],
          correctAnswer: "A box with photos",
          order: 2,
        },
        {
          slug: "a1-prep-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Where is the chair?",
          options: ["In front of the desk", "Behind the desk", "Next to the bed"],
          correctAnswer: "Behind the desk",
          order: 3,
        },
      ],
    },
  ],
};
