const supportedOperators = ['+', '-', '*', '/']

const sum = (a, b) => a + b

const subtract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => {
  if (b === 0) throw new Error('Impossível dividir por zero')
  return a / b
}

const getOperatorFunc = operator => (a, b) => {
  if (!supportedOperators.includes(operator)) {
    throw new Error('Operador não suportado, utilize os seguintes ["+", "-", "/", "*"].')
  }

  switch (operator) {
    case '+':
      return sum(a, b)
    case '-':
      return subtract(a, b)
    case '*':
      return multiply(a, b)
    case '/':
      return divide(a, b)
  }
}

const extractOperator = str => {
  const matchedOp = str.match(/\D/)
  const operator = matchedOp && matchedOp[0]

  return operator
}

const exec = expression => {
  const operator = extractOperator(expression)
  const numbers = expression.split(operator)
    .map(number => parseInt(number, 10))
  console.log({ numbers })
  const operatorFunc = getOperatorFunc(operator)
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
}
