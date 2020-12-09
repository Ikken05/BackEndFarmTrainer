var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var DownvoteSchema = new mongoose.Schema({
    userpost: {
      type: String,
      ref: 'User'
    },
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
