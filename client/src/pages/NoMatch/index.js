import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <div className=" bg-light cover-container d-flex  p-3 mx-auto flex-column text-center">
        <main role="main" class="inner cover my-5 p-5">
          <h1 className=" text-warning cover-heading text-center display-1 my-2 p-5">
            Error 404
          </h1>
          <p className="lead display-4 text-dark">Page not Found :(</p>
          <Link to="/">
            <button className="btn btn-outline-warning btn-lg my-5  font-weight-bolder">
              {" "}
              Go Back{" "}
            </button>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default NoMatch;
