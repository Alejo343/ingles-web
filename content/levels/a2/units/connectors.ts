import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a2-connectors",
  levelCode: "A2",
  title: "Conectores y construcción de oraciones",
  description: "And, but, because, so, although... para unir ideas y contar historias con más fluidez.",
  order: 11,
  estimatedMinutes: 15,

  grammar: {
    title: "Conectores y construcción de oraciones",
    explanationMd: `Los conectores unen ideas para que tus frases suenen más naturales y conectadas, en vez de frases cortas y sueltas.

## Conectores básicos (repaso)

- **and** (y): añade información — *I work and study.*
- **but** (pero): contraste — *I like the city, but I prefer the countryside.*
- **or** (o): alternativa — *We can walk or take the bus.*
- **because** (porque): razón — *I'm happy because I got the job.*

## Nuevos conectores de A2

| Conector | Uso | Ejemplo |
|---|---|---|
| **so** | consecuencia | *It was raining, **so** we stayed home.* |
| **although** | contraste (más formal que "but") | ***Although** it was raining, we went out.* |
| **however** | contraste, entre frases | *I like him. **However**, I don't trust him.* |

**Although** va al **inicio** de la frase con la razón del contraste, y no lleva coma antes de "but" (no se usan juntos: *although... but* es incorrecto).

## Secuenciar ideas

Para contar una historia paso a paso: **first, then, after that, next, finally.**

- *First, I woke up. Then, I had breakfast. After that, I went to work. Finally, I came home.*

## Construir oraciones más largas

Combinando lo aprendido en A1/A2, puedes crear frases más completas:

*I worked from home yesterday, but I'm going to the office tomorrow because I have a meeting.*`,
    examples: [
      { en: "It was raining, so we stayed home.", es: "Estaba lloviendo, así que nos quedamos en casa." },
      { en: "Although it was expensive, we bought it.", es: "Aunque era caro, lo compramos." },
      { en: "I like him. However, I don't trust him.", es: "Me cae bien. Sin embargo, no confío en él." },
      { en: "First, I woke up. Then, I had breakfast.", es: "Primero, me desperté. Luego, desayuné." },
      { en: "I stayed late at work, so I missed the bus.", es: "Me quedé hasta tarde en el trabajo, así que perdí el bus." },
    ],
  },

  vocabulary: [
    {
      slug: "a2-conn-so",
      termEn: "so",
      termEs: "así que / por eso",
      exampleEn: "It was raining, so we stayed home.",
      exampleEs: "Estaba lloviendo, así que nos quedamos en casa.",
      partOfSpeech: "conjunction",
      order: 1,
    },
    {
      slug: "a2-conn-although",
      termEn: "although",
      termEs: "aunque",
      exampleEn: "Although it was expensive, we bought it.",
      exampleEs: "Aunque era caro, lo compramos.",
      partOfSpeech: "conjunction",
      order: 2,
    },
    {
      slug: "a2-conn-however",
      termEn: "however",
      termEs: "sin embargo",
      exampleEn: "I like him. However, I don't trust him.",
      exampleEs: "Me cae bien. Sin embargo, no confío en él.",
      partOfSpeech: "adverb",
      order: 3,
    },
    {
      slug: "a2-conn-first",
      termEn: "first",
      termEs: "primero",
      exampleEn: "First, I woke up.",
      exampleEs: "Primero, me desperté.",
      partOfSpeech: "adverb",
      order: 4,
    },
    {
      slug: "a2-conn-then",
      termEn: "then",
      termEs: "luego / entonces",
      exampleEn: "Then, I had breakfast.",
      exampleEs: "Luego, desayuné.",
      partOfSpeech: "adverb",
      order: 5,
    },
    {
      slug: "a2-conn-afterthat",
      termEn: "after that",
      termEs: "después de eso",
      exampleEn: "After that, I went to work.",
      exampleEs: "Después de eso, fui al trabajo.",
      partOfSpeech: "adverb",
      order: 6,
    },
    {
      slug: "a2-conn-finally",
      termEn: "finally",
      termEs: "finalmente",
      exampleEn: "Finally, I came home.",
      exampleEs: "Finalmente, llegué a casa.",
      partOfSpeech: "adverb",
      order: 7,
    },
    {
      slug: "a2-conn-missbus",
      termEn: "to miss the bus",
      termEs: "perder el bus",
      exampleEn: "I missed the bus this morning.",
      exampleEs: "Perdí el bus esta mañana.",
      partOfSpeech: "verb",
      order: 8,
    },
    {
      slug: "a2-conn-countryside",
      termEn: "countryside",
      termEs: "campo (zona rural)",
      exampleEn: "I prefer the countryside to the city.",
      exampleEs: "Prefiero el campo a la ciudad.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a2-conn-trust",
      termEn: "to trust",
      termEs: "confiar en",
      exampleEn: "I don't trust him.",
      exampleEs: "No confío en él.",
      partOfSpeech: "verb",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a2-conn-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "It was raining, ___ we stayed home. (consecuencia)",
      options: ["but", "so", "because"],
      correctAnswer: "so",
      order: 1,
    },
    {
      slug: "a2-conn-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ it was expensive, we bought it. (contraste, al inicio)",
      options: ["But", "Although", "So"],
      correctAnswer: "Although",
      order: 2,
    },
    {
      slug: "a2-conn-q3",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "I like him. ___, I don't trust him. (contraste entre frases)",
      correctAnswer: "However",
      order: 3,
    },
    {
      slug: "a2-conn-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___, I woke up. Then, I had breakfast. (primer paso)",
      options: ["First", "Finally", "So"],
      correctAnswer: "First",
      order: 4,
    },
    {
      slug: "a2-conn-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I stayed late at work, ___ I missed the bus.",
      options: ["so", "although", "but"],
      correctAnswer: "so",
      order: 5,
    },
    {
      slug: "a2-conn-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Aunque era caro, lo compramos.'",
      correctAnswer: "Although it was expensive, we bought it.",
      order: 6,
    },
    {
      slug: "a2-conn-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'I like him. However, I don't trust him.'",
      correctAnswer: "Me cae bien. Sin embargo, no confío en él.",
      order: 7,
    },
    {
      slug: "a2-conn-q8",
      skill: "VOCAB",
      answerFormat: "TEXT_INPUT",
      prompt: "¿Cómo se dice 'finalmente' en inglés?",
      correctAnswer: "finally",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a2-conn-reading-badday",
      skill: "READING",
      title: "A Difficult Morning",
      bodyEn: `This morning was difficult. First, my alarm didn't ring, so I woke up late. Then, I couldn't find my keys, and after that, I missed the bus.

Although I was very stressed, I stayed calm. I called a taxi, and finally I arrived at work only ten minutes late.

My boss wasn't angry. However, she asked me to buy a new alarm clock!`,
      order: 1,
      questions: [
        {
          slug: "a2-conn-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Why did the writer wake up late?",
          options: [
            "The alarm didn't ring",
            "They lost their keys",
            "The bus was late",
          ],
          correctAnswer: "The alarm didn't ring",
          order: 1,
        },
        {
          slug: "a2-conn-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "How did the writer get to work?",
          options: ["By bus", "By taxi", "Walking"],
          correctAnswer: "By taxi",
          order: 2,
        },
        {
          slug: "a2-conn-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What did the boss ask for?",
          options: [
            "An apology",
            "A new alarm clock",
            "Nothing",
          ],
          correctAnswer: "A new alarm clock",
          order: 3,
        },
      ],
    },
  ],
};
