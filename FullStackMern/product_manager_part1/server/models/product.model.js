// imports mongoose
const mongoose = require('mongoose');
// creates new schema
const ProductSchema = new mongoose.Schema({
    // creates object
    title: { type: String },
    price: { type: Number },
    description: { type: String }
    // object gets id, created at, and updated at
}, {timestamps: true});

// Names the object
const Product = mongoose.model('Product', ProductSchema);
// exports the object
module.exports = Product;