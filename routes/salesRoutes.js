const express = require('express');
const router = express.Router();
//require Sale database to save new Sales 
const Sale = require('../models/Sale');

router.get('/', (req, res) => {
    res.render('sales')
});

router.post('/', async (req, res) => {
    try {
        const sale = new Sale(req.body);
        await sale.save();
        res.redirect('/sales');
        console.log(req.body);
    }
    catch (err) {
        res.status(400).redirect('/sales')
        console.log("Sales Post not successful")
    }

});

module.exports = router;
