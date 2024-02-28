import beta, {
  betaMeanSampleSize,
  betaMeanStdev,
} from "../distribution/beta.ts";
import exponential from "../distribution/exponential.ts";
import gamma from "../distribution/gamma.ts";
import lognormal, { lognormalInterval, to } from "../distribution/lognormal.ts";
import normal, { normalInterval } from "../distribution/normal.ts";
import uniform from "../distribution/uniform.ts";

Deno.test("beta", () => {
  console.log("beta(5, 10)", beta(5, 10, { n: 5 }));
  console.log("betaMeanSampleSize(5, 10)", betaMeanSampleSize(5, 10, { n: 5 }));
  console.log("betaMeanStdev(5, 2)", betaMeanStdev(5, 2, { n: 5 }));
});

Deno.test("exponential", () => {
  console.log("exponential(5)", exponential(5, { n: 5 }));
});

Deno.test("gamma", () => {
  console.log("gamma(5, 2)", gamma(5, 2, { n: 5 }));
});

Deno.test("lognormal", () => {
  console.log("lognormal(5, 0.005)", lognormal(5, 0.005, { n: 5 }));
  console.log("lognormalInterval(5, 10)", lognormalInterval(5, 10, { n: 5 }));
  console.log("to(5, 10):", to(5, 10, { n: 5 }));
});

Deno.test("normal", () => {
  console.log("normal(5, 2)", normal(5, 2, { n: 5 }));
  console.log("normalInterval(5, 10)", normalInterval(5, 10, { n: 5 }));
});

Deno.test("uniform", () => {
  console.log("uniform(5, 10)", uniform(5, 10, { n: 5 }));
});
