const mongoose = require('mongoose')
const { string } = require('yup')

const userSchema = mongoose.Schema({
    username: {
        type:String,
        unique:true,
        require:true
    },












    
    email: {
        type:String,
        unique:true,
        require:true
    },
    password: {
        type:String,
        require:true
    },
    Location: {
        gps:String
    }
})
    const User = mongoose.models('user', userSchema)

    module.exports = User
