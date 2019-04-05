import { isMultipleThree, isMultipleFive } from './euler'

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
})
