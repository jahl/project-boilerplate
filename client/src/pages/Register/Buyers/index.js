import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Store from "../utils/Store";
import "./buyers.css";

class Buyers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const email = this.state.email.trim();
    const password = this.state.password;

    if (this.areInputsValid(email, password)) {
      API.register({
        email,
        password
      }).then(response => {
        Store.set("userData", response.data);
        this.props.history.push("/");
      });
    }
  };

  areInputsValid = (email, password) => {
    if (!email) {
      alert("Please fill out the email");
      return false;
    }

    if (!password) {
      alert("Please fill out the password");
      return false;
    }

    return true;
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container  w-100 my-md-5 pl-md-5 my-5">
        <form
          className="form-signin"
          id="formSignUp"
          method="POST"
          onSubmit={this.handleSubmit}
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
                value={email}
                onChange={this.handleInputChange}
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
                value={password}
                onChange={this.handleInputChange}
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
