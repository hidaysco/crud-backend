const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    status:{
        type: String,
        require: true
    },
    role:{
        type: String,
        require: true
    }
})

module.exports = User = mongoose.model('users', userSchema)