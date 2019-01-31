// lucas testando aqui!

const getLetters = letter => {
  const initial = 'a'.charCodeAt()
  const final = letter.charCodeAt()

  return Array.from(Array(final - initial + 1))
    .map((_, key) => initial + key)
    .map(charCode => String.fromCharCode(charCode))
}

const makeSpaces = n => new Array(n).fill(' ').join('')

const spacesBefore = (i, len) => len - i - 1
const spacesBetween = i => Math.max(0, i * 2 - 1)

const mapDiamondLine = (letter, i, arr) => {
  const spaceBefore = makeSpaces(spacesBefore(i, arr.length))
  const spaceBetween = makeSpaces(spacesBetween(i))

  return i === 0
    // first letter appear only once.
    ? `${spaceBefore}${letter}`
    // further letters repeat on each line.
    : `${spaceBefore}${letter}${spaceBetween}${letter}`
}

const makeLines = letter => {
  const letters = getLetters(letter)
  const result = letters.map(mapDiamondLine)

  return [...result, ...result.reverse().slice(1)]
}

const diamond = letter => makeLines(letter).join('\n')

module.exports = {
  diamond,
  getLetters,
  mapDiamondLine,
  makeLines,
  spacesBefore,
  spacesBetween,
}
