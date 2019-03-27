import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class Buyers extends Component {
  render() {
    return (
      <div className="containers">
        <div className="right font-weight-bolder">
          <h1 className="right display-1 font-weight-bolder">Buyers</h1>

          <p className="lead my-3 text-justify text-center text-white">
            {" "}
            Get ready and use our tools, You'll get the business made anytime,
            anywhere in one place.
          </p>
        </div>

        <div className=" font-weight-bolder">
          <h1 className="display-1 font-weight-bolder" />

          <div className="col p-2 my-2 ">
            <div className="col">
            <Link to="/login">
              <button
                type="button"
                className="btn btn-outline-warning my-3 p-5 btn-lg btn-block"
              >
                Login
              </button>
              </Link>
              <Link to="/register">
                <button
                  type="button"
                  className="btn btn-outline-dark my-3 p-5 btn-lg btn-block"
                >
                  Register
                </button>
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Buyers;
