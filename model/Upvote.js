var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UpvoteSchema = new mongoose.Schema({
    userpost: {
      type: String,
      ref: 'User'
    },
    userupvote: {
      type: String,
      ref: 'User'
    },
    post:{
      type:String,
      ref:"Post"
    },
    
    
});

module.exports = mongoose.model("Upvote", UpvoteSchema);
