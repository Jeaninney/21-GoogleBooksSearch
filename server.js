const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const Book = require("./models/book");
// const Book = require("./client/models/book.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/saved-reading-list", { useNewUrlParser: true });
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./routes");
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

Book.create()
  .then(dbBook => {
    console.log(dbBook);
  })
  .catch(({ message }) => {
    console.log(message);
	});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
