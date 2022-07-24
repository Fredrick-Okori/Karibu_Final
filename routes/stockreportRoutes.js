const express = require('express');
const Stock = require('../models/Stock');
const router = express.Router();

router.get('/', async (req, res) => {
    try {

        let stocks = await Stock.find();
        let totalstock = await Stock.aggregate([
            {
                '$group': {
                    _id: '$all',
                    totalstock: { $sum: '$cost' },
                    totaltonnage: {$sum: 'tonnage'}
                }
            }
        ])

        res.render('stockreport', { stocks: stocks, total: totalstock[0], title: 'Procurement lists' })
    }
    catch (err) {
        console.log(err)
        res.send('Failed to retrieve  procured produce details')
    }
});


//delete deffered payment
router.post('/delete', async (req, res) => {
    try {
        await Stock.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }

});

//Edit deffered payment 

module.exports = router;