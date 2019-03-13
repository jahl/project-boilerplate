import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <div className="pos-f-t bg-white">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="p-1">
          <div className="row">
            <div className="col-md-4">
              <div className="col-md-4 offset-md-1 py-4">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="col-md-4 offset-md-1 py-4">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/buyers">
                      Buyers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/suppliers">
                      Suppliers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/contact" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="col-md-4 offset-md-1 py-4">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/register">
                      Register
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="nav-masthead">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-2x fa-bars text-warning" />
        </button>

        <span class="h1 display-5 text-warning font-weight-bolder">
          Houdini
        </span>
      </nav>
    </div>
  );
}

export default Nav;
