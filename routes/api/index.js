const router = require("express").Router();
const productRoutes = require("./product");
//todo lo que va a mover mongo de la base de datos va aqui como ruta del get y post
// Example routes
router.use("/product", productRoutes);

module.exports = router;
