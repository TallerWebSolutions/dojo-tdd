import React from 'react'

import UserInput from './UserInput'
import Result from './Result'
import Button from './Button'

class Calculator extends React.Component {

  render() {
    return (
      <div>
        <UserInput />
        <Result />
        <Button />
      </div>
  )}
}

export default Calculator
