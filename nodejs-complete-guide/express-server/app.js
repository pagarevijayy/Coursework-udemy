const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false})) //next() is implicitly called by that inner function.

// order matters for the routes. (based on pattern matching - more specific routes at the top)
app.use('/', (req, res, next) => { 
    // console.log('this always runs.');
    next(); // allows the request to go to the next middleware.
});

app.use('/add-product', (req, res, next) => { 
    res.send(`
        <h1>Add a new product!</h1>
        <form method='POST' action='/product'>
            <input type='text' name='product'/>
            <button type='submit'>Submit</button>
        </form>
    `);
});

app.post('/product', (req, res, next) => { 
    console.log('req body:', req.body)
    res.redirect('/');
});

app.use('/', (req, res, next) => { 
    res.send('<h1>Hello from express home!</h1>');
});

app.listen(3000)