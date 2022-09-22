const express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    passport = require('passport');
require('dotenv').config();
const User = require("./models/User");
const logger = require("./logger");

// Database
const config = require('./config/database');


// Express Session
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
});

const port = process.env.PORT;

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
const { env } = require('process');




//Initialising server
const server = express();
const PORT =process.env.PORT ||5000
//
// Mongoose Set up
//connect mongoose

