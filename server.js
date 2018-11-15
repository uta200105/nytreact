// Require dependecies
var express = require("express");
var mongoose = require("mongoose");
var dotenv = require('dotenv').config()
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");
var apiController = require('./controllers/apiController')

// Set up a default port, configure mongoose, configure middleware
var PORT = process.env.PORT || 3000;
mongoose.Promise = bluebird;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/build"));

var db = process.env.MONGODB_URI || "mongodb://localhost/nyt-react";

// Connect mongoose
mongoose.connect(db, function(error) {
  if (error) {
    console.error(error);
  }
  else {
    console.log("mongoose connection is successful");
  }
});

// enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
});

app.use("/", routes);

app.post("/api/articles", apiController.create);

app.get("/api/articles", apiController.index);

app.delete("/api/articles/:id", apiController.destroy);

// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});