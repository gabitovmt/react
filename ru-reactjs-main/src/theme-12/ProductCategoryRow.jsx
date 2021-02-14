import React from "react";
import PropTypes from "prop-types";

function ProductCategoryRow(props) {
  return (
    <tr>
      <th colSpan="2">{props.category}</th>
    </tr>
  )
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired
}

export default ProductCategoryRow;
