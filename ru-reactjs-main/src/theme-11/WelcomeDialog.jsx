import React from "react";
import FancyBorder from "./FancyBorder";

export default function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Добро пожаловать</h1>
      <p className="Dialog-message">Спасибо, что посетили наш космический корабль!</p>
    </FancyBorder>
  )
}
