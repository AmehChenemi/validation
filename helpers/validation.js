const joi = require('joi')

const myValidate = joi.object({
    name:joi.string().min(3).max(10),

    email:joi.string().email({minDomainSegments:2, tlds:{allow: ['com','net','ng']}}),
  
    PhoneNumber:joi.string().pattern(new RegExp('^[0-9]')).min(5).max(10),

    password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})



module.exports = {myValidate}