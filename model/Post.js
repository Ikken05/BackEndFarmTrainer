var mongoose = require('mongoose');
const {UserSchema} = require('./User');

const PostSchema = new mongoose.Schema({
    
    question: {
      type: String,
      minlength: 10,
      maxlength: 1000
    },

    User: { 
        type: UserSchema,  
        required: true
      },

    topic:{
      type:String,
    },

    date: {
      type: Date,
      default: Date.now
    },
    
});


const Post = mongoose.model('Post', PostSchema);
exports.PostSchema = PostSchema;
exports.Post = Post;