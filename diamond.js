// lucas testando aqui!

const getLetters = letter => {
  const initial = 'a'.charCodeAt()
  const final = letter.charCodeAt()
  const gap = final - initial
  const diamondLetters = Array.from(Array(gap + 1))
    .map((_, key) => initial + key)
    .map(charCode => String.fromCharCode(charCode))

  return diamondLetters
}

const makeSpacesBefore = (i, len) => {
  const spaces = len - i - 1
  return Array.from(Array(spaces)).fill(' ').join('')
}

const getDiamondLine = (letter, i, len) => {
  let space = ''
  let spaceBefore = makeSpacesBefore(i, len)

  // make spaces between letters
  for (let j = 0; j < i + (i - 1); j++) {
    space = space.concat(' ')
  }

  // make spaces before letters
  /* for (let j = len - i - 1; j > 0; j--) {
    spaceBefore = spaceBefore.concat(' ')
  } */

  if (letter == 'a') return `${spaceBefore}${letter}`

  return `${spaceBefore}${letter}${space}${letter}`
}

const makeLines = letter => {
  const letters = getLetters(letter)
  const result = letters.map((letter, index) => {
    return getDiamondLine(letter, index, letters.length)
  })
  return [...result, ...result.reverse().slice(1)]  
}

const diamond = letter => {
  const lines  = makeLines(letter)
  return lines.join('\n')
}

module.exports = {
  diamond,
  getLetters,
  getDiamondLine,
  makeLines,
  makeSpacesBefore,
}
