/* eslint-disable
   react/prefer-stateless-function,
   react/destructuring-assignment,
   react/forbid-prop-types,
   react/require-default-props
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Nav extends Component {
  render() {
    return React.createElement(
      'nav',
      {
        className: 'nav',
      },
      this.props.children,
    );
  }
}

Nav.propTypes = {
  children: PropTypes.arrayOf(),
};
