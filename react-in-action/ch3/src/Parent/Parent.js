import React from 'react';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mark'
    };
  }

  render() {
    // Uncomment these lines
    // this.setState(() => {
    //   return {
    //     name: 'Bob'
    //   }
    // })
    return (
      <div>
        this.state.name = {this.state.name}
      </div>
    );
  }
}

export default Parent;
