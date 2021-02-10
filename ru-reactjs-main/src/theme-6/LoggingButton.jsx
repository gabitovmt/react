import React from "react";

export default class LoggingButton extends React.Component {
  // Предупреждение: это экспериментальный синтаксис
  handleClick1 = () => {
    console.log('Значение this:', this);
  }

  handleClick2() {
    console.log('Значение this:', this);
  }

  render() {
    return <div>
      <button onClick={this.handleClick1}>Нажми на меня 1</button>
      <button onClick={() => this.handleClick2()}>Нажми на меня 2</button>
    </div>
  }
}
