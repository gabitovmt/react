import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <h2 className="comment-author">
          {this.props.user}: <span className="comment-content">{this.props.content}</span>
        </h2>
      </div>
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Comment;
