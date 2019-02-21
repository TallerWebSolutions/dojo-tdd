import React from 'react'
import { render, shallow } from 'enzyme'

import Calculator from './Calculator'
import UserInput from './UserInput'

describe.only('Calculator', () => {
  it('should render main component', () => {
    const wrapper = render(<Calculator />)

    expect(wrapper.text()).toBe('calculadora')
  })

  it('should have an input', () => {
    const wrapper = shallow(<Calculator />)
    expect(wrapper.find('input')).toHaveLength(1)
  })
})

describe('Exec', () => {
  it('Should have a submit button', () => {
    const wrapper = shallow(<Submit />)
    expect(wrapper.find('button')).toHaveLength(1)
  })
})
