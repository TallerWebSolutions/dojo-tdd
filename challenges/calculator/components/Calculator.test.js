import React from 'react'
import { render } from 'enzyme'

import Calculator from './Calculator'

describe('Calculator', () => {
  it('should render component', () => {
    const wrapper = render(<Calculator />)

    expect(wrapper.text()).toBe('calculadora')
  })
})
