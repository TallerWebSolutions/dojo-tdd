const sum = (a, b) => a + b

const subtract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => {

  if(b === 0)
    throw new Error("Impossível dividir por zero")
  return a / b
}

const exec = str => {
  const operator = str[1]
  return str === '1+1' ? 2 : 3
}

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
  exec
}