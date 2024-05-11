import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
  return <div>Hello {props.for}</div>;
}

Greeting.propTypes = {
  for: PropTypes.string.isRequired
};

Greeting.defaultProps = {
  for: 'friend'
};

export default Greeting;
