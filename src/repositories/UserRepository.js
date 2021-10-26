const UserModel = require("../models/UserModel");
const UserAvailabilityModel = require("../models/UserAvailabilityModel");

const UserRepository = () => {
    const findUserByUserName = async (username) => {
        return UserModel.findOne({username: username});
    }
    const getAllPendingUserAvailabity = async (userId) => {
        return UserAvailabilityModel.find({userId, status:"pending"})
    }
    return {
        findUserByUserName,
        getAllPendingUserAvailabity
    }
}
module.exports = UserRepository()