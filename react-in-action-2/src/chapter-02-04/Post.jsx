import React from "react";
import * as PropTypes from "prop-types";

export default function Post({id, user, content, children}) {
  return <div className="post">
    <h2 id={id} className="post-author">
      {user} <span className="post-body">{content}</span>
      {children}
    </h2>
  </div>
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
