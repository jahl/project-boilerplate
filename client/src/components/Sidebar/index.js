import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
                                    <Link className=" nav-link font-weight-bolder" to="/dashboard">
                                        &nbsp; Dashboard  &nbsp;
                                    <i className=" ml-3 fas fa-lg  fa-tachometer-alt"></i>
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark">
                                    <Link className=" nav-link font-weight-bolder" to="/productdashboard">
                                        &nbsp; Orders    &nbsp;
                                    <i className=" ml-5 far fa-lg fa-clipboard"></i>
                                    </Link>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link  font-weight-bolder text-dark" data-toggle="collapse" href="#collapse0" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    &nbsp; Products  &nbsp;
                                     <i className=" ml-4 fas fa-lg fa-caret-down"></i>
                                </a>

                                <div className="collapse" id="collapse0">
                                    <li className="nav-item">
                                        <Link className=" nav-link " to="/productdashboard">
                                            <a className="nav-link text-secondary">
                                                See All
                                      </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/newproduct">
                                            <a className="nav-link text-secondary">
                                                Add New Product
                                             </a>
                                        </Link>
                                    </li>
                                </div>
                            </li>




                            <li className="nav-item">
                                <a className="nav-link text-dark font-weight-bolder" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    &nbsp; Customers  &nbsp;
                                   <i className=" ml-4 fas fa-lg fa-caret-down"></i>
                                </a>

                                <div className="collapse" id="collapse1">
                                    <li className="nav-item">
                                        <Link className=" nav-link font-weight-bolder" to="/clientdashboard">
                                            <a className="nav-link text-secondary">
                                                See All
                                      </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className=" nav-link font-weight-bolder" to="/search">
                                            <a className="nav-link text-secondary">
                                                Search
                    </a>
                                        </Link>

                                    </li>
                                </div>
                            </li>

                        </ul>



                    </div>
                </nav>


            </>

        )
    }



}


export default Sidebar;


