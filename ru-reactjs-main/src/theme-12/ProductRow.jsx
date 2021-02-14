import React from "react";
import PropTypes from "prop-types";

function ProductRow(props) {
  const product = props.product;

  return (
    <tr>
      <td>
        {product.stocked
          ? <span style={{color: 'red'}}>{product.name}</span>
          : product.name
        }
      </td>
      <td>{product.price}</td>
    </tr>
  )
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default ProductRow;
