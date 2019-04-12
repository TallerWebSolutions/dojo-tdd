import {
  fibonacci,
  sum,
  filterEven,
  isEven,
  sumValues,
  calculate
} from "./fibonacci";

describe("Fibonacci", () => {
  it("Should sum two values", () => {
    expect(sum(1, 2)).toEqual(3);
  });

  it("Should return fibonacci", () => {
    expect(fibonacci(5)).toEqual([1, 2, 3, 5, 8]);
    expect(fibonacci(6)).toEqual([1, 2, 3, 5, 8, 13]);
  });
});

describe("Even Sum", () => {
  it("Should return [2,4]", () => {
    expect(filterEven([1, 2, 3, 4])).toEqual([2, 4]);
  });

  it("Should evaluate even value to true", () => {
    expect(isEven(2)).toBeTruthy();
  });

  it("Should evaluate odd value to false", () => {
    expect(isEven(1)).toBeFalsy();
  });

  describe("Sum values", () => {
    it("Should return the sum of an array", () => {
      expect(sumValues([1, 2])).toEqual(3);
    });
  });

  it("Should calculate the final result", () => {
    expect(calculate(3)).toEqual(2);
  });

  it("Should calculate the final result with a bigger number", () => {
    expect(calculate(5)).toEqual(10);
    expect(calculate(10)).toEqual(44);
    // expect(calculate(60000000)).toEqual(10);
  });
});
