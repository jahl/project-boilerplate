const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;
