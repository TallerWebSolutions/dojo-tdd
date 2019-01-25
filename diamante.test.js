const {
  diamond,
  getLetters,
  getDiamondLine,
  makeLines
} = require('./diamond.js')

describe('Diamonds', () => {
  describe('getLetters', () => {
    it('should return letters to be printed when given E', () => {
      expect(getLetters('e')).toEqual(['a', 'b', 'c', 'd', 'e'])
    })

    it('should return letters to be printed when given C', () => {
      expect(getLetters('c')).toEqual(['a', 'b', 'c'])
    })

    it('should return letters to be printed when given D', () => {
      expect(getLetters('d')).toEqual(['a', 'b', 'c', 'd'])
    })

    it('should return letters to be printed when given F', () => {
      expect(getLetters('f')).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
    })
  })

  describe('getDiamondLine given a letter and a length', () => {
    const arrLen = 4

    it('should return line for A', () => {
      expect(getDiamondLine('a', 0, arrLen)).toEqual('   a')
    })
    it('should return line for B', () => {
      expect(getDiamondLine('b', 1, arrLen)).toEqual('  b b')
    })
    it('should return line for C', () => {
      expect(getDiamondLine('c', 2, arrLen)).toEqual(' c   c')
    })
    it('should return line for D', () => {
      expect(getDiamondLine('d', 3, arrLen)).toEqual('d     d')
    })
  })

  describe('make lines', () => {
    it('should return lines for a', () => {
      expect(makeLines('a')).toEqual(['a'])
    })

    it('should return lines for b', () => {
      expect(makeLines('b')).toEqual([' a', 'b b', ' a'])
    })
    it('should return lines for b', () => {
      expect(makeLines('c')).toEqual(['  a', ' b b','c   c', ' b b','  a'])
    })

  })

  describe('diamond', () => {
    const diamonds = {
      a: `a`,
      b: `
 a
b b
 a`.replace(/^\n/, ''),
      c: `
  a
 b b
c   c
 b b
  a`.replace(/^\n/, ''),
    };

    it('should return diamond from A', () => {
      expect(diamond('a')).toEqual(diamonds.a)

    })

    it('should return diamond from B', () => {
      expect(diamond('b')).toEqual(diamonds.b)
    })

    it('should return diamond from C', () => {
      expect(diamond('c')).toEqual(diamonds.c)
    })
  })
})
