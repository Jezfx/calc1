import type { Calculation } from "./welcome.types";

export const calculateCalculation = (calculations: Calculation[]) =>
  calculations.reduce((acc, curr, idx) => {
    if (typeof curr === "number") {
      if (idx === 0) return curr;
      const operator = calculations[idx - 1];
      switch (operator) {
        case "+":
          return (acc as number) + curr;
        case "-":
          return (acc as number) - curr;
        case "*":
          return (acc as number) * curr;
        case "/":
          return (acc as number) / curr;
        case "%":
          return (acc as number) % curr;
        default:
          throw new Error(`Unsupported operator: ${operator}`);
      }
    }
    return acc;
  }, 0);
