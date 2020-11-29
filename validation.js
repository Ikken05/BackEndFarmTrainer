const Joi= require('@hapi/joi');


//register validation
const registerValidation= data = ()=>{
const schema = {
    fullname: Joi.string().min(6).required(),
    username: Joi.string().min(6).required(),
    email: Joi.string().min(5).required().email,
    password: Joi.string().min(8).required(),
    role: Joi.string().required()
    };
    return validationSchema.validate(data,schema);
};

//login validation
const loginValidation= data = ()=>{
    const schema = {
        username: Joi.string().min(6).required(),
        password: Joi.string().min(8).required()
        };
        return validationSchema.validate(data, schema);
    };


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;