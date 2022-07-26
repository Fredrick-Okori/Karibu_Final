const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
//require Mananger database to save new user 
const Stock = require('../models/Stock');


router.get('/', (req, res) => {
   
        res.render('producelist')
   
});

router.post('/', async (req, res) => {
    try {
        let stock = new Stock(req.body);
        await stock.save();
        res.redirect('producelist')
    }
    catch (err) {
        res.status(400).render('/producelist', { title: 'Stock', routeName: 'Stock' })
    }
});

router.get('/producelist', async (req, res) => {
    try {
        let stocks = await Stock.find();
        res.render('producelist', { stocks: stocks, title: 'Product list' })
    }
    catch (err) {
        console.log(err)
        res.send('Failed to retreive product details')
    }

});

//Delete product
router.post('/delete', async (req, res) => {
    try {
        await Stock.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }

});

//Get data to edit from database
// router.get('/edit/:id', function (req, res) {
//     Product.findById(req.params.id, function (err, product) {
//         res.render('edit_product', {
//             title: '',
//             produce: product
//         });
//     });
// });


// //Edit product
// router.post('/edit/:id', (req, res) => {
//     let product = {};
//     product.name = req.body.name;
//     product.price = req.body.price;
//     product.qty = req.body.price

//     let querry = { _id: req.params.id };
//     Product.update(querry, product, (err) => {
//         if (err) {
//             console.error(err);
//             return;

//         } else {
//             req.flash('success', 'Product Updated');
//             res.redirect('/list');
//         };
//     });
// });

module.exports = router;