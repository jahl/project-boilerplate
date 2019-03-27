const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  //id del producto hecho por mi p #
  nombre: { type: String, required: true },
  medida: { type: String, required: true },
  precio_unitario: { type: Number, required: true },
  fecha_agregado: { type: Date, default: Date.now },
  flete: { type: Number, required: false },
  fecha_entrega: { type: String, required: true },
  cantidad_disponible: { type: Number, required: true },
  //id del proveedor hecho por mi p #
  proveedor: {type: String, required: true}
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
