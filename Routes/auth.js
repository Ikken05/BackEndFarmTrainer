const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const {registerValidation,loginValidation}= require ('../validation');
const { schema } = require('../model/User');
const Joi= require('@hapi/joi');




router.post('/register', async (req,res)=>{
    
    
    //validating data
    //const{error}= registerValidation(req.body);
    //if (error) return res.status(400).send(error.details[0].message);
    
    
    //checking if user already in use
    const usernameExist = await User.findOne({username: req.body.username});
    const emailExist = await User.findOne({email: req.body.email});
    if(usernameExist) return res.status(400).send('username already in use');
    if(emailExist) return res.status(400).send('email already in use');

    //hashing password
    //const salt=await bcrypt.genSalt(10);
    //const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //creating user
    const user = new User ({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        //password: hashedPassword,
        password: req.body.password,
        role: req.body.role,
    }); 
    try{
        const savedUser = await user.save();
        res.json({user: user._id});
        console.log(req.body)
    }catch(err){
        res.status(400).send(err);
        console.log(err)
    }

});
//login
router.post('/login', async (req,res)=> {
    //validating data
    //const{error}= loginValidation(req.body);
    //  if (error) return res.status(400).send(error.details[0].message);

    //checking username
    const userExist = await User.findOne({username: req.body.username});
    if(!userExist) return res.status(400).send('wrong Username');

    //checking password
    //const salt=await bcrypt.genSalt(10);
    //const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //const passwordValidbcrypt = await bcrypt.compare(hashedPassword , user.password); 
    //if(!passwordValidbcrypt) return res.status(400).send('wrong password')
    const passwordValid = await User.findOne({password: req.body.password});
    if(!passwordValid) return res.status(400).send('wrong password');
    
    
    
    res.send('You are logged in');



});


//show users
router.get('/show',async (req,res)=>{
    try{
        const user = await User.find();
        res.json(user); 
    }catch(err){
        res.json({message : err});
    }
});



module.exports = router;