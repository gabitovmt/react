import React from "react";
import WarningBanner from "./WarningBanner";

export default class WarningPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showWarning: true
    }
  }

  handleToggleClick = () => {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return <div>
      <WarningBanner warn={this.state.showWarning} />
      <button onClick={this.handleToggleClick}>
        {this.state.showWarning ? 'Спрятать' : 'Показать'}
      </button>
    </div>
  }
}
