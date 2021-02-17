import React from "react";
import PropTypes from "prop-types";

function Repeat(props) {
  const items = Array.from(Array(props.numTimes), (x, index) => props.children(index));

  return <div>{items}</div>;
}

Repeat.propTypes = {
  children: PropTypes.func.isRequired,
  numTimes: PropTypes.number.isRequired
}

export default function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>Это элемент списка с ключом {index}</div>}
    </Repeat>
  )
};
