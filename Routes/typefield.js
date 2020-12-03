const router = require('express').Router();
const TypeField = require('../model/TypeField');
const { schema } = require('../model/TypeField');

router.post('/addtypefield', async (req,res)=>{
    const typefield = new TypeField ({
        TypeName: req.body.typename,
        ReadyTime: req.body.readytime
        
    }); try{
        const savedTypeField = await typefield.save();
        res.json({typefield: typefield._id});
        console.log(req.body.TypeName)
    }catch(err){
        res.status(400).send(err);
        console.log(err)
    }

});

module.exports = router ;