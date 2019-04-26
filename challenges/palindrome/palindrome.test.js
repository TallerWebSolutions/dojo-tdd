// A palindromic number reads the same both ways.The largest palindrome made from the product of two 2 - digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3 - digit numbers.
import {
  isPalindrome,
  getLargestPalindrome,
  numberToArray,
  reverseNumber
} from "./palindrome";

describe("number to array", () => {
  it("should convert", () => {
    expect(numberToArray(9009)).toEqual(["9", "0", "0", "9"]);
  });
});

describe("reverse number", () => {
  it("should reverse a number", () => {
    expect(reverseNumber(12)).toEqual(21);
    expect(reverseNumber(123)).toEqual(321);
    expect(reverseNumber(9009)).toEqual(9009);
  });
});

describe("largest palindrome made from the product of two 3 - digit numbers.", () => {
  it("should verify if is palindrome", () => {
    expect(isPalindrome(11)).toBeTruthy();
  });

  it("should verify if is palindrome", () => {
    expect(isPalindrome(9801)).toBeFalsy();
  });

  it("should verify if 9009 is palindrome", () => {
    expect(isPalindrome(9009)).toBeTruthy();
  });

  it("should return the largest palindrome for two digits", () => {
    expect(getLargestPalindrome(2)).toEqual(9009);
  });

  it("should return the largest palindrome for three digits", () => {
    expect(getLargestPalindrome(3)).toEqual(906609);
  });

  it.skip("should return the largest palindrome for four digits", () => {
    expect(getLargestPalindrome(4)).toEqual(99000099);
  });
});
