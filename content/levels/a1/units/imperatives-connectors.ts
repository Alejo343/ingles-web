import type { UnitContent } from "../../../schema";

export const unit: UnitContent = {
  slug: "a1-imperatives-connectors",
  levelCode: "A1",
  title: "Imperativos y conectores básicos",
  description: "Dar órdenes e instrucciones, y unir ideas con and, but, or, because.",
  order: 13,
  estimatedMinutes: 12,

  grammar: {
    title: "Imperativos y conectores básicos",
    explanationMd: `## Imperativos (órdenes e instrucciones)

Se usa el verbo en **infinitivo sin "to"**, sin sujeto. Es igual para todos: no cambia con la persona.

- Afirmativo: *Open the door. Sit down. Listen carefully.*
- Negativo: **Don't** + verbo: *Don't touch that. Don't be late.*
- Para ser más educado, se añade **please**: *Please sit down. / Sit down, please.*

Se usa mucho para instrucciones (recetas, manuales), reglas y consejos directos.

## Conectores básicos

Unen dos ideas en una misma frase.

| Conector | Uso | Ejemplo |
|---|---|---|
| **and** | añadir información | *I like tea **and** coffee.* |
| **but** | contraste | *She is tired **but** happy.* |
| **or** | alternativa | *Do you want tea **or** coffee?* |
| **because** | razón/causa | *I stayed home **because** it was raining.* |

**Because** responde a la pregunta "why?": *Why did you stay home? Because it was raining.*`,
    examples: [
      { en: "Open your book, please.", es: "Abre tu libro, por favor." },
      { en: "Don't be late for class.", es: "No llegues tarde a clase." },
      { en: "I like dogs and cats.", es: "Me gustan los perros y los gatos." },
      { en: "He is short but very strong.", es: "Él es bajo pero muy fuerte." },
      { en: "I'm tired because I worked all day.", es: "Estoy cansado porque trabajé todo el día." },
    ],
  },

  vocabulary: [
    {
      slug: "a1-ic-open",
      termEn: "to open",
      termEs: "abrir",
      exampleEn: "Open the door, please.",
      exampleEs: "Abre la puerta, por favor.",
      partOfSpeech: "verb",
      order: 1,
    },
    {
      slug: "a1-ic-close",
      termEn: "to close",
      termEs: "cerrar",
      exampleEn: "Close the window.",
      exampleEs: "Cierra la ventana.",
      partOfSpeech: "verb",
      order: 2,
    },
    {
      slug: "a1-ic-sitdown",
      termEn: "to sit down",
      termEs: "sentarse",
      exampleEn: "Sit down, please.",
      exampleEs: "Siéntate, por favor.",
      partOfSpeech: "verb",
      order: 3,
    },
    {
      slug: "a1-ic-standup",
      termEn: "to stand up",
      termEs: "levantarse / ponerse de pie",
      exampleEn: "Stand up and say your name.",
      exampleEs: "Ponte de pie y di tu nombre.",
      partOfSpeech: "verb",
      order: 4,
    },
    {
      slug: "a1-ic-listen",
      termEn: "to listen",
      termEs: "escuchar",
      exampleEn: "Listen carefully.",
      exampleEs: "Escucha con atención.",
      partOfSpeech: "verb",
      order: 5,
    },
    {
      slug: "a1-ic-wait",
      termEn: "to wait",
      termEs: "esperar",
      exampleEn: "Wait here, please.",
      exampleEs: "Espera aquí, por favor.",
      partOfSpeech: "verb",
      order: 6,
    },
    {
      slug: "a1-ic-touch",
      termEn: "to touch",
      termEs: "tocar",
      exampleEn: "Don't touch that!",
      exampleEs: "¡No toques eso!",
      partOfSpeech: "verb",
      order: 7,
    },
    {
      slug: "a1-ic-and",
      termEn: "and",
      termEs: "y",
      exampleEn: "I like tea and coffee.",
      exampleEs: "Me gusta el té y el café.",
      partOfSpeech: "conjunction",
      order: 8,
    },
    {
      slug: "a1-ic-but",
      termEn: "but",
      termEs: "pero",
      exampleEn: "She is tired but happy.",
      exampleEs: "Ella está cansada pero feliz.",
      partOfSpeech: "conjunction",
      order: 9,
    },
    {
      slug: "a1-ic-because",
      termEn: "because",
      termEs: "porque",
      exampleEn: "I stayed home because it was raining.",
      exampleEs: "Me quedé en casa porque estaba lloviendo.",
      partOfSpeech: "conjunction",
      order: 10,
    },
  ],

  questions: [
    {
      slug: "a1-ic-q1",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "___ the door, please. (orden educada)",
      options: ["Open", "Opens", "Opening"],
      correctAnswer: "Open",
      order: 1,
    },
    {
      slug: "a1-ic-q2",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "___ touch that! (orden negativa)",
      correctAnswer: "Don't",
      order: 2,
    },
    {
      slug: "a1-ic-q3",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "I like tea ___ coffee. (añadir)",
      options: ["but", "and", "because"],
      correctAnswer: "and",
      order: 3,
    },
    {
      slug: "a1-ic-q4",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "She is short ___ very strong. (contraste)",
      options: ["and", "but", "or"],
      correctAnswer: "but",
      order: 4,
    },
    {
      slug: "a1-ic-q5",
      skill: "GRAMMAR",
      answerFormat: "MULTIPLE_CHOICE",
      prompt: "Do you want tea ___ coffee? (alternativa)",
      options: ["and", "but", "or"],
      correctAnswer: "or",
      order: 5,
    },
    {
      slug: "a1-ic-q6",
      skill: "GRAMMAR",
      answerFormat: "FILL_BLANK",
      prompt: "I'm tired ___ I worked all day. (razón)",
      correctAnswer: "because",
      order: 6,
    },
    {
      slug: "a1-ic-q7",
      skill: "TRANSLATION_ES_EN",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Siéntate, por favor.'",
      correctAnswer: "Sit down, please.",
      order: 7,
    },
    {
      slug: "a1-ic-q8",
      skill: "TRANSLATION_EN_ES",
      answerFormat: "TEXT_INPUT",
      prompt: "Traduce: 'Listen carefully.'",
      correctAnswer: "Escucha con atención.",
      order: 8,
    },
  ],

  passages: [
    {
      slug: "a1-ic-reading-recipe",
      skill: "READING",
      title: "How to Make a Sandwich",
      bodyEn: `It's easy to make a sandwich! First, open the bread and put it on a plate. Take some cheese and ham, but don't use too much.

Put the cheese and the ham on the bread. Close the sandwich, and cut it in half.

You can eat it now, or you can wait and eat it later because it's also good cold!`,
      order: 1,
      questions: [
        {
          slug: "a1-ic-reading-q1",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What do you put on the bread?",
          options: ["Cheese and ham", "Only cheese", "Tomatoes"],
          correctAnswer: "Cheese and ham",
          order: 1,
        },
        {
          slug: "a1-ic-reading-q2",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "What should you do after putting the cheese and ham on?",
          options: [
            "Cut the bread first",
            "Close the sandwich and cut it in half",
            "Add more bread",
          ],
          correctAnswer: "Close the sandwich and cut it in half",
          order: 2,
        },
        {
          slug: "a1-ic-reading-q3",
          skill: "READING",
          answerFormat: "MULTIPLE_CHOICE",
          prompt: "Why can you eat it later?",
          options: [
            "Because it's also good cold",
            "Because it's easy",
            "Because it's small",
          ],
          correctAnswer: "Because it's also good cold",
          order: 3,
        },
      ],
    },
  ],
};
