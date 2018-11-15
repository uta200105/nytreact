var express = require("express");

var apiController = require("../controllers/apiController");

var router = new express.Router();

// Get all quotes (or optionally a specific quote with an id)
// router.get("/quotes/:id?", quotesController.index);
// Create a new quote using data passed in req.body
router.post("/articles/", apiController.create);
// Update an existing quote with a speicified id param, using data in req.body
// router.patch("/quotes/:id", quotesController.update);
// Delete a specific quote using the id in req.params.id
// router.delete("/quotes/:id", quotesController.destroy);

module.exports = router;