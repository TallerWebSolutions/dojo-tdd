import React from 'react'

import UserInput from './UserInput'
import Result from './Result'
import Button from './Button'
import { exec as calculate } from '../calculator'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      result: '',
    }
  }

  onChange(e) {
    this.setState({ input: e.target.value })
  }

  onCalculate() {
    this.setState({ result: calculate(this.state.input) })
  }

  render() {
    return (
      <div>
        <UserInput value={this.state.input} onChange={e => this.onChange(e)} />
        <Result value={this.state.result} />
        <Button onClick={() => this.onCalculate()}>calcular</Button>
      </div>
    )
  }
}

export default Calculator
