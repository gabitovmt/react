import React from "react";
import PropTypes from "prop-types";

function Greeting(props) {
  return <div>Добро пожаловать, {props.firstName} {props.lastName}</div>;
}

Greeting.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export function App1() {
  return <Greeting firstName="Иван" lastName="Иванов" />;
}

export function App2() {
  const props = {firstName: 'Иван', lastName: 'Иванов'};

  return <Greeting {...props} />;
}
