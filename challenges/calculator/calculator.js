const sum = (a, b) => a + b

const subtract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => {

  if(b === 0)
    return new Error({message: "Impossível dividir por zero"})
  return a / b
}

module.exports = {
  sum,
  subtract,
  multiply,
  divide
}