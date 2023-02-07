const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationInfo = new Schema({
    email: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: String },
    pincode: { type: Number },
    address: { type: String },
    landmark: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
}, { timestamps: true })

const LInfo = mongoose.model('Location', locationInfo)

module.exports = LInfo