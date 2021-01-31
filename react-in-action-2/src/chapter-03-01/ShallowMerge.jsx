import React from "react";

export default class ShallowMerge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Mark',
        colors: {
          favorite: '',
        },
      },
    };
  }

  onButtonClick() {
    return () => this.setState({
      user: {
        colors: {
          favorite: 'blue',
        },
      },
    });
  }

  render() {
    return <div>
      <h1>My favorite color is {this.state.user.colors.favorite} and my name is {this.state.user.name}</h1>
      <button onClick={this.onButtonClick()}>show the color!</button>
    </div>
  }
}
