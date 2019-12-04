export type Frame = [number, number] | [number, number, number]
export type Game = Frame[]
const TOTAL_PINS = 10

export const calculateFrame = (data: Frame): number => {
  return data.reduce((acc, cur) => acc + cur, 0)
}

export const isStrike = (frame: Frame) => frame[0] === TOTAL_PINS

export const calculateResult = (data: Frame[]) =>
  data.reduce((acc, frame, index) => {
    let extra: number = 0
    const isLastFrame = index === data.length - 1

    const wasSpare = isSpare(frame)
    const wasStrike = isStrike(frame)

    const nextFrame = getNextFrame(data, index)

    if (wasSpare && !isLastFrame) {
      extra = getFirstTurn(nextFrame);
    }

    // Refactor?
    if (wasStrike && !isLastFrame) {
      let secondFrame = 0;
      if (data[index + 2]) {
        if(isStrike(data[index + 2])) {
          secondFrame = data[index + 2][0]
        }
        else {
          secondFrame = calculateFrame([data[index + 2][0], data[index + 2][1]]);
        }
      }

      extra = calculateFrame([getFirstTurn(nextFrame), getLastTurn(nextFrame)]) + secondFrame
    }

    return acc + calculateFrame(frame) + extra
  }, 0)

export const isSpare = (frame: Frame) =>
  !isStrike(frame) && calculateFrame(frame) === TOTAL_PINS


  export const getFirstTurn = (frame: Frame) => frame[0]
  
  export const getLastTurn = (frame: Frame) => frame[1]

  export const getNextFrame = (game: Game, index: number): Frame => game[index + 1] || [0,0]