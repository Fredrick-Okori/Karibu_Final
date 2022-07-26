const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    
        res.render('procurement');
    
});


router.post('/delete', async (req, res) => {
    try {
        await User.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }

});

module.exports = router;