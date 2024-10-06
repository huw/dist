import { assert, assertEquals } from "jsr:@std/assert";

/**
 * Assert that a value is an array, that it has the specified size, and that its elements are within the provided bounds.
 */
export default function assertArray(
  value: unknown,
  size: number,
  lower?: number,
  upper?: number,
) {
  if (Array.isArray(value)) {
    assertEquals(value.length, size);
    assert(
      value.every((x) =>
        (lower ? x >= lower : true) &&
        (upper ? x <= upper : true)
      ),
    );
  } else {
    throw new Error("Provided value was not an array");
  }
}
