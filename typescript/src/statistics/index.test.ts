import { minimum, sort, maximum, length, mean, median, isEven, mode } from "./";

describe('sort', () => {
  it('shoul sort a numeric list from lower to higher', () => {
    expect(sort([2, 1])).toEqual([1, 2])
    expect(sort([2, 1, 3])).toEqual([1, 2, 3])
    expect(sort([])).toEqual([])
  })
})

describe('Statistical methods for calculation', () => {
  it("Should return a minimal value from an array", () => {
    const data = [1,2,3,4,5]
    expect(minimum(data)).toBe(1)
    expect(minimum([2, 3, 4])).toBe(2)
    expect(minimum([2, 3, 4, 1])).toBe(1)
    expect(minimum([2, -3, 4, 1])).toBe(-3)
  })

  it("Should return a maximum value from an array", () => {
    expect(maximum([1,2,3,4,5])).toBe(5)
    expect(maximum([1,2,6,4,5])).toBe(6)
    expect(maximum([0,2,-6,1,-5])).toBe(2)
  })

  it('should do nothing with empty lists', () => {
    expect(minimum([])).toEqual([])
    expect(maximum([])).toEqual([])
  })

  it("Numbers of elements on a sequence", () => {
    expect(length([0, 2, -6, 1, -5])).toBe(5)
    expect(length([0, 2, -6, 1])).toBe(4);
    expect(length([])).toBe(0)
  })

  it('should return the mean value', () => {
    expect(mean([1, 2, 3])).toBe(2)
    expect(mean([1, 2, 3, 4])).toBe(2.5)
    expect(mean([5, 15, 10, 25])).toBe(13.75)
    expect(mean([])).toBe(0)
  })

  describe('median', () => {
    it('should calculate the median of a set of numbers', () => {
      expect(median([3])).toBe(3)
      expect(median([3, 1, 8])).toBe(3)
      expect(median([2, 4, 6, 7])).toBe(5)
    })

    it('should return zero if dataset is empty', () => {
      expect(median([])).toBe(0)
    })
  })

  it('should calculate the mode', () => {
    const dataset = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 5, 6, 8]
    expect(mode(dataset)).toEqual(3);
  })

})

describe('helpers', () => {
  it('should return if is even or odd', () => {
    expect(isEven(2)).toBeTruthy()
    expect(isEven(3)).toBeFalsy()
  })
})
