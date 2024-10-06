import { sample as sampleFrom } from "@es-toolkit/es-toolkit";

export default function truncate(
  sample: number | number[],
  left?: number,
  right?: number,
) {
  if (typeof sample === "number") {
    sample = [sample];
  }

  const filteredSample = sample.filter((x) =>
    (left ? x >= left : true) && (right ? x <= right : true)
  );

  if (filteredSample.length === 0) {
    return [];
  }

  return Array.from(
    { length: sample.length },
    () => sampleFrom(filteredSample),
  );
}

export function truncateLeft(sample: number | number[], cutoff: number) {
  return truncate(sample, cutoff);
}

export function truncateRight(sample: number | number[], cutoff: number) {
  return truncate(sample, undefined, cutoff);
}
