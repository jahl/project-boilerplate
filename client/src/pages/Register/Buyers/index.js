import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../../utils/API";
import "./buyers.css";

class Buyers extends Component {
  

  render() {
    
    return (
      <div className="container  w-100 my-md-5 pl-md-5 my-5">
        <form
          className="form-signin"
          id="formSignUp"
          method="POST"
        >
          <h4 className="mb-3">Create una cuenta</h4>
          <br />
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="Nombre"
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Apellido"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12 mb-3">
              <input
                name="email"
                type="email"
                className="form-control"
                id="email"
                placeholder="Correo electronico"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12 mb-3">
              <input
                name="password"
                type="password"
                className="form-control"
                id="password"
                placeholder="Contrase;a"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn  btn-outline-warning my-4 py-3 h-100 btn-lg">
              Enviar
            </button>
          </div>

          <div className="text-center">
            <a className="small text-secondary">
              {" "}
              Ya tienes una cuenta?{" "}
              <Link className="text-secondary" to="/login">
                {" "}
                Ingresa
              </Link>{" "}
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Buyers;
