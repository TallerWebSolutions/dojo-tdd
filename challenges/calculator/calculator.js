const supportedOperators = ['+', '-', '*', '/', '^']
const RADIX_DECIMAL = 10

const sum = (a, b) => a + b

const subtract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => {
  if (b === 0) throw new Error('Impossível dividir por zero')
  return a / b
}

const exponential = (a, b) => {
  return Math.pow(a, b)
}

const getOperatorFunc = operator => (...args) => {
  if (!supportedOperators.includes(operator)) {
    throw new Error(
      'Operador não suportado, utilize os seguintes ["+", "-", "/", "*"].'
    )
  }

  const funcOperators = {
    '+': sum,
    '-': subtract,
    '*': multiply,
    '/': divide,
    '^': exponential,
  }

  return funcOperators[operator](...args)
}

const extractTokens = str => {
  const operators = str.match(/(-?\d)([\*\-\/\+\^])(-?\d)/)
  return operators !== null ? operators.slice(1) : null
}

const extractOperator = str => {
  const matchedOp = extractTokens(str) && extractTokens(str)[1]
  const operator = matchedOp && matchedOp[0]

  return operator
}

const exec = expression => {
  const operator = extractOperator(expression)
  const operatorFunc = getOperatorFunc(operator)
  const numbers = expression
    .split(operator)
    .map(number => parseInt(number, RADIX_DECIMAL))

  return operatorFunc(...numbers)
}

module.exports = {
  sum,
  exec,
  divide,
  subtract,
  multiply,
  getOperatorFunc,
  extractOperator,
  exponential,
  extractTokens,
  supportedOperators,
}
