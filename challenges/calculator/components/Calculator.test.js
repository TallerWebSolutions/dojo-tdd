import React from 'react'
import { render, shallow, mount } from 'enzyme'

import Calculator from './Calculator'
import UserInput from './UserInput'
import Result from './Result'

describe.only('Calculator', () => {
  it('should render main component', () => {
    const wrapper = render(<Calculator />)

    expect(wrapper.text()).toBe('calculadora')
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
    const wrapper = mount(<Result />)
    expect(wrapper.text()).toBe('resultado')
  })
})

describe.only('Button', () => {
  it('should have the output', () => {
    const wrapper = mount(<Button />)
    expect(wrapper.text()).toBe('botão')
  })
})

