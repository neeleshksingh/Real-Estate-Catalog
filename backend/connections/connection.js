const mongoose = require('mongoose')
const { uri } = require('../keys')
mongoose.set(`strictQuery`, true)
async function getConnection() {
<<<<<<< HEAD
    const uri = `mongodb://localhost/realState`
    await mongoose.connect(uri, (err)=>{
        if(err){
            console.log("Connection to mongoDB failed");
        }
        else{
            console.log("Connected to MongoDB successfully");
        }
=======
    await mongoose.connect(uri).then(() => {
        console.log('database connected successfuly');
>>>>>>> 2e0e313be25361aa75cbee6852a31832b566f931
    })
}
module.exports = getConnection