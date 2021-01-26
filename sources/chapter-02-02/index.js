/* eslint-disable max-classes-per-file, react/prefer-stateless-function,
 react/destructuring-assignment, react/prop-types, react/no-unused-prop-types */
import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class Post extends Component {
  render() {
    return React.createElement(
      'div',
      {
        className: 'post',
      },
      React.createElement(
        'h2',
        {
          className: 'postAuthor',
          id: this.props.id,
        },
        this.props.user,
        React.createElement(
          'span',
          {
            className: 'postBody',
          },
          this.props.content,
        ),
        this.props.children,
      ),
    );
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

class Comment extends Component {
  render() {
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
        this.props.user,
        React.createElement(
          'span',
          {
            className: 'commentContent',
          },
          this.props.content,
        ),
      ),
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const App = React.createElement(
  Post,
  {
    id: 1,
    user: 'mark',
    content: ' said: This is a post!',
  },
  React.createElement(Comment, {
    id: 2,
    user: 'bob',
    content: ' commented: wow! how cool!',
  }),
);

const node = document.getElementById('root');
render(App, node);
