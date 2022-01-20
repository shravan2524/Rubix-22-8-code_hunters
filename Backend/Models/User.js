const mongoose = require('mongoose');
const { Schema } = mongoose;

const user  = new Schema({
    email : String,
    name : String,
    password : String,
})

const User = mongoose.model('user', user);
module.exports = User;