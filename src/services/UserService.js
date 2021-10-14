const UserModel = require("../models/UserModel");
const UserAvailabilityModel = require("../models/UserAvailabilityModel");

const addUser = async (postRequestData) => {
    let newUser = new UserModel(postRequestData);
    if (!await newUser.save()) {
        throw new Error('User not saved')
    }
    return 'User saved successfully';
}
const setDate = async (username, date) => {
    const user = await UserModel.findOne({username: username});
    if (!user) {
        throw new Error('Cannot perform this request')
    }

    let newDate = new UserAvailabilityModel({
        date: date,
        userId: user._id
    });
    await newDate.save()
    return 'Free date set successfully';
}

module.exports = {
    addUser,
    setDate
}