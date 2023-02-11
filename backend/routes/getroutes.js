const routes=require('express').Router()
const Basic = require('../model/basic-info')
const bodyParser = require('body-parser')
const User =require('../model/register')
routes.use(bodyParser.json())
routes.get('/property',async(req,res)=>{
    try{
        const basicinfo=await Basic.find();
        

        res.status(200).json({
            basicInfo: basicinfo,

        })
    } catch (e) {
        res.status(204).send({
            status: "failed",
            message: e.message
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
            status: "Failed",
            message: e.message
        })
    }
})
routes.get('/user/:id',async(req,res)=>{
    try{
        const data=await  User.findById(req.params.id, function (err, docs) {
            if (err){
                console.log(err);
            }
            else{
                console.log("Result : ", docs);
            }
        })
        req.status(200).json({data})
    }catch(err){
        res.status(204).json({
            message:e.message
        })
    }
})
routes.put('/updatestatus/:id',async(req,res)=>{
    try{
        const data=await Basic.findByIdAndUpdate(req.params.id, { status: req.body.status=='unsold'?"Sold":"Sold"},
        function (err, docs) {
                                if (err){
                                console.log(err)
                                }
                                else{
                                console.log(docs)
                                }
        });
        JSON.parse(data)
        res.json(data)
    }catch(e){
        res.status(204).json({
            message:e.message
        })
    }
})
module.exports=routes
