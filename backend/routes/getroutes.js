const routes=require('express').Router()
const Basic = require('../model/basic-info')
const bodyParser = require('body-parser')
routes.get('/property',async(req,res)=>{
    try{
        const basicinfo=await Basic.find();
        
        res.status(200).json({
            basicInfo:basicinfo,
            
        })
    }catch(e){
        res.status(204).send({
            status:"failed",
            message:e.message
        })
    }
    
})

routes.get('/search/:id',async(req,res)=>{
    try{
        // console.log(req.body) 
        const data=await Basic.find({PPDID:req.params.PPDID})
        console.log(req.params.id)
    }catch(e){
        res.status(204).json({
            status:"Failed",
            message:e.message
        })
    }
})
routes.put('/updatestatus/:id',async(req,res)=>{
    try{
        // const data=await Basic.findByIdAndUpdate()
        console.log(req.params)
    }catch(e){
        res.status.json({
            message:e.message
        })
    }
})
module.exports=routes