import axios from "axios";

export default {
  // Gets all examples
  getProducts: function() {
    return axios.get("/api/product");
  },
  getSuppliers: function() {
    return axios.get("/api/supplier");
  },
  getClients: function() {
    return axios.get("/api/client");
  },

  // Gets the example with the given id
  getProduct: function(id) {
    return axios.get(`/api/product/${id}`);
  },
  getSupplier: function(id) {
    return axios.get(`/api/supplier/${id}`);
  },
  getClient: function(id) {
    return axios.get(`/api/client/${id}`);
  },

  // Deletes the example with the given id
  deleteProduct: function(id) {
    return axios.delete(`/api/product/${id}`);
  },
  deleteSupplier: function(id) {
    return axios.delete(`/api/supplier/${id}`);
  },
  deleteClient: function(id) {
    return axios.delete(`/api/client/${id}`);
  },

  // Saves an example to the database, no se de donde viene el saveProduct
  saveProduct: function(productosData) {
    return axios.post("/api/product", productosData);
  },
  saveSupplier: function(supplierData) {
    return axios.post("/api/supplier", supplierData);
  },
  saveClient: function(clientData) {
    return axios.post("/api/client", clientData);
  },
  generateOrder: function(orderData) {
    return axios.post("/api/order", orderData)
  },
  register: function(registerData) {
    return axios.post("/api/authentication/register", registerData);
  },
  login: function(loginData) {
    return axios.post("/api/authentication/login", loginData);
  }
};
