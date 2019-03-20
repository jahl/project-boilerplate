import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import ProductRow from "../components/ProductRow";

//product dashboard for client
class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productos: [],
      nombre: "",
      medida: "",
      precio_unitario: "",
      fecha_agregado: "",
      flete: "",
      fecha_entrega: "",
      cantidad_disponible: ""
    };
  }

  componentDidMount() {
    this.loadExamples();
  }

  loadExamples = () => {
    API.getProducts()
      .then(res => {
        const products = res.data.map((product) => {
          return {
            ...product,
            selected: false,
            quantity: 0
          };
        })
        this.setState({ productos: products });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getExamplesAsList = () => {
    const productos = this.state.productos;
    const listElements = productos.map(product => {
      return (
        <ProductRow product={product} updateProductById={this.updateProductById} />
      );
    });

    if (listElements.length === 0) return <h3>No Results to Display</h3>;

    return listElements;
  };

  updateProductById = (id, key, value) => {
    this.setState({
      productos: this.state.productos.map((producto) => {
        if(producto._id === id) {
          return {
            ...producto,
            [key]: value
          };
        }

        return producto;
      })
    });
  }

  processRequest = () => {
    const selectedProducts = this.state.productos.filter((product) => {
      return product.selected;
    });
   
    //Mandar al API los productos seleccionados
  }

  render() {
    const productosList = this.getExamplesAsList();
    return (
      <div className="container">
        <h1>Productos</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Medida</th>
              <th scope="col">Precio Unitario</th>
              <th scope="col">Fecha agregado</th>
              <th scope="col">Flete</th>
              <th scope="col">Fecha de entrega</th>
              <th scope="col">Cantidad disponible</th>
              <th scope="col">Seleccion de producto</th>
              <th scope="col">Cantidad requerida</th>
            </tr>
          </thead>
          <tbody>{productosList}</tbody>
          <button type="button" id="solicitud" onClick={this.processRequest}> Procesar solicitud de compra </button> 
          <a type="button" id="agregarProducto" href="/addproduct">Agregar un producto</a>
        </table>
      </div>
    );
  }
}

export default Products;
