import React, { Component } from "react";

class Products extends Component {
  render() {
    return (
      <div className="md-form">
        <i className="fa fa-user prefix grey-text " />
        <label for="name"> Product </label>
        <input type="text" id="name" className="form-control" />
      </div>
    );
  }
}

export default Products;
