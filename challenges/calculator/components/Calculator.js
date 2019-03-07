import React from 'react'

import UserInput from './UserInput'
import Result from './Result'
import Button from './Button'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      result: '',
    }
  }

  onChange() {
    this.setState({ result: '4' })
  }

  render() {
    return (
      <div>
        <UserInput value={this.state.input} onChange={onChange} />
        <Result />
        <Button />
      </div>
    )
  }
}

export default Calculator
