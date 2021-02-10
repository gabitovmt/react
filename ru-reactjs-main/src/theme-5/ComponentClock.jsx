import React from "react";

export default class ComponentClock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    }

    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <div>
      <h1>Привет, мир!</h1>
      <h2>Сейчас {this.state.date.toLocaleTimeString()}</h2>
    </div>
  }
}
