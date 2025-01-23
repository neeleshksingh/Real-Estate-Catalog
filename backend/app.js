const express = require('express')
const connection = require('./connections/connection')
const userRoutes = require('./routes/property')
const cors = require('cors')
const getroutes = require('./routes/getroutes')
connection()

const app = express()

app.use(cors());
app.use(userRoutes);
app.use('/get', getroutes);

app.get("/", (req, res) => {
    res.send("API IS WORKING")
});

app.get("*", (req, res) => {
    res.status(404).send("API IS NOT FOUND");
});

app.listen(3016, () => { console.log("Listening on port 3016") });