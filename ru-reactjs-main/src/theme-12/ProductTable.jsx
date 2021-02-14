import React from "react";
import PropTypes from "prop-types";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import Comparator from "./comparator";

export default class ProductTable extends React.Component {

  get sortedProducts() {
    const comparator = Comparator.comparators(
      Comparator.field('category', Comparator.string()),
      Comparator.field('name', Comparator.string())
    );

    return this.props.products.sort(comparator);
  }

  render() {
    let lastCategory = null;
    const rows = [];

    for (let product of this.sortedProducts) {
      if (product.category !== lastCategory) {
        lastCategory = product.category;

        rows.push(
          <ProductCategoryRow key={product.category} category={product.category} />
        );
      }

      rows.push(
        <ProductRow key={product.name} product={product} />
      );
    }

    return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }

  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        stocked: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }
}
