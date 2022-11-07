const express = require('express');
const drinks = require('../models/drinks');
const router = express.Router();


router.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", {drinks})
});

router.get("/drinks/:indexOfFruitsArray", (req, res) => {
    res.send(drinks[req.params.indexOfDrinksArray]);
});


module.exports = router;