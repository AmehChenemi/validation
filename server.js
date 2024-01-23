const express = require ('express')
const mongoose = require ('mongoose')
const router = require ('./router/validationRouter')
const dotenv = require ('dotenv')
dotenv.config()


const app = express()
app.use(express.json())
app.use(router)


const port = process.env.port
const db = process.env.dblink


mongoose.connect(db)
.then(()=>{
    console.log('Database connection is successful')
    app.listen(port,()=>
    console.log('server is listening on port:'+ port)
    )
})
.catch((err)=>{
    console.log(err.message)
})


