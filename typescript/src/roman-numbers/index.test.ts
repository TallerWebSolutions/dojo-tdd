import { valueOf, isAllowed } from './index'

describe('return single roman numbers', () => {
  it('shoul return value of roman number', () => {
    expect(valueOf('X')).toEqual(10)
  })
  it('should return 5 when inserted V', () => {
    expect(valueOf('I')).toEqual(1)
  })
})

describe('should convert roman numbers to arabic numbers', () => {
  it('should sum roman numbers', () => {
    expect(valueOf('II')).toEqual(2)
    expect(valueOf('III')).toEqual(3)
    expect(valueOf('XX')).toEqual(20)
    expect(valueOf('XXX')).toEqual(30)
    expect(valueOf('CC')).toEqual(200)
    expect(valueOf('CCC')).toEqual(300)
    expect(valueOf('MM')).toEqual(2000)
    expect(valueOf('MMM')).toEqual(3000)
  })

  it('should not repeat more than three times, except V, L and D', () => {
    expect(valueOf('VVVV')).toEqual(20);
    expect(valueOf('LLLL')).toEqual(200);
    expect(valueOf('DDDD')).toEqual(2000);
    expect(() => { valueOf('IIII') }).toThrow();
    expect(() => { valueOf('XXXX') }).toThrow();
    expect(() => { valueOf('CCCC') }).toThrow();
    expect(() => { valueOf('MMMM') }).toThrow();
    expect(() => { valueOf('XXIIII') }).toThrow();
    expect(() => { valueOf('VXXXX') }).toThrow();
    expect(() => { valueOf('DCCCC') }).toThrow();
    expect(() => { valueOf('DMMMM') }).toThrow();
  })

  it('should sum I, X and C to the value to the left when smaller than it', () => {
    expect(valueOf('VIII')).toEqual(8)
    expect(valueOf('XVIII')).toEqual(18)
    expect(valueOf('XXIII')).toEqual(23)
  })
  
  it('should sub I, X and C from the value to the right when smaller than it', () => {
    expect(valueOf('IV')).toEqual(4)
    expect(valueOf('IX')).toEqual(9)
    expect(valueOf('IC')).toEqual(99)
    expect(valueOf('XC')).toEqual(90)
    expect(valueOf('CM')).toEqual(900)
  })
})

describe('some numerals should not repeat more than three times', () => {
  it("should tell if a numeral is allowed", () => {
    expect(isAllowed('IIII')).toBeFalsy()
    expect(isAllowed('III')).toBeTruthy()
    expect(isAllowed('XXIIII')).toBeFalsy()
  })
})
