const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    mailID: { type: String, unique: true },
    password: String,
    customId: { type: String, unique: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema)

module.exports = User