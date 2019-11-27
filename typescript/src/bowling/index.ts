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
    const isLastFrame = index === 9

    const wasSpare = isSpare(frame)
    const wasStrike = isStrike(frame)

    if (wasSpare && !isLastFrame) {
      extra = calculateFrame(data[index + 1])
    }

    if (wasStrike && !isLastFrame) {
      extra = calculateFrame(data[index + 1]) + calculateFrame(data[index + 2])
    }

    return acc + calculateFrame(frame) + extra
  }, 0)

export const isSpare = (frame: Frame) =>
  !isStrike(frame) && calculateFrame(frame) === TOTAL_PINS
