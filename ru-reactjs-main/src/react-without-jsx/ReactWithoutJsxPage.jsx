import React from "react";
import {destroy, init} from "./Hello";

export default class ReactWithoutJsxPage extends React.Component {
  componentDidMount() {
    init();
  }

  componentWillUnmount() {
    destroy();
  }

  render() {
    return (
      <div id="react-without-jsx-page"/>
    );
  }
}
