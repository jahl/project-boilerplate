const router = require("express").Router();
const productRoutes = require("./product");
const supplierRoutes = require("./supplier");
const clientRoutes = require("./client");
const orderRoutes = require("./order");


//todo lo que va a mover mongo de la base de datos va aqui como ruta del get y post
// Example routes
router.use("/product", productRoutes);
router.use("/supplier", supplierRoutes);
router.use("/client", clientRoutes);
router.use("/order", orderRoutes);

module.exports = router;
