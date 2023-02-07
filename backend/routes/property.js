const express = require('express')
const Property = require('../model/property-details')
const Basic = require('../model/basic-info')
const General = require('../model/general-info')
const Location = require('../model/location-info')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/basic', async (req, res) => {
    try {
        let data = await Basic.find()
        return res.status(200).json(data)
    }
    catch (err) {
        return res.status(400).json({ message: err.message })
    }
})

router.post('/basic', async (req, res) => {
    console.log(req.body);

    try {
        let { propertyType, negotable, price, ownership, propertyAge, propertyApprove, propertyDesc, bankLoan } = req.body;
        if (propertyType) {
            let data = await Basic.create({ propertyType, negotable, price, ownership, propertyAge, propertyApprove, propertyDesc, bankLoan })
            
            return res.status(201).json({ message: "data created", data });
        }
        else {
            return res.status(400).json({ message: 'details are missing' })
        }

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

module.exports = router