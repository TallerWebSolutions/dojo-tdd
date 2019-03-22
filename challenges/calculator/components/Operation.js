import React from 'react'

const Operation = ({ onClick, operation }) => (
  <button onClick={onClick}>{operation}</button>
)

export default Operation
