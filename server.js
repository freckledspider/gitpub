require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});