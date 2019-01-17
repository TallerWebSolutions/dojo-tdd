// lucas testando aqui!

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

const getDiamondLine = (letter, i, len) => {
  // if (letter === 'a') return `${letter}`
  let space = ''
  let spaceBefore = ''

  for (let j = 0; j < i + (i - 1); j++) {
    space = space.concat(' ')
  }

  // console.log(len - i - 1, 'hey')
  for (let j = len - i - 1; j > 0; j--) {
    spaceBefore = spaceBefore.concat(' ')
  }

  return `${spaceBefore + letter + space + letter}`
}

const diamond = letter => {
  const arr = getLetters(letter)

  if (letter === 'a') return 'a'

  if (letter === 'b')
    return ` a
b b
 a`

  const length = arr.length
  const initialSpaces = length
  return arr
    .map((letter, index) => {
      if (index === 0) return `${letter}\n`
      if (index === 1) return `${letter} ${letter}\n`
      if (index === 2) return `${letter}   ${letter}\n`
    })
    .join('')
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
  getDiamondLine,
}
