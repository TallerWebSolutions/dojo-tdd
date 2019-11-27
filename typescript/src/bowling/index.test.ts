import {
  calculateFrame,
  calculateResult,
  isStrike,
  Frame,
  Game,
  isSpare
} from "./"

describe("Calculate the points in a frame", () => {
  it("Calculate the points sum in only one frame", () => {
    const data: Frame = [1, 1]

    const expected = calculateFrame(data)
    expect(expected).toEqual(2)
  })

  it("Calculate the points sum in only one frame", () => {
    const data: Frame = [2, 1]

    const expected = calculateFrame(data)
    expect(expected).toEqual(3)
  })

  it("Calculate the points sum in only one frame for three", () => {
    const data: Frame = [2, 1, 2]

    const expected = calculateFrame(data)
    expect(expected).toEqual(5)
  })
})

describe("Calculate the results in a game", () => {
  it("Calculate the sum of an entire game", () => {
    const data: Game = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ]
    expect(calculateResult(data)).toEqual(0)

    const data2: Game = [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 0]
    ]

    expect(calculateResult(data2)).toEqual(10)
  })

  it("Should calculate the game with a spare", () => {
    const game: Game = [
      [1, 4],
      [1, 9],
      [1, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ]

    expect(calculateResult(game)).toEqual(17)
  })

  it("Should calculate the game with a strike", () => {
    const game: Game = [
      [1, 4],
      [10, 0],
      [1, 0],
      [1, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ]

    expect(calculateResult(game)).toEqual(19)
  })

  describe("Given a spare in the last (tenth) frame", () => {
    it("Should throw one more bonus ball", () => {
      const game: Game = [
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6],
        [4, 6, 4]
      ]

      expect(calculateResult(game)).toEqual(140)
    })
  })
})

describe("is strike", () => {
  it("should check if the frame is a strike", () => {
    expect(isStrike([0, 0])).toEqual(false)
    expect(isStrike([10, 0])).toEqual(true)
  })
})

describe("is spare", () => {
  it("should check if the frame is a spare", () => {
    expect(isSpare([0, 0])).toEqual(false)
    expect(isSpare([1, 4])).toEqual(false)
    expect(isSpare([5, 5])).toEqual(true)
    expect(isSpare([10, 0])).toEqual(false)
    expect(isSpare([0, 10])).toEqual(true)
  })
})
