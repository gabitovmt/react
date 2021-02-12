import React from "react";
import PropTypes from "prop-types";

function BoilingVerdict(props) {
  return Number.isFinite(+props.celsius) && props.celsius.trim().length > 0
    ? (+props.celsius >= 100 ? <p>Вода закипит</p> : <p>Вода не закипит</p>)
    : <p/>
}

BoilingVerdict.propTypes = {
  celsius: PropTypes.string.isRequired
}

export default BoilingVerdict;
