import React from "react";
import PropTypes from "prop-types";

function MyTextBox(props) {
  return <div>autocomplete={props.autocomplete.toString()}</div>
}

MyTextBox.propTypes = {
  autocomplete: PropTypes.bool.isRequired
}

export default MyTextBox;
