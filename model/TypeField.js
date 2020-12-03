const mongoose = require('mongoose');


const TypeFieldSchema = new mongoose.Schema({
    ReadyTime:{
        type:Number,
        required: true
    },
    TypeName:{
        type:String,
        required:true
    },
    

});




module.exports = mongoose.model('TypeField',TypeFieldSchema);    