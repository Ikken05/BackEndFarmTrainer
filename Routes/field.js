const router = require('express').Router();
const Field = require('../model/Field');
const { schema } = require('../model/Field');
const User = require('../model/User');
const TypeField = require('../model/TypeField');
const Workers = require('../model/Workers');
const Material = require('../model/Material');


router.post('/addfield', async (req,res)=>{

    /*const owner = await User.findOne({username: req.body.username});
    const typefield = await TypeField.findOne({TypeName: req.body.typename});
    const workers = await Workers.findOne({username: req.body.username_worker});
    const material = await Material.findOne({username: req.body.username_material});
    // user:{type: Schema.Types.ObjectId, ref:'esmref'}


    const field = new Field ({
        Dimensions: req.body.dimensions,
        TypeField:req.body.typefield,
        Workers:req.body.workers,
        Material:req.body.material,
        Owner:req.body.username


    }); 
    try{
        const savedField = await Field.save();
        res.json({field: field._id});
        console.log(req.body)
    }catch(err){
        res.status(400).send(err);
        console.log(err)
    }*/
    




});









module.exports = router;