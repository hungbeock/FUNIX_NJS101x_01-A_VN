const http = require('http');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const adminRouter= require('./routes/admin')
const shopRouter= require('./routes/shop')
const path = require('path')
app.use(bodyParser.urlencoded({extended:false }))

app.use( '/admin', adminRouter)
app.use(shopRouter)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

const server= http.createServer(app)
    
server.listen(3000)