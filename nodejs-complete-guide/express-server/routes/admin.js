const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => { 
    res.status(200).send(`
        <h1>Add a new product!</h1>
        <form method='POST' action='/admin/add-product'>
            <input type='text' name='product'/>
            <button type='submit'>Submit</button>
        </form>
    `);
});

router.post('/add-product', (req, res, next) => { 
    console.log(req.body)
    res.redirect('/');
});


module.exports = router;