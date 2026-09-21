import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-house",
  levelCode: "A1",
  title: "La casa",
  description: "Las habitaciones y muebles de una casa, combinando there is/are y preposiciones de lugar.",
  order: 20,
  estimatedMinutes: 12,

  grammar: {
    title: "La casa",
    explanationMd: `## Habitaciones de la casa

kitchen (cocina), living room (sala), bedroom (dormitorio), bathroom (baño), dining room (comedor), garden (jardín), garage (garaje).

## Muebles comunes

bed, sofa/couch, table, chair, fridge, wardrobe (armario), shower, mirror, lamp.

## Combinando lo que ya sabes

Con **there is/are** para decir qué hay en la casa:

- *There is a big kitchen.*
- *There are two bedrooms.*

Con preposiciones de lugar para decir dónde está cada cosa:

- *The sofa is in the living room.*
- *The fridge is next to the stove.*

Con posesivos y "to be" para describir tu casa:

- *My house has three bedrooms.* (usando **have/has** en vez de "there is/are" también es correcto)
- *Our kitchen is small but nice.*`,
    examples: [
      { en: "There are three bedrooms in my house.", es: "Hay tres dormitorios en mi casa." },
      { en: "The sofa is in the living room.", es: "El sofá está en la sala." },
      { en: "Our kitchen is small but nice.", es: "Nuestra cocina es pequeña pero linda." },
      { en: "The bathroom is next to my bedroom.", es: "El baño está al lado de mi dormitorio." },
      { en: "We have a beautiful garden.", es: "Tenemos un jardín hermoso." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-house-kitchen",
      termEn: "kitchen",
      termEs: "cocina",
      exampleEn: "Our kitchen is small but nice.",
      exampleEs: "Nuestra cocina es pequeña pero linda.",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a1-house-livingroom",
      termEn: "living room",
      termEs: "sala",
      exampleEn: "The sofa is in the living room.",
      exampleEs: "El sofá está en la sala.",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a1-house-bedroom2",
      termEn: "bedroom",
      termEs: "dormitorio",
      exampleEn: "There are three bedrooms.",
      exampleEs: "Hay tres dormitorios.",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a1-house-bathroom2",
      termEn: "bathroom",
      termEs: "baño",
      exampleEn: "The bathroom is next to my bedroom.",
      exampleEs: "El baño está al lado de mi dormitorio.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a1-house-garden2",
      termEn: "garden",
      termEs: "jardín",
      exampleEn: "We have a beautiful garden.",
      exampleEs: "Tenemos un jardín hermoso.",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a1-house-garage",
      termEn: "garage",
      termEs: "garaje",
      exampleEn: "The car is in the garage.",
      exampleEs: "El carro está en el garaje.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-house-wardrobe",
      termEn: "wardrobe / closet",
      termEs: "armario / closet",
      exampleEn: "My clothes are in the wardrobe.",
      exampleEs: "Mi ropa está en el armario.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-house-shower",
      termEn: "shower",
      termEs: "ducha",
      exampleEn: "The shower is very modern.",
      exampleEs: "La ducha es muy moderna.",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-house-mirror",
      termEn: "mirror",
      termEs: "espejo",
      exampleEn: "There's a big mirror in my bedroom.",
      exampleEs: "Hay un espejo grande en mi dormitorio.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-house-stove",
      termEn: "stove",
      termEs: "estufa",
      exampleEn: "The fridge is next to the stove.",
      exampleEs: "La nevera está al lado de la estufa.",
      partOfSpeech: "noun",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-house-q1",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'sala' en inglés?",
      correctAnswer: "living room",
      order: 1,
    },
    {
      slug: "a1-house-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ three bedrooms in my house.",
      options: ["There is", "There are", "There has"],
      correctAnswer: "There are",
      order: 2,
    },
    {
      slug: "a1-house-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "The bathroom is ___ my bedroom. (al lado de)",
      options: ["next to", "under", "between"],
      correctAnswer: "next to",
      order: 3,
    },
    {
      slug: "a1-house-q4",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'armario' en inglés?",
      correctAnswer: "wardrobe",
      acceptableAnswers: ["closet"],
      order: 4,
    },
    {
      slug: "a1-house-q5",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "The car is ___ the garage. (dentro de)",
      correctAnswer: "in",
      order: 5,
    },
    {
      slug: "a1-house-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Tenemos un jardín hermoso.'",
      correctAnswer: "We have a beautiful garden.",
      order: 6,
    },
    {
      slug: "a1-house-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'The sofa is in the living room.'",
      correctAnswer: "El sofá está en la sala.",
      order: 7,
    },
    {
      slug: "a1-house-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'estufa' en inglés?",
      correctAnswer: "stove",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-house-reading-newhouse",
      skill: "READING",
      title: "Our New House",
      bodyEn: `We just moved into a new house. There are four bedrooms and two bathrooms. The kitchen is next to the dining room, and there's a big living room with a comfortable sofa.

My favorite part is the garden — it's behind the house, and there's space for a small table and chairs.

There isn't a garage, but there's space on the street to park the car. We're very happy in our new home!`,
      order: 1,
      questions: [
        {
          slug: "a1-house-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "How many bedrooms are there?",
          options: ["Two", "Three", "Four"],
          correctAnswer: "Four",
          order: 1,
        },
        {
          slug: "a1-house-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What is the writer's favorite part of the house?",
          options: ["The kitchen", "The garden", "The living room"],
          correctAnswer: "The garden",
          order: 2,
        },
        {
          slug: "a1-house-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Is there a garage?",
          options: ["Yes", "No", "The text doesn't say"],
          correctAnswer: "No",
          order: 3,
        },
      ],
    },
  ],
};
