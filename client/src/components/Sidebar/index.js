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
                                    <span data-feather="home"></span>
                                    Dashboard
                                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">
                                    <span data-feather="file"></span>
                                    Orders
                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">
                                    <span data-feather="shopping-cart"></span>
                                    Products
                    </a>
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

                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Products</span>
                            <a className="d-flex align-items-center text-muted" href="#">
                            </a>
                        </h6>
                        <ul className="nav flex-column mb-2">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">
                                    <span data-feather="file-text"></span>
                                    See All Products
                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">
                                    <span data-feather="file-text"></span>
                                    Add New Product
                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">
                                    <span data-feather="file-text"></span>
                                    Edit New Product
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


