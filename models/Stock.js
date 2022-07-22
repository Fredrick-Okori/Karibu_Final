const mongoose = require('mongoose'),
   StockSchema = new mongoose.Schema({
       producename: {
            type: String,
            trim: true,
        },
       producetype: {
            type: String,
            
        },
       datetime: {
            type: Date,
            
        },
       tonnage: {
           type: Number,
           trim: true,
        },
       cost: {
            type: Number,
            trim: true,
       },
       dealearname: {
           type: String,
           trim: true,
       },
       branch: {
           type: String,

       },
       contact: {
           type: String,
           trim: true,
       },
       sellingprice: {
           type: Number,
           trim: true,
       },
    });

module.exports = mongoose.model('Stock', StockSchema);