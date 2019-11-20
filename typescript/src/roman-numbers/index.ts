export enum Numerals {
  'I' = 1,
  'V' = 5,
  'X' = 10,
  'L' = 50,
  'C' = 100,
  'D' = 500,
  'M' = 1000
}

export const isAllowed = (numeral: string): boolean => !['IIII', 'XXXX', 'CCCC', 'MMMM'].some(
  value => numeral.includes(value)
)

export const valueOf = (arg: string): number => {
  if (!isAllowed(arg)) {
    throw new Error('Invalid roman numeral')
  }

  const values: string[] = arg.split('')

  const sumResult = values.reduce((carry, value, index) => {

    if(Numerals[values[index + 1]] > Numerals[value]) {
      return carry - Numerals[value]
    }

    return carry + Numerals[value]
  }, 0)

  return sumResult
}
