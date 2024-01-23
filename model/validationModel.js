const mongoose = require('mongoose')
const valModel = new mongoose.Schema({
    name:String,

    email:String,

    phoneNumber: Number,

    password:String


},{timestamps:true})


const userModel = new mongoose.model("validation",valModel)
module.exports =userModel