const express = require('express');

const app = express();

// order matters for the routes. (based on pattern matching - more specific routes at the top)
app.use('/', (req, res, next) => { 
    console.log('this always runs.');
    next(); // allows the request to go to the next middleware.
});


app.use('/add-product', (req, res, next) => { 
    res.send('<h1>New product added.</h1>');
});

app.use('/', (req, res, next) => { 
    res.send('<h1>Hello from express home!</h1>');
});

app.listen(3000)