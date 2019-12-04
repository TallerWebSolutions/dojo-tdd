import {
	calculateFrame,
	calculateResult,
	isStrike,
	Frame,
	Game,
	isSpare,
	getFirstTurn,
	getLastTurn,
	getNextFrame
} from './';

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

  it('should calculate perfect game', () => {
    const game: Game = [
			[10, 0], //30
			[10, 0], //30
			[10, 0], //30
			[10, 0], //30
			[10, 0], //30
			[10, 0], //30
			[10, 0], //30
			[10, 0], //30
			[10, 0], //30
			[10, 10, 10] // 30
		];

    expect(calculateResult(game)).toEqual(300)
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

describe("Frames", () => {
  it("should return the first turn", () => {
    const frame: Frame = [0,1] 
    expect(getFirstTurn(frame)).toEqual(0)
    
    const frame2: Frame = [2,1] 
    expect(getFirstTurn(frame2)).toEqual(2)
    
    const frame3: Frame = [3,1] 
    expect(getFirstTurn(frame3)).not.toEqual(1)
  })

  it("should return the last turn", () => {
    const frame: Frame = [0,1] 
    expect(getLastTurn(frame)).toEqual(1)
    
    const frame2: Frame = [0,3] 
    expect(getLastTurn(frame2)).toEqual(3)
    
    const frame3: Frame = [0,4] 
    expect(getLastTurn(frame3)).not.toEqual(0)
  })

  describe("getNextFrame", () => {
    it("should return the next frame", () => {
      const game: Game = [[0, 1], [3, 2], [4, 4]]
      const index = 1
      expect(getNextFrame(game, index)).toEqual([4, 4])
    })

    it("should return undefined at last frame", () => {
      const game: Game = [[0, 1], [3, 2], [4, 4]]
      const index = 2
      expect(getNextFrame(game, index)).toEqual([0, 0])
    })
  })
})
