const mongoose = require('mongoose')
const { uri } = require('../keys')
mongoose.set(`strictQuery`, true)
async function getConnection() {

    const uri = `mongodb://localhost/realState`
    await mongoose.connect(uri).then(() => {
        console.log('database connected successfuly');

    })
}
module.exports = getConnection