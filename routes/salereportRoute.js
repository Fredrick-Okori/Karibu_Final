const express = require('express');
const mongoose = require('mongoose');
const Sale = require('../models/Sale');
const router = express.Router();

router.get('/', async (req, res) => {
    try {

        let sales = await Sale.find();
        let totalSales = await Sale.aggregate([
            {
                '$group': {
                    _id: '$all',
                    totalSales: { $sum: '$sellingprice' }
                }
            }
        ])

        res.render('salesreport', { sales: sales, total: totalSales[0], title: 'Sales Report' })
    }
    catch (err) {
        console.log(err)
        res.send('Failed to retrieve  sales report')
    }
});
//delete deffered payment
router.post('/delete', async (req, res) => {
    try {
        await Sale.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete sales item in the database");
    }

});

//Edit deffered payment 

module.exports = router;