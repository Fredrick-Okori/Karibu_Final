const express = require('express');
const Credit = require('../models/Credit');
const router = express.Router();

router.get('/', async (req, res) => {
    try {

        let credits = await Credit.find();
        let totalCredit = await Credit.aggregate([
            {
                '$group': {
                    _id: '$all',
                    totalCredit: {$sum: '$dues'}
                }
            }
        ])

        res.render('creditreport', { credits: credits, total:totalCredit[0], title: 'Deffered payment lists' })
    }
    catch (err) {
        console.log(err)
        res.send('Failed to retrieve  Deffered payment details')
    }
});



//delete deffered payment
router.post('/delete', async (req, res) => {
    try {
        await Credit.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }

});

//Edit deffered payment 

module.exports = router;