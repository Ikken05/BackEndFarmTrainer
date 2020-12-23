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

router.post("/uploadimage", upload.single('profileimage'), async (req, res) => {




  const userExist = await User.findOne({ username: req.body.username });
  //if(!userExist) return res.status(400).send('wrong Username');
  const user = new User({
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    profileimage: req.file.path,
    phone: req.body.phone,
    
  })
  try {


    console.log("This is your file" + req.file);
    const updateUser = await User.updateOne({ username: user.username },
      {
        $set: {
          fullname: user.fullname,
          email: user.email,
          password: user.password,
          profileimage: user.profileimage,
          phone: user.phone,
        }
      });
    res.json( user)
    console.log({updateUser})
  } catch (err) {
    res.json({ message: err });
  }


});

//show username, profileimage and role for the posts
//url : /profile/oneuser
router.get('/oneuser', async (req, res) => {
  try {
    const userinfo = await User.findOne({ username: req.body.user });
    res.json(userinfo.profileimage, userinfo.username, userinfo.role );
  } catch (err) {
    res.json({ message: err });
  }

});


//profiling:
router.get('/info', async (req, res) => {

  try {
    const userinfo = await User.findOne({ username: req.body.username });
    res.json({
      profileimage: userinfo.profileimage,
      fullname: userinfo.fullname,
      username: userinfo.username,
      role: userinfo.role,
      email: userinfo.email,
      phone: userinfo.phone,
    });
  } catch (err) {
    res.json({ message: err });
  }

});


router.delete('/deleteaccount', async (req, res) => {

  try {
    const user = await User.findOneAndDelete({ username: req.body.username });
    res.json({status:true, message:"account deleted"});
  } catch (err) {
    res.json({ message: err });
  }

});



module.exports = router;

