import React from 'react'

import UserInput from './UserInput'
import Result from './Result'
import CalcButton from './CalcButton'
import ResetButton from './ResetButton'
import Number from './Number'

import { exec as calculate } from '../calculator'

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
    this.setState(prevState => {
      let SCIENCE = prevState.input.concat(e.target.value)
      console.log('This is the log', SCIENCE)
      // return {
      //   input: SCIENCE,
      //   result: state.result,
      // }
    })
  }

  onCalculate() {
    this.setState({ result: calculate(this.state.input) })
  }

  onReset() {
    this.setState(initialState)
  }

  onNumber(number) {
    this.setState({ input: number })
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
      </div>
    )
  }
}

export default Calculator
