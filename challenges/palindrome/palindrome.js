export const isPalindrome = number => number === reverseNumber(number);

export const numberToArray = number => Array.from(number.toString());

export const reverseNumber = number =>
  parseInt(
    numberToArray(number)
      .reverse()
      .join("")
  );

export const getLargestPalindrome = digits => {
  const from = parseInt(new Array(digits).fill(9).join(""));
  const to = parseInt("1" + new Array(digits - 1).fill(0).join(""));

  let highestNumber = 0;

  for (let i = from; i > to; i--) {
    for (let j = i; j > to; j--) {
      const number = i * j;
      if (isPalindrome(number)) {
        if (number > highestNumber) highestNumber = number;
      }
    }
  }

  return highestNumber;
};
