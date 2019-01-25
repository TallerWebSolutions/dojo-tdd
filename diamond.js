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

const makeSpaces = n => new Array(n).fill(' ').join('')

const makeSpacesBefore = (i, len) => makeSpaces(len - i - 1)

const makeSpacesBetween = i => makeSpaces(Math.max(0, i * 2 - 1))

const getDiamondLine = (letter, i, len) => {
  let space = ''
  let spaceBefore = makeSpacesBefore(i, len)

  // make spaces between letters
  for (let j = 0; j < i + (i - 1); j++) {
    space = space.concat(' ')
  }

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
  const lines = makeLines(letter)
  return lines.join('\n')
}

module.exports = {
  diamond,
  getLetters,
  getDiamondLine,
  makeLines,
  makeSpacesBefore,
  makeSpacesBetween,
}
