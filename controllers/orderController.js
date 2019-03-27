const db = require("../models");

// Defining methods for the exampleController
module.exports = {
  findAll: function(req, res) {
    db.Order.find(req.query)
      //proveedor es el nombre del parametro
      .then(orders => res.json(orders))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Order.create(req.body)
      .then(order => res.json(order))
      .catch(err => res.status(422).json(err));
  }
};
