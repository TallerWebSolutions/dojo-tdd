const { diamond, getLetters } = require('./diamond.js')

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

  describe('getDiamondLine', () => {
    it('should return line for A', () => {
      expect(getDiamondLine('a', 0)).toEqual('a')
    })
    it('should return line for B', () => {
      expect(getDiamondLine('b', 1)).toEqual('b b')
    })
    it('should return line for C', () => {
      expect(getDiamondLine('c', 2)).toEqual('c   c')
    })
  })

  describe('diamond', () => {
    const diamonds = {
      a: `a`,
      b: `
 a
b b
 a`.replace(/^\n/, ''),
      f: ``,
    }

    it('should return diamon from A', () => {
      expect(diamond('a')).toEqual(diamonds.a)
    })

    it.only('should return diamon from B', () => {
      expect(diamond('b')).toEqual(diamonds.b)
    })

    // it('should return diamon from B', () => {
    //   expect(diamond('b')).toEqual(' a \nb b\n a ')
    // })
  })
})
