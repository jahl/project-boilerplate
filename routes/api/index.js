const router = require("express").Router();
const exampleRoutes = require("./example");
const authenticationRoutes = require("./authentication");

// Example routes
router.use("/example", exampleRoutes);
router.use("/authentication", authenticationRoutes);

module.exports = router;
