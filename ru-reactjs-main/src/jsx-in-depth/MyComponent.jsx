import React from "react";
import PropTypes from "prop-types";

function MyComponent(props) {
  return <div>Сообщение: {props.message}</div>;
}

MyComponent.propTypes = {
  message: PropTypes.string.isRequired
};

export default MyComponent;
