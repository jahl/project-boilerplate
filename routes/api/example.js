const router = require("express").Router();
const exampleController = require("../../controllers/exampleController");

// Matches with "/api/example"
router.route("/")
  .get(exampleController.findAll)
  .post(exampleController.create);

// Matches with "/api/example/:id"
router
  .route("/:id")
  .get(exampleController.findById)
  .put(exampleController.update)
  .delete(exampleController.remove);

module.exports = router;
