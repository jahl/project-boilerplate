const db = require("../models");

// Defining methods for the exampleController
module.exports = {
  findAll: function(req, res) {
    db.Client.find(req.query)
      .sort({ name: -1 })
      //proveedor es el nombre del parametro
      .then(cliente => res.json(cliente))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Client.findById(req.params.id)
      .then(cliente => res.json(cliente))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Client.create(req.body)
      .then(cliente => res.json(cliente))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Client.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(cliente => res.json(cliente))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Client.findById({ _id: req.params.id })
      .then(cliente => cliente.remove())
      .then(cliente => res.json(cliente))
      .catch(err => res.status(422).json(err));
  }
};
