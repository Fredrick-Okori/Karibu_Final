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
        res.redirect('/procurement');
       
    }
    catch (err) {
        res.status(400).render('credit', { title: 'Credit', routeName: 'credits' })
    }
});
module.exports = router;