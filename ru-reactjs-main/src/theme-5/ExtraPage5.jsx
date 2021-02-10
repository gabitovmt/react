import React from "react";
import FormattedDate from "./FormattedDate";

export default class ExtraPage5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <div>
      <FormattedDate date={this.state.date} />
      <FormattedDate date={this.state.date} />
      <FormattedDate date={this.state.date} />
    </div>
  }
}
