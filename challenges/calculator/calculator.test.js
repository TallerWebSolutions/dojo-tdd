const { sum } = require('./calculator')

describe('calculator', () => {
  describe('sum', () => {
    it('should sum two numbers', () => {
      expect(sum(1, 2)).toBe(3)
    })
  })
})
