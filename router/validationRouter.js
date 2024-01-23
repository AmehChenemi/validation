const router = require ('express').Router()

const {createUser,updateUser}=require ('../controller/validationController')

router.post('/createuser',createUser)
router.put('/updateuser/:id',updateUser)


module.exports = router