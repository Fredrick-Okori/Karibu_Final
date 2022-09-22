const express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    logger = require("./logger");
require('dotenv').config();

const User = require("./models/User");

// Database
const config = require('./config/database');
const PORT = process.env.PORT || 7000;

// Express Session
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
});



// Routes
const stockRoutes = require("./routes/stockRoutes");
const registerRoutes = require("./routes/registerroutes");
const stockreportRoutes = require("./routes/stockreportRoutes");
const loginRoutes = require("./routes/loginroutes");
const userlistroutes = require("./routes/userlistroutes");
const creditRoutes = require('./routes/creditRoutes');
const creditreport = require('./routes/creditreport');
const salereportRoute = require('./routes/salereportRoute');
const salesRoutes = require('./routes/salesRoutes');
// routes are above
// const { default: logger } = require('eslint-config/dist/logger');

// const { env } = require('process');




//
// Mongoose Set up
//connect mongoose
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;
// Check connection
db.once('open', function () {
  console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function (err) {
  console.error(err);
  logger.error(err.message)
});

// server.use('/edit_product', produceroutes);




// Non Existing Routes and Server Port
// handling non existing routes
server.get('*', (req, res) => {
    res.send('OOPS! WRONG ADDRESS');
});

// server

