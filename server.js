require("dotenv").config();
const express = require("express");
const drinksController = require('./controllers/index');
const drinks = require("./models/drinks");
const app = express();
const router = express.Router(); 
app.use(express.static(__dirname + '/public'))

app.use(drinksController);

app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

// app.get("/drinks/:index", (req, res) => {
//     res.send(req.params.index);
// });

app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs");
  });

app.get("/drinks/:id", (req, res) => {
    res.render("drinks_show.ejs");
  });

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});

module.exports = router;