import parse, {
  binary,
  err,
  expr,
  lookup,
  skip,
  token,
  unary,
} from "subscript/parse";
import compile, { operator } from "subscript/compile";
import operate from "./operate.ts";
import { to } from "./distribution/lognormal.ts";

/*
 * We want to repeatedly collect characters that are valid in this numeric sequence. We’re not so concerned with whether the number is valid in JS (consider `1e4` or `1000n`). Finally, we’ll check if it’s a valid `Number`, and if not, throw a parser error.
 */

const NUMERIC_CHARACTERS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
];

function number() {
  // @ts-ignore: Incorrectly typed
  const parsed = skip((character: number) =>
    NUMERIC_CHARACTERS.includes(String.fromCharCode(character)) ? 1 : 0
  );
  const number = Number(parsed);
  return ["", Number.isFinite(number) ? number : err()];
}

/*
 * Now we can define numeric literals as lookups. A numeric literal is any sequence starting with 0–9, or a decimal point.
 */

for (const character of NUMERIC_CHARACTERS) {
  lookup[character.charCodeAt(0)] = number;
}

/*
 * And finally, we can tell the language to evaluate literals directly. That is to say, anything without an operator (an empty operator) should just return its own value.
 */

operator("", (value: unknown) => () => value);

/*
 * For each operator, we need to define it as a token in the language, then determine how to evaluate it. Our evaluator works recursively; we take raw left and right expressions, which we execute first, then perform the operations on their resolved values.
 *
 * `subscript` works by allowing arbitrary named variables in expressions, then lets the user bind arbitrary JavaScript values to those expressions. These will be stored in an object in the `bindings` parameter.
 */

function defineOperator(
  symbol: string,
  precedence: number,
  // deno-lint-ignore no-explicit-any -- `any` makes this way easier to type
  operation: (...args: any[]) => any,
) {
  binary(symbol, precedence);
  operator(
    symbol,
    (expressionLeft: string, expressionRight: string) => {
      if (!expressionRight) {
        return;
      }

      const executeLeft = compile(expressionLeft);
      const executeRight = compile(expressionRight);

      return (bindings: Record<string, unknown>) => {
        const a = executeLeft(bindings);
        const b = executeRight(bindings);
        return operate(operation, a, b);
      };
    },
  );
}

/*
 * We’ll start by defining $+, -, \times, \div, a^b$, and a special ‘$\text{to}$’ operator which calls the `to` function as shorthand.
 */

const PRECEDENCE = {
  ADD: 1,
  MULTIPLY: 2,
  EXPONENTIATE: 3,
  NEGATIVE: 4,
  BRACKETS: 5,
  TO: 6,
};

defineOperator("+", PRECEDENCE.ADD, (a: number, b: number) => a + b);
defineOperator("-", PRECEDENCE.ADD, (a, b) => a - b);
defineOperator("*", PRECEDENCE.MULTIPLY, (a, b) => a * b);
defineOperator("/", PRECEDENCE.MULTIPLY, (a, b) => a / b);
defineOperator("^", PRECEDENCE.EXPONENTIATE, Math.pow);
defineOperator("to", PRECEDENCE.TO, (a, b) => to(a, b));

/*
 * We also want to be able to specify negative literals, or invert distributions. The main thing to keep in mind with `-` as a unary operator is that subscript breaks if it tries to overload an operator with multiple results, so we need to check to see if it was called with a left and right expression.
 */

unary("-", PRECEDENCE.NEGATIVE);
operator("-", (expression: string, expressionRight: string) => {
  if (expressionRight) {
    return;
  }

  const execute = compile(expression);
  return (bindings: Record<string, unknown>) => {
    const a = execute(bindings);
    return -a;
  };
});

/*
 * We’ll also need a way to separate sub-expressions to ensure they’re always evaluated first, completing BIDMAS. Brackets are pretty simple—just split out the expression after the first bracket until the next one, then use the normal compiler.
 */

token("(", PRECEDENCE.BRACKETS, () => [
  "(",
  // @ts-ignore: Incorrectly typed
  expr(0, ")".charCodeAt(0)),
]);
operator("(", compile);

/*
 * Now we can build a tagged literal to evaluate the expressions we give it.
 *
 * 1. Depend on the definition cells, so it updates appropriately.
 * 2. Map the substitutions to unique variable names
 * 3. Re-write the code to use those variable names
 * 4. Parse the code
 * 5. Compile the expression
 * 6. Execute the code with the re-bound variables
 */

export default function dist(
  strings: { raw: readonly string[] },
  ...substitutions: unknown[]
): number[] {
  const bindings = Object.fromEntries(
    substitutions.map((value, index) => [`v${index}`, value]),
  );
  const code = String.raw(strings, ...Object.keys(bindings));
  const expression = parse(code);
  const execute = compile(expression);
  return execute(bindings);
}
