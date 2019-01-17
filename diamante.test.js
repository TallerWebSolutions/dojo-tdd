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

  describe.only('diamond', () => {
    const diamonds = {
      a: `a\na`,
      a: `a\na`,
    }

    it('should return diamon from A', () => {
      expect(diamond('a')).toEqual('a')
    })

    // it('should return diamon from B', () => {
    //   expect(diamond('b')).toEqual(' a \nb b\n a ')
    // })
  })
})
