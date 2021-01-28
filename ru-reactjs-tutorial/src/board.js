import React from "react";
import Square from "./square";

export default class Board extends React.Component {
  renderSquare(cellIndex) {
    const winSquare = this.props.winLine && this.props.winLine.includes(cellIndex);

    return <Square
      key={cellIndex}
      value={this.props.squares[cellIndex]}
      winSquare={winSquare}
      isSelected={cellIndex === this.props.selectedSquare}
      onClick={() => this.props.onClick(cellIndex)}
    />;
  }

  renderRow(rowIndex) {
    const cells = [0,1,2].map(colIndex => this.renderSquare(rowIndex * 3 + colIndex));

    return <div key={rowIndex} className="board-row">{cells}</div>
  }

  render() {
    const rows = [0,1,2].map(rowIndex => this.renderRow(rowIndex));

    return <div>{rows}</div>
  }
}
