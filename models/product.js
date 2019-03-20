const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  nombre: { type: String, required: true },
  medida: { type: String, required: true },
  precio_unitario: { type: Number, required: true },
  fecha_agregado: { type: Date, default: Date.now },
  flete: { type: Number, required: false },
  fecha_entrega: { type: String, required: true },
  cantidad_disponible: { type: Number, required: true },
  proveedor: {type: String, required: true}
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
