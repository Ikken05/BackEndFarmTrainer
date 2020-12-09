const router = require('express').Router();
const Post = require('../model/Post');
const User = require('../model/User');
const Comments = require('../model/Comments');
const { schema } = require('../model/Post');

router.post('/addpost', async (req,res)=>{

    
    
    const post = new Post ({
        

        question: req.body.question,
        user: req.body.username,
        
    }); 
    try{
        const savedPost = await post.save();
        res.json({post: post._question});
        console.log(req.body)
    }catch(err){
        res.status(400).send(err);
        console.log(err)
    }
});

/*router.post('/editpost', async (req,res)=>{

    const postExist = await Post.findOne({question: req.body.oldquestion,user:req.body.user});
    

    const post = new Post ({
        user:req.body.user,
        question:req.body.oldquestion,
        question: req.body.question,
        
        
    });

    try{
        
        const updatePost = await Post.updateOne ({user: post.user,oldquestion:post.question}, 
                                              {$set: {question:post.question
                                              }});
        console.log(post);                                      
        
        }catch(err){
        res.json({message : err});
        }
        
});
*/



router.post('/addcomment', async (req,res)=>{

    

    const comment = new Comments ({
        
        body:req.body.body,
        post: req.body.post,
        userpost: req.body.userpost,
        usercomment:req.body.usercomment
        
    }); 
    try{
        const savedComment = await comment.save();
        res.json({comment: comment._body});
        console.log(req.body)
    }catch(err){
        res.status(400).send(err);
        console.log(err)
    }
});



router.get('/allposts',async(req,res)=>{
    try{
        const post = await Post.find();
        res.json(post); 
    }catch(err){
        res.json({message : err});
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

router.get('/allcomments', async(req,res)=>{
    try{
        const comments = await Comments.find({post:req.body.post,userpost:req.body.userpost});
        res.json(comments); 
    }catch(err){
        res.json({message : err});
    }
    
}),


module.exports = router;