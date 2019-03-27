import React, { Component } from 'react';
import API from "./../../utils/API";
import "./form.css";


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

      <div className="container w-100 my-md-5 pl-md-5 my-5">
        <h1 className=" text-dark text-center display-5 font-weight-bold">New Product</h1>
        <br />
        <form onSubmit={this.submitExample}>

          <div className="row">

            <div className="col-md-12 mb-3">
              <input className="form-control" name="nombre"
                type="text" placeholder="Nombre del producto"
                onChange={this.handleInputChange}
                value={nombre} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" name="precio_unitario"
                type="text" placeholder="Precio Unitario"
                onChange={this.handleInputChange}
                value={precio_unitario} />
            </div>

            <div className="form-group col-md-6">
              <input
                className="form-control "
                name="flete"
                type="text"
                placeholder="Costo por Flete"
                onChange={this.handleInputChange}
                value={flete} />
            </div>
          </div>

          <div className="form-row">
            <div className=" col-md-6">
              <select className="form-control" name="medida"
                type="text" placeholder="Medida"
                onChange={this.handleInputChange}
                value={medida} placeholder="Medida" >
                <option className="text-dark"> Medida  </option >
                <option> 3 mm  </option >
                <option> 4.5 mm  </option >
                <option> 6 mm</option>
                <option> 9 mm</option>
                <option> 12 mm</option>
                <option> 15 mm</option>
                <option> 16 mm</option>
                <option> 19 mm</option>
              </select>
            </div>

            <div className="form-group col-md-6">
              <select className="form-control" name="cantidad_disponible"
                type="text" onChange={this.handleInputChange} value={cantidad_disponible} placeholder="Cantidad por pieza" >
                <option selected>Cantidad</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>

          </div>









          <div className="form-row">
            <div className="form-group col-md-6" >
              <input
                className="form-control"
                name="fecha_agregado"
                type="text"
                placeholder="Fecha de Agregado del producto"
                onChange={this.handleInputChange}
                value={fecha_agregado} />
            </div>


            <div className="form-group col-md-6">

              <input
                className="form-control"
                name="fecha_entrega"
                type="text"
                placeholder="Fecha de Entrega (dd/mm/yyyy)"
                onChange={this.handleInputChange}
                value={fecha_entrega} />
            </div>

          </div>

          <div className="text-center">
            <button type="submit" className="btn  btn-outline-dark my-4 py-3 h-100 btn-lg">Submit</button>
          </div>
        </form >

      </div >


    );
  }
}

export default ProductForm;
