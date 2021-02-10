import React from "react";

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true
    }

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return <button onClick={this.handleClick}>
      {this.state.isToggleOn ? 'Включено' : 'Выключено'}
    </button>
  }
}
