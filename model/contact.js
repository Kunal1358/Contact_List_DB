// adding library
const mongoose =require('mongoose');

// Creating schema
const contactSchema = new  mongoose.Schema({
    
    name: {
        type:String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

// defining collection
const Contact = mongoose.model('contact',contactSchema);

// Exporting 
module.exports = Contact;