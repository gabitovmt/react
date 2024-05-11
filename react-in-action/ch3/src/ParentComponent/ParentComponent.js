import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    console.log('ChildComponent: constructor()');
    this.state = {
      oops: false
    };
    this.oops = this.oops.bind(this);
  }

  render() {
    console.log('ChildComponent: render()');
    if (this.state.oops) {
      throw new Error('oops');
    }

    return [
      <div key="name">Name: {this.props.name}</div>,
      <button key="error" onClick={this.oops}>Create error</button>
    ];
  }

  oops() {
    this.setState(() => ({
      oops: true
    }));
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    console.log('ChildComponent : componentWillMount()');
  }

  componentDidMount() {
    console.log('ChildComponent : componentDidMount()');
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('ChildComponent : componentWillReceiveProps()');
    console.log('nextProps: ', nextProps);
    console.log('nextContext: ', nextContext);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('ChildComponent : shouldComponentUpdate()');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
    console.log('nextContext: ', nextContext);

    return true;
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('ChildComponent : componentWillUpdate()');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);
    console.log('nextContext: ', nextContext);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('ChildComponent : componentDidUpdate()');
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);
    console.log('snapshot: ', snapshot);
  }

  componentWillUnmount() {
    console.log('ChildComponent : componentWillUnmount()');
  }
}

ChildComponent.propTypes = {
  name: PropTypes.string
};
ChildComponent.defaultProps = (function () {
  console.log('ChildComponent : defaultProps');
  return {};
})();

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      error: null
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({name: e.target.value});
  }

  render() {
    console.log('ParentComponent: render');
    if (this.state.error) {
      return (
        <details style={{whiteSpace: 'pre-wrap'}}>
          {this.state.error.toString()}
          <br/>
          {this.state.errorInfo.componentStack}
        </details>
      )
    }
    return [
      <h2 key="h2">Learn about rendering and lifecycle methods!</h2>,
      <input key="input" value={this.state.name} onChange={this.onInputChange}/>,
      <ChildComponent key="ChildComponent" name={this.state.name}/>
    ];
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    console.log('ParentComponent : componentWillMount()');
  }

  componentDidMount() {
    console.log('ParentComponent : componentDidMount()');
  }

  componentWillUnmount() {
    console.log('ParentComponent : componentWillUnmount()');
  }

  componentDidCatch(error, errorInfo) {
    console.log('ParentComponent : componentDidCatch()');
    console.error(error);
    console.error(errorInfo);
    this.setState(() => ({error, errorInfo}));
  }
}

export default ParentComponent;
