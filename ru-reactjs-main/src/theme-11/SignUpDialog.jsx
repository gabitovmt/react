import React from "react";
import Dialog from "./Dialog";

export default class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: ''
    }
  }

  render() {
    return (
      <Dialog title="Программа исследования Марса" message="Как к вам обращаться?">
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Запишите меня!</button>
      </Dialog>
    )
  }

  handleChange = (e) => {
    this.setState({
      login: e.target.value
    });
  }

  handleSignUp = () => {
    alert(`Добро пожаловать на борт, ${this.state.login}!`);
  }
}
