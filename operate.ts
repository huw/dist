import { sampleSize } from "@es-toolkit/es-toolkit";

export default function operate(
  operation: (a: number, b: number) => number,
  a: number | number[],
  b: number | number[],
) {
  if (typeof a === "number" && typeof b === "number") {
    return operation(a, b);
  }

  if (typeof a === "number" && Array.isArray(b)) {
    const S = b.slice();
    for (let i = 0; i < S.length; i++) {
      S[i] = operation(a, S[i]);
    }
    return S;
  }

  if (Array.isArray(a) && typeof b === "number") {
    const S = a.slice();
    for (let i = 0; i < S.length; i++) {
      S[i] = operation(S[i], b);
    }
    return S;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    const n = Math.min(a.length, b.length);
    const S: number[] = Array.from({ length: n });

    const aBar = sampleSize(a, n);
    const bBar = sampleSize(b, n);

    for (let i = 0; i < S.length; i++) {
      S[i] = operation(aBar[i], bBar[i]);
    }

    return S;
  }

  throw new TypeError(
    "Arguments supplied to operation were not numbers or arrays of numbers.",
  );
}
