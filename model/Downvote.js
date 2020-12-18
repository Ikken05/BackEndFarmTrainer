var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var DownvoteSchema = new mongoose.Schema({
    
    userdownvote: {
      type: String,
      ref: 'User'
    },
    post:{
      type:String,
      ref:"Post"
    },
    
    
});

module.exports = mongoose.model("Downvote", DownvoteSchema);
