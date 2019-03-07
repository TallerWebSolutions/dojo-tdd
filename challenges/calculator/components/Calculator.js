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
    console.log(e)
    // this.setState({ input: calculate(this.state.input) })
  }

  render() {
    return (
      <div>
        <UserInput value={this.state.input} onChange={e => this.onChange} />
        <Result />
        <Button />
      </div>
    )
  }
}

export default Calculator
