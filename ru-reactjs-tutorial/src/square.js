import React from "react";

export default function Square(props) {
  const classes = ['square'];
  props.winSquare && classes.push('win-square');
  props.isSelected && classes.push('selected');

  return (
    <button
      className={classes.join(' ')}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
