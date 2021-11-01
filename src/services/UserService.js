const UserModel = require("../models/UserModel");
const UserAvailabilityModel = require("../models/UserAvailabilityModel");
const UserRepository = require("../repositories/UserRepository");

const UserService = () => {
    const addUser = async (postRequestData) => {
        const { email } = postRequestData;
        // check if user already exists in the data base
        const userExists = await UserRepository.findUserByEmail(email);
        if (userExists) {
            throw new Error("User already exists");
        }
        let newUser = new UserModel(postRequestData);
        await newUser.save();
    };

    const setDate = async (username, date) => {
        const user = await UserRepository.findUserByUsername(username);
        if (!user) {
            throw new Error("Cannot perform this request");
        }

        const checkIfRecordExists = await UserRepository.checkAvailabilityStatus(
            date,
            user._id,
            "pending"
        );

        if (checkIfRecordExists) {
            throw new Error(
                "You can't set date twice in a day as your current date status is still pending"
            );
        }

        let newDate = new UserAvailabilityModel({
            date: date,
            userId: user._id,
        });
        await newDate.save();
    };

    const getAllPendingAppointments = async (username) => {
        const user = await UserRepository.findUserByUsername(username);
        if (!user) {
            throw new Error("Cannot perform this request");
        }

        return await UserRepository.getAllPendingUserAvailability(user._id);
    };

    return {
        addUser,
        setDate,
        getAllPendingAppointments,
    };
};

module.exports = UserService;
