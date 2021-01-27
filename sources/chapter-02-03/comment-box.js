import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './post';
import Comment from './comment';
import CreateComment from './create-comment';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    const { comments } = this.props;

    this.state = {
      comments,
    };

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(comment) {
    const newComment = comment;
    newComment.id = Date.now();

    const { comments } = this.state;
    const newComments = comments.concat([newComment]);

    this.setState({
      comments: newComments,
    });
  }

  render() {
    const { props, state } = this;
    const { id, content, user } = props.post;

    return React.createElement(
      'div',
      { className: 'commentBox' },
      React.createElement(Post, {
        id,
        content,
        user,
      }),
      state.comments.map((comment) => React.createElement(Comment, {
        key: comment.id,
        id: comment.id,
        content: comment.content,
        user: comment.user,
      })),
      React.createElement(CreateComment, {
        onCommentSubmit: this.handleCommentSubmit,
      }),
    );
  }
}

CommentBox.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
};

CommentBox.defaultProps = {
  comments: [],
};
