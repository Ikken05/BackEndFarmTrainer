const router = require('express').Router();
const User = require('../model/User');
const Job = require('../model/Job');
const { schema } = require('../model/Job');




router.post('/hireengineer',async(req,res)=>{

    
    const job = new Job({
        employer : req.body.employer,
        employee : req.body.employee
    });

    

    try {

        const employeeExist = await Job.findOne({employee: req.body.employee});
        if(employeeExist) return res.status(400).send('Employee already Hired');
        const savedJob = await job.save();
        res.json({savedJob, status:true,message:"You have successuly Hired this engineer"});
        console.log(savedJob);

            
    }catch (error) {
            
        }
});

router.get('/hiredemployees',async (req,res)=>{

        
    try{
        const hiredemployees = await Job.find({employer:req.body.username});
        res.json(hiredemployees);
        console.log(hiredemployees);
    }catch(error){
        res.json({message:error});
    }
});

router.post('/firedemployee', async(req,res)=>{

    try{
        const firedemployees = await Job.findByIdAndDelete({_id:req.body.id});
        res.json({status : true , message :" Engineer Fired!"});
        console.log({status : true , message :" Engineer Fired!"});
    }catch(error){
        res.json({message:error});
    }

});

router.get('/showallengineers', async (req,res)=>{

try{
        const Engineers = await User.find({role:"Engineer"});
        res.json({Engineers,status : true , message :" These are our engineers!"});
        console.log({Engineers,status : true , message :" These are our engineers!"});
    }catch(error){
        res.json({message:error});
    }

});




module.exports = router;