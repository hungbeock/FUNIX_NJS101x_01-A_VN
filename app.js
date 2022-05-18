const http = require('http');
const express = require('express')
const bodyParser = require('body-parser')
const errorController= require('./controllers/error')

const app = express()


const adminRoutes= require('./routes/admin')
const shopRouter= require('./routes/shop')
const path = require('path')


app.set('view engine', 'ejs');
app.set('views','views')

app.use(bodyParser.urlencoded({extended:false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use( '/admin', adminRoutes)
app.use(shopRouter)
app.use(errorController.get404 )

const server= http.createServer(app)
    
server.listen(3000)