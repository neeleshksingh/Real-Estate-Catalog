const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema.Types;

const basicInfoSchema = new Schema({
    propertyType: { type: String, required: true },
    mobile: { type: String },
    area: { type: Number },
    views: { type: Number, default: Math.floor(Math.random() * 100) },
    ppd: { type: String, set: function(value) {
        return 'PPD1' + value;
    } },
    user: { type: ObjectId, ref: 'User', required: false }
}, { timestamps: true });

const BInfo = mongoose.model('Basic', basicInfoSchema)

module.exports = BInfo