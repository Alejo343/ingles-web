import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-city-places",
  levelCode: "A1",
  title: "Lugares de la ciudad",
  description: "Sitios comunes en una ciudad y cómo pedir y dar direcciones básicas.",
  order: 22,
  estimatedMinutes: 12,

  grammar: {
    title: "Lugares de la ciudad y direcciones",
    explanationMd: `## Lugares comunes

hospital, school, library (biblioteca), museum, cinema/movie theater, train station, airport, post office (correo), gym, market.

## Pedir direcciones

- *Excuse me, how do I get to the museum?* (Disculpe, ¿cómo llego al museo?)
- *Is there a pharmacy near here?*
- *Where is the train station?*

## Dar direcciones

- *Go straight.* (Sigue derecho.)
- *Turn left / Turn right.* (Gira a la izquierda / derecha.)
- *It's on the corner.* (Está en la esquina.)
- *It's next to the bank.* (Está al lado del banco.)
- *It's about five minutes from here.* (Está a unos cinco minutos de aquí.)

## Combinando con "there is/are" y preposiciones

- *Is there a library near here? Yes, there is. It's next to the school.*
- *The museum is between the park and the cinema.*`,
    examples: [
      { en: "Excuse me, how do I get to the museum?", es: "Disculpe, ¿cómo llego al museo?" },
      { en: "Go straight and turn left.", es: "Sigue derecho y gira a la izquierda." },
      { en: "The library is next to the school.", es: "La biblioteca está al lado de la escuela." },
      { en: "Is there a pharmacy near here?", es: "¿Hay una farmacia cerca de aquí?" },
      { en: "It's about five minutes from here.", es: "Está a unos cinco minutos de aquí." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-cp-hospital",
      termEn: "hospital",
      termEs: "hospital",
      exampleEn: "The hospital is near my house.",
      exampleEs: "El hospital está cerca de mi casa.",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a1-cp-library",
      termEn: "library",
      termEs: "biblioteca",
      exampleEn: "The library is next to the school.",
      exampleEs: "La biblioteca está al lado de la escuela.",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a1-cp-museum",
      termEn: "museum",
      termEs: "museo",
      exampleEn: "How do I get to the museum?",
      exampleEs: "¿Cómo llego al museo?",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a1-cp-cinema",
      termEn: "cinema / movie theater",
      termEs: "cine",
      exampleEn: "There's a good movie at the cinema.",
      exampleEs: "Hay una buena película en el cine.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a1-cp-trainstation",
      termEn: "train station",
      termEs: "estación de tren",
      exampleEn: "Where is the train station?",
      exampleEs: "¿Dónde está la estación de tren?",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a1-cp-airport",
      termEn: "airport",
      termEs: "aeropuerto",
      exampleEn: "The airport is far from the city center.",
      exampleEs: "El aeropuerto está lejos del centro.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-cp-postoffice",
      termEn: "post office",
      termEs: "correo / oficina postal",
      exampleEn: "I need to go to the post office.",
      exampleEs: "Necesito ir al correo.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-cp-gostraight",
      termEn: "to go straight",
      termEs: "seguir derecho",
      exampleEn: "Go straight and turn left.",
      exampleEs: "Sigue derecho y gira a la izquierda.",
      partOfSpeech: "phrase",
      order: 8,
    },
    {
      slug: "a1-cp-turnleft",
      termEn: "to turn left / right",
      termEs: "girar a la izquierda / derecha",
      exampleEn: "Turn right at the corner.",
      exampleEs: "Gira a la derecha en la esquina.",
      partOfSpeech: "phrase",
      order: 9,
    },
    {
      slug: "a1-cp-excuseme",
      termEn: "Excuse me...",
      termEs: "Disculpe...",
      exampleEn: "Excuse me, is there a pharmacy near here?",
      exampleEs: "Disculpe, ¿hay una farmacia cerca de aquí?",
      partOfSpeech: "phrase",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-cp-q1",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'biblioteca' en inglés?",
      correctAnswer: "library",
      order: 1,
    },
    {
      slug: "a1-cp-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "Excuse me, how do I ___ to the museum?",
      options: ["go", "get", "walk"],
      correctAnswer: "get",
      order: 2,
    },
    {
      slug: "a1-cp-q3",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'aeropuerto' en inglés?",
      correctAnswer: "airport",
      order: 3,
    },
    {
      slug: "a1-cp-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "Go straight and ___ left.",
      options: ["turn", "go", "walk"],
      correctAnswer: "turn",
      order: 4,
    },
    {
      slug: "a1-cp-q5",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'correo' (oficina postal) en inglés?",
      correctAnswer: "post office",
      order: 5,
    },
    {
      slug: "a1-cp-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Disculpe, ¿dónde está la estación de tren?'",
      correctAnswer: "Excuse me, where is the train station?",
      order: 6,
    },
    {
      slug: "a1-cp-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'It's about five minutes from here.'",
      correctAnswer: "Está a unos cinco minutos de aquí.",
      order: 7,
    },
    {
      slug: "a1-cp-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'museo' en inglés?",
      correctAnswer: "museum",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-cp-reading-directions",
      skill: "READING",
      title: "Finding the Museum",
      bodyEn: `"Excuse me, how do I get to the museum?" I ask a woman on the street.

"It's easy," she says. "Go straight for two blocks, then turn left. The museum is on the corner, next to the library."

"Is it far from here?" I ask.

"No, it's about five minutes from here, walking," she says.

I thank her and follow her directions. Five minutes later, I find the museum exactly where she said!`,
      order: 1,
      questions: [
        {
          slug: "a1-cp-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What should the writer do first?",
          options: [
            "Turn left immediately",
            "Go straight for two blocks",
            "Turn right",
          ],
          correctAnswer: "Go straight for two blocks",
          order: 1,
        },
        {
          slug: "a1-cp-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Where exactly is the museum?",
          options: [
            "On the corner, next to the library",
            "Next to the train station",
            "In front of the hospital",
          ],
          correctAnswer: "On the corner, next to the library",
          order: 2,
        },
        {
          slug: "a1-cp-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "How far is the museum?",
          options: [
            "About five minutes walking",
            "About one hour",
            "Very far",
          ],
          correctAnswer: "About five minutes walking",
          order: 3,
        },
      ],
    },
  ],
};
