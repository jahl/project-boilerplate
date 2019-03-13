import axios from "axios";

export default {
  // Gets all examples
  getProducts: function() {
    return axios.get("/api/product");
  },
  // Gets the example with the given id
  getProduct: function(id) {
    return axios.get(`/api/product/${id}` );
  },
  // Deletes the example with the given id
  deleteProduct: function(id) {
    return axios.delete(`/api/product/${id}`);
  },
  // Saves an example to the database, no se de donde viene el saveProduct
  saveProduct: function(productosData) {
    return axios.post("/api/product", productosData);
  }
};
