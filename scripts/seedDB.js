const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/saved-reading-list"
);

const bookSeed = [
  {
		dbid: "uKZJDwAAQBAJ",
    title: "Jurassic Park: The Deluxe Novelization (Jurassic Park)",
    author: [
			"Gail Herman"
			],
    description:
		"Dinosaurs walk the earth once again in this story of adventure and danger.",
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });