import React from "react";
import PropTypes from "prop-types";

function NumberDescriber(props) {
  const description = props.number % 2 === 0
    ? <strong>чётным</strong>
    : <i>нечётным</i>;

  return <div>{props.number} является {description} числом</div>;
}

NumberDescriber.propTypes = {
  number: PropTypes.number.isRequired
};

export default NumberDescriber;
