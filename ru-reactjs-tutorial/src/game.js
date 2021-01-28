import React from "react";
import Board from "./board";
import History from "./history";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [{
        squares: Array(9).fill(null),
        selectedSquare: null,
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (this.calculateWinner(squares).winner || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat({
        squares,
        selectedSquare: i
      }),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const { history } = this.state;
    const current = history[this.state.stepNumber];
    const { winner, isPat, winLine } = this.calculateWinner(current.squares);
    const status = this.status(winner, isPat);

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winLine={winLine}
            selectedSquare={current.selectedSquare}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <History
            history={history}
            stepNumber={this.state.stepNumber}
            onClick={(move) => this.jumpTo(move)}
          />
        </div>
      </div>
    );
  }

  status(winner, isPat) {
    if (winner) {
      return 'Выиграл ' + winner;
    }

    if (isPat) {
      return 'Ничья';
    }

    return 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
  }

  calculateWinner(squares) {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const foundWinLine = winLines.find(winLine => {
      const [a, b, c] = winLine;
      return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
    }) || null;

    const winner = foundWinLine ? squares[foundWinLine[0]] : null;
    const isPat = winner ? false : squares.every(square => square !== null);

    return {
      winner,
      isPat,
      winLine: foundWinLine
    }
  }
}
