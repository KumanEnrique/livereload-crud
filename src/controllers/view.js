const User = require('../models/User')

exports.getUsers = async function(req,res){
    const users = await User.find()
    res.render('list',{users})
}
exports.formUser = function(req,res){
    res.render('form')
}
exports.addUser = async function(req,res){
    const {name,nickName,lastName} = req.body
    console.log(name,nickName,lastName)
    const user = new User({name,nickName,lastName})
    await user.save()
    res.redirect('/list')
}
exports.deleteUser = async function(req,res){
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.redirect('/list')
}
exports.updateUser = async function(req,res){
    const {id} = req.params
    const {name,nickName,lastName} = req.body
    await User.findByIdAndUpdate(id,{name,nickName,lastName})
    res.redirect('/list')
}