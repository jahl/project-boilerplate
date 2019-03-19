import React, { Component } from 'react';
import Suppliers from "./Suppliers";
import Buyers from "./Buyers";
import "./style.css";



class Register extends Component {

    render() {

        return (

            <div>







                <div className="col-12 mt-5">

                    <div className="col-12 ">
                        <h5 className=" text-dark text-center display-4 font-weight-bold">Register</h5>
                        <p className="lead text-center">Fill all the information below.</p>


                        <ul className="nav nav-pills " id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active text-dark" id="pills-buyers-tab" data-toggle="pill" href="#pills-buyers" role="tab" aria-controls="pills-buyers" aria-selected="true">As Buyer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" id="pills-suppliers-tab" data-toggle="pill" href="#pills-suppliers" role="tab" aria-controls="pills-suppliers" aria-selected="false">As a Suppliers</a>
                            </li>

                        </ul>
                    </div>

                </div>



                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-buyers" role="tabpanel" aria-labelledby="pills-buyers-tab"><Buyers></Buyers></div>
                    <div className="tab-pane fade" id="pills-suppliers" role="tabpanel" aria-labelledby="pills-suppliers-tab">
                        <Suppliers></Suppliers></div>
                </div>


















            </div>




        )
    }



}


export default Register;
