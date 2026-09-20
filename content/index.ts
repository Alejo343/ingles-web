import type { LevelMeta, UnitContent } from "./schema";
import * as a1 from "./levels/a1";
import * as a2 from "./levels/a2";

export const levels: { meta: LevelMeta; units: UnitContent[] }[] = [
  { meta: a1.meta, units: a1.units },
  { meta: a2.meta, units: a2.units },
];
