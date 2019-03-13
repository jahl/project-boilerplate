import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Home extends Component {
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
        this.setState({ productos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getExamplesAsList = () => {
    const productos = this.state.productos;
    const listElements = productos.map((element) => {
      return (
        <li key={element._id}>
          <Link to={`/product/${element._id}`}>
            <p>
              {element.nombre}
              {element.medida}
              {element.precio_unitario}
              {element.fecha_agregado}
              {element.flete}
              {element.fecha_entrega}
              {element.cantidad_disponible}
            </p>
          </Link>
        </li>
      );
    });

    if (listElements.length === 0) return <h3>No Results to Display</h3>;

    return <ul>{listElements}</ul>;
  };

  render() {
    const productosList = this.getExamplesAsList();
    return (
      <div className="container">
        <h1>Product</h1>
        {productosList}
      </div>
    );
  }
}

export default Home;
