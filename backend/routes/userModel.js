const mongoose = require("mongoose")

const user = new mongoose.Schema({
   username: String,
   password: String,
   email: String,
   isDeleted: Boolean,
   date: Date
})

module.exports = mongoose.model("User",user)