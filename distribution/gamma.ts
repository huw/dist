import { DEFAULT_N } from "./parameters.ts";
import randomSample from "../randomSample.ts";
import randomGamma from "@stdlib/random/base/gamma";

export default function gamma(
  α: number,
  β: number,
  { n = DEFAULT_N } = {},
): number[] {
  return randomSample(randomGamma, n, α, β);
}
