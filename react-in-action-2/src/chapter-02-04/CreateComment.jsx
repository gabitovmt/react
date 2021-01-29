import React from "react";
import PropTypes from "prop-types";

export default class CreateComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      content: '',
    }
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

    this.props.onCommentSubmit({
      user: this.state.user.trim(),
      content: this.state.content.trim(),
    });

    this.setState(() => ({
      user: '',
      content: '',
    }));
  }

  render() {
    return (
      <form
        className="create-comment"
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <input
          value={this.state.user}
          onChange={(event) => this.handlerUserChange(event)}
          placeholder="Your name"
          type="text"
        />
        <input
          value={this.state.content}
          onChange={(event) => this.handleTextChange(event)}
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
