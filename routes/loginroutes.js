const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();
const roles = require('./role');
//require Mananger database to save new user 
const user = require('../models/User');


router.get('/', (req, res) => {
    res.render('login', { title: 'User Login' })
});



//Request the server to authenticate user to login, and respond with dashboard
router.post('/login', passport.authenticate('local', { failureRedirect: '/' }),
    (req, res) => {
        req.session.user = req.user
        const userrole = roles[req.user.role];
        if (userrole == 'manager') {
            res.redirect('/procurement')
        } else if (userrole == 'director') {
            res.redirect('/register')
        } else if (userrole == 'agent') {
            res.redirect('/sales')
        } else {
            res.redirect('/nonuser')
        }

    });
//logout route
router.get('/logout', (req, res) => {

    req.session.destroy(() => {
        res.redirect('/')
    })
})
module.exports = router;