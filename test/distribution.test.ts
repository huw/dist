import beta, {
  betaMeanSampleSize,
  betaMeanStdev,
} from "../distribution/beta.ts";
import exponential from "../distribution/exponential.ts";
import gamma from "../distribution/gamma.ts";
import lognormal, { lognormalInterval, to } from "../distribution/lognormal.ts";
import normal, { normalInterval } from "../distribution/normal.ts";
import uniform from "../distribution/uniform.ts";
import assertArray from "./assertArray.ts";

Deno.test("beta", () => {
  assertArray(beta(5, 10, { n: 5 }), 5, 0, 1);
  assertArray(betaMeanSampleSize(0.5, 10, { n: 5 }), 5);
  assertArray(betaMeanStdev(0.5, 0.1, { n: 5 }), 5);
});

Deno.test("exponential", () => {
  assertArray(exponential(5, { n: 5 }), 5, 0);
});

Deno.test("gamma", () => {
  assertArray(gamma(5, 2, { n: 5 }), 5, 0);
});

Deno.test("lognormal", () => {
  assertArray(lognormal(5, 0.005, { n: 5 }), 5, 0);
  assertArray(lognormalInterval(5, 10, { n: 5 }), 5, 0);
  assertArray(to(5, 10, { n: 5 }), 5, 0);
});

Deno.test("normal", () => {
  assertArray(normal(5, 2, { n: 5 }), 5);
  assertArray(normalInterval(5, 10, { n: 5 }), 5);
});

Deno.test("uniform", () => {
  assertArray(uniform(5, 10, { n: 5 }), 5, 5, 10);
});
