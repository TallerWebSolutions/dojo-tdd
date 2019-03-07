import React from 'react'

const defaultOnChange = () => ({})
const UserInput = ({ value, onChange = defaultOnChange }) => (
  <input type="text" value={value} onChange={onChange} />
)

export default UserInput
