import { DEFAULT_N } from "./parameters.ts";
import randomSample from "../randomSample.ts";
import { randomGamma } from "d3";

export default function gamma(
  k: number,
  θ: number,
  { n = DEFAULT_N } = {},
): number[] {
  return randomSample(randomGamma(k, θ), n);
}
