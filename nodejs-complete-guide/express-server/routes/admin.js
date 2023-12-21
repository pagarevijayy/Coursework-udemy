const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/products", (req, res, next) => {
    res.status(200).sendFile(path.join(rootDir, "views", "products.html"));
});

router.get("/products/:id", (req, res, next) => {
    // console.log("route param", req.params.id);
    const productID = req.params.id;
    if (productID.toLowerCase() === "lead") {
        res.status(200).sendFile(path.join(rootDir, "views", "lead.html"));
    } else {
        res.status(404).send(
            `<h2>Product "${productID}" not found :( </h2> <a href="/">Go Home</a>`,
        );
    }
});

router.post("/products", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;
