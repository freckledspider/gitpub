require("dotenv").config();
const express = require("express");
const drinksController = require('./controllers/index');
const app = express();
app.use(express.static(__dirname + '/public'))

app.use(drinksController);

app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

app.get("/drinks/:id", (req, res) => {
    res.send(req.params.id);
});

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});
