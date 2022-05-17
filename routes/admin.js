const path= require('path');
const express = require('express');

const rootDir =require('../util/path')
const products =[]

const router = express.Router();
//admin/add-product =>GET
router.get('/add-product', ( req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views','add-product.html'))
    res.render('add-product',{pageTitle :'Add Product',path :'/addmin/add-product'})
    // res.render('add-product',{prods:products,docTitle:'Shop    '})
})
//admin/add-product => POST
router.post('/add-product',( req, res, next)=>{
    products.push({title: req.body.title})
    res.redirect('/')
})

exports.routes = router;
exports.products= products;