const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/*const TypeFieldSchema = new mongoose.Schema({
    
    ReadyTime:{
        type:Number,
        required: true
    },
    TypeName:{
        type:String,
        required:true
    },
    TypeFieldImage:{
        type: String
    },
    
});
const MaterialSchema = new mongoose.Schema({
    
    Type:{
        type:String,
        required: true
    },
    Field:{type: mongoose.Schema.Types.ObjectId, ref: 'Field'}
    
});
const WorkersSchema = new mongoose.Schema({
    
    Fullname:{
        type:String,
        required: true
    },
    Role:{
        type:String,
        required:true
    },
    Field:{type: mongoose.Schema.Types.ObjectId, ref: 'Field'}
});
*/
const FieldSchema = new mongoose.Schema({
    
    dimensions:{
        type:Number,
        required: true
    },
    
    ReadyTime:{
        type:Number,
        required:true
    },
    TypeName:{
        type:String,
        required:true
    },
    
    //worker
    worker:[{
        Fullname:{
        type:String,
        required:true
    },
        Role:{
        type:String,
        required:true
    }}],
    
    //material
    Type:{
        type:String,
        required:true
    },
    creator:{
        type: String,
    }


});




const Field = mongoose.model('Field',FieldSchema);
module.exports = Field;