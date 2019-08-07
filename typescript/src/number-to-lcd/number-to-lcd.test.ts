import { digitToLCD } from "./";

describe("should render LCD format", () => {
  it("Should render number 1", () => {
    const expected = "   \n  |\n  |";

    expect(digitToLCD(1)).toEqual(expected);
  });

  it("Should render number 2", () => {
    const expected = " _ \n _|\n|_ ";

    expect(digitToLCD(2)).toEqual(expected);
  });

  it("Should render given number", () => {
    expect(digitToLCD(3)).toEqual(" _ \n _|\n _|");
    expect(digitToLCD(4)).toEqual("   \n|_|\n  |");
    expect(digitToLCD(5)).toEqual(" _ \n|_ \n _|");
    expect(digitToLCD(6)).toEqual(" _ \n|_ \n|_|");
    expect(digitToLCD(7)).toEqual(" _ \n  |\n  |");
    expect(digitToLCD(8)).toEqual(" _ \n|_|\n|_|");
    expect(digitToLCD(9)).toEqual(" _ \n|_|\n _|");
  });

  it.only("Should render an arbitrary number", () => {
    const mockDigits = "    _ \n  | _|\n  ||_ ";
    expect(digitToLCD(12)).toEqual(mockDigits);
  });
});
