// this whole repo probably has some unnecessary coding and things in it but it WORKS

const express = require('express');
const drinks = require('../models/drinks');
const food = require('../models/food');
const router = express.Router();


router.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", {allDrinks: drinks})
});

router.get("/drinks/:id", (req, res) => {
    res.render("drinks_show.ejs", {allDrinks: drinks[req.params.id]})
});


router.get("/food/", (req, res) => {
    res.render("food_index.ejs", {allFood: food})
});

router.get("/food/:id", (req, res) => {
    res.render("food_show.ejs", {allFood: food[req.params.id]})
});


module.exports = router;