const mongoose = require("mongoose");
const faker = require('faker');
const db = require("../models");

// This file empties the Example collection and inserts some test documents below
mongoose.connect(
  process.env.MONGODB_URI || 
  "mongodb://localhost/finalclassproject"
);

const SEED_AMOUNT = 50;
let exampleSeed = [];

for(let i = 0; i < SEED_AMOUNT; i++) {
  exampleSeed.push({
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraphs(3),
    data: new Date(Date.now())
  });
}

db.Example
  .remove({})
  .then(() => db.Example.collection.insertMany(exampleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
