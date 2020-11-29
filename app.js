const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//Import Routes
const authRoute = require ('./routes/auth'); 
const profileRoute = require ('./routes/profile');


dotenv.config();

//Connection to DataBase
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser:true},
    ()=>console.log('connected to database')
);

//MiddleWares
app.use(express.json());



//Route MiddleWares 
app.use('/api/user',authRoute);


 

//Server Listener
app.listen(3000, ()=> console.log("Server Running"));