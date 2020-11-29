const router = require('express').Router();
const multer = require('multer');
const User = require('../model/User');
const { schema } = require('../model/User');
const upload = multer({dest: '/uploads'});

router.post("/uploadimage",upload.single('profileimage'),async (req,res)=>{

try{
    const passwordValid = await User.findOne({password: req.body.password});
    if(!passwordValid) return res.status(400).send('wrong password');
    console.log(req.file);
}catch(err){
    res.json({message : err});
}


});

