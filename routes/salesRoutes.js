const express = require('express');
const router = express.Router();
//require Sale database to save new Sales 
const Sale = require('../models/Sale');


router.get('/', (req, res) => {
    res.render('sales')
});

router.post('/', async (req, res) => {
    try {
        let sale = new Sale(req.body);
        await sale.save();
        console.log(req.body);
        res.redirect('/sales');
        
    }
    catch (err) {
        res.status(400).render('sales', { title: "sold goods", routeName: 'sell' })
    }

});
module.exports = router;
