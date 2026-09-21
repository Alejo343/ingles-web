import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-plural-nouns",
  levelCode: "A1",
  title: "Plurales de sustantivos",
  description: "Cómo formar el plural en inglés: reglas regulares y los plurales irregulares más comunes.",
  order: 4,
  estimatedMinutes: 12,

  grammar: {
    title: "Plurales de sustantivos",
    explanationMd: `## Regla general: + s

La mayoría de los sustantivos forman el plural añadiendo **-s**.

- book → book**s**
- car → car**s**
- friend → friend**s**

## Terminaciones especiales

| Termina en... | Regla | Ejemplo |
|---|---|---|
| -s, -ss, -sh, -ch, -x | + es | bus → buses, box → boxes |
| consonante + -y | -y → -ies | city → cities, baby → babies |
| vocal + -y | + s | day → days, toy → toys |
| -f, -fe | -f/-fe → -ves (a veces) | life → lives, knife → knives |
| -o (algunas) | + es | tomato → tomatoes, potato → potatoes |

## Plurales irregulares

Algunos sustantivos muy comunes no siguen ninguna regla y hay que memorizarlos:

| Singular | Plural |
|---|---|
| man | men |
| woman | women |
| child | children |
| person | people |
| foot | feet |
| tooth | teeth |
| mouse | mice |

## Sustantivos que no cambian

*sheep, fish, deer* — el singular y el plural son iguales.`,
    examples: [
      { en: "I have two brothers.", es: "Tengo dos hermanos." },
      { en: "There are many cities in this country.", es: "Hay muchas ciudades en este país." },
      { en: "The children are playing outside.", es: "Los niños están jugando afuera." },
      { en: "She has beautiful teeth.", es: "Ella tiene dientes bonitos." },
      { en: "There are three buses at the station.", es: "Hay tres buses en la estación." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-plur-city",
      termEn: "city / cities",
      termEs: "ciudad / ciudades",
      exampleEn: "There are many cities to visit.",
      exampleEs: "Hay muchas ciudades para visitar.",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a1-plur-child",
      termEn: "child / children",
      termEs: "niño(a) / niños",
      exampleEn: "The children are at school.",
      exampleEs: "Los niños están en la escuela.",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a1-plur-man",
      termEn: "man / men",
      termEs: "hombre / hombres",
      exampleEn: "Two men are waiting outside.",
      exampleEs: "Dos hombres están esperando afuera.",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a1-plur-woman",
      termEn: "woman / women",
      termEs: "mujer / mujeres",
      exampleEn: "The women are talking.",
      exampleEs: "Las mujeres están hablando.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a1-plur-person",
      termEn: "person / people",
      termEs: "persona / personas",
      exampleEn: "There are ten people in the room.",
      exampleEs: "Hay diez personas en la habitación.",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a1-plur-box",
      termEn: "box / boxes",
      termEs: "caja / cajas",
      exampleEn: "I need three boxes.",
      exampleEs: "Necesito tres cajas.",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-plur-baby",
      termEn: "baby / babies",
      termEs: "bebé / bebés",
      exampleEn: "The babies are sleeping.",
      exampleEs: "Los bebés están durmiendo.",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-plur-foot",
      termEn: "foot / feet",
      termEs: "pie / pies",
      exampleEn: "My feet hurt after the walk.",
      exampleEs: "Me duelen los pies después de la caminata.",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-plur-knife",
      termEn: "knife / knives",
      termEs: "cuchillo / cuchillos",
      exampleEn: "The knives are in the drawer.",
      exampleEs: "Los cuchillos están en el cajón.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-plur-fish",
      termEn: "fish",
      termEs: "pez / peces (igual en singular y plural)",
      exampleEn: "There are many fish in the lake.",
      exampleEs: "Hay muchos peces en el lago.",
      partOfSpeech: "noun",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-plur-q1",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Escribe el plural de 'city'.",
      correctAnswer: "cities",
      order: 1,
    },
    {
      slug: "a1-plur-q2",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Escribe el plural de 'bus'.",
      correctAnswer: "buses",
      order: 2,
    },
    {
      slug: "a1-plur-q3",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Escribe el plural de 'child'.",
      correctAnswer: "children",
      order: 3,
    },
    {
      slug: "a1-plur-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "Plural de 'woman':",
      options: ["womans", "women", "womens"],
      correctAnswer: "women",
      order: 4,
    },
    {
      slug: "a1-plur-q5",
      skill: "GRAMMAR",
      answerFormat: "TEXT_INPUT",
      prompt: "Escribe el plural de 'day'.",
      correctAnswer: "days",
      explanation: "Vocal + y → solo se añade 's'.",
      order: 5,
    },
    {
      slug: "a1-plur-q6",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "Plural de 'tooth':",
      options: ["tooths", "teeth", "teeths"],
      correctAnswer: "teeth",
      order: 6,
    },
    {
      slug: "a1-plur-q7",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Hay diez personas aquí.'",
      correctAnswer: "There are ten people here.",
      order: 7,
    },
    {
      slug: "a1-plur-q8",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'My feet hurt.'",
      correctAnswer: "Me duelen los pies.",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-plur-reading-market",
      skill: "READING",
      title: "At the Market",
      bodyEn: `Every Saturday, my family goes to the market. There are many people there: men, women, and children.

We buy boxes of tomatoes, fresh fish, and knives for the kitchen. My children love the babies of the farm animals!

There are three cities near us, but this market is the best.`,
      order: 1,
      questions: [
        {
          slug: "a1-plur-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "When does the family go to the market?",
          options: ["Every Saturday", "Every Sunday", "Every day"],
          correctAnswer: "Every Saturday",
          order: 1,
        },
        {
          slug: "a1-plur-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What do they buy for the kitchen?",
          options: ["Boxes", "Knives", "Fish"],
          correctAnswer: "Knives",
          order: 2,
        },
        {
          slug: "a1-plur-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What do the children love?",
          options: [
            "The tomatoes",
            "The babies of the farm animals",
            "The boxes",
          ],
          correctAnswer: "The babies of the farm animals",
          order: 3,
        },
      ],
    },
  ],
};
