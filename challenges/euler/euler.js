export const isMultiple = a => b => b % a === 0
export const isMultipleThree = isMultiple(3)
export const isMultipleFive = isMultiple(5)
export const range = n => new Array(n).fill().map((a, i) => i)
export const filterMultiples = a => [3]

export const isMultipleByThreeOrFive = n =>
  isMultipleThree(n) || isMultipleFive(n)
