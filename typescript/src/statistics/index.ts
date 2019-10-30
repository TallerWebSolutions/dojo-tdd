export const sort = (values: number[]): number[] => values.sort((a, b) => a - b)

export const minimum = (values: number[]): number | number[] => values.length ? sort(values)[0] : values

export const maximum = (values: number[]): number | number[] => values.length ? sort(values)[values.length - 1] : values

export const length = (values: number[]): number => values.length

export const mean = (values: number[]): number => {
  if (values.length === 0) {
    return 0
  }

  const sum = values.reduce((accum, number) => {
    return accum + number
  })

  return sum / values.length
}

export const median = (values: number[]): number => {

  if (values.length === 0) return 0

  const sorted = sort(values)
  const index = Math.floor(sorted.length / 2)

  if (!isEven(values.length)) {
    return values[index]
  }

  return mean([values[index], values[index -1 ]])
}

export const isEven = (value: number): boolean => value % 2 === 0

export const mode = (values: number[]): number => 0
