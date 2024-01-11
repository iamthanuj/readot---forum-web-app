const express = require('express')
const dotenv = require('dotenv')
const app = express()
const port = 5000 || process.env.PORT

app.use('/api/posts', require('./routes/postRoutes'))


app.listen(port, ()=>{
    console.log('listening on port '+port)
})