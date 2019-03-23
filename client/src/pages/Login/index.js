import React, { Component } from "react";
import API from "../utils/API";
import Store from "../utils/Store";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const email = this.state.email.trim();
    const password = this.state.password;

    if(this.areInputsValid(email, password)) {
      API.login({
        email,
        password
      }).then((response) => {
        Store.set("userData", response.data);
        this.props.history.push('/');
      });
    }
  }

  areInputsValid = (email, password) => {
    if(!email) {
      alert("Please fill out the email");
      return false;
    }

    if(!password) {
      alert("Please fill out the password");
      return false;
    }

    return true;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="container col my-5">
        <div className="col-12">
          <div className="col-12">
            <h2 className="my-5 text-dark text-center display-4 font-weight-bold">
              Login
            </h2>
          </div>
        </div>
        <div className="col-12 py-5">
          <div className="col-8">
            <form
              id="contact-form"
              className="form"
              action="#"
              method="POST"
              role="form"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={this.handleInputChange}
                  value={email}
                  placeholder="Email"
                  tabindex="2"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  onChange={this.handleInputChange}
                  value={password}
                  placeholder="Password"
                  tabindex="3"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn  btn-outline-warning my-4 py-3 h-100 btn-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
