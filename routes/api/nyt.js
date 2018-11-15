var express = require("express");
var path = require("path");

var apiRoutes = require("./apiRoutes");

var router = new express.Router();

router.use("/api", apiRoutes);

module.exports = router;