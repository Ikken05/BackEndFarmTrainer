const router = require('express').Router();
const { User } = require('../model/User');
const { Post } = require('../model/Post');

router.post('/addpost', async (req, res) =>{

    const user = await User.findById(req.body.userId);
    
    const post = new Post({ 
    question: req.body.question,
    user: {username: user.username,
            profileimage:user.profileimage,
            role: user.role},
    topic: req.body.topic,
  });
    post = await post.save();
    res.send(post);
});


module.exports = router;