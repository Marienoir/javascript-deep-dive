const UserModel = require("../models/UserModel");
const UserAvailabilityModel = require("../models/UserAvailabilityModel");

const UserRepository = () => {
    const findUserByUserName = async (username) => {
        return UserModel.findOne({username: username});
    }

    return {
        findUserByUserName
    }
}
module.exports = UserRepository()