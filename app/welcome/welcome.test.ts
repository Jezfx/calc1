import { calculateCalculation } from "./welcome.utils";

describe("calculateCalculation", () => {
  it("should calculate the sum of values", () => {
    const calculations = [1, "+", 2, "+", 5];

    const result = calculateCalculation(calculations);
    expect(result).toBe(8);
  });
});
