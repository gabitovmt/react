import React from "react";
import PropTypes from "prop-types";

export default function Comment(props) {
  return <div className="comment">
    <h2 className="comment-author">
      {props.user} <span className="comment-content">{props.content}</span>
    </h2>
  </div>
}

Comment.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
