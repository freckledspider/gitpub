// this whole repo probably has some unnecessary coding and things in it but it WORKS

const express = require('express');
const drinks = require('../models/drinks');
const router = express.Router();


router.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", {allDrinks: drinks})
});

router.get("/drinks/:id", (req, res) => {
    res.render("drinks_show.ejs", {allDrinks: drinks[req.params.id]})
});


module.exports = router;