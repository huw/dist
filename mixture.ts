import { sample } from "@es-toolkit/es-toolkit";
import { DEFAULT_N } from "./distribution/parameters.ts";

export default function mixture(
  samples: (number | number[])[],
  weights?: number[],
  { n = DEFAULT_N } = {},
) {
  if (weights && samples.length !== weights.length) {
    throw new Error("Samples and weights must have the same length");
  }

  if (!weights) {
    weights = Array.from({ length: samples.length }, () => 1);
  }

  const wrappedSamples = samples.map((sample) =>
    typeof sample === "number" ? [sample] : sample
  );

  // Create an array that's the length of the final array, with a proportionate number of elements
  // We'll sample from this to determine which input sample to sample from

  const totalWeight = weights.reduce((a, b) => a + b, 0);
  const samplingArray = weights.flatMap((x, index) =>
    Array.from({ length: Math.round(x / totalWeight * n) }, () => index)
  );

  // For each value in the final array, sample to find the index, then sample from that index

  return Array.from(
    { length: n },
    () => sample(wrappedSamples[sample(samplingArray)]),
  );
}
