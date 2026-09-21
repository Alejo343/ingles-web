import type { UnitContent } from "../../schema";
import { meta } from "./meta";
import { unit as toBe } from "./units/to-be";
import { unit as pronounsPossessives } from "./units/pronouns-possessives";
import { unit as articles } from "./units/articles";
import { unit as pluralNouns } from "./units/plural-nouns";
import { unit as demonstratives } from "./units/demonstratives";
import { unit as thereIsAre } from "./units/there-is-are";
import { unit as presentSimple } from "./units/present-simple";
import { unit as can } from "./units/can";
import { unit as haveGot } from "./units/have-got";
import { unit as prepositionsPlace } from "./units/prepositions-place";
import { unit as presentContinuous } from "./units/present-continuous";

export { meta };

export const units: UnitContent[] = [
  toBe,
  pronounsPossessives,
  articles,
  pluralNouns,
  demonstratives,
  thereIsAre,
  presentSimple,
  can,
  haveGot,
  prepositionsPlace,
  presentContinuous,
];
