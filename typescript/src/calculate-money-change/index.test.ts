import { calculateChange, getChange, amountToMoney } from "./index";

describe("Amount to money", () => {
  it("Should convert amount to money", () => {
    expect(amountToMoney(11)).toEqual({
      10: 1,
      1: 1
    });
  });

  it("Should convert amount to cents", () => {
    expect(amountToMoney(11.32)).toEqual({
      10: 1,
      1: 1,
      0.1: 3,
      0.01: 2
    });
  });
});
describe("Calculate Change", () => {
  it("Should give four reals change", () => {
    const change = calculateChange(1, 5);
    expect(change).toEqual({ 1: 4 });
  });
  it("Should give four reals change", () => {
    const change = calculateChange(5, 10);
    expect(change).toEqual({ 5: 1 });
  });
  it("Should give 2 reals change", () => {
    const change = calculateChange(5, 7);
    expect(change).toEqual({ 1: 2 });
  });
});
describe("Calculate Change", () => {
  it("should get change value", () => {
    expect(getChange(5, 10)).toEqual(5);
    expect(getChange(24.5, 30)).toEqual(5.5);
  });
});
