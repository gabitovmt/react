import React, {Component} from 'react';
import Secret from "./Secret/Secret";
import ShallowMerge from "./ShallowMerge/ShallowMerge";
import Parent from "./Parent/Parent";

const PAGE_NONE = 'NONE';
const PAGE_L3_2 = 'PAGE-LISTING-3.2';
const PAGE_L3_3 = 'PAGE-LISTING-3.3';
const PAGE_EX3_2 = 'PAGE-EX-3.2'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageId: PAGE_NONE
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState(() => ({
      pageId: event.target.value
    }));
  }

  buttons() {
    if (this.state.pageId === PAGE_NONE) {
      return (
        <>
          <button onClick={this.onClick} value={PAGE_L3_2}>Листинг 3.2. setState()</button>
          <button onClick={this.onClick} value={PAGE_L3_3}>Листинг 3.3. setState()</button>
          <button onClick={this.onClick} value={PAGE_EX3_2}>Упражнение 3.2. setState()</button>
        </>
      );
    }

    return <button onClick={this.onClick} value={PAGE_NONE}>Назад</button>;
  }

  page() {
    switch (this.state.pageId) {
      case PAGE_L3_2:
        return <Secret/>;
      case PAGE_L3_3:
        return <ShallowMerge/>;
      case PAGE_EX3_2:
        return <Parent/>;
      case PAGE_NONE:
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="App">
        <div>{this.buttons()}</div>
        <hr/>
        <div>{this.page()}</div>
      </div>
    );
  }
}

export default App;
