import { DEFAULT_N, DEFAULT_P } from "./parameters.ts";
import randomSample from "../randomSample.ts";
import randomLognormal from "@stdlib/random/base/lognormal";
import erfinv from "@stdlib/math/base/special/erfinv";

export default function lognormal(
  μ: number,
  σ: number,
  { n = DEFAULT_N } = {},
): number[] {
  return randomSample(randomLognormal, n, μ, σ);
}

export function lognormalInterval(
  u: number,
  v: number,
  { p = DEFAULT_P, n = DEFAULT_N } = {},
): number[] {
  const logU = Math.log(u);
  const logV = Math.log(v);

  const Z = Math.sqrt(2) * erfinv(p);
  const μ = (logU + logV) / 2;
  const σ = (logV - logU) / (2 * Z);

  return lognormal(μ, σ, { n });
}

export const to = lognormalInterval;
