import React from "react";

export default class AlphabetForm extends React.Component {
  constructor(props) {
    super(props);

    this.letters = ['a','b','c','d','e'];
    this.state = {
      value: []
    }
  }

  handleChange = (event) => {
    const value = Array.from(event.target.selectedOptions, option => option.value);
    this.setState({ value });
  }

  handleSubmit = (event) => {
    alert('Выбранные буквы: ' + this.state.value.join());
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Выберите буквы. Можно выбрать несколько:
          <select value={this.state.value} multiple={true} size={this.letters.length} onChange={this.handleChange}>
            {this.letters.map(letter =>
              <option key={letter} value={letter}>{letter}</option>
            )}
          </select>
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
