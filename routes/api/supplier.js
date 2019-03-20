const router = require("express").Router();
const supplierController = require("../../controllers/supplierController");

// Matches with "/api/supplier"
router
  .route("/")
  .get(supplierController.findAll)
  .post(supplierController.create);

// Matches with "/api/supplier/:id"
router
  .route("/:id")
  .get(supplierController.findById)
  .put(supplierController.update)
  .delete(supplierController.remove);

module.exports = router;
