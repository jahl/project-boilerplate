const db = require("../models");
const jwt = require('jsonwebtoken');
const passport = require("passport");

module.exports = {
  login: function (req, res) {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: info,
          user: user
        });
      }

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

        const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET);
        return res.json({ user, token });
      })
      .catch(err => {
        res.status(422).json(err)
      });
  }
};

