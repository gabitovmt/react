import React from "react";
import ActionLink from "./ActionLink";
import Toggle from "./Toggle";
import LoggingButton from "./LoggingButton";
import Arguments from "./Arguments";

export default class Page6 extends React.Component {
  activateLasers() {
    alert('Лазеры активированы');
  }

  render() {
    const activateLasers = this.activateLasers;

    return <div>
      <div><button onClick={activateLasers}>Активировать лазеры</button></div>
      <div><ActionLink /></div>
      <Toggle />
      <LoggingButton />
      <Arguments />
    </div>
  }
}
