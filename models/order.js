const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  clientId: { type: Schema.Types.ObjectId, required: true },
  items: { type: Array, required: true, default: [] }
  //id producto
  //id cliente
  //id proveedor
  //cantidad a comprar
  //precio total = precio unitario * cantidad a comprar
  //fecha entrega
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
