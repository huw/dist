import { DEFAULT_N } from "./parameters.ts";
import randomSample from "../randomSample.ts";
import { randomExponential } from "d3";

export default function exponential(
  λ: number,
  { n = DEFAULT_N } = {},
): number[] {
  return randomSample(randomExponential(λ), n);
}
