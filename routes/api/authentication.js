const router = require("express").Router();
const authenticationController = require("../../controllers/authenticationController");

// Matches with "/api/authentication/login"
router
  .route("/login")
  .post(authenticationController.login);

// Matches with "/api/authentication/register"
router
  .route("/register")
  .post(authenticationController.register);

module.exports = router;