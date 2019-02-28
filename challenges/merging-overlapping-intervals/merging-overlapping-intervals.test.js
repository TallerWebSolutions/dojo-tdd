
const { mergeOverlappingIntervals, merge, shouldMerge } = require('./merging-overlapping-intervals.js')

describe('merging Overlapping Intervals', () => {
  it('should merge two overlapping arrays', () => {
    expect(mergeOverlappingIntervals([[1, 6], [4, 7]])).toEqual([[1, 7]])
  })

  it('should return the two arrays once they dont overlapp', () => {
    expect(mergeOverlappingIntervals([[1, 4], [6, 7]])).toEqual([[1, 4], [6, 7]])
  })

  it('should merge three overlapping arrays', () => {
    expect(mergeOverlappingIntervals([[1, 6], [4, 7], [5, 9]])).toEqual([[1, 9]])
  })

  it('should not merge when intervals end', () => {
    expect(mergeOverlappingIntervals([[5, 6], [4, 7]])).toEqual([[4, 7]])
  })

  it("should not merge when intervals end", () => {
    expect(mergeOverlappingIntervals([[5, 6], [4, 7], [9, 10]])).toEqual([[4, 7], [9, 10]]);
  });

  it("should not merge when intervals end", () => {
    expect(mergeOverlappingIntervals([[5, 6], [9, 10], [4, 7]])).toEqual([
      [4, 7],
      [9, 10]
    ]);
  });
})

describe('Merging arrays', () => {

  it('should merge two arrays', () => {
    expect(merge([1,3], [2,4])).toEqual([1,4])
  })
})

describe('Should merge arrays', () => {
  it('should return true when two arrays are overlapping', () => {
    expect(shouldMerge([1,3], [2,4])).toBeTruthy()
  })
  
  it('should be falsy when arrays are not overlapping', () => {
    expect(shouldMerge([1,3], [5,9])).toBeFalsy()
  })
})
