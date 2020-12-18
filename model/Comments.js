const { date } = require('@hapi/joi');
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
    
    usercomment: {
      type: String,
      ref: 'User'
    },
    body: {
      type: String,
    },
    postid:{
      type: String
    }
    
});

module.exports = mongoose.model("Comment", CommentSchema);
