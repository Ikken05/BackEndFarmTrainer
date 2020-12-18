const router = require('express').Router();
const Post = require('../model/Post');
const User = require('../model/User');
const Upvote = require('../model/Upvote');
const Downvote = require('../model/Downvote');
const Comments = require('../model/Comments');
const { schema } = require('../model/Post');


router.post('/addpost', async (req,res)=>{

    
    
    const post = new Post ({
        

        question: req.body.question,
        user: req.body.username,
        topic: req.body.topic,
       
        
        
    }); 
    try{
        const savedPost = await post.save();
        res.json(savedPost);
        console.log(req.body)
    }catch(err){
        res.status(400).send(err);
        console.log(err)
    }
});

router.post('/editpost', async (req,res)=>{

    const postExist = await Post.findById(req.body.id);
    

    const post = new Post ({
        id:req.body.id,
        question: req.body.question,
        
        
    });

    try{
        
        const updatePost = await Post.updateOne ({_id: post._id}, 
                                              {$set: {question:post.question
                                              }});
        res.json({post,status:true,message:"changes done successfully"});
        console.log(post);                                      
        
        }catch(err){
        res.json({message : err});
        }
        
});




router.post('/addcomment', async (req,res)=>{

    

    const comment = new Comments ({
        
        body:req.body.body,
        usercomment:req.body.usercomment,
        postid:req.body.postid,

        
    }); 
    try{
        const savedComment = await comment.save();
        res.json({savedComment});
        console.log(req.body)
    }catch(err){
        res.status(400).send(err);
        console.log(err)
    }
});
router.post('/addupvote', async (req,res)=>{

    

    const upvote = new Upvote ({
        
        
        post: req.body.post,
        userupvote:req.body.userupvote
        
    }); 
    try{
        const savedUpvote = await Upvote.save();
        res.json({savedUpvote});
        console.log(req.body)
    }catch(err){
        res.status(400).send(err);
        console.log(err)
    }
});

router.post('/addDownvote', async (req,res)=>{

    

    const downvote = new Downvote ({
        
        
        post: req.body.post,
        userdownvote:req.body.userdownvote
        
    }); 
    try{
        const savedDownvote = await Downvote.save();
        res.json({savedDownvote});
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
        console.log({post}); 
    }catch(err){
        res.json({message : err});
    }

});
router.get('/onepost', async (req,res)=>{
    try{
        const onepost = await Post.findById(req.body.id);
        res.json(onepost)
    }catch(err){
        res.json({message:error});
    }
});




/*router.get('/latestposts',async(req,res)=>{
    try{
        const post = await Post.find().limit(3);
        res.json(post); 
    }catch(err){
        res.json({message : err});
    }
});*/


//show comments based on the post
router.get('/allcomments', async(req,res)=>{
    try{
        
        const comments = await Comments.findby({postid:req.body.postid});
        res.json({body: comments.body}); 
    }catch(err){
        res.json({message : err});
    }
    
}),


module.exports = router;