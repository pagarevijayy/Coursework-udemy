const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
    // res.status(200).send('<h1>Hello from Poke Shop!</h1>');
    res.status(200).sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
