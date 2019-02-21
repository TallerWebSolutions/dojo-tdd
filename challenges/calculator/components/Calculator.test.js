import React from 'react'
import { render, shallow } from 'enzyme'

import Calculator from './Calculator'
import UserInput from './UserInput'
import Result from './Result'
import Button from './Button'

describe.only('Calculator', () => {
  it('should render main component', () => {
    const wrapper = shallow(<Calculator />)

    expect(wrapper.find(UserInput)).toHaveLength(1)
    expect(wrapper.find(Result)).toHaveLength(1)
    expect(wrapper.find(Button)).toHaveLength(1)
  })
})

describe.only('UserInput', () => {
  it('should have an input', () => {
    const wrapper = shallow(<UserInput />)
    expect(wrapper.find('input')).toHaveLength(1)
  })
})

describe.only('Result', () => {
  it('should have the output', () => {
    const wrapper = shallow(<Result />)
    expect(wrapper.text()).toBe('resultado')
  })
})

describe.only('Button', () => {
  it('should have a button', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button')).toHaveLength(1)
  })
})

