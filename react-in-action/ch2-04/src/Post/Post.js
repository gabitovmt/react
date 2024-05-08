import './Post.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <h2 id={this.props.id} className="post-author">
          {this.props.user}: <span className="post-body">{this.props.content}</span>
        </h2>
      </div>
    )
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Post;
