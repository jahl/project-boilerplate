import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <div className="container  w-50 my-md-5 pl-md-5 my-5">
        <br />
        <form className="form-signin" id="formSignUp" method="POST">
          <h5 className="text-dark text-center display-4 font-weight-bold mb-3">
            Log In
          </h5>
          <br />

          <div className="row">
            <div className="col-md-12 mb-3">
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12 mb-3">
              <input
                type="text"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn  btn-outline-dark my-4 py-3 h-100 btn-lg"
            >
              Submit
            </button>
          </div>

          <div className="text-center">
            <a className="small text-secondary">
              {" "}
              Don't have an account yet?{" "}
              <Link className="text-secondary" to="/register">
                {" "}
                Register
              </Link>{" "}
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
