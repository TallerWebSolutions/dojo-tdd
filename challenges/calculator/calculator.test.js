const { sum } = require('./calculator')

describe('calculator', () => {
  describe('calc', () => {
    it('should work', () => {
      expect(sum(1, 1)).toBe(2)
    })
  })
})
