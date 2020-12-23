const router = require('express').Router();
const Post  = require('../model/Post');
const Comment = require('../model/Comments');
const Upvote = require('../model/Upvote');
const Downvote = require('../model/Downvote');

router.post('/addpost', async (req, res) =>{
    
    const post = new Post({ 
    question: req.body.question,
    user: req.body.username,
    topic: req.body.topic,
  });
    const savedPost = await post.save();
    res.send(post);
});

router.post('/addcomment', async (req,res)=>{
    
    const NewComment = new Comment ({
      
      body: req.body.body,
      usercomment: req.body.username,
      postid: req.body.postid,

      
  }); 

  
  try{
      const savedComment = await NewComment.save();
      res.json(savedComment)
      console.log(req.body)
  }catch(err){
      res.status(400).send(err);
      console.log(err)
  }
});


router.get('/allposts',async(req,res)=>{
  try{


      const post = await Post.find().sort({_id:-1});
      res.json(post);
      console.log(post); 
  }catch(err){
      res.json({message : err});
  }

});

router.get('/allpostcomments', async(req,res)=>{
  try{
      const postcomments = await Comment.find({postid: req.body.postid});
      res.json(postcomments); 
      console.log(postcomments);
  }catch(err){
      res.json({message : err});
  }
  
});


router.post('/addupvote', async (req,res)=>{

  const upvote = new Upvote ({
      postid: req.body.postid,
      userupvote:req.body.username,
      
  }); 
  const usernameExist = await Upvote.findOne({ userupvote: req.body.username,postid : req.body.postid });
  if (usernameExist) return res.status(400).send('You cannot upvote a post twice');
  try{
      const savedUpvote = await upvote.save();
      res.json(savedUpvote);
      console.log(req.body)
  }catch(err){
      res.status(400).send(err);
      console.log(err)
  }
});


router.post('/addDownvote', async (req,res)=>{


  const downvote = new Downvote ({
      postid: req.body.postid,
      userdownvote:req.body.username
      
  }); 
  const usernameExist = await Downvote.findOne({ userdownvote: req.body.username,postid : req.body.postid  });
  if (usernameExist) return res.status(400).send('You cannot downvote a post twice');
  try{
      const savedDownvote = await downvote.save();
      res.json({savedDownvote});
      console.log(req.body)
  }catch(err){
      res.status(400).send(err);
      console.log(err)
  }
});

router.get('/countcomments',async(req,res)=>{
  try{
      const commentCount = await Comment.find({postid: req.body.postid}).count();
      res.json(commentCount);
  }catch(err){

  }
});

router.get('/allupvotes',async(req,res)=>{
  try{
      const upvoteCount = await Upvote.find({postid : req.body.postid}).count();
      res.json({upvoteCount});
  }catch(err){

  }
});

router.get('/alldownvotes',async(req,res)=>{
  try{
      const downvoteCount = await Downvote.find({postid : req.body.postid}).count();
      res.json({downvoteCount});
  }catch(err){

  }
});

router.post('removeupvote', async (req,res)=>{
  
  try{
    const deletedupvote = await Upvote.findByIdAndDelete({_id:req.body.id});
    res.json(deletedupvote);
  }catch(err){

  }
});

router.post('removedownvote', async (req,res)=>{
  
  try{
    const deleteddownvote = await Downnvote.findByIdAndDelete({_id:req.body.id});
    res.json(deletedownpvote);
  }catch(err){

  }
});


module.exports = router;