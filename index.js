//  Aquiring the express Server
const express=require('express');

//  Aquiring path
const path=require('path');

// Defining the port
const port=8000;

// Getting Mongoose config
const db=require('./config/mongoose');

// Adding model
const Contact= require('./model/contact');

// Starting express server
const app=express();

// To Acess Folder
app.set('views',path.join(__dirname,'view'));

// Included middlewear to acess and manipulate data
app.use(express.urlencoded());

// To use static files
app.use(express.static('assets'));

//Setting up our view Engine
app.set('view engine','ejs');

var contact_list=[
    {
        name:"Kunal",
        phone:1212
    },
    {
        name:"Tony Stark",
        phone:435345
    },
    {
        name:"Hulk",
        phone:12112312
    }
];


// Check if server is up or not
app.listen(port,function(err){
    if(err){
        console.log("Error running the server: ", err);
        return;
    }
    console.log("Server is up and running on port:",port);
})


// Home mapping/route
app.get('/',function(req,res){

    // fetching all data db and storing it in 
    // variable to pass to view

    Contact.find({},function(err,ContactList){
        if(err){
            console.log("Error adding data to Databse:", err);
            return;
        }
        return res.render('home',
        {title:"Contact List",
        Contacts:ContactList
        });

    })
})


// contact list mapping
app.post('/contact-list',function(req,res){

    // data can be accessed by req.body.__ 

    // Adding data to dataBase
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err){
        if(err){
            console.log("Error adding data to Databse:", err);
            return;
        }
        return res.redirect('back');
    })

});


// delete mapping 
app.get('/delete-contact',function(req,res){

    // get the id 
    let id=req.query.id;

    // find and delete by id
    Contact.findByIdAndDelete(id,function(error){

        if(error){
            console.log("Error adding data to Databse:", error);
            return;
        }        
        return res.redirect('back');
    });

});
