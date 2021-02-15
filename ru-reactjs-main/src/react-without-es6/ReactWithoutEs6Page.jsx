import React from "react";

var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Привет, {this.props.name}!</h1>;
  },

  getDefaultProps: function() {
    return {
      name: 'Василиса'
    }
  }
});

var SayHello = createReactClass({
  getInitialState: function() {
    return {message: 'Привет!'};
  },

  handleClick: function() {
    alert(this.state.message);
  },

  render: function() {
    return (
      <button onClick={this.handleClick}>
        Поздороваться
      </button>
    );
  }
});

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },

  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },

  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
}

var TickTock = createReactClass({
  mixins: [SetIntervalMixin],

  getInitialState: function() {
    return { seconds: 0 };
  },

  componentDidMount: function() {
    this.setInterval(this.tick, 1000);
  },

  tick: function() {
    this.setState(function (state) {
      return {
        seconds: state.seconds + 1
      }
    });
  },

  render: function() {
    return (
      <p>
        React был выполнен за {this.state.seconds} секунд.
      </p>
    );
  }
});

export default class ReactWithoutEs6Page extends React.Component {
  render() {
    return <div>
      <Greeting />
      <hr />
      <Greeting name="Мир"/>
      <hr />
      <SayHello />
      <hr />
      <TickTock />
    </div>
  }
}
