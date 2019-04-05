const isMultipleThree = number => false

describe('euler', () => {
  it('should detect if is multiple of 3', () => {
    const result = isMultipleThree(2)
    expect(result).toBeFalsy()
  })
})
