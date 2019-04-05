const isMultipleThree = number => false

describe('euler', () => {
  it('should detect if 2 is multiple of 3', () => {
    const result = isMultipleThree(2)
    expect(result).toBeFalsy()
  })
  it('should detect if 3 is multiple of 3', () => {
    const result = isMultipleThree(3)
    expect(result).toBeTruthy()
  })
})
