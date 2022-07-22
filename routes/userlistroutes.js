const express = require('express');
const User = require('../models/User');
const router = express.Router();


router.get('/', async (req, res) => {

    try {
        let userdetails = await User.find();
        res.render('userlist', { users: userdetails, title: 'Signed Up Users' })
    }
    catch (err) {
        console.log(err)
        res.send('Failed to retrieve user details')
        }
     
});
router.post('/delete', async (req, res) => {
    try {
        await User.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }

});

// route to view the products we have posted
router.get('/lists', async (req, res) => {
    try {
        const users = await User.find();
        res.render('viewproducts', { users: users, title: 'User Details' });
    } catch (err) {
        console.log(err);
        res.send('Failed to update user.');
    }
});


module.exports = router;