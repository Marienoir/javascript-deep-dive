const UserModel = require("../models/UserModel");
const UserAvailabilityModel = require("../models/UserAvailabilityModel");

const UserRepository = () => {
    const findUserByUsername = async (username) => {
        return UserModel.findOne({ username: username });
    };

    const getAllPendingUserAvailability = async (userId) => {
        return UserAvailabilityModel.find({ userId, status: "pending" });
    };

    const getAllPendingAvailabilityById = async (userAvailabilityId) => {
        return UserAvailabilityModel.findOne({
            _id: userAvailabilityId,
            status: "pending",
        });
    };

    return {
        findUserByUsername,
        getAllPendingUserAvailability,
        getAllPendingAvailabilityById,
    };
};
module.exports = UserRepository();
