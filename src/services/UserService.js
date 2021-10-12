const UserModel = require("../models/UserModel");
const userRepository = require('../repositories/UserRepository')


const addUser = async (postRequestData) => {
    let newUser = new UserModel(postRequestData);
    await newUser.save()
    return 'user saved successfully';
}

module.exports = {
    addUser
}