import React from "react";
import PropTypes from "prop-types";

function NumberList2(props) {
  return <ul>
    {props.numbers.map(number =>
      <li key={number}>{number}</li>
    )}
  </ul>
}

NumberList2.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
}

export default NumberList2;
