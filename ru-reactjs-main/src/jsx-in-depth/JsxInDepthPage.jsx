import React from 'react';
import BlueDatePicker from "./BlueDatePicker";
import RedDatePicker from "./RedDatePicker";
import Story from "./Story";
import NumberDescriber from "./NumberDescriber";
import MyComponent from "./MyComponent";
import MyTextBox from "./MyTextBox";
import {App1, App2} from "./Greeting";
import App from "./App";
import List from "./List";
import ListOfTenThings from "./ListOfTenThings";

export default class JsxInDepthPage extends React.Component {
  render() {
    return <div>
      <BlueDatePicker />
      <RedDatePicker />
      <Story storyType="photo" story="История 1" />
      <Story storyType="video" story="История 2" />
      <NumberDescriber number={1} />
      <NumberDescriber number={2} />
      <MyComponent message="&lt;3" />
      <MyComponent message={'<3'} />
      <MyTextBox autocomplete />
      <MyTextBox autocomplete={true} />
      <App1 />
      <App2 />
      <App />
      <div>
        Привет,
        мир
        !
      </div>
      <ul><List /></ul>
      <div>{'Пример'}</div>
      <ListOfTenThings />
      <div>{false}</div>
      <div>{true}</div>
      <div>{null}</div>
      <div>{undefined}</div>
      <div>{String(true)}</div>
    </div>
  }
}
