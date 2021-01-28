/* eslint-disable react/prefer-stateless-function, react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Post extends Component {
  render() {
    const {
      id, user, content, children,
    } = this.props;

    return React.createElement(
      'div',
      {
        className: 'post',
      },
      React.createElement(
        'h2',
        {
          className: 'postAuthor',
          id,
        },
        user,
        React.createElement(
          'span',
          {
            className: 'postBody',
          },
          content,
        ),
        children,
      ),
    );
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
