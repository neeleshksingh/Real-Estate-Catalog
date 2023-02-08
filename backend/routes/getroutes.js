const routes=require('express').Router()
const Property = require('../model/property-details')
const Basic = require('../model/basic-info')
const General = require('../model/general-info')
const Location = require('../model/location-info')
const bodyParser = require('body-parser')


routes.get('/property',async(req,res)=>{
    try{
        const basicinfo=await Basic.find();
        const generalinfo=await General.find();
        const locationinfo=await Location.find();
        const propertydetails=await Property.find();
        res.status(200).send({
            status:"success",
            basicInfo:basicinfo,
            generalInfo:generalinfo,
            locationInfo:locationinfo,
            propertyDetails:propertydetails,
        })
    }catch(e){
        res.status(204).send({
            status:"failed",
            message:e.message
        })
    }
    
})

module.exports=routes