// Addigng Library
const mongoose= require('mongoose');

// connect to DataBase
mongoose.connect('mongodb://localhost/contact_list');

// aquire the connection
const db=mongoose.connection;

// check for errors
db.on('error',console.error.bind(console,'Error Connecting to Database'));

// once the connection is open print conformation message 
db.once('open',function(){
    console.log("Sucessfully Connected to DataBase");
})