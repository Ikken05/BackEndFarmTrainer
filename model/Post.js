var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    question: {
      type: String,
      minlength: 10,
      maxlength: 260
    },
    createAt: Date ,
    comments: [{
      type: String,
      ref: 'Comment'
    }],
    upvote: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Upvote'
    }],
    downvote: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Downvote'
    }],
    user: { type: String, ref: 'users' }

});

module.exports = mongoose.model("Post", PostSchema);