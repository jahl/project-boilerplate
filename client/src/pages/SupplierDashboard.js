import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class SupplierDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suppliers: [],
      nombre_compania: "",
      direccion: "",
      estado: "",
      telefono: "",
      correo: ""
    };
  }

  componentDidMount() {
    this.loadExamples();
  }

  loadExamples = () => {
    API.getProducts()
      .then(res => {
        this.setState({ suppliers: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getExamplesAsList = () => {
    const suppliers = this.state.suppliers;
    const listElements = suppliers.map((element) => {
      return (
            <Link to={`/product/${element._id}`}>
              <tr className="table" key={element._id}>
                <td>{element.nombre_compania}</td>
                <td>{element.direccion}</td>
                <td>{element.estado}</td>
                <td>{element.telefono}</td>
                <td>{element.correo}</td>
              </tr>
          </Link>
        

      );
    });

    if (listElements.length === 0) return <h3>No Results to Display</h3>;

    return <ul>{listElements}</ul>;
  };
  render() {
    const supplierList = this.getExamplesAsList();
    return (
      <div className="container">
        <h1>Distribuidor</h1>
        <table >
          <thead>
            <tr>
              <th scope="col">Nombre de Compañia</th>
              <th scope="col">Direccion</th>
              <th scope="col">Estado</th>
              <th scope="col">Telefono</th>
              <th scope="col">Correo</th>
            </tr>
          </thead>
          <tbody >
        {supplierList}
        </tbody>
        </table>
      </div>
    );
  }
}


export default SupplierDashboard;
