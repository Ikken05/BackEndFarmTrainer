const mongoose = require('mongoose');



const FieldSchema = new mongoose.Schema({
    
    Dimensions:{
        type:Number,
        required: true
    },
    TypeField: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeFields'
      }],
    Workers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workers'
    }],
    Material:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Materials'
    }


});




module.exports = mongoose.model('Field',FieldSchema);