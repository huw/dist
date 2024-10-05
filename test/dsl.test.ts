import { dist, normal, to, uniform } from "../mod.ts";
import { assertEquals, assertThrows } from "@std/assert";
import assertArray from "./assertArray.ts";

Deno.test("Basic arithmetic operations", () => {
  assertEquals(dist`1 + 2`, 3);
  assertEquals(dist`5 - 3`, 2);
  assertEquals(dist`2 * 4`, 8);
  assertEquals(dist`10 / 2`, 5);
  assertEquals(dist`7 % 3`, 1);
});

Deno.test("Operator precedence", () => {
  assertEquals(dist`1 + 2 * 3`, 7);
  assertEquals(dist`(1 + 2) * 3`, 9);
  assertEquals(dist`10 - 2 * 3`, 4);
  assertEquals(dist`10 / 2 + 3`, 8);
});

Deno.test("Exponentiation", () => {
  assertEquals(dist`2 ^ 3`, 8);
  assertEquals(dist`3 ^ 2`, 9);
  assertEquals(dist`2 ^ 0`, 1);
  assertEquals(dist`0 ^ 5`, 0);
});

Deno.test("Unary operators", () => {
  assertEquals(dist`+5`, 5);
  assertEquals(dist`-5`, -5);
  assertEquals(dist`-(2 + 3)`, -5);
});

Deno.test("Complex expressions", () => {
  assertEquals(dist`(2 + 3) * 4 - 10 / 2`, 15);
  assertEquals(dist`2 ^ (3 + 1) / 4`, 4);
});

Deno.test("Uniform distribution", () => {
  assertArray(dist`${uniform(1, 2, { n: 5 })} + 1`, 5, 2, 3);
  assertArray(dist`${uniform(0, 10, { n: 10 })} * 2`, 10, 0, 20);
});

Deno.test("Normal distribution", () => {
  assertArray(dist`${normal(0, 1, { n: 100 })}`, 100, -4, 4); // Assuming 4 sigma range
});

Deno.test("Lognormal distribution with 'to' operator", () => {
  assertArray(dist`${uniform(1, 2, { n: 5 })} ^ ${to(1, 2)}`, 5, 1);
  assertArray(dist`1 to 10`, 1000, 0);
});

Deno.test("Combining distributions and arithmetic", () => {
  assertArray(
    dist`(${uniform(1, 2, { n: 5 })} + ${normal(0, 1, { n: 5 })}) * 2`,
    5,
  );
});

Deno.test("Edge cases", () => {
  assertEquals(dist`1 / 0`, Infinity);
  assertEquals(dist`-1 / 0`, -Infinity);
  assertEquals(dist`0 / 0`, NaN);
});

Deno.test("Error cases", () => {
  assertThrows(() => dist`()`, Error);
  assertThrows(() => dist`1 +`, Error);
  assertThrows(() => dist`1 + * 2`, Error);
});

Deno.test("Nested expressions", () => {
  assertEquals(dist`((1 + 2) * (3 + 4)) / 2`, 10.5);
});

Deno.test("Mixing distributions and constants", () => {
  assertArray(dist`${uniform(0, 1, { n: 5 })} + 5`, 5, 5, 6);
  assertArray(dist`10 * ${normal(0, 1, { n: 5 })}`, 5, -40, 40);
});

Deno.test("Chaining arithmetic with distributions", () => {
  assertArray(dist`(${uniform(1, 2, { n: 5 })} + 1) * 2 - 3`, 5, 1, 3);
});

Deno.test("Complex distribution combinations", () => {
  assertArray(
    dist`(${uniform(0, 1, { n: 5 })} + ${normal(0, 1, { n: 5 })}) ^ (1 to 2)`,
    5,
  );
});
