
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(new LocalStrategy({
  usernameField: "email",
  passwordField: "password"
},
  function (email, password, cb) {
    return db.User.findOne({ email })
      .then(user => {
        if (!user || !user.login(password)) {
          return cb(null, false, { message: "Incorrect email or password." });
        }
        return cb(null, user, { message: "Logged In Successfully" });
      })
      .catch(err => cb(err));
  }
));
