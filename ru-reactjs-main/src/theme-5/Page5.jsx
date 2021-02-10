import React from "react";
import ReactDOM from "react-dom";
import ComponentClock from "./ComponentClock";
import FuncClock from "./FuncClock";
import Clock from "./Clock";

export default class Page5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: null
    }
  }

  componentDidMount() {
    const timer = setInterval(() => {
      ReactDOM.render(
        <FuncClock date={new Date()} />,
        document.getElementById('clock-1')
      )
    }, 50);

    this.setState({timer});
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
    ReactDOM.unmountComponentAtNode(document.getElementById('clock-1'));
  }

  render() {
    return <section>
      <div id="clock-1" />
      <ComponentClock />
      <Clock />
      <Clock />
      <Clock />
    </section>
  }
}
