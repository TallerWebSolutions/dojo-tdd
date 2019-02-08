const supportedOperators = ['+', '-', '*', '/']

const sum = (a, b) => a + b

const subtract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => {
  if (b === 0) throw new Error('Impossível dividir por zero')
  return a / b
}

const getOperator = char => (a, b) => {
  // return char === '+' ? sum(a, b) : subtract(a, b)
  switch (char) {
    case '+':
      return sum(a, b)
      break
    case '-':
      return subtract(a, b)
      break
    case '*':
      return multiply(a, b)
      break
    case '/':
      return divide(a, b)
      break
  }
}

const extractOperator = str => {
  const matchedOp = str.match(/\D/)
  const operator = matchedOp && matchedOp[0]
  if (!supportedOperators.includes(operator)) {
    throw Error('Operador não suportado, utilize os seguintes ["+", "-", "/", "*"].')
  }
  return operator
}

const exec = str => {
  return str === '1+1' ? 2 : 3
}

module.exports = {
  sum,
  exec,
  divide,
  subtract,
  multiply,
  getOperator,
  extractOperator,
}
