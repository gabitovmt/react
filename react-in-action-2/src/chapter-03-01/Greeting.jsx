import React from "react";
import PropTypes from "prop-types";

export default function Greeting(props) {
  return <div>Hello {props.for}!</div>
}

// Или используйте функцию ниже
// const Greeting = (props) => <div>Hello {props.for}!</div>
// export default Greeting;
// ... указав свойства или свойства по умолчанию так же, как и раньше

Greeting.propTypes = {
  for: PropTypes.string,
}

Greeting.defaultProps = {
  for: 'friend',
}
