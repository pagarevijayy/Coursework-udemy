const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => { 
    // res.status(200).send('<h1>Hello from Poke Shop!</h1>');
    res.status(200).sendFile(path.join(__dirname, '..' ,'/views/shop.html'));
});

module.exports = router;