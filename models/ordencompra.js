const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordenSchema = new Schema({
  nombrev : { type: String, required: true },
  direccion: { type: String, required: true },
  estado: { type: String, required: true },
  telefono: { type: Number, required: true },
  correo: { type: String, required: true },
  sector: { type: String, required: true}
});

const OrdenCompra = mongoose.model("OrdenCompra", ordenSchema);

module.exports = OrdenCompra;
