import React from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer mt-auto py-3">
          <div className="container">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
