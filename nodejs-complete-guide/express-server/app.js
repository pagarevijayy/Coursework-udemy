const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')


const app = express();

app.use(bodyParser.urlencoded({extended: false})) //next() is implicitly called by that inner function.

//order of middleware matters.
app.use('/admin',adminRouter);
app.use(shopRouter);

// generic 404 error handling for route not found
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000)