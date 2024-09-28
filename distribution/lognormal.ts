import { DEFAULT_N, DEFAULT_P } from "./parameters.ts";
import randomSample from "../randomSample.ts";
import { randomLogNormal } from "d3";
import { erfinv } from "@toshiara/special-erfinv";

export default function lognormal(
  μ: number,
  σ: number,
  { n = DEFAULT_N } = {},
): number[] {
  return randomSample(randomLogNormal(μ, σ), n);
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
