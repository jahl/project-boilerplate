import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  render() {
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
            >
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
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
