/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {
  render() {
    const { user, content } = this.props;

    return React.createElement(
      'div',
      {
        className: 'comment',
      },
      React.createElement(
        'h2',
        {
          className: 'commentAuthor',
        },
        user,
        ' ',
        React.createElement(
          'span',
          {
            className: 'commentContent',
          },
          content,
        ),
      ),
    );
  }
}

Comment.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
