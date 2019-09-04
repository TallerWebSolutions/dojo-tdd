import { digitToLCD, changeWidth, changeHeight } from "./";

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

  it("Should render an arbitrary number", () => {
    const mockDigits = "    _ \n  | _|\n  ||_ ";
    expect(digitToLCD(12)).toEqual(mockDigits);
  });

  describe("should support custom dimensions, width and height", () => {
    it("should render the number 1 with width 3", () => {
      const expected = "     \n    |\n    |";
      expect(digitToLCD(1, 3)).toEqual(expected);
    });

    it("should render the number 2 with custom width", () => {
      const expected = " __ \n __|\n|__ ";
      expect(digitToLCD(2, 2)).toEqual(expected);
    });
  });
  describe("should multiply line width by a factor of [parameter]", () => {
    it("should multiply spaces by 2", () => {
      expect(changeWidth(2)("   ")).toEqual("    ");
    });

    it("should multiply underscore by 2", () => {
      expect(changeWidth(2)(" _ ")).toEqual(" __ ");
    });

    it("should multiply underscore by 2", () => {
      expect(changeWidth(2)(" _ ")).toEqual(" __ ");
    });

    it("should multiply underscore by 3", () => {
      const changeWidthBy3 = changeWidth(3);
      expect(changeWidthBy3(" _ ")).toEqual(" ___ ");
    });
  });

  describe.only("should increase line height", () => {
    it("should increase the height of number 1", () => {
      const expected = ["   ", "  |", "  |", "  |", "  |"];
      const changeHeightBy2 = changeHeight(2);
      expect(changeHeightBy2("1")).toEqual(expected);
    });

    it("should increase the height of number 2", () => {
      const expected = [" _ ", "  |", " _|", "|  ", "|_ "];
      const changeHeightBy2 = changeHeight(2);

      expect(changeHeightBy2("2")).toEqual(expected);
    });

    it("should increase the height of number 3", () => {
      const expected = ["   ", "  |", "  |", "  |", "  |", "  |", "  |"];
      const changeHeightBy3 = changeHeight(3);
      expect(changeHeightBy3("1")).toEqual(expected);
    });

    it("should increase the height of number 4", () => {
      const expected = ["   ", "  |", "  |", "  |", "  |", "  |", "  |"];
      const changeHeightBy4 = changeHeight(4);
      expect(changeHeightBy4("4")).toEqual(expected);
    });
  });
});
