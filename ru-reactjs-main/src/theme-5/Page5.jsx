import React from "react";
import ReactDOM from "react-dom";

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
    });

    this.setState({timer});
  }

  componentWillUnmount() {
    console.log('component will unmount');
    clearTimeout(this.state.timer);
    ReactDOM.unmountComponentAtNode(document.getElementById('clock-1'));
  }

  render() {
    return <section>
      <div id="clock-1"/>
    </section>
  }
}

function FuncClock(props) {
  return <div>
    <h1>Привет, мир!</h1>
    <h2>Сейчас {props.date.toLocaleTimeString()}</h2>
  </div>
}
