const mongoose = require('mongoose')
const Schema = mongoose.Schema

const propertyDetails = new Schema({
    length: { type: Number, required: true },
    breath: { type: Number, required: true },
    totalArea: { type: Number, required: true },
    areaUnit: { type: String },
    noofBHK: { type: Number },
    noofFloor: { type: Number },
    attached: { type: String },
    westernToilet: { type: String },
    furnished: { type: String },
    carParking: { type: String },
    lift: { type: String },
    electricity: { type: String },
    facing: { type: String }
}, { timestamps: true })

const PDetails = mongoose.model('propertydetails', propertyDetails)

module.exports = PDetails