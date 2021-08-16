const mongoose= require('mongoose')
const {Schema} = require('mongoose')

const UserSchema = new Schema({
    name:String,
    lastName:String,
    nickName:String
})
module.exports = mongoose.model('User',UserSchema)