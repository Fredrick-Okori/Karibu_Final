const mongoose = require('mongoose');
const saleSchema = new mongoose.Schema({

    producetype: {
        type: String,
        trim: true,
    },
    tonnage: {
        type: Number,
        trim: true,
    },
    rate: {
        type: Number,  
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
module.exports = mongoose.model("Sales", saleSchema);

