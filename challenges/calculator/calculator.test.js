const { sum, subtract, multiply, divide } = require('./calculator')

describe('calculator', () => {
  describe('sum', () => {
    it('should sum two integers', () => {
      expect(sum(1, 1)).toBe(2)
    })

    it('should sum two negative integers', () => {
      expect(sum(-1, 2)).toBe(1)
    })

    it('should sum two floats', () => {
      expect(sum(1.4, 1.5)).toBe(2.9)
    })
  })

  describe('subtract', () => {
    it('should subtract two integers', () => {
      expect(subtract(1, 1)).toBe(0)
    })

    it('should subtract two negative integers', () => {
      expect(subtract(-1, 2)).toBe(-3)
    })

    it('should subtract two floats', () => {
      expect(subtract(2.5, 1.5)).toBe(1)
    })
  })

  describe('multiply', () => {
    it('should multiply two integers', () => {
      expect(multiply(2, 2)).toBe(4)
    })

    it('should multiply two negative integers', () => {
      expect(multiply(-1, 2)).toBe(-3)
    })

    it('should subtract two floats', () => {
      expect(subtract(2.5, 1.5)).toBe(1)
    })
  })

  describe('divide', () => {
    it('should divide two integers', () => {
      expect(divide(4, 2)).toBe(2)
    })
  })
})
