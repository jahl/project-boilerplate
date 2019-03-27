import React, { Component } from 'react';
import { Link } from "react-router-dom";
//cant get to that folder
import API from "../../../utils/API"; 
import "./suppliers.css";



class Suppliers extends Component {
  
  render() {
   
    return (

      <div className="container w-100 my-md-5 pl-md-5 my-5">

        <div className="col">

          <h4 className="mb-3">Create una cuenta</h4>
          <form className="needs-validation" >
            <div className="row">
              <div className="col-md-4 mb-3">
                <input name="email" type="email" className="form-control" id="email" placeholder="Correo electronico" ></input>

              </div>
              <div className="col-md-4 mb-3">
                <input name="password" type="password" className="form-control" id="password" placeholder="Contrase;a" value="password" ></input>

              </div>

              <div className="col-md-4 mb-3">
                <input type="text" className="form-control" id="confirmpassword" placeholder="Confirma tu contrase;a" ></input>

              </div>
            </div>
          </form>

        </div>

        <div className="col order-md-1">
          <br />

          <h4 className="mb-3">Company Information</h4>
          <form className="needs-validation">
            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" class="form-control" id="namecompany" placeholder="Name Company " ></input>

              </div>
              <div className="col-md-6 mb-3">
                <input type="text" class="form-control" id="companysector" placeholder="Company Sector"></input>

              </div>


            </div>
          </form>

        </div>

        <div className="col order-md-1">
          <br />

          <h4 className="mb-3">Address Information</h4>
          <form className="needs-validation">
            <div className="row">
              <div className="col-md-3 mb-3">
                <input type="text" class="form-control" id="address1" placeholder="Address 1"></input>

              </div>
              <div className="col-md-3 mb-3">

                <input type="text" class="form-control" id="address2" placeholder="Address 2" ></input>

              </div>

              <div className="col-md-3 mb-3">
                <input type="text" class="form-control" id="country" placeholder="Country"></input>

              </div>


              <div className="col-md-3 mb-3 form-gro">
                <input type="text" class="form-control" id="state" placeholder="State" ></input>

              </div>

            </div>
          </form>

        </div>

        <br />

        <div className="text-center">
          <button type="submit" className="btn  btn-outline-dark my-4 py-3 h-100 btn-lg">Submit</button>
        </div>


        <div className="text-center">
          <a className="small text-secondary"> Already have an account? <Link className="text-secondary" to="/login"> Log In</Link> </a>
        </div>







      </div>






    )
  }



}


export default Suppliers;
