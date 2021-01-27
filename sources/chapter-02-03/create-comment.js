import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreateComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      user: '',
    };

    this.handlerUserChange = this.handlerUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlerUserChange(event) {
    this.setState(() => ({
      user: event.target.value,
    }));
  }

  handleTextChange(event) {
    this.setState(() => ({
      content: event.target.value,
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    const { props } = this;
    const { user, content } = this.state;

    props.onCommentSubmit({
      user: user.trim(),
      content: content.trim(),
    });

    this.setState(() => ({
      user: '',
      content: '',
    }));
  }

  render() {
    const { content, user } = this.state;

    return React.createElement(
      'form',
      {
        className: 'createComment',
        onSubmit: this.handleSubmit,
      },
      React.createElement('input', {
        type: 'text',
        placeholder: 'Your name',
        value: user,
        onChange: this.handlerUserChange,
      }),
      React.createElement('input', {
        type: 'text',
        placeholder: 'Thoughts?',
        value: content,
        onChange: this.handleTextChange,
      }),
      React.createElement('input', {
        type: 'submit',
        value: 'Post',
      }),
    );
  }
}

CreateComment.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};
