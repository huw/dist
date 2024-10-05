import parse, { binary, err, group, unary } from "subscript/parse";
import compile, { operator } from "subscript/compile";
import {
  PREC_ADD,
  PREC_EXP,
  PREC_GROUP,
  PREC_MULT,
  PREC_PREFIX,
} from "subscript/const";
import operate from "./operate.ts";
import { lognormalInterval } from "./distribution/lognormal.ts";

// Support for numeric literals
import "subscript/feature/number.js";

// Addition & subtraction
// Adapted from `subscript/feature/add.js` (removed assignment)

binary("+", PREC_ADD);
operator(
  "+",
  (left: string, right: string) => {
    if (right) {
      const compiledLeft = compile(left);
      const compiledRight = compile(right);
      return (bindings: Record<string, unknown>) =>
        operate(
          (a, b) => a + b,
          compiledLeft(bindings),
          compiledRight(bindings),
        );
    }
  },
);

binary("-", PREC_ADD);
operator(
  "-",
  (left: string, right: string) => {
    if (right) {
      const compiledLeft = compile(left);
      const compiledRight = compile(right);
      return (bindings: Record<string, unknown>) =>
        operate(
          (a, b) => a - b,
          compiledLeft(bindings),
          compiledRight(bindings),
        );
    }
  },
);

unary("+", PREC_PREFIX);
operator("+", (expression: string, _: string) => {
  if (!_) {
    const compiledExpression = compile(expression);
    return (bindings: Record<string, unknown>) => +compiledExpression(bindings);
  }
});

unary("-", PREC_PREFIX);
operator("-", (expression: string, _: string) => {
  if (!_) {
    const compiledExpression = compile(expression);
    return (bindings: Record<string, unknown>) => -compiledExpression(bindings);
  }
});

// Multiplication & division
// Adapted from `subscript/feature/mult.js` (removed assignment)

binary("*", PREC_MULT);
operator(
  "*",
  (left: string, right: string) => {
    if (right) {
      const compiledLeft = compile(left);
      const compiledRight = compile(right);
      return (bindings: Record<string, unknown>) =>
        operate(
          (a, b) => a * b,
          compiledLeft(bindings),
          compiledRight(bindings),
        );
    }
  },
);

binary("/", PREC_MULT);
operator(
  "/",
  (left: string, right: string) => {
    if (right) {
      const compiledLeft = compile(left);
      const compiledRight = compile(right);
      return (bindings: Record<string, unknown>) =>
        operate(
          (a, b) => a / b,
          compiledLeft(bindings),
          compiledRight(bindings),
        );
    }
  },
);

binary("%", PREC_MULT);
operator(
  "%",
  (left: string, right: string) => {
    if (right) {
      const compiledLeft = compile(left);
      const compiledRight = compile(right);
      return (bindings: Record<string, unknown>) =>
        operate(
          (a, b) => a % b,
          compiledLeft(bindings),
          compiledRight(bindings),
        );
    }
  },
);

// Exponentiation
// Adapted from `subscript/feature/pow.js` (changed operator to `^`)

binary("^", PREC_EXP, true);
operator(
  "^",
  (left: string, right: string) => {
    if (right) {
      const compiledLeft = compile(left);
      const compiledRight = compile(right);
      return (bindings: Record<string, unknown>) =>
        operate(
          (a, b) => a ** b,
          compiledLeft(bindings),
          compiledRight(bindings),
        );
    }
  },
);

// `to` operator
// Precedence is higher than function calling and lower than grouping

const PREC_TO = 175;
binary("to", PREC_TO, true);
operator(
  "to",
  (left: string, right: string) => {
    if (right) {
      const compiledLeft = compile(left);
      const compiledRight = compile(right);
      return (bindings: Record<string, unknown>) =>
        lognormalInterval(compiledLeft(bindings), compiledRight(bindings));
    }
  },
);

// Brackets (grouping)

group("()", PREC_GROUP);
operator("()", (expression) => {
  if (!expression) {
    return err("Empty ()");
  }
  return compile(expression);
});

// Now we can build a tagged literal to evaluate the expressions we give it.
//
// 1. Depend on the definition cells, so it updates appropriately.
// 2. Map the substitutions to unique variable names
// 3. Re-write the code to use those variable names
// 4. Parse the code
// 5. Compile the expression
// 6. Execute the code with the re-bound variables

export default function dist(
  strings: { raw: readonly string[] },
  ...substitutions: unknown[]
): number | number[] {
  const bindings = Object.fromEntries(
    substitutions.map((value, index) => [`v${index}`, value]),
  );
  const code = String.raw(strings, ...Object.keys(bindings));
  const expression = parse(code);
  const execute = compile(expression);
  return execute(bindings);
}
