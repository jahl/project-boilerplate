const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
  nombre_compania: { type: String, required: true },
  direccion: { type: String, required: true },
  estado: {type: String, required: true},
  telefono: { type: Number, required: true },
  correo: { type: String, required: true }
  
});

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
