import React from "react";

export default function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('По ссылке кликнули.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Нажми на меня
    </a>
  );
}
