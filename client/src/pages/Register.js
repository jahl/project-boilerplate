import React, { Component } from 'react';
import { Link } from "react-router-dom";



class Register extends Component {

  render() {

    return (


      <div className="row">





        <div className="card-group flex-md-equal w-100 mh-100 inner cover" >

          <div className="card bg-warning pt-5 px-5 pt-md-5  text-center text-white col-lg-6">
            <div className="my-5 py-5">
              <label className="btn btn-outline-light btn-lg">
                <h2 className="display-5" type="radio" name="options" id="option1" checked> As Buyer</h2>
              </label>
              <br />
            </div>
          </div>
          <br />
          <div className="card bg-dark pt-5 px-5 pt-md-5 text-center text-black col-lg-6">
            <div className="my-5 p-5">

              <label className="btn btn-outline-light btn-lg">
                <h2 className="display-5" type="radio" name="options" id="option1" checked> As Suppliers</h2>
              </label>

              <br />
            </div>
          </div>
        </div>



      </div>
    )
  }



}


export default Register;
