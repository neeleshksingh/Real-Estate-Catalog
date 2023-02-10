const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema.Types;

<<<<<<< HEAD
const basicInfoSchema = new Schema({
     _id: {
         type: String,
         required: true
    },
    propertyType: { type: String, required: true },
    mobile: { type: String },
    area: { type: Number },
    views: { type: Number, default: Math.floor(Math.random() * 100) },
    ppd: { type: String },
    user: { type: ObjectId, ref: 'User', required: false }
}, { timestamps: true });

const BInfo = mongoose.model('Basic', basicInfoSchema)
=======
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
>>>>>>> 022aabe29010d6f128a85d9f8c6a3593ebbfc0a8

module.exports = BInfo