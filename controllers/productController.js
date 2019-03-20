const db = require("../models");

// Defining methods for the exampleController
module.exports = {
  findAll: function(req, res) {
    db.Product.find(req.query)
      .sort({ name: -1 })
      //productos es el nombre del parametro
      .then(productos => res.json(productos))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Product.findById(req.params.id)
      .then(productos => res.json(productos))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Product.create(req.body)
      .then(productos => res.json(productos))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Product.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(productos => res.json(productos))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Product.findById({ _id: req.params.id })
      .then(productos => productos.remove())
      .then(productos => res.json(productos))
      .catch(err => res.status(422).json(err));
  }
};
