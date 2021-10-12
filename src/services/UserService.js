const UserModel = require("../models/UserModel");

const addUser = async (postRequestData) => {
    let newUser = new UserModel(postRequestData);
    await newUser.save()
    return 'user saved successfully';
}

module.exports = {
    addUser
}