import React from "react";
import PropTypes from "prop-types";

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

SplitPane.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired
}

export default SplitPane;
