import React from "react";

export default class EssayForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.'
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    alert('Сочинение отправлено: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Сочинение:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    )
  }
}
