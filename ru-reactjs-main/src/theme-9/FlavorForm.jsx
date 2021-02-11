import React from "react";

export default class FlavorForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'coconut'
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    alert('Ваш любимый вкус: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Выберите ваш любимый вкус:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option value="coconut">Кокос</option>
            <option value="mango">Манго</option>
          </select>
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
