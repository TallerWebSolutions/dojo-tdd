const digitsMap = {
  "1": ["   ", "  |", "  |"],
  "2": [" _ ", " _|", "|_ "],
  "3": [" _ ", " _|", " _|"],
  "4": ["   ", "|_|", "  |"],
  "5": [" _ ", "|_ ", " _|"],
  "6": [" _ ", "|_ ", "|_|"],
  "7": [" _ ", "  |", "  |"],
  "8": [" _ ", "|_|", "|_|"],
  "9": [" _ ", "|_|", " _|"]
};

export const digitToLCD = (digit: number, width: number = 1): string => {
  const digits = String(digit).split("");
  const result = ["", "", ""];
  const changeWidthBy = changeWidth(width);

  return result
    .map((row, index) => {
      return digits
        .map(digit => changeWidthBy(digitsMap[digit][index]))
        .join("");
    })
    .join("\n");
};

export const changeWidth = (width: number) => (lcdNumber: string) => {
  return lcdNumber[0] + lcdNumber[1].repeat(width) + lcdNumber[2];
};

export const changeHeight = (height: number) => (lcdNumber: string) => {
  const foo = digitsMap[lcdNumber];

  return [
    foo[0],
    foo[1].replace("_", " "),
    foo[1],
    foo[2].replace("_", " "),
    foo[2]
  ];
};
