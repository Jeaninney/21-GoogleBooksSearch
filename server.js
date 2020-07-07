const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds149875.mlab.com:49875/heroku_8tpwhv0d", { useNewUrlParser: true });
const PORT = process.env.PORT || 3001;
const app = express();

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });
// const PORT = process.env.PORT || 3001;
// const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
