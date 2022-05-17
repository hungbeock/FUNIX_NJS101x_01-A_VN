const http = require('http');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const adminData= require('./routes/admin')
const shopRouter= require('./routes/shop')
const path = require('path')

app.set('view engine', 'pug')
app.set('views','views')

app.use(bodyParser.urlencoded({extended:false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use( '/admin', adminData.routes)
app.use(shopRouter)
app.use((req, res, next) => {
    res.status(404).render('404',{pageTitle:'Page not found'})
})

const server= http.createServer(app)
    
server.listen(3000)