import React from "react";
import PropTypes from "prop-types";

class ProductRow extends React.Component {
  static propTypes = {
    product: PropTypes.object,
    updateProductById: PropTypes.func
  };

  static defaultProps = {
    product: {},
    updateProductById: () =>
      console.warn("No updateProductById function defined")
  };

  render() {
    const product = this.props.product;
    return (
      <tr key={product._id}>
        <td>{product.nombre}</td>
        <td>{product.medida}</td>
        <td>{product.precio_unitario}</td>
        <td>{product.fecha_agregado}</td>
        <td>{product.flete}</td>
        <td>{product.fecha_entrega}</td>
        <td>{product.cantidad_disponible}</td>
        <td>
          <input
            type="checkbox"
            id="seleccion"
            checked={product.selected}
            onClick={() => {
              this.props.updateProductById(
                product._id,
                "selected",
                !product.selected
              );
            }}
          />
        </td>
        <td>
          <input
            type="number"
            placeholder="cantidad"
            value={product.quantity}
            min="0"
            max={product.cantidad_disponible}
            onChange={event => {
              if (
                product.cantidad_disponible >= event.target.value &&
                event.target.value >= 0
              )
                this.props.updateProductById(
                  product._id,
                  "quantity",
                  event.target.value
                );
            }}
          />
        </td>
      </tr>
    );
  }
}

export default ProductRow;
