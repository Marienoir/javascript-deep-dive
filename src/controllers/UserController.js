const userService = require('../services/UserService')

const registerUser = async (req, res) => {
    const result = await userService.addUser(req.body);
    return res.status(201).json({
        success: true,
        message: result
    })
}

const setFreeDate = async () => {
    // To Dos
}

const getAllScheduledAppointments = async () => {
    // To Dos
}

module.exports = {
    registerUser,
    setFreeDate,
    getAllScheduledAppointments
}