const mongoose = require('mongoose');
const creditSchema = new mongoose.Schema({

    buyername: {
        type: String,
        trim: true,
    },
    nin: {
        type: String,
        trim: true,

    },
    contact: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    producetype: {
        type: String,
        trim: true,

    },
    tonnage: {
        type: Number,
        trim: true
    },
    rate: {
        type: Number,
        trim: true,
    },
    dues: {
        type: Number,

    },
    duedate: {
        type: String,
        trim: true
    },
    dispatchdate: {
        type: String,
        trim: true,
    },
    agent: {
        type: String,
        trim: true,
    }

});

// Export Model

module.exports = mongoose.model("Credit", creditSchema);

