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
import { unit as questions } from "./units/questions";
import { unit as imperativesConnectors } from "./units/imperatives-connectors";
import { unit as numbersTime } from "./units/numbers-time";
import { unit as daysMonths } from "./units/days-months";
import { unit as colorsClothes } from "./units/colors-clothes";
import { unit as family } from "./units/family";
import { unit as jobs } from "./units/jobs";
import { unit as countriesNationalities } from "./units/countries-nationalities";
import { unit as house } from "./units/house";
import { unit as food } from "./units/food";
import { unit as cityPlaces } from "./units/city-places";
import { unit as weather } from "./units/weather";
import { unit as likesPreferences } from "./units/likes-preferences";

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
  questions,
  imperativesConnectors,
  numbersTime,
  daysMonths,
  colorsClothes,
  family,
  jobs,
  countriesNationalities,
  house,
  food,
  cityPlaces,
  weather,
  likesPreferences,
];
