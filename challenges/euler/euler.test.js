import {
  isMultipleThree,
  isMultipleFive,
  isMultiple,
  range,
  rangeBelow,
  isMultipleByThreeOrFive,
  filterMultiples,
} from './euler'

describe('euler', () => {
  it('should detect if 2 is multiple of 3', () => {
    const result = isMultipleThree(2)
    expect(result).toBeFalsy()
  })
  it('should detect if 3 is multiple of 3', () => {
    const result = isMultipleThree(3)
    expect(result).toBeTruthy()
  })
  it('should detect if 5 is multiple of 3', () => {
    const result = isMultipleThree(5)
    expect(result).toBeFalsy()
  })
  it('should detect if 952 is multiple of 3', () => {
    const result = isMultipleThree(952)
    expect(result).toBeFalsy()
  })
  it('should detect if 950 is multiple of 5', () => {
    const result = isMultipleFive(950)
    expect(result).toBeTruthy()
  })
  it('should detect if 999 is multiple of 5', () => {
    const result = isMultipleFive(999)
    expect(result).toBeFalsy()
  })
})

describe('euler `isMultiple` func', () => {
  it('should detect if a number is multiple of 3', () => {
    const result = isMultiple(3)(9)
    expect(result).toBeTruthy()
  })
})

describe('range', () => {
  it('should return 3 elem array', () => {
    const result = range(3)
    expect(result).toEqual([1, 2, 3])
  })
  it('should return 5 elem array', () => {
    const result = range(5)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })
})

describe('rangeBelow', () => {
  it('should return 3 elem array below 3', () => {
    const result = rangeBelow(3)
    expect(result).toEqual([1, 2])
  })
  it('should return 5 elem array below 5', () => {
    const result = rangeBelow(5)
    expect(result).toEqual([1, 2, 3, 4])
  })
})

describe('isMultiple by 3 or five', () => {
  it('should return true if the given number is multiple of 3 or 5', () => {
    expect(isMultipleByThreeOrFive(1)).toBeFalsy()
    expect(isMultipleByThreeOrFive(2)).toBeFalsy()
    expect(isMultipleByThreeOrFive(3)).toBeTruthy()
    expect(isMultipleByThreeOrFive(4)).toBeFalsy()
    expect(isMultipleByThreeOrFive(5)).toBeTruthy()
    expect(isMultipleByThreeOrFive(6)).toBeTruthy()
    expect(isMultipleByThreeOrFive(7)).toBeFalsy()
    expect(isMultipleByThreeOrFive(8)).toBeFalsy()
    expect(isMultipleByThreeOrFive(9)).toBeTruthy()
  })
})

describe('filter multiples', () => {
  it('should filter multiples of 3 or 5 from a range below 5', () => {
    const arr = rangeBelow(5)
    const result = filterMultiples(arr)
    expect(result).toEqual([3])
  })

  it('should filter multiples of 3 or 5 from a range below 9 ', () => {
    const arr = rangeBelow(9)
    const result = filterMultiples(arr)
    expect(result).toEqual([3, 5, 6])
  })
})

describe.only('Sum', () => {
  it('should return sum the elements of arr', () => {
    expect(sum([1, 2])).toEqual(3)
  })
})
