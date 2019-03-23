const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  //id del cliente hecho por mi c #
  id: {type: String, required: true },
  nombre_compania: { type: String, required: true },
  direccion: { type: String, required: true },
  estado: { type: String, required: true },
  telefono: { type: Number, required: true },
  correo: { type: String, required: true },
  sector: { type: String, required: true }
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
