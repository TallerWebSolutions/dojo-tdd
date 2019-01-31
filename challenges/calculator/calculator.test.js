const { sum } = require('./calculator')

describe('calculator', () => {
  describe('sum', () => {
    it('should sum two integers', () => {
      expect(sum(1, 1)).toBe(2)
    })

    it('should throw error when sum string', () => {
      expect(sum(1, 'b')).toThrowError()
    })
  })
})
