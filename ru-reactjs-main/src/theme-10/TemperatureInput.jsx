import React from "react";
import PropTypes from "prop-types";

const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта'
}

export default class TemperatureInput extends React.Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  }

  render() {
    const temperature = this.props.value;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Введите температуру в градусах {scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

TemperatureInput.propTypes = {
  scale: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
