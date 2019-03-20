import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="containers">
        <div className="left display-1 font-weight-bolder">
          <Link to="/buyers">
            <h1 className="left display-1 font-weight-bolder">Buyers</h1>
          </Link>

          <p className="lead ">Get ready to start your bussiness</p>
        </div>

        <div className="right display-1 font-weight-bolder">
          <Link to="/suppliers">
            <h1 className="right display-1 font-weight-bolder">Suppliers</h1>
          </Link>

          <p className="lead ">Get ready to start your bussiness</p>
        </div>
      </div>
    );
  }
}

export default Home;
