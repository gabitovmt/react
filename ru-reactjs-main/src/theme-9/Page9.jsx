import React from "react";
import NameForm from "./NameForm";
import EssayForm from "./EssayForm";
import FlavorForm from "./FlavorForm";
import AlphabetForm from "./AlphabetForm";
import Reservation from "./Reservation";

export default class Page9 extends React.Component {
  render() {
    return (
      <div>
        <NameForm />
        <hr />
        <EssayForm />
        <hr />
        <FlavorForm />
        <hr />
        <AlphabetForm />
        <hr />
        <Reservation />
        <hr />
        <input value="Привет" />
        <input value={null} />
      </div>
    );
  }
}
