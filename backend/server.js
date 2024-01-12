const express = require('express')
const dotenv = require('dotenv')
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express()
const port = 5000 || process.env.PORT


app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/posts', require('./routes/postRoutes'))

app.use(errorHandler)

app.listen(port, ()=>{
    console.log('listening on port '+port)
})