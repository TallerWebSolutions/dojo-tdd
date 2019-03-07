import React from 'react'

import UserInput from './UserInput'
import Result from './Result'
import Button from './Button'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
  }

  render() {
    return (
      <div>
        <UserInput value={this.state.input} />
        <Result />
        <Button />
      </div>
    )
  }
}

export default Calculator
