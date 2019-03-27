import React, { Component } from 'react';
import { Link } from "react-router-dom";

//esta es la que falta modificar con la de chuy

class NavDashboard extends Component {
    render() {
        return (
            <div>

                <nav className="navbar fixed-top flex-md-nowrap p-0">
                
                            <a className="h1 display-5 text-dark font-weight-bolder">Houdini </a>
                            <input className="form-control form-control-dark w-50" type="text" placeholder="Search" aria-label="Search" />
                            <ul className="navbar-nav px-3">
                                <li className="nav-item text-nowrap "><a><i class=" text-dark fas fa-sign-out-alt"></i> Logout</a></li>                         
                     
                                <li className="nav-item text-nowrap "><Link className="text-dark fas fa-sign-out-alt" to="/login">Login</Link></li>
                                <li className="nav-item text-nowrap "><Link className="text-dark fas fa-sign-out-alt" to="/register">Register</Link></li>
                      
                            </ul>                                               
                </nav>


                <div className="container-fluid">
                    <div className="row">
                        
                        <nav className="col-md-2 h-100 d-none d-md-block bg-light sidebar ">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column ">
                                    <li className="nav-item ">
                                        <a className="nav-link active  text-dark" href="#">
                                            <span data-feather="home"></span>
                                            Home <span className="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    
                                    <li className="nav-item ">
                                        <a className="nav-link text-dark" href="#">
                                            <span data-feather="file"></span>
                                            Orders
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <div className="btn-group">
                                            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Products
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <button className="dropdown-item" type="button">See All</button>
                                                <button className="dropdown-item" type="button">Add A Product</button>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link text-dark" href="#">
                                            <span data-feather="users"></span>
                                            Clients
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

                    </div>
                </div>

            </div>
            
        )
    }
}


export default NavDashboard;
