const { date } = require('@hapi/joi');
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
    userpost: {
      type: String,
      ref: 'User'
    },
    usercomment: {
      type: String,
      ref: 'User'
    },
    post:{
      type:String,
      ref:"Post"
    },
    body: {
      type: String,
    },
    postid:{
      type: String
    }
    
});

module.exports = mongoose.model("Comment", CommentSchema);
