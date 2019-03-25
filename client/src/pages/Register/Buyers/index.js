import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./buyers.css";



class Buyers extends Component {

  render() {

    return (

      <div className="container  w-100 my-md-5 pl-md-5 my-5">

        <form className="form-signin" id="formSignUp" method="POST" >
          <h4 className="mb-3">Create account</h4>
          <br />
          <div className="row">
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" id="firstname" placeholder="First Name" ></input>

            </div>

            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" id="lastname" placeholder="Last Name" ></input>

            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12 mb-3">
              <input type="text" className="form-control" id="email" placeholder="Email" ></input>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12 mb-3">
              <input type="text" className="form-control" id="password" placeholder="Password" ></input>
            </div>
          </div>



          <div className="text-center">
            <button type="submit" className="btn  btn-outline-warning my-4 py-3 h-100 btn-lg">Submit</button>
          </div>


          <div className="text-center">
            <a className="small text-secondary"> Already have an account? <Link className="text-secondary" to="/login"> Log In</Link> </a>
          </div>



        </form>

      </div>
    )
  }



}


export default Buyers;
