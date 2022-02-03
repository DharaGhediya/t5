var express = require('express');
var router = express.Router();
var product = require('./Models/product')
var User = require('./Models/test')


//to fetch products
router.get('/products',async(req,res)=>{
    const iproduct = await product.find()
    res.send(iproduct)
})

//to add the products
router.post("/products",async(req,res)=>{
    const iproduct = new product({
        name:req.body.name,
        price:req.body.price
    })

    await iproduct.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating product

router.patch('/products/:id',async (req,res)=>{
    const iproduct = await product.findOne({_id:req.params.id})
    iproduct.name = req.body.name
    iproduct.price = req.body.price
    await iproduct.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api

router.delete("/products/:name",async(req,res)=>{
    await product.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})


module.exports = router