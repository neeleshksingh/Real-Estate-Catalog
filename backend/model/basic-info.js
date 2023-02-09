const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema.Types;

<<<<<<< HEAD
const schema = new Schema({
    PPDID :{type:String},
    propertyType: { type: String},
    mobile: { type: Number },
    totalArea: { type: Number },
    views:{type: Number, default: Math.floor(Math.random() * 100)},
    
    // user: { type: ObjectId, ref: 'User' }
}, { timestamps: true })

const basicInfo = mongoose.model('property', schema)
=======
const basicInfoSchema = new Schema({
    propertyType: { type: String, required: true },
    mobile: { type: String },
    area: { type: Number },
    views: { type: Number, default: Math.floor(Math.random() * 100) },
    ppd: { type: String },
    user: { type: ObjectId, ref: 'User', required: false }
}, { timestamps: true });

const BInfo = mongoose.model('Basic', basicInfoSchema)
>>>>>>> 2e0e313be25361aa75cbee6852a31832b566f931

module.exports = basicInfo