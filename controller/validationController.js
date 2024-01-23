const userModel = require ('../model/validationModel')
const{myValidate}=require('../helpers/validation')
const bcrypt = require ('bcrypt')

exports.createUser = async(req,res)=>{
    try{
const data = {
    name:req.body.name,
    email: req.body.email,
    phoneNumber:req.body.phoneNumber,
    password: req.body.password
} 

await myValidate.validateAsync(data)

 const users = await userModel.create(data)

 res.status(201).json({
    message:'user created successfully',
    data: users
 })

 const saltedPassword = bcrypt.genSaltSync(10)
 const hashPassword = bcrypt.hashSync(data.password,saltedPassword)
 const user = await new userModel(data)
 user.password=hashPassword
 await user.save()
    }catch(err){
res.json({
    message : 'unable to create user',
    error: err.message
})
        
    }
}



exports.updateUser = async(req,res)=>{
    try{
const data = {
    name:req.body.name,
    email: req.body.email,
    PhoneNumber:req.body.PhoneNumber,
    password: req.body.password

}

await myValidate.validateAsync(data)

 const user = await userModel.findByIdAndUpdate(req.params.id,data,{new:true})

 res.status(201).json({
    message:'user updated successfully',
    data: user
 })
    
}catch(err){
        res.status(500).json({
            message : 'unable to update user',
        error: err.message
    })
}
}

