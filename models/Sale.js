const mongoose = require('mongoose');
const SaleSchema = new mongoose.Schema({

    producetype: {
        type: String,
    },
    tonnage: {
        type: Number,
        trim: true,

    },
    rate: {
        type: Number,
        trim: true,
    },
    sellingprice: {
        type: Number,
    },
    buyername: {
        type: String,
        trim: true,

    },
    date: {
        type: Date,
    },
    creditor: {
        type: String,
        trim: true,
    }

   
});

// Export Model

module.exports = mongoose.model("Sale", SaleSchema);

