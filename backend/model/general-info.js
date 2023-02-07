const mongoose = require('mongoose')
const Schema = mongoose.Schema

const generalInfo = new Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    postedBy: { type: String },
    saleType: { type: String },
    featuredPackage: { type: String },
    ppdPackage: { type: String, required: true }
}, { timestamps: true })

const GInfo = mongoose.model('General', generalInfo)

module.exports = GInfo