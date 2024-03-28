const { model } = require('mongoose');
const UserModel = require('./model');
const bcrypt = require('bcrypt');

async function addUser (user){
    if (Object.entries(user).length === 0) {
        console.log('User cannot be empty');
        reject('There is no user')
    }

    const hash = await bcrypt.hash(user.password, 10);
    
    const newUser = await UserModel.create({
        ...user,
        role: "admin",
        password: hash
    })
    return newUser
}

async function listUsers(){
    const users = await UserModel.find();
    console.log(users);
    return users;
}

async function findUserByEmail(email){
    const emailOfUser = await UserModel.findOne({email})
    return emailOfUser
}

module.exports = {
    addUser,
    listUsers,
    findUserByEmail
};