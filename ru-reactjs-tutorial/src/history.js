import React from 'react';

export default class History extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReversed: false
    }
  }

  renderList() {
    const history = this.props.history.map((step, move) => {
      const desc = move ? `Перейти к ходу № ${move}` : 'К началу игры';

      return (
        <li
          key={move}
          className={move === this.props.stepNumber ? 'current-step' : ''}
          onClick={() => this.props.onClick(move)}
        >
          {desc}
        </li>
      )
    });

    this.state.isReversed && history.reverse();

    return history;
  }

  handleChangeReversed() {
    this.setState({
      isReversed: !this.state.isReversed,
    })
  }

  render() {
    return <div>
      <label>
        <input
          type="checkbox"
          defaultChecked={this.state.isReversed}
          onChange={() => this.handleChangeReversed()}
        />Обратный список?</label>
      <ol>{this.renderList()}</ol>
    </div>
  }
}
