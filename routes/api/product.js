const router = require("express").Router();
const productController = require("../../controllers/productController");

// Matches with "/api/product"
router.route("/")
  .get(productController.findAll)
  .post(productController.create);

// Matches with "/api/product/:id"
router
  .route("/:id")
  .get(productController.findById)
  .put(productController.update)
  .delete(productController.remove);

module.exports = router;
