const mongoose = require('mongoose');


const FieldSchema = new mongoose.Schema({
    
    Dimensions:{
        type:Number,
        required: true
    },
    TypeField:{
        type:String,
        required:true
    },
    Workers:{
        type:String,
        required:true
    },
    Material:{
        type:String,
        required:true
    },    
    //Owner:{type: Schema.Types.ObjectId, ref:'username_user'}


});




module.exports = mongoose.model('Field',FieldSchema);