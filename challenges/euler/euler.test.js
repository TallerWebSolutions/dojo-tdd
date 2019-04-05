import {
  isMultipleThree,
  isMultipleFive,
  isMultiple,
  range,
  filterIsMultiple,
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

describe('filter multiples', () => {
  it('should filter multiples of 3 or 5', () => {
    const arr = range(5)
    const result = arr.filter(filterIsMultiple)
    expect(result).toEqual([3, 5])
  })

  it('should filter multiples of 10', () => {
    const arr = range(10)
    const result = arr.filter(filterIsMultiple)
    expect(result).toEqual([3, 5])
  })
})
