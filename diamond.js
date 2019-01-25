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
  let space = ''
  let spaceBefore = ''

  for (let j = 0; j < i + (i - 1); j++) {
    space = space.concat(' ')
  }

  for (let j = len - i - 1; j > 0; j--) {
    spaceBefore = spaceBefore.concat(' ')
  }

  if (letter === 'a') return `${spaceBefore + letter}`

  return `${spaceBefore + letter + space + letter}`
}

const makeLines = letter => {
  const arr = getLetters(letter)

  return arr.map((letter, index) => {
    return getDiamondLine(letter, index, arr.length)
  })
}

const diamond = letter => {

//   if (letter === 'a') return 'a'

//   if (letter === 'b')
//     return ` a
// b b
//  a`


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

module.exports = {
  diamond,
  getLetters,
  getDiamondLine,
  makeLines,
}
