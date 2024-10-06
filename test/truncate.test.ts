import { dist, truncate, truncateLeft, truncateRight } from "../mod.ts";
import assertArray from "./assertArray.ts";

Deno.test("truncate", () => {
  assertArray(truncate(dist`1 to 10`, 1, 10), 1000, 1, 10);
});

Deno.test("truncateLeft and truncateRight", () => {
  assertArray(truncateLeft(dist`1 to 10`, 1), 1000, 1);
  assertArray(truncateRight(dist`1 to 10`, 10), 1000, undefined, 10);
});
