const router = require("express").Router();
const exampleRoutes = require("./example");

// Example routes
router.use("/example", exampleRoutes);

module.exports = router;
