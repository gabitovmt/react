import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Листинг 3.4. Неизменяемые свойства компонентов React

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState(function(prevState, props) {
      return { count: prevState.count + props.incrementBy };
    });
  }

  componentDidUpdate() {
    this.props.onIncrement(this.state.count);
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onButtonClick}>++</button>
      </div>
    );
  }
}

Counter.propTypes = {
  incrementBy: PropTypes.number,
  onIncrement: PropTypes.func.isRequired
};

Counter.defaultProps = {
  incrementBy: 1
};

export default Counter;
