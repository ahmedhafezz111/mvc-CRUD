import express from 'express'
import { dbConn } from './database/dbConnection.js'
import {resolve , join} from 'path'
import { Product } from './database/models/product.model.js'



const app = express()
const port = 3000

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use('/public',express.static('public'))


app.get('/',async(req,res)=>{
    let title = "Home Page"
    let products = await Product.find()
    res.render('index.ejs',{title,products})
})

app.get('/update/:id',async(req,res)=>{
    let title = "Home Page"
    let product = await Product.findById(req.params.id)
    res.render('update.ejs',{title,product})
})
app.post('/handleUpdate/:id',async(req,res)=>{
    await Product.findByIdAndUpdate(req.params.id,req.body)
    // res.json({message:"success"})
    res.redirect('/')
})


app.post('/addProduct',async(req,res)=>{
    await Product.insertMany(req.body)
    // res.json({message:"success"})
    res.redirect('/')
})


app.post('/deleteProduct',async(req,res)=>{
    await Product.findByIdAndDelete(req.body.id)
    res.redirect('/')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))