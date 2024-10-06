import { assertGreater, assertLess } from "@std/assert";
import { dist, mixture } from "../mod.ts";
import assertArray from "./assertArray.ts";
import * as d3 from "d3";

Deno.test("mixture", () => {
  assertArray(
    mixture(
      [[0, 1, 2], Array.from({ length: 20 }, () => 10), [-1]],
      undefined,
      { n: 10 },
    ),
    10,
    -1,
    10,
  );
});

Deno.test("mixture with number-only inputs", () => {
  assertArray(mixture([0, 1], undefined, { n: 5 }), 5, 0, 1);
});

Deno.test("mixture with impossible value", () => {
  assertArray(mixture([0, 1, 2], [0, 0, 1], { n: 100 }), 100, 2, 2);
});

Deno.test("mixture numeric properties", () => {
  const sample = mixture([dist`1 to 2`, dist`5 to 8`, dist`9 to 10`], [
    0.1,
    0.1,
    0.8,
  ]);

  assertArray(sample, 1000, 0);

  // These will fail very very occasionally
  assertGreater(d3.mean(sample), 5);
  assertLess(d3.mean(sample), 10);
  assertLess(d3.quantile(sample, 0.05), 2);
  assertGreater(d3.quantile(sample, 0.95), 9);
});
