import { addDays } from "date-fns";

export type Quality = 0 | 3 | 4 | 5;

export const QUALITY_LABELS: { quality: Quality; label: string }[] = [
  { quality: 0, label: "Otra vez" },
  { quality: 3, label: "Difícil" },
  { quality: 4, label: "Bien" },
  { quality: 5, label: "Fácil" },
];

export type CardState = {
  easeFactor: number;
  intervalDays: number;
  repetitions: number;
  lapses: number;
};

export type ScheduleResult = CardState & {
  dueDate: Date;
};

const MIN_EASE_FACTOR = 1.3;

/** Algoritmo SM-2 simplificado (SuperMemo 2). */
export function schedule(
  card: CardState,
  quality: Quality,
  now: Date = new Date(),
): ScheduleResult {
  let { easeFactor, intervalDays, repetitions, lapses } = card;

  if (quality < 3) {
    repetitions = 0;
    intervalDays = 1;
    lapses += 1;
  } else {
    if (repetitions === 0) {
      intervalDays = 1;
    } else if (repetitions === 1) {
      intervalDays = 6;
    } else {
      intervalDays = Math.round(intervalDays * easeFactor);
    }
    repetitions += 1;
  }

  easeFactor = Math.max(
    MIN_EASE_FACTOR,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)),
  );

  return {
    easeFactor,
    intervalDays,
    repetitions,
    lapses,
    dueDate: addDays(now, intervalDays),
  };
}
