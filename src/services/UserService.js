const UserModel = require("../models/UserModel");
const UserAvailabilityModel = require("../models/UserAvailabilityModel");

const addUser = async (postRequestData) => {
    let newUser = new UserModel(postRequestData);
    await newUser.save()
    return 'user saved successfully';
}
const setDate = async (postRequestData) => {
    let newDate = new UserAvailabilityModel(postRequestData);
    await newDate.save()
    return 'Free Date Set successfully';
}

module.exports = {
    addUser,
    setDate
}