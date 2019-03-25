import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Sidebar from "./../Sidebar";
import Modal from "./../Modal"
//import "./style.css";

class NavDashboard extends Component {

    render() {

        return (

            <>

                <nav className="navbar navbar-expand-lg bg-dark fixed-top" id="mainNav">
                    <div className="container">
                        <div className="nav-item">
                            <h1>
                                <Link className=" nav-link text-warning font-weight-bolder" to="/">
                                    Houdini
                  </Link>
                            </h1>

                        </div>

                        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />


                        <div className="navbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className=" nav-link js-scroll-trigger text-light" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class=" fa-lg far fa-user"></i></a>


                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                        <div className="row">
                                            <div>
                                                <a className="dropdown-item col-12 col-md-8" >Notification
                                                <i className=" col-6 col-md-4 far fa-lg fa-bell "></i>

                                                </a>
                                                <a className="dropdown-item col-12 col-md-8" >Message &nbsp;
                                                <i className="col-6 col-md-4 badge badge-warning">9</i>

                                                </a>
                                                <a className="dropdown-item col-12 col-md-8" >Configuration
                                                <i className=" col-6 col-md-4 fas fa-cogs"></i>

                                                </a>
                                            </div>
                                        </div>

                                    </div>





                                </li>

                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger text-light" data-toggle="modal" data-target="#NewProduct">
                                        <i class="fas fa-lg fa-plus"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger text-light"> <Link className="text-light" to="/contact">
                                        <i class="  fas fa-lg fa-sign-out-alt"></i>
                                    </Link></a>

                                </li>
                            </ul>
                        </div>
                    </div>



                    <div className="modal fade" id="NewProduct" tabindex="-1" role="dialog" aria-labelledby=" ModalCenterTitle" aria-hidden="true">
                        <Modal />
                    </div>





                </nav>
                <div className="m-5">
                    <Sidebar />
                </div>


            </>



        )
    }
}


export default NavDashboard;
