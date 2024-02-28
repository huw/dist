import { DEFAULT_N } from "./parameters.ts";
import randomSample from "../randomSample.ts";
import randomBeta from "@stdlib/random/base/beta";

export default function beta(
  α: number,
  β: number,
  { n = DEFAULT_N } = {},
): number[] {
  return randomSample(randomBeta, n, α, β);
}

export function betaMeanSampleSize(
  μ: number,
  ν: number,
  { n = DEFAULT_N } = {},
): number[] {
  const α = μ * ν;
  const β = (1 - μ) * ν;
  return beta(α, β, { n });
}

export function betaMeanStdev(
  μ: number,
  σ: number,
  { n = DEFAULT_N } = {},
): number[] {
  const ν = (μ * (1 - μ)) / σ ** 2 - 1;
  return betaMeanSampleSize(μ, ν, { n });
}
