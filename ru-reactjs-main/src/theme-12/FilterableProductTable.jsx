import React from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: true
    }
  }

  handleFilterTextChange = (value) => {
    this.setState({
      filterText: value
    });
  }

  handleInStockOnlyChange = (value) => {
    this.setState({
      inStockOnly: value
    });
  }

  get filteredProducts() {
    let products = this.props.products

    products = this.state.inStockOnly
      ? products.filter(product => product.stocked)
      : products;

    const filterText = this.state.filterText.toLowerCase();

    return this.state.filterText.length === 0
      ? products
      : products.filter(product => product.name.toLowerCase().includes(filterText));
  }

  render() {
    return <div>
      <SearchBar
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
        onFilterTextChange={this.handleFilterTextChange}
        onInStockOnlyChange={this.handleInStockOnlyChange}
      />
      <ProductTable products={this.filteredProducts} />
    </div>
  }
}

FilterableProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      stocked: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
