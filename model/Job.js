var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var JobSchema = new mongoose.Schema({
    
    employer: {
      type: String,
      
    },
    employee:{
      type:String,
      
    },
    
    
});

module.exports = mongoose.model("Job", JobSchema);