import uniform from "../distribution/uniform.ts";
import { to } from "../distribution/lognormal.ts";
import dist from "../dist.ts";

Deno.test("dsl", () => {
  console.log("1 + 2:", dist`1 + 2`);
  console.log("1 + 2 * 3:", dist`1 + 2 * 3`);
  console.log("uniform(1, 2) + 1:", dist`${uniform(1, 2, { n: 5 })} + 1`);
  console.log(
    "uniform(1, 2) ^ to(1, 2):",
    dist`${uniform(1, 2, { n: 5 })} ^ ${to(1, 2)}`,
  );
});
