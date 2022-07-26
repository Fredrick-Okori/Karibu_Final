const express = require('express');
const router = express.Router();
//require Mananger database to save new user 
const Credit = require('../models/Credit');


router.get('/', (req, res) => {
    
        res.render('credit')
   
});

router.post('/', async (req, res) => {
    try {
        let credit = new Credit(req.body);
        await credit.save();
        res.redirect('/credit')
    }
    catch (err) {
        res.status(400).render('credit', { title: 'Credit', routeName: 'credits' })
    }
});
module.exports = router;