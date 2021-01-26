/* eslint-disable
   react/prefer-stateless-function,
   react/destructuring-assignment
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NavItem extends Component {
  render() {
    return React.createElement(
      'div',
      {
        className: 'nav-item',
      },
      this.props.content,
    );
  }
}

NavItem.propTypes = {
  content: PropTypes.string.isRequired,
};
