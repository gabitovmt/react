import React from "react";
import Greeting from "./Greeting";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    const button = this.state.isLoggedIn
      ? <LogoutButton onClick={this.handleLogoutClick} />
      : <LoginButton onClick={this.handleLoginClick} />

    return <div>
      <Greeting isLoggedIn={this.state.isLoggedIn} />
      {button}
      <p>Пользователь <b>{this.state.isLoggedIn ? 'сейчас' : 'не'}</b> на сайте</p>
    </div>
  }
}
