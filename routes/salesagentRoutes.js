const express = require('express');
const router = express.Router();
//require Sale database to save new Sales 
const Sale = require('../models/Sale');


router.get('/', (req, res) => {
    res.render('agent')
});

router.post('/', async (req, res) => {
    try {
        let sale = new Sale(req.body);
        await sale.save();
        res.redirect('/agent');
        console.log(req.body);
    }
    catch (err) {
        res.status(400).redirect('/agent')
        console.log('Not successful')
    }

});

module.exports = router;
