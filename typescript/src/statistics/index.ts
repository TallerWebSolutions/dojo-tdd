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

export const mode = (values: number[]): number => {
  let i:string
  const map:any = {}

  for (i in values) {
    if (!map[values[i]]) {
      map[values[i]] = 0
    }

    map[values[i]] += 1
  }

  const maxOccurence = Object.values(map).sort().reverse().shift()

  for (let index in map) {
    if (map[index] == maxOccurence) {
      return parseInt(index)
    }
  }

  return 0
}

export const group = (values: number[]): number[][] => {
  const grouped = values.reduce((acc: number[][], value: number) => {
    // Add number when is not present on the accumulator.
    if (!acc.some((item: number[]) => item.includes(value))) {
      return acc.concat([[value]])
    }

    // Add number to the array of it's group.
    return acc.map((item: number[]) => item.includes(value) ? item.concat([value]) : item)
  }, [])

  return grouped
}