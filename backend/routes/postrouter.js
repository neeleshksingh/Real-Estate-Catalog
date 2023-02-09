const express = require('express')
const Basic = require('../model/basic-info')

const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/property',async(req,res)=>{
    try{
        const locationinfo=await Basic.create(req.body);
        res.status(200).send({
            status:"success",
            message:locationinfo
        })
    }catch(e){
        res.status(204).send({
            status:"failed",
            message:e.message
        })
    }
})
module.exports = router