import type { UnitContent } from "../../schema";
import { meta } from "./meta";
import { unit as pastSimpleBe } from "./units/past-simple-be";
import { unit as pastSimpleVerbs } from "./units/past-simple-verbs";
import { unit as comparativesSuperlatives } from "./units/comparatives-superlatives";
import { unit as goingTo } from "./units/going-to";
import { unit as will } from "./units/will";
import { unit as mustHaveToShould } from "./units/must-have-to-should";
import { unit as countableUncountable } from "./units/countable-uncountable";
import { unit as adverbsFrequency } from "./units/adverbs-frequency";
import { unit as objectPronouns } from "./units/object-pronouns";
import { unit as presentPerfect } from "./units/present-perfect";
import { unit as connectors } from "./units/connectors";

export { meta };

export const units: UnitContent[] = [
  pastSimpleBe,
  pastSimpleVerbs,
  comparativesSuperlatives,
  goingTo,
  will,
  mustHaveToShould,
  countableUncountable,
  adverbsFrequency,
  objectPronouns,
  presentPerfect,
  connectors,
];
