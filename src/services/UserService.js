const UserModel = require("../models/UserModel");
const UserAvailabilityModel = require("../models/UserAvailabilityModel");
const UserRepository = require("../repositories/UserRepository")

const UserService = () => {
    const addUser = async (postRequestData) => {
        let newUser = new UserModel(postRequestData);
        await newUser.save()
    }

    const setDate = async (username, date) => {
        const user = await UserRepository.findUserByUsername(username)
        if (!user) {
            throw new Error('Cannot perform this request')
        }

        let newDate = new UserAvailabilityModel({
            date: date,
            userId: user._id
        });
        await newDate.save()
    }

    const getAllPendingAppointments = async (username) => {
        const user = await UserRepository.findUserByUsername(username)
        if (!user) {
            throw new Error('Cannot perform this request')
        }

        return await UserRepository.getAllPendingUserAvailability(user._id);
    }

    return {
        addUser,
        setDate,
        getAllPendingAppointments
    }
}

module.exports = UserService