import React from 'react'
import { render, shallow, mount } from 'enzyme'

import Calculator from './Calculator'
import UserInput from './UserInput'
import Result from './Result'
import Button from './Button'

describe('Calculator', () => {
  it('should render main component', () => {
    const wrapper = shallow(<Calculator />)

    expect(wrapper.find(UserInput)).toHaveLength(1)
    expect(wrapper.find(Result)).toHaveLength(1)
    expect(wrapper.find(Button)).toHaveLength(1)
  })

  it('should have a input state', () => {
    const wrapper = shallow(<Calculator />)
    expect(wrapper.state('input')).toEqual('')
  })

  it('should have state value on <UserInput/>', () => {
    const wrapper = mount(<Calculator />)
    wrapper.setState({ input: '2+2' })
    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.find('input').props().value).toEqual('2+2')
  })

  it('should set input state when user input chages', () => {
    const wrapper = mount(<Calculator />)
    const input = wrapper.find('input')
    const event = { target: { value: '2+2' } }
    input.simulate('change', event)
    expect(wrapper.state('input')).toEqual('2+2')
  })

  it('should set result state as 4 when input 2+2', () => {
    const wrapper = mount(<Calculator />)
    const input = wrapper.find('input')
    const event = { target: { value: '2+2' } }
    input.simulate('change', event)
    const button = wrapper.find('button')
    button.simulate('click')
    expect(wrapper.state('result')).toEqual(4)
  })

  it('should set result state as 8 when input 4+4', () => {
    const wrapper = mount(<Calculator />)
    const input = wrapper.find('input')
    const event = { target: { value: '4+4' } }
    input.simulate('change', event)
    const button = wrapper.find('button')
    button.simulate('click')
    expect(wrapper.state('result')).toEqual(8)
  })

  it('should display 2 inside Result component', () => {
    const wrapper = mount(<Calculator />)
    const input = wrapper.find('input')
    const event = { target: { value: '4-2' } }
    input.simulate('change', event)
    const button = wrapper.find('button')
    button.simulate('click')
    const result = wrapper.find(Result)
    expect(wrapper.find(result).props().value).toEqual(2)
  })
})

describe('UserInput', () => {
  it('should have an input', () => {
    const wrapper = shallow(<UserInput />)
    expect(wrapper.find('input')).toHaveLength(1)
  })

  it('should have an input with value', () => {
    const inputState = '2+2'
    const wrapper = shallow(<UserInput value="2+2" />)
    expect(wrapper.find('input').props().value).toEqual(inputState)
  })

  it('should have an input with value which can change', () => {
    const inputState = '2+2'
    const onChange = jest.fn()
    const wrapper = shallow(<UserInput value="2+2" onChange={onChange} />)
    const event = { target: { value: '3+3' } }
    wrapper.simulate('change', event)
    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalledWith(event)
  })
})

describe('Result', () => {
  it('should have the output', () => {
    const wrapper = shallow(<Result value="4" />)
    expect(wrapper.text()).toBe('4')
  })
})

describe('Button', () => {
  it('should have a button', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('Should execute a function when clicked', () => {
    const fn = jest.fn()
    const wrapper = shallow(<Button onClick={fn} />)

    wrapper.simulate('click')

    expect(fn).toHaveBeenCalled()
  })
})
