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
    let x;

    return (
      <form onSubmit={this.handleSubmit} className="createComment">
        <input
          value={user}
          onChange={this.handlerUserChange()}
          placeholder="Your name"
          type="text"
        />
        <input
          value={content}
          onChange={this.handleTextChange}
          placeholder="Thoughts?"
          type="text"
        />
        <button type="submit">Post</button>
      </form>
    );
  }
}

CreateComment.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};
