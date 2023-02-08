const mongoose = require('mongoose')
const Schema = mongoose.Schema

const basicInfo = new Schema({
    propertyType: { type: String, required: true },
    negotable: { type: String },
    price: { type: Number },
    ownership: { type: String },
    propertyAge: { type: Number },
    propertyApprove: { type: String },
    propertyDesc: { type: String },
    bankLoan: { type: String }
}, { timestamps: true })

const BInfo = mongoose.model('basicInfo', basicInfo)

module.exports = BInfo