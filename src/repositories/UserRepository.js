const UserModel = require("../models/UserModel");
const UserAvailabilityModel = require("../models/UserAvailabilityModel");

const UserRepository = () => {
  const findUserByUserName = async (username) => {
    return UserModel.findOne({ username: username });
  };
  const getAllPendingUserAvailability = async (userId) => {
    return UserAvailabilityModel.find({ userId, status: "pending" });
  };
  const getAllPendingAvailabilityById = async (userAvailabilityId) => {
    const userAvailability = await UserAvailabilityModel.findOne({
      _id: userAvailabilityId,
      status: "pending",
    });
    return userAvailability;
  };
  return {
    findUserByUserName,
    getAllPendingUserAvailability,
    getAllPendingAvailabilityById,
  };
};
module.exports = UserRepository();
