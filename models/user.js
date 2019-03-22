const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const SALT_ROUNDS = 10;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

// We hash the password before saving the user to the database.
userSchema.pre('save', function(next) {
  const preHashPassword = this.password;
  const hashedPassword = bcrypt.hashSync(preHashPassword, SALT_ROUNDS);
  this.password = hashedPassword;
  next();
});

// We comapre the password provided to us with the hashed password the user defined.
userSchema.methods.login = function(password) {
  const isPasswordValid = bcrypt.compareSync(password, this.password);
  return isPasswordValid;
}

const User = mongoose.model("User", userSchema);

module.exports = User;
