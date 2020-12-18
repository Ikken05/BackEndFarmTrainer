var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    question: {
      type: String,
      minlength: 10,
      maxlength: 260
    },
    user: { type: String, ref: 'users' },
    topic:{
      type:String,
      required:true
    },
    
    

});

module.exports = mongoose.model("Post", PostSchema);