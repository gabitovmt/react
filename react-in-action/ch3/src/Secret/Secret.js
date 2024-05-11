import React, {Component} from 'react';

// Листинг 3.2. Использование setState для изменения состояния компонента

class Secret extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'top secret!'
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState(() => ({
      name: 'Mark'
    }));
  }

  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <button onClick={this.onButtonClick}>reveal the secret!</button>
      </div>
    );
  }
}

export default Secret;
