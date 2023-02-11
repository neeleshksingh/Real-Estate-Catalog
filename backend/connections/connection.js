const mongoose = require('mongoose')
const { uri } = require('../keys')
mongoose.set(`strictQuery`, true)
async function getConnection() {
    await mongoose.connect(uri).then(() => {
        console.log('database connected successfuly');

    })
}
module.exports = getConnection