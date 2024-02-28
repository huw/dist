import { to } from "../distribution/lognormal.ts";
import operate from "../operate.ts";

Deno.test("operate", () => {
  const x = to(10, 20, { n: 10 });
  const y = to(2, 3, { n: 10 });
  const z = to(1, 100, { n: 10 });

  const add = (a: number | number[], b: number | number[]) =>
    operate((a, b) => a + b, a, b);
  const multiply = (a: number | number[], b: number | number[]) =>
    operate((a, b) => a * b, a, b);

  console.log(add(multiply(x, y), z));
});
