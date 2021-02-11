import React from "react";

export default class Reservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
  }

  handleInputCharge = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Пойдут:
          <input name="isGoing" type="checkbox"
                 checked={this.state.isGoing}
                 onChange={this.handleInputCharge}
          />
        </label>
        <br />
        <label>
          Количество гостей:
          <input name="numberOfGuests" type="number"
                 value={this.state.numberOfGuests}
                 onChange={this.handleInputCharge}
          />
        </label>
      </form>
    )
  }
}
