const User = require('../models/User')

exports.getUsers = async function getUsers(req, res) {
    const users = await User.find()
    res.json(users)
}
exports.addUser = async function (req,res){
    const {name,nickName,lastName} = req.body
    console.log(name,nickName,lastName)
    const user = new User({name,nickName,lastName})
    await user.save()
    res.send('added users')
}
exports.deleteUser = async function (req,res){
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.send('deleted users')
}
exports.updateuser = async function (req,res){
    const {id} = req.params
    const {name,nickName,lastName} = req.body
    await User.findByIdAndUpdate(id,{name,nickName,lastName})
    res.send('updated users')
}



/* const getName = () => {
    return 'Jim';
};
exports.getName = () => {
    return 'Jim';
};
class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getUserStats() {
        return `
            Name: ${this.name}
            Age: ${this.age}
            Email: ${this.email}
        `;
    }
}

module.exports = User;
exports.getName = getName;
const dateOfBirth = '12.01.1982';
exports.dob = dateOfBirth;
exports.dob = '12.01.1982'; */