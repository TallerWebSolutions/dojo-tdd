import React from "react";

const Number = ({ onClick, number }) => (
  <button onClick={onClick}>{number}</button>
);

export default Number;
