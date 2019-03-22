import React from "react";
import { Link } from "react-router-dom";
import Store from "../../utils/Store";

function logOut() {
  Store.set("userData", {});
  window.location.reload();
}

function Nav() {
  const { token, user } = Store.get("userData");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="navbar-brand">React Express Example</h1>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/newexample">
            Make your own
          </Link>
        </li>
        {
          token
            ? (
              <>
                <li className="nav-item active" style={{color: "white"}}>
                  Welcome, {user.email}
                </li>
                <li className="nav-item active">
                  <button onClick={logOut}   className="btn btn-primary">
                    Logout
                  </button>
                </li>
              </>
            )
            : (
              <>
                <li className="nav-item active">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )
        }


      </ul>
    </nav>
  );
}

export default Nav;
