export const digitToLCD = (digit: number): string => {
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

  const digits = String(digit).split("");
  const result = ["", "", ""];

  return result
    .map((row, index) => {
      return digits.map(digit => digitsMap[digit][index]).join("");
    })
    .join("\n");
};
