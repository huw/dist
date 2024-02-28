import { DEFAULT_N, DEFAULT_P } from "./parameters.ts";
import randomSample from "../randomSample.ts";
import randomNormal from "@stdlib/random/base/normal";
import erfinv from "@stdlib/math/base/special/erfinv";

export default function normal(
  μ: number,
  σ: number,
  { n = DEFAULT_N } = {},
): number[] {
  return randomSample(randomNormal, n, μ, σ);
}

export function normalInterval(
  u: number,
  v: number,
  { p = DEFAULT_P, n = DEFAULT_N } = {},
): number[] {
  const Z = Math.sqrt(2) * erfinv(p);
  const μ = (u + v) / 2;
  const σ = (v - u) / (2 * Z);
  return normal(μ, σ, { n });
}
