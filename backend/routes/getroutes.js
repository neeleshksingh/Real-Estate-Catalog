const routes=require('express').Router()
const Property = require('../model/property-details')
const Basic = require('../model/basic-info')
const General = require('../model/general-info')
const Location = require('../model/location-info')
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

routes.get('/Search',async(req,res)=>{
    try{
        console.log(req.body)
    }catch(e){
        res.status(204).json({
            status:"Failed",
            message:e.message
        })
    }
})

module.exports=routes