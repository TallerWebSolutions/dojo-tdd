export const isMultiple = a => b => b % a === 0
export const isMultipleThree = isMultiple(3)
export const isMultipleFive = isMultiple(5)
export const range = n => new Array(n).fill().map((a, i) => i + 1)
export const rangeBelow = n => range(n - 1)
export const filterMultiples = a => a.filter(isMultipleByThreeOrFive)

export const isMultipleByThreeOrFive = n =>
  isMultipleThree(n) || isMultipleFive(n)

export const sum = arr => arr.reduce((acc, cur) => acc + cur)
export const resultExpectedEllerOne = sum(filterMultiples(rangeBelow(1000)))
