const {
  diamond,
  getLetters,
  mapDiamondLine,
  makeLines,
  spacesBefore,
  spacesBetween,
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

  describe('mapDiamondLine given a letter and a length', () => {
    const arr = new Array(4)

    it('should return line for A', () => {
      expect(mapDiamondLine('a', 0, arr)).toEqual('   a')
    })
    it('should return line for B', () => {
      expect(mapDiamondLine('b', 1, arr)).toEqual('  b b')
    })
    it('should return line for C', () => {
      expect(mapDiamondLine('c', 2, arr)).toEqual(' c   c')
    })
    it('should return line for D', () => {
      expect(mapDiamondLine('d', 3, arr)).toEqual('d     d')
    })
  })

  describe('make spaces before', () => {
    it('should return spaces for i 0, len 4', () => {
      expect(spacesBefore(0, 4)).toEqual(3)
    })
  })

  describe('make spaces betweein', () => {
    it('should return empty spaces for letter A(0))', () => {
      expect(spacesBetween(0, 4)).toEqual(0)
    })

    it('should return empty spaces for letter B(1)', () => {
      expect(spacesBetween(1, 4)).toEqual(1)
    })

    it('should return empty spaces for letter C(3)', () => {
      expect(spacesBetween(2, 4)).toEqual(3)
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
