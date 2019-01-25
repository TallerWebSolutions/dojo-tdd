// lucas testando aqui!

const getLetters = letter => {
  const initial = 'a'.charCodeAt()
  const final = letter.charCodeAt()

  return Array.from(Array(final - initial + 1))
    .map((_, key) => initial + key)
    .map(charCode => String.fromCharCode(charCode))
}

const makeSpaces = n => new Array(n).fill(' ').join('')
const makeSpacesBefore = (i, len) => makeSpaces(len - i - 1)
const makeSpacesBetween = i => makeSpaces(Math.max(0, i * 2 - 1))

const getDiamondLine = (letter, i, arr) => {
  const spaceBefore = makeSpacesBefore(i, arr.length)
  const spaceBetween = makeSpacesBetween(i)

  if (letter == 'a') return `${spaceBefore}${letter}`

  return `${spaceBefore}${letter}${spaceBetween}${letter}`
}

const makeLines = letter => {
  const letters = getLetters(letter)

  const result = letters.map(getDiamondLine)

  return [...result, ...result.reverse().slice(1)]
}

const diamond = letter => makeLines(letter).join('\n')

module.exports = {
  diamond,
  getLetters,
  getDiamondLine,
  makeLines,
  makeSpacesBefore,
  makeSpacesBetween,
}
