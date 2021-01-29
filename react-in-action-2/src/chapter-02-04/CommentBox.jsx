import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments
    }
  }

  handleCommentSubmit(comment) {
    comment.id = Date.now();

    const comments = this.state.comments.concat([comment]);
    this.setState({
      comments
    });
  }

  render() {
    const {post} = this.props;

    return <div className="comment-box">
      <Post
        id={post.id}
        user={post.user}
        content={post.content}
      />
      {this.state.comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            id={comment.id}
            user={comment.user}
            content={comment.content}
            />
        )
      })}
      <CreateComment
        onCommentSubmit={(comment) => this.handleCommentSubmit(comment)}
      />
    </div>
  }
}

CommentBox.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ),
};

CommentBox.defaultProps = {
  comments: [],
};
