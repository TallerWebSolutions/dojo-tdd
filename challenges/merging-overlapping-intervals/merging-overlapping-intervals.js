
const mergeOverlappingIntervals = ( arr ) => {
  const result = []
  const sorted = arr.sort(([a], [b]) => a - b)

  for (const [from, to] of sorted) {
    const last = result.length - 1

    if (result[last] && from <= result[last][1]) {
      if (to > result[last][1]) result[last][1] = to
      continue
    }

    result.push([from, to])
  }

  return result

  // arr/*.sort((a, b) => a[0] - b[0])*/.forEach(interval => {
  //   if (!result.length) {
  //     result.push(interval)
  //   }

  //   if (shouldMerge(result[result.length - 1], interval)) {
  //     result[result.length - 1] = merge(result[result.length - 1], interval)
  //   }

  //   result.push(interval)
  // })

  // return result
}

const merge = (arr1, arr2) => {
  const arrReturn = [arr1[0], arr2[1]]
  return arrReturn
}

const shouldMerge = (arr1, arr2) => arr1[1] >= arr2[0]

module.exports = {
  mergeOverlappingIntervals,
  merge,
  shouldMerge,
}
