import { DEFAULT_N } from "./parameters.ts";
import gamma from "./gamma.ts";

export default function exponential(
  λ: number,
  { n = DEFAULT_N } = {},
): number[] {
  return gamma(1, λ, { n });
}
