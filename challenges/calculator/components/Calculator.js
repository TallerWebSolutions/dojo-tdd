import React from 'react'

import UserInput from './UserInput'
import Result from './Result'
import CalcButton from './CalcButton'
// import ResetButton from './ResetButton'
import { exec as calculate } from '../calculator'
import ResetButton from './ResetButton'

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

  render() {
    return (
      <div>
        <UserInput value={this.state.input} onChange={e => this.onChange(e)} />
        <Result value={this.state.result} />
        <CalcButton onClick={() => this.onCalculate()}>calcular</CalcButton>
        <ResetButton onClick={() => this.onReset()} />
      </div>
    )
  }
}

export default Calculator
