const express = require('express')
const dotenv = require('dotenv')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT ||5000 


connectDB()


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/posts', require('./routes/postRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, ()=>{
    console.log('listening on port '+port)
})