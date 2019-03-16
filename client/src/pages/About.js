import React, { Component } from 'react';
import { Link } from "react-router-dom";

//import Nav from "./components/Nav";
//import Footer from "./components/Footer";


class About extends Component {

  render() {

    return (

      <div>



        <div className="position-relative overflow-hidden p-5 p-md-5  text-center bg-warning">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-bold p-2">About</h1>

            <p className="lead font-weight-normal text-justify"> We make business easy and possible anywhere. We do this by offering the necessary tools that help reach a global audience about the product.</p>

          </div>

        </div>






        <div className="container ">
          <div class="row">

            <div class="col-6 p-5">

              <button type="button" class="btn btn-outline-warning h-100 btn-lg btn-block">Shoppers</button>
              <br />

              <p className=" text-sm-justify text-secondary">You wanna buy products to start your bussiness?</p>

            </div>


            <div className="col-6 p-5">

              <button type="button" class="btn btn-outline-dark h-100 btn-lg btn-block">Buyers</button>
              <br />
              <p className=" text-sm-justify text-secondary">Are you interested in reach a global audience?</p>

            </div>





          </div>


        </div>






      </div>



    )
  }



}


export default About;
