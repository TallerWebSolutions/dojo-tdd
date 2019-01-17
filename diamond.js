// lucas testando aqui!

// RENATO
const getLetters = letter => {
  const initial = 'a'.charCodeAt()
  const final = letter.charCodeAt()
  const gap = final - initial
  const diamondLetters = Array.from({ length: gap + 1 })
    .fill()
    .map((_, key) => initial + key)
    .map(charCode => String.fromCharCode(charCode))

  return diamondLetters
}

const diamond = letter => {
  const letterArray = getLetters(letter)
  // const length = arr.length
  // const initialSpaces = length
  // return arr
  //   .map((letter, index) => {
  //     if (index === 0) return `${letter}\n`
  //     if (index === 1) return `${letter} ${letter}\n`
  //     if (index === 2) return `${letter}   ${letter}\n`
  //   })
  //   .join('')
}

/**
 * Espaços dos lados
 * 1 - 0
 * 2 - 1,0
 * 3 - 2,1,0
 */

/**
 * Espaços do meio
 * 1 - 0
 * 2 - 0,1
 * 3 - 0,1,3
 */

/**
 *  a
 * b b
 *  a
 */

/**
 *   a
 *  b b
 * c   c
 *  a
 */

module.exports = {
  diamond,
  getLetters,
}
