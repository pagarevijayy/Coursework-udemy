const cluster = require("node:cluster");

console.log("cluster:", cluster.isMaster);

if (cluster.isMaster) {
    // if file is being executed in master mode, execute it *again* but in child mode

    // here 5 instances of node server are created.
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {
    // child mode - act like a server and do nothing else.
    const express = require("express");

    const app = express();

    const doWork = (duration) => {
        const start = Date.now();
        while (Date.now() - start < duration) {}
    };

    app.get("/", (req, res) => {
        // console.log("working on request...");
        doWork(5000);
        // console.log("work done...");
        res.send("hii there, sorry i'm slow!");
    });

    app.get("/fast", (req, res) => {
        // console.log("i'm fast...");
        res.send("i'm fast");
    });

    app.listen(3000);
}
