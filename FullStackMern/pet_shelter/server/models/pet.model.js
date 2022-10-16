// imports mongoose
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
// creates new schema
const PetSchema = new mongoose.Schema({
    
    // creates object
    name: { 
        type: String,
        required: [true, "A name is required!"],
        minLength: [3, "Must be at least 3 characters"],
        maxLength: [20, "Cannot be more than 20 characters"],
        unique: [true, "Name must be unique!"]
    },
    type: { 
        type: String,
        required: [true, "Type is required!"],
        minLength: [3, "Must be at least 3 characters"],
        maxLength: [20, "Cannot be more than 20 characters"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [3, "Must be at least 3 characters"],
        maxLength: [50, "Cannot be more than 50 characters"]
    },
    skillOne: {
        type: String,
        // // required: [true, "This field is required!"],
        // minLength: [2, "Must be at least 2 characters"],
        // maxLength: [50, "Cannot be more than 50 characters"]
    },
    skillTwo: {
        type: String,
        // required: [true, "This field is required!"],
        // minLength: [2, "Must be at least 2 characters"],
        // maxLength: [50, "Cannot be more than 50 characters"]
    },
    skillThree: {
        type: String,
        // required: [true, "This field is required!"],
        // minLength: [2, "Must be at least 2 characters"],
        // maxLength: [50, "Cannot be more than 50 characters"]
    }
    // object gets id, created at, and updated at
}, {timestamps: true});

PetSchema.plugin(uniqueValidator);

// Names the object
const Pet = mongoose.model('Pet', PetSchema);
// exports the object
module.exports = Pet;



        // // in case of options:
        // // enum : [

        // ]