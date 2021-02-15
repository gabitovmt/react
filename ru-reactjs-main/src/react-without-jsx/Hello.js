import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  render () {
    return React.createElement('div', null, `Привет, ${this.props.toWhat}`);
  }
}

export function init() {
  ReactDOM.render(
    React.createElement(Hello, {toWhat: 'мир'}, null),
    document.getElementById('react-without-jsx-page')
  );
}

export function destroy() {
  const result = ReactDOM.unmountComponentAtNode(document.getElementById('react-without-jsx-page'));
  console.log(result);
}
