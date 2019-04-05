export const isMultiple = a => b => b % a === 0
export const isMultipleThree = isMultiple(3)
export const isMultipleFive = isMultiple(5)
export const range = n => [...Array(n).keys()]
export const rangeBelow = n => range(n - 1)
export const filterMultiples = a => a.filter(isMultipleByThreeOrFive)

export const isMultipleByThreeOrFive = n =>
  isMultipleThree(n) || isMultipleFive(n)

export const sum = arr => arr.reduce((acc, cur) => acc + cur)
export const resultExpectedEulerOne = num => sum(filterMultiples(range(num)))
