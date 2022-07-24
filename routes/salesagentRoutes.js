const express = require('express');
const router = express.Router();
//require Mananger database to save new user 
const Sale = require('../models/Sale');


router.get('/', (req, res) => {
    res.render('agent')
});
router.get('/', (req, res) => {
    res.render('creditagent');
})
router.post('/', async (req, res) => {
    try {
        let sale = new Sale(req.body);
        await sale.save();
        console.log(req.body);
        res.redirect('/login');

    }
    catch (err) {
        res.status(400).render('login', { title: "sold goods", routeName: 'sell' })
    }

});
module.exports = router;