import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-present-simple",
  levelCode: "A1",
  title: "Presente simple",
  description: "Rutinas y hechos generales: afirmativo, negativo y preguntas con do/does.",
  order: 7,
  estimatedMinutes: 18,

  grammar: {
    title: "Presente simple",
    explanationMd: `Se usa para hablar de **rutinas, hábitos y hechos generales**.

## Afirmativo

El verbo va igual para todos los pronombres, **excepto he/she/it**, que añaden **-s** (o -es/-ies según terminación).

| Pronombre | Verbo |
|---|---|
| I / you / we / they | work |
| he / she / it | work**s** |

- *I work in an office.*
- *She work**s** in a hospital.*
- Terminaciones -s, -sh, -ch, -x, -o → **+es**: *He watch**es** TV. She go**es** home.*
- Consonante + y → **-y → -ies**: *She stud**ies** English.*

## Negativo

Se usa **don't / doesn't** + verbo en infinitivo (sin -s).

- *I don't like coffee.*
- *He doesn't like coffee.* (no "doesn't likes")

## Preguntas

**Do / Does** + sujeto + verbo en infinitivo.

- *Do you like coffee?* — *Yes, I do. / No, I don't.*
- *Does she work here?* — *Yes, she does. / No, she doesn't.*

## Adverbios de tiempo comunes

*always, usually, often, sometimes, never, every day/week* — normalmente van **antes** del verbo principal: *She always arrives on time.*`,
    examples: [
      { en: "I work from Monday to Friday.", es: "Trabajo de lunes a viernes." },
      { en: "She doesn't drink coffee.", es: "Ella no toma café." },
      { en: "Do you speak English?", es: "¿Hablas inglés?" },
      { en: "He goes to the gym every morning.", es: "Él va al gimnasio cada mañana." },
      { en: "They don't live here anymore.", es: "Ellos ya no viven aquí." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-ps-work",
      termEn: "to work",
      termEs: "trabajar",
      exampleEn: "I work in an office.",
      exampleEs: "Trabajo en una oficina.",
      partOfSpeech: "verb",
      order: 1,
    },
    {
      slug: "a1-ps-live",
      termEn: "to live",
      termEs: "vivir",
      exampleEn: "They live in Bogotá.",
      exampleEs: "Ellos viven en Bogotá.",
      partOfSpeech: "verb",
      order: 2,
    },
    {
      slug: "a1-ps-study",
      termEn: "to study",
      termEs: "estudiar",
      exampleEn: "She studies English every day.",
      exampleEs: "Ella estudia inglés todos los días.",
      partOfSpeech: "verb",
      order: 3,
    },
    {
      slug: "a1-ps-like",
      termEn: "to like",
      termEs: "gustar",
      exampleEn: "I like pizza.",
      exampleEs: "Me gusta la pizza.",
      partOfSpeech: "verb",
      order: 4,
    },
    {
      slug: "a1-ps-watch",
      termEn: "to watch",
      termEs: "ver (televisión, película)",
      exampleEn: "He watches TV at night.",
      exampleEs: "Él ve televisión por la noche.",
      partOfSpeech: "verb",
      order: 5,
    },
    {
      slug: "a1-ps-go",
      termEn: "to go",
      termEs: "ir",
      exampleEn: "We go to school by bus.",
      exampleEs: "Vamos a la escuela en bus.",
      partOfSpeech: "verb",
      order: 6,
    },
    {
      slug: "a1-ps-eat",
      termEn: "to eat",
      termEs: "comer",
      exampleEn: "She eats breakfast at 7.",
      exampleEs: "Ella desayuna a las 7.",
      partOfSpeech: "verb",
      order: 7,
    },
    {
      slug: "a1-ps-play",
      termEn: "to play",
      termEs: "jugar",
      exampleEn: "The children play in the park.",
      exampleEs: "Los niños juegan en el parque.",
      partOfSpeech: "verb",
      order: 8,
    },
    {
      slug: "a1-ps-speak",
      termEn: "to speak",
      termEs: "hablar",
      exampleEn: "Do you speak Spanish?",
      exampleEs: "¿Hablas español?",
      partOfSpeech: "verb",
      order: 9,
    },
    {
      slug: "a1-ps-always",
      termEn: "always",
      termEs: "siempre",
      exampleEn: "She always arrives on time.",
      exampleEs: "Ella siempre llega a tiempo.",
      partOfSpeech: "adverb",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-ps-q1",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "She ___ (work) in a hospital.",
      correctAnswer: "works",
      order: 1,
    },
    {
      slug: "a1-ps-q2",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "I ___ (not / like) coffee.",
      correctAnswer: "don't like",
      order: 2,
    },
    {
      slug: "a1-ps-q3",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "He ___ (not / speak) French.",
      correctAnswer: "doesn't speak",
      order: 3,
    },
    {
      slug: "a1-ps-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ you like pizza?",
      options: ["Do", "Does", "Is"],
      correctAnswer: "Do",
      order: 4,
    },
    {
      slug: "a1-ps-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ she work on Saturdays?",
      options: ["Do", "Does", "Is"],
      correctAnswer: "Does",
      order: 5,
    },
    {
      slug: "a1-ps-q6",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "He ___ (study) every night.",
      correctAnswer: "studies",
      explanation: "Consonante + y → 'y' cambia a 'ies'.",
      order: 6,
    },
    {
      slug: "a1-ps-q7",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Ella no vive aquí.'",
      correctAnswer: "She doesn't live here.",
      order: 7,
    },
    {
      slug: "a1-ps-q8",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Do you speak English?'",
      correctAnswer: "¿Hablas inglés?",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-ps-reading-routine",
      skill: "READING",
      title: "Daniel's Routine",
      bodyEn: `Daniel works as a chef. He always wakes up early and goes to the restaurant at 6 a.m.

He doesn't eat breakfast at home; he eats at the restaurant with his team. He usually cooks lunch and dinner every day, except Mondays.

Does Daniel like his job? Yes, he does! He loves cooking for people.`,
      order: 1,
      questions: [
        {
          slug: "a1-ps-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What is Daniel's job?",
          options: ["Waiter", "Chef", "Manager"],
          correctAnswer: "Chef",
          order: 1,
        },
        {
          slug: "a1-ps-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Where does Daniel eat breakfast?",
          options: [
            "At home",
            "At the restaurant",
            "He doesn't eat breakfast",
          ],
          correctAnswer: "At the restaurant",
          order: 2,
        },
        {
          slug: "a1-ps-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Which day doesn't Daniel work?",
          options: ["Sunday", "Monday", "Saturday"],
          correctAnswer: "Monday",
          order: 3,
        },
      ],
    },
  ],
};
