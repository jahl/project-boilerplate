import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class ClientDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
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
        this.setState({ clients: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getExamplesAsList = () => {
    const clients = this.state.clients;
    const listElements = clients.map((element) => {
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
    const clientList = this.getExamplesAsList();
    return (
      <div className="container">
        <h1>Clientes</h1>
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
            {clientList}
          </tbody>
        </table>
      </div>
    );
  }
}


export default ClientDashboard;
