import React from "react";
import PropTypes from "prop-types";

function NumberList(props) {
  const listItems = props.numbers.map(number =>
    <li key={number.toString()}>{number}</li>
  );

  return <ul>{listItems}</ul>
}

NumberList.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
}

export default NumberList;
