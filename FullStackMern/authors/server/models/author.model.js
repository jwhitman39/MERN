// imports mongoose
const mongoose = require('mongoose');
// creates new schema
const AuthorSchema = new mongoose.Schema({
    // creates object
    firstName: { 
        type: String,
        required: [true, "First name is required!"],
        minLength: [2, "Must be at least 2 characters"],
        maxLength: [20, "Cannot be more than 20 characters"]
    },
    lastName: { 
        type: String,
        required: [true, "Last name is required!"],
        minLength: [2, "Must be at least 2 characters"],
        maxLength: [20, "Cannot be more than 20 characters"]
    },
    knownFor: {
        type: String,
        required: [true, "This field is required!"],
        minLength: [2, "Must be at least 2 characters"],
        maxLength: [50, "Cannot be more than 50 characters"]
    }
    // object gets id, created at, and updated at
}, {timestamps: true});

// Names the object
const Author = mongoose.model('Author', AuthorSchema);
// exports the object
module.exports = Author;



        // // in case of options:
        // // enum : [

        // ]