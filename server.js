const express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    passport = require('passport');
require('dotenv').config();
const User = require("./models/User");

// Database
const config = require('./config/database');


// Express Session
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
});
//models
// Models
//  Userlogin = require("./models/Userlogin"),

// Routes
const stockRoutes = require("./routes/stockRoutes");
const registerRoutes = require("./routes/registerroutes");
const stockreportRoutes = require("./routes/stockreportRoutes");
const loginRoutes = require("./routes/loginroutes");
const userlistroutes = require("./routes/userlistroutes");
const creditRoutes = require('./routes/creditRoutes');
const creditreport = require('./routes/creditreport');
const salereportRoute = require('./routes/salereportRoute');
const salesRoutes = require('./routes/agentRoutes');
const creditagentRoutes = require('./routes/creditagentRoutes');


// New routes
const salesagentRoutes = require('./routes/salesagentRoutes');

//Initialising server
const server = express();
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
});

// Setting view Engine.
server.set('view engine', 'pug');
server.set('views', './views');

// Express Middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));
server.use(expressSession);

//configuring passport middleware
server.use(passport.initialize());
passport.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// Routing
server.use('/', loginRoutes);
server.use('/register', registerRoutes);
server.use('/procurement', stockRoutes);
server.use('/stockreport', stockreportRoutes);
server.use('/credit', creditRoutes);
server.use('/sales', salesRoutes);
server.use('/userlist', userlistroutes);
server.use('/creditreport', creditreport);
server.use('/salesreport', salereportRoute);
server.use('/creditagent', creditagentRoutes);

//trying new routes
server.use('/sales', salesagentRoutes);
server.get('/nonuser', (req, res) => {
    res.render('nonuserform')
});


// server.use('/edit_product', produceroutes);




// Non Existing Routes and Server Port
// handling non existing routes
server.get('*', (req, res) => {
    res.send('OOPS! WRONG ADDRESS');
});

// server
server.listen(3002, () => console.log('Listening on Port 3002'));