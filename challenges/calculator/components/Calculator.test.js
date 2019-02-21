import React from 'react'
import { render } from 'enzyme'

import Calculator from './Calculator'
import UserInput from './UserInput'

describe('Calculator', () => {
  it('should render main component', () => {
    const wrapper = render(<Calculator />)

    expect(wrapper.text()).toBe('calculadora')
  })

  it('should have an input', () => {
    const wrapper = render(<UserInput />)
    expect(wrapper.find('input')).toHaveLength(1)
  })
})
