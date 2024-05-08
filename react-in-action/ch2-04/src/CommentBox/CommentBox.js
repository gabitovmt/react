import './CommentBox.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import Comment from '../Comment/Comment';
import CreateComment from '../CreateComment/CreateComment';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(comment) {
    const comments = this.state.comments;
    // Мы не изменяем состояние непосредственно
    comment.id = Date.now();
    const newComments = comments.concat([comment]);
    this.setState({
      comments: newComments
    });
  }

  render() {
    const post = this.props.post;

    return (
      <div className="comment-box">
        <Post
          id={post.id}
          user={post.user}
          content={post.content}
        />
        {
          this.state.comments.map(function (comment) {
            return (
              <Comment
                key={comment.id}
                id={comment.id}
                user={comment.user}
                content={comment.content}
              />
            )
          })
        }
        <CreateComment onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
}

CommentBox.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentBox;
