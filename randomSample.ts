/*
 * For each distribution, we need a generator function and a way of converting credible intervals to that distribution’s parameters.
 */
export default function randomSample<
  RandomGenerator extends () => number,
>(
  random: RandomGenerator,
  n: number,
) {
  const S: number[] = Array.from({ length: n });
  for (let i = 0; i < n; i++) {
    S[i] = random();
  }
  return S;
}
