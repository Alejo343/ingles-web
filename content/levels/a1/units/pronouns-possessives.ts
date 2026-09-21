import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-pronouns-possessives",
  levelCode: "A1",
  title: "Pronombres y adjetivos posesivos",
  description:
    "I, you, he, she... y my, your, his, her... para hablar de personas y de lo que tienen.",
  order: 2,
  estimatedMinutes: 15,

  grammar: {
    title: "Pronombres sujeto y adjetivos posesivos",
    explanationMd: `## Pronombres sujeto (subject pronouns)

Reemplazan al sujeto de la frase (la persona o cosa que hace la acción).

| Pronombre | Significado |
|---|---|
| I | yo |
| you | tú / usted |
| he | él |
| she | ella |
| it | (para cosas y animales) |
| we | nosotros/as |
| you | vosotros/as / ustedes |
| they | ellos/as |

Ejemplo: *She is a doctor.* (Ella es doctora.)

## Adjetivos posesivos (possessive adjectives)

Van **antes de un sustantivo** para decir de quién es algo. A diferencia del español, en inglés no cambian según el género de lo poseído.

| Pronombre | Posesivo | Ejemplo |
|---|---|---|
| I | my | my book |
| you | your | your car |
| he | his | his dog |
| she | her | her phone |
| it | its | its name |
| we | our | our house |
| they | their | their friends |

**Ojo:** *his* y *her* dependen del **dueño** (he/she), no de la cosa poseída. *He has a sister. Her name is Ana.* ("Her" porque el dueño del nombre es "she", la hermana).`,
    examples: [
      { en: "I am from Colombia.", es: "Yo soy de Colombia." },
      { en: "This is my brother.", es: "Este es mi hermano." },
      { en: "She loves her job.", es: "A ella le encanta su trabajo." },
      { en: "We live with our parents.", es: "Vivimos con nuestros padres." },
      { en: "They have their own car.", es: "Ellos tienen su propio carro." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-pron-brother",
      termEn: "brother",
      termEs: "hermano",
      exampleEn: "This is my brother.",
      exampleEs: "Este es mi hermano.",
      partOfSpeech: "noun",
      order: 1,
    },
    {
      slug: "a1-pron-sister",
      termEn: "sister",
      termEs: "hermana",
      exampleEn: "Her sister is a teacher.",
      exampleEs: "Su hermana es profesora.",
      partOfSpeech: "noun",
      order: 2,
    },
    {
      slug: "a1-pron-friend",
      termEn: "friend",
      termEs: "amigo/a",
      exampleEn: "He is my best friend.",
      exampleEs: "Él es mi mejor amigo.",
      partOfSpeech: "noun",
      order: 3,
    },
    {
      slug: "a1-pron-house",
      termEn: "house",
      termEs: "casa",
      exampleEn: "Our house is small.",
      exampleEs: "Nuestra casa es pequeña.",
      partOfSpeech: "noun",
      order: 4,
    },
    {
      slug: "a1-pron-car",
      termEn: "car",
      termEs: "carro / coche",
      exampleEn: "Their car is new.",
      exampleEs: "Su carro es nuevo.",
      partOfSpeech: "noun",
      order: 5,
    },
    {
      slug: "a1-pron-name",
      termEn: "name",
      termEs: "nombre",
      exampleEn: "What is your name?",
      exampleEs: "¿Cuál es tu nombre?",
      partOfSpeech: "noun",
      order: 6,
    },
    {
      slug: "a1-pron-phone",
      termEn: "phone",
      termEs: "teléfono",
      exampleEn: "Is this your phone?",
      exampleEs: "¿Este es tu teléfono?",
      partOfSpeech: "noun",
      order: 7,
    },
    {
      slug: "a1-pron-job",
      termEn: "job",
      termEs: "trabajo / empleo",
      exampleEn: "She likes her job.",
      exampleEs: "A ella le gusta su trabajo.",
      partOfSpeech: "noun",
      order: 8,
    },
    {
      slug: "a1-pron-dog",
      termEn: "dog",
      termEs: "perro",
      exampleEn: "Its name is Rocky.",
      exampleEs: "Su nombre es Rocky.",
      partOfSpeech: "noun",
      order: 9,
    },
    {
      slug: "a1-pron-parents",
      termEn: "parents",
      termEs: "padres",
      exampleEn: "We visit our parents every week.",
      exampleEs: "Visitamos a nuestros padres cada semana.",
      partOfSpeech: "noun",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-pron-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ is a doctor. (Ana)",
      options: ["He", "She", "They"],
      correctAnswer: "She",
      explanation: "Ana es una mujer, así que usamos 'she'.",
      order: 1,
    },
    {
      slug: "a1-pron-q2",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "This is ___ car. (yo)",
      options: ["my", "your", "his"],
      correctAnswer: "my",
      order: 2,
    },
    {
      slug: "a1-pron-q3",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "He has a sister. ___ name is Ana. (posesivo de 'he')",
      correctAnswer: "his",
      explanation: "El dueño es 'he', así que se usa 'his', no importa que sea el nombre de su hermana.",
      order: 3,
    },
    {
      slug: "a1-pron-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "We love ___ house.",
      options: ["our", "their", "your"],
      correctAnswer: "our",
      order: 4,
    },
    {
      slug: "a1-pron-q5",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "They have a dog. ___ dog is very big. (posesivo de 'they')",
      correctAnswer: "their",
      order: 5,
    },
    {
      slug: "a1-pron-q6",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Ella es mi hermana.'",
      correctAnswer: "She is my sister.",
      acceptableAnswers: ["She's my sister", "She's my sister."],
      order: 6,
    },
    {
      slug: "a1-pron-q7",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Their house is big.'",
      correctAnswer: "Su casa es grande.",
      order: 7,
    },
    {
      slug: "a1-pron-q8",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "The dog is hungry. ___ food is in the kitchen.",
      options: ["Its", "It's", "His"],
      correctAnswer: "Its",
      explanation: "'Its' (sin apóstrofe) es el posesivo de 'it'. 'It's' significa 'it is'.",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-pron-reading-friends",
      skill: "READING",
      title: "My Friends",
      bodyEn: `I have two good friends: Carlos and Laura.

Carlos is from Mexico. His job is very interesting: he is a pilot! His wife is a doctor, and their house is near the airport.

Laura is my classmate. Her English is excellent. She lives with her parents, and their apartment is downtown.

We are a small group, but our friendship is strong.`,
      order: 1,
      questions: [
        {
          slug: "a1-pron-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What is Carlos's job?",
          options: ["Doctor", "Pilot", "Teacher"],
          correctAnswer: "Pilot",
          order: 1,
        },
        {
          slug: "a1-pron-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Who does Laura live with?",
          options: ["Her friends", "Her parents", "Her husband"],
          correctAnswer: "Her parents",
          order: 2,
        },
        {
          slug: "a1-pron-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Where is Carlos's house?",
          options: [
            "Downtown",
            "Near the airport",
            "Near the school",
          ],
          correctAnswer: "Near the airport",
          order: 3,
        },
      ],
    },
  ],
};
