import React from "react";

export default class Secret extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'top secret!',
    }
  }

  onButtonClick() {
    return () => this.setState({
      name: 'Mark'
    });
  }

  render() {
    return <div>
      <h1>My name is {this.state.name}</h1>
      <button onClick={this.onButtonClick()}>reveal the secret!</button>
    </div>
  }
}
