const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Example collection and inserts some test documents below
mongoose.connect(
  process.env.MONGODB_URI || 
  "mongodb://localhost/finalclassproject"
);

let productosSeed = [ {nombre: "Aglomerado", medida: "4.5mm", precio_unitario: 70, flete: "", fecha_entrega: "06/04/2019", cantidad_disponible: 100} , 
 {nombre: "Aglomerado", medida: "6mm", precio_unitario: 90.52,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible: 100} ,
 {nombre: "Caobilla", medida: "3mm", precio_unitario: 102.59,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  100} ,
 {nombre: "Caobilla", medida: "6mm", precio_unitario: 162.93,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  100} ,
 {nombre: "Encino", medida: "6mm", precio_unitario: 184.05,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  100} ,
 {nombre: "Encino", medida: "19mm", precio_unitario: 205.17,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Listonado de Encino", medida: "12mm", precio_unitario: 675.86,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Listonado de Encino", medida: "19mm", precio_unitario: 715.09,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "MDF", medida: "3mm", precio_unitario: 60.34,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  100} ,
 {nombre: "MDF", medida: "6mm", precio_unitario: 87.50,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  100} ,
 {nombre: "MDF", medida: "9mm", precio_unitario: 140.00,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  100} ,
 {nombre: "MDF", medida: "12mm", precio_unitario: 162.93,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "MDF", medida: "15mm", precio_unitario: 187.07,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "MDF", medida: "19mm", precio_unitario: 229.31,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "MDF Enchapado de Okume", medida: "6mm", precio_unitario: 181.03,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  100} ,
 {nombre: "MDO", medida: "16mm", precio_unitario: 676.72,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible: 50} ,
 {nombre: "MDO", medida: "19mm", precio_unitario: 585.34,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible: 50} ,
 {nombre: "Nogal", medida: "6mm", precio_unitario: 259.48,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  100} ,
 {nombre: "Nogal", medida: "12mm", precio_unitario: 684.91,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Nogal", medida: "19mm", precio_unitario: 760.34,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Okume", medida: "6mm", precio_unitario: 199.14,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  100} ,
 {nombre: "Listonado de Okume", medida: "12mm", precio_unitario: 482.76,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Listonado de Okume", medida: "16mm", precio_unitario: 494.83,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Listonado de Okume", medida: "19mm", precio_unitario: 518.97,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "OSB", medida: "12mm", precio_unitario: 168.97,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible: 50} ,
 {nombre: "Pino BD", medida: "3mm", precio_unitario: 126.12,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  100} ,
 {nombre: "Pino BD", medida: "6mm", precio_unitario: 178.02,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  100} ,
 {nombre: "Pino BD", medida: "9mm", precio_unitario: 283.62,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  100} ,
 {nombre: "Pino BD", medida: "12mm", precio_unitario: 337.93,  flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Pino BD", medida: "16mm", precio_unitario: 427.84, flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Pino BD", medida: "19mm", precio_unitario: 470.69, flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Pino CDM", medida: "9mm", precio_unitario: 268.53, flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Pino CDM", medida: "12mm", precio_unitario: 295.69, flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Pino CDM", medida: "16mm", precio_unitario: 380.17, flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Pino CDM", medida: "19mm", precio_unitario: 428.45, flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Cimbra", medida: "12mm", precio_unitario: 289.66, flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Cimbra", medida: "16mm", precio_unitario: 328.88, flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Cimbra", medida: "19mm", precio_unitario: 383.19, flete: "", fecha_entrega: "06/04/2019", cantidad_disponible:  50} ,
 {nombre: "Tzalam", medida: "6mm", precio_unitario: 313.79, flete: "", fecha_entrega: "06/04/2019", cantidad_disponible: 100} ];

//database.Product de models product.js.productos.
db.Product
  .remove({})
  .then(() => db.Product.insertMany(productosSeed))
  .then(data => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

