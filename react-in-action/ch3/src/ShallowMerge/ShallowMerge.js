import React, {Component} from 'react';

class ShallowMerge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Mark',
        colors: {
          favorite: ''
        }
      }
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({
      user: {
        colors: {
          favorite: 'blue'
        }
      }
    });
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.user.colors.favorite} and my name is {this.state.user.name}</h1>
        <button onClick={this.onButtonClick}>show the color!</button>
      </div>
    );
  }
}

export default ShallowMerge;
