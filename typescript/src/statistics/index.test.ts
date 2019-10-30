import { minimum } from './';

describe('Statistical methods for calculation', () => {
  it("Should return a minimal value from an array"), () => {
    const data = [1,2,3,4,5]
    expect(minimum(data)).toBe(1)
  }
})