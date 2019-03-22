import React from 'react'

import UserInput from './UserInput'
import Result from './Result'
import CalcButton from './CalcButton'
import ResetButton from './ResetButton'
import Number from './Number'
import Operation from './Operation'

import { exec as calculate, supportedOperators } from '../calculator'

const initialState = {
  input: '',
  result: '',
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  onChange(e) {
    this.setState({ input: e.target.value })
  }

  onCalculate() {
    this.setState({ result: calculate(this.state.input) })
  }

  onReset() {
    this.setState(initialState)
  }

  onNumber(number) {
    this.setState(({ input }) => ({
      input: input.concat(number),
    }))
  }

  render() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
      <div>
        <UserInput value={this.state.input} onChange={e => this.onChange(e)} />
        <Result value={this.state.result} />
        <CalcButton onClick={() => this.onCalculate()}>calcular</CalcButton>
        <ResetButton onClick={() => this.onReset()} />

        {numbers.map(number => (
          <Number
            key={`keyboard/${number}`}
            number={number}
            onClick={() => this.onNumber(number.toString())}
          />
        ))}

        {supportedOperators.map(operator => (
          <Operation operation={operator} key={operator} />
        ))}
      </div>
    )
  }
}

export default Calculator
