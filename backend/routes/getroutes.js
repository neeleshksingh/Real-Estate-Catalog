const routes = require('express').Router()
const Basic = require('../model/basic-info')
const bodyParser = require('body-parser')
routes.use(bodyParser.json())
routes.get('/property/:id', async (req, res) => {
    try {
        const basicinfo = await Basic.find({user:req.params.id});
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

routes.get('/search/:id', async (req, res) => {
    try {
        // console.log(req.body) 
        const data = await Basic.find({ PPDID: req.params.PPDID })
        console.log(req.params.id)
    } catch (e) {
        res.status(204).json({
            status: "Failed",
            message: e.message
        })
    }
})
routes.put('/updatestatus/:id', async (req, res) => {
    try {
        const data = await Basic.findByIdAndUpdate(req.params.id, { status: req.body.status == 'unsold' ? "Sold" : "Sold" },
            function (err, docs) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log(docs)
                }
            });
        JSON.parse(docs)
        res.json(docs)
    } catch (e) {
        res.status(204).json({
            message: e.message
        })
    }
})
module.exports = routes