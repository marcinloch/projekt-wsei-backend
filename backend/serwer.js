const express = require("express")
const mongoose = require("mongoose")
const cr = require('./routes/createRestaurants')
const User = require('./routes/userModel')
const loginSignin = require('./routes/loginSignin')


const port = 5000

const app = express();


app.listen(port, () => console.log(`Serwer działa na porcie ${port}`))

loginSignin(app)

// setup mongoose

mongoose.connect("mongodb+srv://admin:admin@cluster0.hsckl.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Mongoose Is Connected")
})



