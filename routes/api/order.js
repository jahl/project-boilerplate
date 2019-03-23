const router = require("express").Router();
const orderController = require("../../controllers/orderController");

// Matches with "/api/supplier"
router
  .route("/")
  .get(orderController.findAll)
  .post(orderController.create);


module.exports = router;
