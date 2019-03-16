const db = require("../models"); 

// Defining methods for the exampleController
module.exports = {
  findAll: function(req, res) {
    db.Supplier
      .find(req.query)
      .sort({ name: -1 })
      //proveedor es el nombre del parametro 
      .then(proveedor => res.json(proveedor))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Supplier
      .findById(req.params.id)
      .then(proveedor => res.json(proveedor))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Supplier
      .create(req.body)
      .then(proveedor => res.json(proveedor))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Supplier
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(proveedor => res.json(proveedor))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Supplier
      .findById({ _id: req.params.id })
      .then(proveedor => proveedor.remove())
      .then(proveedor => res.json(proveedor))
      .catch(err => res.status(422).json(err));
  }
};
