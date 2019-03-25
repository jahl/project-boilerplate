import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import "./style.css";




class Sidebar extends Component {

    render() {

        return (
            <>


                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active text-dark">


                                    &nbsp; Dashboard  &nbsp;
                                    <i className=" ml-3 fas fa-lg  fa-tachometer-alt"></i>

                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">
                                    &nbsp; Orders    &nbsp;
                                    <i className=" ml-5 far fa-lg fa-clipboard"></i>

                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">

                                    &nbsp; Products  &nbsp;

                                     <i className=" ml-4 fas fa-lg fa-caret-down"></i>



                                </a>

                                <div className="collapse" id="collapseExample">

                                    <li className="nav-item">
                                        <a className="nav-link text-secondary">
                                            See All
                    </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link text-secondary">
                                            Add New Product
                    </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link text-secondary">
                                            Edit
                    </a>
                                    </li>





                                </div>




                            </li>











                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">
                                    <span data-feather="users"></span>
                                    Customers
                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">
                                    <span data-feather="bar-chart-2"></span>
                                    Reports
                    </a>
                            </li>

                        </ul>



                    </div>
                </nav>


            </>

        )
    }



}


export default Sidebar;


