import React from "react";

export default function FormattedDate(props) {
  return <h2>Сейчас {props.date.toLocaleTimeString()}</h2>
}
