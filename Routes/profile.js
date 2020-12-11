const router = require('express').Router();
const multer = require('multer');
const User = require('../model/User');
const { schema } = require('../model/User');
//const upload = multer({dest: './uploads'});

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
      callBack(null, file.originalname)
    }
  })
  const upload = multer({ storage: storage })

router.post("/uploadimage",upload.single('profileimage'),async (req,res)=>{


    

    const userExist = await User.findOne({username: req.body.username});
    //if(!userExist) return res.status(400).send('wrong Username');
    const user = new User({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        profileimage:req.file.path
    })
    try{
    
   
    console.log(req.file);
    const updateUser = await User.updateOne ({username: user.username}, 
                                          {$set: {fullname:user.fullname,
                                            email:user.email,
                                            password: user.password,
                                            profileimage: user.profileimage
                                          }});
    }catch(err){
    res.json({message : err});
    }


});


router.get('/getuser', async(req,res)=>{
  try{
    const user = await User.findOne({username:req.body.username});
    res.json(user); 
}catch(err){
    res.json({message : err});
}

});


module.exports = router ;

