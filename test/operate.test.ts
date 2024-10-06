import { to } from "../mod.ts";
import operate from "../operate.ts";
import assertArray from "./assertArray.ts";

Deno.test("operate", () => {
  const x = to(10, 20, { n: 10 });
  const y = to(2, 3, { n: 10 });
  const z = to(1, 100, { n: 10 });

  const add = (a: number[], b: number[]) => operate((a, b) => a + b, a, b);
  const multiply = (a: number[], b: number[]) => operate((a, b) => a * b, a, b);

  assertArray(add(multiply(x, y), z), 10, 0);
});
