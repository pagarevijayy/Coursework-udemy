const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/version", (req, res, next) => {
    // console.log("req query", req.query.latest);

    const latest = req.query.latest?.toLowerCase();
    if (latest === "true") {
        res.status(200).send(
            `<h1>Latest version - v21</h1> </h2> <a href="/">Go Home</a>`,
        );
    } else {
        res.status(200).send(
            `<h1>Stable version - v20</h1> </h2> <a href="/">Go Home</a>`,
        );
    }
});

router.get("/", (req, res, next) => {
    // res.status(200).send('<h1>Hello from Poke Shop!</h1>');
    res.status(200).sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
