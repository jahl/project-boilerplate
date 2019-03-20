import React, { Component } from "react";
import "./contact.css";
//import { Link } from "react-router-dom";

class Contacto extends Component {
  render() {
    return (
      <div className="container w-100 col-12 my-5">
        <div className="col-12">
          <div className="col-12">
            <h5 className="my-5 text-dark text-center display-4 font-weight-bold">
              Contact
            </h5>
          </div>
        </div>
        <div className="col py-5">
          <div className="col-12">
            <form
              id="contact-form"
              className="form"
              action="#"
              method="POST"
              role="form"
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  tabindex="1"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  tabindex="2"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  tabindex="3"
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="5"
                  cols="50"
                  name="message"
                  className="form-control"
                  id="message"
                  placeholder="Message..."
                  tabindex="4"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn  btn-outline-warning my-4 py-3 h-100 btn-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacto;
