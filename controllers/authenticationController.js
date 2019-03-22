const db = require("../models");
const jwt = require('jsonwebtoken');
const passport = require("passport");

module.exports = {
  login: function (req, res) {
    // We tell passport to run the local strategy for user login
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: info,
          user: user
        });
      }

      // After a successful login, we serialize the user into a JSON web token and send it back
      // to the client
      const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET);
      return res.json({ user, token });
    })(req, res);
  },
  register: function (req, res) {
    db.User
      .create(req.body)
      .then(user => {
        if (!user) {
          return res.status(400).json({
            message: "Something went wrong",
            user: user
          });
        }

        // After a successful register, we serialize the user into a JSON web token and send it back
        // to the client
        const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET);
        return res.json({ user, token });
      })
      .catch(err => {
        res.status(422).json(err)
      });
  }
};

