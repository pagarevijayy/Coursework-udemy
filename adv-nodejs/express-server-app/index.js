const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hii there");
});

app.listen(3000);
