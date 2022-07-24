const express = require('express');
const router = express.Router();
//require Mananger database to save new user 
const Stock = require('../models/Stock');


router.get('/', (req, res) => {
    res.render('procurement')
});

router.post('/', async (req, res) => {
    try {
        let stock = new Stock(req.body);
        await stock.save();
        console.lgo(req.body);
        res.redirect('/procurement')
    }
    catch (err) {
        res.status(400).render('nonuserform', { title: 'Stock', routeName: 'stock' })
    }
});
module.exports = router;