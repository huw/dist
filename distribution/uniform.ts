import { DEFAULT_N } from "./parameters.ts";
import randomSample from "../randomSample.ts";
import randomUniform from "@stdlib/random/base/uniform";

export default function uniform(
  a: number,
  b: number,
  { n = DEFAULT_N } = {},
): number[] {
  return randomSample(randomUniform, n, a, b);
}
