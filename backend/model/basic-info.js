const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema.Types;

const schema = new Schema({
    PPDID :{type:String},
    propertyType: { type: String},
    mobile: { type: Number },
    totalArea: { type: Number },
    views:{type: Number, default: Math.floor(Math.random() * 100)},
    status:{type:String,default:"unSold"}
    // user: { type: ObjectId, ref: 'User' }
}, { timestamps: true })

const basicInfo = mongoose.model('property', schema)

module.exports = basicInfo