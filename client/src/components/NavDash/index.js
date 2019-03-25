import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Sidebar from "./../Sidebar";
//import "./style.css";

class NavDashboard extends Component {

    render() {

        return (

            <>

                <nav className="navbar navbar-expand-lg bg-warning fixed-top" id="mainNav">
                    <div className="container">
                        <div className="nav-item">
                            <h1>
                                <Link className=" nav-link text-dark font-weight-bolder" to="/">
                                    Houdini
                  </Link>
                            </h1>

                        </div>

                        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />


                        <div className="navbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger text-dark"><i class=" fa-2x far fa-user"></i></a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger text-dark">  <Link className="text-dark" to="/register">
                                        <i class="fas  fa-2x fa-plus-circle"></i>
                                    </Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger text-dark"> <Link className="text-dark" to="/contact">
                                        <i class="  fas fa-2x fa-sign-out-alt"></i>
                                    </Link></a>

                                </li>
                            </ul>
                        </div>
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
