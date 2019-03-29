const {
  sum,
  subtract,
  multiply,
  divide,
  exec,
  getOperatorFunc,
  extractOperator,
  exponential,
  extractTokens,
} = require('./calculator')

describe('calculator', () => {
  describe('sum', () => {
    it('should sum two integers', () => {
      expect(sum(1, 1)).toBe(2)
    })

    it('should sum two negative integers', () => {
      expect(sum(-1, 2)).toBe(1)
    })

    it('should sum two floats', () => {
      expect(sum(1.4, 1.5)).toBe(2.9)
    })
  })

  describe('subtract', () => {
    it('should subtract two integers', () => {
      expect(subtract(1, 1)).toBe(0)
    })

    it('should subtract two negative integers', () => {
      expect(subtract(-1, 2)).toBe(-3)
    })

    it('should subtract two floats', () => {
      expect(subtract(2.5, 1.5)).toBe(1)
    })
  })

  describe('multiply', () => {
    it('should multiply two integers', () => {
      expect(multiply(2, 2)).toBe(4)
    })

    it('should multiply two negative integers', () => {
      expect(multiply(-1, 2)).toBe(-2)
    })

    it('should multiply two floats', () => {
      expect(multiply(2.5, 1.5)).toBe(3.75)
    })
  })

  describe('divide', () => {
    it('should divide two integers', () => {
      expect(divide(4, 2)).toBe(2)
    })
    it('should throw an error on 10/0', () => {
      expect(() => divide(10, 0)).toThrowError('Impossível dividir por zero')
    })
    it('should return -5 on 10/-2', () => {
      expect(divide(10, -2)).toBe(-5)
    })
  })

  describe('exponential', () => {
    it('should return the result of 2 with power 2', () => {
      expect(exponential(2, 2)).toBe(4)
    })

    it('should return the result of 2 with power 3', () => {
      expect(exponential(2, 3)).toBe(8)
    })

    it('should return the result of -2 in the power 3', () => {
      expect(exponential(-2, 3)).toBe(-8)
    })
  })

  describe('getOperatorFunc', () => {
    it('should return a sum when input is "+"', () => {
      expect(getOperatorFunc('+')(2, 2)).toBe(4)
    })
    it('should return a subtract when input is "-"', () => {
      expect(getOperatorFunc('-')(2, 2)).toBe(0)
    })
    it('should return a multiply when input is "*"', () => {
      expect(getOperatorFunc('*')(2, 2)).toBe(4)
    })
    it('should return a divide when input is "/"', () => {
      expect(getOperatorFunc('/')(4, 2)).toBe(2)
    })
    it('should return an exponential when input is "^"', () => {
      expect(getOperatorFunc('^')(2, 3)).toBe(8)
    })
    it('should throw an error when operator is not valid', () => {
      expect(() => getOperatorFunc('@')(4, 2)).toThrowError(
        'Operador não suportado, utilize os seguintes ["+", "-", "/", "*"].'
      )
    })
  })

  describe('extractTokens', () => {
    it('should return operators', () => {
      expect(extractTokens('-1*-1')).toEqual(['-1', '*', '-1'])
    })
  })

  describe('extract operator', () => {
    it('should return plus operator for sum', () => {
      expect(extractOperator('1+1')).toBe('+')
    })

    it('should return minus operator for subtraction', () => {
      expect(extractOperator('1-1')).toBe('-')
    })

    it('should return division operator for division', () => {
      expect(extractOperator('1/1')).toBe('/')
    })

    it('should return times operator for multiplication', () => {
      expect(extractOperator('1*1')).toBe('*')
    })

    it('should return exponent operator for power', () => {
      expect(extractOperator('2^2')).toBe('^')
    })

    it('should return nothing when no operator found', () => {
      expect(extractOperator('11')).toBe(null)
    })
  })

  describe('exec', () => {
    describe('sum', () => {
      it('should return 2 when 1 + 1', () => {
        expect(exec('1+1')).toBe(2)
      })
      it('should return 3 when 2 + 1', () => {
        expect(exec('2+1')).toBe(3)
      })
      it('should return 30 when 20 + 10', () => {
        expect(exec('20+10')).toBe(30)
      })
    })

    describe('subtract', () => {
      it('should return 0 when 1 - 1', () => {
        expect(exec('1-1')).toBe(0)
      })
      it('should return 1 when 2 - 1', () => {
        expect(exec('2-1')).toBe(1)
      })
    })

    describe('multiply', () => {
      it('should return 1 when 1 * 1', () => {
        expect(exec('1*1')).toBe(1)
      })

      it('should return 4 when 2 * 2', () => {
        expect(exec('2*2')).toBe(4)
      })
      it('should return 4 when -2 * 2', () => {
        expect(exec('-2*2')).toBe(-4)
      })
    })

    describe('multiply', () => {
      it('should return 1 when 1 * 1', () => {
        expect(exec('1*1')).toBe(1)
      })

      it('should return 3 when 6 / 2', () => {
        expect(exec('6/2')).toBe(3)
      })
    })

    describe('exponential', () => {
      it('should return 4 when 2 ^ 2', () => {
        expect(exec('2^2')).toBe(4)
      })
      it('should return 81 when 9 ^ 2', () => {
        expect(exec('9^2')).toBe(81)
      })
      it('should return 1 when 1 ^ -1', () => {
        expect(exec('1^-1')).toBe(1)
      })
    })
    describe('expression', () => {
      it('should return -2 when -7+5', () => {
        expect(exec('-7+5')).toBe(-2)
      })

      it('should return 10 when +3+7', () => {
        expect(exec('+3+7')).toBe(10)
      })

      it('should return 10 when ++3+7', () => {
        expect(exec('++3+7')).toBe(10)
      })

      it.skip('should return -2 when -1-1', () => {
        expect(exec('-1-1')).toBe(-2)
      })
    })
  })
})
