import React from "react";
import PropTypes from "prop-types";

export default class SearchBar extends React.Component {

  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value)
  }

  handleInStockOnlyChange = (e) => {
    this.props.onInStockOnlyChange(e.target.checked);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <label>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockOnlyChange}
            />
            Only show products in stock
          </label>
        </p>
      </form>
    )
  }
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  onFilterTextChange: PropTypes.func.isRequired,
  onInStockOnlyChange: PropTypes.func.isRequired
}

