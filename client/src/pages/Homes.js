import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="d-md-flex flex-md-equal h-100 w-100">
        <div className="bg-warning pt-5 h-100 pt-md-5 text-center text-light col-lg-6">
          <div className="my-5 py-5">
            <h2 className=" my-5 py-5 display-1 font-weight-bolder">Buyers</h2>
            <button type="button" class="btn btn-light btn-lg">
              Click Here
            </button>
            <p className="lead my-5 py-5">Get ready to start your business</p>
          </div>
          <div className="bg-light shadow-sm mx-auto" />
        </div>
        <div className="bg-dark pt-5 h-100 pt-md-5 text-center text-warning col-lg-6">
          <div className="my-5 p-5">
            <h2 className="my-5 py-5 display-1 font-weight-bolder">
              Suppliers
            </h2>
            <button type="button" class="btn btn-light btn-lg">
              Click Here
            </button>
            <p className="lead my-5 py-5 ">Reach your client easily.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
