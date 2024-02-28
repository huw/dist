import plot from "./plot.ts";
import { distValue } from "./dsl.ts";

export default function dist(
  strings: { raw: readonly string[] },
  ...substitutions: unknown[]
): ReturnType<typeof plot> {
  return plot(distValue(strings, ...substitutions));
}
