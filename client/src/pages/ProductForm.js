import React, { Component } from 'react';
import API from "../utils/API";

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      medida: "",
      precio_unitario: "",
      fecha_agregado: "",
      flete: "",
      fecha_entrega: "",
      cantidad_disponible: ""
    };
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  submitExample = (event) => {
    event.preventDefault();

    const nombre = this.state.nombre.trim();
    const medida = this.state.medida.trim();
    const precio_unitario = this.state.precio_unitario.trim();
    const fecha_agregado = this.state.fecha_agregado.trim();
    const flete = this.state.flete.trim();
    const fecha_entrega = this.state.fecha_entrega.trim();
    const cantidad_disponible = this.state.cantidad_disponible.trim();

      API.saveProduct(this.state).then(() => {
        this.props.history.push('/');
      });
  }


  render() {
    const nombre = this.state.nombre;
    const medida = this.state.medida;
    const precio_unitario = this.state.precio_unitario;
    const fecha_agregado = this.state.fecha_agregado;
    const flete = this.state.flete;
    const fecha_entrega = this.state.fecha_entrega;
    const cantidad_disponible = this.state.cantidad_disponible;
    
    return (
      <form className="container" onSubmit={this.submitExample}>
        <h1>Crea un producto nuevo</h1>
        
        <div className="form-group">
          <label
            htmlFor="title">
            Nombre del Producto:
          </label>
          <input
            className="form-control" 
            name="nombre" 
            type="text"
            placeholder="nombre del producto"
            onChange={this.handleInputChange} 
            value={nombre} />
        </div>

        <div className="form-group">
          <label
            htmlFor="title">
            Medida en milimetros:
          </label>
          <input
            className="form-control" 
            name="medida" 
            type="text"
            placeholder="medida del producto en mm"
            onChange={this.handleInputChange} 
            value={medida} />
        </div>

        <div className="form-group">
          <label
            htmlFor="title">
            Precio unitario:
          </label>
          <input
            className="form-control" 
            name="precio_unitario" 
            type="text"
            placeholder="precio del producto"
            onChange={this.handleInputChange} 
            value={precio_unitario} />
        </div>

        <div className="form-group">
          <label
            htmlFor="title">
            Fecha agregado del producto:
          </label>
          <input
            className="form-control" 
            name="fecha_agregado" 
            type="text"
            placeholder="fecha agregado del producto"
            onChange={this.handleInputChange} 
            value={fecha_agregado} />
        </div>

        <div className="form-group">
          <label
            htmlFor="title">
            Costo por flete:
          </label>
          <input
            className="form-control" 
            name="flete" 
            type="text"
            placeholder="costo por flete"
            onChange={this.handleInputChange} 
            value={flete} />
        </div>

        <div className="form-group">
          <label
            htmlFor="title">
            Fecha de entrega del producto:
          </label>
          <input
            className="form-control" 
            name="fecha_entrega" 
            type="text"
            placeholder="dd/mm/yyyy"
            onChange={this.handleInputChange} 
            value={fecha_entrega} />
        </div>
        
        <div className="form-group">
          <label
            htmlFor="title">
            Cantidad disponible:
          </label>
          <input
            className="form-control" 
            name="cantidad_disponible" 
            type="text"
            placeholder="cantidad de producto por pieza"
            onChange={this.handleInputChange} 
            value={cantidad_disponible} />
        </div>

        <button 
          className="btn btn-primary"
          type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default ProductForm;
